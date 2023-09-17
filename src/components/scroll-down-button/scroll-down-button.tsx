"use client";

import PillButton from "@/components/pill-button/pill-button";

/* Returns a button, when clicked, 
scrolls to a section based on the given sectionId as it's prop */
const ScrollDownButton = ({
  buttonText = "Know More",
  sectionId,
}: {
  buttonText?: string;
  sectionId: string;
}) => {
  const scrollToSection = () => {
    const scrollToSectionElement = document.getElementById(sectionId);
    if (scrollToSectionElement) {
      window.scrollTo({
        top: scrollToSectionElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return <PillButton title={buttonText} onClick={scrollToSection} />;
};

export default ScrollDownButton;
