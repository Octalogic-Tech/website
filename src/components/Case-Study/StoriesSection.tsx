import React from "react";
import { Typography } from "../common/template";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StoriesSection: React.FC = () => {
  return (
    <section className="overflow-hidden px-[16px] py-[90px] lg:gap-[64px] lg:px-[96px] lg:py-[140px]">
      {/* Carousel section */}
      <div className="relative w-[calc(100%+96px)]">
        <Carousel className="relative flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[64px] pr-[96px] lg:flex-row lg:items-end lg:justify-between">
            {/* title and description */}
            <div className="flex flex-col gap-[16px] lg:w-[612px] lg:gap-[32px]">
              <div className="uppercase">
                <Typography
                  variant="H2SemiBold64"
                  className="bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text text-[40px]/[48px] tracking-tight text-transparent"
                >
                  Client success stories
                </Typography>
              </div>
              <div>
                <Typography variant="BodyMMedium16" className="text-[14px]/[20px] text-[#737373]">
                  Envision streamlined shipping platforms, AI-driven data insights illuminating
                  hidden opportunities, custom mobile apps cultivating unbreakable customer loyalty,
                  and bespoke software empowering efficiencies while generating new revenue streams.
                  <br />
                  <br />
                  These are not mere accolades, but testaments to the transformative journey
                  businesses embark upon when partnering with us.
                </Typography>
              </div>
            </div>
            {/* Navigation buttons at the top-right */}
            <div className="flex gap-[8px] text-[#0A3D62]">
              <CarouselPrevious className="static transform-none rounded-full border border-[#0A3D62] p-3 hover:bg-gray-100" />
              <CarouselNext className="static transform-none rounded-full border border-[#0A3D62] p-3 hover:bg-gray-100" />
            </div>
          </div>

          {/* Carousel content */}
          <CarouselContent className="flex lg:gap-[24px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="flex basis-[374px] justify-center lg:basis-[824px]"
              >
                <Card className="flex w-[358px] flex-col justify-between gap-[12px] rounded-[24px] border-none bg-[#FAFAFA] p-[8px] shadow-none lg:w-[824px] lg:flex-row lg:p-[12px]">
                  <div className="order-2 flex max-w-[394px] flex-col justify-between gap-[24px] p-[6px] lg:order-1 lg:p-[36px]">
                    <img
                      src="/img-1.jpg"
                      alt="Case study visual"
                      className="h-[32px] w-[134px] lg:h-[40px] lg:w-[170px]"
                    />

                    <Typography
                      variant="CaptionLMedium14"
                      className="text-[12px]/[16px] text-[#525252]"
                    >
                      We were brought in to refresh their primary digital properties with a
                      particular focus on building a robust eCommerce capability that re-imaged the
                      way consumers purchase tyres, wheels and batteries online. We achieved this by
                      crafting an informative and intuitive purchasing experience, backed by
                      comprehensive usability research and validation.
                    </Typography>

                    <Button
                      variant="secondary"
                      className="m-0 h-fit w-fit rounded-full border-[#0A3D62] bg-white p-0 text-[#0A3D62]"
                    >
                      <Typography variant="H6SemiBold24" className="px-[32px] py-[12px] uppercase">
                        View Case Study
                      </Typography>
                    </Button>
                  </div>

                  <div className="order-1 h-[200px] lg:order-2 lg:h-[396px] lg:w-[394px]">
                    <img
                      src="/img-1.jpg"
                      alt="Case study visual"
                      className="h-full w-full rounded-[16px] object-cover"
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default StoriesSection;
