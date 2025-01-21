import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FloatingButton = () => {
  return (
    <Button 
      className="fixed bottom-6 right-6 bg-white text-navy hover:bg-navy hover:text-white shadow-lg rounded-full w-14 h-14 p-0 animate-fade-in"
      onClick={() => window.location.href = 'tel:3256776322'}
    >
      <Phone className="h-6 w-6" />
    </Button>
  );
};

export default FloatingButton;