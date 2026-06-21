import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass,
  PawPrint,
  Footprints,
  Tent,
  CalendarRange,
  Route,
  Images,
} from "lucide-react";
import type { Park } from "@/types/park";
import OverviewTab from "./tabs/OverviewTab";
import WildlifeTab from "./tabs/WildlifeTab";
import TrailsTab from "./tabs/TrailsTab";
import CampingTab from "./tabs/CampingTab";
import BestTimeTab from "./tabs/BestTimeTab";
import GettingThereTab from "./tabs/GettingThereTab";
import GalleryTab from "./tabs/GalleryTab";

interface Props {
  park: Park;
}

type TabDef = {
  id: string;
  label: string;
  icon: typeof Compass;
  Component: (props: { park: Park }) => React.ReactNode;
};

const BASE_TABS: TabDef[] = [
  { id: "overview", label: "Overview", icon: Compass, Component: OverviewTab },
  { id: "wildlife", label: "Wildlife", icon: PawPrint, Component: WildlifeTab },
  { id: "trails", label: "Trails", icon: Footprints, Component: TrailsTab },
  { id: "camping", label: "Camping", icon: Tent, Component: CampingTab },
  { id: "best-time", label: "Best Time", icon: CalendarRange, Component: BestTimeTab },
  { id: "getting-there", label: "How to Reach", icon: Route, Component: GettingThereTab },
  { id: "gallery", label: "Gallery", icon: Images, Component: GalleryTab },
];

export default function ParkTabs({ park }: Props) {
  // The Camping tab only appears for parks that have camping data.
  const tabs = BASE_TABS.filter(
    (t) => t.id !== "camping" || (park.camping && park.camping.length > 0),
  );
  const [active, setActive] = useState<string>("overview");
  const ActiveComponent =
    tabs.find((t) => t.id === active)?.Component ?? OverviewTab;
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectTab = (id: string) => {
    setActive(id);
    // Snap back to the top of the tab section so the new panel starts at its
    // beginning instead of inheriting the previous tab's scroll offset. The
    // sticky nav stays pinned, so only the content beneath it refreshes.
    const el = wrapperRef.current;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
    }
  };

  return (
    <div ref={wrapperRef} className="mx-auto max-w-6xl px-6">
      {/* Sticky tab bar */}
      <nav className="sticky top-0 z-30 -mx-6 mb-12 border-b border-pine-100 bg-sand-50/85 px-6 backdrop-blur-md">
        <div className="flex gap-1 overflow-x-auto py-2 sm:gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => selectTab(tab.id)}
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
