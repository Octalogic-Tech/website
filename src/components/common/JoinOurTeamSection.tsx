import React from "react";
import { Typography } from "../common/template";
import { Button } from "@/components/ui/button";

const JoinOurTeamSection: React.FC = () => {
  return (
    <section className="bg-[#F3FFFD] px-4 py-20 md:px-24 md:py-36">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-16 lg:flex-row">
        {/* Content Section */}
        <div className="flex flex-col gap-16 md:max-w-[600px]">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <Typography variant="H3SemiBold48" className="uppercase text-[#0A3D62]">
              JOIN OUR TEAM
            </Typography>
            <Typography variant="BodyMMedium16" className="text-[#0A3D62]">
              Fulfilling tech-led projects for seasoned designers, developers, and product owners.
              Solve the problem, find the joy, measure the outcome, and be fulfilled.
            </Typography>
          </div>

          {/* Button */}
          <div>
            <Button
              variant="outline"
              className="h-[64px] rounded-[16px] bg-white px-[32px] py-[16px] font-Barlow text-[20px] font-semibold uppercase text-[#0A3D62] transition-all duration-300 hover:scale-105"
            >
              WE ARE HIRING
            </Button>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4 md:max-w-[1200px]">
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

          {/* Second Row - 3 Images */}
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
