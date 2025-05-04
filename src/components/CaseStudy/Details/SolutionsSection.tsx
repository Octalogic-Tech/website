import { Typography } from "@/components/common/template";
import type { SolutionsSectionProps, StatProps } from "@/types/caseStudyInner";

const Stat = ({ value, description }: StatProps) => (
  <div className="flex flex-col items-start gap-2 rounded border-2 border-dotted border-[#60E3CF] bg-[#F3FFFD] p-6">
    <Typography variant="H2Medium64" className="text-[#0A3D62]">
      {value}
    </Typography>
    <Typography variant="CaptionMMedium14" className="text-[#0A3D62]">
      {description}
    </Typography>
  </div>
);

const SolutionsSection = ({ data }: SolutionsSectionProps) => {
  return (
    <section className="py-0">
      <div className="mx-auto w-full max-w-[600px] px-4">
        <div className="border-b-2 border-dotted border-[#D6D6D6] py-8 md:py-12" />

        <div className="mb-8 mt-12">
          <div className="inline-block rounded bg-black px-4 py-3">
            <Typography variant="BodyMMedium16" className="uppercase tracking-widest text-white">
              {data.title}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Typography variant="H6Bold24" className="uppercase">
            {data.heading1}
          </Typography>

          <Typography variant="BodyMMedium16">{data.para1}</Typography>

          <div className="relative w-full overflow-hidden rounded">
            <img src={data.image.url} alt={data.image.alt} className="h-full w-full object-cover" />
          </div>

          <Typography variant="H6Bold24" className="uppercase">
            {data.heading2}
          </Typography>

          <Typography variant="BodyMMedium16">{data.para2}</Typography>

          <div className="relative w-full overflow-hidden rounded">
            <img
              src={data.image2.url}
              alt={data.image2.alt}
              className="h-full w-full object-cover"
            />
          </div>

          <Typography variant="BodyMMedium16">{data.para3}</Typography>

          <div className="relative w-full overflow-hidden rounded">
            <img
              src={data.image3.url}
              alt={data.image3.alt}
              className="h-full w-full object-cover"
            />
          </div>

          <Typography variant="BodyMMedium16">{data.para4}</Typography>

          <div className="relative w-full overflow-hidden rounded">
            <img
              src={data.image4.url}
              alt={data.image4.alt}
              className="h-full w-full object-cover"
            />
          </div>

          <Typography variant="BodyMMedium16">{data.para5}</Typography>

          <Typography variant="BodyMMedium16">{data.quote}</Typography>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {data.statBlock.map((stat, index) => (
              <Stat
                key={index}
                value={`${stat.statNumber}${index === 0 ? "%" : index === 1 ? "%" : "S"}`}
                description={stat.statDescription}
              />
            ))}
          </div>
        </div>
        <div className="border-b-2 border-dotted border-[#D6D6D6] py-8" />
      </div>
    </section>
  );
};

export default SolutionsSection;
