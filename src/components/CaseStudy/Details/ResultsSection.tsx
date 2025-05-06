import { Typography } from "@/components/common/template";
import type { ResultsSectionProps } from "@/types/caseStudyInner";
import DatoCmsImage from "@/components/common/DatoCmsImage";

const ResultsSection = ({ data }: ResultsSectionProps) => {
  return (
    <section className="pb-24">
      <div className="mx-auto w-full max-w-[600px] px-4">
        <div className="mb-8 mt-12">
          <div className="inline-block rounded bg-black px-4 py-3">
            <Typography variant="BodyMMedium16" className="uppercase tracking-widest text-white">
              {data.title}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Typography variant="BodyMMedium16" className="">
            {data.para1}
          </Typography>

          <div className="relative w-full overflow-hidden rounded">
            {data.image.responsiveImage ? (
              <DatoCmsImage data={data.image} className="h-full w-full object-cover" />
            ) : (
              <img
                src={data.image.url}
                alt={data.image.alt}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <Typography variant="BodyMMedium16" className="">
            {data.quote}
          </Typography>

          <Typography variant="BodyMMedium16" className="">
            {data.para2}
          </Typography>
        </div>

        <div className="border-b-2 border-dotted border-[#D6D6D6] py-8" />
      </div>
    </section>
  );
};

export default ResultsSection;
