import React from "react";
import { Typography } from "../../common/template";
import type { PortfolioDetailHeroSection } from "@/types/portfolioDetails";

interface PortfolioDetailsHeroSectionProps {
  section: PortfolioDetailHeroSection;
}

const PortfolioDetailsHeroSection: React.FC<PortfolioDetailsHeroSectionProps> = ({ section }) => {
  return (
    <section className="flex min-h-[100vh] items-center">
      <div className="mx-auto flex flex-col justify-start gap-8 px-4 py-8 md:max-w-[70%] md:gap-12">
        <div className="inline-block">
          <Typography
            variant="CaptionLMedium14"
            className="inline-block rounded-full border-2 border-dashed border-[#D6D6D6] bg-[#fff] px-6 py-3 uppercase tracking-[7px] text-[#0A3D62] transition-all duration-300 lg:text-[14px]/[20px]"
          >
            {section.labelText}
          </Typography>
        </div>

        <div className="flex max-w-[900px] flex-col items-start gap-4">
          <Typography
            variant="H1SemiBold80"
            className="bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text uppercase tracking-tighter text-transparent"
          >
            {section.title}
          </Typography>

          <Typography variant="BodyLMedium20" className="max-w-[900px] text-[#737373]">
            {section.subtitle}
          </Typography>
        </div>

        {section.features && (
          <div className="flex flex-wrap items-center justify-start gap-4">
            {Object.values(section.features).map((feature, index, array) => {
              if (!feature) return null;

              return (
                <React.Fragment key={index}>
                  <div>
                    <Typography
                      variant="H6Regular24"
                      className="font-bold uppercase text-[#0A3D62]"
                    >
                      {feature}
                    </Typography>
                  </div>

                  {index < array.length - 1 && feature && array[index + 1] && (
                    <div className="h-2 w-2 bg-[#60E3CF]"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioDetailsHeroSection;
