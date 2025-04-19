import React from "react";
import type { BannerImage } from "@/types/about";

interface AboutTeamImageProps {
  data?: BannerImage;
}

const AboutTeamImage: React.FC<AboutTeamImageProps> = ({ data }) => {
  return (
    <section>
      <div className="aspect-[16/9] w-full">
        <img src={data?.url} alt={data?.alt} className="h-full w-full object-cover grayscale" />
      </div>
    </section>
  );
};

export default AboutTeamImage;
