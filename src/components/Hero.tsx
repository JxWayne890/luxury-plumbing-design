import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b')] bg-cover bg-center mix-blend-overlay opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-playfair text-white font-bold mb-6">
            Premium Plumbing & Heating Solutions Tailored for You
          </h1>
          <p className="text-xl text-cream/90 mb-8">
            Serving Abilene with trusted expertise for over 20 years
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gold text-navy hover:bg-cream transition-all hover:scale-105">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;