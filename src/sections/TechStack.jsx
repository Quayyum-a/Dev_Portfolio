import React, { useMemo } from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Extend Three.js objects used as JSX elements
extend({
  Group: THREE.Group,
  Primitive: THREE.Object3D,
});

const TechIconModel = ({ model, position }) => {
  const { scene } = useGLTF(model.modelPath);

  // Guard against undefined scene during loading
  if (!scene) {
    return null;
  }

  return (
    <group position={position} scale={model.scale} rotation={model.rotation}>
      <primitive object={scene.scene} />
    </group>
  );
};

const TechStackCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 10, 20], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Suspense fallback={<group>Loading icons...</group>}>
        <group>
          {techStackIcons.map((icon, index) => (
            <TechIconModel
              key={icon.name}
              model={icon}
              position={[
                (index % 5) * 3 - 6,
                Math.floor(index / 5) * -3 + 3,
                0
              ]}
            />
          ))}
        </group>
      </Suspense>
    </Canvas>
  );
}

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table "
        />
        <div className="tech-grid">
          <div className="col-span-full">
            <div className="relative h-[500px] w-full">
              <TechStackCanvas />
            </div>
          </div>
          <div className="tech-grid">
            {techStackIcons.map((icon) => (
              <div
                key={icon.name}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    {/* Placeholder for 3D icon - using a simple div */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl">{icon.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="padding-x w-full">
                    <p>{icon.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;