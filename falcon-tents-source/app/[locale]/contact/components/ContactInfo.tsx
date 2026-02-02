"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const ContactInfo = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const contactMethods = [
    {
      id: "phone",
      icon: "PhoneIcon",
      title: "Phone",
      details: "+966 552 258 277",
      description: "Mon-Sat, 8:00 AM - 6:00 PM",
      action: "tel:+966552258277"
    },
    {
      id: "email",
      icon: "EnvelopeIcon",
      title: "Email",
      details: "info@falcontents.com",
      description: "We\'ll respond within 24 hours",
      action: "mailto:info@falcontents.com"
    },
    {
      id: "whatsapp",
      icon: "ChatBubbleLeftRightIcon",
      title: "WhatsApp",
      details: "+966 552 258 277",
      description: "Quick responses via WhatsApp",
      action: "https://wa.me/966552258277"
    },
    {
      id: "location",
      icon: "MapPinIcon",
      title: "Location",
      details: "Adamah Dammam",
      description: "Serving all of Saudi Arabia",
      action: "#locations"
    }
  ];

  return (
    <div className="space-y-8">
      <div className={isHydrated ? "animate-fade-up delay-200" : "opacity-0"}>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
          Contact Information
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Choose your preferred way to reach us. We're here to help with your shade installation needs.
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <a
            key={method.id}
            href={method.action}
            className={`block bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group ${
              isHydrated ? `animate-fade-up delay-${(index + 3) * 100}` : "opacity-0"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon name={method.icon as any} size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                  {method.title}
                </h3>
                <p className="text-primary font-semibold mb-1">{method.details}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
              <Icon
                name="ArrowRightIcon"
                size={20}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
              />
            </div>
          </a>
        ))}
      </div>

      <div className={`bg-accent rounded-2xl p-6 ${isHydrated ? "animate-fade-up delay-700" : "opacity-0"}`}>
        <div className="flex items-start gap-3">
          <Icon name="ClockIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-heading font-bold text-accent-foreground mb-2">
              Business Hours
            </h3>
            <p className="text-sm text-accent-foreground/80 mb-1">Monday - Saturday: 8:00 AM - 6:00 PM</p>
            <p className="text-sm text-accent-foreground/80">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;