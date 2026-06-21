import { useState } from "react";
import { motion } from "framer-motion";
import { Thermometer, Users } from "lucide-react";
import type { Park } from "@/types/park";
import SectionHeading from "@/components/ui/SectionHeading";
import { crowdColor, crowdLabel } from "@/lib/labels";

interface Props {
  park: Park;
}

export default function BestTimeTab({ park }: Props) {
  const [active, setActive] = useState(
    new Date().getMonth() < park.bestTime.length ? new Date().getMonth() : 0,
  );
  const selected = park.bestTime[active];
  const maxTemp = Math.max(...park.bestTime.map((m) => m.highTempF));

  return (
    <div>
      <SectionHeading kicker="When to Go" title="Best Time to Visit">
        Bars show average high temperature; their color marks how busy the park
        gets. Tap a month for the details.
      </SectionHeading>

      {/* Legend */}
      <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-pine-700">
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <Users className="h-4 w-4" /> Crowds:
        </span>
        {(["low", "moderate", "high"] as const).map((c) => (
          <span key={c} className="inline-flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: crowdColor[c] }}
            />
            {crowdLabel[c]}
          </span>
        ))}
      </div>

      {/* Bar chart */}
      <div className="flex items-end justify-between gap-1.5 rounded-2xl bg-white p-5 ring-1 ring-pine-100 sm:gap-3 sm:p-8">
        {park.bestTime.map((m, i) => {
          const heightPct = (m.highTempF / maxTemp) * 100;
          const isActive = i === active;
          return (
            <button
              key={m.month}
              onClick={() => setActive(i)}
              className="group flex flex-1 flex-col items-center gap-2"
              aria-label={`${m.month}: ${m.note}`}
            >
              <span className="text-xs font-semibold text-pine-500">
                {m.highTempF}°
              </span>
              <div className="flex h-40 w-full items-end">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${heightPct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.03 }}
                  className={`w-full rounded-t-md transition-all ${
                    isActive ? "ring-2 ring-pine-900 ring-offset-2" : ""
                  } group-hover:opacity-80`}
                  style={{ backgroundColor: crowdColor[m.crowd] }}
                />
              </div>
              <span
                className={`text-xs font-semibold uppercase ${
                  isActive ? "text-pine-900" : "text-pine-500"
                }`}
              >
                {m.month}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected month detail */}
      <motion.div
        key={selected.month}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 flex flex-col gap-4 rounded-2xl bg-pine-50 p-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <div className="font-display text-2xl font-bold text-pine-900">
            {selected.month}
          </div>
          <p className="mt-1 max-w-xl text-pine-700">{selected.note}</p>
        </div>
        <div className="flex shrink-0 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-1 text-canyon-600">
              <Thermometer className="h-4 w-4" />
              <span className="font-display text-2xl font-bold">
                {selected.highTempF}°
              </span>
            </div>
            <div className="text-xs uppercase tracking-wide text-pine-500">
              High / {selected.lowTempF}° Low
            </div>
          </div>
          <div className="text-center">
            <div
              className="font-display text-2xl font-bold"
              style={{ color: crowdColor[selected.crowd] }}
            >
              {crowdLabel[selected.crowd]}
            </div>
            <div className="text-xs uppercase tracking-wide text-pine-500">
              Crowds
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
