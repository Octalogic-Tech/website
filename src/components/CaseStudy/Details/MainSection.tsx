import type { ContactUsSectionProps } from "@/types/common";
import ContactUsSection from "../../common/ContactUsSection";
import IntroductionSection from "./IntroductionSection";
import ResultsSection from "./ResultsSection";
import CaseStudySection from "../../Home/CaseStudySection";
import type { MainSectionProps } from "@/types/caseStudyInner";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ChallengeSection from "./ChallengeSection";
import SolutionsSection from "./SolutionsSection";

export default function MainSection({
  data,
  contactData,
}: {
  data: MainSectionProps["data"];
  contactData: ContactUsSectionProps["data"];
}) {
  const heroData = {
    companyLogo: data.companyLogo,
    title: data.heroTitle,
    watchVideoButton: data.watchVideoButton,
  };

  const introData = {
    title: data.introTitle,
    description: data.introductionDescription,
  };

  const aboutData = {
    title: data.aboutTitle,
    description1: data.aboutDescription1,
    quote: data.aboutQuote,
    description2: data.aboutDescription2,
  };

  const challengesData = {
    title: data.challengesHeader,
    description: data.description,
    image: data.challengeImage,
    listTitle: data.listTitle,
    list: data.list,
  };

  const solutionsData = {
    title: data.solutionTitle,
    heading1: data.solutionHeading1,
    para1: data.solutionPara1,
    image: data.solutionImage,
    heading2: data.solutionHeading2,
    para2: data.solutionPara2,
    image2: data.solutionImage2,
    para3: data.solutionPara3,
    image3: data.solutionImage3,
    para4: data.solutionPara4,
    image4: data.solutionImage4,
    para5: data.solutionPara5,
    quote: data.solutionQuote,
    statBlock: data.solutionStat,
  };

  const resultsData = {
    title: data.resultTitle,
    para1: data.resultPara1,
    image: data.resultImage,
    quote: data.resultQuote,
    para2: data.resultPara2,
  };

  return (
    <main>
      <HeroSection data={heroData} />
      <IntroductionSection data={introData} />
      <AboutSection data={aboutData} />
      <ChallengeSection data={challengesData} />
      <SolutionsSection data={solutionsData} />
      <ResultsSection data={resultsData} />
      <CaseStudySection cards={data.caseStudyCards} variant="caseStudy" />
      <ContactUsSection data={contactData} />
    </main>
  );
}
