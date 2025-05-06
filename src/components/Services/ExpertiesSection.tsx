import { useState } from "react";
import { Typography } from "../common/template";
import { cn } from "@/lib/utils";
import type { ExpertiseSectionData } from "@/types/services";
import DatoCmsImage from "../common/DatoCmsImage";

interface ExpertiseSectionProps {
  data: ExpertiseSectionData;
}

export default function ExpertiseSection({ data }: ExpertiseSectionProps) {
  const [activeExpertise, setActiveExpertise] = useState<number>(0);
  const activeItem = data.features[activeExpertise];

  return (
    <section className="flex min-h-[120vh] w-full flex-col items-center justify-center gap-8 bg-[#FAFAFA] px-4 py-16 md:gap-16">
      <Typography variant="H2Medium64" className="w-full max-w-[1248px] uppercase">
        {data.title}
      </Typography>

      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-col bg-[#fff] md:w-1/3">
            {data.features.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveExpertise(index)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 uppercase transition-all duration-300 md:px-6 md:py-4",
                  activeExpertise === index
                    ? "bg-[#60E3CF] text-[#0A3D62]"
                    : "bg-transparent hover:bg-gray-100",
                )}
              >
                <Typography
                  variant="H6Regular24"
                  className={cn(
                    "text-base md:text-2xl",
                    activeExpertise === index ? "text-[#0A3D62]" : "text-[#000000]",
                  )}
                >
                  {item.featureName}
                </Typography>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke={activeExpertise === index ? "#0A3D62" : "#000000"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>

          <div className="min-h-[380px] w-full rounded-lg bg-[#0A3D62] p-4 md:min-h-[460px] md:w-2/3 md:p-8">
            {activeItem && (
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex w-full items-start">
                  <div className="h-16 w-16 flex-shrink-0 md:h-24 md:w-24">
                    {activeItem.featureLogo.responsiveImage ? (
                      <DatoCmsImage
                        data={activeItem.featureLogo}
                        className="h-full w-full"
                        objectFit="contain"
                      />
                    ) : (
                      <img
                        src={activeItem.featureLogo.url}
                        alt={activeItem.featureLogo.alt}
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>
                </div>
                <Typography
                  variant="H5Medium32"
                  className="text-xl uppercase text-[#fff] md:text-3xl"
                >
                  {activeItem.featureTitle}
                </Typography>
                <Typography variant="CaptionMMedium14" className="text-sm text-[#fff] md:text-base">
                  {activeItem?.featureDescription}
                </Typography>

                <div className="flex flex-col gap-1">
                  {activeItem.featurePoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#fff] md:h-2 md:w-2" />
                      <Typography
                        variant="CaptionMMedium14"
                        className="text-sm text-[#fff] md:text-base"
                      >
                        {point}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
