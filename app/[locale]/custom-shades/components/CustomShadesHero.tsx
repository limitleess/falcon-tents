"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const CustomShadesHero = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1607008830059-1a5d2ae4cdcb"
          alt="Custom beige shade sail structure over modern outdoor patio with contemporary furniture"
          className="w-full h-full object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {isHydrated &&
        <>
            <div className="flex items-center gap-3 mb-6 animate-fade-up delay-200">
              <div className="h-px w-12 bg-white/60" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/90">
                Bespoke Design Solutions
              </span>
            </div>

            <h1 className="font-heading font-bold text-white leading-tight tracking-tight mb-6 animate-fade-up delay-300">
              <span className="block text-5xl md:text-6xl lg:text-7xl">
                Custom Shade
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl mt-2">
                Structures
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-8 animate-fade-up delay-400">
              Unique tensile fabric designs tailored to your space, style, and functional requirements. From residential patios to commercial landmarks.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-500">
              <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2">

                Start Your Project
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link
              href="#gallery"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-semibold text-base hover:bg-white/20 transition-all inline-flex items-center gap-2">

                View Gallery
                <Icon name="PhotoIcon" size={18} />
              </Link>
            </div>
          </>
        }
      </div>
    </section>);

};

export default CustomShadesHero;