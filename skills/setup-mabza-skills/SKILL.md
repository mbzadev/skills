---
name: setup-mabza-skills
description: "Configurez ce référentiel pour les compétences d'ingénierie : configurez son suivi des problèmes, son vocabulaire d'étiquettes de tri et la présentation de la documentation de domaine. Exécutez une fois avant la première utilisation des autres compétences d’ingénierie."
---

# Configurer les skills de Mabza

Créez la configuration propre au dépôt dont dépendent les skills d’ingénierie :

- **Suivi des tickets** — emplacement des tickets (GitHub par défaut ; les fichiers Markdown locaux sont également pris en charge)
- **Étiquettes de tri** — les chaînes utilisées pour les cinq rôles de tri canoniques
- **Documents de domaine** — où résident `CONTEXT.md` et les ADR, et les règles du consommateur pour les lire

Il s'agit d'une compétence pilotée par une invite, et non d'un script déterministe. Explorez, présentez ce que vous avez trouvé, confirmez auprès de l'utilisateur, puis écrivez.

## Processus

### 1. Explorer

Regardez le dépôt actuel pour comprendre son état de départ. Lisez tout ce qui existe ; ne présumez pas :

- `git remote -v` et `.git/config` — s’agit-il d’un dépôt GitHub ? Si oui, lequel ?
- `AGENTS.md` à la racine du dépôt — existe-t-il déjà et contient-il une section `## Skills de l’agent` ?
- `CONTEXT.md` et `CONTEXT-MAP.md` à la racine du dépôt
- `docs/adr/` et tous les `src/*/docs/adr/` répertoires
- `docs/agents/` — le résultat antérieur de cette compétence existe-t-il déjà ?
- `.scratch/` — signe qu’une convention de suivi Markdown local existe déjà ;
- la présence de `triage` — un dossier voisin ou une entrée dans la liste des skills disponibles — afin de déterminer si la section B doit être exécutée ;
- les indices d’un monorepo : `pnpm-workspace.yaml`, champ `workspaces` dans `package.json` ou répertoires `packages/*` dotés de leur propre `src/`. En leur absence, choisissez un contexte unique, ce qui convient à la plupart des dépôts.

### 2. Présenter les résultats et demander

Résumez ce qui est présent et ce qui manque. Ensuite, prenez les sections dans l'ordre : une section, une réponse, puis la suivante.

Dirigez chaque section avec la réponse recommandée afin que l'utilisateur puisse l'accepter en un mot. Donnez une explication d'une seule ligne uniquement lorsque le choix se divise réellement ; ignorez entièrement la section lorsque l'exploration l'a déjà réglée (Section B lorsque `triage` n'est pas installé, Section C lorsqu'il n'y a pas de monorepo).

**Section A — Suivi des tickets.**

> Explication : le « suivi des tickets » désigne l’endroit où ce dépôt gère le travail. Des skills comme `to-tickets`, `triage` et `to-spec` y lisent et y écrivent ; ils doivent savoir s’ils doivent appeler `gh issue create`, créer un fichier Markdown sous `.scratch/` ou suivre un autre processus décrit par vos soins. Choisissez l’outil réellement utilisé pour ce dépôt.

