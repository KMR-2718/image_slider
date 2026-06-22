import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Parallax,
} from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80",
    title: "Nature Collection",
    subtitle:
      "Discover breathtaking landscapes and unforgettable journeys.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1920&q=80",
    title: "Mountain Escape",
    subtitle: "Adventure begins where the road ends.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80",
    title: "Ocean View",
    subtitle: "Experience the calm and beauty of the sea.",
  },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          Keyboard,
          Parallax,
        ]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        keyboard={{ enabled: true }}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1200}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="overflow-hidden lg:rounded-3xl shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[70vh] min-h-[500px] lg:h-[90vh] w-full">
              {/* Background */}
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                data-swiper-parallax="-300"
                className="absolute inset-0 h-full w-full object-cover animate-zoom"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
                  <div className="max-w-3xl">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
                    >
                      Premium Experience
                    </motion.span>

                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      data-swiper-parallax="-100"
                      className="text-white font-bold leading-tight
                                 text-[clamp(2.5rem,6vw,6rem)]"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="mt-6 max-w-2xl text-gray-200
                                 text-base sm:text-lg lg:text-xl"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-8 flex flex-col gap-4 sm:flex-row"
                    >
                      <button
                        aria-label="Explore Now"
                        className="
                          rounded-full
                          bg-white
                          px-8 py-4
                          font-semibold
                          text-black
                          shadow-lg
                          transition-all
                          duration-300
                          hover:scale-105
                          hover:shadow-2xl
                        "
                      >
                        Explore Now
                      </button>

                      <button
                        aria-label="Learn More"
                        className="
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          px-8 py-4
                          font-semibold
                          text-white
                          backdrop-blur-xl
                          transition-all
                          duration-300
                          hover:bg-white/20
                        "
                      >
                        Learn More
                      </button>
                    </motion.div>

                    {/* Stats */}
                    <div className="mt-12 flex flex-wrap gap-10">
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          250+
                        </h3>
                        <p className="text-gray-300">
                          Destinations
                        </p>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          50K+
                        </h3>
                        <p className="text-gray-300">
                          Travelers
                        </p>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          4.9★
                        </h3>
                        <p className="text-gray-300">
                          Rating
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white/10">
                <div
                  key={activeIndex}
                  className="h-full bg-white animate-progress"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <button className="custom-prev absolute left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20">
          ←
        </button>

        <button className="custom-next absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20">
          →
        </button>
      </Swiper>
    </section>
  );
}