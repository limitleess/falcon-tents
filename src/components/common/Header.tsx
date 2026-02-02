"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "nav_homepage", label: t("home"), href: "/homepage" },
    { id: "nav_car_shades", label: t('carShades'), href: "/car-shades" },
    { id: "nav_custom_shades", label: t('customShades'), href: "/custom-shades" },
    { id: "nav_services", label: t('services'), href: "/services" },
    { id: "nav_about", label: t('about'), href: "/about" },
    { id: "nav_contact", label: t('contact'), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-border shadow-lg"
              : "bg-white/80 backdrop-blur-md border-border/50"
          }`}
        >
          {/* Logo */}
          <Link
            href="/homepage"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="HomeModernIcon" size={20} className="text-primary-foreground" variant="solid" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">
              FALCON <span className="text-primary">TENTS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.id}
                href={link?.href}
                className={`text-sm font-medium transition-colors relative group ${
                  pathname === link?.href
                    ? "text-primary" :"text-foreground hover:text-primary"
                }`}
              >
                {link?.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    pathname === link?.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              {t('getQuote')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? "XMarkIcon" : "Bars3Icon"}
              size={24}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 py-4 px-6 bg-white/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl animate-fade-in">
            <div className="flex flex-col gap-4">
              <div className="flex justify-end mb-2">
                <LanguageSwitcher />
              </div>
              {navLinks?.map((link) => (
                <Link
                  key={link?.id}
                  href={link?.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    pathname === link?.href
                      ? "text-primary" :"text-foreground hover:text-primary"
                  }`}
                >
                  {link?.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-center hover:bg-primary/90 transition-colors mt-2"
              >
                {t('getQuote')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;