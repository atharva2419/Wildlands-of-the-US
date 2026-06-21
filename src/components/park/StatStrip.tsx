import { motion } from "framer-motion";
import type { ParkStat } from "@/types/park";

interface StatStripProps {
  stats: ParkStat[];
}

export default function StatStrip({ stats }: StatStripProps) {
  return (
    <section className="relative z-20 -mt-16 px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-pine-200 shadow-2xl shadow-pine-950/20 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-sand-50 p-5 text-center"
          >
            <div className="font-display text-2xl font-bold text-canyon-600 lg:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-pine-700">
              {stat.label}
            </div>
            {stat.note && (
              <div className="mt-1 text-[11px] leading-tight text-pine-500">
                {stat.note}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
