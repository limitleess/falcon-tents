"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const ApplicationsSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const tImages = useTranslations("images.applications");

  const applications = [
  {
    id: "residential",
    title: "Residential Spaces",
    description: "Patios, gardens, swimming pools, and outdoor living areas",
    image: "https://images.unsplash.com/photo-1662053400402-9c3ef07d0089",
    icon: "HomeIcon"
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    description: "Restaurants, hotels, shopping centers, and office complexes",
    image: "https://images.unsplash.com/photo-1669020260300-30ba614e10d0",
    icon: "BuildingOfficeIcon"
  },
  {
    id: "public",
    title: "Public Facilities",
    description: "Parks, playgrounds, sports facilities, and community spaces",
    image: "https://images.unsplash.com/photo-1695818487376-79da93af924e",
    icon: "UserGroupIcon"
  },
  {
    id: "architectural",
    title: "Architectural Landmarks",
    description: "Iconic structures, entrances, and statement installations",
    image: "https://images.unsplash.com/photo-1565525526760-ecb4c11595c9",
    icon: "BuildingLibraryIcon"
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
            const cardId = entry.target.getAttribute("data-app-id");
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-app-id]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [isHydrated]);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Applications
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground mb-4">
            Where Custom Shades Shine
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Versatile solutions for every environment and purpose
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) =>
          <div
            key={app.id}
            data-app-id={app.id}
            className={`group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 ${
            isHydrated && visibleCards.has(app.id) ?
            `animate-fade-up delay-${(index + 1) * 100}` :
            "opacity-0"}`
            }>

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={app.image}
                alt={tImages(app.id)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <Icon name={app.icon as any} size={24} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {app.title}
                </h3>
                <p className="text-muted-foreground">
                  {app.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ApplicationsSection;