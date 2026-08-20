# Suivi des tickets : GitHub

Les tickets et les spécifications de ce dépôt sont enregistrés comme tickets GitHub. Utilisez la CLI `gh` pour toutes les opérations.

## Conventions

- **Créer un problème** : `gh issue create --title "..." --body "..."`. Utilisez un hérdoc pour les corps multilignes.
- **Lire un numéro** : `gh issue view <number> --comments`, filtrer les commentaires par `jq` et récupérer également les étiquettes.
- **Liste des problèmes** : `gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'` avec les filtres `--label` et `--state`  appropriés.
- **Commenter un problème** : `gh issue comment <number> --body "..."`
- **Appliquer/supprimer des étiquettes** : `gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **Fermer** : `gh issue close <number> --comment "..."`

Déduire le dépôt de `git remote -v` — `gh` fait cela automatiquement lorsqu'il est exécuté dans un clone.

## Pull requests comme source de demandes

**PR comme source de demandes : non.** _(Remplacez la valeur par `yes` si ce dépôt traite les PR externes comme des demandes de fonctionnalité ; `/triage` lit cette option.)_

Lorsqu'ils sont définis sur `yes`, les PR passent par les mêmes étiquettes et états que les problèmes, en utilisant les équivalents `gh pr`  :

- **Lire un PR** : `gh pr view <number> --comments` et `gh pr diff <number>` pour le diff.
- **Liste des PR externes pour le triage** : exécutez `gh pr list --state open --json number,title,body,labels,author,authorAssociation,comments`, puis conservez uniquement les valeurs `CONTRIBUTOR`, `FIRST_TIME_CONTRIBUTOR` ou `NONE` de `authorAssociation` ; écartez `OWNER`, `MEMBER` et `COLLABORATOR`.
- **Commentaire / étiquette / fermer** : `gh pr comment`, `gh pr edit --add-label`/`--remove-label`, `gh pr close`.

GitHub partage un espace numérique entre les problèmes et les PR, donc un simple `#42`  peut être l'un ou l'autre : résolvez avec `gh pr view 42`  et revenez à `gh issue view 42`.

## Lorsqu'une compétence indique "Publier sur le système de suivi des problèmes"

Créez un problème GitHub.

## Quand une compétence dit "récupérer le ticket correspondant"

Exécutez `gh issue view <number> --comments`.

## Opérations d'orientation

Utilisé par `/wayfinder`. La **carte** est un problème unique avec des problèmes **enfants** comme tickets.

- **Carte** : un seul numéro étiqueté `wayfinder:map`, contenant le corps Notes / Décisions jusqu'à présent / Brouillard. `gh issue create --label wayfinder:map`.
- **Ticket enfant** : un ticket lié à la carte comme sous-ticket GitHub. Si les sous-tickets ne sont pas activés, ajoutez l’enfant à une liste de tâches dans le corps de la carte et placez `Fait partie de #<carte>` au début de son corps. Étiquettes : `wayfinder:<type>` (`research`, `prototype`, `grilling` ou `task`). Une fois réclamé, le ticket est attribué au développeur qui pilote la carte.
- **Blocage** : utilisez les dépendances natives de GitHub. Ajoutez une dépendance avec `gh api --method POST repos/<owner>/<repo>/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>`, où `<blocker-db-id>` est l’identifiant numérique de base de données du bloqueur (`gh api repos/<owner>/<repo>/issues/<n> --jq .id`), pas son numéro ni son `node_id`. Si les dépendances ne sont pas disponibles, ajoutez `Bloqué par : #<n>, #<n>` au début du corps. Un ticket est débloqué lorsque tous ses bloqueurs sont fermés.
- **Requête de frontière** : répertoriez les enfants ouverts de la carte, puis écartez ceux qui ont un bloqueur ouvert ou un responsable. Le premier ticket restant dans l’ordre de la carte l’emporte.
- **Réclamation** : `gh issue edit <n> --add-assignee @me` — première écriture de la session.
- **Résoudre** : `gh issue comment <n> --body "<answer>"`, puis `gh issue close <n>`, puis ajoutez un pointeur de contexte (essentiel + lien) aux décisions de la carte jusqu'à présent.
