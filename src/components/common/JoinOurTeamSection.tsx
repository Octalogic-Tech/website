import React from "react";
import { Typography } from "../common/template";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { JOIN_US_QUERY } from "@/graphql/queries/joinUs";
import { fetcher } from "@/lib/utils";

const JoinOurTeamSection: React.FC = () => {
  const { data, error } = useSWR(JOIN_US_QUERY, fetcher);

  if (error) console.error("Join Us Error:", error);

  const joinUsData = data?.allJoinOurTeams?.[0];
  const content = joinUsData;
  const sideImages = joinUsData?.sideImages || [];

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
              <a href={"hiring"}>
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
              <img
                src={sideImages[0]?.url}
                alt={sideImages[0]?.alt}
                className="h-[160px] w-[160px] object-cover"
              />
            </div>
            <div className="flex justify-start">
              <img
                src={sideImages[3]?.url}
                alt={sideImages[3]?.alt}
                className="h-[240px] w-[160px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <img
                src={sideImages[4]?.url}
                alt={sideImages[4]?.alt}
                className="h-[128px] w-[260px] object-cover"
              />
            </div>
            <div>
              <img
                src={sideImages[2]?.url}
                alt={sideImages[2]?.alt}
                className="h-[240px] w-[200px] object-cover"
              />
            </div>
            <div>
              <img
                src={sideImages[1]?.url}
                alt={sideImages[1]?.alt}
                className="h-[128px] w-[260px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeamSection;
