import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const footerLinks = [
  { label: "Մasн Azganuн", href: "#" },
  { label: "Эl. hasаts", href: "#" },
  { label: "Нertdelays", href: "#" },
  { label: "Ner namanаg", href: "#" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 md:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Кap <span className="text-primary">Мez Нет</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {footerLinks.map((link, i) => (
            <div key={i}>
              <label className="text-xs text-muted-foreground block mb-2">{link.label}</label>
              <div className="h-10 border border-border rounded-md"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            Undargvel namanак <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              f
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              𝕏
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} OmniDX Academy. Всdelays delays delays.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
