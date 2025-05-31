import { type ProductHighlights } from "../../types/interface";
import { useState, useEffect } from "react";

const HighlightCard = ({ props }: { props: ProductHighlights }) => {
  const [imgSrc, setImgSrc] = useState(
    window.innerWidth > 1280 ? props.images.large : props.images.small 
  );

  useEffect(() => {
    const handleResize = () => {
      setImgSrc(window.innerWidth > 1280 ? props.images.large : props.images.small);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={imgSrc}
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-all duration-500 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-0 left-0 right-0 p-10 text-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {props.title.map((title, index) => (
            <h3
              key={index}
              className="text-3xl max-md:text-2xl max-sm:text-xl font-semibold"
            >
              {title}
            </h3>
          ))}
          <p className="text-md opacity-90 line-clamp-2 mt-2 text-gray-300">
            Discover the innovative features that make this product
            extraordinary.
          </p>
        </div>
      </div>

      <div className="pt-4 px-2">
        <div className="flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-sm:hidden">
          <span className="text-lg text-blue-600 font-medium">Learn more</span>
          <svg
            className="w-4 h-4 ml-1 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;