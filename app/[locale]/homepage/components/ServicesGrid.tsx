"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";

const ServicesGrid = () => {
  const t = useTranslations("services");

  const services = [
    { id: "carShades", icon: "TruckIcon", href: "/car-shades" },
    { id: "customShades", icon: "Square3Stack3DIcon", href: "/custom-shades" },
    { id: "tentInstallation", icon: "HomeModernIcon", href: "/services" },
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
              className="group p-8 bg-card border border-border rounded-2xl hover:bg-accent hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon name={service.icon as "TruckIcon" | "Square3Stack3DIcon" | "HomeModernIcon"} size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent-foreground transition-colors">
                {t(service.id)}
              </h3>
              <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                {t("viewAll")}
                <Icon name="ArrowRightIcon" size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
