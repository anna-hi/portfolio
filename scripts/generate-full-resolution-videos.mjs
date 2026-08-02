import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { tmpdir } from "node:os";
import ffmpegPath from "ffmpeg-static";

const publicDirectory = join(import.meta.dirname, "..", "public");
const temporaryDirectory = mkdtempSync(join(tmpdir(), "portfolio-gif-"));

function findVideos(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findVideos(path);
    return entry.name.endsWith(".webm") && !entry.name.endsWith(".full.webm") ? [path] : [];
  });
}

function sourceFromHistory(path) {
  const revisions = execFileSync("git", ["rev-list", "HEAD", "--", path], {
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
  })
    .trim()
    .split("\n");

  for (const revision of revisions) {
    try {
      return execFileSync("git", ["show", `${revision}:${path}`], {
        maxBuffer: 20 * 1024 * 1024,
        stdio: ["ignore", "pipe", "ignore"],
      });
    } catch {
      // The most recent revision records the GIF's deletion; continue to its source.
    }
  }
  throw new Error(`Unable to find ${path} in Git history.`);
}

function run(args) {
  const result = spawnSync(ffmpegPath, ["-y", ...args], { stdio: ["ignore", "ignore", "pipe"] });
  if (result.status !== 0) throw new Error(result.stderr.toString());
}

try {
  for (const webm of findVideos(publicDirectory)) {
    const outputBase = webm.slice(0, -5);
    const fullWebm = `${outputBase}.full.webm`;
    if (existsSync(fullWebm) && existsSync(`${outputBase}.full.mp4`)) continue;

    const source = `${relative(publicDirectory, outputBase)}.gif`;
    const temporaryGif = join(temporaryDirectory, `${relative(publicDirectory, outputBase).replaceAll("/", "-")}.gif`);
    writeFileSync(temporaryGif, sourceFromHistory(`public/${source}`));
    const filter = "fps=24";

    console.log(`Converting ${source}`);
    run(["-i", temporaryGif, "-vf", filter, "-c:v", "libvpx-vp9", "-crf", "28", "-b:v", "0", "-deadline", "good", "-cpu-used", "4", fullWebm]);
    run(["-i", temporaryGif, "-vf", filter, "-c:v", "libx264", "-crf", "22", "-preset", "slow", "-pix_fmt", "yuv420p", "-movflags", "+faststart", `${outputBase}.full.mp4`]);
  }
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
