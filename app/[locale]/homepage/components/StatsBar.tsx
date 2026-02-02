"use client";

import { useTranslations } from "next-intl";

const StatsBar = () => {
  const t = useTranslations("stats");

  const stats = [
    { id: "projects", value: "1000+", labelKey: "projects" },
    { id: "experience", value: "15+", labelKey: "experience" },
    { id: "clients", value: "500+", labelKey: "clients" },
    { id: "coverage", value: "25+", labelKey: "coverage" },
  ] as const;

  return (
    <section className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
