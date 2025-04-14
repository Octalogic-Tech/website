export interface AboutHeroSectionData {
  badge: string;
  title: string;
  description: string;
  ctaButton: {
    text: string;
  };
}

export interface CarouselImage {
  url: string;
}

export interface MissionSectionData {
  title: string;
  description: string;
}

export interface Testimonial {
  logo: string;
  description: string;
  avatar: string;
  name: string;
  position: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}

export interface TeamImageData {
  src: string;
}

export interface PurposeCard {
  logo: string;
  title: string;
  description: string;
}

export interface PurposeSectionData {
  heading: string;
  description: string;
  cards: PurposeCard[];
}
