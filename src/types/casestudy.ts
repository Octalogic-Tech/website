export interface ImageType {
  responsiveImage: any;
  alt: string;
  url: string;
}

export interface OptionalImageType {
  alt?: string;
  url?: string;
  responsiveImage?: any;
}

export interface ButtonType {
  buttonUrl: string;
  buttonLabel: string;
}

export interface OptionalButtonType {
  buttonUrl?: string;
  buttonLabel?: string;
}

export interface CaseCardType {
  logo: ImageType;
  title: string;
  description: string;
  image: ImageType;
  slug?: string;
  button: ButtonType;
  portfolioSlug?: string;
  className?: string;
}

export interface OptionalCaseCardType {
  logo?: OptionalImageType;
  title?: string;
  description?: string;
  image?: OptionalImageType;
  button?: OptionalButtonType;
  slug?: string;
  portfolioSlug?: string;
}

export interface HeroSectionData {
  sectionTag: string;
  heroTitle: string;
  heroDescription: string;
}

export interface FeaturedSectionData {
  title: string;
  description: string;
  cashCard: Partial<CaseCardType>;
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

export interface CaseStudyHeroSectionData {
  sectionTag?: string;
  heroTitle?: string;
  heroDescription?: string;
}

export interface MainSectionProps {
  data: {
    sectionTag?: string;
    heroTitle?: string;
    heroDescription?: string;
    featuredTitle?: string;
    featureDescription?: string;
    cashCard?: OptionalCaseCardType;
    successTitle?: string;
    successDescription?: string;
    successStories?: OptionalCaseCardType[];
    sectionTitle?: string;
    sectionDescription?: string;
    button?: OptionalButtonType;
    rotatingBannerImages?: OptionalImageType[];
  };
}

export interface FeaturedSectionProps {
  data: {
    title?: string;
    description?: string;
    cashCard?: OptionalCaseCardType;
  };
}

export interface StoriesSectionProps {
  data?: {
    title?: string;
    description?: string;
    stories?: OptionalCaseCardType[];
  };
}

export interface InnovationSectionProps {
  data?: {
    title?: string;
    description?: string;
    button?: OptionalButtonType;
  };
}
