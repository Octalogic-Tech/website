import { useState } from "react";
import { Typography } from "../common/template";
import { cn } from "@/lib/utils";
import type { ExpertiseSectionData } from "@/types/services";

interface ExpertiseSectionProps {
  data: ExpertiseSectionData;
}

export default function ExpertiseSection({ data }: ExpertiseSectionProps) {
  const [activeExpertise, setActiveExpertise] = useState<number>(1);

  const activeItem = data.items.find((item) => item.id === activeExpertise);

  return (
    <section className="flex w-full flex-col gap-8 bg-[#FAFAFA] px-4 py-16 md:gap-16 md:px-24 md:py-32">
      <Typography variant="H2Medium64" className="text-center uppercase md:ml-8 md:text-left">
        {data.title}
      </Typography>

      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-col bg-[#fff] md:w-1/3">
            {data.items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveExpertise(item.id)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 uppercase transition-all duration-300 md:px-6 md:py-4",
                  activeExpertise === item.id
                    ? "bg-[#60E3CF] text-[#0A3D62]"
                    : "bg-transparent hover:bg-gray-100",
                )}
              >
                <Typography
                  variant="H6Regular24"
                  className={cn(
                    "text-base md:text-2xl",
                    activeExpertise === item.id ? "text-[#0A3D62]" : "text-[#000000]",
                  )}
                >
                  {item.title}
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
                    stroke={activeExpertise === item.id ? "#0A3D62" : "#000000"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Content Container */}
          <div className="min-h-[380px] w-full rounded-lg bg-[#0A3D62] p-4 md:min-h-[460px] md:w-2/3 md:p-8">
            {activeItem && (
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                  <img
                    src={activeItem.icon}
                    alt={`${activeItem.title} icon`}
                    className="h-16 w-16 md:h-24 md:w-24"
                  />
                </div>
                <div>
                  <Typography
                    variant="H5Medium32"
                    className="text-xl uppercase text-[#fff] md:text-3xl"
                  >
                    {activeItem.title}
                  </Typography>
                </div>

                <Typography variant="CaptionMMedium14" className="text-sm text-[#fff] md:text-base">
                  {activeItem.description}
                </Typography>

                <div className="flex flex-col gap-1">
                  {activeItem.bulletPoints.map((point, index) => (
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
