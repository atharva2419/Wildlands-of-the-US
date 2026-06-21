import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/** A small rounded pill used for tags, conservation status, and difficulty. */
export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}
