import { Typography } from "@/components/common/template";
import type { ChallengeSectionProps } from "@/types/caseStudyInner";
import DatoCmsImage from "@/components/common/DatoCmsImage";

const ChallengeSection = ({ data }: ChallengeSectionProps) => {
  return (
    <section className="py-0">
      <div className="mx-auto w-full max-w-[600px] px-4">
        <div className="border-b-2 border-dotted border-[#D6D6D6] py-8 md:py-12" />

        <div className="mb-8 mt-12 md:mt-16">
          <div className="inline-block rounded bg-black px-4 py-3">
            <Typography variant="BodyMMedium16" className="uppercase tracking-widest text-white">
              {data.header || data.title}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Typography variant="BodyMMedium16" className="">
            {data.description}
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
            {data.listTitle}
          </Typography>

          <ol className="list-decimal pl-6">
            {data.list.map((item, index) => (
              <li key={index}>
                <Typography variant="BodyMMedium16">{item}</Typography>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
