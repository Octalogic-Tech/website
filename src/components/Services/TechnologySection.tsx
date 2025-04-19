import { useState } from "react";
import { Typography } from "../common/template";
import { cn } from "@/lib/utils";
import type { TechnologySectionData } from "@/types/services";

interface TechnologySectionProps {
  data: TechnologySectionData;
}

export default function TechnologySection({ data }: TechnologySectionProps) {
  const [activeTechnology, setActiveTechnology] = useState<number>(1);

  const activeItem = data.items.find((item) => item.id === activeTechnology);

  return (
    <section className="flex w-full flex-col gap-8 bg-[#000] px-4 py-16 md:gap-16 md:px-24 md:py-32">
      <Typography
        variant="H2Medium64"
        className="text-center uppercase text-[#fff] md:ml-8 md:text-left"
      >
        {data.title}
      </Typography>

      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-col bg-white/5 md:w-1/3">
            {data.items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTechnology(item.id)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 uppercase transition-all duration-300 md:px-6 md:py-4",
                  activeTechnology === item.id
                    ? "bg-white/10 text-[#60E3CF]"
                    : "bg-transparent hover:bg-white/[0.07]",
                )}
              >
                <Typography
                  variant="H6Regular24"
                  className={cn(
                    "text-base md:text-2xl",
                    activeTechnology === item.id ? "text-[#60E3CF]" : "text-[#fff]",
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
                    stroke={activeTechnology === item.id ? "#60E3CF" : "#737373"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>

          <div className="min-h-[420px] w-full rounded-lg bg-[#0A3D62] p-4 md:min-h-[460px] md:w-2/3 md:p-8">
            {activeItem && (
              <div className="flex flex-col gap-4 md:gap-6">
                <Typography
                  variant="H5Medium32"
                  className="text-xl uppercase text-[#fff] md:text-3xl"
                >
                  {activeItem.title}
                </Typography>

                <Typography variant="CaptionMMedium14" className="text-sm text-[#fff] md:text-base">
                  {activeItem.description}
                </Typography>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:gap-6">
                  {activeItem.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-2 rounded-[4px] bg-white/10 p-3 md:h-28 md:w-32 md:gap-4 md:p-6"
                    >
                      <img
                        src={tech.icon}
                        alt={`${tech.name} icon`}
                        className="h-6 w-6 object-contain md:h-8 md:w-8"
                      />
                      <Typography
                        variant="CaptionLMedium14"
                        className="text-center text-xs text-[#fff] md:text-sm"
                      >
                        {tech?.name}
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
