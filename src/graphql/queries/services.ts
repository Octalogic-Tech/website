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
