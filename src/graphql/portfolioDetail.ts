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

interface FeaturePoint {
  name: string;
}

interface Description {
  description: string;
}

interface Content {
  title: string;
  descriptionPoints: string[];
  description: Description;
}

interface PortfolioLexend {
  title: string;
  description: string;
  image: ImageWithResponsive;
}

// All Portfolio Slugs Query Response
export interface AllPortfolioSlugsQueryResponse {
  allPortfolioLandingPages: {
    clientsProject: {
      slug: string;
    }[];
  }[];
}

// Portfolio By Slug Query Response
export interface PortfolioBySlugQueryResponse {
  portfolioPage: {
    id: string;
    label: string;
    title: string;
    subtitle: string;
    slug: string;
    featurePoints: FeaturePoint[];
    posterImage: ImageWithResponsive;
    content: Content[];
    portfolioLexend: PortfolioLexend[];
    carouselImage: ImageWithResponsive[];
    conclusionTitle: string;
    conclusionDescription: string;
    conclusionPoints: string[];
  };
}

// Portfolio By Slug Query Variables
export interface PortfolioBySlugQueryVariables {
  slug: string;
}

export const ALL_PORTFOLIO_SLUGS_QUERY = `
  query {
    allPortfolioLandingPages {
      clientsProject {
        slug
      }
    }
  }
`;

export const PORTFOLIO_BY_SLUG_QUERY = `
  query PortfolioBySlug($slug: String!) {
    portfolioPage(filter: {slug: {eq: $slug}}) {
      id
      label
      title
      subtitle
      slug
      featurePoints {
        name
      }
      posterImage {
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
      content {
        title
        descriptionPoints
        description {
          description
        }
      }
      portfolioLexend {
        title
        description
        image {
          alt
          url
          responsiveImage(imgixParams: { fit: clip, w: 600, h: 400, auto: format }) {
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
      carouselImage {
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
      conclusionTitle
      conclusionDescription
      conclusionPoints
    }
  }
`;
