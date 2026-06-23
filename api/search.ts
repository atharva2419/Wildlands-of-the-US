/**
 * POST /api/search — natural-language park search.
 * Body: { query: string }
 * Returns: { results: { slug, name, score, snippet }[] }
 *
 * Embeds the query, runs a pgvector similarity search, and aggregates the best
 * matching chunks up to the park level so the map can highlight pins.
 */
import { createClient } from "@supabase/supabase-js";
import { embedOne } from "../lib/voyage.js";

// Default Node.js serverless runtime (no Edge config).

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let query = "";
  try {
    ({ query } = await req.json());
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }
  if (!query || typeof query !== "string") {
    return json({ error: "Missing 'query'" }, 400);
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

    return json({ results });
  } catch (e) {
    return json({ error: errMessage(e) }, 500);
  }
}

interface ChunkMatch {
  park_slug: string;
  park_name: string;
  content: string;
  similarity: number;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function errMessage(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}
