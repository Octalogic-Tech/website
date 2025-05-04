export const CASE_STUDY_DETAIL_QUERY = `
  query CaseStudyDetail($slug: String!) {
    caseStudy(filter: {slug: {eq: $slug}}) {
      slug
      companyLogo {
        url
        alt
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
      }
      listTitle
      list
      solutionTitle
      solutionHeading1
      solutionPara1
      solutionImage {
        url
        alt
      }
      solutionHeading2
      solutionPara2
      solutionImage2 {
        url
        alt
      }
      solutionPara3
      solutionImage3 {
        url
        alt
      }
      solutionPara4
      solutionImage4 {
        url
        alt
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
      }
      resultQuote
      resultPara2
      caseStudyCards {
        logo {
          url
          alt
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
