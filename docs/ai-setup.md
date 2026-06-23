# "Ask a Ranger" — RAG setup

The AI assistant and semantic search are powered by:

- **Voyage AI** — text embeddings (`voyage-3`, 1024-dim)
- **Supabase Postgres + pgvector** — vector store
- **Claude Haiku 4.5** — grounded answer generation with Citations
- **Vercel Serverless (Edge) Functions** — `api/chat.ts`, `api/search.ts`

```
Browser ──► /api/chat ──► Voyage (embed) ──► Supabase (match_park_chunks)
                                   └──► Claude Haiku 4.5 (documents + citations, streamed)
```

## One-time setup

### 1. Create accounts & keys (all free to start)

- **Supabase**: new project → Database → Extensions → enable `vector`.
  Copy **Project URL** and the **service-role key** (Settings → API).
- **Voyage AI**: sign up at voyageai.com → create an API key.
- **Anthropic API**: console.anthropic.com → add ~$5 credit and a spend cap →
  create an API key. (This is separate from a Claude.ai subscription.)

### 2. Configure env vars

Copy `.env.example` to `.env.local` and fill in:

```
ANTHROPIC_API_KEY=...
VOYAGE_API_KEY=...
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

`.env.local` is gitignored. Add the same four variables in the Vercel
dashboard (Project → Settings → Environment Variables) for production.

### 3. Create the database schema

In the Supabase SQL editor, run [`supabase/schema.sql`](../supabase/schema.sql).
It creates the `park_chunks` table, an HNSW index, and the `match_park_chunks()`
search function.

### 4. Ingest the park data

```bash
npm run ingest
```

This chunks every park's data, embeds the chunks with Voyage, and loads them
into Supabase. Re-run it whenever you add or edit a park.

## Local development

`vite dev` does **not** serve the `/api` functions. To test the assistant
locally, use the Vercel CLI:

```bash
npm i -g vercel
vercel dev        # serves the app + /api functions, reads .env.local
```

Or just deploy — the functions run automatically on Vercel.

## Files

```
api/chat.ts            # RAG chat endpoint (SSE streaming + citations)
api/search.ts          # semantic park search endpoint
lib/voyage.ts          # Voyage embeddings client (shared)
scripts/ingest.ts      # corpus → embeddings → Supabase
supabase/schema.sql    # table + index + match function
src/components/ranger/RangerChat.tsx  # the chat widget
```

## Cost

At ~200 hits/week: a few dollars/month on Haiku 4.5; Voyage + Supabase free
tiers. Swap the model in `api/chat.ts` (`MODEL`) to `claude-sonnet-4-6` for more
polish at higher cost.
