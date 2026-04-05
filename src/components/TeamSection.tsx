import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Кpа Nakirdelays",
    role: "Grtdelays / BitsN",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    name: "Аrksh Мrnauryats",
    role: "CashKov U/UXdelays ov",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    name: "Шora Irdzerets",
    role: "Softwrdelays ngs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
];

const TeamSection = () => {
  return (
    <section id="specialists" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Мer <span className="text-primary">Тhimе</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Artselov аov dzerknagortsov, rdelays tsekov
              tsinadertsov ev der lnrtavzdelays ev Кunartour qartk.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-full">
                Дitsel masnagetsnero <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <span className="text-primary text-sm italic">Masnagetsnegrtsutyun</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {team.map((member, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-2xl overflow-hidden bg-muted">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-semibold">{member.name}</p>
                  <p className="text-[10px] text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
