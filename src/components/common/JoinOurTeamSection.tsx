import React from "react";
import { Typography } from "../common/template";
import { Button } from "@/components/ui/button";
import type { JoinOurTeamSectionProps } from "@/types/common";
import DatoCmsImage from "../common/DatoCmsImage";

const JoinOurTeamSection: React.FC<JoinOurTeamSectionProps> = ({ data }) => {
  const content = data;
  const sideImages = data?.sideImages || [];

  return (
    <section className="flex min-h-[100vh] items-center justify-center bg-[#141414] py-12">
      <div className="mx-auto flex max-w-[90%] flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="mt-8 flex flex-col gap-6 md:max-w-[40%] md:gap-12">
          <div className="flex flex-col gap-6">
            <Typography
              variant="H2Medium64"
              className="bg-gradient-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text uppercase text-transparent"
            >
              {content?.pageTitle}
            </Typography>
            <Typography variant="BodyMMedium16" className="text-[#D6D6D6]">
              {content?.description}
            </Typography>
          </div>

          <div className="flex w-full">
            <Button variant="primary" className="w-full rounded-full p-6 py-7 md:w-fit" asChild>
              <a href={content?.weAreHiringButton?.buttonUrl || "hiring"}>
                <Typography
                  variant="H6Regular24"
                  className="uppercase tracking-tighter text-[#0A3D62]"
                >
                  {content?.weAreHiringButton?.buttonLabel}
                </Typography>
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4 md:max-w-[50%]">
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-20 flex justify-end">
              {sideImages[0]?.url ? (
                <DatoCmsImage data={sideImages[0]} className="h-[160px] w-[160px] object-cover" />
              ) : (
                <img
                  src={sideImages[0]?.url}
                  alt={sideImages[0]?.alt}
                  className="h-[160px] w-[160px] object-cover"
                />
              )}
            </div>
            <div className="flex justify-start">
              {sideImages[3]?.url ? (
                <DatoCmsImage data={sideImages[3]} className="h-[240px] w-[160px] object-cover" />
              ) : (
                <img
                  src={sideImages[3]?.url}
                  alt={sideImages[3]?.alt}
                  className="h-[240px] w-[160px] object-cover"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              {sideImages[4]?.url ? (
                <DatoCmsImage data={sideImages[4]} className="h-[128px] w-[260px] object-cover" />
              ) : (
                <img
                  src={sideImages[4]?.url}
                  alt={sideImages[4]?.alt}
                  className="h-[128px] w-[260px] object-cover"
                />
              )}
            </div>
            <div>
              {sideImages[2]?.url ? (
                <DatoCmsImage data={sideImages[2]} className="h-[240px] w-[200px] object-cover" />
              ) : (
                <img
                  src={sideImages[2]?.url}
                  alt={sideImages[2]?.alt}
                  className="h-[240px] w-[200px] object-cover"
                />
              )}
            </div>
            <div>
              {sideImages[1]?.url ? (
                <DatoCmsImage data={sideImages[1]} className="h-[128px] w-[260px] object-cover" />
              ) : (
                <img
                  src={sideImages[1]?.url}
                  alt={sideImages[1]?.alt}
                  className="h-[128px] w-[260px] object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeamSection;
