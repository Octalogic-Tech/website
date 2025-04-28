export interface ServicesSectionData {
  sectionNameTag: string;
  heroTitle: string;
  heroDescription: string;
  workWithUs: {
    buttonLabel: string;
    buttonUrl: string;
  };
}
export interface NavigationMenuItem {
  id: number;
  name: string;
}

export interface ProcessCard {
  stepNumber: number;
  stepTitle: string;
  description: string;
  descriptionPoints: string[];
  customImage?: {
    url: string;
    alt: string;
  };
}

export interface ProcessNavigation {
  next: string;
  previous: string;
}

export interface ProcessSectionData {
  navigationMenu: NavigationMenuItem[];
  processCards: ProcessCard[];
  navigation: ProcessNavigation;
}
export interface NotScopeSectionData {
  title: string;
  cards: {
    cardTitle: string;
    cardDescription: string;
  }[];
}

export interface ExpertiseFeature {
  featureLogo: { url: string; alt: string };
  featureName: string;
  featureTitle: string;
  featureDescription: string;
  featurePoints: string[];
}

export interface ExpertiseSectionData {
  title: string;
  features: ExpertiseFeature[];
}

interface CustomLogo {
  url: string;
  alt: string;
}

interface WorkCard {
  customLogo: CustomLogo;
  title: string;
  description: string;
}

export interface HowWeWorkSectionData {
  title: string;
  cards: WorkCard[];
}

export interface WorkCardProps extends WorkCard {
  position: number;
}

export interface CountryInfo {
  countryName: string;
  countryFlag: {
    url: string;
    alt: string;
  };
}

export interface MapSectionData {
  title: string;
  description: string;
  mapImage: {
    url: string;
    alt: string;
  };
  countries: CountryInfo[];
}

export interface MainSectionProps {
  data: {
    sectionNameTag: string;
    heroTitle: string;
    heroDescription: string;
    workWithUs: {
      buttonLabel: string;
      buttonUrl: string;
    };
    stepsNavigationMenu: NavigationMenuItem[];
    processCard: ProcessCard[];
    nextButton: string;
    previousButton: string;
    valuePropositionTitle: string;
    valueCards: {
      cardTitle: string;
      cardDescription: string;
    }[];
    expertiseTitle: string;
    navigationFeatures: ExpertiseFeature[];
    title: string;
    howWeWorkCards: WorkCard[];
    worldMap: {
      url: string;
      alt: string;
    };
    collaborationTitle: string;
    collaborationDescription: string;
    countries: CountryInfo[];
  };
}
