// import ContactUsSection from "../common/ContactUsSection";
import HeroSection from "../Services/HeroSection";
import DiscoverySection from "./DiscoverySection";
import ExpertiseSection from "./ExpertiesSection";
import HowWeWorkSection from "./HowWeWork";
// import TechnologySection from "./TechnologySection";
import { servicesData } from "@/data/servicesData";
import NotScopeSection from "./NotScope";
import MapSection from "./MapSection";

export default function MainSection() {
  return (
    <main>
      <HeroSection data={servicesData.servicesSection} />
      <DiscoverySection data={servicesData.discoverySection} />
      <NotScopeSection data={servicesData.notScopeSection} />
      {/* <TechnologySection data={servicesData.technologySection} /> */}
      <ExpertiseSection data={servicesData.expertiseSection} />
      <HowWeWorkSection data={servicesData.howWeWorkSection} />
      <MapSection data={servicesData.mapData} />
      {/* <ContactUsSection /> */}
    </main>
  );
}
