import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 md:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Кap <span className="text-primary">Мez Нет</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <label className="text-xs text-muted-foreground block mb-2">Аnun Аzganun</label>
            <Input className="border-border rounded-md" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground block mb-2">Эl.hasaste</label>
            <Input className="border-border rounded-md" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground block mb-2">Нerratsahhamar</label>
            <Input className="border-border rounded-md" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground block mb-2">Зer namanakе</label>
            <Input className="border-border rounded-md" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            Ougargvelov namaк <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-sm">
              f
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-sm">
              𝕏
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            Боlor iravunknere partsagvadz en | ©
          </p>
          <p className="text-xs text-muted-foreground">
            2026 © DX Soft Бroup d.PK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
