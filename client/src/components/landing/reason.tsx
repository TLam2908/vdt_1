import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { reasons } from "../../utils/constants";
import ReasonSlide from "./reasonSlide";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Reason = () => {
  const sectionRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      }
    });

    tl.fromTo(
      "#reason-title-container",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    ).fromTo(
      ".reason-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.8"
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-gray-50">
      <div className="flex flex-col w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-20">
        <div
          id="reason-title-container"
          className="flex flex-row max-md:flex-col max-md:items-start md:justify-between items-center"
        >
          <div className="flex flex-col">
            <div className="font-semibold text-5xl max-lg:text-4xl max-md:text-3xl mb-2">
              Why Viettel is the best
            </div>
            <div className="font-semibold text-5xl max-lg:text-4xl max-md:text-3xl mb-18">
              {" "}
              place to buy iPhone.
            </div>
          </div>
          <a
            href="#"
            className="text-blue-500 text-md hover:underline transition-all mb-10"
          >
            Shop iPhones &gt;
          </a>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Mousewheel]}
            spaceBetween={20}
            slidesPerView="auto"
            mousewheel={true}
            loop={true}
            freeMode={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 1, spaceBetween: 20 },
              1072: { slidesPerView: 2, spaceBetween: 30 },
              1280: { slidesPerView: 2, spaceBetween: 30 },
              1440: { slidesPerView: 2, spaceBetween: 30 },
              1540: { slidesPerView: 3, spaceBetween: 35 },
              2240: { slidesPerView: 4, spaceBetween: 35 },
            }}
          >
            {reasons.map((reason) => (
              <SwiperSlide key={reason.id}>
                <div className="reason-card">
                  <ReasonSlide
                    img={reason.img}
                    title={reason.title}
                    description={reason.description}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reason;