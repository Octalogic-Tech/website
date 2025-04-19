import { useState, useEffect } from "react";
import { Typography } from "../common/template";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { DiscoverySectionData } from "@/types/services";

interface DiscoverySectionProps {
  data: DiscoverySectionData;
}

export default function DiscoverySection({ data }: DiscoverySectionProps) {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setActiveSection(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(activeSection - 1);
  }, [api, activeSection]);

  return (
    <section className="flex w-full flex-col gap-16 bg-gradient-to-b from-[#FFFFFF] to-[#DBEAFE] md:gap-32">
      <div className="flex w-full flex-wrap justify-center gap-4 bg-[#000] px-4 py-6 md:gap-16 md:px-12 md:py-12">
        {data?.items?.map((item) => (
          <div key={item.id} onClick={() => setActiveSection(item.id)} className="cursor-pointer">
            <Typography
              variant="H4SemiBold40"
              className={cn(
                "text-sm uppercase md:text-base lg:text-xl",
                activeSection === item.id ? "text-[#fff]" : "text-gray-400 hover:text-gray-300",
              )}
            >
              {item?.navTitle}
            </Typography>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-12 md:gap-24">
        <div className="mx-auto w-full text-center md:w-[600px]">
          <Typography variant="H5SemiBold32" className="text-[#00000]">
            [{String(activeSection).padStart(3, "0")}]
          </Typography>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {data.items.map((item) => (
              <CarouselItem key={item?.id} className="flex items-center justify-center md:px-0">
                <div className="flex w-full flex-col items-center gap-8 md:w-[600px] md:flex-row md:items-start">
                  <div className="w-full px-4 md:w-[300px] md:flex-shrink-0">
                    <Typography
                      variant="H3SemiBold48"
                      className="mb-3 text-center uppercase text-[#0A3D62] md:text-left"
                    >
                      {item?.title}
                    </Typography>

                    <Typography
                      variant="CaptionMSemiBold12"
                      className="mb-4 !font-medium text-[#0A3D62]"
                    >
                      {item?.description}
                    </Typography>

                    <ul className="flex flex-col gap-2">
                      {item.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-1 h-1 w-1 rounded-full bg-[#0A3D62]" />
                          <Typography variant="CaptionMMedium12" className="text-[#0A3D62]">
                            {point}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mx-auto h-[280px] w-[340px] overflow-hidden rounded-lg">
                    <img
                      src={item?.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mx-auto flex h-[100px] w-full items-center justify-between px-4 md:mt-12 md:h-[140px] md:w-[600px] md:px-0">
            <button onClick={() => api?.scrollPrev()}>
              <Typography
                variant="H6SemiBold24"
                className="text-sm font-semibold uppercase text-[#00000] hover:opacity-80 md:text-base"
              >
                Previous
              </Typography>
            </button>
            <button onClick={() => api?.scrollNext()}>
              <Typography
                variant="H6SemiBold24"
                className="text-sm font-semibold uppercase text-[#00000] hover:opacity-80 md:text-base"
              >
                Next
              </Typography>
            </button>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
