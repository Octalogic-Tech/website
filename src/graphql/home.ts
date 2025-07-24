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

interface ButtonRecord {
  buttonLabel: string;
  buttonUrl: string;
}

interface PortfolioCarouselRecord {
  carouselImage: ImageWithResponsive;
  carouselTitle: string;
  carouselDescription: string;
}

interface CaseStudyCardRecord {
  logo: ImageWithResponsive;
  description: string;
  viewcasestudyButton: ButtonRecord;
}

interface ServiceCardRecord {
  title: string;
  servicesDescription: string;
  chips: string[];
}

interface BlogCardRecord {
  image: ImageWithResponsive;
  date: string;
  title: string;
  description: string;
  tags: string[];
  button: ButtonRecord;
}

export interface HomePageQueryResponse {
  allHomepages: {
    heroTitle: string;
    description: string;
    services: {
      name: string;
    }[];
    button: ButtonRecord;
    clientLogos: ImageWithResponsive[];
    aboutTitle: string;
    aboutDescription: string;
    stats: {
      statNumber: string;
      statDescription: string;
    }[];
    portfolioTitle: string;
    portfolioDescription: string;
    startAProjectButton: ButtonRecord;
    portfolioCarousel: PortfolioCarouselRecord[];
    caseStudyCards: CaseStudyCardRecord[];
    servicesTitle: string;
    servicesDescription: string;
    startAProjectButton2: ButtonRecord;
    sideImage: ImageWithResponsive;
    serviceCard: ServiceCardRecord[];
    blogsPageTitle: string;
    blogPageDescription: string;
    blogCards: BlogCardRecord[];
    viewAllButton: ButtonRecord;
  }[];
}

export const HOME_PAGE_QUERY = `
query {
  allHomepages {
    heroTitle
    description
    services {
      name
    }
    button {
      ... on ButtonRecord {
        buttonLabel
        buttonUrl
      }
    }
    clientLogos {
      url
      alt
      responsiveImage(imgixParams: { fit: clip, w: 200, h: 100, auto: format }) {
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
    aboutTitle
    aboutDescription
    stats {
      statNumber
      statDescription
    }
    portfolioTitle
    portfolioDescription
    startAProjectButton {
      ... on ButtonRecord {
        buttonLabel
        buttonUrl
      }
    }
    portfolioCarousel {
      ... on PortfolioCarouselRecord {
        carouselImage {
          url
          alt
          responsiveImage(imgixParams: { fit: clip, w: 600, h: 800, auto: format }) {
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
        carouselTitle
        carouselDescription
      }
    }
    caseStudyCards {
      ... on CaseStudyCardRecord {
        logo {
          url
          alt
          responsiveImage(imgixParams: { fit: clip, w: 200, h: 40, auto: format }) {
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
        description
        viewcasestudyButton {
          ... on ButtonRecord {
            buttonLabel
            buttonUrl
          }
        }
      }
    }
    servicesTitle
    servicesDescription
    startAProjectButton2 {
      ... on ButtonRecord {
        buttonLabel
        buttonUrl
      }
    }
    sideImage {
      url
      alt
      responsiveImage(imgixParams: { fit: clip, w: 600, h: 800, auto: format }) {
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
    serviceCard {
      ... on ServiceCardRecord {
        title
        servicesDescription
        chips
      }
    }
    blogsPageTitle
    blogPageDescription
    blogCards {
      ... on BlogCardRecord {
        image {
          url
          alt
          responsiveImage(imgixParams: { fit: clip, w: 400, h: 300, auto: format }) {
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
        date
        title
        description 
        tags
        button {
          ... on ButtonRecord {
            buttonLabel
            buttonUrl
          }
        }
      }
    }
    viewAllButton {
      ... on ButtonRecord {
        buttonLabel
        buttonUrl
      }
    }
  }
}
`;
