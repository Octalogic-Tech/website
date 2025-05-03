export interface PortfolioHeroSection {
  sectionNameTag: string;
  heroTitle: string;
  heroDescription: string;
  button: {
    buttonLabel: string;
    buttonUrl: string;
  };
}

export interface ClientProject {
  mainImage: {
    alt: string;
    url: string;
  };
  title: string;
  heading: string;
  description: string;
  slug: string;
  button: {
    buttonLabel: string;
    buttonUrl: string;
  };
}

export interface MainSectionProps {
  data: {
    sectionNameTag: string;
    heroTitle: string;
    heroDescription: string;
    button: {
      buttonLabel: string;
      buttonUrl: string;
    };
    clientsProject: ClientProject[];
  };
}
