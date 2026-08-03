import fs from "node:fs";
import path from "node:path";

describe("image viewer shimmer", () => {
  it("uses the portfolio warm-white and light-grey palette", () => {
    const source = fs.readFileSync(
      path.resolve(
        process.cwd(),
        "src/app/projects/_components/image-viewer.tsx",
      ),
      "utf8",
    );
    const shimmerSource = source.slice(
      source.indexOf("const shimmer"),
      source.indexOf("const toBase64"),
    );

    expect(shimmerSource.match(/#C8C8C8/g)).toHaveLength(3);
    expect(shimmerSource.match(/#FBF8EC/g)).toHaveLength(1);
    expect(shimmerSource).not.toMatch(/#FFF|#FF1|#333/);
  });
});
