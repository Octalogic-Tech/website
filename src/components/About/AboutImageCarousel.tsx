import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import type { CarouselImage } from "@/types/about";

interface AboutImageCarouselProps {
  data: CarouselImage[];
}

const AboutImageCarousel: React.FC<AboutImageCarouselProps> = ({ data }) => {
  return (
    <section className="w-full bg-[#F3FFFD]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: false,
        }}
        className="mx-auto w-full px-4"
      >
        <CarouselContent>
          {data.map((image, index) => (
            <CarouselItem key={index} className="shrink-0 basis-auto pl-4">
              <Card className="aspect-[3/4] w-[30vw] overflow-hidden sm:w-[25vw] md:w-[15vw] lg:w-[13vw]">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src={image.url}
                    alt="Company culture"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AboutImageCarousel;
