"use client";

import { useEffect, useState } from "react";
import AppImage from "@/components/ui/AppImage";

const ProjectGallery = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projects = [
  {
    id: "proj1",
    image: "https://images.unsplash.com/photo-1607008830059-1a5d2ae4cdcb",
    alt: "Modern residential patio with beige shade sail and contemporary outdoor furniture",
    title: "Luxury Villa Patio",
    location: "Riyadh"
  },
  {
    id: "proj2",
    image: "https://images.unsplash.com/photo-1662053400402-9c3ef07d0089",
    alt: "Commercial restaurant outdoor area with large custom shade structure",
    title: "Restaurant Terrace",
    location: "Jeddah"
  },
  {
    id: "proj3",
    image: "https://images.unsplash.com/photo-1643383701537-fd56e4aefde4",
    alt: "Residential garden with multiple shade sails creating covered outdoor space",
    title: "Garden Oasis",
    location: "Dammam"
  },
  {
    id: "proj4",
    image: "https://images.unsplash.com/photo-1598974984567-61c159129986",
    alt: "Large commercial shade structure covering outdoor seating area",
    title: "Corporate Plaza",
    location: "Riyadh"
  },
  {
    id: "proj5",
    image: "https://images.unsplash.com/photo-1695818487376-79da93af924e",
    alt: "Colorful shade sails over school playground with children playing",
    title: "School Courtyard",
    location: "Mecca"
  },
  {
    id: "proj6",
    image: "https://images.unsplash.com/photo-1565525526760-ecb4c11595c9",
    alt: "Modern architectural shade structure with unique tensile design",
    title: "Cultural Center",
    location: "Jeddah"
  }];


  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of custom shade installations across Saudi Arabia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, index) =>
          <div
            key={project?.id}
            className={`group relative overflow-hidden rounded-2xl border border-border hover:shadow-2xl transition-all duration-500 aspect-square ${
            isHydrated ? `animate-fade-up delay-${(index + 1) * 100}` : "opacity-0"}`
            }>

              <AppImage
              src={project?.image}
              alt={project?.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  {project?.title}
                </h3>
                <p className="text-sm text-white/80">{project?.location}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ProjectGallery;