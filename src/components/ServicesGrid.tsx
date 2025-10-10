import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "OAuth2 Service",
    description: "Complete OAuth2/OIDC authentication server with multi-provider support. Includes JWT tokens, refresh flows, and RBAC.",
    category: "Authentication",
    verified: true,
    price: "Free" as const,
    downloads: "15.2k",
    rating: 4.9,
    language: "Node.js",
  },
  {
    name: "Stripe Payment Gateway",
    description: "Production-ready Stripe integration with subscriptions, webhooks, and invoice management. PCI compliant.",
    category: "Payments",
    verified: true,
    price: "Premium" as const,
    downloads: "8.3k",
    rating: 4.8,
    language: "Python",
  },
  {
    name: "Email & SMS Hub",
    description: "Multi-channel notification service supporting SendGrid, Twilio, and AWS SES. Template management included.",
    category: "Notifications",
    verified: true,
    price: "Free" as const,
    downloads: "12.1k",
    rating: 4.7,
    language: "Go",
  },
  {
    name: "Image Recognition API",
    description: "AI-powered image classification and object detection using TensorFlow. Pre-trained on 1000+ categories.",
    category: "Machine Learning",
    verified: true,
    price: "Premium" as const,
    downloads: "5.7k",
    rating: 4.9,
    language: "Python",
  },
  {
    name: "Webhook Relay",
    description: "Reliable webhook delivery service with retry logic, payload transformation, and event logging.",
    category: "Webhooks",
    verified: false,
    price: "Free" as const,
    downloads: "4.2k",
    rating: 4.6,
    language: "Node.js",
  },
  {
    name: "PostgreSQL Manager",
    description: "Database migration service with backup automation, query optimization, and connection pooling.",
    category: "Data Storage",
    verified: true,
    price: "Premium" as const,
    downloads: "9.8k",
    rating: 4.8,
    language: "Rust",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Microservices</h2>
            <p className="text-muted-foreground">
              Battle-tested services used by thousands of developers
            </p>
          </div>
          <button className="text-primary hover:underline font-medium">
            View all →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
