// SPDX-License-Identifier: MIT
// One-line office joke for make.fun's "The Funniest Office Joke, Judged Head to Head".
// Writes a single joke about office life to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "My performance review said I need to be more visible, so I changed my Slack photo to my boss's face — now everyone replies to me instantly, and HR wants a meeting about it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
