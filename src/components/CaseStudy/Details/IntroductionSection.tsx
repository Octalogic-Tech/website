import { Typography } from "@/components/common/template";
import type { IntroductionSectionProps } from "@/types/caseStudyInner";

const IntroductionSection = ({ data }: IntroductionSectionProps) => {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-[#141414] md:min-h-[90vh]">
      <div className="mx-auto w-full max-w-[600px] px-4">
        <div>
          <div className="inline-block rounded bg-[#FFFFFF1A] px-6 py-4">
            <Typography
              variant="BodyMMedium16"
              className="uppercase !tracking-wider text-[#60E3CF]"
            >
              {data.title}
            </Typography>
          </div>
        </div>
        <div className="mt-12">
          <Typography variant="H2Medium64" className="text-left tracking-tighter text-white">
            {data.description.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-[#737373]">{data.description.split(" ").slice(2).join(" ")}</span>
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
