import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass,
  PawPrint,
  Footprints,
  CalendarRange,
  Route,
  Images,
} from "lucide-react";
import type { Park } from "@/types/park";
import OverviewTab from "./tabs/OverviewTab";
import WildlifeTab from "./tabs/WildlifeTab";
import TrailsTab from "./tabs/TrailsTab";
import BestTimeTab from "./tabs/BestTimeTab";
import GettingThereTab from "./tabs/GettingThereTab";
import GalleryTab from "./tabs/GalleryTab";

interface Props {
  park: Park;
}

const TABS = [
  { id: "overview", label: "Overview", icon: Compass, Component: OverviewTab },
  { id: "wildlife", label: "Wildlife", icon: PawPrint, Component: WildlifeTab },
  { id: "trails", label: "Trails", icon: Footprints, Component: TrailsTab },
  { id: "best-time", label: "Best Time", icon: CalendarRange, Component: BestTimeTab },
  { id: "getting-there", label: "How to Reach", icon: Route, Component: GettingThereTab },
  { id: "gallery", label: "Gallery", icon: Images, Component: GalleryTab },
] as const;

export default function ParkTabs({ park }: Props) {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("overview");
  const ActiveComponent =
    TABS.find((t) => t.id === active)?.Component ?? OverviewTab;

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Sticky tab bar */}
      <nav className="sticky top-0 z-30 -mx-6 mb-12 border-b border-pine-100 bg-sand-50/85 px-6 backdrop-blur-md">
        <div className="flex gap-1 overflow-x-auto py-2 sm:gap-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-sand-50"
                    : "text-pine-600 hover:bg-pine-100"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-pine-600"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Active panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="pb-24"
        >
          <ActiveComponent park={park} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
