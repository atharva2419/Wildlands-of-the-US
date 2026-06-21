import { Plane, Car, Ticket, Clock, SignalLow, Navigation } from "lucide-react";
import type { Park } from "@/types/park";
import SectionHeading from "@/components/ui/SectionHeading";

interface Props {
  park: Park;
}

export default function GettingThereTab({ park }: Props) {
  const g = park.gettingThere;
  return (
    <div>
      <SectionHeading kicker="Plan Your Trip" title="How to Reach" />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Airports */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-pine-100">
          <div className="mb-4 flex items-center gap-2 text-pine-900">
            <Plane className="h-5 w-5 text-canyon-500" />
            <h3 className="text-lg font-semibold">Nearest Airports</h3>
          </div>
          <ul className="space-y-3">
            {g.nearestAirports.map((a) => (
              <li
                key={a.code}
                className="flex items-center justify-between gap-4 border-b border-pine-50 pb-3 last:border-0 last:pb-0"
              >
                <div>
                  <span className="font-display text-lg font-bold text-pine-800">
                    {a.code}
                  </span>
                  <span className="ml-2 text-sm text-pine-600">{a.name}</span>
                </div>
                <span className="whitespace-nowrap text-sm font-semibold text-canyon-600">
                  {a.driveTime}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Driving */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-pine-100">
          <div className="mb-4 flex items-center gap-2 text-pine-900">
            <Car className="h-5 w-5 text-canyon-500" />
            <h3 className="text-lg font-semibold">Driving Distances</h3>
          </div>
          <ul className="space-y-3">
            {g.drivingFrom.map((d) => (
              <li
                key={d.city}
                className="flex items-center justify-between gap-4 border-b border-pine-50 pb-3 last:border-0 last:pb-0"
              >
                <span className="font-medium text-pine-800">{d.city}</span>
                <span className="text-sm text-pine-600">
                  <span className="font-semibold text-canyon-600">{d.time}</span>{" "}
                  · {d.miles} mi
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Practical info */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <InfoCard icon={<Ticket className="h-5 w-5" />} title="Entrance Fee">
          {g.entranceFee}
        </InfoCard>
        <InfoCard icon={<Clock className="h-5 w-5" />} title="Hours">
          {g.hours}
        </InfoCard>
        <InfoCard icon={<SignalLow className="h-5 w-5" />} title="Cell Signal">
          {g.cellSignal}
        </InfoCard>
      </div>

      <a
        href={g.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-canyon-600 px-6 py-3 font-semibold text-sand-50 shadow-lg shadow-canyon-600/30 transition-transform hover:scale-105"
      >
        <Navigation className="h-5 w-5" />
        Get Directions
      </a>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-pine-50 p-5">
      <div className="mb-2 flex items-center gap-2 text-canyon-600">
        {icon}
        <h4 className="text-sm font-semibold uppercase tracking-wide text-pine-700">
          {title}
        </h4>
      </div>
      <p className="text-sm leading-relaxed text-pine-800">{children}</p>
    </div>
  );
}
