const PageHeader = () => {
  return (
    <section className="pt-32 pb-16 px-6 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          Our Services
        </span>
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
          Comprehensive Shade Solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Custom installations for every need - from residential patios to large-scale industrial projects
        </p>
      </div>
    </section>
  );
};

export default PageHeader;