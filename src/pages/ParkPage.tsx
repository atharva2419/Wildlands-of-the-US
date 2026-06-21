import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { Park } from "@/types/park";
import ParkHero from "@/components/park/ParkHero";
import StatStrip from "@/components/park/StatStrip";
import ParkTabs from "@/components/park/ParkTabs";
import Footer from "@/components/Footer";

interface Props {
  park: Park;
}

export default function ParkPage({ park }: Props) {
  return (
    <>
      {/* Back to map */}
      <Link
        to="/#map"
        className="fixed left-4 top-4 z-40 inline-flex items-center gap-1.5 rounded-full bg-pine-950/40 px-4 py-2 text-sm font-semibold text-sand-50 backdrop-blur transition-colors hover:bg-pine-950/70"
      >
        <ArrowLeft className="h-4 w-4" /> All parks
      </Link>

      <main>
        <ParkHero park={park} />
        <StatStrip stats={park.stats} />
        <div className="mt-16">
          <ParkTabs park={park} />
        </div>
      </main>
      <Footer />
    </>
  );
}
