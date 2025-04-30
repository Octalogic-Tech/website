export const CASE_STUDY_PAGE_QUERY = `
  query {
    caseStudyLandingPage {
      sectionTag
      heroTitle
      heroDescription
      featuredTitle
      featureDescription
      cashCard {
        logo {
          alt
          url
        }
        title
        description
        button {
        buttonLabel
        buttonUrl
      }
        image {
          alt
          url
        }
      }
      successTitle
      successDescription
      successStories {
        logo {
          alt
          url
        }
        title
        description
        image {
          alt
          url
        }
      }
      sectionTitle
      sectionDescription
      button {
        buttonUrl
        buttonLabel
      }
      rotatingBannerImages {
        alt
        url
      }
    }
  }
`;
