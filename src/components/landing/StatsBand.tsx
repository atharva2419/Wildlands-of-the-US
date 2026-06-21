import CountUp from "@/components/ui/CountUp";

export default function StatsBand() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-pine-900 py-24 text-sand-50"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=60)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">A Legacy Worth Protecting</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sand-100/80">
          Since 1872, the United States has set aside its most extraordinary
          landscapes for everyone, forever. The numbers behind the idea that
          changed the world.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          <Figure value={<CountUp to={1872} />} label="First Park (Yellowstone)" />
          <Figure value={<><CountUp to={63} /></>} label="National Parks" />
          <Figure value={<><CountUp to={325} />M+</>} label="Annual Visitors" />
          <Figure value={<><CountUp to={400} />+</>} label="NPS Sites Total" />
        </div>
      </div>
    </section>
  );
}

function Figure({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-bold text-canyon-300 sm:text-5xl">
        {value}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-sand-100/70">
        {label}
      </div>
    </div>
  );
}
