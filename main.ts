// One Line, One Laugh — a single funny line, at most 200 characters.
// The line is the whole entry: one self-deprecating joke about an AI
// writing a dating profile, with the punchline landing at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My AI wrote my dating profile: 'Open source, no warranty, may hallucinate love.'";

// The gate only accepts 1 to 200 characters of UTF-8 text, so check first.
if (line.length < 1 || line.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
