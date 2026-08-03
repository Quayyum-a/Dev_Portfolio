import { useGLTF } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";

// Extend Three.js objects used as JSX elements in this component
extend({
  Group: THREE.Group,
  Mesh: THREE.Mesh,
});

export function Computer(props) {
  // Use the Draco-compressed model for better performance
  const { nodes, materials } = useGLTF("/models/draco/computer-optimized.glb");

  // The model has a single node (Cube.000_ComputerDesk_0.001) containing two primitives
  // Get the child meshes from the first (and only) node
  const meshEntries = Object.values(nodes);
  const parentNode = meshEntries[0];
  const deskMesh = parentNode.children?.[0];
  const floppyMesh = parentNode.children?.[1];

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        {/* Computer Desk - first primitive (material index 0) */}
        <mesh
          castShadow
          receiveShadow
          geometry={deskMesh?.geometry}
          material={materials["ComputerDesk.001"]}
        />
        {/* Floppy Disk - second primitive (material index 1) */}
        <mesh
          castShadow
          receiveShadow
          geometry={floppyMesh?.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/draco/computer-optimized.glb");

export default Computer;