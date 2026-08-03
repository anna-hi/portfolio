import sharp from "sharp";

const input = "public/background1.png";

await Promise.all([
  sharp(input).avif({ quality: 55, effort: 6 }).toFile("public/background1.avif"),
  sharp(input).webp({ quality: 75, effort: 6 }).toFile("public/background1.webp"),
]);
