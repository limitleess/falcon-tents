import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import LocationsSection from "./components/LocationsSection";

export const metadata: Metadata = {
  title: "Contact Us | Get Your Free Quote Today",
  description:
    "Contact Falcon Tents for a free consultation and quote. Available in Riyadh, Jeddah, and Dammam. Call us or fill out our online form.",
  keywords:
    "contact falcon tents, get quote, shade installation inquiry, car shade consultation",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactHero />
        <div className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}