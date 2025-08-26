import useEmblaCarousel from "embla-carousel-react";
import type { FC } from "react";
import { cn } from "@/lib/utils";
import { typographyVariants } from "@/components/ui/typography";

interface ResponsiveImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: ResponsiveImage[];
}

const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="bg-primary-blue-100 py-6">
      <div ref={emblaRef} className={cn("mx-auto max-w-[1440px]", "md:overflow-hidden md:px-6")}>
        <div
          className={cn(
            "scrollbar-none flex flex-nowrap gap-4 overflow-hidden",
            "md:flex-nowrap md:gap-6",
          )}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={cn(
                typographyVariants({
                  className: `h-[200px] w-[150px] flex-shrink-0 md:h-[280px] md:w-[188px] md:min-w-[188px]`,
                }),
              )}
            >
              <img src={img.src} alt={img.alt} className="h-full w-full rounded-2xl object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
