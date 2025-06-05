import { footerData } from "../utils/constants";
import { ChevronRight, Globe } from "lucide-react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ props }: { props: string }) {
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
    )
      .fromTo(
        "#footer-item",
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
      )
      .fromTo(
        ".copyright",
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
  }, {});

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div
          id="title-container"
          className="flex items-center text-sm text-gray-600 mb-8 pb-4 border-b border-gray-200"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span>Viettel</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>iPhone</span>
          {props && (
            <>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span>{props}</span>
            </>
          )}
        </div>

        <div
          id="footer-item"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-8"
        >
          {Object.entries(footerData).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6 mb-6 copyright">
          <p className="text-sm text-gray-600">
            More ways to shop:{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Find an Viettel Store
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-600 hover:underline">
              other retailer
            </a>{" "}
            near you. Or call{" "}
            <a
              href="tel:1-800-MY-Viettel"
              className="text-blue-600 hover:underline"
            >
              1-800-MY-Viettel
            </a>{" "}
            (1-800-692-7753).
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 copyright">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
            <p className="text-sm text-gray-600">
              Copyright © 2025 Viettel Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms of Use
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sales and Refunds
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Legal
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Site Map
              </a>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Globe className="w-4 h-4 mr-2" />
            <span>Viet Nam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
