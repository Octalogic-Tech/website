import { Typography } from "@/components/common/template";
import type { AboutSectionData } from "@/types/home";

interface StatProps {
  value: string;
  label: string;
}
function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-start">
      <Typography
        variant="H2SemiBold64"
        className="text-[40px] font-semibold text-[#0A3D62] sm:text-[56px] md:text-[64px]"
      >
        {value}
      </Typography>
      <Typography variant="CaptionLMedium14" className="text-[14px] text-[#0A3D62]">
        {label}
      </Typography>
    </div>
  );
}

interface AboutSectionProps {
  data?: AboutSectionData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="flex w-full justify-center px-4 py-16 md:px-8 md:py-36">
      <div className="flex max-w-[620px] flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-4 text-left">
          <Typography
            variant="H2Medium64"
            className="text-[32px] uppercase text-[#0A3D62] sm:text-[40px] md:text-[48px]"
          >
            {data?.title}
          </Typography>
          <Typography variant="BodyMMedium16" className="max-w-[620px] text-[#0A3D62]">
            {data?.description}
          </Typography>
        </div>
        <div className="flex gap-2 md:gap-20">
          {data?.stats.map((stat, index) => (
            <Stat key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
