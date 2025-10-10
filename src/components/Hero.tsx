import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            The <span className="gradient-text">Marketplace</span> for
            <br />
            Production-Ready Microservices
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover, test, and deploy battle-tested microservices in seconds. 
            Built by developers, for developers.
          </p>

          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                type="search"
                placeholder="Search microservices... (e.g., 'authentication', 'payment gateway')"
                className="pl-12 pr-32 h-14 text-base shadow-card focus:shadow-card-hover transition-shadow"
              />
              <Button 
                size="lg"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-primary hover:opacity-90"
              >
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
            <span>Popular:</span>
            {["Auth", "Payments", "Email", "ML APIs", "Webhooks"].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
