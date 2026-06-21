import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarRange,
  CircleDollarSign,
  ExternalLink,
  Info,
  MapPin,
  Mountain,
  Tent,
} from "lucide-react";
import type { CampBooking, Campsite, Park } from "@/types/park";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

interface Props {
  park: Park;
}

const bookingClass: Record<CampBooking, string> = {
  Reservation: "bg-sky-100 text-sky-700",
  "First-come": "bg-pine-100 text-pine-700",
  Permit: "bg-amber-100 text-amber-800",
  Lottery: "bg-orange-100 text-orange-800",
};

/** Maps search for a campground's location within the park. */
const mapLink = (camp: Campsite, parkName: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${camp.name} ${parkName}`,
  )}`;

export default function CampingTab({ park }: Props) {
  const camps = park.camping ?? [];
  const [booking, setBooking] = useState<CampBooking | "all">("all");

  const bookingTypes = useMemo(
    () => Array.from(new Set(camps.map((c) => c.booking))),
    [camps],
  );

  const visible = camps.filter(
    (c) => booking === "all" || c.booking === booking,
  );

  return (
    <div>
      <SectionHeading kicker="Stay the Night" title="Camping">
        Where to pitch a tent or park an RV — with how to book each spot.
      </SectionHeading>

      {park.campingNote && (
        <div className="mb-6 flex gap-3 rounded-2xl border-l-4 border-canyon-500 bg-canyon-50/60 p-5">
          <Info className="h-5 w-5 shrink-0 text-canyon-600" />
          <p className="text-sm leading-relaxed text-pine-800">
            {park.campingNote}
          </p>
        </div>
      )}

      {/* Booking-type filter (only if there's variety to filter) */}
      {bookingTypes.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {(["all", ...bookingTypes] as const).map((b) => (
            <button
              key={b}
              onClick={() => setBooking(b)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                booking === b
                  ? "bg-pine-600 text-sand-50"
                  : "bg-pine-100 text-pine-700 hover:bg-pine-200"
              }`}
            >
              {b === "all" ? "All sites" : b}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {visible.map((camp, i) => (
          <motion.article
            key={camp.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
            className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-pine-100"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-pine-900">{camp.name}</h3>
                <p className="mt-0.5 inline-flex items-center gap-1 text-sm text-pine-600">
                  <MapPin className="h-3.5 w-3.5 text-canyon-500" />
                  {camp.location}
                </p>
              </div>
              <Badge className={bookingClass[camp.booking]}>
                {camp.booking}
              </Badge>
            </div>

            <p className="mt-3 text-sm text-pine-700">{camp.highlight}</p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-pine-700">
              <span className="inline-flex items-center gap-1">
                <Tent className="h-4 w-4 text-pine-400" /> {camp.type}
              </span>
              <span className="inline-flex items-center gap-1">
                <CalendarRange className="h-4 w-4 text-pine-400" /> {camp.season}
              </span>
              <span className="inline-flex items-center gap-1">
                <CircleDollarSign className="h-4 w-4 text-pine-400" /> {camp.fee}
              </span>
              {camp.elevation && (
                <span className="inline-flex items-center gap-1">
                  <Mountain className="h-4 w-4 text-pine-400" /> {camp.elevation}
                </span>
              )}
            </div>

            <div className="mt-4 flex items-center gap-4 border-t border-pine-50 pt-3 text-sm font-semibold">
              <span className="text-pine-500">{camp.sites}</span>
              <div className="ml-auto flex items-center gap-4">
                <a
                  href={mapLink(camp, park.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-pine-600 underline-offset-2 hover:underline"
                >
                  Location <ExternalLink className="h-3 w-3" />
                </a>
                {camp.reserveUrl && (
                  <a
                    href={camp.reserveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-canyon-600 underline-offset-2 hover:underline"
                  >
                    {camp.booking === "Permit" ? "Permit" : "Reserve"}{" "}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
