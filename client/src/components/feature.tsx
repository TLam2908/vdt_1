import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Slider from "./slider";
import Title from "./title";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      "#feature",
      { 
        x: 100, 
        opacity: 0 
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col w-10/12 max-md:w-9/12 px-16 max-md:px-5 mx-auto pt-40 pb-20"
    >
      <div id="title">
        <Title text="Explore iPhone" />
      </div>
      <div id="feature">
        <Slider />
      </div>
    </section>
  );
};

export default Feature;