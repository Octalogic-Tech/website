import React from "react";
import { Typography } from "../common/template";
import type { MissionSectionData } from "@/types/about";

interface MissionSectionProps {
  data: MissionSectionData;
}

const MissionSection: React.FC<MissionSectionProps> = ({ data }) => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#DBEAFE]">
      <div className="mx-auto flex w-full flex-col items-center justify-center px-4 py-32 text-center md:px-16 md:py-48">
        <div className="flex max-w-[620px] flex-col gap-8">
          <div>
            <Typography
              variant="H1SemiBold80"
              className="bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text !font-medium uppercase text-transparent"
            >
              {data?.title}
            </Typography>
          </div>
          <Typography variant="BodyLMedium20" className="text-[#737373]">
            {data?.description}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
