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
          responsiveImage(imgixParams: { fit: clip, w: 200, h: 50, auto: format }) {
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
        slug
        button {
        buttonLabel
        buttonUrl
      }
        image {
          alt
          url
          responsiveImage(imgixParams: { fit: clip, w: 1000, h: 600, auto: format }) {
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
      successTitle
      successDescription
      successStories {
        logo {
          alt
          url
          responsiveImage(imgixParams: { fit: clip, w: 200, h: 50, auto: format }) {
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
        slug
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
      sectionTitle
      sectionDescription
      button {
        buttonUrl
        buttonLabel
      }
      rotatingBannerImages {
        alt
        url
        responsiveImage(imgixParams: { fit: clip, w: 300, h: 100, auto: format }) {
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
  }
`;
