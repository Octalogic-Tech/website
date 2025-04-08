export interface HeroSectionData {
  heading: string;
  description: string;
  services?: string[];
  ctaButton?: {
    text: string;
    link: string;
  };
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
  serviceCards: ServiceCard[];
}
