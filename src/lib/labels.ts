import type {
  ConservationStatus,
  CrowdLevel,
  TrailDifficulty,
} from "@/types/park";

export const conservationLabel: Record<ConservationStatus, string> = {
  "least-concern": "Least Concern",
  "near-threatened": "Near Threatened",
  vulnerable: "Vulnerable",
  endangered: "Endangered",
  recovering: "Recovering",
};

/** Tailwind classes for each conservation badge. */
export const conservationClass: Record<ConservationStatus, string> = {
  "least-concern": "bg-pine-100 text-pine-700",
  "near-threatened": "bg-amber-100 text-amber-800",
  vulnerable: "bg-orange-100 text-orange-800",
  endangered: "bg-red-100 text-red-700",
  recovering: "bg-sky-100 text-sky-700",
};

export const difficultyLabel: Record<TrailDifficulty, string> = {
  easy: "Easy",
  moderate: "Moderate",
  hard: "Hard",
  strenuous: "Strenuous",
};

export const difficultyClass: Record<TrailDifficulty, string> = {
  easy: "bg-pine-100 text-pine-700",
  moderate: "bg-amber-100 text-amber-800",
  hard: "bg-orange-100 text-orange-800",
  strenuous: "bg-red-100 text-red-700",
};

/** A 0–3 weight per difficulty, handy for sorting. */
export const difficultyRank: Record<TrailDifficulty, number> = {
  easy: 0,
  moderate: 1,
  hard: 2,
  strenuous: 3,
};

export const crowdLabel: Record<CrowdLevel, string> = {
  low: "Low",
  moderate: "Moderate",
  high: "High",
};

/** Bar color for the crowd calendar. */
export const crowdColor: Record<CrowdLevel, string> = {
  low: "#5e8a62",
  moderate: "#e0a23c",
  high: "#d35f23",
};
