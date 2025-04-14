import React from "react";
import type { TeamImageData } from "@/types/about";

interface AboutTeamImageProps {
  data?: TeamImageData;
}

const AboutTeamImage: React.FC<AboutTeamImageProps> = ({ data }) => {
  return (
    <section>
      <div className="aspect-[16/9] w-full">
        <img src={data?.src} alt="Team image" className="h-full w-full object-cover grayscale" />
      </div>
    </section>
  );
};

export default AboutTeamImage;
