import Title from "./../title";
import { productLanding } from "../../utils/constants";
import type { ProductLanding } from "../../types/productLanding";
import ProductCard from "./../productCard";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
     
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });

      tl.fromTo(
        "#title-container",
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
      )
      .fromTo(
        "#product-item",
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
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full bg-gray-50">
      <div className="flex flex-col w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-20">
        <div
          id="title-container"
          className="flex flex-row max-md:flex-col max-md:items-start md:justify-between items-center"
        >
          <Title text="Explore the lineup." />
          <a
            href="#"
            className="text-blue-500 text-md hover:underline transition-all"
          >
            Compare all models &gt;
          </a>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-1 max-2xl:grid-cols-2 gap-5 mt-10">
          {productLanding.map((product: ProductLanding) => (
            <div id="product-item" key={product.id}>
              <ProductCard product={product} key={product.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
