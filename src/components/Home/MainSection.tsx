import { RotatingBanner } from "@/components/common/rotating-banner";
import AboutSection from "./AboutSection";
import CaseStudySection from "./CaseStudySection";
import BlogSection from "./BlogSection";
import PortfolioSection from "./PortfolioSection";
import OurServicesSection from "./OurServicesSection";
import JoinOurTeamSection from "../common/JoinOurTeamSection";
import ContactUsSection from "../common/ContactUsSection";
import HeroSection from "./HeroSection";
import { fetcher } from "@/lib/utils";
import { HOME_PAGE_QUERY } from "@/graphql/queries/home";
import useSWR from "swr";
import Loader from "../common/Loader";
import ErrorMessage from "../common/ErrorMessage";

export default function MainSection() {
  const { data, error, isLoading } = useSWR(HOME_PAGE_QUERY, fetcher);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage onRetry={() => window.location.reload()} />;
  }

  if (!data?.allHomepages?.[0]) {
    return <ErrorMessage message="No content available" />;
  }

  const homeData = data.allHomepages[0];

  const heroData = {
    heading: homeData.heroTitle,
    description: homeData.description,
    services: homeData.services,
    ctaButton: {
      text: homeData.button.buttonLabel,
      link: homeData.button.buttonUrl,
    },
  };

  const RotatingImages = homeData.clientLogos.map((logo: { url: string }) => logo.url);

  const aboutData = {
    title: homeData.aboutTitle,
    description: homeData.aboutDescription,
    stats: homeData.stats,
  };

  const portfolioData = {
    title: homeData.portfolioTitle,
    description: homeData.portfolioDescription,
    ctaButton: homeData.startAProjectButton,
    portfolioCarousel: homeData.portfolioCarousel,
  };

  const servicesData = {
    title: homeData.servicesTitle,
    description: homeData.servicesDescription,
    ctaButton: homeData.startAProjectButton2,
    sideImage: {
      url: homeData.sideImage.url,
      alt: homeData.sideImage.alt,
    },
    serviceCard: homeData.serviceCard,
  };

  const blogData = {
    title: homeData.blogsPageTitle,
    description: homeData.blogPageDescription,
    posts: homeData.blogCards.map((card: any) => ({
      image: {
        url: card.image.url,
        alt: card.image.alt,
      },
      date: card.date,
      title: card.title,
      description: card.description,
      button: card.button,
      tags: card.tags,
    })),
    buttons: {
      viewAll: homeData.viewAllButton.buttonLabel,
    },
  };

  return (
    <main>
      <HeroSection data={heroData} />
      <RotatingBanner images={RotatingImages} />
      <AboutSection data={aboutData} />
      <PortfolioSection data={portfolioData} />
      <CaseStudySection cards={homeData.caseStudyCards} />
      <OurServicesSection data={servicesData} />
      <BlogSection data={blogData} />
      <ContactUsSection />
      <JoinOurTeamSection />
    </main>
  );
}
