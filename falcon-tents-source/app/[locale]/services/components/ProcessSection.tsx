"use client";

import { useEffect, useState, useRef } from "react";
import Icon from "@/components/ui/AppIcon";

interface ProcessStep {
  id: string;
  icon: string;
  title: string;
  description: string;
  number: string;
}

const ProcessSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps: ProcessStep[] = [
    {
      id: "process_consultation",
      icon: "ChatBubbleLeftRightIcon",
      number: "01",
      title: "Consultation",
      description: "Site visit and needs assessment to understand your requirements",
    },
    {
      id: "process_design",
      icon: "PencilSquareIcon",
      number: "02",
      title: "Design",
      description: "Custom 3D design and material selection tailored to your space",
    },
    {
      id: "process_fabrication",
      icon: "WrenchScrewdriverIcon",
      number: "03",
      title: "Fabrication",
      description: "Quality manufacturing with premium materials in our facility",
    },
    {
      id: "process_installation",
      icon: "CheckCircleIcon",
      number: "04",
      title: "Installation",
      description: "Professional setup and testing by our expert team",
    },
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isHydrated]);

  return (
    <section ref={sectionRef} id="process" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process ensuring quality results from concept to completion
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line - Desktop */}
          {isHydrated && isVisible && (
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-border -z-10">
              <div className="h-full bg-primary animate-draw-line origin-left" />
            </div>
          )}

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative ${
                isHydrated && isVisible
                  ? `animate-fade-up delay-${(index + 1) * 100}`
                  : "opacity-0"
              }`}
            >
              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all relative z-10">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={step.icon as any} size={32} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;