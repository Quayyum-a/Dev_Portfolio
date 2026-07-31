import React, { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

/**
 * Lazy3DWrapper - Wraps a lazy-loaded 3D component with Suspense
 * Does NOT create its own Canvas - expects a parent CanvasProvider
 */
const Lazy3DWrapper = React.memo(({ children, fallback, ...props }) => {
  return (
    <Suspense fallback={fallback || (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-white-50 text-sm">Loading 3D experience...</div>
      </div>
    )}>
      {children}
    </Suspense>
  );
});

/**
 * createLazy3DComponent - Factory function to create a lazy-loaded 3D component
 *
 * @param {Function} importFn - Dynamic import function: () => import('./Component')
 * @param {Object} options - Configuration options
 * @param {string} options.displayName - Display name for React DevTools
 * @param {boolean} options.preload - Whether to preload the component
 * @param {string} options.rootMargin - IntersectionObserver rootMargin for lazy loading
 * @param {React.ReactNode} options.fallback - Custom loading fallback
 * @returns {React.Component} Lazy 3D component
 */
export function createLazy3DComponent(importFn, options = {}) {
  const {
    displayName = 'Lazy3DComponent',
    preload = false,
    rootMargin = '100px',
    fallback = null
  } = options;

  // Create the lazy component
  const LazyComponent = React.lazy(importFn);

  // Optionally preload
  if (preload && typeof window !== 'undefined') {
    importFn();
  }

  // Main wrapper component with IntersectionObserver for lazy loading
  const Lazy3DComponent = React.memo(({
    className = '',
    style = {},
    ...props
  }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const containerRef = React.useRef(null);

    // IntersectionObserver to trigger lazy loading
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, [rootMargin]);

    return (
      <div ref={containerRef} className={className} style={style}>
        {isVisible && (
          <Lazy3DWrapper fallback={fallback}>
            <LazyComponent />
          </Lazy3DWrapper>
        )}
      </div>
    );
  });

  Lazy3DComponent.displayName = displayName;

  return Lazy3DComponent;
}

export default createLazy3DComponent;