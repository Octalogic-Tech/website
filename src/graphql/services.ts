interface ResponsiveImage {
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  alt: string;
  title: string;
  base64: string;
}

interface ImageWithResponsive {
  url: string;
  alt: string;
  responsiveImage: ResponsiveImage;
}

interface WorkWithUsButton {
  buttonLabel: string;
  buttonUrl: string;
}

interface StepsNavigationMenu {
  name: string;
}

interface ProcessCard {
  stepNumber: string;
  stepTitle: string;
  description: string;
  descriptionPoints: string[];
  customImage: ImageWithResponsive;
}

interface ValueCard {
  cardTitle: string;
  cardDescription: string;
}

interface NavigationFeature {
  featureName: string;
  featureLogo: ImageWithResponsive;
  featureTitle: string;
  featureDescription: string;
  featurePoints: string[];
}

interface HowWeWorkCard {
  customLogo: ImageWithResponsive;
  title: string;
  description: string;
}

interface Country {
  countryFlag: ImageWithResponsive;
  countryName: string;
}

export interface ServicesPageQueryResponse {
  servicesPage: {
    sectionNameTag: string;
    heroTitle: string;
    heroDescription: string;
    workWithUs: WorkWithUsButton;
    stepsNavigationMenu: StepsNavigationMenu[];
    processCard: ProcessCard[];
    nextButton: string;
    previousButton: string;
    valuePropositionTitle: string;
    valueCards: ValueCard[];
    expertiseTitle: string;
    navigationFeatures: NavigationFeature[];
    title: string;
    howWeWorkCards: HowWeWorkCard[];
    worldMap: ImageWithResponsive;
    collaborationTitle: string;
    collaborationDescription: string;
    countries: Country[];
  };
}

export const SERVICES_PAGE_QUERY = `
  query {
    servicesPage {
      sectionNameTag
      heroTitle
      heroDescription
        workWithUs {
        buttonLabel
        buttonUrl
      }
      stepsNavigationMenu {
        name
      }
      processCard {
        stepNumber
        stepTitle
        description
        descriptionPoints
         customImage {
          url
          alt
          responsiveImage(imgixParams: { fit: clip, w: 800, h: 600, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
      }
      nextButton
      previousButton
      valuePropositionTitle
      valueCards {
        cardTitle
        cardDescription
      }
      expertiseTitle
      navigationFeatures {
        featureName
        featureLogo {
          url
          alt
          responsiveImage(imgixParams: { fit: clip, w: 200, h: 200, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
        featureTitle
        featureDescription
        featurePoints
      }
      title
      howWeWorkCards {
        customLogo {
          url
          alt
          responsiveImage(imgixParams: { fit: clip, w: 200, h: 200, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
        title
        description
      }
      worldMap {
        url
        alt
        responsiveImage(imgixParams: { fit: clip, w: 1200, h: 800, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
      collaborationTitle
      collaborationDescription
      countries {
        countryFlag {
          url
          alt
          responsiveImage(imgixParams: { fit: clip, w: 50, h: 30, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
        countryName
      }
    }
  }
`;
