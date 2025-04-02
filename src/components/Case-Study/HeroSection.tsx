import React from "react";
import { Typography } from "../template";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex h-[844px] w-full flex-col items-center justify-center gap-[40px] overflow-hidden bg-blue-100 px-[16px] lg:h-[800px] lg:px-[96px]">
      {/* Decorative Circular Border */}
      <div className="absolute left-1/2 top-1/2 h-[595px] w-[595px] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] transform rounded-full bg-gradient-to-b from-[#0A3D62] via-white to-[#0A3D62] p-[1px] lg:h-[943px] lg:w-[943px]">
        <div className="h-full w-full rounded-full bg-white"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10">
        <Typography
          variant="CaptionLMedium14"
          className="flex gap-[10px] rounded-full border border-dashed border-[#D6D6D6] px-[12px] py-[6px] text-[12px]/[18px] tracking-[7px] text-[#0A3D62] lg:text-[14px]/[20px]"
        >
          CASE STUDIES
        </Typography>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-[24px] text-center lg:w-[1075px]">
        {/* <div className="flex flex-col"> */}
        <Typography
          variant="H1SemiBold80"
          className="max-w-[620px] bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text text-[48px]/[56px] tracking-tight text-transparent"
        >
          TOMORROW'S TECH FOR TODAY'S LEADERS
        </Typography>
        <Typography
          variant="BodyLMedium20"
          className="max-w-[684px] text-[14px]/[20px] text-[#737373]"
        >
          Learn how clients stay at the forefront of their industries with custom software and
          platform development, data engineering services, AI business solutions, and other digital
          transformations.
        </Typography>
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
