import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Typography } from "../common/template";
import type { TestimonialsData } from "@/types/about";

interface AboutTestimonialsProps {
  data?: TestimonialsData;
}

const AboutTestimonials: React.FC<AboutTestimonialsProps> = ({ data }) => {
  return (
    <section className="px-4 py-16 md:py-32">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        className="mx-auto w-full"
      >
        <CarouselContent>
          {data?.testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="basis-auto">
              <Card className="flex h-[60vh] w-[90vw] flex-col justify-between rounded-2xl p-6 sm:w-[50vw] md:h-[65vh] md:w-[27vw]">
                <div className="flex justify-end">
                  <img src={testimonial.logo} alt="Company logo" className="h-8" />
                </div>

                <Typography variant="BodyMMedium16" className="text-[#0A3D62]">
                  {testimonial.description}
                </Typography>

                <div className="flex items-center gap-4">
                  <div className="flex h-[45px] w-[45px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <Typography variant="CaptionMSemiBold12" className="mb-1 text-[#0A3D62]">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="CaptionLMedium14" className="text-gray-600">
                      {testimonial.position}
                    </Typography>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AboutTestimonials;
