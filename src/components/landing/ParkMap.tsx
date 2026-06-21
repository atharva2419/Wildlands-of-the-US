import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { ArrowRight, MapPin } from "lucide-react";
import type { MapPoint } from "@/data/mapPoints";
import { FIPS_TO_ABBR, SKIP_LABEL } from "@/lib/stateAbbr";
import geoData from "us-atlas/states-10m.json";

interface ParkMapProps {
  points: MapPoint[];
  /** Slugs that match the active filters; non-matches are dimmed. */
  matched: Set<string>;
}

// react-simple-maps types the geography prop loosely; the import is valid TopoJSON.
const GEO = geoData as unknown as Record<string, unknown>;

export default function ParkMap({ points, matched }: ParkMapProps) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<MapPoint | null>(null);

  const preview =
    hovered ?? points.find((p) => matched.has(p.slug)) ?? points[0];

  const go = (p: MapPoint) => {
    if (p.built) navigate(`/parks/${p.slug}`);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      {/* Map */}
      <div className="relative overflow-hidden rounded-3xl border border-pine-200 bg-[#f3ead7] shadow-inner">
        {/* faint topo contour wash */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, transparent 38%, #2f5435 39%, transparent 40%), radial-gradient(circle at 70% 65%, transparent 30%, #2f5435 31%, transparent 32%)",
            backgroundSize: "260px 260px, 340px 340px",
          }}
        />
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 1080 }}
          width={980}
          height={560}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO}>
            {({ geographies, path }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#e2d7bd",
                        stroke: "#c4b48c",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#d9cba8",
                        stroke: "#c4b48c",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: { fill: "#d9cba8", outline: "none" },
                    }}
                  />
                ))}

                {/* State abbreviation labels at each state's centroid. */}
                {geographies.map((geo) => {
                  const abbr = FIPS_TO_ABBR[geo.id as string];
                  if (!abbr || SKIP_LABEL.has(geo.id as string)) return null;
                  const centroid = path.centroid(geo);
                  if (!centroid || Number.isNaN(centroid[0])) return null;
                  return (
                    <text
                      key={`label-${geo.rsmKey}`}
                      x={centroid[0]}
                      y={centroid[1]}
                      textAnchor="middle"
                      dominantBaseline="central"
                      pointerEvents="none"
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontSize: 9,
                        fontWeight: 600,
                        fill: "#6b5d3e",
                        paintOrder: "stroke",
                        stroke: "#f3ead7",
                        strokeWidth: 2.4,
                        strokeLinejoin: "round",
                      }}
                    >
                      {abbr}
                    </text>
                  );
                })}
              </>
            )}
          </Geographies>

          {points.map((p) => {
            const isMatch = matched.has(p.slug);
            const isHover = hovered?.slug === p.slug;
            return (
              <Marker
                key={p.slug}
                coordinates={[p.coordinates.lng, p.coordinates.lat]}
                onMouseEnter={() => setHovered(p)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => go(p)}
                style={{
                  default: { cursor: p.built ? "pointer" : "default" },
                  hover: { cursor: p.built ? "pointer" : "default" },
                  pressed: { outline: "none" },
                }}
              >
                <g
                  className="transition-opacity"
                  opacity={isMatch ? 1 : 0.18}
                  pointerEvents={isMatch ? "auto" : "none"}
                >
                  {isMatch && (
                    <circle
                      r={isHover ? 13 : 9}
                      fill="#d35f23"
                      opacity={0.25}
                      className="origin-center"
                    >
                      <animate
                        attributeName="r"
                        values="7;13;7"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.35;0;0.35"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  <circle
                    r={isHover ? 6 : 4.5}
                    fill={p.built ? "#b9481a" : "#7a6a48"}
                    stroke="#f3ead7"
                    strokeWidth={1.5}
                    className="transition-all"
                  />
                </g>
              </Marker>
            );
          })}
        </ComposableMap>

        <div className="pointer-events-none absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-pine-700/60">
          {points.filter((p) => matched.has(p.slug)).length} parks shown
        </div>
      </div>

      {/* Preview panel */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <AnimatePresence mode="wait">
          {preview && (
            <motion.div
              key={preview.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              onClick={() => go(preview)}
              className={`overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-pine-100 ${
                preview.built ? "cursor-pointer" : ""
              }`}
            >
              <div className="relative h-44">
                <img
                  src={preview.thumb}
                  alt={preview.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-sand-50">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-sand-100/90">
                    <MapPin className="h-3.5 w-3.5" /> {preview.state}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">
                    {preview.name}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-pine-700">{preview.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {preview.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-pine-100 px-2 py-0.5 text-[11px] font-semibold text-pine-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {preview.built ? (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-canyon-600">
                    Explore the park <ArrowRight className="h-4 w-4" />
                  </span>
                ) : (
                  <span className="mt-4 inline-block rounded-full bg-sand-200 px-3 py-1 text-xs font-semibold text-pine-600">
                    Full guide coming soon
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="mt-3 px-1 text-center text-xs text-pine-500 lg:text-left">
          Hover a pin to preview · click to explore
        </p>
      </div>
    </div>
  );
}
