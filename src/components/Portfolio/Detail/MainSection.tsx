import React from "react";
import PortfolioDetailsHeroSection from "./PortfolioDetailsHeroSection";
import MainContent from "./PortFolioDetailsMainContent";
import DesignSystemSection from "./DesignSystemSection";
import WireframesCarousel from "./WireframesCarousel";
import ConclusionSection from "./ConclusionSection";
import ContactUsSection from "../../common/ContactUsSection";
import type {
  PortfolioDetailHeroSection,
  PortfolioDetailSection,
  PortfolioConclusion,
  PortfolioDetailProps,
} from "@/types/portfolioDetails";

const MainSection: React.FC<PortfolioDetailProps> = ({ portfolioPage, contactData }) => {
  // Transform data for PortfolioDetailsHeroSection
  const heroSectionData: PortfolioDetailHeroSection = {
    labelText: portfolioPage.label || "",
    title: portfolioPage.title || "",
    subtitle: portfolioPage.subtitle || "",
    features: {
      feature1: portfolioPage.featurePoints?.[0]?.name || "",
      feature2: portfolioPage.featurePoints?.[1]?.name || "",
      feature3: portfolioPage.featurePoints?.[2]?.name || "",
    },
  };

  const mainContentData: PortfolioDetailSection = {
    ...heroSectionData,
    imageSrc: portfolioPage.posterImage?.url || "",
    href: "",
  };

  // Transform content sections to match the expected format
  const transformedContent =
    portfolioPage.content?.map((section) => ({
      title: section.title || "",
      // Extract descriptions from the array of description objects
      description: section.description.map((desc) => desc.description),
      descriptionPoints: section.descriptionPoints || [],
    })) || [];

  const conclusionData: PortfolioConclusion = {
    title: portfolioPage.conclusionTitle || "",
    description: portfolioPage.conclusionDescription || "",
    points: portfolioPage.conclusionPoints || [],
  };

  return (
    <main>
      <PortfolioDetailsHeroSection section={heroSectionData} />
      <MainContent section={mainContentData} portfolioContent={transformedContent} />
      <DesignSystemSection designs={portfolioPage.portfolioLexend || []} />
      <WireframesCarousel images={portfolioPage.carouselImage || []} />
      <ConclusionSection conclusion={conclusionData} />
      <ContactUsSection data={contactData} />
    </main>
  );
};

export default MainSection;
