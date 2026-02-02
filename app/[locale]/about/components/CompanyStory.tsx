"use client";

import { useEffect, useState } from "react";


const CompanyStory = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const milestones = [
    { year: "2005", title: "Company Founded", description: "Started with a vision to provide premium shade solutions" },
    { year: "2010", title: "Regional Expansion", description: "Expanded operations to Jeddah and Dammam" },
    { year: "2015", title: "1000+ Projects", description: "Completed over 1000 successful installations" },
    { year: "2024", title: "Industry Leader", description: "Recognized as Saudi Arabia\'s top shade solutions provider" }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={isHydrated ? "animate-fade-up" : "opacity-0"}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Excellence in Every Installation
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2005, Falcon Tents has grown from a small local business to the region's premier provider of car parking shades and custom shade structures.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our commitment to quality materials, expert craftsmanship, and customer satisfaction has earned us the trust of residential, commercial, and government clients across Saudi Arabia.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-4xl font-heading font-bold text-primary mb-1">1000+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-primary mb-1">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-primary mb-1">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {milestones?.map((milestone, index) => (
              <div
                key={milestone?.year}
                className={`flex gap-6 ${
                  isHydrated ? `animate-fade-up delay-${(index + 2) * 100}` : "opacity-0"
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-heading font-bold text-primary">{milestone?.year}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {milestone?.title}
                  </h3>
                  <p className="text-muted-foreground">{milestone?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;