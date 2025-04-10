import React from "react";
import { Typography } from "../common/template";
import { Button } from "../ui/button";
import type { OurServicesSectionData } from "@/types/home";

interface OurServicesSectionProps {
  data?: OurServicesSectionData;
}

const OurServicesSection: React.FC<OurServicesSectionProps> = ({ data }) => {
  return (
    <section className="flex min-h-[250vh] w-full items-center justify-center border-t border-white/10 bg-black px-4 py-8 md:py-12">
      <div className="mx-auto mt-8 flex max-w-[90%] flex-col gap-12">
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-6">
            <Typography
              variant="H2Medium64"
              className="text-start uppercase text-[#E5E5E5] md:text-left"
            >
              {data?.title}
            </Typography>
            <Typography variant="BodyMMedium16" className="text-start text-[#E5E5E5]">
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

        <div className="mt-8 flex flex-col md:mt-16 md:flex-row">
          <div className="hidden w-full md:block md:w-[40%]">
            <div className="max-w-[30vw] md:ml-5 md:mt-40">
              <img
                src={data?.sideimage}
                alt="Our Services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-[60%]">
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

                    <div className="w-full md:w-[80%] md:px-8">
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
                              className="rounded-lg border border-white/10 px-4 py-3 transition-all duration-300 group-hover:border-[#60E3CF] group-hover:bg-[#60E3CF]"
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
