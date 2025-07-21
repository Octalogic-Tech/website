import React from "react";
import { SRCImage, type ResponsiveImageType } from "react-datocms";

interface ImageProps {
  imageData: {
    alt?: string;
    responsiveImage: ResponsiveImageType;
  };
  className?: string;
  objectFit?: "cover" | "contain" | "fill";
}

const DatoCmsImage: React.FC<ImageProps> = ({
  imageData,
  className = "",
  objectFit = "contain",
}) => {
  if (!imageData?.responsiveImage) {
    console.warn("Missing responsiveImage in imageData");
    return null;
  }

  const image = {
    ...imageData.responsiveImage,
    alt: imageData.alt || imageData.responsiveImage.alt,
  };

  return <SRCImage data={image} imgClassName={`${className} object-${objectFit}`} />;
};

export default DatoCmsImage;
