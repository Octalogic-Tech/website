export interface FooterQueryResponse {
  footer: {
    logo: {
      alt: string;
      url: string;
      responsiveImage: {
        srcSet: string;
        webpSrcSet: string;
        sizes: string;
        src: string;
        width: number;
        height: number;
        aspectRatio: number;
        alt: string;
        title: string;
        base64: string;
      };
    };
    locations: {
      name: string;
    }[];
    socialMediaLinks: {
      socialMediaLogo: {
        alt: string;
        url: string;
        responsiveImage: {
          srcSet: string;
          webpSrcSet: string;
          sizes: string;
          src: string;
          width: number;
          height: number;
          aspectRatio: number;
          alt: string;
          title: string;
          base64: string;
        };
      };
      socialMediaLinks: string;
    }[];
    navlinks: {
      label: string;
      url: string;
    }[];
    copyrightText: string;
    creditsText: string;
    creditLogo: {
      alt: string;
      url: string;
      responsiveImage: {
        srcSet: string;
        webpSrcSet: string;
        sizes: string;
        src: string;
        width: number;
        height: number;
        aspectRatio: number;
        alt: string;
        title: string;
        base64: string;
      };
    };
  };
}

export const FOOTER_QUERY = `
  query {
    footer {
      logo {
        alt
        url
        responsiveImage(imgixParams: { fit: clip, w: 128.96, h: 28.42, auto: format }) {
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
        responsiveImage(imgixParams: { fit: clip, w: 140, h: 24, auto: format }) {
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
