import { Typography } from "../common/template";
import type { HowWeWorkSectionData, WorkCardProps } from "@/types/services";
import DatoCmsImage from "../common/DatoCmsImage";

interface HowWeWorkSectionProps {
  data: HowWeWorkSectionData;
}

const shouldCenterItem = (position: number): boolean => {
  return position % 3 === 1;
};

const WorkCardComponent = ({ customLogo, title, description, position }: WorkCardProps) => {
  const isCenter = shouldCenterItem(position);

  return (
    <div
      className={`flex w-full flex-col justify-between border-b border-[#E5E5E5] px-4 py-6 last:border-b-0 md:border-b md:border-r md:px-6 md:py-8 md:last:border-b md:last:border-r-0 ${
        isCenter ? "md:bg-[#F3FFFD]" : ""
      }`}
    >
      <div className="mb-6 flex w-full items-start">
        <div className="mr-4 h-16 w-16 flex-shrink-0 md:h-20 md:w-20">
          {customLogo.responsiveImage ? (
            <DatoCmsImage data={customLogo} className="h-full w-full" objectFit="contain" />
          ) : (
            <img
              src={customLogo.url}
              alt={customLogo.alt}
              className="h-full w-full object-contain"
            />
          )}
        </div>
        <Typography variant="H6Medium24" className="max-w-[30%] uppercase text-[#0A3D62]">
          {title}
        </Typography>
      </div>
      <div className="w-full">
        <Typography variant="BodyMRegular16" className="text-[#475569]">
          {description}
        </Typography>
      </div>
    </div>
  );
};

const HowWeWorkSection = ({ data }: HowWeWorkSectionProps) => {
  return (
    <section className="flex w-full flex-col items-center gap-8 px-4 py-16 md:gap-16 md:px-24 md:py-32">
      <Typography variant="H2Medium64" className="text-center uppercase text-[#0A3D62]">
        {data.title}
      </Typography>

      <div className="w-full overflow-hidden rounded-lg border border-[#E5E5E5]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {data.cards.map((card, index) => (
            <WorkCardComponent key={index} {...card} position={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
