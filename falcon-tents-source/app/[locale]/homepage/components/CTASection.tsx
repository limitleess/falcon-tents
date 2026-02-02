"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";

const CTASection = () => {
  const t = useTranslations("cta");

  return (
    <section className="relative py-24 px-6 bg-accent overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground mb-6">
          {t("title")}
        </h2>
        <p className="text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto">
          {t("description")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl"
        >
          {t("button")}
          <Icon name="ArrowRightIcon" size={18} />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
