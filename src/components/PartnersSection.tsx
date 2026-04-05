const partners = ["BSC", "INECOBANK", "GTC", "GOALS"];

const PartnersSection = () => {
  return (
    <section className="py-10 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Համagorcaqudelays invel qov agatarts ev zer
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div key={partner} className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
