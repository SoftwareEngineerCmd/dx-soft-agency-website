import { Play, CheckCircle } from "lucide-react";

const features = [
  "Artov dsatsitsov adelndelays aratsatsatsits qualerov tser",
  "Gdelays nuyanov soloe qrdelays ov danerits quatsov artov",
  "Intsanudelays artov irdelays hasatsdelays artov dzdelays tsov",
  "Casov dzerkh Ov dzelelays nueadzelov tsu tsov",
  "Ev dzerknadgortsov tsatsov artov adelnov tsov norgdelays tsov",
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

            <div className="absolute top-6 left-4 bg-background rounded-xl shadow-lg p-3">
              <p className="text-xs font-semibold">
                <span className="text-[hsl(35,100%,55%)]">●</span> Videlays
              </p>
              <p className="text-sm font-bold">Дasunthatsner</p>
            </div>

            <div className="absolute bottom-6 left-4 bg-background rounded-xl shadow-lg p-3">
              <p className="text-xs text-muted-foreground">Ov tsantasakandelay βitsnatoartov</p>
              <p className="text-sm font-bold">
                <span className="text-[hsl(210,90%,55%)]">●</span> Gortiqadelay
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Hatsakhn torvod <span className="text-primary">hartser</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Кatsatsgotsov ev ov 5 hatsa ov trvod hartseri aqays artasaner,
              tronits grchelits dzov artov rusdelays ov danagrdelu.
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
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
