import { RotatingBanner } from "@/components/common/rotating-banner";
import AboutSection from "./AboutSection";
import {
  aboutSectionData,
  blogSectionData,
  caseStudySectionData,
  heroSectionData,
  ourServicesSectionData,
  portfolioSectionData,
} from "@/data/homeData";
import CaseStudySection from "./CaseStudySection";
import BlogSection from "./BlogSection";
import PortfolioSection from "./PortfolioSection";
import ContactUsSection from "../common/ContactUsSection";
import JoinOurTeamSection from "../common/JoinOurTeamSection";
import OurServicesSection from "./OurServicesSection";
import HeroSection from "./HeroSection";

const bannerImages = [
  "/company-1.png",
  "/company-2.png",
  "/company-3.png",
  "/company-4.png",
  "/company-5.png",
  "/company-6.png",
  "/company-7.png",
];
export default function MainSection() {
  return (
    <main>
      <HeroSection data={heroSectionData} />
      <RotatingBanner images={bannerImages} />
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
