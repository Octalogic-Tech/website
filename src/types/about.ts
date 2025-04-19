export interface AboutHeroSectionData {
  badge: string;
  title: string;
  description: string;
  ctaButton: {
    buttonLabel: string;
    buttonUrl: string;
  };
}

export interface CarouselImage {
  url: string;
  alt: string;
}

export interface MissionSectionData {
  title: string;
  description: string;
}

export interface Testimonial {
  cardLogo: {
    url: string;
    alt: string;
  };
  cardDescription: string;
  profileImage: {
    url: string;
    alt: string;
  };
  profileName: string;
  profilePosition: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}

export interface BannerImage {
  url: string;
  alt: string;
}

export interface PurposeCard {
  customLogo: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
}

export interface PurposeSectionData {
  heading: string;
  description: string;
  cards: PurposeCard[];
}

export interface MainSectionProps {
  data: {
    sectionTag: string;
    heroTitle: string;
    heroDescription: string;
    workWithUsButton: {
      buttonLabel: string;
      buttonUrl: string;
    };
    imageCarousel: CarouselImage[];
    missionTitle: string;
    missionDescription: string;
    testimonial: Testimonial[];
    banner: BannerImage;
    purposeTitle: string;
    purposeDescription: string;
    purposeCards: PurposeCard[];
  };
}
