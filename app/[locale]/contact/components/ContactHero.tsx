"use client";

import { useEffect, useState } from "react";

const ContactHero = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="relative w-full bg-secondary pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {isHydrated && (
          <>
            <div className="flex items-center gap-3 mb-6 animate-fade-up delay-200">
              <div className="h-px w-12 bg-white/60" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/90">
                Get In Touch
              </span>
            </div>

            <h1 className="font-heading font-bold text-white leading-tight tracking-tight mb-6 animate-fade-up delay-300">
              <span className="block text-5xl md:text-6xl lg:text-7xl">
                Let's Start Your
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl mt-2">
                Shade Project
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-up delay-400">
              Request a free consultation and quote. Our team will respond within 24 hours.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default ContactHero;