"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const DesignOptions = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const options = [
    {
      id: "shapes",
      icon: "Square3Stack3DIcon",
      title: "Shape Configurations",
      items: ["Sail shapes (triangle, square, hexagon)", "Conical structures", "Wave and curved designs", "Multi-peak combinations"]
    },
    {
      id: "materials",
      icon: "SwatchIcon",
      title: "Fabric & Colors",
      items: ["PVC-coated polyester", "HDPE shade cloth", "PTFE architectural fabric", "20+ color options"]
    },
    {
      id: "features",
      icon: "SparklesIcon",
      title: "Special Features",
      items: ["Integrated lighting", "Retractable systems", "Waterproof membranes", "Logo printing"]
    },
    {
      id: "support",
      icon: "CubeIcon",
      title: "Support Systems",
      items: ["Steel pole structures", "Wall-mounted brackets", "Cable suspension", "Hybrid combinations"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Customization
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Design Your Perfect Shade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Endless possibilities to create a shade structure that matches your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <div
              key={option.id}
              className={`bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 ${
                isHydrated ? `animate-fade-up delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name={option.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {option.title}
              </h3>
              <ul className="space-y-2">
                {option.items.map((item, idx) => (
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

export default DesignOptions;