import HeroSection from "./HeroSection";
import type { ContactUsSectionProps } from "@/types/common";
import ContactUsSection from "../common/ContactUsSection";
import type { MainSectionProps } from "@/types/casestudy";
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
  const heroSectionData = {
    badge: data.sectionTag,
    title: data.heroTitle,
    description: data.heroDescription,
  };

  const featuredSectionData = {
    title: data.featuredTitle,
    description: data.featureDescription,
    cashCard: data.cashCard,
  };

  const storiesSectionData = {
    title: data.successTitle,
    description: data.successDescription,
    stories: data.successStories,
  };

  const innovationSectionData = {
    title: data.sectionTitle,
    description: data.sectionDescription,
    button: data.button,
  };

  const bannerImages = data.rotatingBannerImages?.map((img) => img.url) || [];

  return (
    <main>
      <HeroSection data={heroSectionData} />
      <FeaturedSection data={featuredSectionData} />
      <StoriesSection data={storiesSectionData} />
      <InnovationSection data={innovationSectionData} />
      <RotatingBanner images={bannerImages} />
      <ContactUsSection data={contactData} />
    </main>
  );
}
