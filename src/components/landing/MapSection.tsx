import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { FILTER_TAGS, mapPoints } from "@/data/mapPoints";
import ParkMap from "./ParkMap";

export default function MapSection() {
  const [active, setActive] = useState<Set<string>>(new Set());

  const toggle = (tag: string) =>
    setActive((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });

  // A point matches when it carries every selected tag (AND semantics).
  const matched = useMemo(() => {
    const set = new Set<string>();
    for (const p of mapPoints) {
      const ok =
        active.size === 0 || [...active].every((t) => p.tags.includes(t));
      if (ok) set.add(p.slug);
    }
    return set;
  }, [active]);

  const visible = mapPoints.filter((p) => matched.has(p.slug));

  return (
    <section id="map" className="bg-sand-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-canyon-500">
          Explore
        </div>
        <h2 className="text-3xl font-bold text-pine-900 sm:text-4xl">
          Find Your Park
        </h2>
        <p className="mt-3 max-w-2xl text-pine-700">
          Every pin sits at its real coordinates. Filter by what you're chasing —
          peaks, canyons, dark skies — then dive in.
        </p>

        {/* Filter chips */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-1 inline-flex items-center gap-1.5 text-sm font-semibold text-pine-600">
            <SlidersHorizontal className="h-4 w-4" /> Filter:
          </span>
          {FILTER_TAGS.map((tag) => {
            const on = active.has(tag);
            return (
              <button
                key={tag}
                onClick={() => toggle(tag)}
                aria-pressed={on}
                className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                  on
                    ? "bg-canyon-600 text-sand-50"
                    : "bg-pine-100 text-pine-700 hover:bg-pine-200"
                }`}
              >
                {tag}
              </button>
            );
          })}
          {active.size > 0 && (
            <button
              onClick={() => setActive(new Set())}
              className="ml-1 text-sm font-semibold text-pine-500 underline-offset-2 hover:underline"
            >
              Clear
            </button>
          )}
        </div>

        {/* Map (desktop / tablet) */}
        <div className="mt-8 hidden md:block">
          <ParkMap points={mapPoints} matched={matched} />
        </div>

        {/* Card list (mobile) */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
          {visible.map((p) => {
            const card = (
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pine-100">
                <img
                  src={p.thumb}
                  alt={p.name}
                  className="h-36 w-full object-cover"
                />
                <div className="p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-canyon-600">
                    {p.state}
                  </div>
                  <h3 className="text-lg font-bold text-pine-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-pine-600">{p.tagline}</p>
                  {p.built ? (
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-canyon-600">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="mt-2 inline-block text-xs font-semibold text-pine-400">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            );
            return p.built ? (
              <Link key={p.slug} to={`/parks/${p.slug}`}>
                {card}
              </Link>
            ) : (
              <div key={p.slug}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
