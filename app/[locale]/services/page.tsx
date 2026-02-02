import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "./components/PageHeader";
import ServicesDetailGrid from "./components/ServicesDetailGrid";
import ProcessSection from "./components/ProcessSection";
import MaterialsSection from "./components/MaterialsSection";
import TestimonialSection from "./components/TestimonialSection";
import ServicesCTA from "./components/ServicesCTA";

export const metadata: Metadata = {
  title: "Services | Falcon Tents - Comprehensive Shade Solutions",
  description:
    "Explore our full range of custom shade and tent installations: car parking shades, outdoor shading, tensile structures, school shades, stadium covers, mosque shades, and more.",
  keywords:
    "parking shade installation, tensile structures saudi, school playground shades, mosque courtyard shading, custom tent fabrication, commercial awnings",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHeader />
        <ServicesDetailGrid />
        <ProcessSection />
        <MaterialsSection />
        <TestimonialSection />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}