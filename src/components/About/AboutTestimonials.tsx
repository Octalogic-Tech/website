import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Typography } from "../common/template";
import DatoCmsImage from "../common/DatoCmsImage";
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
              <Card className="flex h-[60vh] w-[80vw] flex-col justify-between rounded-2xl border p-6 md:h-[65vh] md:w-[27vw]">
                <div className="flex w-full items-start justify-start">
                  <div className="h-8 w-auto">
                    {testimonial.cardLogo.responsiveImage ? (
                      <DatoCmsImage
                        data={testimonial.cardLogo}
                        className="h-8 w-auto"
                        objectFit="contain"
                      />
                    ) : (
                      <img
                        src={testimonial.cardLogo.url}
                        alt={testimonial.cardLogo.alt}
                        className="h-8 w-auto object-contain"
                        style={{ alignSelf: "flex-start" }}
                      />
                    )}
                  </div>
                </div>

                <Typography variant="BodyMMedium16" className="text-[#0A3D62]">
                  {testimonial.cardDescription}
                </Typography>

                <div className="flex items-center gap-4">
                  <div className="flex h-[45px] w-[45px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
                    <DatoCmsImage
                      data={testimonial.profileImage}
                      className="h-full w-full rounded-full object-cover"
                      objectFit="cover"
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
