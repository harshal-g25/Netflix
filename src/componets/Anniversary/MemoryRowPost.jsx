import React, { useState } from "react";
import { Fade } from "react-reveal";
import StarRatings from "react-star-ratings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import MediaPlaceholder from "./MediaPlaceholder";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../RowPost/RowPostStyles.scss";

const customSettings = {
  breakpoints: {
    1800: { slidesPerView: 6.1, slidesPerGroup: 5 },
    1690: { slidesPerView: 5.5, slidesPerGroup: 5 },
    1536: { slidesPerView: 5, slidesPerGroup: 5 },
    1280: { slidesPerView: 4.3, slidesPerGroup: 4 },
    768: { slidesPerView: 3.3, slidesPerGroup: 3 },
    625: { slidesPerView: 3.1, slidesPerGroup: 3 },
    330: { slidesPerView: 2.1, slidesPerGroup: 2 },
    0: { slidesPerView: 2, slidesPerGroup: 2 },
  },
};

function MemoryRowPost({ title, items, first, islarge }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (item) => {
    setSelected(item);
    setShowModal(true);
  };

  if (!items?.length) return null;

  return (
    <div
      className="ml-2 lg:ml-11 mb-11 lg:mb-4 RowContainer"
      style={{ marginTop: first ? "-8rem" : undefined }}
    >
      <h1 className="text-white pb-4 xl:pb-0 font-normal text-base sm:text-2xl md:text-4xl">
        {title}
      </h1>

      <Swiper
        {...customSettings}
        modules={[Navigation, Pagination]}
        spaceBetween={8}
        slidesPerView={6.1}
        navigation
        pagination={{ clickable: true }}
        className="SwiperStyle"
      >
        {items.map((obj) => (
          <SwiperSlide
            key={obj.id}
            className={islarge ? "large" : "bg-cover"}
            onClick={() => openModal(obj)}
          >
            <div className="rounded-sm overflow-hidden cursor-pointer">
              <MediaPlaceholder
                src={`/media/${obj.mediaHint}`}
                mediaHint={obj.mediaHint}
                alt={obj.title}
                aspect={islarge ? "poster" : "video"}
                className={islarge ? "min-h-[280px]" : "min-h-[140px]"}
              />
            </div>
            <div className="content pt-16">
              <Fade bottom duration={300}>
                <div className="flex transition ml-3 ease-in-out delay-150">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/journey");
                    }}
                    className="text-white w-9 h-9 border-[2px] rounded-full p-2 mr-1 backdrop-blur-[2px] shadow-md ease-linear transition-all duration-150 hover:text-black hover:bg-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/letters");
                    }}
                    className="text-white w-9 h-9 border-[2px] rounded-full p-2 mr-1 backdrop-blur-[1px] shadow-md ease-linear transition-all duration-150 hover:text-black hover:bg-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-white ml-4 font-medium w-4/5 xl:line-clamp-1">
                  {obj.title}
                </h1>
                <h1 className="text-white text-xs font-semibold ml-4 w-11/12">
                  {obj.release_date}
                </h1>
                <div className="ml-4">
                  <StarRatings
                    rating={5}
                    starRatedColor="#e50914"
                    numberOfStars={5}
                    starDimension="0.8rem"
                    starSpacing="0.2rem"
                  />
                </div>
                <span className="hidden text-pink-200/80 ml-4 font-thin text-xs lg:inline">
                  Romance · Memory
                </span>
              </Fade>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showModal && selected && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mt-24 sm:my-6 mx-4 max-w-3xl">
              <Fade bottom duration={500}>
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-800 outline-none romantic-glow">
                  <button
                    type="button"
                    className="group p-1 ml-2 mt-2 backdrop-blur-[20px] bg-transparent border-2 border-white hover:bg-white hover:text-black fixed right-4 rounded-full cursor-pointer z-10"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="text-white w-6 h-6 group-hover:text-black"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <MediaPlaceholder
                    src={`/media/${selected.mediaHint}`}
                    mediaHint={selected.mediaHint}
                    aspect="video"
                    className="rounded-t-lg"
                  />
                  <div className="p-5">
                    <h3 className="text-3xl font-semibold text-white">
                      {selected.title}
                    </h3>
                    <p className="text-green-600 font-bold mt-2">{selected.release_date}</p>
                    <p className="my-4 text-neutral-400 text-lg leading-relaxed">
                      {selected.overview}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black" />
        </>
      )}
    </div>
  );
}

export default MemoryRowPost;
