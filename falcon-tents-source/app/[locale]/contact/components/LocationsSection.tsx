"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const LocationsSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const locations = [
    {
      id: "riyadh",
      city: "Riyadh",
      address: "Al Olaya District, Riyadh",
      phone: "+966 XX XXX XXXX",
      icon: "BuildingOfficeIcon"
    },
    {
      id: "jeddah",
      city: "Jeddah",
      address: "Al Hamra District, Jeddah",
      phone: "+966 XX XXX XXXX",
      icon: "BuildingOfficeIcon"
    },
    {
      id: "dammam",
      city: "Dammam",
      address: "Adamah Street, Dammam",
      phone: "+966 XX XXX XXXX",
      icon: "BuildingOfficeIcon"
    }
  ];

  return (
    <section id="locations" className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Our Locations
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground mb-4">
            Serving All of Saudi Arabia
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Visit our offices or request a free site visit anywhere in the Kingdom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`bg-white rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-500 ${
                isHydrated ? `animate-fade-up delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name={location.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                {location.city}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="MapPinIcon" size={18} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">{location.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="PhoneIcon" size={18} className="text-primary flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;