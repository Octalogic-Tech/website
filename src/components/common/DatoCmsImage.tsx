import React from "react";
import { Image as DatoCMSImage } from "react-datocms";

interface ImageProps {
  data: {
    url: string;
    alt?: string;
    responsiveImage?: any;
  };
  className?: string;
  pictureClassName?: string;
  objectFit?: "cover" | "contain" | "fill";
  layout?: "responsive" | "fill" | "intrinsic";
  priority?: boolean;
}

const DatoCmsImage: React.FC<ImageProps> = ({
  data,
  className = "",
  pictureClassName = "",
  objectFit = "cover",
  layout = "responsive",
  priority = false,
}) => {
  if (data?.responsiveImage) {
    return (
      <DatoCMSImage
        data={data.responsiveImage}
        className={className}
        pictureClassName={pictureClassName}
        objectFit={objectFit}
        layout={layout}
        priority={priority}
      />
    );
  }
};

export default DatoCmsImage;
