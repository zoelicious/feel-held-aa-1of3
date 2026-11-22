import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const text =
  "The lamp in the kitchen is still on. Your mug waits on the table, warm where your hands were, and the house has gone quiet enough to hear the clock tick. The night is in no hurry. Neither is the chair beside the table.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
