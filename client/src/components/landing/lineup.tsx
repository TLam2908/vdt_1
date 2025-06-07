import Title from "../title";
import { productLanding } from "../../utils/constants";
import type { ProductLanding } from "../../types/interface";
import ProductCard from "./productSlide";
import ProductSlide from "./productSlide";

import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Lineup = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth > 1536);
    };
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      ScrollTrigger.refresh(true);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        "#lineup-title",
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
        ".product-item",
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
    },
    { scope: sectionRef, dependencies: [isWideScreen, productLanding] }
  );

  return (
    <section ref={sectionRef} className="w-full bg-gray-50">
      <div className="flex flex-col w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-20">
        <div
          id="lineup-title"
          className="flex flex-row max-md:flex-col max-md:items-start md:justify-between items-center"
        >
          <Title text="Explore the lineup." />
          <a
            href="#"
            className="text-blue-500 text-md hover:underline transition-all mb-10"
          >
            Compare all models &gt;
          </a>
        </div>
        {isWideScreen ? (
          <div className="grid grid-cols-3 gap-5 mt-10">
            {productLanding.map((product: ProductLanding) => (
              <div className="product-item" key={product.id}>
                <ProductSlide product={product} key={product.id} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Mousewheel]}
              spaceBetween={20}
              slidesPerView="auto"
              loop={true}
              freeMode={true}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1072: { slidesPerView: 2, spaceBetween: 30 },
                1440: { slidesPerView: 2, spaceBetween: 30 },
              }}
            >
              {productLanding.map((product: ProductLanding) => (
                <SwiperSlide key={product.id} className="w-full h-full">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Lineup;
