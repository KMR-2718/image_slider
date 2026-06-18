import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Nature Collection",
    subtitle: "Discover breathtaking landscapes and unforgettable journeys.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    title: "Mountain Escape",
    subtitle: "Adventure begins where the road ends.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Ocean View",
    subtitle: "Experience the calm and beauty of the sea.",
  },
];

export default function ImageSlider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        speed={1000}
        className="rounded-none lg:rounded-3xl overflow-hidden shadow-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[60vh] min-h-[450px] sm:h-[70vh] lg:h-[85vh] w-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
                  <div className="max-w-3xl text-center lg:text-left">
                    <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-md">
                      Premium Experience
                    </span>

                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>

                    <p className="mt-5 max-w-2xl text-sm text-gray-200 sm:text-lg lg:text-xl">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                      <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                        Explore Now
                      </button>

                      <button className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}