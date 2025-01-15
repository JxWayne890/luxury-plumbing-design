import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Adams Plumbing provided exceptional service. Their attention to detail and professionalism is unmatched.",
    role: "Homeowner",
    rating: 5
  },
  {
    name: "Michael Chen",
    text: "The team's expertise in heating systems saved us from a cold winter. Highly recommended!",
    role: "Business Owner",
    rating: 5
  },
  {
    name: "Emily Davis",
    text: "Outstanding quality and service. They transformed our outdated bathroom into a modern oasis.",
    role: "Residential Client",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className="h-5 w-5 text-gold inline-block"
        fill={index < rating ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center font-bold mb-12">
          Client Testimonials
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <button 
              onClick={prev}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="text-center px-8">
              <div key={currentIndex} className="transition-opacity duration-500 ease-in-out">
                <Quote className="h-8 w-8 text-gold mx-auto mb-6" />
                <div className="mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <p className="text-lg mb-6 italic">
                  {testimonials[currentIndex].text}
                </p>
                <div className="font-playfair">
                  <p className="font-bold text-gold">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-cream/70">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={next}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;