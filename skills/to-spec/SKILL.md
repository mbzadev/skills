---
name: to-spec
description: "Transformez la conversation en cours en spécification et publiez-la dans le système de suivi des problèmes du projet : aucun nouvel entretien, seulement une synthèse de ce qui a déjà été décidé."
---

Cette compétence s’appuie sur la conversation en cours et sur votre compréhension actuelle de la base de code pour produire une spécification. N’interrogez PAS l’utilisateur : synthétisez uniquement ce qui a déjà été décidé.

Le vocabulaire du suivi des problèmes et des étiquettes de triage doit déjà être configuré. Dans le cas contraire, exécutez `/setup-mabza-skills`.

## Processus

1. Explorez le dépôt pour comprendre l’état actuel de la base de code, si ce n’est pas déjà fait. Employez partout le vocabulaire du glossaire de domaine et respectez les ADR qui concernent la zone modifiée.

2. Identifiez les coutures par lesquelles la fonctionnalité sera testée. Préférez les coutures existantes aux nouvelles et choisissez la plus haute possible. Si une nouvelle couture est indispensable, proposez-la au niveau le plus élevé raisonnable. Moins la base de code compte de coutures, mieux c’est ; l’idéal est de n’en avoir qu’une.

Faites confirmer à l’utilisateur que ces coutures correspondent bien à ses attentes.

3. Rédigez la spécification à partir du modèle ci-dessous, puis publiez-la dans l’outil de suivi du projet. Ajoutez l’étiquette `ready-for-agent` : aucun triage supplémentaire n’est nécessaire.

<modele-specification>

## Énoncé du problème

Le problème auquel l'utilisateur est confronté, du point de vue de l'utilisateur.

## Solution

La solution au problème, du point de vue de l'utilisateur.

## Récits utilisateurs

Une liste numérotée et exhaustive de récits utilisateur. Chaque récit suit ce format :

1. En tant que <acteur>, je veux <fonctionnalité>, afin de <bénéfice>

<exemple-recit-utilisateur>
1. En tant que client d'une banque mobile, je souhaite voir le solde de mes comptes, afin de pouvoir prendre des décisions plus éclairées concernant mes dépenses
</exemple-recit-utilisateur>

Cette liste de récits utilisateurs doit être complète et couvrir tous les aspects de la fonctionnalité.

## Décisions de mise en œuvre

Une liste des décisions de mise en œuvre déjà prises. Elle peut notamment couvrir :

- Les modules qui seront créés ou modifiés
- Les interfaces des modules qui seront modifiés
- Clarifications techniques du développeur
- Décisions architecturales
- Modifications du schéma
- Contrats API
- Interactions spécifiques

N'incluez PAS de chemins de fichiers ou d'extraits de code spécifiques. Ils risquent de devenir très vite obsolètes.

Exception : si un prototype produit un extrait qui code une décision plus précisément que la prose (machine à états, réducteur, schéma, forme de type), insérez-le dans la décision pertinente et notez brièvement qu'il provient d'un prototype. Réduisez les parties riches en décisions – pas une démo fonctionnelle, juste les éléments importants.

## Décisions de test

Une liste des décisions de test déjà prises. Elle doit notamment préciser :

- Une description de ce qui constitue un bon test (tester uniquement le comportement externe, pas les détails d'implémentation)
- Quels modules seront testés
- Les exemples existants dans la base de code, c’est-à-dire les formes de tests similaires à réutiliser

## Hors de portée

Une description des éléments qui sont hors de portée de cette spécification.

## Remarques supplémentaires

Toute autre note sur la fonctionnalité.

</modele-specification>
