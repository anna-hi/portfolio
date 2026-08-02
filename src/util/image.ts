export function optimizedImageSource(src: string) {
  return src.replace(/\.(?:png|jpe?g)$/i, ".webp");
}

export function fullResolutionImageSource(src: string) {
  return src.replace(/\.(?:png|jpe?g)$/i, ".full.webp");
}
