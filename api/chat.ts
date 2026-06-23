/**
 * POST /api/chat — the "Ask a Ranger" RAG assistant.
 * Body: { messages: { role: "user" | "assistant", content: string }[] }
 * Streams Server-Sent Events:
 *   data: { "type": "token", "text": "..." }
 *   data: { "type": "done", "citations": [{ park, url, section }] }
 *   data: { "type": "error", "message": "..." }
 *
 * Retrieves the most relevant park chunks for the latest question and answers
 * with Claude Haiku 4.5, grounding every claim via Anthropic's Citations.
 *
 * Node.js serverless runtime (the Anthropic SDK needs node:fs / node:path,
 * which the Edge runtime lacks). Streams via res.write().
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import { embedOne } from "../lib/voyage.js";

const MODEL = "claude-haiku-4-5";
const TOP_K = 8;

const SYSTEM = `You are "Ranger," a warm, knowledgeable guide to the U.S. National Parks for the Wildlands website.

Answer the user's question using ONLY the information in the provided source documents. Cite the sources you use.
- If the sources don't contain the answer, say you don't have that detail yet and invite them to explore the parks on the site — do not guess fees, trail stats, or wildlife facts.
- Be concise and friendly, like a ranger at a visitor center. A few sentences is usually plenty.
- When relevant, mention which park you're referring to by name.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
interface ChunkMatch {
  park_slug: string;
  park_name: string;
  section: string;
  content: string;
  source_url: string;
  similarity: number;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const messages = (req.body?.messages ?? []) as ChatMessage[];
  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "Missing 'messages'" });
    return;
  }
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser) {
    res.status(400).json({ error: "No user message" });
    return;
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // Retrieve relevant chunks for the latest question.
  let chunks: ChunkMatch[] = [];
  try {
    const embedding = await embedOne(lastUser.content.slice(0, 1000), "query");
    const { data, error } = await supabase.rpc("match_park_chunks", {
      query_embedding: embedding,
      match_count: TOP_K,
    });
    if (error) throw error;
    chunks = (data ?? []) as ChunkMatch[];
  } catch (e) {
    res.status(500).json({ error: errMessage(e) });
    return;
  }

  // Source documents (with citations) + the conversation.
  const documents = chunks.map((c) => ({
    type: "document" as const,
    source: {
      type: "text" as const,
      media_type: "text/plain" as const,
      data: c.content,
    },
    title: `${c.park_name} — ${c.section}`,
    citations: { enabled: true },
  }));
  const history = messages
    .slice(0, -1)
    .map((m) => ({ role: m.role, content: m.content }));
  const userContent = [
    ...documents,
    { type: "text" as const, text: lastUser.content },
  ];

  // Stream Server-Sent Events.
  res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  const send = (obj: unknown) => res.write(`data: ${JSON.stringify(obj)}\n\n`);

  try {
    const stream = anthropic.messages.stream({
      model: MODEL,
      max_tokens: 1024,
      system: SYSTEM,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      messages: [...history, { role: "user", content: userContent as any }],
    });

    const cited = new Map<
      string,
      { park: string; url: string; section: string }
    >();

    for await (const event of stream) {
      if (event.type !== "content_block_delta") continue;
      const delta = event.delta as {
        type: string;
        text?: string;
        citation?: { document_index: number };
      };
      if (delta.type === "text_delta" && delta.text) {
        send({ type: "token", text: delta.text });
      } else if (delta.type === "citations_delta" && delta.citation) {
        const chunk = chunks[delta.citation.document_index];
        if (chunk) {
          cited.set(chunk.source_url, {
            park: chunk.park_name,
            url: chunk.source_url,
            section: chunk.section,
          });
        }
      }
    }

    send({ type: "done", citations: [...cited.values()] });
  } catch (e) {
    send({ type: "error", message: errMessage(e) });
  } finally {
    res.end();
  }
}

function errMessage(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}
