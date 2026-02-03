"use client";

import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

const WhyChooseSection = () => {
  const t = useTranslations("whyChoose");

  const items = [
    { id: "quality", icon: "ShieldCheckIcon", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837", imageAlt: "Quality manufacturing" },
    { id: "experience", icon: "AcademicCapIcon", image: "https://images.unsplash.com/photo-1523240795612-9a05468c4e9a", imageAlt: "Expert team" },
    { id: "warranty", icon: "CheckBadgeIcon", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", imageAlt: "Warranty and certification" },
    { id: "support", icon: "PhoneIcon", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72", imageAlt: "Customer support" },
  ] as const;

  return (
    <section className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <AppImage
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <Icon name={item.icon as "ShieldCheckIcon" | "AcademicCapIcon" | "CheckBadgeIcon" | "PhoneIcon"} size={28} className="text-primary" />
                </div>
              </div>
              <div className="p-6 pt-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {t(item.id)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`${item.id}Desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
