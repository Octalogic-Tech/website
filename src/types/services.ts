export interface ServicesSectionData {
  badge: string;
  title: string;
  description: string;
  ctaButton: {
    buttonLabel: string;
    buttonUrl: string;
  };
}
export interface DiscoveryItem {
  id: number;
  navTitle: string;
  title: string;
  description: string;
  bulletPoints: string[];
  image: string;
}
export interface NotScopeSectionData {
  title: string;
  mainBox: {
    title: string;
    description: string;
  };
  boxes: {
    title: string;
    description: string;
  }[];
}
// export interface TechnologyItem {
//   id: number;
//   title: string;
//   description: string;
//   technologies: { icon: string; name: string }[];
// }
export interface ExpertiseItem {
  id: number;
  title: string;
  icon: string;
  description: string;
  bulletPoints: string[];
}
export interface DiscoverySectionData {
  items: DiscoveryItem[];
}
// export interface TechnologySectionData {
//   title: string;
//   items: TechnologyItem[];
// }
export interface ExpertiseSectionData {
  title: string;
  items: ExpertiseItem[];
}

export interface WorkStep {
  icon: string;
  title: string;
  description: string;
}

export interface HowWeWorkSectionData {
  title: string;
  steps: WorkStep[];
}

export interface CountryInfo {
  name: string;
  flag: {
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

export interface ServicesPageData {
  servicesSection: ServicesSectionData;
  discoverySection: DiscoverySectionData;
  notScopeSection: NotScopeSectionData;
  // technologySection: TechnologySectionData;
  expertiseSection: ExpertiseSectionData;
  howWeWorkSection: HowWeWorkSectionData;
  mapData: MapSectionData;
}
