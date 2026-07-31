import React, { useRef, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";

// Extend Three.js objects used in this component
extend({
  ...THREE,
});

const Particles = React.memo(({ count = 200 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5, // higher starting point
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      pos[i * 3] = p.position[0];
      pos[i * 3 + 1] = p.position[1];
      pos[i * 3 + 2] = p.position[2];
    });
    return pos;
  }, [particles, count]);

  const material = useMemo(() => ({
    color: "#ffffff",
    size: 0.05,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
  }), []);

  useFrame(() => {
    if (!mesh.current) return;
    const positionArray = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = positionArray[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      positionArray[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial {...material} />
    </points>
  );
});

export default Particles;
