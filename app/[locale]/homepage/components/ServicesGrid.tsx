"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

const ServicesGrid = () => {
  const t = useTranslations("services");

  const services = [
    {
      id: "carShades",
      icon: "TruckIcon",
      href: "/car-shades",
      image: "https://images.unsplash.com/photo-1549092025-135329ffa447",
      imageAlt: "Car parking shade structure",
    },
    {
      id: "customShades",
      icon: "Square3Stack3DIcon",
      href: "/custom-shades",
      image: "https://images.unsplash.com/photo-1661554527478-d3085bc7794e",
      imageAlt: "Custom outdoor shade and patio",
    },
    {
      id: "tentInstallation",
      icon: "HomeModernIcon",
      href: "/services",
      image: "https://images.unsplash.com/photo-1733244739212-4331ede4f708",
      imageAlt: "Event tent installation",
    },
  ] as const;

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            {t("subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-card border border-border rounded-2xl hover:bg-accent hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center text-primary shadow-md">
                  <Icon name={service.icon as "TruckIcon" | "Square3Stack3DIcon" | "HomeModernIcon"} size={24} />
                </div>
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent-foreground transition-colors">
                  {t(service.id)}
                </h3>
                <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                  {t("viewAll")}
                  <Icon name="ArrowRightIcon" size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
