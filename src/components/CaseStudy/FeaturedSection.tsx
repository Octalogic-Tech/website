import React from "react";
import { Typography } from "../common/template";
import CaseStudyCard from "@/components/CaseStudy/CaseStudyCard";
import type { FeaturedSectionProps, CaseCardType } from "@/types/casestudy";

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ data }) => {
  if (!data?.cashCard) {
    return null;
  }

  const cardData: CaseCardType = {
    logo: {
      alt: data.cashCard?.logo?.alt || "",
      url: data.cashCard?.logo?.url || "",
    },
    title: data.cashCard?.title || "",
    description: data.cashCard?.description || "",
    image: {
      alt: data.cashCard?.image?.alt || "",
      url: data.cashCard?.image?.url || "",
    },
    button: {
      buttonLabel: data.cashCard?.button?.buttonLabel || "",
      buttonUrl: data.cashCard?.button?.buttonUrl || "",
    },
    slug: data.cashCard?.slug || "",
  };

  return (
    <section className="relative flex min-h-[140vh] flex-col items-center justify-center gap-12 overflow-hidden bg-black px-4 py-12">
      <div className="absolute -top-16 h-[900px] w-[900px] rotate-[-30deg] transform rounded-full bg-gradient-to-br from-[#141414] to-[#0A3D62]"></div>

      <div className="relative z-10 flex justify-center gap-8 lg:w-[60%]">
        <div className="relative hidden flex-col gap-8 text-right text-[#F3FFFD] blur-sm lg:flex">
          <Typography variant="H2SemiBold64" className="ml-auto uppercase lg:w-[60%]">
            {data.title || ""}
          </Typography>
          <Typography variant="BodyMMedium16">{data.description || ""}</Typography>
        </div>

        <div className="hidden w-px bg-white lg:flex"></div>

        <div className="flex flex-col gap-[16px] text-left text-[#F3FFFD] lg:gap-[32px]">
          <Typography variant="H2SemiBold64" className="uppercase lg:w-[60%]">
            {data.title || ""}
          </Typography>
          <Typography variant="BodyMMedium16">{data.description || ""}</Typography>
        </div>
      </div>

      <div className="z-10">
        <CaseStudyCard {...cardData} />
      </div>
    </section>
  );
};

export default FeaturedSection;
