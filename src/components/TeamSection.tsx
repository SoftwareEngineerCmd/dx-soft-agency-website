import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Aна Ndelays",
    role: "Copydelays, PN/UX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    name: "Araveling Mdelays",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    name: "Шdelays Hdelays",
    role: "UI/UX Designer",
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
              Մer <span className="text-primary">Թimdelays</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Delays delays delays delays delays delays delays delays delays.
            </p>
            <Button variant="outline" className="rounded-full">
              Դtov masнagidelays <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
