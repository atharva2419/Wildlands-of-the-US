/**
 * Ingestion pipeline: turn each park's structured data into embedded text
 * chunks and load them into Supabase (pgvector).
 *
 * Run locally after filling in .env.local:
 *   npm run ingest
 *
 * Re-running is idempotent — it clears and rebuilds the table.
 */
import { createClient } from "@supabase/supabase-js";
import { parks } from "../src/data/parks";
import type { Park } from "../src/types/park";
import { embed } from "../lib/voyage";

// Load server env (Node 20.12+). Vercel injects these in production instead.
try {
  (process as unknown as { loadEnvFile: (p: string) => void }).loadEnvFile(
    ".env.local",
  );
} catch {
  // fall back to ambient env (e.g. CI)
}

interface Chunk {
  park_slug: string;
  park_name: string;
  section: string;
  content: string;
  source_url: string;
}

/** Break one park into self-contained, embeddable chunks. */
function buildChunks(park: Park): Chunk[] {
  const url = `/parks/${park.slug}`;
  const P = park.name;
  const out: Chunk[] = [];
  const add = (section: string, content: string) =>
    out.push({
      park_slug: park.slug,
      park_name: park.name,
      section,
      content: content.trim(),
      source_url: url,
    });

  // Quick facts
  add(
    "facts",
    `${P} National Park, ${park.state}. Established ${park.established}. ${park.tagline} ` +
      park.stats.map((s) => `${s.label}: ${s.value}${s.note ? ` (${s.note})` : ""}.`).join(" "),
  );

  // Overview + history
  add("overview", `About ${P}: ${park.overview.join(" ")}`);
  add(
    "history",
    `History of ${P}: ` +
      park.history.map((h) => `${h.year} — ${h.title}: ${h.description}`).join(" "),
  );
  add("indigenous-history", `Indigenous history of ${P}: ${park.indigenousHistory}`);
  add("fun-facts", `Fun facts about ${P}: ${park.funFacts.join(" ")}`);

  // Wildlife — one chunk per animal
  for (const a of park.wildlife) {
    add(
      "wildlife",
      `${a.name} (${a.scientificName}) in ${P}. Conservation status: ${a.status}. ` +
        `Best seen: ${a.bestSeason}. ${a.blurb}`,
    );
  }
  add(
    "safety",
    `Safety in ${P}: ` +
      park.safetyNotes.map((s) => `${s.title}: ${s.body}`).join(" "),
  );

  // Trails — one chunk per trail
  for (const t of park.trails) {
    add(
      "trails",
      `${t.name} trail in ${P}: ${t.difficulty}, ${t.distanceMi} miles round-trip, ` +
        `${t.elevationGainFt} ft elevation gain, about ${t.estTime}. ` +
        `${t.dogFriendly ? "Dogs allowed." : "No dogs."} ${t.highlight}`,
    );
  }

  // Camping
  if (park.camping?.length) {
    add(
      "camping",
      `Camping in ${P}. ${park.campingNote ?? ""} ` +
        park.camping
          .map(
            (c) =>
              `${c.name} (${c.location}): ${c.type}, ${c.booking}, ${c.sites}, ${c.season}, ${c.fee}. ${c.highlight}`,
          )
          .join(" "),
    );
  }

  // Best time to visit
  add(
    "best-time",
    `Best time to visit ${P}: ` +
      park.bestTime
        .map((m) => `${m.month} (high ${m.highTempF}°F, ${m.crowd} crowds): ${m.note}`)
        .join(" "),
  );

  // Getting there
  const g = park.gettingThere;
  add(
    "getting-there",
    `Getting to ${P}. Nearest airports: ${g.nearestAirports
      .map((a) => `${a.name} (${a.code}, ${a.driveTime})`)
      .join(", ")}. Driving: ${g.drivingFrom
      .map((d) => `${d.city} ${d.time}`)
      .join(", ")}. Entrance fee: ${g.entranceFee}. Hours: ${g.hours} ${g.cellSignal}`,
  );

  return out;
}

async function main() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
  }
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  const chunks = parks.flatMap(buildChunks);
  console.log(`Built ${chunks.length} chunks from ${parks.length} parks.`);

  // Embed in batches (Voyage accepts up to 128 inputs per call).
  const BATCH = 100;
  const rows: (Chunk & { embedding: number[] })[] = [];
  for (let i = 0; i < chunks.length; i += BATCH) {
    const batch = chunks.slice(i, i + BATCH);
    const vectors = await embed(
      batch.map((c) => c.content),
      "document",
    );
    batch.forEach((c, j) => rows.push({ ...c, embedding: vectors[j] }));
    console.log(`Embedded ${Math.min(i + BATCH, chunks.length)}/${chunks.length}`);
  }

  // Clear and reload.
  const del = await supabase.from("park_chunks").delete().gte("id", 0);
  if (del.error) throw del.error;

  const ins = await supabase.from("park_chunks").insert(rows);
  if (ins.error) throw ins.error;

  console.log(`✓ Ingested ${rows.length} chunks into Supabase.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
