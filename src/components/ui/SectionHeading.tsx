import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  children?: ReactNode;
}

export default function SectionHeading({
  kicker,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div className="mb-8">
      {kicker && (
        <div className="mb-1 text-sm font-semibold uppercase tracking-[0.25em] text-canyon-500">
          {kicker}
        </div>
      )}
      <h2 className="text-3xl font-bold text-pine-900 sm:text-4xl">{title}</h2>
      {children && (
        <p className="mt-3 max-w-2xl text-pine-700">{children}</p>
      )}
    </div>
  );
}
