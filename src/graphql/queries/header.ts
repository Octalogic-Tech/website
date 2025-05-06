export const HEADER_QUERY = `
  query {
    header(fallbackLocales: en) {
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
      navlinks {
        label
        url
      }
      language
      button {
        buttonLabel
        buttonUrl
      }
    }
  }
`;
