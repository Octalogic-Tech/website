import React from "react";
import { Typography } from "../../common/template";
import type { PortfolioConclusion } from "@/types/portfolioDetails";

interface ConclusionSectionProps {
  conclusion: PortfolioConclusion;
}

const ConclusionSection: React.FC<ConclusionSectionProps> = ({ conclusion }) => {
  if (!conclusion || !conclusion.title) return null;

  return (
    <div className="mx-auto max-w-[1250px] px-4 py-16 sm:px-8 md:px-12 md:py-32">
      <div className="flex w-full max-w-[1250px] flex-col justify-around gap-[16px] md:flex-row md:items-start md:gap-[40px]">
        <div className="md:w-[200px]">
          <div className="inline-block rounded-md border border-[#60E3CF] bg-[#60E3CF] bg-opacity-20">
            <Typography
              variant="H6SemiBold24"
              className="px-4 py-2 uppercase tracking-wide text-[#0A3D62]"
            >
              {conclusion.title}
            </Typography>
          </div>
        </div>

        <div className="flex max-w-[720px] flex-1 flex-col gap-[16px]">
          <Typography variant="H5SemiBold32" className="uppercase text-[#292929]">
            {conclusion.description}
          </Typography>
          <ul className="list-disc space-y-1 pl-6">
            {conclusion.points.map((point, index) => (
              <li key={index} className="pl-2">
                <Typography variant="BodyMRegular16" className="text-[#292929]">
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSection;
