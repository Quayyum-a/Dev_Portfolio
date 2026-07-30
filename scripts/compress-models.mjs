import pkg from 'gltf-pipeline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const { processGltf, compressDraco } = pkg;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MODELS_DIR = path.join(__dirname, '../public/models');
const OUTPUT_DIR = path.join(MODELS_DIR, 'draco');

async function compressModels() {
  console.log('Starting Draco compression for GLB models...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Large models to compress (skip already small _transformed.glb files)
  const modelsToCompress = [
    'java.glb',
    'optimized-room.glb',
    'node-transformed.glb',
    'computer-optimized.glb',
    'computer-optimized-transformed.glb',
  ];

  for (const modelFile of modelsToCompress) {
    const inputPath = path.join(MODELS_DIR, modelFile);
    const outputPath = path.join(OUTPUT_DIR, modelFile);

    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${modelFile} - not found`);
      continue;
    }

    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`\nProcessing ${modelFile} (${sizeMB} MB)...`);

    try {
      const gltf = await processGltf(inputPath);

      const options = {
        dracoOptions: {
          compressionLevel: 10,
        },
      };

      const compressed = await compressDraco(gltf, options);

      // Write compressed GLB
      const buffer = Buffer.from(compressed.gltf);
      fs.writeFileSync(outputPath, buffer);

      const outStats = fs.statSync(outputPath);
      const outSizeMB = (outStats.size / (1024 * 1024)).toFixed(2);
      const reduction = ((1 - outStats.size / stats.size) * 100).toFixed(1);

      console.log(`  ✓ Compressed: ${sizeMB} MB → ${outSizeMB} MB (${reduction}% reduction)`);
    } catch (error) {
      console.error(`  ✗ Error compressing ${modelFile}:`, error.message);
    }
  }

  console.log('\nDraco compression complete!');
}

compressModels().catch(console.error);