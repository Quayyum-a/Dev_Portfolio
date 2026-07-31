import { OrbitControls } from "@react-three/drei";
import React, { useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import * as THREE from "three";

// Extend Three.js objects used as JSX elements in this component
import { extend } from "@react-three/fiber";
extend({
  Group: THREE.Group,
});

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const cameraPosition = useMemo(() => [0, 0, 15], []);
  const cameraFov = useMemo(() => 45, []);
  const orbitControlsProps = useMemo(
    () => ({
      enablePan: false,
      enableZoom: !isTablet,
      maxDistance: 20,
      minDistance: 5,
      minPolarAngle: Math.PI / 5,
      maxPolarAngle: Math.PI / 2,
    }),
    [isTablet]
  );

  const particleCount = useMemo(() => (isMobile ? 500 : 1000), [isMobile]);

  return (
    <>
      <OrbitControls {...orbitControlsProps} />

      <HeroLights />

      <Particles count={particleCount} />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </>
  );
};

export default HeroExperience;