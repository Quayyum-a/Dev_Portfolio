import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";

/**
 * CanvasProvider - Single Canvas provider for the entire application
 * This ensures only one Canvas exists in the application, preventing
 * "Canvas is not part of the THREE namespace" and "Context Lost" errors.
 */
const CanvasProvider = React.memo(({ children, cameraProps = {}, glProps = {} }) => {
  const defaultCameraProps = useMemo(() => ({
    position: [0, 0, 15],
    fov: 45,
    ...cameraProps
  }), [cameraProps]);

  const defaultGlProps = useMemo(() => ({
    antialias: true,
    alpha: true,
    ...glProps
  }), [glProps]);

  return (
    <Canvas
      camera={defaultCameraProps}
      gl={defaultGlProps}
    >
      {children}
    </Canvas>
  );
});

CanvasProvider.displayName = 'CanvasProvider';

export default CanvasProvider;