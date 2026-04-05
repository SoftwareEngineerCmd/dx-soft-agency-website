import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Ստatsedelays Norutyuнnerov ev aravatstsner
            </h3>
            <p className="text-sm text-muted-foreground">
              anditsadelay Zer <span className="text-primary font-semibold">Эl. phostin</span>
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Input
              placeholder="Эl. phosta"
              className="rounded-full bg-background max-w-xs"
            />
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
              Гrasvelov gratsvel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
