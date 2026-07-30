// Image optimization script
// Run with: node scripts/optimize-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminAvif = require('imagemin-avif');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Target widths for responsive images
const RESPONSIVE_WIDTHS = [400, 800, 1200, 1600];

async function optimizeImages() {
  console.log('Starting image optimization...');

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Get all image files
  const files = fs.readdirSync(IMAGES_DIR).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext);
  });

  console.log(`Found ${files.length} images to optimize`);

  // First, use imagemin for batch optimization
  await imagemin([`${IMAGES_DIR}/*.{jpg,jpeg,png}`], {
    destination: OUTPUT_DIR,
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.7, 0.85] }),
      imageminWebp({ quality: 80 }),
      imageminAvif({ quality: 50 })
    ]
  });

  console.log('Batch optimization complete. Generating responsive sizes...');

  // Generate responsive sizes for large images using sharp
  const largeImages = files.filter(file => {
    const filepath = path.join(IMAGES_DIR, file);
    const stats = fs.statSync(filepath);
    return stats.size > 50000; // Only process images > 50KB
  });

  for (const file of largeImages) {
    const inputPath = path.join(IMAGES_DIR, file);
    const ext = path.extname(file);
    const basename = path.basename(file, ext);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Only generate smaller sizes if image is wider than smallest target
      if (metadata.width && metadata.width > RESPONSIVE_WIDTHS[0]) {
        for (const width of RESPONSIVE_WIDTHS) {
          if (metadata.width > width) {
            const outputPath = path.join(OUTPUT_DIR, `${basename}-${width}w.webp`);
            await sharp(inputPath)
              .resize(width, null, { withoutEnlargement: true })
              .webp({ quality: 80 })
              .toFile(outputPath);
          }
        }
        console.log(`Generated responsive sizes for ${file}`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);