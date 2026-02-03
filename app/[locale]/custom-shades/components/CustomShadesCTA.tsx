"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import Icon from "@/components/ui/AppIcon";

const CustomShadesCTA = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="relative py-24 px-6 bg-accent overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {isHydrated && (
          <>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground mb-6 animate-fade-up">
              Let's Create Something Unique
            </h2>
            <p className="text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up delay-200">
              Share your vision with our design team and we'll bring it to life
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-up delay-300">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                Start Your Project
                <Icon name="PencilSquareIcon" size={18} />
              </Link>
              <Link
                href="/car-shades"
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-accent-foreground border border-accent-foreground/20 rounded-lg font-semibold text-base hover:bg-white/30 transition-all inline-flex items-center gap-2"
              >
                View Car Shades
                <Icon name="TruckIcon" size={18} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CustomShadesCTA;