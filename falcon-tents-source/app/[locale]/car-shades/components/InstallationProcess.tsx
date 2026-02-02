"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const InstallationProcess = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const steps = [
    {
      id: "step1",
      number: "01",
      title: "Site Survey",
      description: "Free consultation and site measurement by our expert team",
      icon: "MapPinIcon"
    },
    {
      id: "step2",
      number: "02",
      title: "Design & Quote",
      description: "Custom design proposal with detailed pricing and timeline",
      icon: "PencilSquareIcon"
    },
    {
      id: "step3",
      number: "03",
      title: "Fabrication",
      description: "Premium materials fabricated to exact specifications",
      icon: "WrenchScrewdriverIcon"
    },
    {
      id: "step4",
      number: "04",
      title: "Installation",
      description: "Professional installation completed within 3-5 days",
      icon: "CheckBadgeIcon"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Installation Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From consultation to completion, we ensure a seamless experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative ${
                isHydrated ? `animate-fade-up delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={step.icon as any} size={24} className="text-primary" />
                  </div>
                  <span className="text-4xl font-heading font-bold text-primary/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;