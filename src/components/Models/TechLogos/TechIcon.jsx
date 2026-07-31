import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import React, { useEffect, Suspense } from "react";
import * as THREE from "three";

// Extend Three.js objects used as JSX elements in this component
extend({
  Primitive: THREE.Object3D,
});

const Fallback = () => <div style={{ color: "red" }}>Model failed to load</div>;

const TechIconModel = ({ model }) => {
  const { scene } = useGLTF(model.modelPath);

  // Guard against undefined scene during loading
  if (!scene) {
    return null;
  }

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        }
      });
    }
  }, [scene]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can log error info here
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red" }}>
          Something went wrong loading the 3D model.
        </div>
      );
    }
    return this.props.children;
  }
}

const TechIcon = ({ model }) => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <TechIconModel model={model} />
    </Suspense>
  </ErrorBoundary>
);

export default TechIcon;