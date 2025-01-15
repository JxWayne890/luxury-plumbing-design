import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <FloatingButton />
    </div>
  );
};

export default Index;