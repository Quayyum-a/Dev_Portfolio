import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import imageminAvif from 'imagemin-avif';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

const RESPONSIVE_WIDTHS = [400, 800, 1200, 1600];

async function optimizeImages() {
  console.log('Starting image optimization...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(IMAGES_DIR).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext);
  });

  console.log(`Found ${files.length} images to optimize`);

  // Batch optimization with imagemin
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

  // Generate responsive sizes for large images
  const largeImages = files.filter(file => {
    const filepath = path.join(IMAGES_DIR, file);
    const stats = fs.statSync(filepath);
    return stats.size > 50000;
  });

  for (const file of largeImages) {
    const inputPath = path.join(IMAGES_DIR, file);
    const ext = path.extname(file);
    const basename = path.basename(file, ext);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

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