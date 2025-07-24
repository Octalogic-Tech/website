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

interface WatchVideoButton {
  buttonLabel: string;
  buttonUrl: string;
}

interface StatBlock {
  statNumber: string;
  statDescription: string;
}

interface SolutionStat {
  statNumber: string;
  statDescription: string;
}

interface ViewCaseStudyButton {
  buttonLabel: string;
  buttonUrl: string;
}

interface CaseStudyCard {
  logo: ImageWithResponsive;
  description: string;
  slug: string;
  viewcasestudyButton: ViewCaseStudyButton;
}

export interface CaseStudyDetailQueryResponse {
  caseStudy: {
    slug: string;
    companyLogo: ImageWithResponsive;
    heroTitle: string;
    watchVideoButton: WatchVideoButton;
    introTitle: string;
    introductionDescription: string;
    aboutTitle: string;
    aboutDescription1: string;
    aboutQuote: string;
    aboutDescription2: string;
    statTitle: string;
    statBlock: StatBlock[];
    challengesHeader: string;
    description: string;
    challengeImage: ImageWithResponsive;
    listTitle: string;
    list: string[];
    solutionTitle: string;
    solutionHeading1: string;
    solutionPara1: string;
    solutionImage: ImageWithResponsive;
    solutionHeading2: string;
    solutionPara2: string;
    solutionImage2: ImageWithResponsive;
    solutionPara3: string;
    solutionImage3: ImageWithResponsive;
    solutionPara4: string;
    solutionImage4: ImageWithResponsive;
    solutionPara5: string;
    solutionQuote: string;
    solutionStat: SolutionStat[];
    resultTitle: string;
    resultPara1: string;
    resultImage: ImageWithResponsive;
    resultQuote: string;
    resultPara2: string;
    caseStudyCards: CaseStudyCard[];
  };
}

export interface CaseStudyDetailQueryVariables {
  slug: string;
}

export const CASE_STUDY_DETAIL_QUERY = `
  query CaseStudyDetail($slug: String!) {
    caseStudy(filter: {slug: {eq: $slug}}) {
      slug
      companyLogo {
        url
        alt
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
      heroTitle
      watchVideoButton {
        buttonLabel
        buttonUrl
      }
      introTitle
      introductionDescription
      aboutTitle
      aboutDescription1
      aboutQuote
      aboutDescription2
      statTitle
      statBlock {
        statNumber
        statDescription
      }
      challengesHeader
      description
      challengeImage {
        alt
        url
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
      listTitle
      list
      solutionTitle
      solutionHeading1
      solutionPara1
      solutionImage {
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
      solutionHeading2
      solutionPara2
      solutionImage2 {
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
      solutionPara3
      solutionImage3 {
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
      solutionPara4
      solutionImage4 {
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
      solutionPara5
      solutionQuote
      solutionStat {
        statNumber
        statDescription
      }
      resultTitle
      resultPara1
      resultImage {
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
      resultQuote
      resultPara2
      caseStudyCards {
        logo {
          url
          alt
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
        description
        slug
        viewcasestudyButton {
          buttonLabel
          buttonUrl
        }
      }
    }
  }
`;
