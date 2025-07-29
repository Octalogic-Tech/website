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
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((img, index) => (
          <div className="min-w-[200px] px-2" key={index}>
            <img src={img.src} alt={img.alt} className="h-40 w-full rounded-lg object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
