import React from "react";
import { Typography } from "../common/template";
import { Button } from "../ui/button";
import type { OurServicesSectionData } from "@/types/home";

interface OurServicesSectionProps {
  data?: OurServicesSectionData;
}

const OurServicesSection: React.FC<OurServicesSectionProps> = ({ data }) => {
  return (
    <section className="w-full border-t border-white/10 bg-black px-4 py-20 md:px-28 md:py-36">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-20">
        <div className="flex max-w-[1200px] flex-col items-start justify-start gap-6">
          <div className="flex w-full flex-col items-start gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-6">
              <Typography
                variant="H2Medium64"
                className="text-start uppercase text-white md:text-left"
              >
                {data?.title}
              </Typography>
              <Typography
                variant="BodyMMedium16"
                className="max-w-[720px] text-start text-white/80"
              >
                {data?.description}
              </Typography>
            </div>
            <Button
              variant="outline"
              className="w-full rounded-xl border-white px-8 py-6 text-[#0A3D62] hover:bg-white md:mt-3 md:w-auto"
            >
              <Typography variant="H6SemiBold24" className="uppercase">
                {data?.ctaButton?.text}
              </Typography>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:mt-20 md:flex-row">
          <div className="hidden w-full md:block md:w-[500px]">
            <div className="max-h-[500px] max-w-[420px] md:ml-5 md:mt-40">
              <img
                src="/services-1.png"
                alt="Our Services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[700px]">
            <div className="flex flex-col">
              {data?.serviceCards?.map((card, index) => (
                <React.Fragment key={index}>
                  <div className="group flex flex-col items-start gap-2 md:flex-row md:gap-6">
                    <Typography
                      variant="BodyMMedium16"
                      className="text-white/50 transition-colors duration-300 group-hover:text-[#60E3CF]"
                    >
                      {String(index + 1).padStart(3, "0")}
                    </Typography>

                    <div className="w-full max-w-[650px] md:px-8">
                      <div className="flex flex-col gap-6">
                        <Typography
                          variant="H3Medium48"
                          className="uppercase text-white/50 transition-colors duration-300 group-hover:text-white"
                        >
                          {card?.title}
                        </Typography>
                        <Typography
                          variant="CaptionMMedium14"
                          className="text-white/30 transition-colors duration-300 group-hover:text-white/80"
                        >
                          {card?.description}
                        </Typography>

                        <div className="flex flex-wrap gap-2">
                          {card?.chips?.map((chip, chipIndex) => (
                            <span
                              key={chipIndex}
                              className="rounded-lg border border-white/10 px-4 py-2.5 transition-all duration-300 group-hover:border-[#60E3CF] group-hover:bg-[#60E3CF]"
                            >
                              <Typography
                                variant="CaptionMMedium12"
                                className="text-white/30 transition-colors duration-300 group-hover:text-[#0A3D62]"
                              >
                                {chip}
                              </Typography>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-12">
                    <hr className="border-t-2 border-white/20" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
