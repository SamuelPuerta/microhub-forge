import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      company: "TechFlow Inc.",
      avatar: "SC",
      rating: 5,
      text: "MicroHub transformed our development workflow. We integrated 5 production-ready microservices in a week. The OpenAPI documentation and sandbox testing saved us months of development time.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      company: "StartupLab",
      avatar: "MR",
      rating: 5,
      text: "The quality of microservices here is outstanding. Every service we've deployed has been rock-solid. The deployment options for AWS and GCP made integration seamless.",
    },
    {
      name: "Emily Watson",
      role: "Engineering Manager",
      company: "DataCore Systems",
      avatar: "EW",
      rating: 5,
      text: "We replaced 3 third-party vendors with MicroHub microservices. Not only did we save costs, but we gained better performance and control. The verification badges give us confidence in production.",
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      company: "Freelancer",
      avatar: "DK",
      rating: 5,
      text: "As a solo developer, MicroHub is a game-changer. I can focus on building unique features while using battle-tested microservices for common functionality. The sandbox feature is brilliant!",
    },
    {
      name: "Laura Martinez",
      role: "VP of Engineering",
      company: "FinTech Solutions",
      avatar: "LM",
      rating: 5,
      text: "Security and compliance are critical for us. MicroHub's verification process and security badges help us meet our standards. The Enterprise plan gives us the SLA guarantees we need.",
    },
    {
      name: "James Thompson",
      role: "DevOps Engineer",
      company: "CloudScale",
      avatar: "JT",
      rating: 5,
      text: "The deployment experience is exceptional. Docker containers, AWS Lambda, GCP Cloud Run - all options work flawlessly. Documentation is clear and comprehensive. Highly recommend!",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient effects */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers and companies building with MicroHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative rounded-xl p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { value: "10,000+", label: "Active Developers" },
            { value: "500+", label: "Microservices" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "50M+", label: "API Calls/Month" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${(index + 6) * 100}ms` }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
