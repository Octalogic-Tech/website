import type { ServicesPageData } from "@/types/services";

export const servicesData: ServicesPageData = {
  servicesSection: {
    badge: "Services",
    title: "The radical path to tech",
    description:
      "End-to-end digital transformation solutions delivered through a comprehensive suite of technical capabilities.",
    ctaButton: {
      buttonLabel: "Work With Us",
      buttonUrl: "/work-with-us",
    },
  },
  discoverySection: {
    items: [
      {
        id: 1,
        navTitle: "Discovery",
        title: "Discovery Stage",
        description: "We will find out what your customers want, and how to build it.",
        bulletPoints: ["Ideation", "Customer interviews", "Roadmaping"],
        image: "/discovery.png",
      },
      {
        id: 2,
        navTitle: "UI/UX Design",
        title: "Design Process",
        description:
          "We create intuitive and engaging user experiences through careful planning, iterative design, and user testing to ensure your product meets both user needs and business goals.",
        bulletPoints: [
          "User interface design",
          "Wireframing and prototyping",
          "User experience optimization",
          "Visual design and branding",
          "Usability testing",
        ],
        image: "/discovery.png",
      },
    ],
  },
  notScopeSection: {
    title: "OBSESSED WITH OUTCOME, NOT SCOPE",
    mainBox: {
      title: "Important Note",
      description:
        "We focus on what we do best and maintain transparency about services we don't provide.",
    },
    boxes: [
      {
        title: "Hardware Solutions",
        description: "We don't deal with physical hardware or infrastructure setup.",
      },
      {
        title: "Content Creation",
        description: "We don't provide content writing or creation services.",
      },
      {
        title: "Digital Marketing",
        description: "We don't handle marketing campaigns or social media management.",
      },
      {
        title: "IT Support",
        description: "We don't provide ongoing IT support or maintenance services.",
      },
    ],
  },

  // technologySection: {
  //   title: "Technology Stack",
  //   items: [
  //     {
  //       id: 1,
  //       title: "Mobile Development",
  //       description: "We build native and cross-platform mobile applications...",
  //       technologies: [
  //         { icon: "/kotlin.png", name: "KOTLIN" },
  //         { icon: "/androidstudio.png", name: "Android Studio" },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Mobile Development",
  //       description: "We build native and cross-platform mobile applications...",
  //       technologies: [
  //         { icon: "/kotlin.png", name: "KOTLIN" },
  //         { icon: "/androidstudio.png", name: "Android Studio" },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Mobile Development",
  //       description: "We build native and cross-platform mobile applications...",
  //       technologies: [
  //         { icon: "/kotlin.png", name: "KOTLIN" },
  //         { icon: "/androidstudio.png", name: "Android Studio" },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       title: "Mobile Development",
  //       description: "We build native and cross-platform mobile applications...",
  //       technologies: [
  //         { icon: "/kotlin.png", name: "KOTLIN" },
  //         { icon: "/androidstudio.png", name: "Android Studio" },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       title: "Mobile Development",
  //       description: "We build native and cross-platform mobile applications...",
  //       technologies: [
  //         { icon: "/kotlin.png", name: "KOTLIN" },
  //         { icon: "/androidstudio.png", name: "Android Studio" },
  //       ],
  //     },
  //   ],
  // },
  expertiseSection: {
    title: "Expertise",
    items: [
      {
        id: 1,
        title: "Blockchain",
        icon: "/blockchain.png",
        description: "Leverage distributed ledger technology...",
        bulletPoints: [
          "Smart Contract Development",
          "DeFi Applications",
          "NFT Marketplaces",
          "Blockchain Integration",
        ],
      },
      {
        id: 2,
        title: "Blsaockchain",
        icon: "/blockchain.png",
        description: "Leverage distributed ledger technology...",
        bulletPoints: [
          "Smart Contract Development",
          "DeFi Applications",
          "NFT Marketplaces",
          "Blockchain Integration",
        ],
      },
      {
        id: 3,
        title: "Blockchain",
        icon: "/blockchain.png",
        description: "Leverage distributed ledger technology...",
        bulletPoints: [
          "Smart Contract Development",
          "DeFi Applications",
          "NFT Marketplaces",
          "Blockchain Integration",
        ],
      },
      {
        id: 4,
        title: "Blockchain",
        icon: "/blockchain.png",
        description: "Leverage distributed ledger technology...",
        bulletPoints: [
          "Smart Contract Development",
          "DeFi Applications",
          "NFT Marketplaces",
          "Blockchain Integration",
        ],
      },
    ],
  },
  howWeWorkSection: {
    title: "How We Work",
    steps: [
      {
        icon: "/wework-1.png",
        title: "AGILE APPROCH",
        description: "An iterative approach to achieve the best results.",
      },
      {
        icon: "/wework-2.png",
        title: "PRODUCT MINDSET",
        description:
          "Our design team creates intuitive and engaging interfaces that bring your vision to life while ensuring optimal user experience.",
      },
      {
        icon: "/wework-1.png",
        title: "AGILE APPROCH",
        description: "An iterative approach to achieve the best results.",
      },
      {
        icon: "/wework-2.png",
        title: "PRODUCT MINDSET",
        description:
          "Our design team creates intuitive and engaging interfaces that bring your vision to life while ensuring optimal user experience.",
      },
      {
        icon: "/wework-1.png",
        title: "AGILE APPROCH",
        description: "An iterative approach to achieve the best results.",
      },
      {
        icon: "/wework-2.png",
        title: "PRODUCT MINDSET",
        description:
          "Our design team creates intuitive and engaging interfaces that bring your vision to life while ensuring optimal user experience.",
      },
    ],
  },
  mapData: {
    title: "We Collaborate With Business Across The Globe",
    description:
      "Together with clients, we are building meaningful digital experience for a global audience.",
    mapImage: {
      url: "/map.png",
      alt: "Global Map",
    },
    countries: [
      {
        name: "USA",
        flag: {
          url: "/flags/usa.png",
          alt: "USA Flag",
        },
      },
      {
        name: "UK",
        flag: {
          url: "/flags/uk.png",
          alt: "UK Flag",
        },
      },
      {
        name: "UAE",
        flag: {
          url: "/flags/uae.png",
          alt: "UAE Flag",
        },
      },
      {
        name: "Singapore",
        flag: {
          url: "/flags/singapore.png",
          alt: "Singapore Flag",
        },
      },
      {
        name: "Australia",
        flag: {
          url: "/flags/australia.png",
          alt: "Australia Flag",
        },
      },
      {
        name: "Sweden",
        flag: {
          url: "/flags/sweden.png",
          alt: "Sweden Flag",
        },
      },
      {
        name: "India",
        flag: {
          url: "/flags/india.png",
          alt: "India Flag",
        },
      },
      {
        name: "Netherlands",
        flag: {
          url: "/flags/netherlands.png",
          alt: "Netherlands Flag",
        },
      },
      {
        name: "Denmark",
        flag: {
          url: "/flags/denmark.png",
          alt: "Denmark Flag",
        },
      },
      {
        name: "France",
        flag: {
          url: "/flags/france.png",
          alt: "France Flag",
        },
      },
      {
        name: "South Korea",
        flag: {
          url: "/flags/south-korea.png",
          alt: "South Korea Flag",
        },
      },
      {
        name: "Germany",
        flag: {
          url: "/flags/germany.png",
          alt: "Germany Flag",
        },
      },
    ],
  },
};
