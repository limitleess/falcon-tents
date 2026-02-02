"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const ContactForm = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className={`bg-card border border-border rounded-2xl p-8 ${isHydrated ? "animate-fade-up" : "opacity-0"}`}>
      <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
        Request a Quote
      </h2>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="+966 XX XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
            Service Type *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          >
            <option value="">Select a service</option>
            <option value="car-shades">Car Parking Shades</option>
            <option value="custom-shades">Custom Shade Structures</option>
            <option value="commercial">Commercial Shading</option>
            <option value="residential">Residential Shades</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
            placeholder="Tell us about your project requirements..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
        >
          Send Request
          <Icon name="PaperAirplaneIcon" size={18} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;