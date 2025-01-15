import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import WhyChooseUs from "@/components/WhyChooseUs"
import ContactForm from "@/components/ContactForm"

const Index = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  )
}

export default Index