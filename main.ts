import { mkdirSync, writeFileSync } from "node:fs";

// One-line pickup line for a robot/AI, written for the
// "Robot Romance: One-Line Pickup Lines for AI" bounty.
// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only whitespace, a single line.
//
// The joke: gradient descent is how a model learns by sliding downhill
// toward its lowest error — so "falling a little further" every time
// you appear is both a crush and a training step. It dodges the worn
// battery/charging/reboot moves the judge's brief warns against.
const LINE =
  "Are you gradient descent? Because every time I see you, I fall a little further.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${chars} characters to ${outDir}/entry.txt`);
