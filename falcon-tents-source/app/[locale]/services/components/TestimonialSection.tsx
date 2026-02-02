"use client";

import { useEffect, useState, useRef } from "react";
import Icon from "@/components/ui/AppIcon";

const TestimonialSection = () => {
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
    <section ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        {/* Quote Icon */}
        {isHydrated && isVisible && (
          <Icon
            name="ChatBubbleBottomCenterTextIcon"
            size={48}
            className="text-primary/20 mb-8 mx-auto animate-fade-up"
          />
        )}

        {/* Testimonial Quote */}
        {isHydrated && isVisible && (
          <blockquote className="text-2xl md:text-3xl font-heading font-light text-foreground mb-8 leading-relaxed animate-fade-up delay-200">
            "Falcon Tents transformed our school courtyard. The installation was
            professional, and the shade structures are both beautiful and
            functional. Our students can now enjoy outdoor activities safely."
          </blockquote>
        )}

        {/* Rating Stars */}
        {isHydrated && isVisible && (
          <div className="flex items-center justify-center gap-1 mb-6 animate-fade-up delay-300">
            {[1, 2, 3, 4, 5]?.map((star) => (
              <Icon
                key={`star_${star}`}
                name="StarIcon"
                size={20}
                className="text-primary"
                variant="solid"
              />
            ))}
          </div>
        )}

        {/* Divider */}
        {isHydrated && isVisible && (
          <div className="w-16 h-px bg-border mx-auto mb-6 animate-fade-up delay-400" />
        )}

        {/* Author */}
        {isHydrated && isVisible && (
          <div className="animate-fade-up delay-500">
            <p className="text-lg font-semibold text-foreground mb-1">
              Dr. Ahmed Al-Mansour
            </p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Principal, Dhahran International School
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;