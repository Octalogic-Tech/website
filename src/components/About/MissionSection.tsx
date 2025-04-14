import React from "react";
import { Typography } from "../common/template";
import type { MissionSectionData } from "@/types/about";

interface MissionSectionProps {
  data: MissionSectionData;
}

const MissionSection: React.FC<MissionSectionProps> = ({ data }) => {
  return (
    <section className="mx-auto flex min-h-[80vh] w-full flex-col items-center justify-center gap-8 bg-[#F3FFFD] px-4 md:py-0">
      <div className="flex w-full flex-col gap-8 text-center md:w-[40vw]">
        <div>
          <Typography variant="H1SemiBold80" className="!font-medium uppercase text-[#0A3D62]">
            {data.title}
          </Typography>
        </div>
        <Typography variant="BodyLMedium20" className="text-[#0A3D62]">
          {data.description}
        </Typography>
      </div>
    </section>
  );
};

export default MissionSection;
