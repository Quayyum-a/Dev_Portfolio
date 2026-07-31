import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Create a GLTFLoader with the KHR_materials_pbrSpecularGlossiness extension registered
// This extension is needed for the room.glb model which uses PBR specular-glossiness materials
const createGLTFLoader = async () => {
  const loader = new GLTFLoader();

  // Try to register the KHR_materials_pbrSpecularGlossiness extension
  // This extension may not be available in all three.js versions
  try {
    // Try to import from three-stdlib which has the extension
    const threeStdlib = await import('three-stdlib');
    if (threeStdlib.KHRMaterialsPbrSpecularGlossinessExtension) {
      loader.registerExtension(
        'KHR_materials_pbrSpecularGlossiness',
        new threeStdlib.KHRMaterialsPbrSpecularGlossinessExtension()
      );
    }
  } catch (e) {
    // Extension not available, continue without it
    console.warn('KHR_materials_pbrSpecularGlossiness extension not available, loading model without it');
  }

  return loader;
};

// Export a promise that resolves to the loader instance
export const gltfLoaderPromise = createGLTFLoader();