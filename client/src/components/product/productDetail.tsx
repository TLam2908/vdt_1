import type { ProductDetailProps } from "../../types/interface";
import ProductDetailSlide from "./productDetailSlide";

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

const ProductDetail = ({ props }: { props: ProductDetailProps }) => {
  useGSAP(() => {
    // Animation cho từng slide
    gsap.fromTo(
      ".slide-item",
      {
        y: 60,
        opacity: 0,
        scale: 0.8,
        rotationY: 15,
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
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <section className="w-full bg-white">
      <div className="flex flex-col w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-40">
        <div className="flex flex-col items-start mb-10">
          {props.title.map((title, index) => (
            <h1
              key={index}
              className="font-semibold text-5xl max-lg:text-4xl max-md:text-3xl mb-2 leading-tight"
            >
              {title}
            </h1>
          ))}
          <p className="text-md max-md:text-base text-gray-500 max-w-2xl font-semibold my-2">
            {props.description}
          </p>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Mousewheel]}
            spaceBetween={20}
            slidesPerView="auto"
            mousewheel={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 1, spaceBetween: 20 },
              1072: { slidesPerView: 2, spaceBetween: 30 },
              1280: { slidesPerView: 2, spaceBetween: 30 },
              1440: { slidesPerView: 3, spaceBetween: 30 },
              1740: { slidesPerView: 4, spaceBetween: 35 },
            }}
            className="py-8 w-full"
          >
            {props.slide.map((slide, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="'slide-item">
                    <ProductDetailSlide
                      img={slide.image}
                      title={slide.title}
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

export default ProductDetail;
