import React from "react";
import { Typography } from "../common/template";
import { Button } from "@/components/ui/button";

const JoinOurTeamSection: React.FC = () => {
  return (
    <section className="flex min-h-[100vh] items-center justify-center bg-[#141414] py-12">
      <div className="mx-auto flex max-w-[90%] flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="mt-8 flex flex-col gap-6 md:max-w-[40%] md:gap-12">
          <div className="flex flex-col gap-6">
            <Typography
              variant="H2Medium64"
              className="bg-gradient-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text uppercase text-transparent"
            >
              JOIN OUR TEAM
            </Typography>
            <Typography variant="BodyMMedium16" className="text-[#D6D6D6]">
              Fulfilling tech-led projects for seasoned designers, developers, and product owners.
              Solve the problem, find the joy, measure the outcome, and be fulfilled.
            </Typography>
          </div>

          <div className="flex w-full">
            <Button variant="primary" className="w-full rounded-full p-6 py-7 md:w-fit" asChild>
              <a href={"hiring"}>
                <Typography
                  variant="H6Regular24"
                  className="uppercase tracking-tighter text-[#0A3D62]"
                >
                  we are hiring
                </Typography>
              </a>
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
