import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CustomShadesHero from "./components/CustomShadesHero";
import DesignOptions from "./components/DesignOptions";
import ApplicationsSection from "./components/ApplicationsSection";
import ProjectGallery from "./components/ProjectGallery";
import CustomShadesCTA from "./components/CustomShadesCTA";

export const metadata: Metadata = {
  title: "Custom Shade Structures | Bespoke Tensile Fabric Solutions",
  description:
    "Custom-designed shade structures for residential, commercial, and architectural projects. Unique tensile fabric designs tailored to your space and requirements.",
  keywords:
    "custom shade structures, tensile fabric design, architectural shading, bespoke shade solutions, patio shades, commercial awnings",
};

export default function CustomShadesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CustomShadesHero />
        <DesignOptions />
        <ApplicationsSection />
        <ProjectGallery />
        <CustomShadesCTA />
      </main>
      <Footer />
    </div>
  );
}