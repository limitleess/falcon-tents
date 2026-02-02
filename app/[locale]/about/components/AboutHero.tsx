"use client";

import { useEffect, useState } from "react";
import AppImage from "@/components/ui/AppImage";

const AboutHero = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="relative w-full min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_19371d54e-1770051644103.png"
          alt="Team of professionals installing modern shade structure"
          className="w-full h-full object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {isHydrated &&
        <>
            <div className="flex items-center gap-3 mb-6 animate-fade-up delay-200">
              <div className="h-px w-12 bg-white/60" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/90">
                About Us
              </span>
            </div>

            <h1 className="font-heading font-bold text-white leading-tight tracking-tight mb-6 animate-fade-up delay-300">
              <span className="block text-5xl md:text-6xl lg:text-7xl">
                Building Shade
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl mt-2">
                Solutions Since 2005
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-up delay-400">
              Saudi Arabia's trusted partner for premium car parking shades and custom shade structures, delivering excellence across 1000+ projects.
            </p>
          </>
        }
      </div>
    </section>);

};

export default AboutHero;