import React from "react";
import { Typography } from "../../common/template";
import type { PortfolioDetailSection, PortfolioContentSection } from "@/types/portfolioDetails";

interface MainContentProps {
  section: PortfolioDetailSection;
  portfolioContent?: PortfolioContentSection[];
}

const MainContent: React.FC<MainContentProps> = ({ section, portfolioContent = [] }) => {
  return (
    <section>
      <div className="mx-auto px-4 md:px-32">
        <img src={section.imageSrc} alt={section.title} className="w-full rounded-lg" />
      </div>

      <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-center gap-12 px-4 py-16 sm:px-8 md:gap-24 md:px-12 md:py-32">
        {portfolioContent.map((content, index) => (
          <div key={index} className="w-full">
            <div className="flex w-full max-w-[1250px] flex-col justify-around gap-[16px] md:flex-row md:items-start md:gap-[40px]">
              <div className="md:w-[200px]">
                <div className="inline-block rounded-md border border-[#60E3CF] bg-[#60E3CF] bg-opacity-20">
                  <Typography
                    variant="BodyMMedium16"
                    className="px-4 py-2 uppercase tracking-wider text-[#0A3D62]"
                  >
                    {content.title}
                  </Typography>
                </div>
              </div>

              <div className="flex max-w-[720px] flex-1 flex-col gap-[24px]">
                <div className="space-y-6">
                  {content.description.map((paragraph, idx) => (
                    <Typography
                      key={idx}
                      variant="BodyMRegular16"
                      className="tracking-wider text-[#292929]"
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </div>

                {content.descriptionPoints && content.descriptionPoints.length > 0 && (
                  <ul className="list-disc space-y-1 pl-6">
                    {content.descriptionPoints.map((point, idx) => (
                      <li key={idx} className="pl-2">
                        <Typography
                          variant="BodyMRegular16"
                          className="tracking-wider text-[#292929]"
                        >
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainContent;
