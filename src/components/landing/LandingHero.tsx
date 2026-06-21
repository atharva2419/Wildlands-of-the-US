import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80";

export default function LandingHero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 160]);
  const textY = useTransform(scrollY, [0, 700], [0, 80]);
  const fade = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <header className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-20 -bottom-20">
        <img
          src={HERO_IMAGE}
          alt="Sunlight over a mountain range"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950/50 via-pine-950/20 to-pine-950/80" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1 }}
          className="text-sm font-semibold uppercase tracking-[0.35em] text-canyon-300"
        >
          The United States National Parks
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-shadow-hero mt-4 text-5xl font-bold leading-[0.95] text-sand-50 sm:text-7xl md:text-8xl"
        >
          Find Your Wild
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-shadow-hero mt-5 max-w-xl text-lg text-sand-100 sm:text-xl"
        >
          Sixty-three protected wonders. One interactive map. Go find the one
          that's calling you.
        </motion.p>

        {/* Stat line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sand-50 sm:gap-12"
        >
          <Stat value={<CountUp to={63} />} label="National Parks" />
          <Stat
            value={<><CountUp to={85} decimals={0} />M</>}
            label="Acres Protected"
          />
          <Stat
            value={<><CountUp to={18} decimals={0} />K+</>}
            label="Miles of Trail"
          />
        </motion.div>

        <motion.a
          href="#map"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-canyon-600 px-7 py-3 font-semibold text-sand-50 shadow-xl shadow-canyon-950/30 transition-transform hover:scale-105"
        >
          Explore the map
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-sand-100/70" />
        </motion.div>
      </motion.div>
    </header>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="text-center">
      <div className="text-shadow-hero font-display text-4xl font-bold sm:text-5xl">
        {value}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-sand-100/80">
        {label}
      </div>
    </div>
  );
}
