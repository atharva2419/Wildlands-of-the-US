# Wildlands — U.S. National Parks

An interactive, visually rich guide to the U.S. National Parks. This repo
currently ships a **fully-built park page template** (Yosemite) that every
future park reuses, with an interactive U.S. map landing page planned next.

## Highlights

- **Cinematic hero** with parallax scroll and animated entrance.
- **Animated stat strip** summarizing each park at a glance.
- **Six tabbed sections**, all driven by a single typed data model:
  - **Overview** — prose intro, indigenous history, a history timeline, fun facts.
  - **Wildlife** — species cards with conservation-status badges + safety notes.
  - **Trails** — sortable/filterable table with elevation-profile sparklines.
  - **Best Time** — interactive 12-month crowd & temperature chart.
  - **How to Reach** — airports, drive times, fees, hours, directions.
  - **Gallery** — masonry layout with a keyboard-navigable lightbox.
- Graceful image fallbacks, reduced-motion support, and responsive layouts.

## Tech Stack

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS v4** for styling
- **Framer Motion** for animation
- **Recharts** for data viz
- **lucide-react** for icons

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project Structure

```
src/
  types/park.ts          # the Park data contract
  data/                  # one file per park (yosemite.ts) + registry
  lib/labels.ts          # label + color maps for badges/charts
  components/
    ui/                  # SmartImage, Badge, Lightbox, SectionHeading
    park/                # ParkHero, StatStrip, ParkTabs
      tabs/              # the six tab panels
  pages/ParkPage.tsx     # composes a full park page from one Park object
```

## Adding a Park

1. Create `src/data/<slug>.ts` exporting a `Park` object.
2. Register it in `src/data/parks.ts`.

That's it — `<ParkPage />` renders the rest.

## Roadmap

- [ ] Landing page with geographically accurate interactive U.S. map
- [ ] Routing (`/parks/:slug`) across all marquee parks
- [ ] "Compare two parks" and "Find my park" quiz
- [ ] Live weather via Open-Meteo

> Data and imagery are for demonstration only. Plan real trips at
> [nps.gov](https://www.nps.gov).
