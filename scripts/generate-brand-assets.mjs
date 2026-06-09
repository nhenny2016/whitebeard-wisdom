import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");
const source = path.join(publicDir, "whitebeardwisdom_logo.jpg");

const NAVY = { r: 27, g: 43, b: 72, alpha: 255 };

async function generateAssets() {
  await mkdir(publicDir, { recursive: true });

  const meta = await sharp(source).metadata();
  const width = meta.width ?? 816;
  const height = meta.height ?? 1248;

  // Emblem occupies roughly the top 62% of the master logo.
  const emblemHeight = Math.round(height * 0.62);
  const wordmarkTop = emblemHeight - Math.round(emblemHeight * 0.04);

  await sharp(source)
    .resize(480, null, { withoutEnlargement: false })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(publicDir, "logo.jpg"));

  await sharp(source)
    .extract({
      left: 0,
      top: 0,
      width,
      height: wordmarkTop,
    })
    .resize(640, 640, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, "logo-mark.png"));

  await sharp(source)
    .extract({
      left: Math.round(width * 0.08),
      top: Math.round(height * 0.03),
      width: Math.round(width * 0.84),
      height: Math.round(height * 0.5),
    })
    .resize(800, 1000, { fit: "cover", position: "centre" })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, "coach-portrait.jpg"));

  const ogLogo = await sharp(source)
    .resize(700, 580, { fit: "inside", withoutEnlargement: false })
    .png()
    .toBuffer();

  const ogLogoMeta = await sharp(ogLogo).metadata();
  const ogLogoWidth = ogLogoMeta.width ?? 700;
  const ogLogoHeight = ogLogoMeta.height ?? 580;

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: NAVY,
    },
  })
    .composite([
      {
        input: ogLogo,
        top: Math.round((630 - ogLogoHeight) / 2),
        left: Math.round((1200 - ogLogoWidth) / 2),
      },
    ])
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, "og-image.jpg"));

  await sharp(source)
    .extract({
      left: Math.round(width * 0.18),
      top: Math.round(height * 0.08),
      width: Math.round(width * 0.64),
      height: Math.round(height * 0.38),
    })
    .resize(512, 512, { fit: "cover", position: "centre" })
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));

  await sharp(source)
    .extract({
      left: Math.round(width * 0.22),
      top: Math.round(height * 0.1),
      width: Math.round(width * 0.56),
      height: Math.round(height * 0.34),
    })
    .resize(32, 32, { fit: "cover", position: "centre" })
    .png()
    .toFile(path.join(publicDir, "favicon.png"));

  await sharp(source)
    .extract({
      left: Math.round(width * 0.22),
      top: Math.round(height * 0.1),
      width: Math.round(width * 0.56),
      height: Math.round(height * 0.34),
    })
    .resize(192, 192, { fit: "cover", position: "centre" })
    .png()
    .toFile(path.join(publicDir, "icon-192.png"));

  await sharp(source)
    .extract({
      left: Math.round(width * 0.22),
      top: Math.round(height * 0.1),
      width: Math.round(width * 0.56),
      height: Math.round(height * 0.34),
    })
    .resize(512, 512, { fit: "cover", position: "centre" })
    .png()
    .toFile(path.join(publicDir, "icon-512.png"));

  console.log("Generated Whitebeard Wisdom brand assets in /public");
}

generateAssets().catch((error) => {
  console.error(error);
  process.exit(1);
});
