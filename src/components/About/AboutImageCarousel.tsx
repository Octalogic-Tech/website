import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import type { CarouselImage } from "@/types/about";
import DatoCmsImage from "@/components/common/DatoCmsImage";

interface AboutImageCarouselProps {
  data: CarouselImage[];
}

const AboutImageCarousel: React.FC<AboutImageCarouselProps> = ({ data }) => {
  return (
    <section className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: false,
        }}
        className="mx-auto w-full max-w-[1450px] px-4"
      >
        <CarouselContent className="-ml-4">
          {data?.map((image, index) => (
            <CarouselItem key={index} className="shrink-0 basis-auto pl-4">
              <Card className="h-[300px] w-[200px] overflow-hidden rounded-xl border-0">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  {image.responsiveImage ? (
                    <DatoCmsImage
                      data={image}
                      className="absolute inset-0 h-full w-full transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  )}
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
