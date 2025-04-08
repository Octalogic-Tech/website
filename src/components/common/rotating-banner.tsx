import React, { useEffect, useRef } from "react";

interface RotatingBannerProps {
  images: string[];
  className?: string;
  imageClassName?: string;
  speed?: number;
}

export const RotatingBanner: React.FC<RotatingBannerProps> = ({
  images,
  className = "bg-[#0A3D62] p-[40px] lg:px-[96px] lg:py-[56px]",
  imageClassName = "h-[32px] w-[110px] lg:h-[40px] lg:w-[137.5px]",
  speed = 10,
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      const firstClone = bannerRef.current.innerHTML;
      bannerRef.current.innerHTML += firstClone;
    }
  }, []);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        ref={bannerRef}
        className={`flex animate-[scroll_${speed}s_linear_infinite] gap-[40px] lg:gap-[80px]`}
      >
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Rotating Banner"
            className={`flex-shrink-0 object-contain ${imageClassName}`}
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
