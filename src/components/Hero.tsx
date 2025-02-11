import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/90">
        <div 
          className="absolute inset-0 bg-[url('/plumbing-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974&auto=format&fit=crop')"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-playfair text-white font-bold mb-6">
            Affordable Plumbing & Heating Solutions You Can Trust
          </h1>
          <p className="text-xl text-cream/90 mb-8">
            We're a local, low-overhead company offering expert services at prices up to 40% lower than larger competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gold text-navy hover:bg-cream transition-all hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get Your Free Quote Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;