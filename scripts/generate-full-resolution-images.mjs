import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const publicDirectory = join(import.meta.dirname, "..", "public");
const excludedSources = new Set([
  "public/background1.png",
  "public/background2.png",
  "public/home_background.png",
]);
const sourceFiles = execFileSync("git", ["ls-tree", "-r", "--name-only", "HEAD", "public"], {
  maxBuffer: 20 * 1024 * 1024,
})
  .toString()
  .split("\n")
  .filter((path) => /\.(png|jpe?g)$/i.test(path) && !excludedSources.has(path));

for (const source of sourceFiles) {
  const output = join(publicDirectory, source.slice("public/".length).replace(/\.(png|jpe?g)$/i, ".full.webp"));
  if (existsSync(output)) continue;
  const input = execFileSync("git", ["show", `HEAD:${source}`], {
    maxBuffer: 20 * 1024 * 1024,
  });
  await sharp(input)
    .rotate()
    .webp({ quality: 90, alphaQuality: 95, effort: 6, smartSubsample: true })
    .toFile(output);
  console.log(output);
}
