import type { HeroSectionData, OurServicesSectionData } from "@/types/home";

export const heroSectionData: HeroSectionData = {
  heading: "CONVERTING IDEAS TO SOLUTIONS",
  description:
    "Got a startup idea? Let us turn it into a solution! We provide offshore development & technological resources to turn an idea into reality.",
  services: ["PRODUCT STRATEGY", "PRODUCT DESIGN", "PRODUCT DEVELOPMENT"],
  ctaButton: {
    text: "WORK With US",
    link: "/contact",
  },
};

export const ourServicesSectionData: OurServicesSectionData = {
  title: "Our Services",
  description:
    "We provide comprehensive end-to-end solutions for digital product development, from strategy and design to development and ongoing support.",
  ctaButton: {
    text: "Start a Project",
  },
  serviceCards: [
    {
      title: "Branding",
      description:
        "Discover design solutions that authentically reflect your brand's essence, fostered through a collaborative and diverse creative journey.",
      chips: ["Branding Design", "Website Design", "App Design", "Development", "Development"],
    },
    {
      title: "Product Design",
      description:
        "Our design team creates intuitive and engaging user experiences that bring your product vision to life.",
      chips: ["Branding Design", "Website Design", "App Design", "Development", "Development"],
    },
    {
      title: "Product Development",
      description:
        "We build scalable, robust solutions using cutting-edge technologies and best development practices.",
      chips: ["Branding Design", "Website Design", "App Design", "Development", "Development"],
    },
    {
      title: "Quality Assurance",
      description:
        "Comprehensive testing and quality assurance to ensure your product meets the highest standards.",
      chips: ["Branding Design", "Website Design", "App Design", "Development", "Development"],
    },
  ],
};
