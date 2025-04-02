import React, { useEffect, useRef } from "react";
import { Typography } from "../template";
import { Button } from "../ui/button";

const WorkWithUsSection: React.FC = () => {
  const bannerImages = [
    "/img-1.jpg",
    "/img-1.jpg",
    "/img-1.jpg",
    "/img-1.jpg",
    "/img-1.jpg",
    "/img-1.jpg",
    "/img-1.jpg",
    "/img-1.jpg",
  ];

  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      const firstClone = bannerRef.current.innerHTML;
      bannerRef.current.innerHTML += firstClone; // Duplicate images for seamless loop
    }
  }, []);

  return (
    <section className="flex w-full flex-col gap-[80px] bg-[#FAFAFA] pt-[80px] lg:gap-[140px] lg:pt-[140px]">
      {/* Header Section */}
      <div className="flex justify-center gap-[32px] px-[16px] lg:justify-normal lg:pl-[732px]">
        <div className="flex flex-col gap-[24px]">
          {/* <div className=""> */}
          <div className="flex flex-col gap-[24px] lg:w-[414px]">
            <Typography
              variant="H2SemiBold64"
              className="bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text text-[40px]/[48px] uppercase tracking-tighter text-transparent"
            >
              Innovation that changes industry
            </Typography>
            <Typography variant="BodyMMedium16" className="text-[14px]/[20px] text-[#737373]">
              Lead your sector by bringing the best experiences to your business model
            </Typography>
          </div>
          {/* </div> */}
          <div>
            <Button
              variant={"primary"}
              className="w-full gap-[8px] rounded-full px-[24px] py-[12px] font-Barlow text-[20px]/[28px] font-semibold uppercase md:w-fit lg:w-fit"
            >
              Work with us
            </Button>
          </div>
        </div>
      </div>

      {/* Rotating Banner */}
      <div className="relative w-full overflow-hidden bg-[#0A3D62] p-[40px] lg:px-[96px] lg:py-[56px]">
        <div
          ref={bannerRef}
          className="flex animate-[scroll_10s_linear_infinite] gap-[40px] lg:gap-[80px]"
        >
          {bannerImages.concat(bannerImages).map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Rotating Banner"
              className="h-[32px] w-[110px] flex-shrink-0 object-contain lg:h-[40px] lg:w-[137.5px]"
            />
          ))}
        </div>
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
    </section>
  );
};

export default WorkWithUsSection;
