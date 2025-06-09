import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Title from "../title";
import { bannerImg, bannerSmallImg } from "../../utils";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState(
    window.innerWidth > 1280 ? bannerImg : bannerSmallImg
  );

  useEffect(() => {
    const handleResize = () => {
      setImgSrc(window.innerWidth > 1280 ? bannerImg : bannerSmallImg);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.set([".banner-img", "#title", ".banner-text", ".banner-button"], { 
      opacity: 0 
    });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", // Start when the top of the section is at 50% of the viewport height
        toggleActions: "play none none none", 
      }
    });
    
    // Banner image animation
    tl.fromTo(
      "#banner-img", 
      { scale: 1.1, opacity: 0 }, 
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out" 
      }
    )
    
    // Title animation
    .fromTo(
      "#banner-title", 
      { y: 30, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        ease: "power3.out" 
      },
    )
    
    // Text animation
    .fromTo(
      "#banner-text", 
      { y: 20, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.2, 
        ease: "back.out(1.2)" 
      },
    )
    
    // Button animation
    .fromTo(
      "#banner-button", 
      { scale: 0.8, opacity: 0 }, 
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.5,
        ease: "elastic.out(1, 0.5)" 
      }
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-gray-50">
      <div className="flex flex-col w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-40">
        <div
          id="banner-title"
          className="flex flex-row justify-between max-md:flex-col max-md:items-start md:justify-between items-center mb-10"
        >
          <Title text="Take a closer look." />
        </div>

        <div className="relative w-full h-full flex flex-col">
          <div className="h-[700px] max-[2000px]:h-[600px] max-[1660px]:h-[500px] max-2xl:h-[450px] max-xl:h-[800px] max-lg:h-[700px] max-md:h-[600px] max-sm:h-[500px] welcome-video flex overflow-hidden">
            <img id="banner-img" src={imgSrc} alt="banner" className="w-full rounded-2xl object-cover" />
          </div>
          <div className="absolute flex flex-col items-center justify-center top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:left-1/4 xl:top-1/2">
            <div id="banner-text" className=" text-white text-3xl max-2xl:text-2xl max-md:text-xl max-sm:text-[18px] max-sm:text-center font-semibold">
              A Guided Tour of
            </div>
            <div id="banner-text" className=" text-white text-3xl max-2xl:text-2xl max-md:text-xl max-sm:text-[18px] max-sm:text-center font-semibold">
              iPhone 16 & iPhone 16 Pro
            </div>
            <button id="banner-button" className="px-5 py-3 rounded-full bg-white mt-5 text-black">Watch the film</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
