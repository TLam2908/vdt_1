import type { ProductHighlights } from "../../types/interface";
import Title from "../title";
import HighlightCard from "./highlightCard";

import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

const HighlightProduct = ({ props }: { props: ProductHighlights[] }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-40">
        <div
          id="title"
          className="flex flex-row justify-between max-md:flex-col max-md:items-start md:justify-between items-center mb-10"
        >
          <Title text="Get the highlights." />
        </div>

        <div className="w-10/12 mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
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

export default HighlightProduct;
