import React from "react";
import { Button } from "../ui/button";
import { Typography } from "../common/template";
import type { InnovationSectionProps } from "@/types/casestudy";

const InnovationSection: React.FC<InnovationSectionProps> = ({ data }) => {
  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center bg-[#FAFAFA] px-4 lg:min-h-[70vh]">
      <div className="flex justify-center lg:ml-96">
        <div className="flex flex-col gap-6 lg:w-[80%]">
          <Typography
            variant="H2SemiBold64"
            className="w-[80%] bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text uppercase text-transparent"
          >
            {data?.title || ""}
          </Typography>
          <Typography variant="BodyMMedium16" className="text-[#737373]">
            {data?.description || ""}
          </Typography>
          <div>
            <Button variant="primary" className="w-full rounded-full p-7 lg:w-fit" asChild>
              <a href={data?.button?.buttonUrl || "#"}>
                <Typography variant="H6Regular24" className="uppercase text-[#0A3D62]">
                  {data?.button?.buttonLabel || ""}
                </Typography>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
