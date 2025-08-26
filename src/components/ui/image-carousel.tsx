import useEmblaCarousel from "embla-carousel-react";
import type { FC } from "react";

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
    <div className="mx-auto h-[280px] max-w-[1440px] overflow-hidden px-[96px]" ref={emblaRef}>
      <div className="flex gap-[24px]">
        {images.map((img, index) => (
          <div className="min-w-[188px] flex-shrink-0" key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className="h-[280px] w-[188px] rounded-[16px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
