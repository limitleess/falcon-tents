"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const SpecificationsSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const specifications = [
    {
      id: "material",
      icon: "CubeIcon",
      title: "Premium Materials",
      items: [
        "High-grade steel frame (galvanized)",
        "UV-resistant PVC/HDPE fabric",
        "Powder-coated finish",
        "Corrosion-resistant hardware"
      ]
    },
    {
      id: "protection",
      icon: "ShieldCheckIcon",
      title: "Protection Features",
      items: [
        "98% UV ray blocking",
        "Waterproof membrane",
        "Heat reduction up to 15°C",
        "Dust and debris protection"
      ]
    },
    {
      id: "durability",
      icon: "BoltIcon",
      title: "Durability Standards",
      items: [
        "Wind resistance up to 120 km/h",
        "10-year structural warranty",
        "Fade-resistant fabric",
        "Maintenance-free design"
      ]
    },
    {
      id: "customization",
      icon: "PaintBrushIcon",
      title: "Customization Options",
      items: [
        "Multiple color choices",
        "Custom size configurations",
        "Logo printing available",
        "Various design styles"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Technical Details
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground mb-4">
            Specifications & Features
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Built to withstand Saudi Arabia's harsh climate with premium materials and engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specifications.map((spec, index) => (
            <div
              key={spec.id}
              className={`bg-white rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 ${
                isHydrated ? `animate-fade-up delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name={spec.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {spec.title}
              </h3>
              <ul className="space-y-2">
                {spec.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="CheckIcon" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;