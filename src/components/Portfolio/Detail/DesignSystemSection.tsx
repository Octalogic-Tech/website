import React from "react";
import { Typography } from "../../common/template";
import DatoCmsImage from "../../common/DatoCmsImage";
import type { PortfolioDesignSection } from "@/types/portfolioDetails";

interface DesignSystemSectionProps {
  designs: PortfolioDesignSection[];
}

const DesignSystemSection: React.FC<DesignSystemSectionProps> = ({ designs }) => {
  if (!designs || designs.length === 0) return null;

  return (
    <div className="mx-auto max-w-[1250px] px-4 py-16 md:px-12 md:pb-32">
      {designs.map((design, index) => (
        <div key={index} className={index > 0 ? "mt-16 md:mt-24" : ""}>
          <div className="flex w-full max-w-[1250px] flex-col justify-around gap-4 md:flex-row md:items-start md:gap-[40px]">
            <div className="md:w-[200px]">
              <div className="inline-block rounded-md border border-[#60E3CF] bg-[#60E3CF] bg-opacity-20">
                <Typography
                  variant="BodyMMedium16"
                  className="px-4 py-2 uppercase tracking-wide text-[#0A3D62]"
                >
                  {design.title}
                </Typography>
              </div>
            </div>

            <div className="flex max-w-[720px] flex-1 flex-col gap-4 tracking-wider">
              <Typography variant="BodyMRegular16" className="text-[#292929]">
                {design.description}
              </Typography>
            </div>
          </div>

          <div className="mt-16 md:px-12">
            {design.image.responsiveImage ? (
              <DatoCmsImage data={design.image} className="h-auto w-full" objectFit="contain" />
            ) : (
              <img
                src={design.image.url}
                alt={design.image.alt}
                className="h-auto w-full object-contain"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignSystemSection;
