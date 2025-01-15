import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-xl font-playfair text-white font-bold">
            Adams Plumbing and Heating
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-gold transition-colors">Services</a>
            <a href="#testimonials" className="text-white hover:text-gold transition-colors">Testimonials</a>
            <a href="#contact" className="text-white hover:text-gold transition-colors">Contact</a>
          </nav>

          <Button className="bg-gold text-navy hover:bg-cream transition-colors">
            <Phone className="mr-2 h-4 w-4" />
            (325) 555-0123
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;