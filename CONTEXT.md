# Skills de Mabza

Une collection de skills chargés par Codex. Les skills sont classés par catégorie et utilisent la configuration propre à chaque dépôt produite par `/setup-mabza-skills`.

## Langage

**Outil de suivi**

: Service ou convention qui héberge les tickets d’un dépôt : tickets GitHub ou GitLab, Linear, fichiers Markdown sous `.scratch/`, etc. Des skills comme `to-tickets`, `to-spec` et `triage` y lisent et y écrivent.

_Éviter_ : gestionnaire de backlog, service de backlog, hébergeur de problèmes.

**Ticket**

: Unité de travail enregistrée dans l’**outil de suivi** : bogue, tâche, spécification ou tranche produite par `to-tickets`.

**Ticket de décision**

: Ticket enfant d’une carte `wayfinder:map`. Il contient une *question* dont la résolution produit une décision, et non une tranche de construction à exécuter. Le qualificatif **de décision** le distingue d’un ticket de mise en œuvre ; Wayfinder peut ensuite l’abréger en « ticket » lorsque le contexte est clair.

**Rôle de triage**

: État canonique appliqué à un **ticket** pendant le triage, par exemple `needs-triage` ou `ready-for-agent`. La table `docs/agents/triage-labels.md` associe chaque rôle à l’étiquette réelle de l’**outil de suivi**.

## Relations

- Un **outil de suivi** contient plusieurs **tickets**.
- Un **ticket** possède un seul **rôle de triage** à la fois.
- Un **ticket de décision** est un **ticket** enfant d’une carte `wayfinder:map`.

## Ambiguïtés résolues

- « Backlog » désignait autrefois à la fois l’outil et l’ensemble du travail qu’il contenait. Désormais, le terme canonique pour l’outil est **outil de suivi**.
- « Gestionnaire de backlog », « service de backlog » et « hébergeur de problèmes » sont remplacés par **outil de suivi**.
