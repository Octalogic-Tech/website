import React from "react";
import type { BannerImage } from "@/types/about";
import DatoCmsImage from "../common/DatoCmsImage";

interface AboutTeamImageProps {
  data?: BannerImage;
}

const AboutTeamImage: React.FC<AboutTeamImageProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full max-w-none">
      <div className="w-full max-w-none">
        {data.responsiveImage ? (
          <DatoCmsImage
            data={{
              alt: data.alt,
              responsiveImage: data.responsiveImage,
            }}
            className="block h-auto w-full object-cover grayscale"
            objectFit="cover"
          />
        ) : (
          <img
            src={data.url}
            alt={data.alt}
            className="block h-auto w-full object-cover grayscale"
          />
        )}
      </div>
    </section>
  );
};

export default AboutTeamImage;
