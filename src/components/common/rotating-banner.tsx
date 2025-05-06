import React from "react";
import DatoCmsImage from "./DatoCmsImage";

export interface RotatingBannerProps {
  images: (string | undefined)[];
  imageObjects?: { url: string; alt?: string; responsiveImage?: any }[];
  className?: string;
  imageClassName?: string;
  speed?: number;
}

export const RotatingBanner: React.FC<RotatingBannerProps> = ({
  images,
  imageObjects = [],
  className = "bg-[#141414] min-h-[20vh] py-4 px-4 flex items-center",
  imageClassName = "w-auto h-[2rem] md:h-[2.5rem] lg:h-[3rem] object-contain",
  speed = 20,
}) => {
  const validImages = images.filter((url): url is string => url !== undefined && url !== "");

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className={`flex gap-8 md:gap-12`}
        style={{
          minWidth: "200%",
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {imageObjects.length > 0
          ? [...imageObjects, ...imageObjects].map((image, index) => (
              <div key={`${image.url}-${index}`} className="flex-shrink-0">
                <DatoCmsImage data={image} className={imageClassName} objectFit="contain" />
              </div>
            ))
          : validImages
              .concat(validImages)
              .map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt="Rotating Banner"
                  className={`flex-shrink-0 ${imageClassName}`}
                />
              ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
