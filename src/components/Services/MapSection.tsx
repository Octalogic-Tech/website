import { Typography } from "../common/template";
import type { MapSectionData } from "@/types/services";
import DatoCmsImage from "../common/DatoCmsImage";

interface MapSectionProps {
  data: MapSectionData;
}

const MapSection = ({ data }: MapSectionProps) => {
  return (
    <div className="flex min-h-[120vh] flex-col items-center justify-center bg-black px-4 text-white md:py-24">
      {data.mapImage.responsiveImage ? (
        <DatoCmsImage
          data={data.mapImage}
          className="mb-8 w-full md:max-w-[70vw]"
          objectFit="contain"
        />
      ) : (
        <img
          src={data.mapImage.url}
          alt={data.mapImage.alt}
          className="mb-8 w-full md:max-w-[70vw]"
        />
      )}

      <div className="flex w-full flex-col justify-between gap-6 md:max-w-[70vw] md:flex-row">
        <div className="flex-1 rounded-md bg-[#111] p-6 md:max-w-[25vw]">
          <Typography variant="H6Medium24" className="mb-2 uppercase">
            {data.title}
          </Typography>
          <Typography variant="BodyMRegular16" className="whitespace-pre-line text-gray-300">
            {data.description}
          </Typography>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-4 rounded-md bg-[#111] p-6 text-sm md:grid-cols-3 lg:grid-cols-4">
          {data.countries.map((country, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                {country?.countryFlag?.responsiveImage ? (
                  <DatoCmsImage
                    data={country.countryFlag}
                    className="h-4 w-5"
                    objectFit="contain"
                  />
                ) : (
                  <img
                    src={country?.countryFlag?.url}
                    alt={country?.countryFlag?.alt}
                    className="h-4 w-5 object-contain"
                  />
                )}
              </div>
              <Typography variant="CaptionMMedium14" className="whitespace-nowrap">
                {country.countryName}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapSection;
