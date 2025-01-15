import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FloatingButton = () => {
  return (
    <Button 
      className="fixed bottom-6 right-6 bg-gold text-navy hover:bg-cream shadow-lg rounded-full w-14 h-14 p-0 animate-fade-in"
      onClick={() => window.location.href = 'tel:3255550123'}
    >
      <Phone className="h-6 w-6" />
    </Button>
  );
};

export default FloatingButton;