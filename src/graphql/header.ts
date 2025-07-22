export interface HeaderQueryResponse {
  header: {
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
    navlinks: {
      label: string;
      url: string;
    }[];
    language: {
      code: string;
      label: string;
      name: string;
    }[];
    button: {
      buttonLabel: string;
      buttonUrl: string;
    };
  };
}

export const HEADER_QUERY = `
  query {
    header(fallbackLocales: en) {
      logo {
        alt
        url
        responsiveImage(imgixParams: { fit: clip, w: 134, h: 32, auto: format }) {
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
