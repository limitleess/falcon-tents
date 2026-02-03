"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

interface ServiceDetail {
  id: string;
  imageKey: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServicesDetailGrid = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tImages = useTranslations("images.servicesDetail");

  const services: ServiceDetail[] = [
  {
    id: "service_detail_parking",
    imageKey: "parking",
    icon: "TruckIcon",
    title: "Car Parking Shades",
    description: "Durable parking structures protecting vehicles from harsh sun",
    image: "https://images.unsplash.com/photo-1549092025-135329ffa447",
    features: [
    "Steel frame construction",
    "UV-resistant fabric",
    "10-year warranty",
    "Custom colors available"]

  },
  {
    id: "service_detail_sun",
    imageKey: "sun",
    icon: "SunIcon",
    title: "Sun & Outdoor Shades",
    description: "Elegant patio and garden shading for residential spaces",
    image: "https://images.unsplash.com/photo-1661554527478-d3085bc7794e",
    features: [
    "Custom color options",
    "Weather-resistant materials",
    "Various size configurations",
    "Professional installation"]

  },
  {
    id: "service_detail_tents",
    imageKey: "tents",
    icon: "HomeModernIcon",
    title: "Custom Tents",
    description: "Event and special-purpose tents for any occasion",
    image: "https://images.unsplash.com/photo-1733244739212-4331ede4f708",
    features: [
    "Modular design system",
    "Quick setup process",
    "Branded printing options",
    "Multiple size options"]

  },
  {
    id: "service_detail_school",
    imageKey: "school",
    icon: "AcademicCapIcon",
    title: "School Shades",
    description: "Safe playground and courtyard coverage for educational facilities",
    image: "https://images.unsplash.com/photo-1695818487376-79da93af924e",
    features: [
    "Safety-tested materials",
    "Colorful design options",
    "Large span coverage",
    "UV protection certified"]

  },
  {
    id: "service_detail_polygon",
    imageKey: "polygon",
    icon: "Square3Stack3DIcon",
    title: "Post & Polygon Shades",
    description: "Modern architectural shade structures with unique designs",
    image: "https://images.unsplash.com/photo-1603654658287-ae5feb43b4b8",
    features: [
    "Contemporary aesthetics",
    "Multiple configurations",
    "Structural engineering",
    "Custom designs available"]

  },
  {
    id: "service_detail_stadium",
    imageKey: "stadium",
    icon: "TrophyIcon",
    title: "Stadium Seating Shades",
    description: "Large-scale shading for sports venues and seating areas",
    image: "https://images.unsplash.com/photo-1698466631746-d403a5fff6a8",
    features: [
    "High wind resistance",
    "Acoustic panel options",
    "Custom logo printing",
    "Large span capability"]

  },
  {
    id: "service_detail_tensile",
    imageKey: "tensile",
    icon: "CubeIcon",
    title: "Tensile Structures",
    description: "Innovative fabric architecture for diverse applications",
    image: "https://images.unsplash.com/photo-1609034257757-3276cf6a4e98",
    features: [
    "Lightweight construction",
    "Cost-effective solution",
    "Iconic design potential",
    "Engineering expertise"]

  },
  {
    id: "service_detail_awning",
    imageKey: "awning",
    icon: "BuildingStorefrontIcon",
    title: "Awning Shades",
    description: "Commercial and residential awnings for windows and entrances",
    image: "https://images.unsplash.com/photo-1605717545129-72a5f643e8ed",
    features: [
    "Retractable options",
    "Branded printing available",
    "Weather-proof materials",
    "Energy saving benefits"]

  },
  {
    id: "service_detail_mosque",
    imageKey: "mosque",
    icon: "BuildingLibraryIcon",
    title: "Mosque Shades",
    description: "Specialized shading for worship areas and courtyards",
    image: "https://images.unsplash.com/photo-1532506007521-145a4e552434",
    features: [
    "Respectful design approach",
    "Acoustic treatment options",
    "Large coverage areas",
    "Premium materials"]

  }];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-service-id");
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-service-id]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [isHydrated]);

  const getDelayClass = (index: number) => {
    const row = Math.floor(index / 3);
    return `delay-${(row + 1) * 100}`;
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <div
            key={service.id}
            data-service-id={service.id}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`group relative bg-card border border-border rounded-2xl transition-all duration-300 hover:bg-accent hover:shadow-xl cursor-pointer overflow-hidden flex flex-col ${
            isHydrated && visibleCards.has(service.id) ?
            `animate-fade-up ${getDelayClass(index)}` :
            "opacity-0"}`
            }>

              {/* Service Image - Always visible */}
              <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
                <AppImage
                  src={service.image}
                  alt={tImages(service.imageKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                className={`text-xl font-heading font-semibold mb-2 transition-colors ${
                hoveredCard === service.id ?
                "text-accent-foreground" :
                "text-foreground"}`
                }>

                  {service.title}
                </h3>
                <p
                className={`text-sm leading-relaxed mb-4 transition-colors ${
                hoveredCard === service.id ?
                "text-accent-foreground/80" :
                "text-muted-foreground"}`
                }>

                  {service.description}
                </p>

                {/* Features List - Hidden by default, shown on hover */}
                <div
                className={`transition-all duration-300 overflow-hidden flex-1 ${
                hoveredCard === service.id ?
                "max-h-96 opacity-100" : "max-h-0 opacity-0"}`
                }>

                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) =>
                  <li
                    key={`${service.id}_feature_${idx}`}
                    className="flex items-center gap-2 text-sm text-accent-foreground/90">

                        <Icon name="CheckCircleIcon" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                  )}
                  </ul>
                </div>

                {/* Get Quote Button - Appears on hover */}
                <div
                className={`transition-all duration-300 ${
                hoveredCard === service.id ?
                "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`
                }>

                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2">
                    Get Quote
                    <Icon name="ArrowRightIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ServicesDetailGrid;