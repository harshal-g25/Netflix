import React from "react";
import { Fade } from "react-reveal";
import Footer from "../componets/Footer/Footer";
import FloatingHearts from "../componets/Anniversary/FloatingHearts";
import MediaPlaceholder from "../componets/Anniversary/MediaPlaceholder";
import TypingText from "../componets/Anniversary/TypingText";
import {
  journeyTimeline,
  journeySlideshow,
  typingLines,
} from "../Constants/anniversaryData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Journey() {
  return (
    <div className="bg-[#111] min-h-screen pb-28 relative">
      <FloatingHearts count={10} />

      <section className="pt-24 px-4 sm:px-12 max-w-6xl mx-auto fade-in-cinematic">
        <Fade bottom>
          <h1 className="text-4xl sm:text-5xl font-bold text-white border-l-8 border-red-700 pl-4 romantic-glow-text mb-2">
            Our Journey
          </h1>
          <p className="text-stone-400 text-lg mb-12 ml-1">
            Scene by scene — the story of us
          </p>
        </Fade>

        <div className="mb-16 rounded-lg overflow-hidden romantic-glow">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="rounded-lg"
          >
            {journeySlideshow.map((slide) => (
              <SwiperSlide key={slide.id} className="relative">
                <MediaPlaceholder
                  src={`/media/${slide.mediaHint}`}
                  mediaHint={slide.mediaHint}
                  className="min-h-[280px] sm:min-h-[400px]"
                />
                <p className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-lg z-10">
                  {slide.caption}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="my-20">
          <TypingText lines={typingLines} />
        </div>

        <div className="space-y-12 mb-20">
          {journeyTimeline.map((chapter, index) => (
            <Fade key={chapter.id} bottom delay={index * 100}>
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 items-center glass-panel rounded-xl p-6 romantic-glow`}
              >
                <div className="lg:w-1/2 w-full space-y-3">
                  <MediaPlaceholder
                    src={`/media/${chapter.mediaHint}`}
                    mediaHint={chapter.mediaHint}
                    className="rounded-lg min-h-[200px]"
                  />
                  {chapter.mediaHint2 && (
                    <MediaPlaceholder
                      src={`/media/${chapter.mediaHint2}`}
                      mediaHint={chapter.mediaHint2}
                      className="rounded-lg min-h-[200px]"
                    />
                  )}
                </div>
                <div className="lg:w-1/2">
                  <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                    {chapter.date}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                    {chapter.title}
                  </h2>
                  <p className="text-stone-400 text-lg leading-relaxed">{chapter.text}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Journey;
