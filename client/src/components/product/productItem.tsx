import { Canvas } from "@react-three/fiber";
import ModelView from "./modelView";

import { useState, useRef } from "react";
import * as Three from "three";
import { View } from "@react-three/drei";

import type { ProductItemProps } from "../../types/interface";

const ProductItem = ({props} : {props: ProductItemProps[]}) => {
  const [model, setModel] = useState(props[0]);

  const cameraControl = useRef<Three.Group>(new Three.Group());
  const [rotation, setRotation] = useState(0);

  const threeRef = useRef<Three.Group>(new Three.Group());
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-100">
      <div className="flex flex-col w-11/12 md:w-10/12 px-6 md:px-16 max-md:px-5 mx-auto pt-10 md:pt-20 pb-20 md:pb-40">
        <div
          id="title"
          className="flex flex-row justify-between max-md:flex-col max-md:items-start md:justify-between items-center"
        >
          <span className="font-semibold text-5xl max-lg:text-4xl max-md:text-3xl">Take a closer look.</span>
        </div>

        <div className="flex flex-col items-center mt-8">
          <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-transparent rounded-xl overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={threeRef}
              gsapType="view1"
              controlRef={cameraControl}
              setRotation={setRotation}
              item={model}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: "hidden",
              }}
              shadows
              dpr={[1, 2]} // Tối ưu pixel ratio cho hiệu suất
              eventSource={document.getElementById("root") ?? undefined}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-[90%] md:w-[60%] lg:w-[30%] mt-10">
            <p className="text-xl text-center font-medium mb-6">{model.title}</p>
            <div className="flex justify-center">
              <ul className="flex items-center justify-center px-6 py-3 rounded-full backdrop-blur-md bg-white/30 shadow-lg">
                {props.map((item, index) => (
                  <li
                    key={index}
                    className={`w-8 h-8 rounded-full mx-2.5 cursor-pointer transition-all duration-300 hover:scale-110 ${model.color === item.color ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                    style={{ backgroundColor: item.color }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;