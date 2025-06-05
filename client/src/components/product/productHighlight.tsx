import type { ProductHighlights } from "../../types/interface";
import Title from "../title";
import HighlightCard from "./highlightCard";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";

const ProductHighlight = ({ props }: { props: ProductHighlights[] }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // banner animation
    tl.fromTo(
    "#highlight-title",
    {
      y: 60,
      opacity: 0,
      scale: 0.8,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.7)",
    }
  )
  .fromTo(
    "#video-highlight",
    {
      y: 80,
      opacity: 0,
      rotationX: -15,
    },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1.5,
      ease: "power3.out",
    },
    "-=0.5"
  )
  }, {});

  return (
    <section ref={sectionRef} className="w-full">
      <div className="flex flex-col w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-40">
        <div
          id="highlight-title"
          className="flex flex-row justify-between max-md:flex-col max-md:items-start md:justify-between items-center mb-10"
        >
          <Title text="Get the highlights." />
        </div>

        <div className="w-full mx-auto" id="video-highlight">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
          >
            {props.map((highlight: ProductHighlights, index) => (
              <SwiperSlide key={index} className="w-full mx-auto">
                <HighlightCard props={highlight} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
