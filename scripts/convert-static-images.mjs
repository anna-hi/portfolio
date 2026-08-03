import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join, relative } from "node:path";
import sharp from "sharp";

const publicDirectory = join(import.meta.dirname, "..", "public");
const excludedSources = new Set([join(publicDirectory, "background1.png")]);

function findRasterImages(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findRasterImages(path);
    return /\.(png|jpe?g)$/i.test(entry.name) && !excludedSources.has(path)
      ? [path]
      : [];
  });
}

let originalBytes = 0;
let optimizedBytes = 0;

for (const input of findRasterImages(publicDirectory)) {
  const output = input.replace(/\.(png|jpe?g)$/i, ".webp");
  const fullResolutionOutput = input.replace(/\.(png|jpe?g)$/i, ".full.webp");
  originalBytes += statSync(input).size;
  await sharp(input)
    .rotate()
    .resize({ width: 2560, withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90, effort: 6, smartSubsample: true })
    .toFile(output);
  await sharp(input)
    .rotate()
    .webp({ quality: 90, alphaQuality: 95, effort: 6, smartSubsample: true })
    .toFile(fullResolutionOutput);
  optimizedBytes += statSync(output).size;
  unlinkSync(input);
  console.log(relative(publicDirectory, output));
}

console.log(
  `Optimized ${(originalBytes / 1024 / 1024).toFixed(2)} MB to ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB.`,
);
