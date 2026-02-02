"use client";

import React, { createContext, useContext } from "react";

const messages = {
  nav: { home: "Home", carShades: "Car Shades", customShades: "Custom Shades", services: "Services", about: "About", contact: "Contact", getQuote: "Get Quote" },
  hero: { title: "Premium Shade Solutions", subtitle: "Transform Your Space with Expert Craftsmanship", description: "Leading provider of car shades, custom tents, and shade installations across Saudi Arabia. 15+ years of excellence.", cta: "Explore Services", ctaSecondary: "View Projects" },
  stats: { projects: "Projects Completed", experience: "Years Experience", clients: "Happy Clients", coverage: "Cities Coverage" },
  services: { title: "Our Services", subtitle: "Comprehensive Shade Solutions", carShades: "Car Shades", customShades: "Custom Shades", tentInstallation: "Tent Installation", viewAll: "View All Services" },
  whyChoose: { title: "Why Choose Falcon Tents", quality: "Premium Quality", qualityDesc: "High-grade materials and expert craftsmanship", experience: "15+ Years Experience", experienceDesc: "Trusted by thousands across Saudi Arabia", warranty: "Warranty Guaranteed", warrantyDesc: "Comprehensive coverage on all installations", support: "24/7 Support", supportDesc: "Always here to help with your needs" },
  cta: { title: "Ready to Get Started?", description: "Contact us today for a free consultation and quote", button: "Contact Us Now" },
  footer: { description: "Leading provider of premium shade solutions across Saudi Arabia. Quality, reliability, and excellence in every project.", quickLinks: "Quick Links", services: "Services", contact: "Contact Us", address: "Address", email: "Email", phone: "Phone", followUs: "Follow Us", rights: "All rights reserved." },
} as const;

const MessagesContext = createContext(messages);

export function useT(namespace: keyof typeof messages) {
  const m = useContext(MessagesContext);
  return (key: string) => {
    const ns = m[namespace] as Record<string, string>;
    return (ns && ns[key]) ?? key;
  };
}

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  return <MessagesContext.Provider value={messages}>{children}</MessagesContext.Provider>;
}
