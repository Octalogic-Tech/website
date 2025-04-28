import DiscoverySection from "./DiscoverySection";
import HeroSection from "./HeroSection";
import type { ContactUsSectionProps } from "@/types/common";
import NotScopeSection from "./NotScope";
import ExpertiseSection from "./ExpertiesSection";
import HowWeWorkSection from "./HowWeWork";
import MapSection from "./MapSection";
import ContactUsSection from "../common/ContactUsSection";
import type { MainSectionProps } from "@/types/services";

export default function MainSection({
  data,
  contactData,
}: {
  data: MainSectionProps["data"];
  contactData: ContactUsSectionProps["data"];
}) {
  const heroData = {
    sectionNameTag: data.sectionNameTag,
    heroTitle: data.heroTitle,
    heroDescription: data.heroDescription,
    workWithUs: data.workWithUs,
  };

  const processData = {
    navigationMenu: data.stepsNavigationMenu,
    processCards: data.processCard,
    navigation: {
      next: data.nextButton,
      previous: data.previousButton,
    },
  };

  const notscopeData = {
    title: data.valuePropositionTitle,
    cards: data.valueCards,
  };

  const expertiseData = {
    title: data.expertiseTitle,
    features: data.navigationFeatures,
  };

  const howWeWorkData = {
    title: data.title,
    cards: data.howWeWorkCards,
  };

  const mapData = {
    title: data.collaborationTitle,
    description: data.collaborationDescription,
    mapImage: data.worldMap,
    countries: data.countries,
  };

  return (
    <main>
      <HeroSection data={heroData} />
      <DiscoverySection data={processData} />
      <NotScopeSection data={notscopeData} />
      <ExpertiseSection data={expertiseData} />
      <HowWeWorkSection data={howWeWorkData} />
      <MapSection data={mapData} />
      <ContactUsSection data={contactData} />
    </main>
  );
}
