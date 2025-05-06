import React from "react";
import { Button } from "../ui/button";
import { Typography } from "../common/template";
import DatoCmsImage from "../common/DatoCmsImage";
import type { CardItem } from "@/types/home";

interface CaseStudySectionProps {
  cards?: CardItem[];
  variant?: "home" | "caseStudy";
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ cards = [], variant = "home" }) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  const bgColor = variant === "home" ? "bg-[#F5F5F5]" : "bg-[#F3FFFD]";

  return (
    <section className={`mx-auto flex min-h-[70vh] items-center justify-center ${bgColor} py-12`}>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col md:max-w-[30vw]">
            <div className="flex-none p-6">
              <div className="flex items-center gap-4">
                {card.logo.url ? (
                  <div className="flex h-auto max-w-[180px] items-center">
                    <DatoCmsImage data={card.logo} />
                  </div>
                ) : (
                  <img
                    src={card.logo.url}
                    alt={card.logo.alt}
                    className="h-9 w-auto object-contain"
                  />
                )}
              </div>
            </div>

            <div className="flex-grow p-6 pt-0">
              <Typography variant="BodyMRegular16" className="text-[#475569]">
                {card.description}
              </Typography>
            </div>

            <div className="px-6">
              <Button
                variant="outline"
                className="w-full rounded-full border-2 border-[#0A3D62] p-6 py-7 md:w-fit"
                asChild
              >
                <a href={card.viewcasestudyButton.buttonUrl}>
                  <Typography variant="H6Regular24" className="uppercase text-[#0A3D62]">
                    {card.viewcasestudyButton.buttonLabel}
                  </Typography>
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudySection;
