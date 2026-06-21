import { Link } from "react-router-dom";
import { Mountain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-pine-800 bg-pine-950 py-12 text-center text-sand-100/70">
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-[0.3em] text-sand-50"
      >
        <Mountain className="h-5 w-5 text-canyon-400" />
        Wildlands
      </Link>
      <p className="mt-3 text-sm">
        A portfolio project · Data &amp; imagery for demonstration only.
      </p>
      <p className="mt-1 text-xs text-sand-100/40">
        Plan your real trip at{" "}
        <a
          href="https://www.nps.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-sand-100"
        >
          nps.gov
        </a>
      </p>
    </footer>
  );
}
