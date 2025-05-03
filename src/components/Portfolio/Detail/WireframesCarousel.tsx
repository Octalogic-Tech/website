import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import type { PortfolioCarouselImage } from "@/types/portfolioDetails";

interface WireframesCarouselProps {
  images: PortfolioCarouselImage[];
}

const WireframesCarousel: React.FC<WireframesCarouselProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="bg-black py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative w-full">
          <div className="rounded-lg bg-black py-8">
            <Carousel
              className="w-full"
              opts={{
                align: "center",
                slidesToScroll: 1,
                containScroll: "keepSnaps",
                dragFree: false,
                loop: true,
                skipSnaps: false,
              }}
            >
              <CarouselContent className="flex items-center">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-[85%] pl-4 sm:basis-[70%] md:basis-[50%] lg:basis-auto"
                  >
                    <div className="group cursor-pointer">
                      <div className="relative flex items-center">
                        <div className="overflow-hidden rounded-lg bg-white">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="h-auto w-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-6 flex justify-end gap-4 md:mt-20">
                <CarouselPrevious className="static h-8 w-8 translate-x-0 rounded-full border-white bg-transparent text-white md:h-10 md:w-10" />
                <CarouselNext className="static h-8 w-8 translate-x-0 rounded-full border-white bg-transparent text-white md:h-10 md:w-10" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframesCarousel;
