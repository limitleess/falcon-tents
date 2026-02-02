import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CarShadesHero from "./components/CarShadesHero";
import ProductCatalog from "./components/ProductCatalog";
import SpecificationsSection from "./components/SpecificationsSection";
import InstallationProcess from "./components/InstallationProcess";
import CarShadesCTA from "./components/CarShadesCTA";

export const metadata: Metadata = {
  title: "Car Parking Shades | Premium Vehicle Protection Solutions",
  description:
    "High-quality car parking shade structures with steel frames and UV-resistant fabric. Protect your vehicles from harsh sun and weather. Free consultation and 10-year warranty.",
  keywords:
    "car parking shades, vehicle shade structures, parking canopy, car shade installation, UV protection parking, steel frame shades",
};

export default function CarShadesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CarShadesHero />
        <ProductCatalog />
        <SpecificationsSection />
        <InstallationProcess />
        <CarShadesCTA />
      </main>
      <Footer />
    </div>
  );
}