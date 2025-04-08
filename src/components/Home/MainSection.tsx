import { RotatingBanner } from "@/components/common/rotating-banner";
import { heroSectionData, ourServicesSectionData } from "@/data/homeData";
import OurServicesSection from "./OurServicesSection";
import HeroSection from "./HeroSection";
import ContactUsSection from "../common/ContactUsSection";

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
      <OurServicesSection data={ourServicesSectionData} />
      <ContactUsSection />
    </main>
  );
}
