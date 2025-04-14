import { Typography } from "@/components/common/template";
import type { AboutSectionData } from "@/types/home";

interface StatProps {
  value: string;
  label: string;
}
function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-start">
      <Typography variant="H1SemiBold80" className="font-semibold text-[#0A3D62]">
        {value}
      </Typography>
      <Typography variant="CaptionLMedium14" className="text-[#0A3D62]">
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
    <section className="flex min-h-[90vh] w-full items-center justify-center p-4 md:p-8">
      <div className="flex w-full max-w-[40rem] flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-8">
          <Typography variant="H2Medium64" className="uppercase text-[#0A3D62]">
            {data?.title}
          </Typography>
          <Typography variant="BodyMMedium16" className="w-full text-[#0A3D62]">
            {data?.description}
          </Typography>
        </div>
        <div className="flex w-full justify-between">
          {data?.stats.map((stat, index) => (
            <Stat key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
