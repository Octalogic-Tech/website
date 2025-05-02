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
        }
        title
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
