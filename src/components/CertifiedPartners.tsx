import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const partners = [
    {
      name: "Pfister Faucets",
      logo: "/images/Pfister.png",
      maxHeight: "h-24" // Smaller
    },
    {
      name: "InSinkErator",
      logo: "/images/insinkerator.png",
      maxHeight: "h-32" // Larger
    },
    {
      name: "Kohler",
      logo: "/images/Kohler.png",
      maxHeight: "h-28" // Medium
    },
    {
      name: "American Standard",
      logo: "/images/American.png",
      maxHeight: "h-24" // Smaller
    },
    {
      name: "Delta Faucets",
      logo: "/images/Delta.png",
      maxHeight: "h-32" // Larger
    }
];

const CertifiedPartners = () => {
  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }),
    []
  );

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">
          Proudly Certified by Leading Brands
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {[...partners, ...partners].map((partner, idx) => (
              <CarouselItem
                key={idx}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div
                  className={cn(
                    "relative h-32 flex items-center justify-center",
                    "transition-all duration-300 filter grayscale hover:grayscale-0",
                    "group cursor-pointer"
                  )}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={cn(
                      partner.maxHeight,
                      "w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    )}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CertifiedPartners;