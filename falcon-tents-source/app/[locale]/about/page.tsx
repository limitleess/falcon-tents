import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AboutHero from "./components/AboutHero";
import CompanyStory from "./components/CompanyStory";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";
import CertificationsSection from "./components/CertificationsSection";

export const metadata: Metadata = {
  title: "About Us | Falcon Tents - Industry Leaders Since 2005",
  description:
    "Learn about Falcon Tents, the leading provider of car parking shades and custom shade structures in Saudi Arabia. Over 15 years of excellence and 1000+ completed projects.",
  keywords:
    "about falcon tents, shade company saudi arabia, tensile fabric specialists, shade installation experts",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHero />
        <CompanyStory />
        <ValuesSection />
        <TeamSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
}