import { Typography } from "../common/template";
import type { NotScopeSectionData } from "@/types/services";

interface NotScopeSectionProps {
  data: NotScopeSectionData;
}

export default function NotScopeSection({ data }: NotScopeSectionProps) {
  return (
    <section className="flex min-h-[80vh] w-full flex-col items-center justify-center bg-black px-4 py-16 text-white md:px-32 md:py-8">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="flex items-center justify-start rounded-2xl bg-[#1A1A1A] p-8 md:col-span-3">
            <Typography variant="H2SemiBold64" className="max-w-[500px] uppercase">
              {data.title.split(",").map((part, index) =>
                index === 1 ? (
                  <span key={index}>
                    ,<span className="text-[#60E3CF]">{part}</span>
                  </span>
                ) : (
                  part
                ),
              )}
            </Typography>
          </div>
          <div className="rounded-2xl bg-[#1A1A1A] p-8">
            <Typography variant="H6Medium24" className="mb-6 text-xl font-semibold uppercase">
              {data.mainBox.title}
            </Typography>
            <Typography variant="CaptionMMedium14" className="text-gray-300">
              {data.mainBox.description}
            </Typography>
          </div>
        </div>

        {/* Card Grid Section */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.boxes.map((box, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between rounded-2xl bg-[#1A1A1A] p-6"
            >
              <Typography variant="H6Medium24" className="text-lg font-semibold uppercase">
                {box.title}
              </Typography>
              <Typography variant="CaptionMMedium14" className="mt-2 text-sm text-gray-300">
                {box.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
