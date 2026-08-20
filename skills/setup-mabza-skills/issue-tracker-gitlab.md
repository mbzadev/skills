# Suivi des tickets : GitLab

Les tickets et les spécifications de ce dépôt sont enregistrés comme issues GitLab. Utilisez la CLI [`glab`](https://gitlab.com/gitlab-org/cli) pour toutes les opérations.

## Conventions

- **Créer un problème** : `glab issue create --title "..." --description "..."`. Utilisez un hérdoc pour les descriptions multilignes. Passez `--description -` pour ouvrir un éditeur.
- **Lire un numéro** : `glab issue view <number> --comments`. Utilisez `-F json` pour une sortie lisible par machine.
- **Liste des problèmes** : `glab issue list -F json` avec les filtres `--label`  appropriés.
- **Commenter un problème** : `glab issue note <number> --message "..."`. GitLab appelle les commentaires « notes ».
- **Appliquer/supprimer des étiquettes** : `glab issue update <number> --label "..."` / `--unlabel "..."`. Plusieurs étiquettes peuvent être séparées par des virgules ou en répétant l'indicateur.
- **Fermer** : `glab issue close <number>`. `glab issue close` n'accepte pas de commentaire de clôture, alors publiez d'abord l'explication avec `glab issue note <number> --message "..."`, puis fermez.
- **Demandes de fusion** : GitLab appelle les PR "demandes de fusion". Utilisez `glab mr create`, `glab mr view`, `glab mr note`, etc. — la même forme que `gh pr ...` avec `mr` en place de `pr` et `note`/`--message` à la place de `comment`/`--body`.

Déduire le dépôt de `git remote -v` — `glab` fait cela automatiquement lorsqu'il est exécuté dans un clone.

## Demandes de fusion comme source de demandes

**MR comme source de demandes : non.** _(Remplacez la valeur par `yes` si ce dépôt traite les demandes de fusion externes comme des demandes de fonctionnalité ; `/triage` lit cette option.)_

Lorsqu'ils sont définis sur `yes`, les MR passent par les mêmes étiquettes et états que les problèmes, en utilisant les équivalents `glab mr`  :

- **Lire un MR** : `glab mr view <number> --comments` et `glab mr diff <number>` pour le diff.
- **Liste des MR externes pour le tri** : `glab mr list -F json`, puis conservez uniquement les MR dont l'auteur n'est pas membre/propriétaire du projet (le MR d'un contributeur, pas le travail en cours d'un responsable).
- **Commentaire / étiquette / fermer** : `glab mr note`, `glab mr update --label`/`--unlabel`, `glab mr close`.

Contrairement à GitHub, GitLab numérote les problèmes et les MR séparément, donc `#42` est sans ambiguïté une fois que vous savez de quelle surface le responsable parle.

## Lorsqu'une compétence indique "Publier sur le système de suivi des problèmes"

Créez un problème GitLab.

## Quand une compétence dit "récupérer le ticket correspondant"

Exécutez `glab issue view <number> --comments`.

## Opérations d'orientation

Utilisé par `/wayfinder`. La **carte** est un problème unique avec des problèmes **enfants** comme tickets.

- **Carte** : un seul numéro étiqueté `wayfinder:map`, contenant le corps Notes / Décisions jusqu'à présent / Brouillard. `glab issue create --label wayfinder:map`. (Sur les niveaux GitLab avec des épopées natives, une épopée peut contenir la carte à la place ; un problème étiqueté fonctionne partout.)
- **Ticket enfant** : un ticket portant `Fait partie de #<carte>` au début de sa description et l’étiquette `wayfinder:<type>` (`research`, `prototype`, `grilling` ou `task`). Une fois réclamé, il est attribué au développeur qui pilote la carte.
- **Blocage** : utilisez le lien natif de GitLab avec l’action rapide `/blocked_by #<n>`, publiée comme note (`glab issue note <child> --message "/blocked_by #<blocker>"`). Sur l’offre gratuite ou si cette fonction n’est pas disponible, ajoutez `Bloqué par : #<n>, #<n>` au début de la description. Un ticket est débloqué lorsque tous ses bloqueurs sont fermés.
- **Requête de frontière** : limitez `glab issue list -F json` aux enfants de la carte, puis écartez ceux qui possèdent un bloqueur ouvert ou un responsable. Le premier ticket restant dans l’ordre de la carte l’emporte.
- **Réclamation** : `glab issue update <n> --assignee @me` — première écriture de la session.
- **Résoudre** : `glab issue note <n> --message "<answer>"`, puis `glab issue close <n>`, puis ajoutez un pointeur de contexte (essentiel + lien) aux décisions de la carte jusqu'à présent.
