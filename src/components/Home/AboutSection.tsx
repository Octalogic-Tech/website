import { Typography } from "@/components/common/template";
import type { AboutSectionData } from "@/types/home";

interface StatProps {
  value: string;
  label: string;
}
function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <Typography variant="H1SemiBold80" className="font-semibold text-[#49A99A]">
        {value}
      </Typography>
      <Typography variant="CaptionLMedium14" className="text-[#737373]">
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
    <section className="flex min-h-[90vh] w-full items-center justify-center bg-gradient-to-b from-[#FFFFFF] to-[#DBEAFE] p-4 md:p-8">
      <div className="flex w-full max-w-[40rem] flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-8">
          <Typography
            variant="H2Medium64"
            className="bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text uppercase text-transparent"
          >
            {data?.title}
          </Typography>
          <Typography variant="BodyMMedium16" className="w-full text-[#737373]">
            {data?.description}
          </Typography>
        </div>
        <div className="flex w-full justify-between">
          {data?.stats.map((stat, index) => (
            <div
              key={index}
              className="flex h-[15vh] w-[12vw] items-center justify-center rounded-xl bg-white p-6 shadow-sm"
            >
              <Stat value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
