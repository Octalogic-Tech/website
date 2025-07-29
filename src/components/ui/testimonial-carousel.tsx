import useEmblaCarousel from "embla-carousel-react";
import type { FC } from "react";

interface Testimonial {
  cardDescription: string;
  profileName: string;
  profilePosition: string;
  profileImage: {
    responsiveImage: {
      src: string;
      alt: string;
    };
  };
}

interface Props {
  testimonials: Testimonial[];
}

const TestimonialCarousel: FC<Props> = ({ testimonials }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden px-4 py-8" ref={emblaRef}>
      <div className="flex gap-6">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="max-w-sm min-w-[250px] flex-shrink-0 rounded-xl bg-white p-4 shadow-md"
          >
            <p className="mb-4 text-sm text-gray-700">“{item.cardDescription}”</p>
            <div className="mt-auto flex items-center gap-3">
              <img
                src={item.profileImage.responsiveImage.src}
                alt={item.profileImage.responsiveImage.alt}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{item.profileName}</p>
                <p className="text-xs text-gray-500">{item.profilePosition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
