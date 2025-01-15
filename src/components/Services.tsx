import { Wrench, Thermometer, ShowerHead } from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Plumbing Repairs",
    description: "Expert solutions for all your plumbing needs, from minor fixes to major repairs."
  },
  {
    icon: <Thermometer className="h-8 w-8" />,
    title: "Heating Installation",
    description: "Professional installation and maintenance of heating systems for your comfort."
  },
  {
    icon: <ShowerHead className="h-8 w-8" />,
    title: "Bathroom Remodeling",
    description: "Transform your bathroom with our premium remodeling services."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-cream/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-navy text-center font-bold mb-12">
          Our Premium Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
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