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

export interface ImageWithResponsive {
  url: string;
  alt: string;
  responsiveImage: ResponsiveImage;
}

export interface WorkWithUsButton {
  buttonLabel: string;
  buttonUrl: string;
}

export interface Testimonial {
  cardLogo: ImageWithResponsive;
  cardDescription: string;
  profileImage: ImageWithResponsive;
  profileName: string;
  profilePosition: string;
}

export interface PurposeCard {
  customLogo: ImageWithResponsive;
  title: string;
  description: string;
}

export interface AboutPageQueryResponse {
  allAboutPages: {
    sectionTag: string;
    heroTitle: string;
    heroDescription: string;
    workWithUsButton: WorkWithUsButton;
    imageCarousel: ImageWithResponsive[];
    missionTitle: string;
    missionDescription: string;
    testimonial: Testimonial[];
    banner: ImageWithResponsive;
    purposeTitle: string;
    purposeDescription: string;
    purposeCards: PurposeCard[];
  }[];
}

export const ABOUT_PAGE_QUERY = `
  query {
    allAboutPages {
      sectionTag
      heroTitle
      heroDescription
      workWithUsButton {
        buttonLabel
        buttonUrl
      }
      imageCarousel {
        url
        alt
        responsiveImage(imgixParams: { fit: clip, w: 300, h: 400, auto: format }) {
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
      missionTitle
      missionDescription
      testimonial {
        cardLogo {
          url
          alt
          responsiveImage(imgixParams: { fit: clip, w: 50, h: 50, auto: format }) {
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
        cardDescription
        profileImage {
          alt
          url
          responsiveImage(imgixParams: { fit: clip, w: 100, h: 100, auto: format }) {
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
        profileName
        profilePosition
      }
      banner {
        url
        alt
        responsiveImage(imgixParams: { fit: clip, w: 3000, h: 1000, auto: format }) {
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
      purposeTitle
      purposeDescription
      purposeCards {
        customLogo {
          alt
          url
          responsiveImage(imgixParams: { fit: clip, w: 100, h: 50, auto: format }) {
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
    }
  }
`;
