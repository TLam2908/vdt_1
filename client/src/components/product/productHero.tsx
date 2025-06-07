import type { ProductHeroProps } from "../../types/interface";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const IPhone16 = ({
  heroImg,
  textImg,
  heroImgSmall,
  textImgSmall,
}: {
  heroImg: string;
  textImg: string;
  heroImgSmall: string;
  textImgSmall: string;
}) => {
  const [heroImgSrc, setHeroImgSrc] = useState(
    window.innerWidth > 640 ? heroImg : heroImgSmall
  );
  const [textImgSrc, setTextImgSrc] = useState(
    window.innerWidth > 640 ? textImg : textImgSmall
  );

  useEffect(() => {
    const handleResize = () => {
      setHeroImgSrc(window.innerWidth > 640 ? heroImg : heroImgSmall);
      setTextImgSrc(window.innerWidth > 640 ? textImg : textImgSmall);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgb(12, 18, 71), rgb(40, 51, 125) 28%, rgb(80, 93, 173) 46%, rgb(125, 142, 209) 60%, rgb(174, 188, 230) 75%, rgb(239, 236, 255) 90%, rgb(255, 255, 255))",
      }}
    >
      <div className="flex flex-col items-center justify-start w-full h-full relative pt-16 md:pt-24">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold absolute top-[-20px] z-10">
            iPhone 16
          </h1>

          <img
            src={textImgSrc}
            alt="iPhone 16 Text"
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-[700px] absolute top-[-10px] z-10"
          />

          <img
            src={heroImgSrc}
            alt="iPhone 16 Hero"
            className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] max-w-[1200px] relative z-0"
          />
        </div>

        <div className="flex flex-col items-center space-y-4 md:space-y-6 mt-4 md:mt-8">
          <Link
            to="/registration"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition-colors"
          >
            Register Now
          </Link>
          <p className="text-sm md:text-base text-gray-800 font-semibold text-center">
            From $799 or $33.29/month. for 24 months
          </p>
        </div>
      </div>
    </div>
  );
};

const IPhone16e = ({
  heroImg,
  heroImgSmall,
}: {
  heroImg: string;
  heroImgSmall: string;
}) => {
  const [heroImgSrc, setHeroImgSrc] = useState(
    window.innerWidth > 640 ? heroImg : heroImgSmall
  );

  useEffect(() => {
    const handleResize = () => {
      setHeroImgSrc(window.innerWidth > 640 ? heroImg : heroImgSmall);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen relative overflow-hidden">
      <div className="flex flex-col items-center w-full h-full ">
        <div className="mb-4 md:mb-8 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold">
            iPhone 16e
          </h1>
          {window.innerWidth < 640 ? (
            <>
              <h1 className="text-5xl lg:text-6xl text-black font-semibold">
                Latest iPhone.
              </h1>
              <h1 className="text-5xl lg:text-6xl text-black font-semibold">
                Greatest price.
              </h1>
            </>
          ) : (
            <h1 className="text-5xl lg:text-6xl text-black font-semibold">
              Latest iPhone. Greatest price.
            </h1>
          )}
          <span className="text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-600 bg-clip-text text-transparent block mt-4">
            Built for Apple Intelligence.
          </span>
        </div>

        {/* Mobile view ordering */}
        <div className="flex flex-col items-center w-full sm:hidden">
          {/* Buttons first on mobile */}
          <div className="flex flex-col items-center space-y-4 mb-6 order-1">
            <Link
              to="/registration"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition-colors"
            >
              Register Now
            </Link>
            <p className="text-sm text-gray-800 font-semibold text-center">
              From $599 or $24.95/month. for 24 months
            </p>
          </div>

          {/* Image second on mobile */}
          <div className="w-full flex justify-center order-2">
            <img
              src={heroImgSrc}
              alt="iPhone 16e Hero"
              className="w-[90%] max-w-[1200px] my-4"
            />
          </div>
        </div>

        {/* Desktop view ordering */}
        <div className="hidden sm:flex flex-col items-center w-full">
          {/* Image first on desktop */}
          <div className="w-full flex justify-center mb-6">
            <img
              src={heroImgSrc}
              alt="iPhone 16e Hero"
              className="w-[90%] max-w-[1200px]"
            />
          </div>

          {/* Buttons second on desktop */}
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/registration"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition-colors"
            >
              Register Now
            </Link>
            <p className="text-md text-gray-800 font-semibold text-center">
              From $599 or $24.95/month. for 24 months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const IPhone16Pro = ({
  heroImg,
  textImg,
  heroImgSmall,
  textImgSmall,
}: {
  heroImg: string;
  textImg: string;
  heroImgSmall: string;
  textImgSmall: string;
}) => {
  const [heroImgSrc, setHeroImgSrc] = useState(
    window.innerWidth > 640 ? heroImg : heroImgSmall
  );
  const [textImgSrc, setTextImgSrc] = useState(
    window.innerWidth > 640 ? textImg : textImgSmall
  );

  useEffect(() => {
    const handleResize = () => {
      setHeroImgSrc(window.innerWidth > 640 ? heroImg : heroImgSmall);
      setTextImgSrc(window.innerWidth > 640 ? textImg : textImgSmall);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black text-white relative overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center h-full">
        <div className="relative w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] max-w-[1200px] mt-16">
          <img
            src={heroImgSrc}
            alt="iPhone 16 Pro Hero"
            className="w-full h-[600px] sm:h-[500px] md:h-[550px] lg:h-[600px] object-cover"
          />
          <h1 className="absolute top-0 sm:top-[5%] md:top-[6%] lg:top-[7%] left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold z-20">
            iPhone 16 Pro
          </h1>

          <img
            src={textImgSrc}
            alt="iPhone 16 Pro Text"
            className="absolute top-0 sm:top-[6%] md:top-[8%] lg:top-[10%] left-1/2 transform -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] max-w-[600px] z-10 h-[120px] sm:h-[140px] md:h-[160px] lg:h-[170px] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 md:space-y-6 mt-4 md:mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition-colors">
          Register Now
        </button>
        <p className="text-sm md:text-base text-white font-semibold text-center">
          From $999 or $41.62/month. for 24 months
        </p>
      </div>
    </div>
  );
};

const ProductHero = ({ props }: { props: ProductHeroProps }) => {
  return (
    <>
      {props.id === 1 && (
        <IPhone16
          heroImg={props.hero}
          textImg={props.text || ""}
          heroImgSmall={props.small}
          textImgSmall={props.textSmall || ""}
        />
      )}
      {props.id === 2 && (
        <IPhone16e heroImg={props.hero} heroImgSmall={props.small} />
      )}
      {props.id === 3 && (
        <IPhone16Pro
          heroImg={props.hero}
          textImg={props.text || ""}
          heroImgSmall={props.small}
          textImgSmall={props.textSmall || ""}
        />
      )}
    </>
  );
};

export default ProductHero;
