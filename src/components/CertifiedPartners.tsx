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
    logo: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=300&h=200&fit=crop", // Faucet image
  },
  {
    name: "InSinkErator",
    logo: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop", // Kitchen sink image
  },
  {
    name: "Kohler",
    logo: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=300&h=200&fit=crop", // Modern bathroom fixture
  },
  {
    name: "American Standard",
    logo: "https://images.unsplash.com/photo-1560185127-2e9c54d9d360?w=300&h=200&fit=crop", // Bathroom interior
  },
  {
    name: "Delta Faucets",
    logo: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=300&h=200&fit=crop", // Modern faucet
  },
];

const CertifiedPartners = () => {
  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
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