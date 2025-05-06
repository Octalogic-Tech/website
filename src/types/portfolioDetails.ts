import type { ContactUsSectionProps } from "@/types/common";

export interface PortfolioDetailHeroSection {
  labelText: string;
  title: string;
  subtitle: string;
  features: {
    feature1: string;
    feature2: string;
    feature3: string;
  };
}

export type PortfolioDetailSection = PortfolioDetailHeroSection & {
  href: string;
  imageSrc: string;
  posterImage?: {
    responsiveImage?: any;
    url: string;
    alt?: string;
  };
};

export interface PortfolioContentSection {
  title: string;
  description: string[];
  descriptionPoints: string[] | null;
}

export interface PortfolioDesignSection {
  title: string;
  description: string;
  image: {
    responsiveImage: any;
    alt: string;
    url: string;
  };
}

export interface PortfolioCarouselImage {
  responsiveImage: any;
  url: string;
  alt: string;
}

export interface PortfolioConclusion {
  title: string;
  description: string;
  points: string[];
}

export interface PortfolioPageData {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  slug: string;
  featurePoints: {
    name: string;
  }[];
  posterImage: {
    url: string;
    alt: string;
  };
  content: {
    title: string;
    descriptionPoints: string[] | null;
    description: {
      description: string;
    }[];
  }[];
  portfolioLexend: PortfolioDesignSection[];
  carouselImage: PortfolioCarouselImage[];
  conclusionTitle: string;
  conclusionDescription: string;
  conclusionPoints: string[];
}

export interface PortfolioDetailProps {
  portfolioPage: PortfolioPageData;
  contactData: ContactUsSectionProps["data"];
}
