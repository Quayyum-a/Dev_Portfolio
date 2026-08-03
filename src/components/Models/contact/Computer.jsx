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

  // The model has a single mesh with two primitives (ComputerDesk and FloppyDisk)
  // Get the mesh geometry from the first node
  const meshEntries = Object.values(nodes);
  const deskMesh = meshEntries[0];

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        {/* Computer Desk - first primitive (material index 0) */}
        <mesh
          castShadow
          receiveShadow
          geometry={deskMesh.geometry}
          material={materials["ComputerDesk.001"]}
        />
        {/* Floppy Disk - second primitive (material index 1) */}
        <mesh
          castShadow
          receiveShadow
          geometry={deskMesh.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/draco/computer-optimized.glb");

export default Computer;