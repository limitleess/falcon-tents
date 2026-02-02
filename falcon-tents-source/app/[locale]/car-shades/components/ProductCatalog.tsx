"use client";

import { useEffect, useState, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  capacity: string;
}

const ProductCatalog = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
  {
    id: "cantilever",
    name: "Cantilever Car Shade",
    description: "Single-pole design ideal for residential driveways and small parking areas",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1282f7058-1769717933304.png",
    alt: "Modern cantilever car shade structure with single support pole covering two vehicles",
    features: ["Single pole support", "3-4 car capacity", "Modern aesthetic", "Easy installation"],
    capacity: "2-4 vehicles"
  },
  {
    id: "pyramid",
    name: "Pyramid Shade Structure",
    description: "Classic pyramid design providing excellent coverage and stability",
    image: "https://images.unsplash.com/photo-1699593406204-83e45c3bb995",
    alt: "White pyramid shade structure covering commercial parking area with multiple vehicles",
    features: ["Four-pole support", "High wind resistance", "Maximum coverage", "Commercial grade"],
    capacity: "4-6 vehicles"
  },
  {
    id: "tensile",
    name: "Tensile Membrane Shade",
    description: "Contemporary fabric architecture for large-scale parking facilities",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1282f7058-1769717933304.png",
    alt: "Large tensile membrane shade covering commercial parking lot with modern design",
    features: ["Architectural design", "Large span capability", "Custom shapes", "Premium materials"],
    capacity: "10+ vehicles"
  },
  {
    id: "sail",
    name: "Shade Sail System",
    description: "Flexible sail design perfect for irregular spaces and modern aesthetics",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0bdd3c2-1770051645255.png",
    alt: "Triangular shade sail covering residential parking area with contemporary design",
    features: ["Flexible configuration", "Multiple colors", "Cost-effective", "Quick installation"],
    capacity: "1-3 vehicles"
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
            const cardId = entry.target.getAttribute("data-product-id");
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-product-id]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [isHydrated]);

  return (
    <section id="catalog" ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Product Catalog
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Car Shade Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of premium car parking shade structures designed for durability and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) =>
          <div
            key={product.id}
            data-product-id={product.id}
            className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
            isHydrated && visibleCards.has(product.id) ?
            `animate-fade-up delay-${(index + 1) * 100}` :
            "opacity-0"}`
            }>

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-lg">
                  <span className="text-xs font-semibold text-primary-foreground">
                    {product.capacity}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) =>
                <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <Icon name="CheckCircleIcon" size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                )}
                </div>

                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ProductCatalog;