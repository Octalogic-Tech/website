interface ImageType {
  alt: string;
  url: string;
}

interface ButtonType {
  buttonUrl: string;
  buttonLabel: string;
}

export interface CaseCardType {
  logo: ImageType;
  title: string;
  description: string;
  image: ImageType;
  button: ButtonType;
}

export interface HeroSectionData {
  sectionTag: string;
  heroTitle: string;
  heroDescription: string;
}

export interface FeaturedSectionData {
  title: string;
  description: string;
  cashCard: CaseCardType;
}

export interface SuccessStoriesSectionData {
  title: string;
  description: string;
  stories: CaseCardType[];
}

export interface InnovationSectionData {
  title: string;
  description: string;
  button: ButtonType;
}

export interface BannerSectionData {
  rotatingBannerImages: ImageType[];
}

export interface CaseStudyPageData {
  heroSection: HeroSectionData;
  featuredSection: FeaturedSectionData;
  successStoriesSection: SuccessStoriesSectionData;
  innovationSection: InnovationSectionData;
  bannerSection: BannerSectionData;
}

export interface MainSectionProps {
  data: {
    sectionTag: string;
    heroTitle: string;
    heroDescription: string;
    featuredTitle: string;
    featureDescription: string;
    cashCard: CaseCardType;
    successTitle: string;
    successDescription: string;
    successStories: CaseCardType[];
    sectionTitle: string;
    sectionDescription: string;
    button: ButtonType;
    rotatingBannerImages: ImageType[];
  };
}
