import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, MessageSquare } from "lucide-react";

const AdminDashboard = () => {
  const { data: teacherCount } = useQuery({
    queryKey: ["admin-teachers-count"],
    queryFn: async () => {
      const { count } = await supabase.from("teachers").select("*", { count: "exact", head: true });
      return count ?? 0;
    },
  });

  const { data: courseCount } = useQuery({
    queryKey: ["admin-courses-count"],
    queryFn: async () => {
      const { count } = await supabase.from("courses").select("*", { count: "exact", head: true });
      return count ?? 0;
    },
  });

  const { data: supportCount } = useQuery({
    queryKey: ["admin-support-count"],
    queryFn: async () => {
      const { count } = await supabase.from("support_requests").select("*", { count: "exact", head: true });
      return count ?? 0;
    },
  });

  const stats = [
    { label: "Teachers", value: teacherCount ?? 0, icon: Users, color: "text-primary" },
    { label: "Courses", value: courseCount ?? 0, icon: BookOpen, color: "text-[hsl(210,90%,55%)]" },
    { label: "Support Requests", value: supportCount ?? 0, icon: MessageSquare, color: "text-[hsl(35,100%,55%)]" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-3 gap-6">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className={cn("h-5 w-5", s.color)} />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";
export default AdminDashboard;
