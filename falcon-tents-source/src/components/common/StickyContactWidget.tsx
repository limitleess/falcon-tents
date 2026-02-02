"use client";

import Icon from "@/components/ui/AppIcon";

const StickyContactWidget = () => {
  const contactMethods = [
    {
      id: "phone",
      icon: "PhoneIcon",
      href: "tel:+966552258277",
      label: "Call Us",
      bgColor: "bg-primary",
      hoverColor: "hover:bg-primary/90",
    },
    {
      id: "whatsapp",
      icon: "ChatBubbleLeftRightIcon",
      href: "https://wa.me/966552258277",
      label: "WhatsApp",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      id: "email",
      icon: "EnvelopeIcon",
      href: "mailto:info@falcontents.com",
      label: "Email",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
  ];

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3">
      {contactMethods.map((method) => (
        <a
          key={method.id}
          href={method.href}
          target={method.id === "whatsapp" ? "_blank" : undefined}
          rel={method.id === "whatsapp" ? "noopener noreferrer" : undefined}
          className={`group relative w-14 h-14 ${method.bgColor} ${method.hoverColor} rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}
          aria-label={method.label}
        >
          <Icon
            name={method.icon as any}
            size={24}
            className="text-white"
          />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {method.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default StickyContactWidget;