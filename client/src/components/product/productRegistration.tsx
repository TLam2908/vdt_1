import { Link } from "react-router-dom";
import type { ProductRegistrationProps } from "../../types/interface";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProductRegistation = ({ props }: { props: ProductRegistrationProps }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // Text and content animation
    tl.fromTo(
      "#registration-title",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    )
      .fromTo(
        "#registration-item",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      )
      // Image animation
      .fromTo(
        imageRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotation: -5,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
      )
      // Button animation
      .fromTo(
        buttonRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        }
      );

    gsap.to(imageRef.current, {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  const getBgColor = () => {
    if (props.name === "16e") {
      return "bg-[#f5f5f7]";
    } else if (props.name === "16Pro") {
      return "bg-black";
    } else {
      return "bg-white";
    }
  };

  const getTextColor = () => {
    if (props.name === "16Pro") {
      return "text-white";
    } else {
      return "text-gray-800";
    }
  };

  const getShadow = () => {
    if (props.name === "16") {
      return "shadow-lg max-lg:shadow-none";
    } else {
      return "";
    }
  };

  const getButtonStyle = () => {
    if (props.name === "16Pro") {
      return "bg-white text-black hover:bg-gray-100";
    } else {
      return "bg-blue-600 text-white hover:bg-blue-700";
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-white pb-20">
      <div
        className={`flex flex-center max-w-7xl mx-auto ${getBgColor()} ${getShadow()} rounded-2xl overflow-hidden`}
      >
        <div className="flex flex-row justify-around items-center w-full gap-10 pt-10 max-lg:flex-col max-lg:gap-20">
          <div
            id="registration-title"
            className={`flex flex-col max-lg:text-center ${getTextColor()}`}
          >
            <span className="text-4xl font-bold">iPhone Registration</span>
            <p id="registration-item" className="text-md mt-2">
              Sign up now to pre-order our product and stay updated.{" "}
            </p>
            <button
              ref={buttonRef}
              className={`w-[200px] py-4 mt-10 rounded-full font-semibold ${getButtonStyle()}`}
            >
              <Link to="/registration" className="block w-full h-full">
                Register Now
              </Link>
            </button>
          </div>
          <div className="overflow-hidden">
            <img
              ref={imageRef}
              src={props.image}
              alt="iPhone Registration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRegistation;
