import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { features } from "../utils/constants";
import Slide from "./slide";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

const Slider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Mousewheel]}
      spaceBetween={20}
      slidesPerView="auto"
      mousewheel={true}
      autoplay
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
          <Slide
            title={feature.title}
            heroSubtitle={feature.subtitle}
            img={feature.img}
            color={feature.color}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
