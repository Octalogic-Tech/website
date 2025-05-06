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
