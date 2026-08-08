---
name: to-spec
description: "Transformez la conversation en cours en spécification et publiez-la dans le système de suivi des problèmes du projet : pas d'interview, juste une synthèse de ce dont vous avez déjà discuté."
---

Cette compétence prend en compte le contexte de conversation actuel et la compréhension de la base de code et produit une spécification. N'interviewez PAS l'utilisateur - synthétisez simplement ce que vous savez déjà.

Le vocabulaire du suivi des problèmes et des étiquettes de triage aurait dû vous être fourni – run `/setup-matt-pocock-skills` sinon.

## Processus

1. Explorez le dépôt pour comprendre l'état actuel de la base de code, si ce n'est pas déjà fait. Utilisez le vocabulaire du glossaire de domaine du projet tout au long de la spécification et respectez tous les ADR dans le domaine que vous touchez.

2. Esquissez les coutures auxquelles vous allez tester la fonctionnalité. Les coutures existantes doivent être préférées aux nouvelles. Utilisez la couture la plus haute possible. Si de nouvelles coutures sont nécessaires, proposez-les au point le plus haut possible. Moins il y a de coutures dans la base de code, mieux c'est - le nombre idéal est un.

Vérifiez auprès de l'utilisateur que ces coutures correspondent à ses attentes.

3. Rédigez la spécification à l'aide du modèle ci-dessous, puis publiez-la dans le système de suivi des problèmes du projet. Appliquez l'étiquette de tri `ready-for-agent`  - pas besoin de triage supplémentaire.

<modele-specification>

## Énoncé du problème

Le problème auquel l'utilisateur est confronté, du point de vue de l'utilisateur.

## Solution

La solution au problème, du point de vue de l'utilisateur.

## Récits utilisateurs

Une longue liste numérotée de récits utilisateurs. Chaque récit suit ce format :

1. En tant que <acteur>, je veux <fonctionnalité>, afin de <bénéfice>

<exemple-recit-utilisateur>
1. En tant que client d'une banque mobile, je souhaite voir le solde de mes comptes, afin de pouvoir prendre des décisions plus éclairées concernant mes dépenses
</exemple-recit-utilisateur>

Cette liste de récits utilisateurs doit être complète et couvrir tous les aspects de la fonctionnalité.

## Décisions de mise en œuvre

Une liste des décisions de mise en œuvre qui ont été prises. Cela peut inclure :

- Les modules qui seront construits/modifiés
- Les interfaces des modules qui seront modifiés
- Clarifications techniques du développeur
- Décisions architecturales
- Modifications du schéma
- Contrats API
- Interactions spécifiques

N'incluez PAS de chemins de fichiers ou d'extraits de code spécifiques. Ils risquent de devenir très vite obsolètes.

Exception : si un prototype produit un extrait qui code une décision plus précisément que la prose (machine à états, réducteur, schéma, forme de type), insérez-le dans la décision pertinente et notez brièvement qu'il provient d'un prototype. Réduisez les parties riches en décisions – pas une démo fonctionnelle, juste les éléments importants.

## Décisions de test

Une liste des décisions de test qui ont été prises. Inclure :

- Une description de ce qui constitue un bon test (tester uniquement le comportement externe, pas les détails d'implémentation)
- Quels modules seront testés
- Art antérieur pour les tests (c'est-à-dire des types de tests similaires dans la base de code)

## Hors de portée

Une description des éléments qui sont hors de portée de cette spécification.

## Remarques supplémentaires

Toute autre note sur la fonctionnalité.

</modele-specification>
