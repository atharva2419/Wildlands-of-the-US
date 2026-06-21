import { useState } from "react";
import { motion } from "framer-motion";
import type { Park } from "@/types/park";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import Lightbox from "@/components/ui/Lightbox";

interface Props {
  park: Park;
}

export default function GalleryTab({ park }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div>
      <SectionHeading kicker="Gallery" title="The View From Here">
        A few frames from {park.name}. Click any image to view it full screen —
        use arrow keys to browse.
      </SectionHeading>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {park.gallery.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            onClick={() => setActive(i)}
            className="group block w-full break-inside-avoid overflow-hidden rounded-xl ring-1 ring-pine-100"
          >
            <SmartImage
              src={img.src}
              alt={img.alt}
              tone={park.themeColor}
              className={`w-full transition-transform duration-500 group-hover:scale-105 ${
                i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"
              }`}
            />
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={park.gallery}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </div>
  );
}
