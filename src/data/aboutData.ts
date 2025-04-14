import type {
  AboutHeroSectionData,
  CarouselImage,
  MissionSectionData,
  TestimonialsData,
  TeamImageData,
  PurposeSectionData,
} from "@/types/about";

export const aboutHeroSectionData: AboutHeroSectionData = {
  badge: "ABOUT",
  title: "A Radically Engaged Technology Team.",
  description:
    "Since 2000, our highly-trained technologists have supported the world's leading brands across industries.",
  ctaButton: {
    text: "WORK WITH US",
  },
};

export const aboutCarouselImages: CarouselImage[] = [
  { url: "/img-1.jpg" },
  { url: "/img-1.jpg" },
  { url: "/img-1.jpg" },
  { url: "/img-1.jpg" },
  { url: "/img-1.jpg" },
  { url: "/img-1.jpg" },
  { url: "/img-1.jpg" },
  { url: "/img-1.jpg" },
];

export const missionSectionData: MissionSectionData = {
  title: "On a mission to light the way to tomorrow's tech.",
  description:
    "Consider our developers, product analysts, and designers as an extension of your team, deployed to solve your company's biggest problems with the latest tech and tools.",
};

export const testimonialsData: TestimonialsData = {
  testimonials: [
    {
      logo: "/img-1.jpg",
      description:
        "Our culture emphasizes the freedom to create from anywhere, the relentless pursuit of mastery through continuous improvement, and the sense of connection that comes from being part of a greater purpose so that we can tackle client challenges to achieve top-tier outcomes.",
      avatar: "/img-1.jpg",
      name: "Sarah Johnson",
      position: "Chief Operating Officer",
    },
    {
      logo: "/abouttestimonial-1.png",
      description:
        "The team's dedication to excellence and ability to tackle complex challenges made them an invaluable partner in our digital transformation journey.",
      avatar: "/img-1.jpg",
      name: "Michael Chen",
      position: "Chief Technology Officer",
    },
    {
      logo: "/abouttestimonial-2.png",
      description:
        "The team's dedication to excellence and ability to tackle complex challenges made them an invaluable partner in our digital transformation journey.",
      avatar: "/img-1.jpg",
      name: "Michael Chen",
      position: "Chief Technology Officer",
    },
    {
      logo: "/abouttestimonial-1.png",
      description:
        "The team's dedication to excellence and ability to tackle complex challenges made them an invaluable partner in our digital transformation journey.",
      avatar: "/img-1.jpg",
      name: "Michael Chen",
      position: "Chief Technology Officer",
    },
    {
      logo: "/abouttestimonial-2.png",
      description:
        "The team's dedication to excellence and ability to tackle complex challenges made them an invaluable partner in our digital transformation journey.",
      avatar: "/img-1.jpg",
      name: "Michael Chen",
      position: "Chief Technology Officer",
    },
    {
      logo: "/img-1.jpg",
      description:
        "The team's dedication to excellence and ability to tackle complex challenges made them an invaluable partner in our digital transformation journey.",
      avatar: "/img-1.jpg",
      name: "Michael Chen",
      position: "Chief Technology Officer",
    },
  ],
};

export const teamImageData: TeamImageData = {
  src: "/aboutteamimage.png",
};

export const purposeSectionData: PurposeSectionData = {
  heading: "Our purpose is to build tech with big business impact.",
  description:
    "Providing employment staffing in the field of IT systems and providing consultancy in the field of software design. We deliver what you need to gain the competitive advantage.",
  cards: [
    {
      logo: "/purposecard-3.png",
      title: "Build",
      description:
        "Developing custom software to create disruptive technology solutions from the ground up.",
    },
    {
      logo: "/purposecard-2.png",
      title: "Modernize",
      description:
        "Digitizing dated processes, applications, and systems for greater, more impactful performance.",
    },
    {
      logo: "/purposecard-1.png",
      title: "Enhance",
      description:
        "Re-engineering existing products, software, and systems to support new pathways to revenue.",
    },
  ],
};
