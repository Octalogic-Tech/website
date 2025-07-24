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
  alt: string;
  url: string;
  responsiveImage: ResponsiveImage;
}

interface Button {
  buttonLabel: string;
  buttonUrl: string;
}

interface ClientsProject {
  mainImage: ImageWithResponsive;
  title: string;
  slug: string;
  heading: string;
  description: string;
  button: Button;
}

export interface PortfolioPageQueryResponse {
  allPortfolioLandingPages: {
    sectionNameTag: string;
    heroTitle: string;
    heroDescription: string;
    button: Button;
    clientsProject: ClientsProject[];
  }[];
}

export const PORTFOLIO_PAGE_QUERY = `
  query {
    allPortfolioLandingPages {
      sectionNameTag
      heroTitle
      heroDescription
      button {
        buttonLabel
        buttonUrl
      }
      clientsProject {
        mainImage {
          alt
          url
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
        title
        slug
        heading
        description
        button {
          buttonLabel
          buttonUrl
        }
      }
    }
  }
`;
