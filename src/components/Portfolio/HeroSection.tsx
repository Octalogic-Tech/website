import { Typography } from "../common/template";
import { Button } from "../ui/button";
import type { PortfolioHeroSection } from "@/types/portfolio";

interface HeroSectionProps {
  data: PortfolioHeroSection;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section className="bg-gradient-to-b from-[#DBEAFE] to-[#FFFFFF]">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-12 px-4 py-28 text-center md:gap-16 md:px-16 md:py-40">
        <Typography
          variant="CaptionLMedium14"
          className="rounded-full border-2 border-dashed border-[#D6D6D6] bg-[#fff] px-6 py-3 uppercase tracking-[7px] text-[#0A3D62] transition-all duration-300 lg:text-[14px]/[20px]"
        >
          {data.sectionNameTag}
        </Typography>

        <div className="flex max-w-[800px] flex-col items-center gap-8">
          <div>
            <Typography
              variant="H1SemiBold80"
              className="bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text uppercase tracking-tighter text-transparent"
            >
              {data.heroTitle}
            </Typography>
          </div>
          <div className="w-full max-w-[600px]">
            <Typography variant="BodyLMedium20" className="text-[#737373]">
              {data.heroDescription}
            </Typography>
          </div>
        </div>

        <div>
          <Button variant="primary" className="rounded-full p-7" asChild>
            <a href={data.button.buttonUrl}>
              <Typography
                variant="H6Regular24"
                className="uppercase tracking-tighter text-[#0A3D62]"
              >
                {data.button.buttonLabel}
              </Typography>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
