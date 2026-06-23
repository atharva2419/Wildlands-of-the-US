import type { Park } from "@/types/park";
import { yosemite } from "./yosemite";
import { petrifiedForest } from "./petrified-forest";
import { grandCanyon } from "./grand-canyon";
import { saguaro } from "./saguaro";
import { joshuaTree } from "./joshua-tree";

/** All parks currently in the site. Add marquee parks here as we build them. */
export const parks: Park[] = [
  yosemite,
  petrifiedForest,
  grandCanyon,
  saguaro,
  joshuaTree,
];

export const getParkBySlug = (slug: string): Park | undefined =>
  parks.find((p) => p.slug === slug);
