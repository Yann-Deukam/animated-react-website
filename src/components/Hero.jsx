import React, { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upComingVideo = (currentIndex % totalVideos) + 1;
  const handleMinivideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upComingVideo);
  };

  const getVideoSource = (index) => `videos/hero-${index}.mp4`;

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVideoRef.current.play();
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-indigo-600"
        id="video-frame"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMinivideoClick}
              className="origin-center scale-90 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 "
            >
              <video
                ref={nextVideoRef}
                src={getVideoSource(upComingVideo)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSource(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSource(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="hero-heading Marketing absolute bottom-5 right-5 z-40 text-yellow-400">
          AGENCY
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="hero-heading text-yellow-400">MARKeting</h1>
            <p className="mb-5 max-w-64 text-gray-50">
              We are a full-service marketing agency that creates magic
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-neutral-900 flex-center gap-1 text-white"
            />
          </div>
        </div>
      </div>
      <h1 className="hero-heading Marketing absolute bottom-5 right-5 text-white">
        AGENCY
      </h1>
    </div>
  );
};

export default Hero;
