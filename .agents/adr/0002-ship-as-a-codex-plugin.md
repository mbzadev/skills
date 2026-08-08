# Distribuer le dépôt comme plugin Codex natif

Les skills de ce dépôt peuvent être installés individuellement avec `skills.sh`, mais le dépôt doit également fournir une distribution Codex gérée et installable comme un ensemble cohérent.

## Décision

Le dépôt est distribué comme plugin Codex natif au moyen de `.codex-plugin/plugin.json`.

Le manifeste utilise `"skills": "./skills/"`. Le format Codex accepte un chemin unique et exige que chaque enfant immédiat de ce répertoire soit un skill doté d’un `SKILL.md`. Les skills sont donc stockés à plat sous `skills/`, sans modifier leur nom.

Les catégories conservent un rôle éditorial sous `catalog/` :

- `engineering/` et `productivity/` sont stables, documentées et promues ;
- `misc/` est disponible sans être promue ;
- `in-progress/` est disponible en bêta ;
- `deprecated/` ne doit contenir aucun `SKILL.md` actif.

Le `README.md` racine et les pages sous `docs/` présentent uniquement les catégories promues. Le manifeste Codex ne maintient pas de liste dupliquée : `./skills/` reste la source de vérité exécutable, tandis que `catalog/` classe les entrées pour la documentation.

## Invariants

- Le nom du plugin correspond au nom du dossier racine : `skills`.
- La version de `.codex-plugin/plugin.json` reste synchronisée avec celle de `package.json`.
- Chaque skill conserve son fichier `agents/openai.yaml` pour les métadonnées d’interface et la politique d’invocation Codex.
- Chaque dossier immédiat sous `skills/` contient un `SKILL.md` ; les index de catégories restent sous `catalog/`.
- Le plugin est validé avec le validateur fourni par le skill système `plugin-creator` avant publication.
- Les instructions permanentes du dépôt résident dans `AGENTS.md`.
