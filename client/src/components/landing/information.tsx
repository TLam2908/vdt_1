import { infomationData } from "../../utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Information = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
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
    ).fromTo(
      "#information-item",
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
  }, {})

  return (
    <div className="w-full" ref={sectionRef}>
      <div className="w-10/12 px-16 max-md:px-5 mx-auto pt-20 pb-40">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-16" id="title-container">
          iPhone
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8" id="information-item">
          {Object.entries(infomationData).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-md font-medium text-gray-500 mb-6 uppercase tracking-wide">
                {category}
              </h3>

              <nav className="space-y-4">
                {links.map((link, index) => (
                  <div key={index}>
                    {link ? (
                      <a
                        href="#"
                        className="block text-md font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 text-base leading-relaxed"
                      >
                        {link}
                      </a>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
