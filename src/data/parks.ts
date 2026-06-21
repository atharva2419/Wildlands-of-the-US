import type { Park } from "@/types/park";
import { yosemite } from "./yosemite";

/** All parks currently in the site. Add marquee parks here as we build them. */
export const parks: Park[] = [yosemite];

export const getParkBySlug = (slug: string): Park | undefined =>
  parks.find((p) => p.slug === slug);
