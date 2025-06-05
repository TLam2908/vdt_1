import { Pause, Play } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { heroVidSrc, heroVidSmallSrc } from "../../utils";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 1024 ? heroVidSmallSrc : heroVidSrc
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 1024) {
      setVideoSrc(heroVidSmallSrc);
    } else {
      setVideoSrc(heroVidSrc);
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // banner animation
      tl.fromTo(
        "#banner",
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      )

        // title animation
        .fromTo(
          "#hero-title, #hero-subtitle",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.out",
          },
          "<"
        )

        .to(
          "#welcomeVideo",
          {
            opacity: 1,
            y: -20,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "<"
        );
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    handleVideoSrc();
    window.addEventListener("resize", handleVideoSrc);
    return () => window.removeEventListener("resize", handleVideoSrc);
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <section ref={sectionRef}>
      <div id="banner" className="bg-[#f5f5f7] text-center py-2 text-sm">
        <p>
          Monthly payments made easy. Includes 0% interest options.{" "}
          <a href="#" className="text-blue-500 hover:underline transition-all">
            Learn more &gt;
          </a>
        </p>
      </div>

      <div className="w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-20">
        <div className="flex max-md:flex-col justify-between items-center max-md:items-start">
          <h1
            id="hero-title"
            className="text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-semibold"
          >
            iPhone
          </h1>
          <p
            id="hero-subtitle"
            className="text-2xl max-xl:text-xl max-md:text-lg mt-2 font-semibold"
          >
            Designed for everyone to love.
          </p>
        </div>
      </div>

      <div
        id="welcomeVideo"
        className="w-10/12 flex justify-center mx-auto opacity-0"
      >
        <div
          className={`
            h-[1000px] flex mx-auto overflow-hidden relative welcome-video max-md:h-[800px] rounded-lg shadow-xl
          `}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <button
            onClick={togglePlayPause}
            className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-md p-2.5 rounded-full hover:bg-black/50 transition-all duration-300 shadow-lg hover:scale-110"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-white" />
            ) : (
              <Play className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
