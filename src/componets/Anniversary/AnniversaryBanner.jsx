import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import StarRatings from "react-star-ratings";
import { HERO } from "../../Constants/anniversaryConfig";
import { useAnniversary } from "../../Context/AnniversaryContext";
import MediaPlaceholder from "./MediaPlaceholder";

function AnniversaryBanner() {
  const navigate = useNavigate();
  const { startExperience } = useAnniversary();
  const [showVideo, setShowVideo] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const handlePlay = () => {
    startExperience();
    setShowVideo(true);
    setTimeout(() => navigate("/journey"), 800);
  };

  const bgStyle = showVideo
    ? {}
    : {
        backgroundImage: `linear-gradient(90deg, hsl(0deg 0% 7% / 91%) 0%, hsl(0deg 0% 0% / 0%) 35%, hsl(220deg 26% 44% / 0%) 100%), linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7))`,
      };

  return (
    <>
      <div
        style={bgStyle}
        className="h-[50rem] md:h-[55rem] 3xl:h-[63rem] bg-cover bg-center object-contain grid items-center relative overflow-hidden"
      >
        {showVideo ? (
          <div className="absolute inset-0 hero-video-wrap z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
              onError={() => setShowVideo(false)}
            >
              <source src={HERO.videoSrc} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="absolute inset-0 z-0">
            <MediaPlaceholder
              src={HERO.imageSrc}
              mediaHint="hero-backdrop.jpg"
              className="w-full h-full min-h-[50rem]"
              aspect="video"
            />
          </div>
        )}

        <div className="relative z-10 ml-2 mr-2 sm:mr-0 sm:ml-12 mt-[75%] sm:mt-52">
          <Fade bottom>
            <h1 className="text-white text-3xl font-semibold text-center mb-5 py-2 sm:text-left sm:text-5xl sm:border-l-8 pl-4 border-red-700 md:text-6xl lg:w-2/3 xl:w-1/2 sm:font-bold drop-shadow-lg romantic-glow-text">
              {HERO.title}
            </h1>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <div className="hidden sm:flex ml-2">
                <StarRatings
                  rating={5}
                  starRatedColor="#e50914"
                  numberOfStars={5}
                  starDimension="1.1rem"
                  starSpacing="0.2rem"
                />
              </div>
              <h1 className="hidden sm:flex text-white text-base font-bold drop-shadow-lg items-center">
                {HERO.date}
              </h1>
              <span className="hidden sm:flex text-white px-2 bg-[#1e1e1e89] border-2 border-stone-600 rounded ml-2 items-center">
                ♥ Special
              </span>
            </div>

            <p className="text-stone-300 text-sm sm:text-base mt-1 mb-3 text-center sm:text-left sm:ml-2">
              {HERO.subtitle}
            </p>

            <div className="mt-3 mb-4">
              <h2 className="text-white text-xl drop-shadow-xl text-center line-clamp-3 sm:line-clamp-none sm:text-left w-full md:w-4/5 lg:w-8/12 lg:text-xl xl:w-5/12 2xl:text-2xl">
                {HERO.overview}
              </h2>
            </div>

            <div className="flex justify-center sm:justify-start">
              <button
                onClick={handlePlay}
                className="bg-red-800 hover:bg-red-900 transition duration-500 ease-in-out shadow-2xl flex items-center mb-3 mr-3 text-base sm:text-xl font-semibold text-white py-2 sm:py-2 px-10 sm:px-14 rounded-md romantic-glow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
                Play
              </button>
              <button
                onClick={() => setInfoOpen(!infoOpen)}
                className="bg-[#33333380] flex items-center shadow-2xl mb-3 text-base sm:text-xl font-semibold text-white hover:bg-white hover:text-black transition duration-500 ease-in-out py-2 px-8 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 items-center mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                More Info
              </button>
            </div>
          </Fade>
        </div>

        <div
          style={{
            backgroundImage:
              "linear-gradient(hsl(0deg 0% 0% / 0%), hsl(0deg 0% 0% / 38%), hsl(0deg 0% 7%))",
          }}
          className="h-80 mt-auto relative z-10"
        />
      </div>

      {infoOpen && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none"
            onClick={() => setInfoOpen(false)}
          >
            <div
              className="relative w-auto my-6 mx-4 max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-neutral-900 outline-none p-6 romantic-glow">
                <button
                  className="absolute top-3 right-3 text-white hover:text-red-500"
                  onClick={() => setInfoOpen(false)}
                  type="button"
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold text-white mb-2">{HERO.title}</h3>
                <p className="text-stone-400 leading-relaxed">{HERO.overview}</p>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black" />
        </>
      )}
    </>
  );
}

export default AnniversaryBanner;
