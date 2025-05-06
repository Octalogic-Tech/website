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
