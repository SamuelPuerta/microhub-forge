import { Lock, CreditCard, Mail, Brain, Webhook, Database, Cloud, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Authentication", icon: Lock, count: 24, color: "from-blue-500 to-blue-600" },
  { name: "Payments", icon: CreditCard, count: 18, color: "from-emerald-500 to-emerald-600" },
  { name: "Notifications", icon: Mail, count: 31, color: "from-violet-500 to-violet-600" },
  { name: "Machine Learning", icon: Brain, count: 15, color: "from-pink-500 to-pink-600" },
  { name: "Webhooks", icon: Webhook, count: 22, color: "from-orange-500 to-orange-600" },
  { name: "Data Storage", icon: Database, count: 19, color: "from-cyan-500 to-cyan-600" },
  { name: "Cloud Services", icon: Cloud, count: 27, color: "from-indigo-500 to-indigo-600" },
  { name: "Security", icon: Shield, count: 12, color: "from-red-500 to-red-600" },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore microservices organized by functionality and use case
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name} 
                className="card-hover shadow-card cursor-pointer group"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.count} services
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
