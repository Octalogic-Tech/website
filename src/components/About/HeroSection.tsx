import React from "react";
import { Typography } from "../common/template";
import { Button } from "@/components/ui/button";
import type { AboutHeroSectionData } from "@/types/about";

interface AboutHeroProps {
  data?: AboutHeroSectionData;
}

const AboutHero: React.FC<AboutHeroProps> = ({ data }) => {
  return (
    <section className="mx-auto flex min-h-[90vh] w-full flex-col items-center justify-center gap-8 bg-[#F3FFFD] px-4 md:py-0">
      <div>
        <Typography
          variant="CaptionLMedium14"
          className="rounded-full border-2 border-dashed border-[#D6D6D6] bg-[#fff] px-6 py-3 text-[12px]/[18px] tracking-[7px] text-[#0A3D62] transition-all duration-300 lg:text-[14px]/[20px]"
        >
          {data?.badge}
        </Typography>
      </div>

      <div className="flex flex-col gap-6 text-center md:max-w-[50%] md:gap-8">
        <div>
          <Typography variant="H1SemiBold80" className="uppercase text-[#0A3D62]">
            {data?.title}
          </Typography>
        </div>
        <div>
          <Typography variant="BodyLMedium20" className="text-[#0A3D62]">
            {data?.description}
          </Typography>
        </div>
      </div>
      <div>
        <Button variant="darkblue" className="h-auto rounded-xl uppercase">
          {data?.ctaButton.text}
        </Button>
      </div>
    </section>
  );
};

export default AboutHero;
