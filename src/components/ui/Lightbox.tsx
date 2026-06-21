import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types/park";

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  const image = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-pine-950/95 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-sand-50 transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! - 1 + images.length) % images.length);
            }}
            className="absolute left-3 rounded-full bg-white/10 p-2 text-sand-50 transition-colors hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-sand-100/80">
              {image.alt}
              {image.credit && (
                <span className="text-sand-100/50"> · {image.credit}</span>
              )}
            </figcaption>
          </motion.figure>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! + 1) % images.length);
            }}
            className="absolute right-3 rounded-full bg-white/10 p-2 text-sand-50 transition-colors hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
