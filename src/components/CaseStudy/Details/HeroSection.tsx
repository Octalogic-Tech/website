import React from "react";
import { Typography } from "../../common/template";
import { Button } from "../../ui/button";
import type { CaseStudyHeroProps } from "@/types/caseStudyInner";

const HeroSection: React.FC<CaseStudyHeroProps> = ({ data }) => {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center bg-gradient-to-b from-[#DBEAFE] to-[#FFFFFF] px-4 py-16 md:px-8">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent"></div>

      <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-12 text-center">
        {data.companyLogo && (
          <div className="mb-4 h-16 w-auto md:h-20">
            <img
              src={data.companyLogo.url}
              alt={data.companyLogo.alt || "Company logo"}
              className="h-full w-auto object-contain"
            />
          </div>
        )}

        <Typography
          variant="H1SemiBold80"
          className="max-w-4xl bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0] bg-clip-text text-center uppercase tracking-tighter text-transparent"
        >
          {data.title}
        </Typography>

        <div className="mt-8">
          <Button variant="secondary" className="rounded-full px-8 py-4" asChild>
            <a href={data.watchVideoButton.buttonUrl} target="_blank" rel="noopener noreferrer">
              <Typography variant="BodyLMedium20" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                {data.watchVideoButton.buttonLabel}
              </Typography>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
