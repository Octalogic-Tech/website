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
    <section className="mx-auto flex w-full flex-col gap-16 bg-[#f3fffd] py-24">
      <div className="flex max-w-[780px] flex-col items-start justify-start gap-6 px-4 md:ml-60 md:px-0">
        <Typography variant="H2Medium64" className="text-center uppercase text-[#0A3D62]">
          {data?.title}
        </Typography>
        <Typography variant="BodyMMedium16" className="max-w-[720px] text-start text-[#0A3D62]">
          {data?.description}
        </Typography>
        <Button variant="outline" className="mt-4 w-full rounded-xl !p-6 md:w-[200px] md:!p-8">
          <Typography variant="H6SemiBold24" className="uppercase text-[#0A3D62]">
            {data?.ctaButton?.text}
          </Typography>
        </Button>
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

          <div className="pt-[70px]">
            <CarouselContent className="-ml-4 flex items-end">
              {data?.portfolioItems?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[300px] pl-4 transition-all duration-300 md:basis-[320px]"
                >
                  <div className="group w-[320px] cursor-pointer">
                    <div className="relative flex h-[560px] w-[300px] items-center justify-center">
                      <div className="absolute right-1 top-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:right-[-50px]">
                        <Typography variant="BodyMMedium16" className="text-[#0A3D62]">
                          {String(index + 1).padStart(2, "0")}/
                          {String(data?.portfolioItems?.length).padStart(2, "0")}
                        </Typography>
                      </div>

                      <img
                        src={item?.image}
                        alt={item?.title}
                        className="absolute bottom-40 h-[300px] w-[280px] rounded-lg object-cover transition-all duration-300 hover:h-[400px] hover:w-[300px]"
                      />

                      <div className="absolute bottom-0 left-0 right-0 h-36">
                        <Typography
                          variant="H6Medium24"
                          className="uppercase text-[#0A3D62] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          {item?.title}
                        </Typography>
                        <Typography
                          variant="CaptionLMedium14"
                          className="mt-2 text-[#0A3D62] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          {item?.description}
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
