"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const TeamSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const departments = [
    {
      id: "design",
      icon: "PencilSquareIcon",
      title: "Design Team",
      description: "Expert architects and engineers creating innovative shade solutions",
      count: "12+ Specialists"
    },
    {
      id: "installation",
      icon: "WrenchScrewdriverIcon",
      title: "Installation Crew",
      description: "Certified technicians ensuring perfect execution",
      count: "25+ Technicians"
    },
    {
      id: "support",
      icon: "ChatBubbleLeftRightIcon",
      title: "Customer Support",
      description: "Dedicated team providing consultation and after-sales service",
      count: "8+ Advisors"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Expert Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skilled specialists dedicated to delivering exceptional shade solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={dept.id}
              className={`bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 text-center ${
                isHydrated ? `animate-fade-up delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon name={dept.icon as any} size={36} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {dept.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {dept.description}
              </p>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold">
                {dept.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;