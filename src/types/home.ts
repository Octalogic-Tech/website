export interface AboutSectionData {
  title: string;
  description: string;
  stats: {
    statNumber: number;
    statDescription: string;
  }[];
}

export interface HeroSectionData {
  heading: string;
  description: string;
  services?: {
    name: string;
  }[];
  ctaButton?: {
    text: string;
    link: string;
  };
}

export interface CardItem {
  logo: {
    url: string;
    alt?: string;
  };
  description: string;
  viewcasestudyButton: {
    buttonLabel: string;
    buttonUrl: string;
  };
}

export interface CaseStudySectionData {
  cards: CardItem[];
}

export interface ServiceCard {
  title: string;
  servicesDescription: string;
  chips: string[];
}

export interface OurServicesSectionData {
  title: string;
  description: string;
  ctaButton: {
    buttonLabel: string;
    buttonUrl: string;
  };
  sideImage: {
    url: string;
    alt: string;
  };
  serviceCard: ServiceCard[];
}

export interface PortfolioItem {
  carouselImage: {
    url: string;
    alt: string;
  };
  carouselTitle: string;
  carouselDescription: string;
}

export interface PortfolioSectionData {
  title: string;
  description: string;
  ctaButton: {
    buttonLabel: string;
    buttonUrl: string;
  };
  portfolioCarousel: PortfolioItem[];
}

export interface BlogPost {
  image: {
    url: string;
    alt: string;
  };
  date: string;
  title: string;
  description: string;
  tags: string[];
  button: {
    buttonLabel: string;
    buttonUrl: string;
  };
}

export interface BlogSectionData {
  title: string;
  description: string;
  posts: BlogPost[];
  buttons: {
    viewAll: string;
  };
}

export interface BannerData {
  images: string[];
}
