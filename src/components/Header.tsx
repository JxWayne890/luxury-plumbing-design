import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-xl font-playfair text-white font-bold">
            Adams Plumbing and Heating
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavigation('services')} className="text-white hover:text-gold transition-colors">Services</button>
            <button onClick={() => handleNavigation('testimonials')} className="text-white hover:text-gold transition-colors">Testimonials</button>
            <button onClick={() => handleNavigation('contact')} className="text-white hover:text-gold transition-colors">Contact</button>
            <Link to="/faqs" className="text-white hover:text-gold transition-colors">FAQs</Link>
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