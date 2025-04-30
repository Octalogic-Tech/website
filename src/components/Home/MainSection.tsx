import { RotatingBanner } from "@/components/common/rotating-banner";
import AboutSection from "./AboutSection";
import CaseStudySection from "./CaseStudySection";
import BlogSection from "./BlogSection";
import PortfolioSection from "./PortfolioSection";
import OurServicesSection from "./OurServicesSection";
import JoinOurTeamSection from "../common/JoinOurTeamSection";
import ContactUsSection from "../common/ContactUsSection";
import HeroSection from "./HeroSection";
import type {
  HeroSectionData,
  AboutSectionData,
  PortfolioSectionData,
  OurServicesSectionData,
  BlogSectionData,
  MainSectionProps,
} from "@/types/home";
import type { ContactUsSectionProps, JoinOurTeamSectionProps } from "@/types/common";

export default function MainSection({
  data,
  contactData,
  joinUsData,
}: {
  data: MainSectionProps["data"];
  contactData: ContactUsSectionProps["data"];
  joinUsData: JoinOurTeamSectionProps["data"];
}) {
  const heroData: HeroSectionData = {
    heading: data?.heroTitle,
    description: data?.description,
    services: data?.services,
    ctaButton: {
      text: data?.button?.buttonLabel,
      link: data?.button?.buttonUrl,
    },
  };

  const aboutData: AboutSectionData = {
    title: data?.aboutTitle,
    description: data?.aboutDescription,
    stats: data?.stats,
  };

  const portfolioData: PortfolioSectionData = {
    title: data?.portfolioTitle,
    description: data?.portfolioDescription,
    ctaButton: {
      buttonLabel: data?.button?.buttonLabel || "",
      buttonUrl: data?.button?.buttonUrl || "",
    },
    portfolioCarousel: data?.portfolioCarousel || [],
  };

  const servicesData: OurServicesSectionData = {
    title: data?.servicesTitle,
    description: data?.servicesDescription,
    ctaButton: {
      buttonLabel: data?.button?.buttonLabel || "",
      buttonUrl: data?.button?.buttonUrl || "",
    },
    sideImage: data?.sideImage || { url: "", alt: "" },
    serviceCard: data?.serviceCard || [],
  };

  const blogData: BlogSectionData = {
    title: data?.blogsPageTitle,
    description: data?.blogPageDescription,
    posts: data?.blogCards || [],
    buttons: {
      viewAll: data?.button?.buttonLabel || "",
    },
  };

  const bannerImages = data.clientLogos?.map((img) => img.url) || [];

  return (
    <main>
      <HeroSection data={heroData} />
      <RotatingBanner images={bannerImages} />
      <AboutSection data={aboutData} />
      <PortfolioSection data={portfolioData} />
      <CaseStudySection cards={data?.caseStudyCards} />
      <OurServicesSection data={servicesData} />
      <BlogSection data={blogData} />
      <ContactUsSection data={contactData} />
      <JoinOurTeamSection data={joinUsData} />
    </main>
  );
}
