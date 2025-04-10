import { Button } from "@/components/ui/button";
import { Typography } from "../common/template";
import type { HeroSectionData } from "@/types/home";

interface HeroSectionProps {
  data?: HeroSectionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center gap-8 bg-[#F3FFFD] py-[10vh] md:py-0">
      <div className="flex flex-col items-center gap-8 px-4 md:px-8">
        <Typography variant="H1SemiBold80" className="mx-auto text-center uppercase text-[#0A3D62]">
          {data?.heading}
        </Typography>
        <Typography
          variant="BodyLMedium20"
          className="mx-auto w-full text-center text-[#0A3D62] md:max-w-[720px]"
        >
          {data?.description}
        </Typography>
      </div>
      <div className="max-w-[85%] flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-6 rounded-lg bg-[#E5F8FF] p-6 md:flex-row md:items-center md:justify-between">
          {data?.services?.map((service: string) => (
            <div key={service} className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#60E3CF]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                    stroke="#0A3D62"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Typography variant="H6Bold24" className="uppercase tracking-tighter text-[#0A3D62]">
                {service}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button variant="darkblue" className="h-auto rounded-xl uppercase" asChild>
          <a href={data?.ctaButton?.link}>{data?.ctaButton?.text}</a>
        </Button>
      </div>
    </section>
  );
}
