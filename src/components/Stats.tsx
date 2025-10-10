import { Package, Users, Download, Globe } from "lucide-react";

const stats = [
  { icon: Package, label: "Microservices", value: "150+" },
  { icon: Users, label: "Active Developers", value: "50k+" },
  { icon: Download, label: "Total Downloads", value: "2.5M+" },
  { icon: Globe, label: "Countries", value: "120+" },
];

const Stats = () => {
  return (
    <section className="py-16 border-y bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center space-y-2 animate-fade-in">
                <Icon className="w-8 h-8 mx-auto text-primary" />
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
