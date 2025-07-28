interface ResponsiveImage {
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
}

interface ImageWithResponsive {
  url: string;
  alt: string;
  responsiveImage: ResponsiveImage;
}

interface ButtonRecord {
  buttonLabel: string;
  buttonUrl: string;
}

export interface JoinUsQueryResponse {
  allJoinOurTeams: {
    pageTitle: string;
    description: string;
    weAreHiringButton: ButtonRecord;
    sideImages: ImageWithResponsive[];
  }[];
}

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
