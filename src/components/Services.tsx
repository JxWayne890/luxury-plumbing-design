import { Wrench, Droplet, Flame, Calculator } from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Plumbing Services",
    description: "Expert solutions for all your plumbing needs, from leak repairs to fixture installations and sewer line maintenance."
  },
  {
    icon: <Droplet className="h-8 w-8" />,
    title: "Water Heater Services",
    description: "Factory-certified specialists in Bradford White water heaters, providing top-quality installation and maintenance."
  },
  {
    icon: <Flame className="h-8 w-8" />,
    title: "Heating Solutions",
    description: "Professional heating repairs and installations to keep your home warm and energy-efficient all year round."
  },
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Affordable Bids",
    description: "Get free, no-obligation bids with pricing up to 40% lower than big-name competitors. We guarantee unbeatable value."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-cream/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-navy text-center font-bold mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We deliver expert results without breaking your budget. As a local, family-owned business, we pride ourselves on offering competitive pricing without compromising quality.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-gold mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair text-navy font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Button variant="outline" className="w-full hover:bg-gold hover:text-navy">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;