"use client";

import { useEffect, useState, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

interface Material {
  id: string;
  name: string;
  image: string;
  alt: string;
  properties: string[];
  colors?: string;
  warranty?: string;
}

const MaterialsSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const materials: Material[] = [
  {
    id: "material_pvc",
    name: "PVC-Coated Polyester",
    image: "https://images.unsplash.com/photo-1611134673863-54cd109ededf",
    alt: "Close-up texture of white PVC-coated polyester fabric material with visible weave pattern",
    properties: [
    "UV-resistant coating",
    "100% waterproof",
    "10-year lifespan",
    "Fire-retardant certified"],

    colors: "20+ standard colors"
  },
  {
    id: "material_hdpe",
    name: "HDPE Shade Cloth",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1313efe90-1765979257712.png",
    alt: "Black HDPE mesh shade cloth material with uniform knit pattern and UV protection",
    properties: [
    "90% UV block rating",
    "Breathable mesh design",
    "100% recyclable",
    "Lightweight construction"],

    colors: "Black, beige, green, blue"
  },
  {
    id: "material_steel",
    name: "Steel Framework",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1996bd086-1770051089794.png",
    alt: "Galvanized steel structural beams and framework for shade installation",
    properties: [
    "Hot-dip galvanized",
    "Powder-coated finish",
    "Corrosion-resistant",
    "High load capacity"],

    warranty: "15-year warranty"
  },
  {
    id: "material_tensile",
    name: "Tensile Membrane",
    image: "https://images.unsplash.com/photo-1565525526760-ecb4c11595c9",
    alt: "White architectural tensile membrane fabric stretched in modern curved design",
    properties: [
    "Lightweight structure",
    "Translucent options",
    "Architectural-grade",
    "Large span capability"],

    colors: "White, beige, custom"
  }];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-material-id");
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-material-id]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [isHydrated]);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Premium Materials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Built to Last
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use only the highest quality materials to ensure durability and performance in Saudi Arabia's climate
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {materials.map((material, index) =>
          <div
            key={material.id}
            data-material-id={material.id}
            className={`group flex flex-col md:flex-row gap-6 bg-card border-l-4 border-primary rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
            isHydrated && visibleCards.has(material.id) ?
            `${index % 2 === 0 ? "animate-slide-left" : "animate-slide-right"} delay-${
            (index + 1) * 100}` :

            "opacity-0"}`
            }>

              {/* Image */}
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <AppImage
                src={material.image}
                alt={material.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

              </div>

              {/* Content */}
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {material.name}
                </h3>
                <ul className="space-y-3 mb-4">
                  {material.properties.map((property, idx) =>
                <li
                  key={`${material.id}_prop_${idx}`}
                  className="flex items-start gap-3 text-sm text-muted-foreground">

                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{property}</span>
                    </li>
                )}
                </ul>
                {material.colors &&
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">Colors:</span>
                    <span>{material.colors}</span>
                  </div>
              }
                {material.warranty &&
              <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">Warranty:</span>
                    <span className="text-primary font-semibold">{material.warranty}</span>
                  </div>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default MaterialsSection;