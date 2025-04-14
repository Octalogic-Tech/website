import { RotatingBanner } from "@/components/common/rotating-banner";
import AboutSection from "./AboutSection";
import {
  aboutSectionData,
  blogSectionData,
  caseStudySectionData,
  heroSectionData,
  ourServicesSectionData,
  portfolioSectionData,
  bannerImages,
} from "@/data/homeData";
import CaseStudySection from "./CaseStudySection";
import BlogSection from "./BlogSection";
import PortfolioSection from "./PortfolioSection";
import ContactUsSection from "../common/ContactUsSection";
import JoinOurTeamSection from "../common/JoinOurTeamSection";
import OurServicesSection from "./OurServicesSection";
import HeroSection from "./HeroSection";

export default function MainSection() {
  return (
    <main>
      <HeroSection data={heroSectionData} />
      <RotatingBanner images={bannerImages.images} />
      <AboutSection data={aboutSectionData} />
      <PortfolioSection data={portfolioSectionData} />
      <CaseStudySection cards={caseStudySectionData.cards} />
      <OurServicesSection data={ourServicesSectionData} />
      <BlogSection data={blogSectionData} />
      <ContactUsSection />
      <JoinOurTeamSection />
    </main>
  );
}
