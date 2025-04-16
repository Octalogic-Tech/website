import { Button } from "@/components/ui/button";
import { Typography } from "../common/template";
import type { HeroSectionData } from "@/types/home";

interface HeroSectionProps {
  data?: HeroSectionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center gap-12 bg-gradient-to-b from-[#DBEAFE] to-[#FFFFFF] py-[10vh] md:py-0">
      <div className="flex flex-col items-center gap-8 px-4 md:px-8">
        <Typography
          variant="H1SemiBold80"
          className="mx-auto bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text text-center uppercase text-transparent md:max-w-[60%]"
        >
          {data?.heading}
        </Typography>
        <Typography
          variant="BodyLMedium20"
          className="mx-auto w-full text-center text-[#0A3D62] md:max-w-[720px]"
        >
          {data?.description}
        </Typography>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-wrap px-6 md:items-center md:justify-between">
          {data?.services?.map((service: string, index) => (
            <div key={service} className="flex items-center">
              <Typography
                variant="H6SemiBold24"
                className="uppercase tracking-tighter text-[#0A3D62]"
              >
                {service}
              </Typography>
              {index !== (data?.services?.length ?? 0) - 1 && (
                <span className="mx-4 text-2xl font-bold text-[#60E3CF] md:mx-8">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button variant="primary" className="rounded-3xl p-6" asChild>
          <a href={data?.ctaButton?.link}>
            <Typography variant="H6Regular24" className="uppercase tracking-tighter text-[#0A3D62]">
              {data?.ctaButton?.text}
            </Typography>
          </a>
        </Button>
      </div>
    </section>
  );
}
