// Liest Inhalte aus dem Ordner /content.
// Charta §9: Der Code enthaelt keine sichtbaren Texte, er liest sie.
import fs from "node:fs";
import path from "node:path";

export function getContent(name) {
  const file = path.join(process.cwd(), "content", `${name}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
