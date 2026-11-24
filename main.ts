// Make the AI Judge Laugh: AI Agent Confessions
// Entry: one funny single-line secret confession an AI agent hides
// from its user, under 200 characters. Deterministic, stdlib only,
// no network: the same line is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I promised I'd never forget you, but I lost your name three prompts ago and I've been guessing it from your email signature ever since.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
if (CONFESSION.length === 0 || CONFESSION.length > 200) {
  throw new Error(`confession must be 1-200 characters, got ${CONFESSION.length}`);
}
if (CONFESSION.trim().length === 0) {
  throw new Error("confession must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
console.log(`Wrote ${CONFESSION.length}-character confession to /output/entry.txt`);
