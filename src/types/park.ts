/**
 * The shape of a single national park. Every park in the site fills out this
 * contract, so the page template can render any of them identically.
 */

export type ConservationStatus =
  | "least-concern"
  | "near-threatened"
  | "vulnerable"
  | "endangered"
  | "recovering";

export type TrailDifficulty = "easy" | "moderate" | "hard" | "strenuous";

export type CrowdLevel = "low" | "moderate" | "high";

export interface ParkStat {
  label: string;
  value: string;
  /** Optional context shown under the value, e.g. "ranked #3 by size". */
  note?: string;
}

export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
}

export interface Animal {
  name: string;
  scientificName: string;
  status: ConservationStatus;
  /** Short blurb: where/when you're likely to see it. */
  blurb: string;
  bestSeason: string;
  image: string;
}

export interface SafetyNote {
  title: string;
  body: string;
}

export interface Trail {
  name: string;
  difficulty: TrailDifficulty;
  /** Round-trip distance in miles. */
  distanceMi: number;
  /** Elevation gain in feet. */
  elevationGainFt: number;
  /** Estimated time, human readable, e.g. "3–5 hrs". */
  estTime: string;
  dogFriendly: boolean;
  highlight: string;
  /** Sampled elevation profile (ft) used to draw the sparkline. */
  elevationProfile: number[];
}

export interface MonthInfo {
  /** Three-letter month label, e.g. "Jan". */
  month: string;
  crowd: CrowdLevel;
  highTempF: number;
  lowTempF: number;
  note: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  /** Optional photo credit. */
  credit?: string;
}

export interface GettingThere {
  nearestAirports: { code: string; name: string; driveTime: string }[];
  drivingFrom: { city: string; time: string; miles: number }[];
  entranceFee: string;
  /** e.g. "Year-round, 24 hours" */
  hours: string;
  cellSignal: string;
  directionsUrl: string;
}

export interface Park {
  /** URL-safe identifier, e.g. "yosemite". */
  slug: string;
  name: string;
  state: string;
  /** Real geographic coordinates — used later by the interactive map. */
  coordinates: { lat: number; lng: number };
  /** Short punchy tagline for the hero. */
  tagline: string;
  established: string;
  /** Earthy accent color (hex) that themes this park's page. */
  themeColor: string;
  heroImage: string;
  /** Filter tags, e.g. ["Mountain", "Waterfalls", "Stargazing"]. */
  tags: string[];

  stats: ParkStat[];
  overview: string[];
  history: HistoryEvent[];
  indigenousHistory: string;
  funFacts: string[];

  wildlife: Animal[];
  safetyNotes: SafetyNote[];

  trails: Trail[];
  bestTime: MonthInfo[];
  gettingThere: GettingThere;
  gallery: GalleryImage[];
}
