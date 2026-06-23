/**
 * Lightweight pin data for the interactive U.S. map. Every marquee park gets a
 * geographically accurate point here; only those with a full data file (and
 * `built: true`) route to a complete park page — the rest show "coming soon."
 */

export interface MapPoint {
  slug: string;
  name: string;
  state: string;
  /** Real coordinates, projected through geoAlbersUsa on the map. */
  coordinates: { lat: number; lng: number };
  tagline: string;
  thumb: string;
  /** Filter categories — must overlap with FILTER_TAGS below. */
  tags: string[];
  /** True once a full <ParkPage /> data file exists. */
  built?: boolean;
}

const thumb = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=640&q=80`;

/** The chips shown above the map. Keep in sync with point tags. */
export const FILTER_TAGS = [
  "Mountain",
  "Waterfalls",
  "Desert",
  "Canyon",
  "Coastal",
  "Volcanic",
  "Forest",
  "Stargazing",
] as const;

export const mapPoints: MapPoint[] = [
  {
    slug: "yosemite",
    name: "Yosemite",
    state: "California",
    coordinates: { lat: 37.8651, lng: -119.5383 },
    tagline: "Granite cathedrals and thundering falls.",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/960px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg",
    tags: ["Mountain", "Waterfalls", "Stargazing", "Forest"],
    built: true,
  },
  {
    slug: "petrified-forest",
    name: "Petrified Forest",
    state: "Arizona",
    coordinates: { lat: 34.91, lng: -109.8068 },
    tagline: "A rainbow desert of 225-million-year-old stone trees.",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Old_Bridge_in_Painted_Desert-_Petrified_Forest_National_Park_%2816589902487%29.jpg/960px-Old_Bridge_in_Painted_Desert-_Petrified_Forest_National_Park_%2816589902487%29.jpg",
    tags: ["Desert", "Stargazing"],
    built: true,
  },
  {
    slug: "saguaro",
    name: "Saguaro",
    state: "Arizona",
    coordinates: { lat: 32.2967, lng: -111.1666 },
    tagline: "A forest of giant cacti guarding the Sonoran Desert.",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Saguaro_National_Park_East%2C_Arizona%2C_USA_2024_5.jpg/960px-Saguaro_National_Park_East%2C_Arizona%2C_USA_2024_5.jpg",
    tags: ["Desert", "Stargazing"],
    built: true,
  },
  {
    slug: "yellowstone",
    name: "Yellowstone",
    state: "Wyoming",
    coordinates: { lat: 44.428, lng: -110.5885 },
    tagline: "Geysers, hot springs, and roaming bison.",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Grand_Prismatic_Spring_--_2022_--_2514.jpg/960px-Yellowstone_National_Park_%28WY%2C_USA%29%2C_Grand_Prismatic_Spring_--_2022_--_2514.jpg",
    tags: ["Mountain", "Volcanic", "Forest", "Stargazing"],
  },
  {
    slug: "grand-canyon",
    name: "Grand Canyon",
    state: "Arizona",
    coordinates: { lat: 36.1069, lng: -112.1129 },
    tagline: "A mile-deep chasm a billion years in the making.",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Grand_Canyon_South_Rim_at_Sunset.jpg/960px-Grand_Canyon_South_Rim_at_Sunset.jpg",
    tags: ["Canyon", "Desert", "Stargazing"],
    built: true,
  },
  {
    slug: "zion",
    name: "Zion",
    state: "Utah",
    coordinates: { lat: 37.2982, lng: -113.0263 },
    tagline: "Crimson cliffs and slot-canyon narrows.",
    thumb: thumb("1542401886-65d6c61db217"),
    tags: ["Canyon", "Desert", "Mountain"],
  },
  {
    slug: "arches",
    name: "Arches",
    state: "Utah",
    coordinates: { lat: 38.7331, lng: -109.5925 },
    tagline: "Over 2,000 natural stone arches.",
    thumb: thumb("1546156929-a4c0ac411f47"),
    tags: ["Desert", "Canyon", "Stargazing"],
  },
  {
    slug: "grand-teton",
    name: "Grand Teton",
    state: "Wyoming",
    coordinates: { lat: 43.7904, lng: -110.6818 },
    tagline: "Jagged peaks rising straight from the valley.",
    thumb: thumb("1605469330960-e0a35e58e8c2"),
    tags: ["Mountain", "Forest", "Stargazing"],
  },
  {
    slug: "glacier",
    name: "Glacier",
    state: "Montana",
    coordinates: { lat: 48.7596, lng: -113.787 },
    tagline: "Alpine lakes and the Going-to-the-Sun Road.",
    thumb: thumb("1556881286-fc6915169721"),
    tags: ["Mountain", "Waterfalls", "Forest"],
  },
  {
    slug: "rocky-mountain",
    name: "Rocky Mountain",
    state: "Colorado",
    coordinates: { lat: 40.3428, lng: -105.6836 },
    tagline: "Tundra, elk, and peaks above 14,000 feet.",
    thumb: thumb("1486870591958-9b9d0d1dda99"),
    tags: ["Mountain", "Forest", "Stargazing"],
  },
  {
    slug: "olympic",
    name: "Olympic",
    state: "Washington",
    coordinates: { lat: 47.8021, lng: -123.6044 },
    tagline: "Rainforest, glaciers, and wild coastline.",
    thumb: thumb("1501785888041-af3ef285b470"),
    tags: ["Coastal", "Forest", "Mountain", "Waterfalls"],
  },
  {
    slug: "acadia",
    name: "Acadia",
    state: "Maine",
    coordinates: { lat: 44.3386, lng: -68.2733 },
    tagline: "Where the Atlantic meets granite shores.",
    thumb: thumb("1507692049790-de58290a4334"),
    tags: ["Coastal", "Forest", "Mountain"],
  },
  {
    slug: "great-smoky-mountains",
    name: "Great Smoky Mountains",
    state: "Tennessee",
    coordinates: { lat: 35.6118, lng: -83.4895 },
    tagline: "Misty ridgelines and the most-visited park.",
    thumb: thumb("1465311440653-ba9b1d9b0f5b"),
    tags: ["Mountain", "Forest", "Waterfalls"],
  },
  {
    slug: "joshua-tree",
    name: "Joshua Tree",
    state: "California",
    coordinates: { lat: 33.8734, lng: -115.901 },
    tagline: "Twisted trees under some of the darkest skies.",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Joshua_Tree_Park_approaching_thunderstorm_02_2013.jpg/960px-Joshua_Tree_Park_approaching_thunderstorm_02_2013.jpg",
    tags: ["Desert", "Stargazing"],
    built: true,
  },
  {
    slug: "denali",
    name: "Denali",
    state: "Alaska",
    coordinates: { lat: 63.1148, lng: -151.1926 },
    tagline: "North America's highest peak and vast tundra.",
    thumb: thumb("1518803194621-27188ba362c9"),
    tags: ["Mountain", "Forest", "Stargazing"],
  },
  {
    slug: "hawaii-volcanoes",
    name: "Hawaiʻi Volcanoes",
    state: "Hawaii",
    coordinates: { lat: 19.4194, lng: -155.2885 },
    tagline: "Active volcanoes and glowing lava lakes.",
    thumb: thumb("1559825481-12a05cc00344"),
    tags: ["Volcanic", "Coastal"],
  },
  {
    slug: "everglades",
    name: "Everglades",
    state: "Florida",
    coordinates: { lat: 25.2866, lng: -80.8987 },
    tagline: "A slow river of grass teeming with life.",
    thumb: thumb("1535909339361-7c8d2d3f3a3c"),
    tags: ["Coastal", "Forest"],
  },
];
