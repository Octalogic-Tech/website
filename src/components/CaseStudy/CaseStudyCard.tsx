import { Button } from "../ui/button";
import { Typography } from "../common/template";
import { cn } from "@/lib/utils";
import DatoCmsImage from "../common/DatoCmsImage";
import type { CaseCardType } from "@/types/casestudy";

function CaseStudyCard({ className, ...data }: CaseCardType & { className?: string }) {
  const safeData = {
    logo: {
      url: data?.logo?.url ?? "",
      alt: data?.logo?.alt ?? "",
      responsiveImage: data?.logo?.responsiveImage,
    },
    title: data?.title ?? "",
    description: data?.description ?? "",
    image: {
      url: data?.image?.url ?? "",
      alt: data?.image?.alt ?? "",
      responsiveImage: data?.image?.responsiveImage,
    },
    slug: data?.slug ?? "",
    button: {
      buttonUrl: data?.button?.buttonUrl ?? "#",
      buttonLabel: data?.button?.buttonLabel ?? "View Case Study",
    },
  };

  const linkUrl = safeData.slug ? `/case-study/${safeData.slug}` : safeData.button.buttonUrl;

  return (
    <div
      className={cn(
        "flex w-full flex-col-reverse gap-2 rounded-2xl bg-white p-2 lg:max-w-[60vw] lg:flex-row",
        className,
      )}
    >
      <div className="flex w-full flex-col px-4 py-6 lg:w-1/2 lg:px-12 lg:py-12">
        <div className="flex items-center gap-2">
          <div className="h-auto w-auto flex-shrink-0">
            {safeData.logo.responsiveImage ? (
              <DatoCmsImage data={safeData.logo} className="h-auto w-auto" />
            ) : (
              <img
                src={safeData.logo.url}
                alt={safeData.logo.alt}
                className="h-8 w-auto object-contain"
              />
            )}
          </div>
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
              <a href={linkUrl}>
                <Typography variant="H6Regular24" className="uppercase text-[#0A3D62]">
                  {safeData.button.buttonLabel}
                </Typography>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-xl lg:h-auto lg:w-1/2">
        {safeData.image.responsiveImage ? (
          <DatoCmsImage data={safeData.image} className="h-full w-full" />
        ) : (
          <img
            src={safeData.image.url}
            alt={safeData.image.alt}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
export default CaseStudyCard;
