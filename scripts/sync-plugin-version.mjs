#!/usr/bin/env node
// Copie la version de package.json dans .codex-plugin/plugin.json.
// S’exécute dans le cadre de `npm run version`, juste après `changeset version`.
// Avec --check, ne modifie rien et renvoie le code 1 si les versions diffèrent.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const pluginPath = join(repo, ".codex-plugin", "plugin.json");

const { version } = JSON.parse(readFileSync(join(repo, "package.json"), "utf8"));
const source = readFileSync(pluginPath, "utf8");
const plugin = JSON.parse(source);

if (plugin.version === version) {
  console.log(`la version ${version} de plugin.json est déjà synchronisée`);
  process.exit(0);
}

if (process.argv.includes("--check")) {
  console.error(
    `la version de plugin.json est ${plugin.version}, celle de package.json est ${version}. Exécutez \`node scripts/sync-plugin-version.mjs\`.`,
  );
  process.exit(1);
}

// Réécrit uniquement la ligne de version afin de préserver l’ordre des clés et le formatage.
const updated = source.replace(
  /("version"\s*:\s*")[^"]*(")/,
  `$1${version}$2`,
);

if (JSON.parse(updated).version !== version) {
  console.error(`Impossible de trouver un champ de version à remplacer dans ${pluginPath}.`);
  process.exit(1);
}

writeFileSync(pluginPath, updated);
console.log(`version de plugin.json : ${plugin.version} -> ${version}`);
