import React from "react";
import { Typography } from "../common/template";
import type { PurposeSectionData } from "@/types/about";

interface PurposeSectionProps {
  data?: PurposeSectionData;
}
const PurposeSection: React.FC<PurposeSectionProps> = ({ data }) => {
  const getCardStyles = (index: number) => {
    switch (index) {
      case 0:
        return {
          container: "bg-[#60E3CF]",
          text: "text-[#0A3D62]",
        };
      case 1:
        return {
          container: "bg-[#0A3D62]",
          text: "text-[#60E3CF]",
        };
      case 2:
        return {
          container: "bg-[#F3FFFD]",
          text: "text-[#0A3D62]",
        };
      default:
        return {
          container: "bg-white/5",
          text: "text-white",
        };
    }
  };

  return (
    <section className="w-full bg-black">
      <div className="mx-auto flex flex-col px-4 py-16 md:max-w-[1440px] md:flex-row md:justify-between md:px-24 md:py-36">
        <div className="mb-12 flex flex-col gap-8 md:mb-0 md:h-[320px] md:w-[800px]">
          <div className="w-full md:w-[480px]">
            <Typography variant="H2Medium64" className="!font-normal uppercase text-[#FAFAFA]">
              {data?.heading}
            </Typography>
          </div>
          <div className="flex w-full flex-col md:w-[480px]">
            <Typography variant="CaptionMMedium14" className="text-[#FAFAFA]">
              {data?.description}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:h-[880px] md:w-[440px]">
          {data?.cards.map((card, index) => {
            const styles = getCardStyles(index);
            return (
              <div
                key={index}
                className={`flex h-[270px] w-full flex-col gap-4 rounded-[24px] p-6 md:p-10 ${styles?.container}`}
              >
                <div>
                  <img src={card.customLogo.url} alt={card.customLogo.alt} className="h-12 w-12" />{" "}
                </div>
                <Typography variant="H3SemiBold48" className={` ${styles?.text}`}>
                  {card.title}
                </Typography>
                <Typography variant="CaptionMMedium14" className={styles?.text}>
                  {card.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
