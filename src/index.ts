import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Recreate __dirname in ESM context
const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "..", "data", "factions", "adeptus-custodes.json");

try {
  const raw = readFileSync(filePath, "utf-8");
  const faction = JSON.parse(raw);

  console.log("Imperial Dataslate Engine — Dataslate Loaded");
  console.log(`Fazione: ${faction.faction}`);
  console.log(`Regole caricate: ${faction.rules.length}`);
} catch (err) {
  console.error("Errore nel caricamento del dataslate:", err);
}
