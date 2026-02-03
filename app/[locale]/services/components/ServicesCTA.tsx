"use client";

import { useEffect, useState, useRef } from "react";
import { Link } from "@/i18n/navigation";
import Icon from "@/components/ui/AppIcon";

const ServicesCTA = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, [isHydrated]);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-secondary text-secondary-foreground"
    >
      <div className="max-w-4xl mx-auto text-center">
        {isHydrated && isVisible && (
          <>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-up">
              Start Your Project Today
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up delay-200">
              Contact us for a free consultation and detailed quote for your custom shade or tent installation
            </p>
            <div className="animate-fade-up delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl"
              >
                Request Free Quote
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesCTA;