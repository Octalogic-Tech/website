export interface CaseStudyHeroProps {
  data: {
    companyLogo: {
      alt: string;
      url: string;
    };
    title: string;
    watchVideoButton: {
      buttonLabel: string;
      buttonUrl: string;
    };
  };
}
export interface IntroductionSectionProps {
  data: {
    title: string;
    description: string;
  };
}

export interface StatProps {
  value: string;
  description: string;
}

interface StatBlockItem {
  statNumber: string;
  statDescription: string;
}

export interface AboutSectionProps {
  data: {
    title: string;
    description1: string;
    quote: string;
    description2: string;
    statTitle?: string;
    statBlock?: StatBlockItem[];
  };
}

interface ChallengeImage {
  url: string;
  alt: string;
}

export interface ChallengeSectionProps {
  data: {
    header?: string;
    title?: string;
    description: string;
    image: ChallengeImage;
    listTitle: string;
    list: string[];
  };
}

interface ResultsImage {
  url: string;
  alt: string;
}

export interface ResultsSectionProps {
  data: {
    title: string;
    para1: string;
    para2: string;
    quote: string;
    image: ResultsImage;
  };
}

interface Image {
  url: string;
  alt: string;
}

export interface SolutionsSectionProps {
  data: {
    title: string;
    heading1: string;
    heading2: string;
    para1: string;
    para2: string;
    para3: string;
    para4: string;
    para5: string;
    quote: string;
    image: Image;
    image2: Image;
    image3: Image;
    image4: Image;
    statBlock: StatBlockItem[];
  };
}

export interface MainSectionProps {
  data: {
    companyLogo: { url: string; alt: string };
    heroTitle: string;
    watchVideoButton: { buttonLabel: string; buttonUrl: string };
    introTitle: string;
    introductionDescription: string;
    aboutTitle: string;
    aboutDescription1: string;
    aboutQuote: string;
    aboutDescription2: string;
    statTitle: string;
    statBlock: { statNumber: string; statDescription: string }[];
    challengesHeader: string;
    description: string;
    challengeImage: ChallengeImage;
    listTitle: string;
    list: string[];
    solutionTitle: string;
    solutionHeading1: string;
    solutionPara1: string;
    solutionImage: { url: string; alt: string };
    solutionHeading2: string;
    solutionPara2: string;
    solutionImage2: { url: string; alt: string };
    solutionPara3: string;
    solutionImage3: { url: string; alt: string };
    solutionPara4: string;
    solutionImage4: { url: string; alt: string };
    solutionPara5: string;
    solutionQuote: string;
    solutionStat: { statNumber: string; statDescription: string }[];
    resultTitle: string;
    resultPara1: string;
    resultImage: { url: string; alt: string };
    resultQuote: string;
    resultPara2: string;
    caseStudyCards: {
      logo: { url: string; alt: string };
      description: string;
      viewcasestudyButton: { buttonLabel: string; buttonUrl: string };
    }[];
  };
}
