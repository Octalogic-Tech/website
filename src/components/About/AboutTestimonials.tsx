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
        className="mx-auto w-full max-w-[1440px]"
      >
        <CarouselContent>
          {data?.testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="basis-auto">
              <Card className="flex h-[330px] w-[340px] flex-col justify-between rounded-2xl border p-6 md:h-[480px] md:w-[400px]">
                <div className="flex justify-end">
                  <img
                    src={testimonial.cardLogo.url}
                    alt={testimonial.cardLogo.alt}
                    className="h-8"
                  />
                </div>

                <Typography variant="BodyMMedium16" className="text-[#0A3D62]">
                  {testimonial.cardDescription}
                </Typography>

                <div className="flex items-center gap-4">
                  <div className="flex h-[45px] w-[45px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
                    <img
                      src={testimonial.profileImage.url}
                      alt={testimonial.profileImage.alt}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <Typography variant="CaptionMSemiBold12" className="mb-1 text-[#0A3D62]">
                      {testimonial.profileName}
                    </Typography>
                    <Typography variant="CaptionLMedium14" className="text-gray-600">
                      {testimonial.profilePosition}
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
