import type {
  AboutSectionData,
  HeroSectionData,
  CaseStudySectionData,
  OurServicesSectionData,
  PortfolioSectionData,
  BlogSectionData,
} from "@/types/home";

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

export const aboutSectionData: AboutSectionData = {
  title: "About",
  description:
    "Figma ipsum component variant main layer. Figjam subtract main asset component share scrolling thumbnail. Vector fill select list group subtract edit inspect star. Thumbnail layer bullet library selection ipsum figjam hand mask strikethrough. Edit distribute object select select auto pencil pen pixel. Device clip subtract distribute font bold align figma vector underline. Figjam draft outline outline undo. Auto arrange mask comment italic overflow. Share mask link select scrolling link blur layout thumbnail prototype. Align editor content outline text Figma ipsum component variant main layer. Figjam subtract main asset component share scrolling thumbnail.",
  stats: [
    { value: "7+", label: "Years of Experience" },
    { value: "90+", label: "Satisfied Clients" },
    { value: "710+", label: "Projects Delivered" },
  ],
};

export const caseStudySectionData: CaseStudySectionData = {
  cards: [
    {
      logo: "/cardLogo-1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "View Case Study",
    },
    {
      logo: "/cardLogo-2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "View Case Study",
    },
    {
      logo: "/cardLogo-3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "View Case Study",
    },
  ],
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

export const portfolioSectionData: PortfolioSectionData = {
  title: "Our Portfolio",
  description:
    "Figma ipsum component variant main layer. Draft scale figma union prototype ellipse bold community select. Group effect background editor flows duplicate ellipse opacity flatten. Component background.",
  ctaButton: {
    text: "Start a Project",
  },
  portfolioItems: [
    {
      image: "/img-1.jpg",
      title: "CHLOE SS20 Show Shanghai",
      description:
        "Projection visuals for Chloé's Spring 2020 show at the Long Museum in Shanghai. The sequences were created under the theme of Chinese cinematography and projected alongside the catwalk and afterparty.",
    },
    {
      image: "/team-1.png",
      title: "CHLOE SS20 Show Shanghai",
      description:
        "Projection visuals for Chloé's Spring 2020 show at the Long Museum in Shanghai. The sequences were created under the theme of Chinese cinematography and projected alongside the catwalk and afterparty.",
    },
    {
      image: "/team-2.png",
      title: "CHLOE SS20 Show Shanghai",
      description:
        "Projection visuals for Chloé's Spring 2020 show at the Long Museum in Shanghai. The sequences were created under the theme of Chinese cinematography and projected alongside the catwalk and afterparty.",
    },
    {
      image: "/team-3.png",
      title: "CHLOE SS20 Show Shanghai",
      description:
        "Projection visuals for Chloé's Spring 2020 show at the Long Museum in Shanghai. The sequences were created under the theme of Chinese cinematography and projected alongside the catwalk and afterparty.",
    },
    {
      image: "/team-4.png",
      title: "CHLOE SS20 Show Shanghai",
      description:
        "Projection visuals for Chloé's Spring 2020 show at the Long Museum in Shanghai. The sequences were created under the theme of Chinese cinematography and projected alongside the catwalk and afterparty.",
    },
    {
      image: "/team-5.png",
      title: "CHLOE SS20 Show Shanghai",
      description:
        "Projection visuals for Chloé's Spring 2020 show at the Long Museum in Shanghai. The sequences were created under the theme of Chinese cinematography and projected alongside the catwalk and afterparty.",
    },
    {
      image: "/img-1.jpg",
      title: "CHLOE SS20 Show Shanghai",
      description:
        "Projection visuals for Chloé's Spring 2020 show at the Long Museum in Shanghai. The sequences were created under the theme of Chinese cinematography and projected alongside the catwalk and afterparty.",
    },
  ],
};

export const blogSectionData: BlogSectionData = {
  title: "BLOG AND RESOURCES",
  description:
    "Figma ipsum component variant main layer. Draft scale figma union prototype ellipse bold community select. Group effect background editor flows duplicate ellipse opacity flatten. Component background.",
  buttons: {
    readMore: "Read Blog",
    viewAll: "View All",
  },
  posts: [
    {
      image: "/blog-1.png",
      date: "Olivia Rhye • 20 Jan 2022",
      title: "UI REVIEW PRESENTATION",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["DESIGN", "Research", "Presentation"],
    },
    {
      image: "/blog-3.png",
      date: "Olivia Rhye • 20 Jan 2022",
      title: "UI REVIEW PRESENTATION",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["DESIGN", "Research", "Presentation"],
    },
    {
      image: "/blog-2.png",
      date: "Olivia Rhye • 20 Jan 2022",
      title: "UI REVIEW PRESENTATION",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["DESIGN", "Research", "Presentation"],
    },
  ],
};
