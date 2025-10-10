import { Check } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  const regularPlans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for trying out microservices",
      features: [
        "5 microservices/month",
        "Basic documentation",
        "Community support",
        "Public repositories",
        "Standard APIs"
      ]
    },
    {
      name: "Professional",
      price: "$29",
      description: "For individual developers",
      features: [
        "Unlimited microservices",
        "Advanced documentation",
        "Priority support",
        "Private repositories",
        "Premium APIs",
        "Custom integrations",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$79",
      description: "For power users",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "SLA guarantee",
        "Advanced monitoring",
        "Custom deployments",
        "API rate boost",
        "Early access features"
      ]
    }
  ];

  const enterprisePlans = [
    {
      name: "Team",
      price: "$199",
      description: "For growing teams",
      features: [
        "Everything in Premium",
        "Up to 10 team members",
        "Team collaboration tools",
        "Shared repositories",
        "Custom roles & permissions",
        "Audit logs",
        "Dedicated account manager"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Team",
        "Unlimited team members",
        "On-premise deployment",
        "Custom SLA",
        "24/7 phone support",
        "Security compliance",
        "Custom contracts",
        "White-label options"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free or scale up with premium features for production workloads
          </p>
        </div>

        {/* Regular Plans */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">For Developers</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {regularPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-xl p-8 backdrop-blur-sm transition-all duration-300 animate-fade-in ${
                  plan.popular
                    ? "bg-gradient-primary shadow-glow scale-105"
                    : "bg-card/50 border border-border hover:border-primary/50 hover:shadow-card-hover"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : ""}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${plan.popular ? "text-white" : ""}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                      /month
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-white" : "text-primary"
                      }`} />
                      <span className={`text-sm ${plan.popular ? "text-white/90" : "text-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "secondary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Plans */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">For Enterprises</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {enterprisePlans.map((plan, index) => (
              <div
                key={plan.name}
                className="relative rounded-xl p-8 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-hover animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-sm text-muted-foreground">/month</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full" size="lg">
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
