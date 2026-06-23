-- Wildlands RAG schema. Run this once in the Supabase SQL editor.
-- Requires the pgvector extension (Database → Extensions → enable "vector").

create extension if not exists vector;

-- One row per retrievable chunk of park knowledge.
create table if not exists park_chunks (
  id          bigint generated always as identity primary key,
  park_slug   text not null,
  park_name   text not null,
  section     text not null,          -- e.g. "wildlife", "trails", "history"
  content     text not null,          -- the chunk text that gets embedded
  source_url  text not null,          -- internal link, e.g. /parks/yosemite
  embedding   vector(1024),           -- voyage-3 = 1024 dims
  created_at  timestamptz default now()
);

-- Approximate-nearest-neighbor index for cosine distance.
create index if not exists park_chunks_embedding_idx
  on park_chunks using hnsw (embedding vector_cosine_ops);

-- Cosine similarity search. Returns the closest chunks to a query embedding.
create or replace function match_park_chunks (
  query_embedding vector(1024),
  match_count int default 8
)
returns table (
  id bigint,
  park_slug text,
  park_name text,
  section text,
  content text,
  source_url text,
  similarity float
)
language sql stable
as $$
  select
    id, park_slug, park_name, section, content, source_url,
    1 - (embedding <=> query_embedding) as similarity
  from park_chunks
  order by embedding <=> query_embedding
  limit match_count;
$$;
