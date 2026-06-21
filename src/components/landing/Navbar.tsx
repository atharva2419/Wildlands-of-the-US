import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mountain } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-pine-100 bg-sand-50/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className={`flex items-center gap-2 font-display text-xl font-bold uppercase tracking-[0.2em] ${
            scrolled ? "text-pine-900" : "text-sand-50"
          }`}
        >
          <Mountain
            className={`h-6 w-6 ${scrolled ? "text-canyon-600" : "text-canyon-300"}`}
          />
          Wildlands
        </Link>
        <div
          className={`hidden items-center gap-8 text-sm font-semibold uppercase tracking-widest sm:flex ${
            scrolled ? "text-pine-700" : "text-sand-100"
          }`}
        >
          <a href="#map" className="transition-opacity hover:opacity-70">
            Map
          </a>
          <a href="#parks" className="transition-opacity hover:opacity-70">
            Parks
          </a>
          <a href="#about" className="transition-opacity hover:opacity-70">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
