"use client";

import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";

const WhyChooseSection = () => {
  const t = useTranslations("whyChoose");

  const items = [
    { id: "quality", icon: "ShieldCheckIcon" },
    { id: "experience", icon: "AcademicCapIcon" },
    { id: "warranty", icon: "CheckBadgeIcon" },
    { id: "support", icon: "PhoneIcon" },
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
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={item.icon as "ShieldCheckIcon" | "AcademicCapIcon" | "CheckBadgeIcon" | "PhoneIcon"} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {t(item.id)}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t(`${item.id}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
