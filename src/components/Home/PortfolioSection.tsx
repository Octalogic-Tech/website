import React from "react";
import { Typography } from "../common/template";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import type { PortfolioSectionData } from "@/types/home";

interface PortfolioSectionProps {
  data?: PortfolioSectionData;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ data }) => {
  return (
    <section className="mx-auto flex min-h-[150vh] w-full flex-col items-center justify-center gap-8 md:py-8">
      <div className="flex flex-col items-start justify-start gap-6 px-4 md:ml-40 md:px-0">
        <Typography
          variant="H2Medium64"
          className="bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text text-center uppercase text-transparent"
        >
          {data?.title}
        </Typography>
        <Typography variant="BodyMMedium16" className="text-start text-[#737373] md:max-w-[60%]">
          {data?.description}
        </Typography>
        <div className="flex w-full items-start md:max-w-[40%]">
          <Button variant="primary" className="w-full rounded-full p-6 py-7 md:w-fit" asChild>
            <a href={data?.ctaButton.buttonUrl}>
              <Typography variant="H6Regular24" className="uppercase text-[#0A3D62]">
                {data?.ctaButton.buttonLabel}
              </Typography>
            </a>
          </Button>
        </div>
      </div>

      <div className="relative w-full px-4 lg:px-12">
        <Carousel
          className="w-full"
          opts={{
            align: "center",
            slidesToScroll: 1,
            containScroll: "keepSnaps",
            dragFree: false,
            loop: false,
            skipSnaps: false,
          }}
        >
          <div className="absolute right-8 top-0 z-10 flex gap-2">
            <CarouselPrevious className="static h-12 w-12 translate-x-0 rounded-full border-[#0A3D62] bg-white hover:bg-gray-100" />
            <CarouselNext className="static h-12 w-12 translate-x-0 rounded-full border-[#0A3D62] bg-white hover:bg-gray-100" />
          </div>

          <div className="pt-[10vh]">
            <CarouselContent className="-ml-4 flex items-end">
              {data?.portfolioCarousel?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[300px] pl-4 transition-all duration-300 md:basis-[320px]"
                >
                  <div className="group max-w-[45vw] cursor-pointer">
                    <div className="relative flex min-h-[80vh] max-w-[40vw] items-center justify-center">
                      <div className="absolute right-1 top-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Typography variant="BodyMMedium16" className="text-[#0A3D62]">
                          {String(index + 1).padStart(2, "0")}/
                          {String(data?.portfolioCarousel?.length).padStart(2, "0")}
                        </Typography>
                      </div>

                      <div className="absolute bottom-40 h-[40vh] w-[40vh] overflow-hidden rounded-lg transition-all duration-300 hover:h-[55vh] hover:w-[43vh]">
                        <img
                          src={item?.carouselImage.url}
                          alt={item?.carouselImage.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 min-h-36">
                        <Typography
                          variant="H6Medium24"
                          className="uppercase text-[#0A3D62] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          {item?.carouselTitle}
                        </Typography>
                        <Typography
                          variant="CaptionLMedium14"
                          className="mt-2 text-[#0A3D62] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          {item?.carouselDescription}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PortfolioSection;
