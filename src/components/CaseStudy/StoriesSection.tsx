import React from "react";
import { Typography } from "../common/template";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CaseStudyCard from "@/components/CaseStudy/CaseStudyCard";
import type { StoriesSectionProps, CaseCardType } from "@/types/casestudy";

const StoriesSection: React.FC<StoriesSectionProps> = ({ data }) => {
  return (
    <section className="flex min-h-[140vh] items-center justify-center overflow-hidden px-4 py-16 lg:px-32 lg:py-8">
      <div className="relative w-full">
        <Carousel className="relative flex flex-col gap-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between lg:pr-24">
            <div className="flex flex-col gap-4 lg:max-w-[45%] lg:gap-8">
              <div className="uppercase">
                <Typography
                  variant="H2SemiBold64"
                  className="bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text tracking-tight text-transparent"
                >
                  {data?.title || ""}
                </Typography>
              </div>
              <div>
                <Typography variant="BodyMMedium16" className="text-[#737373]">
                  {(data?.description || "").split("\n\n").map((paragraph, index, arr) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      {index < arr.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </Typography>
              </div>
            </div>
            <div className="flex gap-2 text-[#0A3D62]">
              <CarouselPrevious className="static transform-none rounded-full border border-[#0A3D62] p-3 hover:bg-gray-100" />
              <CarouselNext className="static transform-none rounded-full border border-[#0A3D62] p-3 hover:bg-gray-100" />
            </div>
          </div>

          <CarouselContent className="flex lg:gap-6">
            {data?.stories?.map((story, index) => {
              const cardData: CaseCardType = {
                logo: {
                  url: story.logo?.url || "",
                  alt: story.logo?.alt || "",
                },
                title: story.title || "",
                description: story.description || "",
                image: {
                  url: story.image?.url || "",
                  alt: story.image?.alt || "",
                },
                button: {
                  buttonUrl: story.button?.buttonUrl || "#",
                  buttonLabel: story.button?.buttonLabel || "View Case Study",
                },
                slug: story.slug,
              };

              return (
                <CarouselItem
                  key={index}
                  className="flex basis-[100%] justify-center lg:basis-[60%]"
                >
                  <CaseStudyCard className="bg-[#FAFAFA]" {...cardData} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default StoriesSection;
