import { OrbitControls } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import React, { useMemo } from "react";
import * as THREE from "three";

import Computer from "./Computer";

// Extend Three.js objects used as JSX elements in this component
extend({
  Group: THREE.Group,
  Mesh: THREE.Mesh,
  PlaneGeometry: THREE.PlaneGeometry,
  MeshStandardMaterial: THREE.MeshStandardMaterial,
  AmbientLight: THREE.AmbientLight,
  DirectionalLight: THREE.DirectionalLight,
});

const ContactExperience = () => {
  const cameraPosition = useMemo(() => [0, 3, 7], []);
  const cameraFov = useMemo(() => 45, []);
  const ambientLightProps = useMemo(
    () => ({ intensity: 0.5, color: "#fff4e6" }),
    []
  );
  const directionalLight1Props = useMemo(
    () => ({ position: [5, 5, 3], intensity: 2.5, color: "#ffd9b3" }),
    []
  );
  const directionalLight2Props = useMemo(
    () => ({
      position: [5, 9, 1],
      castShadow: true,
      intensity: 2.5,
      color: "#ffd9b3",
    }),
    []
  );
  const orbitControlsProps = useMemo(
    () => ({
      enableZoom: false,
      minPolarAngle: Math.PI / 5,
      maxPolarAngle: Math.PI / 2,
    }),
    []
  );
  const planeProps = useMemo(
    () => ({
      receiveShadow: true,
      position: [0, -1.5, 0],
      rotation: [-Math.PI / 2, 0, 0],
      args: [30, 30],
    }),
    []
  );
  const computerGroupProps = useMemo(
    () => ({
      scale: 0.03,
      position: [0, -1.49, -2],
      castShadow: true,
    }),
    []
  );
  const planeMaterial = useMemo(
    () => ({ color: "#a46b2d" }),
    []
  );

  return (
    <>
      <ambientLight {...ambientLightProps} />

      <directionalLight {...directionalLight1Props} />

      <directionalLight {...directionalLight2Props} />

      <OrbitControls {...orbitControlsProps} />

      <group scale={[1, 1, 1]}>
        <mesh {...planeProps}>
          <planeGeometry args={planeProps.args} />
          <meshStandardMaterial {...planeMaterial} />
        </mesh>
      </group>

      <group {...computerGroupProps}>
        <Computer />
      </group>
    </>
  );
};

export default ContactExperience;