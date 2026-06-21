import { motion } from "framer-motion";
import { Sparkles, Feather } from "lucide-react";
import type { Park } from "@/types/park";
import SectionHeading from "@/components/ui/SectionHeading";

interface Props {
  park: Park;
}

export default function OverviewTab({ park }: Props) {
  return (
    <div className="space-y-16">
      {/* Intro prose */}
      <div>
        <SectionHeading kicker="The Place" title={`Welcome to ${park.name}`} />
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-pine-800">
          {park.overview.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* Indigenous history callout */}
      <div className="rounded-2xl border border-canyon-200 bg-canyon-50 p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2 text-canyon-700">
          <Feather className="h-5 w-5" />
          <h3 className="text-xl font-bold">The First Stewards</h3>
        </div>
        <p className="max-w-3xl leading-relaxed text-canyon-900/90">
          {park.indigenousHistory}
        </p>
      </div>

      {/* History timeline */}
      <div>
        <SectionHeading kicker="History" title="How It Was Protected" />
        <ol className="relative ml-3 border-l-2 border-pine-200">
          {park.history.map((event, i) => (
            <motion.li
              key={event.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mb-8 ml-6"
            >
              <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-canyon-500 ring-4 ring-sand-50" />
              <div className="font-display text-2xl font-bold text-canyon-600">
                {event.year}
              </div>
              <h4 className="mt-1 text-lg font-semibold text-pine-900">
                {event.title}
              </h4>
              <p className="mt-1 max-w-2xl text-pine-700">{event.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Fun facts */}
      <div>
        <SectionHeading kicker="Did You Know?" title="Park Trivia" />
        <div className="grid gap-4 sm:grid-cols-2">
          {park.funFacts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-pine-100"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-canyon-500" />
              <p className="text-pine-800">{fact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
