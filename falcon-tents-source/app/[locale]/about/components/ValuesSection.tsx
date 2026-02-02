"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const ValuesSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const values = [
    {
      id: "quality",
      icon: "ShieldCheckIcon",
      title: "Quality First",
      description: "Premium materials and expert craftsmanship in every project"
    },
    {
      id: "innovation",
      icon: "LightBulbIcon",
      title: "Innovation",
      description: "Cutting-edge designs and modern engineering solutions"
    },
    {
      id: "reliability",
      icon: "CheckBadgeIcon",
      title: "Reliability",
      description: "On-time delivery and long-lasting installations"
    },
    {
      id: "customer",
      icon: "UserGroupIcon",
      title: "Customer Focus",
      description: "Dedicated support from consultation to completion"
    }
  ];

  return (
    <section className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Our Values
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground mb-4">
            What Drives Us
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Core principles that guide every project we undertake
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`bg-white rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 text-center ${
                isHydrated ? `animate-fade-up delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={value.icon as any} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;