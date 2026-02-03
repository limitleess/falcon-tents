"use client";

import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

const WhyChooseSection = () => {
  const t = useTranslations("whyChoose");
  const tImages = useTranslations("images.whyChoose");

  const items = [
    { id: "quality", icon: "ShieldCheckIcon", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837" },
    { id: "experience", icon: "AcademicCapIcon", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c" },
    { id: "warranty", icon: "CheckBadgeIcon", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" },
    { id: "support", icon: "PhoneIcon", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72" },
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
                  alt={tImages(item.id)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as "ShieldCheckIcon" | "AcademicCapIcon" | "CheckBadgeIcon" | "PhoneIcon"} size={24} className="text-primary" />
                </div>
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
