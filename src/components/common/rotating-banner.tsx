import React from "react";

interface RotatingBannerProps {
  images: string[];
  className?: string;
  imageClassName?: string;
  speed?: number;
}

export const RotatingBanner: React.FC<RotatingBannerProps> = ({
  images,
  className = "bg-[#141414] min-h-[20vh] py-4 px-4 flex items-center",
  imageClassName = "w-auto h-[2rem] md:h-[2.5rem] lg:h-[3rem] object-contain",
  speed = 20,
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className={`flex gap-8 md:gap-12`}
        style={{
          minWidth: "200%",
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {(images || []).concat(images || []).map((image, index) => (
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
