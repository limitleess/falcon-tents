"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

const CertificationsSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "Saudi Building Code Compliance",
    "Structural Engineering Certification",
    "Safety Standards Certified"
  ];

  return (
    <section className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={isHydrated ? "animate-fade-up" : "opacity-0"}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Quality Assurance
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground mb-6">
              Certified Excellence
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 leading-relaxed">
              Our commitment to quality is backed by international certifications and adherence to the highest industry standards.
            </p>
            <div className="space-y-3 mb-8">
              {certifications?.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-accent-foreground"
                >
                  <Icon name="CheckBadgeIcon" size={24} className="text-primary flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
              <Icon name="ArrowRightIcon" size={18} />
            </Link>
          </div>

          <div className={`grid grid-cols-2 gap-6 ${isHydrated ? "animate-fade-up delay-200" : "opacity-0"}`}>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <p className="text-4xl font-heading font-bold text-primary mb-2">10+</p>
              <p className="text-sm text-muted-foreground">Years Warranty</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <p className="text-4xl font-heading font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Quality Guaranteed</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <p className="text-4xl font-heading font-bold text-primary mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <p className="text-4xl font-heading font-bold text-primary mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;