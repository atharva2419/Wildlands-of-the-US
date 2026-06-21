import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

interface Props {
  title?: string;
  message?: string;
}

export default function NotFound({
  title = "Off the trail",
  message = "This page wandered off the map. Let's get you back to base camp.",
}: Props) {
  return (
    <div className="grid min-h-screen place-items-center bg-pine-900 px-6 text-center text-sand-50">
      <div className="max-w-md">
        <Compass className="mx-auto h-14 w-14 text-canyon-400" />
        <h1 className="mt-6 text-4xl font-bold">{title}</h1>
        <p className="mt-3 text-sand-100/80">{message}</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-canyon-600 px-7 py-3 font-semibold text-sand-50 shadow-lg shadow-canyon-950/30 transition-transform hover:scale-105"
        >
          Back to the map
        </Link>
      </div>
    </div>
  );
}