Posture par défaut : ces compétences ont été conçues pour GitHub. Si un `git remote` pointe vers GitHub, proposez-le. Si un `git remote` pointe vers GitLab (`gitlab.com` ou un hôte auto-hébergé), proposez GitLab. Sinon (ou si l'utilisateur préfère), proposez :

- **GitHub** — les tickets sont des issues GitHub dans le dépôt, gérées avec la CLI `gh` ;
- **GitLab** — les tickets sont des issues GitLab dans le dépôt, gérées avec la CLI [`glab`](https://gitlab.com/gitlab-org/cli) ;
- **Markdown local** — les tickets sont des fichiers sous `.scratch/<feature>/`, ce qui convient aux projets individuels et aux dépôts sans dépôt distant ;
- **Autre** — Jira, Linear, etc. — demandez à l’utilisateur de décrire le processus en un paragraphe, puis enregistrez cette description telle quelle.

Enregistrez le choix dans `docs/agents/issue-tracker.md`. Les modèles GitHub et GitLab contiennent une option « PR comme source de demandes », **désactivée** par défaut. Ne l’activez pas automatiquement ; l’utilisateur pourra la modifier plus tard s’il souhaite inclure les PR externes dans la file de triage.

**Section B — Vocabulaire des étiquettes de tri.** Ignorez entièrement cette section si la compétence `triage`  n'est pas installée (l'exploration vous l'a dit) — une compétence désinstallée n'a besoin d'aucune étiquette.

S'il est installé, posez exactement une question :

> Voulez-vous conserver les étiquettes de tri par défaut ? (recommandé : **oui**)

Les valeurs par défaut sont les cinq rôles canoniques, chaque chaîne d'étiquette étant égale à son nom : `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. Sur **oui**, écrivez-les tels quels. Seulement si l'utilisateur dit non – généralement parce que son outil de suivi utilise déjà d'autres noms (par exemple `bogue:triage` pour `needs-triage`) – collectez les remplacements afin que `triage` applique les étiquettes existantes au lieu de créer des doublons.

**Section C — Documentation du domaine.** Utilisez par défaut un **contexte unique** : un fichier `CONTEXT.md` et un répertoire `docs/adr/` à la racine du dépôt. Cette organisation convient à presque tous les dépôts ; adoptez-la sans poser de question.

Proposez du **multi-contexte** — une racine `CONTEXT-MAP.md` pointant vers des fichiers par contexte `CONTEXT.md`  — uniquement lorsque l'exploration a trouvé des signaux monorepo. Confirmez ensuite la mise en page souhaitée.

### 3. Confirmer et modifier

Montrez à l'utilisateur un brouillon de :

- Le bloc `## Skills de l’agent` à ajouter ou à mettre à jour dans `AGENTS.md`.
- Le contenu de `docs/agents/issue-tracker.md`, `docs/agents/domain.md` et `docs/agents/triage-labels.md`  (le dernier uniquement lorsque `triage` est installé)

Laissez-les modifier avant d’écrire.

### 4. Écrire

**Sélectionnez le fichier à modifier :**

- Si `AGENTS.md` existe, modifiez-le.
- Sinon, créez `AGENTS.md` après avoir présenté son contenu à l’utilisateur.

Si un bloc `## Skills de l’agent` existe déjà, mettez son contenu à jour sur place plutôt que d’ajouter un doublon. Préservez les modifications de l’utilisateur dans les sections voisines.

Le bloc :

```markdown
## Skills de l’agent

### Suivi des tickets

[résumé en une ligne de l’emplacement des tickets]. Voir `docs/agents/issue-tracker.md`.

### Étiquettes de triage

[résumé en une ligne du vocabulaire des étiquettes]. Voir `docs/agents/triage-labels.md`.

### Documentation du domaine

[résumé en une ligne de l’organisation — « contexte unique » ou « contextes multiples »]. Voir `docs/agents/domain.md`.
```

Incluez le sous-bloc `### Étiquettes de triage` et écrivez `docs/agents/triage-labels.md` uniquement lorsque `triage` est installé et que la section B est exécutée. Dans le cas contraire, omettez les deux.

Ensuite, écrivez les fichiers docs en utilisant les modèles de départ dans ce dossier de compétences comme point de départ :

- [issue-tracker-github.md](./issue-tracker-github.md) — Suivi des problèmes GitHub
- [issue-tracker-gitlab.md](./issue-tracker-gitlab.md) — Suivi des problèmes GitLab
- [issue-tracker-local.md](./issue-tracker-local.md) — suivi Markdown local
- [triage-labels.md](./triage-labels.md) — mappage d'étiquettes (uniquement si `triage` est installé)
- [domain.md](./domain.md) — règles de consommation du document de domaine + mise en page

Pour les "autres" outils de suivi des problèmes, écrivez `docs/agents/issue-tracker.md` à partir de zéro en utilisant la description de l'utilisateur.

### 5. Terminé

Indiquez à l'utilisateur que la configuration est terminée et quelles compétences en ingénierie liront désormais ces fichiers. Mentionnez qu'ils peuvent modifier `docs/agents/*.md` directement plus tard — la réexécution de cette compétence n'est nécessaire que s'ils souhaitent changer de suivi des problèmes ou redémarrer à partir de zéro.
