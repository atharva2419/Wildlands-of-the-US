import { motion } from "framer-motion";
import { ShieldAlert, Clock } from "lucide-react";
import type { Park } from "@/types/park";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import Badge from "@/components/ui/Badge";
import { conservationClass, conservationLabel } from "@/lib/labels";

interface Props {
  park: Park;
}

export default function WildlifeTab({ park }: Props) {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading kicker="Wildlife" title="Who Lives Here">
          From cinnamon-colored black bears to the fastest bird on Earth — and a
          few species clinging to survival. Badges show each animal's
          conservation status.
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {park.wildlife.map((animal, i) => (
            <motion.article
              key={animal.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pine-100 transition-shadow hover:shadow-xl"
            >
              <div className="relative">
                <SmartImage
                  src={animal.image}
                  alt={animal.name}
                  tone={park.themeColor}
                  className="h-48 w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3">
                  <Badge className={conservationClass[animal.status]}>
                    {conservationLabel[animal.status]}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-pine-900">
                  {animal.name}
                </h3>
                <p className="text-sm italic text-pine-500">
                  {animal.scientificName}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-pine-700">
                  {animal.blurb}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-canyon-600">
                  <Clock className="h-3.5 w-3.5" /> Best: {animal.bestSeason}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Safety */}
      <div>
        <SectionHeading kicker="Stay Safe" title="Sharing the Wild" />
        <div className="grid gap-4 md:grid-cols-3">
          {park.safetyNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border-l-4 border-canyon-500 bg-canyon-50/60 p-5"
            >
              <div className="mb-2 flex items-center gap-2 text-canyon-700">
                <ShieldAlert className="h-5 w-5 shrink-0" />
                <h4 className="font-semibold">{note.title}</h4>
              </div>
              <p className="text-sm leading-relaxed text-pine-800">
                {note.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
