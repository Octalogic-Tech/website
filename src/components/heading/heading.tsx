import React from "react";

const Heading = ({ size, children, className }: any) => {
  let dynamicStyles;

  switch (size) {
    case "large":
      dynamicStyles =
        "text-[28px] sm:text-[35px] lg:text-[40px] xl:text-[48px] leading-[2rem] sm:leading-[2.5rem] lg:leading-[3.5rem]";
      break;
    case "small":
      dynamicStyles = "text-xl md:text-2xl lg:text-2xl";
      break;
    default:
      dynamicStyles = "text-3xl";
      break;
  }

  return <h1 className={`font-semibold text-black ${dynamicStyles} ${className}`}>{children}</h1>;
};

export default Heading;
