"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const targetLocale = locale === "en" ? "ar" : "en";
  const buttonLabel = locale === "en" ? "العربية" : "English";

  const switchLanguage = () => {
    startTransition(() => {
      router.replace(pathname, { locale: targetLocale });
    });
  };

  return (
    <button
      onClick={switchLanguage}
      disabled={isPending}
      className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary border border-border rounded-lg hover:bg-accent/50 transition-colors disabled:opacity-50"
    >
      {buttonLabel}
    </button>
  );
};

export default LanguageSwitcher;
