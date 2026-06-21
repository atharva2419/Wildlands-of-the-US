// One-off helper: pulls openly-licensed images from Wikimedia Commons for each
// image slot in the park data files, with attribution. Run: node scripts/fetch-images.mjs
// Output is a JSON map of slot-key -> { url, alt, credit } that we paste in.

const UA = "WildlandsPortfolio/1.0 (educational portfolio; contact: example@example.com)";
const BANNED = [
  "map", "diagram", "logo", "sign ", "signpost", "locator", "posing", "selfie",
  "chart", "tracks", "track ", "scat", "skull", "skeleton", "footprint",
  "range_map", "distribution", "stamp", "coin", "museum specimen", "label",
];

const SLOTS = {
  yosemite: {
    hero: { q: "Tunnel View Yosemite Valley", w: 2400, label: "Yosemite Valley from Tunnel View" },
    gallery: [
      { q: "Half Dome Yosemite Valley", w: 1600, label: "Half Dome rising above Yosemite Valley", ban: ["ansel", "monolith", "monochrome", "black and white"] },
      { q: "El Capitan Yosemite National Park", w: 1600, label: "The sheer granite face of El Capitan" },
      { q: "Upper Yosemite Falls", w: 1600, label: "Yosemite Falls plunging down the cliff" },
      { q: "Mirror Lake Yosemite reflection", w: 1600, label: "Mirror Lake reflecting the valley walls" },
      { q: "Glacier Point Yosemite valley", w: 1600, label: "The view from Glacier Point" },
      { q: "Giant sequoia Mariposa Grove", w: 1600, label: "Giant sequoias in the Mariposa Grove" },
      { q: "Tuolumne Meadows Yosemite", w: 1600, label: "Open high country at Tuolumne Meadows" },
      { q: "Bridalveil Fall Yosemite", w: 1600, label: "Bridalveil Fall in Yosemite Valley" },
    ],
    wildlife: [
      { q: "American black bear Ursus americanus", w: 900, label: "American Black Bear", ban: ["cub only", "rug", "hunting"] },
      { q: "Mule deer Odocoileus hemionus", w: 900, label: "Mule Deer" },
      { q: "Sierra Nevada bighorn sheep", w: 900, label: "Sierra Nevada Bighorn Sheep" },
      { q: "Peregrine falcon Falco peregrinus", w: 900, label: "Peregrine Falcon" },
      { q: "Bobcat Lynx rufus", w: 900, label: "Bobcat" },
      { q: "Great grey owl Strix nebulosa", w: 900, label: "Great Gray Owl" },
    ],
  },
  "petrified-forest": {
    hero: { q: "Painted Desert Petrified Forest landscape", w: 2400, label: "The Painted Desert at Petrified Forest", ban: ["inn", "building", "lodge"] },
    gallery: [
      { q: "Petrified wood log Petrified Forest National Park Arizona", w: 1600, label: "Petrified logs scattered across the desert" },
      { q: "Painted Desert Petrified Forest National Park badlands", w: 1600, label: "Banded hills of the Painted Desert", ban: ["inn", "building"] },
      { q: "Blue Mesa Petrified Forest", w: 1600, label: "The blue badlands of Blue Mesa" },
      { q: "Tepees Petrified Forest National Park", w: 1600, label: "The striped Tepees formations" },
      { q: "Newspaper Rock Petrified Forest petroglyphs", w: 1600, label: "Ancestral Puebloan petroglyphs at Newspaper Rock" },
      { q: "Agate Bridge Petrified Forest", w: 1600, label: "Agate Bridge, a petrified log spanning a wash" },
      { q: "Route 66 Petrified Forest National Park", w: 1600, label: "The historic Route 66 alignment through the park" },
      { q: "Painted Desert Inn Petrified Forest", w: 1600, label: "The historic Painted Desert Inn" },
    ],
    wildlife: [
      { q: "Pronghorn Antilocapra americana", w: 900, label: "Pronghorn" },
      { q: "Coyote Canis latrans", w: 900, label: "Coyote" },
      { q: "Common collared lizard Crotaphytus collaris", w: 900, label: "Collared Lizard" },
      { q: "Golden eagle Aquila chrysaetos", w: 900, label: "Golden Eagle" },
      { q: "Gunnison's prairie dog", w: 900, label: "Gunnison's Prairie Dog" },
      { q: "Black-tailed jackrabbit Lepus californicus", w: 900, label: "Black-tailed Jackrabbit" },
    ],
  },
};

const stripHtml = (s = "") =>
  s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

/** Commons "Artist" fields are sometimes long disclaimers — pull out a name. */
function cleanArtist(raw) {
  const s = stripHtml(raw);
  if (!s) return "Wikimedia Commons";
  if (s.length <= 50) return s;
  const paren = s.match(/\(([^)]{3,40})\)/); // e.g. "(William Crochot)"
  if (paren) return paren[1];
  const by = s.match(/\bby ([A-Z][\w.\-' ]{2,40}?)(?:[.,]| and | from |$)/);
  if (by) return by[1].trim();
  return "Wikimedia Commons";
}

async function fetchOne({ q, w, label, ban = [] }, used) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json" +
    "&generator=search&gsrnamespace=6&gsrlimit=15" +
    `&gsrsearch=${encodeURIComponent(q + " filetype:bitmap")}` +
    "&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=" + w;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  const json = await res.json();
  const pages = Object.values(json.query?.pages || {});
  pages.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

  const blocked = [...BANNED, ...ban.map((b) => b.toLowerCase())];
  for (const p of pages) {
    const title = (p.title || "");
    const lower = title.toLowerCase();
    if (!/\.(jpe?g|png)$/i.test(title)) continue;
    if (blocked.some((b) => lower.includes(b))) continue;
    if (used.has(title)) continue; // no repeats within a park
    const ii = p.imageinfo?.[0];
    if (!ii?.thumburl) continue;
    used.add(title);
    const meta = ii.extmetadata || {};
    const artist = cleanArtist(meta.Artist?.value);
    const license = stripHtml(meta.LicenseShortName?.value) || "see Commons";
    return {
      url: ii.thumburl,
      alt: label,
      credit: `${artist} · ${license} · Wikimedia Commons`,
    };
  }
  return { url: null, alt: label, credit: null, note: `NO MATCH for "${q}"` };
}

async function run() {
  const out = {};
  for (const [park, slots] of Object.entries(SLOTS)) {
    const used = new Set();
    out[park] = { hero: null, gallery: [], wildlife: [] };
    out[park].hero = await fetchOne(slots.hero, used);
    for (const g of slots.gallery) out[park].gallery.push(await fetchOne(g, used));
    for (const a of slots.wildlife) out[park].wildlife.push(await fetchOne(a, used));
  }
  console.log(JSON.stringify(out, null, 2));
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
