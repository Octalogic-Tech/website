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
        }
      }
      carouselImage {
        url
        alt
      }
      conclusionTitle
      conclusionDescription
      conclusionPoints
    }
  }
`;
