# Bloc d’installation canonique

Le dépôt est destiné à Codex. Toute documentation d’installation doit reprendre la procédure ci-dessous et ne doit pas inventer de commande d’installation directe.

## Installation disponible

Pour copier des skills modifiables dans un projet avec `skills.sh` :

```bash
npx skills@latest add mbzadev/skills
```

Choisissez Codex comme cible, puis sélectionnez les skills voulus. Incluez `setup-matt-pocock-skills` si vous utilisez les flux d’ingénierie qui dépendent de la configuration du dépôt.

Pour n’installer qu’un skill :

```bash
npx skills@latest add mbzadev/skills --skill=<nom>
```

Pour mettre à jour un skill copié :

```bash
npx skills@latest update <nom>
```

## Plugin Codex natif

Le manifeste `.codex-plugin/plugin.json` prépare le dépôt pour une publication dans une place de marché Codex. Tant que cette publication n’a pas eu lieu, la méthode d’installation prise en charge reste `skills.sh`.

Après l’installation ou la mise à jour d’un plugin publié, ouvrez une nouvelle conversation afin que Codex redécouvre ses skills.

Les pages sous `docs/` ne répètent pas ces commandes lorsque le site affiche déjà son propre module d’installation.
