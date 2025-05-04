import HeroSection from "./HeroSection";
import type { ContactUsSectionProps } from "@/types/common";
import ContactUsSection from "../common/ContactUsSection";
import type { MainSectionProps, HeroSectionData } from "@/types/casestudy";
import FeaturedSection from "./FeaturedSection";
import StoriesSection from "./StoriesSection";
import InnovationSection from "./InnovationSection";
import { RotatingBanner } from "../common/rotating-banner";

export default function MainSection({
  data,
  contactData,
}: {
  data: MainSectionProps["data"];
  contactData: ContactUsSectionProps["data"];
}) {
  const heroData: HeroSectionData = {
    sectionTag: data.sectionTag || "Case Study",
    heroTitle: data.heroTitle || "Case Study Title",
    heroDescription: data.heroDescription || "Case Study Description",
  };

  const featuredData = {
    title: data.featuredTitle || "",
    description: data.featureDescription || "",
    cashCard: data.cashCard || {},
  };

  const storiesData = {
    title: data.successTitle || "",
    description: data.successDescription || "",
    stories: data.successStories || [],
  };

  const innovationData = {
    title: data.sectionTitle || "",
    description: data.sectionDescription || "",
    button: data.button || {},
  };

  const bannerImages =
    data.rotatingBannerImages
      ?.map((img) => img.url)
      .filter((url) => url !== undefined && url !== "") || [];

  return (
    <main>
      <HeroSection data={heroData} />
      <FeaturedSection data={featuredData} />
      <StoriesSection data={storiesData} />
      <InnovationSection data={innovationData} />
      <RotatingBanner images={bannerImages} />
      <ContactUsSection data={contactData} />
    </main>
  );
}
