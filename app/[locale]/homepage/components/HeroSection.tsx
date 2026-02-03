"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative w-full min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1282f7058-1769717933304.png"
          alt="Modern tensile car parking shade structure covering vehicles"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-white/60" />
          <span className="text-xs font-medium uppercase tracking-widest text-white/90">
            {t("subtitle")}
          </span>
        </div>

        <h1 className="font-heading font-bold text-white leading-tight tracking-tight mb-6">
          <span className="block text-5xl md:text-6xl lg:text-7xl">
            {t("title")}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-8">
          {t("description")}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
          >
            {t("cta")}
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
          <Link
            href="/custom-shades"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-semibold text-base hover:bg-white/20 transition-all inline-flex items-center gap-2"
          >
            {t("ctaSecondary")}
            <Icon name="Square3Stack3DIcon" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
