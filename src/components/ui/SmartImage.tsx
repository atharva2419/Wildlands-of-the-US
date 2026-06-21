import { useState } from "react";
import { ImageOff } from "lucide-react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Shown while loading and as the error fallback backdrop. */
  tone?: string;
}

/**
 * An <img> that fades in once loaded and degrades to a tasteful gradient
 * placeholder if the source fails — so a dead URL never looks "broken."
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  tone = "#2f5435",
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${tone}, ${tone}88)`,
      }}
    >
      {errored ? (
        <div className="absolute inset-0 grid place-items-center text-sand-100/70">
          <ImageOff className="h-8 w-8" aria-hidden />
          <span className="sr-only">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
