import Title from "../title";
import {
  assessoryImg1,
  assessoryImg1Small,
  assessoryImg2,
  assessoryImg2Small,
} from "../../utils";

import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Assessory = () => {
  const [imgSrc1, setImgSrc1] = useState(
    window.innerWidth > 1280 ? assessoryImg1 : assessoryImg1Small
  );
  const [imgSrc2, setImgSrc2] = useState(
    window.innerWidth > 1280 ? assessoryImg2 : assessoryImg2Small
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setImgSrc1(window.innerWidth > 1280 ? assessoryImg1 : assessoryImg1Small);
      setImgSrc2(window.innerWidth > 1280 ? assessoryImg2 : assessoryImg2Small);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      gsap.set([".accessory-img", "#title", ".banner-text", ".banner-button"], {
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%", // Start when the top of the section is at 50% of the viewport height
          toggleActions: "play none none none",
        },
      });

      // Banner image animation
      tl.fromTo(
        ".accessory-img",
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        }
      )

        // Title animation
        .fromTo(
          "#title",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8" // Overlap with the image animation
        )

        // Text animation
        .fromTo(
          ".banner-text",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.2)",
          },
          "-=0.5"
        )

    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full bg-white">
      <div className="flex flex-col w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-40">
        <div
          id="title"
          className="flex flex-row justify-between max-md:flex-col max-md:items-start md:justify-between items-center mb-10"
        >
          <Title text="iPhone essentials." />
          <a
            href="#"
            className="text-blue-500 text-md hover:underline transition-all mb-10"
          >
            All iPhone accessories &gt;
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className=" flex flex-col justify-between bg-[#f5f5f7] rounded-3xl overflow-hidden welcome-video">
            <div className="flex flex-col items-center text-center py-16">
              <div className="text-3xl font-semibold pb-5 banner-text">
                iPhone accessories
              </div>
              <div className="banner-text">Explore colorful cases, USB‑C power adapters,</div>
              <div className="banner-text">MagSafe accessories, and more.</div>
            </div>
            <img
              src={imgSrc1}
              alt="Assessory 1"
              className="w-full h-auto md:h-[350px] lg:h-[400px] xl:h-[500px] object-cover accessory-img"
            />
          </div>
          <div className=" flex flex-col justify-between bg-[#f5f5f7] rounded-3xl overflow-hidden welcome-video">
            <div className="flex flex-col items-center text-center py-16">
              <div className="text-3xl font-semibold pb-5 banner-text">AirTag</div>
              <div className="banner-text">Attach one to your keys. Put another in your</div>
              <div className="banner-text">
                backpack. If they’re misplaced, just use the Find My app.
              </div>
            </div>
            <img
              src={imgSrc2}
              alt="Assessory 2"
              className="w-full h-auto md:h-[350px] lg:h-[400px] xl:h-[500px] object-cover accessory-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessory;
