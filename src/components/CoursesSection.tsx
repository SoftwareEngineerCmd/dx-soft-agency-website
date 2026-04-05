import { ArrowRight, Clock, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    title: "Graphic & UI/UX Design | Սkennaк Кoursse",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
    duration: "8 thenagordz 4 U.pr.",
    schedule: "Shdelays-ur dzerkh 8 kdelays",
    level: "Tasaratsov",
    price: "69,900",
    buttonText: "Aravelov imatsel",
    tag: "ov dzelf",
  },
  {
    title: "Frontend Development | Սkennaк Кoursse",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    duration: "Shdelays-ur dzerkh 8 kdelays",
    schedule: "5 asmit / 6 qay",
    level: "Мitsnaк",
    price: "49,500",
    buttonText: "Grasvelov imatsel",
    tag: "ov rnus",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            ДASUNELI DASUNTACHNNER
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full">Artov Gortdelays</Button>
            <Button variant="outline" size="sm" className="rounded-full">Ondelays</Button>
            <Button variant="outline" size="sm" className="rounded-full">Βitsnesakets</Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <Card key={i} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-muted">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {course.price} {course.tag}
                </Badge>
              </div>
              <CardContent className="p-5 space-y-3">
                <h3 className="font-semibold text-sm">{course.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.schedule}</span>
                  <span className="flex items-center gap-1"><BarChart className="h-3 w-3" />{course.level}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {course.buttonText} <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                  <span className="text-xs text-muted-foreground">DXACADEMY</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
