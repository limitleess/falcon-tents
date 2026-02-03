"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

interface ProcessStep {
  id: string;
  imageKey: string;
  icon: string;
  title: string;
  description: string;
  number: string;
  image: string;
}

const ProcessSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tImages = useTranslations("images.process");

  const steps: ProcessStep[] = [
    {
      id: "process_consultation",
      imageKey: "consultation",
      icon: "ChatBubbleLeftRightIcon",
      number: "01",
      title: "Consultation",
      description: "Site visit and needs assessment to understand your requirements",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    },
    {
      id: "process_design",
      imageKey: "design",
      icon: "PencilSquareIcon",
      number: "02",
      title: "Design",
      description: "Custom 3D design and material selection tailored to your space",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    },
    {
      id: "process_fabrication",
      imageKey: "fabrication",
      icon: "WrenchScrewdriverIcon",
      number: "03",
      title: "Fabrication",
      description: "Quality manufacturing with premium materials in our facility",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: "process_installation",
      imageKey: "installation",
      icon: "CheckCircleIcon",
      number: "04",
      title: "Installation",
      description: "Professional setup and testing by our expert team",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
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
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all relative z-10 group">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <AppImage
                    src={step.image}
                    alt={tImages(step.imageKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                  <div className="absolute bottom-3 right-3 w-12 h-12 bg-white/95 backdrop-blur rounded-xl flex items-center justify-center shadow">
                    <Icon name={step.icon as any} size={24} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;