import ContactUsSection from "../common/ContactUsSection";
import JoinOurTeamSection from "../common/JoinOurTeamSection";
import AboutImageCarousel from "./AboutImageCarousel";
import AboutTeamImage from "./AboutTeamImage";
import AboutTestimonials from "./AboutTestimonials";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import PurposeSection from "./PurposeSection";
import {
  aboutCarouselImages,
  aboutHeroSectionData,
  missionSectionData,
  testimonialsData,
  teamImageData,
  purposeSectionData,
} from "@/data/aboutData";

export default function MainSection() {
  return (
    <main>
      <HeroSection data={aboutHeroSectionData} />
      <AboutImageCarousel data={aboutCarouselImages} />
      <MissionSection data={missionSectionData} />
      <AboutTestimonials data={testimonialsData} />
      <AboutTeamImage data={teamImageData} />
      <PurposeSection data={purposeSectionData} />
      <ContactUsSection />
      <JoinOurTeamSection />
    </main>
  );
}
