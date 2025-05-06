export const JOIN_US_QUERY = `
  query {
    allJoinOurTeams {
      pageTitle
      description 
      weAreHiringButton {
        ... on ButtonRecord {
          buttonLabel
          buttonUrl
        }
      }
      sideImages {
        url
        alt
        responsiveImage(imgixParams: { fit: clip, w: 400, h: 400, auto: format }) {
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
