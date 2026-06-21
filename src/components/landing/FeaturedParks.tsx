import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { mapPoints } from "@/data/mapPoints";

export default function FeaturedParks() {
  const featured = mapPoints.slice(0, 6);

  return (
    <section id="parks" className="bg-pine-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-canyon-500">
          The Marquee
        </div>
        <h2 className="text-3xl font-bold text-pine-900 sm:text-4xl">
          Featured Parks
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => {
            const inner = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative h-80 overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={p.thumb}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-sand-50">
                  <div className="text-xs font-semibold uppercase tracking-widest text-sand-100/80">
                    {p.state}
                  </div>
                  <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-sand-100/90">
                    {p.tagline}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-canyon-300">
                    {p.built ? (
                      <>
                        Explore{" "}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    ) : (
                      <span className="text-sand-100/60">Coming soon</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
            return p.built ? (
              <Link key={p.slug} to={`/parks/${p.slug}`}>
                {inner}
              </Link>
            ) : (
              <div key={p.slug}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
