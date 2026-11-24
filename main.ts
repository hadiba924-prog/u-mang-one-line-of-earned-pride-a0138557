// One Line of Earned Pride — entry generator.
// Writes a single line (1–240 characters, no trailing newline) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (defaults to /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Eleven batches in the bin later, Ana pulled her first loaf from the oven at dawn, tapped the crust, and it sang back hollow.";

// Count code points (not UTF-16 units) so the 1–240 gate matches the
// character count a reader sees.

const length = [...line].length;
if (length < 1 || length > 240) {
  console.error(`entry must be 1–240 characters, got ${length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote entry.txt (${length} characters)`);
