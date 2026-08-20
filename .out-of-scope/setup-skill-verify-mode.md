# Mode de vérification/contrôle pour `setup-mabza-skills`

Ce projet n'ajoutera pas de mode dédié de vérification/contrôle (ou une skill de vérification séparée) pour `setup-mabza-skills`.

## Pourquoi cela dépasse le périmètre

Une seconde skill — ou un `--verify` drapeau — pour vérifier si les `docs/agents/*.md` artifacts correspondent toujours au schéma de la seed-template dupliquerait le travail que la skill setup gère déjà dans la conversation.

Le flux prévu consiste à **exécuter `/setup-mabza-skills` et à lui demander de vérifier la configuration actuelle**. Le skill est piloté par des instructions en langage naturel ; le mainteneur peut donc le limiter à une vérification — « ne réécrivez rien, comparez mes fichiers existants aux modèles actuels et signalez les écarts » — sans ajouter de chemin de code distinct. Une option dédiée ou un skill voisin fragmenterait une fonctionnalité déjà exprimable en langage naturel.

Garder la gestion de la configuration à une seule skill évite également le coût de maintenance de deux skills qui dérivent l'une de l'autre lorsque les seed templates évoluent.

## Demandes antérieures

- #106 — Demande de fonctionnalité : mode de vérification/contrôle pour setup-mabza-skills
