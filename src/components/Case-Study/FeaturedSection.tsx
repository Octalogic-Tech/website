import React from "react";
import { Typography } from "../common/template";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-[48px] overflow-hidden bg-black px-[16px] py-[80px] text-white lg:gap-[64px] lg:px-[96px] lg:py-[140px]">
      {/* Background Circle */}
      <div className="absolute -top-16 h-[916px] w-[916px] rotate-[-30deg] transform rounded-full bg-gradient-to-br from-blue-500 to-black lg:h-[1023px] lg:w-[1023px]"></div>

      {/* Content Section */}
      <div className="relative z-10 flex justify-center gap-[32px] lg:px-[212px]">
        {/* Left Blurry Text */}
        <div className="relative hidden flex-col gap-[32px] text-right text-[#F3FFFD] blur-sm lg:flex">
          <Typography variant="H2SemiBold64" className="uppercase tracking-tight">
            Featured case study
          </Typography>
          <Typography variant="BodyMMedium16" className="w-[380px]">
            In the ever-evolving digital realm, we offer a brighter path to product excellence by
            bringing together cutting-edge technologies that unlock boundless potential.
          </Typography>
        </div>

        {/* Divider */}
        <div className="hidden w-px bg-white lg:flex"></div>

        {/* Right Section */}
        <div className="flex flex-col gap-[16px] text-left text-[#F3FFFD] lg:gap-[32px]">
          <Typography
            variant="H2SemiBold64"
            className="text-[40px]/[48px] uppercase tracking-tight"
          >
            Featured case study
          </Typography>
          <Typography
            variant="BodyMMedium16"
            className="max-w-[410px] text-[14px]/[20px] lg:w-[410px]"
          >
            In the ever-evolving digital realm, we offer a brighter path to product excellence by
            bringing together cutting-edge technologies that unlock boundless potential.
          </Typography>
        </div>
      </div>

      {/* Card Section*/}
      <div className="z-10">
        <Card className="flex max-w-[824px] flex-col justify-between gap-[12px] rounded-[24px] bg-white p-[8px] lg:flex-row lg:p-[12px]">
          <div className="order-2 flex max-w-[394px] flex-col justify-between gap-[24px] p-[6px] lg:order-1 lg:p-[36px]">
            <img
              src="/img-1.jpg"
              alt="Case study visual"
              className="h-[32px] w-[134px] lg:h-[40px] lg:w-[170px]"
            />

            <Typography variant="CaptionLMedium14" className="text-[12px]/[16px] text-[#525252]">
              We were brought in to refresh their primary digital properties with a particular focus
              on building a robust eCommerce capability that re-imaged the way consumers purchase
              tyres, wheels and batteries online. We achieved this by crafting an informative and
              intuitive purchasing experience, backed by comprehensive usability research and
              validation.
            </Typography>

            <Button
              variant="secondary"
              className="m-0 h-fit w-full rounded-[16px] border-[#0A3D624D] p-0 text-[#0A3D62] shadow-[0px_11px_4px_0px_rgba(31,46,66,0.01),_0px_6px_4px_0px_rgba(31,46,66,0.02),_0px_3px_0.19px_0px_rgba(31,46,66,0.03),_0px_1px_1px_0px_rgba(31,46,66,0.04),_0px_0px_0px_1.5px_rgba(31,46,66,0.08)] lg:w-fit"
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
      </div>
    </section>
  );
};

export default FeaturedSection;
