import { ArrowRight, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight uppercase">
              ԿՐdelays,{" "}
              <span className="text-primary">ՈRE</span>
              <br />
               DELAYS{" "}
              <span className="text-primary">Է DELAYS</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
              Inu ndelaych, or dprochedelays է hraanat ov agdelaysadardelaysits hatsagordudelayster ov dzedelays agordelaysdarachardelays ev sekvdelaysirmatselav av aganvitsdelays azekazmakelayserudelays gravabeats gelvhdelaysn
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-3 text-sm">
              Դitsel dasuntachnere
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-[hsl(45,100%,50%)]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-8 -left-4 md:left-0 bg-background rounded-xl shadow-lg p-3 flex items-center gap-2">
              <div className="bg-[hsl(35,100%,55%)] rounded-full p-2">
                <Users className="h-4 w-4 text-background" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Videlays</p>
                <p className="text-sm font-bold">Դasunthatsner</p>
              </div>
            </div>

            <div className="absolute bottom-12 -left-4 md:left-0 bg-background rounded-xl shadow-lg p-3 flex items-center gap-2">
              <div className="bg-[hsl(210,90%,55%)] rounded-full p-2">
                <Briefcase className="h-4 w-4 text-background" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Ov tsantasakanutyunelov βdelays</p>
                <p className="text-sm font-bold">Gortiqadelay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
