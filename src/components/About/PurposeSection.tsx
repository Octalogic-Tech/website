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
    <section className="mx-auto mb-16 flex min-h-[150vh] w-full items-center justify-center bg-black px-4 py-4">
      <div className="flex flex-col justify-center gap-8 py-8 md:py-0 lg:flex-row">
        <div className="mb-12 flex flex-col gap-8 md:mb-0 lg:w-[50vw]">
          <div className="w-full md:w-[95vw] lg:w-[40vw]">
            <Typography variant="H2Medium64" className="!font-normal uppercase text-[#FAFAFA]">
              {data?.heading}
            </Typography>
          </div>
          <div className="flex w-full flex-col md:w-[95vw] lg:w-[40vw]">
            <Typography variant="CaptionMMedium14" className="text-[#FAFAFA]">
              {data?.description}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:w-[30vw]">
          {data?.cards.map((card, index) => {
            const styles = getCardStyles(index);
            return (
              <div
                key={index}
                className={`flex h-[40vh] w-full flex-col gap-4 rounded-3xl border border-red-900 p-6 md:p-10 ${styles?.container}`}
              >
                <div>
                  <img src={card.logo} alt={card.title} className="h-12 w-12" />
                </div>
                <Typography variant="H3SemiBold48" className={`uppercase ${styles?.text}`}>
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
