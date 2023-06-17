import React from "react";

const Heading = ({ size, children, className }: any) => {
  let headingSize;

  switch (size) {
    case "large":
      headingSize = "sm:text-2xl md:text-3xl lg:text-3xl";
      break;
    case "small":
      headingSize = "sm:text-xl md:text-2xl lg:text-2xl";
      break;
    default:
      headingSize = "text-3xl";
      break;
  }

  return <h1 className={`font-bold ${headingSize} ${className}`}>{children}</h1>;
};

export default Heading;
