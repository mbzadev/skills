---
name: scaffold-exercises
description: "Créez des arborescences d’exercices avec sections, problèmes, solutions et explications qui passent le lint. À utiliser lorsque l’utilisateur souhaite créer des exercices, préparer des squelettes d’exercice ou ajouter une section de cours."
---

# Création de structures d’exercices

Créez des structures de répertoires d'exercices qui réussissent `pnpm ai-hero-cli internal lint`, puis validez avec `git commit`.

## Nom du répertoire

- **Sections** : `XX-section-name/` à l'intérieur `exercises/` (par exemple, `01-retrieval-skill-building`)
- **Exercices** : `XX.YY-exercise-name/` à l'intérieur d'une section (par exemple, `01.03-retrieval-with-bm25`)
- Numéro de section = `XX`, numéro d'exercice = `XX.YY`
- Les noms sont en tiret (minuscules, tirets)

## Variantes d'exercices

Chaque exercice nécessite au moins un de ces sous-dossiers :

- `problem/` - espace de travail étudiant avec TODO
- `solution/` - implémentation de référence
- `explainer/` - matériel conceptuel, pas de TODO

Lors de la création du squelette, utilisez `explainer/` par défaut, sauf indication contraire du plan.

## Fichiers requis

Chaque sous-dossier (`problem/`, `solution/`, `explainer/`) a besoin d'un `readme.md` qui :

- N'est **pas vide** (doit avoir un contenu réel, même une seule ligne de titre fonctionne)
- N'a aucun lien brisé

Lors de la création du squelette, ajoutez un fichier `readme.md` minimal avec un titre et une description :

```md
# Titre de l’exercice

Description ici
```

Si le sous-dossier contient du code, il lui faut également un `main.ts` de plus d’une ligne. Pour un simple squelette, un exercice uniquement documentaire suffit.

## Flux de travail

1. **Analyser le plan** - extraire les noms de sections, les noms d'exercices et les types de variantes
2. **Créer des répertoires** - `mkdir -p` pour chaque chemin
3. **Créer les fichiers README minimaux** — un `readme.md` avec un titre dans chaque dossier de variante
4. **Exécuter lint** - `pnpm ai-hero-cli internal lint` pour valider
5. **Corrigez les erreurs** — recommencez jusqu’à ce que le lint réussisse.

## Résumé des règles de lint

Le linter (`pnpm ai-hero-cli internal lint`) vérifie :

- Chaque exercice a des sous-dossiers (`problem/`, `solution/`, `explainer/`)
- Au moins un des `problem/`, `explainer/` ou `explainer.1/` existe
- `readme.md` existe et n'est pas vide dans le sous-dossier principal
- Aucun fichier `.gitkeep`
- Aucun fichier `speaker-notes.md`
- Aucun lien brisé dans les fichiers Lisez-moi
- Aucune commande `pnpm run exercise` dans les fichiers `readme.md`
- `main.ts` obligatoire par sous-dossier sauf s'il s'agit d'un fichier Lisez-moi uniquement

## Exercices de déplacement/renommage

Lors de la renumérotation ou du déplacement d'exercices :

1. Utilisez `git mv` (et non `mv`) pour renommer les répertoires - préserve l'historique de git
2. Mettre à jour le préfixe numérique pour maintenir l'ordre
3. Réexécutez le lint après les déplacements.

Exemple :

```bash
git mv exercises/01-retrieval/01.03-embeddings exercises/01-retrieval/01.04-embeddings
```

## Exemple : créer un squelette à partir d’un plan

Étant donné un plan comme :

```
Section 05 : construction d’un skill de mémoire
- 05.01 Introduction à la mémoire
- 05.02 Mémoire à court terme (explainer + problem + solution)
- 05.03 Mémoire à long terme
```

Créer :

```bash
mkdir -p exercises/05-memory-skill-building/05.01-introduction-to-memory/explainer
mkdir -p exercises/05-memory-skill-building/05.02-short-term-memory/{explainer,problem,solution}
mkdir -p exercises/05-memory-skill-building/05.03-long-term-memory/explainer
```

Créez ensuite les fichiers `readme.md` minimaux :

```
exercises/05-memory-skill-building/05.01-introduction-to-memory/explainer/readme.md -> "# Introduction à la mémoire"
exercises/05-memory-skill-building/05.02-short-term-memory/explainer/readme.md -> "# Mémoire à court terme"
exercises/05-memory-skill-building/05.02-short-term-memory/problem/readme.md -> "# Mémoire à court terme"
exercises/05-memory-skill-building/05.02-short-term-memory/solution/readme.md -> "# Mémoire à court terme"
exercises/05-memory-skill-building/05.03-long-term-memory/explainer/readme.md -> "# Mémoire à long terme"
```
