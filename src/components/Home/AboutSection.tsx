import { Typography } from "@/components/common/template";
import type { AboutSectionData } from "@/types/home";

interface StatProps {
  statNumber: number;
  statDescription: string;
}
function Stat({ statNumber, statDescription }: StatProps) {
  return (
    <div className="flex flex-col items-start justify-start">
      <Typography variant="H2Medium64" className="font-semibold text-[#49A99A]">
        {statNumber}+
      </Typography>
      <Typography variant="CaptionLMedium14" className="text-[#737373]">
        {statDescription}
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
        <div className="flex w-full gap-2 md:gap-4">
          {data?.stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-1 items-center justify-center rounded-xl bg-white p-3 shadow-md sm:p-4 md:p-6"
            >
              <Stat statNumber={stat.statNumber} statDescription={stat.statDescription} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
