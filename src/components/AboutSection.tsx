const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden bg-muted h-72 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Մեr <span className="text-primary">Մasին</span>
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                DX Soft Academy-ն մasնagեdelays է DX Group-ի մaspart, որdelays
                delays delays delays delays delays delays delays delays delays.
              </p>
              <p>
                Մedelays delays delays delays delays delays delays delays delays
                delays delays delays delays delays delays delays delays.
              </p>
              <p>
                Delays delays delays delays delays delays delays delays delays
                delays delays delays delays delays delays delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
