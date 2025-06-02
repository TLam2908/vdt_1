import { PerspectiveCamera, View, OrbitControls, Center } from "@react-three/drei";
import type { ModelViewProps } from "../../types/interface";
import Lights from "./lights";
import Loader from "./loader";
import { Suspense, useEffect, useState } from "react";
import Black from "../models/ip16pro/black";
import * as Three from "three";

import White from "../models/ip16pro/white";
import Desert from "../models/ip16pro/desert";
import Natural from "../models/ip16pro/natural";
import Ultramarine from "../models/ip16/ultramarine";
import Black16 from "../models/ip16/black";
import White16 from "../models/ip16/white";
import Teal from "../models/ip16/teal";
import Pink from "../models/ip16/pink";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  item,
  // setRotation,
}: ModelViewProps) => {
  // Responsive scaling based on viewport
  const [scale, setScale] = useState(0.17);
  const [camZ, setCamZ] = useState(4.8);
  
  console.log("ModelView item:", item);

  useEffect(() => {
    // Handle responsive scaling
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScale(0.15);
        setCamZ(5.2);
      } else if (width < 1024) {
        setScale(0.16);
        setCamZ(5.0);
      } else {
        setScale(0.17);
        setCamZ(4.8);
      }
    };
    
    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <View index={index} id={gsapType} className="w-full h-full">
      {/* Ambient light để tạo ánh sáng tổng thể */}
      <ambientLight intensity={0.5} />

      {/* Camera với vị trí responsive */}
      <PerspectiveCamera
        makeDefault
        position={[0, 0, camZ]}
        fov={42}
        near={0.1}
        far={100}
      />

      {/* Controls được tinh chỉnh để trải nghiệm mượt mà hơn */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.35}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
        target={new Three.Vector3(0, 0, 0)}
        // onEnd={() => setRotation(controlRef.current?.getAzimuthalAngle() ?? 0)}
      />

      <Lights />

      <Suspense fallback={<Loader />}>
        <Center>
          <group ref={groupRef} position={[0, -0.15, 0]}>
            {item.search === "Pro Black" && (
                <Black scale={scale} />
            )}
            {item.search === "Pro White" && (
                <White scale={scale} />
            )}
            {item.search === "Pro Desert" && (
                <Desert scale={scale} />
            )}
            {item.search === "Pro Natural" && (
                <Natural scale={scale} />
            )}
            {item.search === "Ultramarine" && (
              <Ultramarine scale={scale} />
            )}
            {item.search === "Black" && (
              <Black16 scale={scale} />
            )}

            {item.search === "White" && (
              <White16 scale={scale} />
            )}

            {item.search === "Teal" && (
              <Teal scale={scale} />
            )}
            {item.search === "Pink" && (
              <Pink scale={scale} />
            )}

          </group>
        </Center>
      </Suspense>
    </View>
  );
};

export default ModelView;