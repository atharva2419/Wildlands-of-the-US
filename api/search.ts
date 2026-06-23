/**
 * POST /api/search — natural-language park search.
 * Body: { query: string }
 * Returns: { results: { slug, name, score, snippet }[] }
 *
 * Embeds the query, runs a pgvector similarity search, and aggregates the best
 * matching chunks up to the park level so the map can highlight pins.
 *
 * Node.js serverless runtime (the Anthropic-free sibling of /api/chat).
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { embedOne } from "../lib/voyage.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const query = (req.body?.query ?? "") as string;
  if (!query || typeof query !== "string") {
    res.status(400).json({ error: "Missing 'query'" });
    return;
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );

  try {
    const embedding = await embedOne(query.slice(0, 1000), "query");
    const { data, error } = await supabase.rpc("match_park_chunks", {
      query_embedding: embedding,
      match_count: 30,
    });
    if (error) throw error;

    // Aggregate chunks → parks, keeping the best score and a snippet.
    const byPark = new Map<
      string,
      { slug: string; name: string; score: number; snippet: string }
    >();
    for (const row of (data ?? []) as ChunkMatch[]) {
      const existing = byPark.get(row.park_slug);
      if (!existing || row.similarity > existing.score) {
        byPark.set(row.park_slug, {
          slug: row.park_slug,
          name: row.park_name,
          score: row.similarity,
          snippet: row.content.slice(0, 160),
        });
      }
    }

    const results = [...byPark.values()]
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    res.status(200).json({ results });
  } catch (e) {
    res.status(500).json({ error: errMessage(e) });
  }
}

interface ChunkMatch {
  park_slug: string;
  park_name: string;
  content: string;
  similarity: number;
}

function errMessage(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}
