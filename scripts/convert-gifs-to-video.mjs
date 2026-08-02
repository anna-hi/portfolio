import { readdirSync, unlinkSync } from "node:fs";
import { join, relative } from "node:path";
import { spawnSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

const publicDirectory = join(import.meta.dirname, "..", "public");

function findGifs(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findGifs(path);
    return entry.name.toLowerCase().endsWith(".gif") ? [path] : [];
  });
}

function run(args) {
  const result = spawnSync(ffmpegPath, ["-y", ...args], {
    stdio: ["ignore", "ignore", "pipe"],
  });
  if (result.status !== 0) {
    throw new Error(`FFmpeg failed: ${args.at(-1)}\n${result.stderr.toString()}`);
  }
}

const requestedGifs = process.argv.slice(2).map((path) => join(publicDirectory, path));

for (const gif of requestedGifs.length > 0 ? requestedGifs : findGifs(publicDirectory)) {
  const outputBase = gif.slice(0, -4);
  const filter = "fps=20,scale='min(1280,iw)':-2:flags=lanczos";

  console.log(`Converting ${relative(publicDirectory, gif)}`);
  run(["-i", gif, "-vf", filter, "-c:v", "libvpx-vp9", "-crf", "32", "-b:v", "0", "-deadline", "good", "-cpu-used", "4", `${outputBase}.webm`]);
  run(["-i", gif, "-vf", filter, "-c:v", "libx264", "-crf", "25", "-preset", "slow", "-pix_fmt", "yuv420p", "-movflags", "+faststart", `${outputBase}.mp4`]);
  run(["-i", gif, "-frames:v", "1", "-c:v", "libwebp", "-q:v", "78", `${outputBase}.webp`]);
  unlinkSync(gif);
}
