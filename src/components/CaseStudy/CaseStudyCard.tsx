import { Button } from "../ui/button";
import { Typography } from "../common/template";
import { cn } from "@/lib/utils";
import type { CaseCardType } from "@/types/casestudy";

function CaseStudyCard({ className, ...data }: CaseCardType & { className?: string }) {
  const safeData = {
    logo: {
      url: data?.logo?.url ?? "",
      alt: data?.logo?.alt ?? "",
    },
    title: data?.title ?? "",
    description: data?.description ?? "",
    image: {
      url: data?.image?.url ?? "",
      alt: data?.image?.alt ?? "",
    },
    button: {
      buttonUrl: data?.button?.buttonUrl ?? "#",
      buttonLabel: data?.button?.buttonLabel ?? "View Case Study",
    },
  };

  return (
    <div
      className={cn(
        "flex w-full flex-col-reverse gap-2 rounded-2xl bg-white p-2 lg:max-w-[60vw] lg:flex-row",
        className,
      )}
    >
      <div className="flex w-full flex-col px-4 py-6 lg:w-1/2 lg:px-12 lg:py-12">
        <div className="flex items-center gap-2">
          <img src={safeData.logo.url} alt={safeData.logo.alt} className="h-8 w-auto" />
          <Typography
            variant="H4SemiBold40"
            className="text-2xl text-[#101828] sm:text-3xl lg:text-4xl"
          >
            {safeData.title}
          </Typography>
        </div>

        <div className="mt-4 flex flex-col gap-4 lg:mt-6">
          <Typography variant="CaptionMMedium14" className="text-[#475569]">
            {safeData.description}
          </Typography>

          <div className="mt-4 lg:mt-6">
            <Button
              variant="outline"
              className="w-full rounded-full border-2 border-[#0A3D62] p-6 py-7 lg:w-fit"
              asChild
            >
              <a href={safeData.button.buttonUrl}>
                <Typography variant="H6Regular24" className="uppercase text-[#0A3D62]">
                  {safeData.button.buttonLabel}
                </Typography>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-xl lg:h-auto lg:w-1/2">
        <img
          src={safeData.image.url}
          alt={safeData.image.alt}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
export default CaseStudyCard;
