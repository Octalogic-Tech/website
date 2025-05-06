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
