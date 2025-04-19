import type { ContactUsSectionProps, JoinOurTeamSectionProps } from "@/types/common";
import ContactUsSection from "../common/ContactUsSection";
import JoinOurTeamSection from "../common/JoinOurTeamSection";
import AboutImageCarousel from "./AboutImageCarousel";
import AboutTeamImage from "./AboutTeamImage";
import AboutTestimonials from "./AboutTestimonials";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import PurposeSection from "./PurposeSection";
import type {
  AboutHeroSectionData,
  CarouselImage,
  MissionSectionData,
  TestimonialsData,
  BannerImage,
  PurposeSectionData,
  MainSectionProps,
} from "@/types/about";

export default function MainSection({
  data,
  contactData,
  joinUsData,
}: {
  data: MainSectionProps["data"];
  contactData: ContactUsSectionProps["data"];
  joinUsData: JoinOurTeamSectionProps["data"];
}) {
  const heroData: AboutHeroSectionData = {
    badge: data?.sectionTag || "",
    title: data?.heroTitle || "",
    description: data?.heroDescription || "",
    ctaButton: {
      buttonLabel: data?.workWithUsButton?.buttonLabel || "",
      buttonUrl: data?.workWithUsButton?.buttonUrl || "",
    },
  };

  const carouselImages: CarouselImage[] = data?.imageCarousel || [];

  const missionData: MissionSectionData = {
    title: data?.missionTitle || "",
    description: data?.missionDescription || "",
  };

  const testimonialData: TestimonialsData = {
    testimonials: data?.testimonial || [],
  };

  const bannerImage: BannerImage = data?.banner || { url: "", alt: "" };

  const purposeData: PurposeSectionData = {
    heading: data?.purposeTitle || "",
    description: data?.purposeDescription || "",
    cards: data?.purposeCards || [],
  };

  return (
    <main>
      <HeroSection data={heroData} />
      <AboutImageCarousel data={carouselImages} />
      <MissionSection data={missionData} />
      <AboutTestimonials data={testimonialData} />
      <AboutTeamImage data={bannerImage} />
      <PurposeSection data={purposeData} />
      <ContactUsSection data={contactData} />
      <JoinOurTeamSection data={joinUsData} />
    </main>
  );
}
