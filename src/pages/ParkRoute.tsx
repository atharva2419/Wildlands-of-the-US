import { useParams } from "react-router-dom";
import { getParkBySlug } from "@/data/parks";
import ParkPage from "./ParkPage";
import NotFound from "./NotFound";

/** Resolves the :slug route param to a park, or shows a 404. */
export default function ParkRoute() {
  const { slug } = useParams<{ slug: string }>();
  const park = slug ? getParkBySlug(slug) : undefined;

  if (!park) {
    return (
      <NotFound
        title="Park not yet charted"
        message="We're still writing the full guide for this park. Check back soon — or explore the ones that are ready."
      />
    );
  }
  return <ParkPage park={park} />;
}
