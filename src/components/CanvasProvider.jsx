import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import ErrorBoundary from "./ErrorBoundary";

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
      <ErrorBoundary
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              color: "#888",
              fontSize: "14px",
              background: "rgba(0,0,0,0.1)",
              borderRadius: "8px",
            }}
          >
            <div style={{ textAlign: "center", padding: "20px" }}>
              <p style={{ margin: "0 0 8px 0" }}>3D experience unavailable</p>
            </div>
          </div>
        }
      >
        {children}
      </ErrorBoundary>
    </Canvas>
  );
});

CanvasProvider.displayName = 'CanvasProvider';

export default CanvasProvider;