import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import type { Park } from "@/types/park";
import Badge from "@/components/ui/Badge";

interface ParkHeroProps {
  park: Park;
}

export default function ParkHero({ park }: ParkHeroProps) {
  const { scrollY } = useScroll();
  // Subtle parallax: the image drifts slower than the page scroll.
  const imageY = useTransform(scrollY, [0, 600], [0, 140]);
  const contentY = useTransform(scrollY, [0, 600], [0, 60]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <header className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 -top-24 -bottom-24"
      >
        <img
          src={park.heroImage}
          alt={`${park.name} National Park`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/30 to-pine-950/40" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sand-100">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest">
              <MapPin className="h-4 w-4" /> {park.state}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest">
              <CalendarDays className="h-4 w-4" /> Est. {park.established}
            </span>
          </div>

          <h1 className="text-shadow-hero text-6xl font-bold leading-none text-sand-50 sm:text-7xl md:text-8xl">
            {park.name}
            <span className="block text-2xl font-medium tracking-[0.2em] text-canyon-300 sm:text-3xl">
              National Park
            </span>
          </h1>

          <p className="text-shadow-hero mt-5 max-w-2xl text-lg font-medium text-sand-100 sm:text-xl">
            {park.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {park.tags.map((tag) => (
              <Badge
                key={tag}
                className="border border-sand-100/30 bg-pine-950/40 text-sand-50 backdrop-blur"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {park.heroCredit && (
        <span className="absolute bottom-2 right-3 z-10 text-[10px] text-sand-100/50">
          📷 {park.heroCredit}
        </span>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-sand-100/80"
      >
        <div className="mx-auto h-10 w-6 rounded-full border-2 border-sand-100/50 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="mx-auto h-2 w-1 rounded-full bg-sand-100/80"
          />
        </div>
      </motion.div>
    </header>
  );
}
