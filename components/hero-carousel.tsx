"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export function HeroCarousel({
  slides,
}: {
  slides: { src: string; alt: string; caption: string }[];
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative min-w-full h-[300px] md:h-[450px] flex-shrink-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
