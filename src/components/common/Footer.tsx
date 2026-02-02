"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";

const Footer = () => {
  const currentYear = 2024;
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const serviceLinks = [
    { id: "footer_service_car", label: tNav('carShades'), href: "/car-shades" },
    { id: "footer_service_custom", label: tNav('customShades'), href: "/custom-shades" },
    { id: "footer_service_commercial", label: "Commercial Shading", href: "/services#commercial" },
    { id: "footer_service_residential", label: "Residential Shades", href: "/services#residential" },
  ];

  const quickLinks = [
    { id: "footer_quick_about", label: tNav('about'), href: "/about" },
    { id: "footer_quick_services", label: tNav('services'), href: "/services" },
    { id: "footer_quick_contact", label: tNav('contact'), href: "/contact" },
    { id: "footer_quick_quote", label: tNav('getQuote'), href: "/contact" },
  ];

  const socialLinks = [
    { id: "social_whatsapp", name: "WhatsApp", icon: "ChatBubbleLeftRightIcon", href: "https://wa.me/966552258277" },
    { id: "social_instagram", name: "Instagram", icon: "CameraIcon", href: "https://instagram.com/falcontents" },
    { id: "social_linkedin", name: "LinkedIn", icon: "BriefcaseIcon", href: "https://linkedin.com/company/falcontents" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="HomeModernIcon" size={20} className="text-primary-foreground" variant="solid" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                FALCON TENTS
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <Icon name="MapPinIcon" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Adamah Dammam, Saudi Arabia
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="PhoneIcon" size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+966552258277"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +966 552 258 277
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="EnvelopeIcon" size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@falcontents.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  info@falcontents.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-6 text-secondary-foreground">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-6 text-secondary-foreground">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-6 text-secondary-foreground">
              {t('contact')}
            </h3>
            <p className="text-sm text-secondary-foreground/70 mb-6">
              {t('followUs')}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label={social.name}
                >
                  <Icon
                    name={social.icon as any}
                    size={18}
                    className="text-secondary-foreground group-hover:text-primary-foreground transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {currentYear} Falcon Tents. {t('rights')}</p>
            <div className="flex items-center gap-6">
              <Link
                href="#privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">·</span>
              <Link
                href="#terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;