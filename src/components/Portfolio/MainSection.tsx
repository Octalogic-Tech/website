import type { MainSectionProps } from "@/types/portfolio";
import ContactUsSection from "../common/ContactUsSection";
import type { ContactUsSectionProps } from "@/types/common";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";

export default function MainSection({
  data,
  contactData,
}: {
  data: MainSectionProps["data"];
  contactData: ContactUsSectionProps["data"];
}) {
  const heroData = {
    sectionNameTag: data?.sectionNameTag,
    heroTitle: data?.heroTitle,
    heroDescription: data?.heroDescription,
    button: {
      buttonLabel: data?.button?.buttonLabel,
      buttonUrl: data?.button?.buttonUrl,
    },
  };

  const projectData = {
    clientsProject: data?.clientsProject || [],
  };

  return (
    <main>
      <HeroSection data={heroData} />
      <ProjectSection data={projectData} />
      <ContactUsSection data={contactData} />
    </main>
  );
}
