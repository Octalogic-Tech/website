export interface AboutSectionData {
  title: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface HeroSectionData {
  heading: string;
  description: string;
  services?: string[];
  ctaButton?: {
    text: string;
    link: string;
  };
}

export interface CardItem {
  logo: string;
  description: string;
  buttonText: string;
}

export interface CaseStudySectionData {
  cards: CardItem[];
}

export interface ServiceCard {
  title: string;
  description: string;
  chips: string[];
}

export interface OurServicesSectionData {
  title: string;
  description: string;
  ctaButton: {
    text: string;
  };
  sideimage: string;
  serviceCards: ServiceCard[];
}

export interface PortfolioItem {
  image: string;
  title: string;
  description: string;
}

export interface PortfolioSectionData {
  title: string;
  description: string;
  ctaButton: {
    text: string;
  };
  portfolioItems: PortfolioItem[];
}

export interface BlogPost {
  image: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
}

export interface BlogSectionData {
  title: string;
  description: string;
  posts: BlogPost[];
  buttons: {
    readMore: string;
    viewAll: string;
  };
}

export interface BannerData {
  images: string[];
}
