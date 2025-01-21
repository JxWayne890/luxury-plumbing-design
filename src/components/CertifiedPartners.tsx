import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const partners = [
  {
    name: "Pfister Faucets",
    logo: "/placeholder.svg", // Replace with actual logo
  },
  {
    name: "InSinkErator",
    logo: "/placeholder.svg", // Replace with actual logo
  },
  {
    name: "Kohler",
    logo: "/placeholder.svg", // Replace with actual logo
  },
  {
    name: "American Standard",
    logo: "/placeholder.svg", // Replace with actual logo
  },
  {
    name: "Delta Faucets",
    logo: "/placeholder.svg", // Replace with actual logo
  },
];

const CertifiedPartners = () => {
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
                    className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
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