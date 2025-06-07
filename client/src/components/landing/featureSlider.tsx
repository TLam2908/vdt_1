import { features } from "../../utils/constants";
import FeatureSlide from "./featureSlide";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";


gsap.registerPlugin(ScrollTrigger);

const FeatureSlider: React.FC = () => {

  useGSAP(() => {
    // Animation cho từng slide
    gsap.fromTo(
      ".slide-item",
      {
        y: 60,
        opacity: 0,
        scale: 0.8,
        rotationY: 15
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.5,
        ease: "back.out(1.2)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".slide-item",
          start: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Mousewheel]}
        spaceBetween={20}
        slidesPerView="auto"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1072: { slidesPerView: 2, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 4, spaceBetween: 30 },
          1740: { slidesPerView: 5, spaceBetween: 35 },
        }}
        className="py-8 w-full"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="slide-item w-full h-full">
              <FeatureSlide
                title={feature.title}
                heroSubtitle={feature.subtitle}
                img={feature.img}
                color={feature.color}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;