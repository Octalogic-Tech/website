import React from "react";
import { Button } from "../ui/button";
import { Typography } from "../common/template";
import type { CardItem } from "@/types/home";

interface CaseStudySectionProps {
  cards: CardItem[];
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ cards }) => {
  return (
    <section className="mx-auto flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex-none p-6">
              <div className="flex items-center gap-4">
                <img src={card.logo} alt="logo" className="h-9 w-auto object-contain" />
              </div>
            </div>

            <div className="flex-grow p-6 pt-0">
              <Typography variant="BodyMRegular16" className="text-[#475569]">
                {card.description}
              </Typography>
            </div>

            <div className="flex-none p-4 pt-0 md:p-0">
              <Button
                variant="outline"
                className="w-full rounded-xl px-4 py-6 text-[#0A3D62] hover:text-[#0A3D62] md:w-[14rem]"
              >
                <Typography variant="H6SemiBold24">{card.buttonText}</Typography>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudySection;
