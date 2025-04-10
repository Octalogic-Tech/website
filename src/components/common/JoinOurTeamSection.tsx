import React from "react";
import { Typography } from "../common/template";
import { Button } from "@/components/ui/button";

const JoinOurTeamSection: React.FC = () => {
  return (
    <section className="flex min-h-[100vh] items-center justify-center bg-[#F3FFFD] py-12">
      <div className="mx-auto flex max-w-[90%] flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="mt-8 flex flex-col gap-6 md:max-w-[80%] md:gap-12">
          <div className="flex flex-col gap-6">
            <Typography variant="H3SemiBold48" className="uppercase text-[#0A3D62]">
              JOIN OUR TEAM
            </Typography>
            <Typography variant="BodyMMedium16" className="text-[#0A3D62]">
              Fulfilling tech-led projects for seasoned designers, developers, and product owners.
              Solve the problem, find the joy, measure the outcome, and be fulfilled.
            </Typography>
          </div>

          <div>
            <Button
              variant="outline"
              className="h-16 w-full rounded-xl bg-white px-8 py-4 font-Barlow text-[20px] font-semibold uppercase text-[#0A3D62] transition-all duration-300 hover:scale-105 md:w-auto"
            >
              WE ARE HIRING
            </Button>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4 md:max-w-[50%]">
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-20 flex justify-end">
              <img
                src="/team-1.png"
                alt="Team member"
                className="h-[160px] w-[160px] object-cover"
              />
            </div>
            <div className="flex justify-start">
              <img
                src="/team-2.png"
                alt="Team working"
                className="h-[240px] w-[160px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <img
                src="/team-3.png"
                alt="Team member"
                className="h-[128px] w-[260px] object-cover"
              />
            </div>
            <div>
              <img
                src="team-4.png"
                alt="Office space"
                className="h-[240px] w-[200px] object-cover"
              />
            </div>
            <div>
              <img
                src="/team-5.png"
                alt="Team member"
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
