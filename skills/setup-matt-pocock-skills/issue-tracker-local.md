# Suivi des tickets : Markdown local

Les problèmes et les spécifications de ce référentiel sont disponibles sous forme de fichiers markdown dans `.scratch/`.

## Conventions

- Une fonctionnalité par répertoire : `.scratch/<feature-slug>/`
- La spécification est `.scratch/<feature-slug>/spec.md`
- Les problèmes de mise en œuvre sont un fichier par ticket à `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numéroté à partir de `01` — jamais un seul fichier de tickets combiné
- L’état de triage est enregistré dans une ligne `Statut:` en haut de chaque fichier de ticket ; consultez `triage-labels.md` pour les valeurs possibles.
- Les commentaires et l’historique des conversations sont ajoutés au bas du fichier sous un en-tête `## Commentaires`.

## Lorsqu'une compétence indique "Publier sur le système de suivi des problèmes"

Créez un nouveau fichier sous `.scratch/<feature-slug>/`  (en créant le répertoire si nécessaire).

## Quand une compétence dit "récupérer le ticket correspondant"

Lisez le fichier au chemin référencé. L'utilisateur transmettra normalement directement le chemin ou le numéro de problème.

## Opérations d'orientation

Utilisé par `/wayfinder`. La **map** est un fichier avec un fichier **enfant** par ticket.

- **Carte** : `.scratch/<effort>/map.md` — les notes/décisions jusqu'à présent/corps de brouillard.
- **Ticket enfant** : `.scratch/<effort>/issues/NN-<slug>.md`, numéroté à partir de `01`, avec la question dans le corps. Une ligne `Type:` enregistre le type (`research`, `prototype`, `grilling` ou `task`) et une ligne `Statut:` contient `réclamé` ou `résolu`.
- **Blocage** : une ligne `Bloqué par : NN, NN` figure près du début. Le ticket est débloqué lorsque chaque fichier référencé porte le statut `résolu`.
- **Frontière** : analysez `.scratch/<effort>/issues/` pour trouver les fichiers ouverts, débloqués et non réclamés ; le premier numéro l’emporte.
- **Réclamation** : définissez `Statut: réclamé` et enregistrez avant tout travail.
- **Résolution** : ajoutez la réponse sous `## Réponse`, définissez `Statut: résolu`, puis ajoutez un pointeur de contexte — résumé et lien — aux décisions de `map.md`.
