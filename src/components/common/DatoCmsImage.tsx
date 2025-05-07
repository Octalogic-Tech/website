import React from "react";
import { SRCImage } from "react-datocms";

interface ImageProps {
  data: {
    alt?: string;
    responsiveImage: {
      src: string;
      width: number;
      height: number;
      alt?: string;
      title?: string;
      base64?: string;
    };
  };
  className?: string;
  objectFit?: "cover" | "contain" | "fill";
}

const DatoCmsImage: React.FC<ImageProps> = ({ data, className = "", objectFit = "contain" }) => {
  if (!data?.responsiveImage) {
    console.warn("Missing responsiveImage in data");
    return null;
  }

  return <SRCImage data={data.responsiveImage} imgClassName={`${className} object-${objectFit}`} />;
};

export default DatoCmsImage;
