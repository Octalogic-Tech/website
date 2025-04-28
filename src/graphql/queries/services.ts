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
        }
        title
        description
      }
      worldMap {
        url
        alt
      }
      collaborationTitle
      collaborationDescription
      countries {
        countryFlag {
          url
          alt
        }
        countryName
      }
    }
  }
`;
