import Navbar from "@/components/landing/Navbar";
import LandingHero from "@/components/landing/LandingHero";
import MapSection from "@/components/landing/MapSection";
import FeaturedParks from "@/components/landing/FeaturedParks";
import StatsBand from "@/components/landing/StatsBand";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <LandingHero />
        <MapSection />
        <FeaturedParks />
        <StatsBand />
      </main>
      <Footer />
    </>
  );
}
