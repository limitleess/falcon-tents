import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import WhyChooseSection from "./components/WhyChooseSection";
import StatsBar from "./components/StatsBar";
import FeaturedProjects from "./components/FeaturedProjects";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "Falcon Tents | Premium Car Shades & Custom Shade Solutions",
  description:
    "Leading provider of car parking shades, custom shade structures, and tensile fabric solutions across Saudi Arabia. Expert installation, premium materials, 10-year warranty.",
  keywords:
    "car shades saudi arabia, parking shades, custom shade structures, tensile fabric, shade installation, car parking canopy, outdoor shading solutions",
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <WhyChooseSection />
        <StatsBar />
        <FeaturedProjects />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}