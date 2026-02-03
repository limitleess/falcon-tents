"use client";

import { Link } from "@/i18n/navigation";
import AppImage from "@/components/ui/AppImage";

const FeaturedProjects = () => {
  const projects = [
    {
      id: "proj1",
      image: "https://images.unsplash.com/photo-1607008830059-1a5d2ae4cdcb",
      alt: "Modern residential patio with beige shade sail",
      title: "Luxury Villa Patio",
      location: "Riyadh",
    },
    {
      id: "proj2",
      image: "https://images.unsplash.com/photo-1662053400402-9c3ef07d0089",
      alt: "Commercial restaurant outdoor area with custom shade structure",
      title: "Restaurant Terrace",
      location: "Jeddah",
    },
    {
      id: "proj3",
      image: "https://images.unsplash.com/photo-1643383701537-fd56e4aefde4",
      alt: "Residential garden with shade sails",
      title: "Garden Oasis",
      location: "Dammam",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of custom shade installations across Saudi Arabia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/custom-shades"
              className="group relative overflow-hidden rounded-2xl border border-border hover:shadow-2xl transition-all duration-500 aspect-square block"
            >
              <AppImage
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-white/80">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/custom-shades"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
