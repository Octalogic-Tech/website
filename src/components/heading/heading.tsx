import React from "react";

const Heading = ({ size, children, className }: any) => {
  let headingSize;

  switch (size) {
    case "large":
      headingSize = "text-2xl md:text-3xl lg:text-3xl";
      break;
    case "small":
      headingSize = "text-xl md:text-2xl lg:text-2xl";
      break;
    default:
      headingSize = "text-3xl";
      break;
  }

  return <h1 className={`font-semibold ${headingSize} ${className}`}>{children}</h1>;
};

export default Heading;
