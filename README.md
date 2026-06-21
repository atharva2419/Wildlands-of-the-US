# Wildlands — U.S. National Parks

An interactive, visually rich guide to the U.S. National Parks: a cinematic
landing page with a geographically accurate map of the country, and deep,
data-driven pages for each park. Built as a full-stack-leaning front-end
portfolio project.

## Features

### Landing page
- **Cinematic hero** with parallax scroll, an animated headline, and count-up stats.
- **Interactive U.S. map** (`react-simple-maps` + `d3-geo`, `geoAlbersUsa`
  projection) with **geographically accurate pins** — Alaska & Hawaii included
  via insets. Hover for a live preview; click to open a park.
- **Filter chips** (Mountain, Canyon, Desert, Coastal, Stargazing, …) that
  dim non-matching pins.
- **State abbreviation labels** placed at each state's centroid.
- Map gracefully collapses to a **searchable card grid** on mobile.
- A featured-parks grid and a closing "legacy" stats band.

### Park pages
Every park is rendered from a single typed `Park` object, so the template
scales to any park. Each page includes:
- **Cinematic hero** with parallax and photo attribution.
- **Animated stat strip** summarizing the park at a glance.
- **Tabbed sections** (the Camping tab only appears when a park has camping):
  - **Overview** — prose intro, an indigenous-history callout, a history
    timeline, and fun facts.
  - **Wildlife** — species cards with conservation-status badges + safety notes.
  - **Trails** — sortable/filterable table with elevation-profile sparklines
    and an **AllTrails** link per trail.
  - **Camping** — campsite cards with booking/permit badges, location maps
    links, and reserve links (handles parks with no developed campgrounds).
  - **Best Time** — interactive 12-month crowd & temperature chart.
  - **How to Reach** — airports, drive times, fees, hours, directions.
  - **Gallery** — 3×3 masonry with a keyboard-navigable lightbox.

### Throughout
- **Real, openly-licensed imagery** from Wikimedia Commons, with attribution.
- Graceful image fallbacks, `prefers-reduced-motion` support, responsive
  layouts, and route-level code splitting.

## Parks included

Fully built: **Yosemite**, **Grand Canyon**, **Saguaro**, **Petrified Forest**.
Additional marquee parks appear on the map as pins and join the site as their
data files are added.

## Tech Stack

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS v4** for styling
- **React Router** for routing + code splitting
- **react-simple-maps / d3-geo** + `us-atlas` for the map
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
  types/park.ts            # the Park + Campsite data contract
  data/                    # one file per park + registry + map-pin data
  lib/                     # label/color maps, state abbreviations
  components/
    ui/                    # SmartImage, Badge, Lightbox, CountUp, …
    landing/               # Navbar, hero, ParkMap, MapSection, FeaturedParks
    park/                  # ParkHero, StatStrip, ParkTabs
      tabs/                # the tab panels (Overview, Wildlife, Trails, …)
  pages/                   # Landing, ParkPage, ParkRoute, NotFound
scripts/fetch-images.mjs   # pulls openly-licensed images from Wikimedia Commons
```

## Adding a Park

1. Run `node scripts/fetch-images.mjs` to source openly-licensed images
   (9 gallery images per park, plus hero and wildlife shots) with attribution.
2. Create `src/data/<slug>.ts` exporting a `Park` object.
3. Register it in `src/data/parks.ts`, and add/flip its pin in
   `src/data/mapPoints.ts` (`built: true`).

`<ParkPage />` renders everything else.

## Roadmap

- [ ] More marquee parks (data files for the existing map pins)
- [ ] "Compare two parks" side-by-side view
- [ ] "Find my park" quiz
- [ ] Live weather via Open-Meteo

## Notes

- Deploying to a static host (e.g. GitHub Pages) needs an SPA fallback so deep
  links like `/parks/yosemite` resolve, or switch to `HashRouter`.

> Data and imagery are for demonstration only. Plan real trips at
> [nps.gov](https://www.nps.gov).
