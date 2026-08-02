import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// KHR_materials_pbrSpecularGlossiness Extension
// Copied from three.js examples/jsm/loaders/GLTFLoader.js
class KHRMaterialsPbrSpecularGlossinessExtension {
	constructor(parser) {
		this.parser = parser;
		this.name = KHRMaterialsPbrSpecularGlossinessExtension.NAME;
	}

	static NAME = 'KHR_materials_pbrSpecularGlossiness';

	parseMaterial(materialIndex, materialDef) {
		if (!materialDef.extensions || !materialDef.extensions[this.name]) {
			return null;
		}

		const extensionDef = materialDef.extensions[this.name];

		const materialType = extensionDef.specularGlossiness ? THREE.MeshStandardMaterial : THREE.MeshPhysicalMaterial;

		const materialParams = {
			color: new THREE.Color(1, 1, 1),
			opacity: 1,
			transparent: false,
			depthWrite: true,
			flatShading: false,
			side: THREE.FrontSide,
			vertexColors: false,
		};

		if (extensionDef.diffuseFactor !== undefined) {
			materialParams.color.fromArray(extensionDef.diffuseFactor);
		}

		if (extensionDef.specularFactor !== undefined) {
			materialParams.specular = new THREE.Color().fromArray(extensionDef.specularFactor);
		}

		if (extensionDef.glossinessFactor !== undefined) {
			materialParams.glossiness = extensionDef.glossinessFactor;
		}

		if (extensionDef.diffuseTexture !== undefined) {
			materialParams.map = this.parser.getTexture(extensionDef.diffuseTexture.index);
		}

		if (extensionDef.specularGlossinessTexture !== undefined) {
			materialParams.specularMap = this.parser.getTexture(extensionDef.specularGlossinessTexture.index);
		}

		if (extensionDef.glossinessTexture !== undefined) {
			materialParams.glossinessMap = this.parser.getTexture(extensionDef.glossinessTexture.index);
		}

		if (extensionDef.alphaMode !== undefined) {
			if (extensionDef.alphaMode === 'MASK') {
				materialParams.alphaTest = extensionDef.alphaCutoff !== undefined ? extensionDef.alphaCutoff : 0.5;
			} else if (extensionDef.alphaMode === 'BLEND') {
				materialParams.transparent = true;
				materialParams.depthWrite = false;
			}
		}

		if (extensionDef.doubleSided !== undefined) {
			materialParams.side = extensionDef.doubleSided ? THREE.DoubleSide : THREE.FrontSide;
		}

		const material = new materialType(materialParams);
		material.name = materialDef.name || '';

		return Promise.resolve(material);
	}
}

// Create a GLTFLoader with the KHR_materials_pbrSpecularGlossiness extension registered
// This extension is needed for the room.glb model which uses PBR specular-glossiness materials
const createGLTFLoader = async () => {
  const loader = new GLTFLoader();

  // Register the KHR_materials_pbrSpecularGlossiness extension
  loader.registerExtension(
    'KHR_materials_pbrSpecularGlossiness',
    new KHRMaterialsPbrSpecularGlossinessExtension(loader.parser)
  );

  return loader;
};

// Export a promise that resolves to the loader instance
export const gltfLoaderPromise = createGLTFLoader();