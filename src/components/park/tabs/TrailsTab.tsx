import { useMemo, useState } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { ArrowUpDown, Dog, ExternalLink, Mountain, Ruler, Timer } from "lucide-react";
import type { Park, Trail, TrailDifficulty } from "@/types/park";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { difficultyClass, difficultyLabel, difficultyRank } from "@/lib/labels";

interface Props {
  park: Park;
}

type SortKey = "name" | "difficulty" | "distanceMi" | "elevationGainFt";

const DIFFICULTIES: TrailDifficulty[] = ["easy", "moderate", "hard", "strenuous"];

/** Deep-link to an AllTrails search for this trail (reliable without trail IDs). */
const alltrailsLink = (trail: Trail, parkName: string) =>
  trail.alltrailsUrl ??
  `https://www.alltrails.com/search?q=${encodeURIComponent(
    `${trail.name} ${parkName}`,
  )}`;

function AllTrailsLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1 text-xs font-semibold text-canyon-600 underline-offset-2 hover:underline"
    >
      AllTrails <ExternalLink className="h-3 w-3" />
    </a>
  );
}

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const points = data.map((ft, i) => ({ i, ft }));
  return (
    <div className="h-10 w-28">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points}>
          <Line
            type="monotone"
            dataKey="ft"
            stroke={color}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function TrailsTab({ park }: Props) {
  const [filter, setFilter] = useState<TrailDifficulty | "all">("all");
  const [sort, setSort] = useState<{ key: SortKey; asc: boolean }>({
    key: "distanceMi",
    asc: true,
  });

  const trails = useMemo(() => {
    const filtered = park.trails.filter(
      (t) => filter === "all" || t.difficulty === filter,
    );
    const sorted = [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sort.key === "name") cmp = a.name.localeCompare(b.name);
      else if (sort.key === "difficulty")
        cmp = difficultyRank[a.difficulty] - difficultyRank[b.difficulty];
      else cmp = (a[sort.key] as number) - (b[sort.key] as number);
      return sort.asc ? cmp : -cmp;
    });
    return sorted;
  }, [park.trails, filter, sort]);

  const toggleSort = (key: SortKey) =>
    setSort((s) => ({ key, asc: s.key === key ? !s.asc : true }));

  const SortButton = ({ k, label }: { k: SortKey; label: string }) => (
    <button
      onClick={() => toggleSort(k)}
      className={`inline-flex items-center gap-1 transition-colors hover:text-canyon-600 ${
        sort.key === k ? "text-canyon-600" : ""
      }`}
    >
      {label}
      <ArrowUpDown className="h-3.5 w-3.5" />
    </button>
  );

  return (
    <div>
      <SectionHeading kicker="On Foot" title="Trails & Hikes">
        Sort and filter {park.trails.length} signature routes. Sparklines show
        each trail's elevation profile.
      </SectionHeading>

      {/* Difficulty filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(["all", ...DIFFICULTIES] as const).map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-semibold capitalize transition-colors ${
              filter === d
                ? "bg-pine-600 text-sand-50"
                : "bg-pine-100 text-pine-700 hover:bg-pine-200"
            }`}
          >
            {d === "all" ? "All trails" : difficultyLabel[d]}
          </button>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-2xl ring-1 ring-pine-100 md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-pine-50 text-xs uppercase tracking-wide text-pine-600">
            <tr>
              <th className="px-5 py-3 font-semibold">
                <SortButton k="name" label="Trail" />
              </th>
              <th className="px-5 py-3 font-semibold">
                <SortButton k="difficulty" label="Difficulty" />
              </th>
              <th className="px-5 py-3 font-semibold">
                <SortButton k="distanceMi" label="Distance" />
              </th>
              <th className="px-5 py-3 font-semibold">
                <SortButton k="elevationGainFt" label="Elevation" />
              </th>
              <th className="px-5 py-3 font-semibold">Time</th>
              <th className="px-5 py-3 font-semibold">Profile</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-pine-100">
            {trails.map((trail) => (
              <tr key={trail.name} className="bg-white align-top hover:bg-sand-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 font-semibold text-pine-900">
                    {trail.name}
                    {trail.dogFriendly && (
                      <Dog
                        className="h-4 w-4 text-pine-400"
                        aria-label="Dog friendly"
                      />
                    )}
                  </div>
                  <div className="mt-0.5 max-w-md text-xs text-pine-600">
                    {trail.highlight}
                  </div>
                  <div className="mt-1.5">
                    <AllTrailsLink href={alltrailsLink(trail, park.name)} />
                  </div>
                </td>
                <td className="px-5 py-4">
                  <Badge className={difficultyClass[trail.difficulty]}>
                    {difficultyLabel[trail.difficulty]}
                  </Badge>
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-pine-700">
                  {trail.distanceMi} mi
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-pine-700">
                  {trail.elevationGainFt.toLocaleString()} ft
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-pine-700">
                  {trail.estTime}
                </td>
                <td className="px-5 py-4">
                  <Sparkline
                    data={trail.elevationProfile}
                    color={park.themeColor}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-4 md:hidden">
        {trails.map((trail) => (
          <TrailCard
            key={trail.name}
            trail={trail}
            color={park.themeColor}
            parkName={park.name}
          />
        ))}
      </div>
    </div>
  );
}

function TrailCard({
  trail,
  color,
  parkName,
}: {
  trail: Trail;
  color: string;
  parkName: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-pine-100">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-pine-900">{trail.name}</h3>
        <Badge className={difficultyClass[trail.difficulty]}>
          {difficultyLabel[trail.difficulty]}
        </Badge>
      </div>
      <p className="mt-1 text-sm text-pine-600">{trail.highlight}</p>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-pine-700">
        <span className="inline-flex items-center gap-1">
          <Ruler className="h-4 w-4 text-pine-400" /> {trail.distanceMi} mi
        </span>
        <span className="inline-flex items-center gap-1">
          <Mountain className="h-4 w-4 text-pine-400" />{" "}
          {trail.elevationGainFt.toLocaleString()} ft
        </span>
        <span className="inline-flex items-center gap-1">
          <Timer className="h-4 w-4 text-pine-400" /> {trail.estTime}
        </span>
        {trail.dogFriendly && (
          <span className="inline-flex items-center gap-1">
            <Dog className="h-4 w-4 text-pine-400" /> Dog OK
          </span>
        )}
      </div>
      <div className="mt-3 flex items-end justify-between">
        <Sparkline data={trail.elevationProfile} color={color} />
        <AllTrailsLink href={alltrailsLink(trail, parkName)} />
      </div>
    </div>
  );
}
