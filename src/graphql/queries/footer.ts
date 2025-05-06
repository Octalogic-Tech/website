export const FOOTER_QUERY = `
  query {
    footer {
      logo {
        alt
        url
        responsiveImage(imgixParams: { fit: clip, w: 400, h: 100, auto: format }) {
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
      locations {
        name
      }
      socialMediaLinks {
        socialMediaLogo {
          alt
          url
          responsiveImage(imgixParams: { fit: clip, w: 24, h: 24, auto: format }) {
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
        socialMediaLinks
      }
      navlinks {
        label
        url
      }
      copyrightText
      creditsText
      creditLogo {
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
    }
  }
`;
