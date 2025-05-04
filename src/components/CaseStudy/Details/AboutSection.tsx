import { Typography } from "@/components/common/template";
import type { AboutSectionProps, StatProps } from "@/types/caseStudyInner";

const Stat = ({ value, description }: StatProps) => (
  <div className="flex flex-col items-start gap-2 rounded border-2 border-dotted border-[#60E3CF] bg-[#F3FFFD] p-6">
    <Typography variant="H2Medium64" className="text-[#0A3D62]">
      {value}
    </Typography>
    <Typography variant="CaptionMMedium14">{description}</Typography>
  </div>
);

const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <section className="pt-24">
      <div className="mx-auto w-full max-w-[600px] px-4">
        <div className="mb-8">
          <div className="inline-block rounded bg-black px-4 py-3">
            <Typography variant="BodyMMedium16" className="uppercase tracking-widest text-white">
              {data.title}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Typography variant="BodyMMedium16">{data.description1}</Typography>

          <Typography variant="BodyMMedium16" className="text-[#0A3D62]">
            {data.quote}
          </Typography>

          <Typography variant="BodyMMedium16">{data.description2}</Typography>

          {data.statTitle && <Typography variant="BodyMMedium16">{data.statTitle}</Typography>}

          {data.statBlock && data.statBlock.length > 0 && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {data.statBlock.map((stat, index) => (
                <Stat
                  key={index}
                  value={`${stat.statNumber}${index === 0 ? "K+" : index === 1 ? "-60" : "+"}`}
                  description={stat.statDescription}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
