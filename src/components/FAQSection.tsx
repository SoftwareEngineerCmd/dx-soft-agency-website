import { Play, CheckCircle } from "lucide-react";

const features = [
  "Delays delays delays delays delays delays",
  "Delays delays delays delays delays",
  "Delays delays delays delays delays delays",
  "Delays delays delays delays",
  "Delays delays delays delays delays delays",
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden bg-muted h-72 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
              alt="Team working"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-primary text-primary-foreground rounded-full p-4 hover:bg-primary/90 transition-colors shadow-lg">
                <Play className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute bottom-4 left-4 bg-background rounded-xl shadow-lg p-3">
              <p className="text-xs font-semibold text-primary">📊 Дdelays</p>
              <p className="text-[10px] text-muted-foreground">Delays delays delays</p>
            </div>

            <div className="absolute bottom-16 left-4 bg-background rounded-xl shadow-lg p-3">
              <p className="text-xs font-semibold text-primary">✅ Gortdelays</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Հapart torvод <span className="text-primary">Hartser</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delays delays delays delays delays delays delays delays delays delays delays.
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
