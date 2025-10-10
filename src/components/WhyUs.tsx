import { Zap, Shield, Code2, Rocket, CheckCircle2, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Deploy in Minutes",
      description: "Pre-built microservices ready to deploy. No setup, no infrastructure headaches. Just choose your provider (AWS, GCP, Docker) and go live."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Every microservice passes rigorous security audits, automated testing, and performance benchmarks before reaching the marketplace."
    },
    {
      icon: Code2,
      title: "Interactive Documentation",
      description: "Full OpenAPI/Swagger integration with live sandbox testing. Try every endpoint before committing, with real-time response previews."
    },
    {
      icon: Rocket,
      title: "Production-Ready Quality",
      description: "All services include test coverage reports, performance metrics, and quality badges. Know exactly what you're deploying."
    },
    {
      icon: CheckCircle2,
      title: "Verified & Maintained",
      description: "Our verification pipeline ensures continuous updates, security patches, and compatibility. Sleep well knowing your services are maintained."
    },
    {
      icon: Globe,
      title: "Multi-Cloud Deployment",
      description: "One-click deployment to AWS Lambda, GCP Cloud Run, or Docker containers. Your infrastructure, your choice, zero vendor lock-in."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Why Choose MicroHub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The fastest way from idea to production. Pre-built, tested, and ready to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="relative p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <div className="space-y-2">
              <p className="text-2xl font-bold gradient-text">
                Join 10,000+ developers building faster
              </p>
              <p className="text-muted-foreground">
                Stop reinventing the wheel. Focus on what makes your product unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
