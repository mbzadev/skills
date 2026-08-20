---
name: to-tickets
description: "Divisez un plan, une spécification ou la conversation en cours en tickets de type tranche verticale, chacun déclarant ses dépendances, puis publiez-les dans l’outil configuré : un fichier par ticket en local ou des liens de blocage natifs dans un véritable outil de suivi."
---

# Créer des tickets

Divisez un plan, une spécification ou une conversation en **tickets** constituant chacun une tranche verticale de type tranche verticale et déclarant les autres tickets qui le **bloquent**.

Le vocabulaire du suivi des tickets et des étiquettes de triage devrait déjà être disponible. Dans le cas contraire, exécutez `/setup-mabza-skills`.

## Processus

### 1. Recueillir le contexte

Travaillez à partir de tout ce qui se trouve déjà dans le contexte de la conversation. Si l'utilisateur transmet une référence (un chemin de spécification, un numéro de problème ou une URL) comme argument, récupérez-la et lisez son corps complet et ses commentaires.

### 2. Explorer la base de code, si nécessaire

Si vous n'avez pas encore exploré la base de code, faites-le pour comprendre l'état actuel du code. Les titres et les descriptions des tickets doivent utiliser le vocabulaire du glossaire de domaine du projet et respecter les ADR dans le domaine que vous touchez.

Repérez les préparations structurelles qui rendraient la mise en œuvre plus simple : « rendez le changement facile, puis effectuez le changement facile ».

### 3. Découper en tranches verticales

Divisez le travail en tickets de type **tranche verticale**.

<regles-tranche-verticale>

- Chaque tranche coupe un chemin étroit mais COMPLET à travers chaque couche (schéma, API, interface utilisateur, tests) - verticale, PAS une tranche horizontale d'une couche
- Une tranche terminée est démontable ou vérifiable seule
- Chaque tranche est dimensionnée pour tenir dans une seule nouvelle fenêtre contextuelle
- Toute préparation technique doit être effectuée en premier

</regles-tranche-verticale>

Indiquez pour chaque ticket ses **dépendances bloquantes** : les tickets qui doivent être terminés avant son démarrage. Un ticket sans bloqueur peut commencer immédiatement.

**Les refactorisations larges sont l’exception au découpage vertical.** Une **refactorisation large** est une modification mécanique — renommer une colonne ou changer le type d’un symbole partagé — dont le **rayon d’impact** s’étend à toute la base de code. Une seule modification peut alors casser des milliers de sites d’appel, sans qu’aucune tranche verticale puisse rester verte. Ne la forcez pas dans une tranche verticale ; séquencez-la selon le modèle **développement–contraction**. Développez d’abord : ajoutez la nouvelle forme à côté de l’ancienne afin de ne rien casser. Migrez ensuite les sites d’appel par lots adaptés au rayon d’impact — par package ou par répertoire — chaque lot faisant l’objet d’un ticket bloqué par l’étape de développement. Enfin, contractez : supprimez l’ancienne forme lorsqu’il ne reste plus aucun appelant, dans un ticket bloqué par tous les lots de migration. Si même les lots ne peuvent pas rester verts séparément, conservez la séquence mais utilisez une branche d’intégration commune, puis un ticket final d’intégration et de vérification.

### 4. Interroger l'utilisateur

Présentez la répartition proposée sous forme de liste numérotée. Pour chaque ticket, indiquez :

- **Titre** : nom descriptif court
- **Bloqué par** : quels autres tickets (le cas échéant) doivent être complétés en premier
- **Ce qu’il livre** : le comportement de bout en bout rendu fonctionnel par ce ticket

Demandez à l'utilisateur :

- La granularité vous semble-t-elle correcte ? (trop grossier / trop fin)
- Les dépendances sont-elles correctes ? Chaque ticket dépend-il uniquement de véritables bloqueurs ?
- Les tickets doivent-ils être fusionnés ou divisés davantage ?

Répétez jusqu'à ce que l'utilisateur approuve la répartition.

### 5. Publier les tickets dans l’outil configuré

Publiez les tickets approuvés selon l’outil configuré par `/setup-mabza-skills`. Leur contenu reste identique ; seule la représentation des dépendances change :

- **Fichiers locaux** → écrivez un fichier par ticket sous `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numéroté à partir de `01` dans l'ordre de dépendance (les bloqueurs en premier). Le « Bloqué par » de chaque fichier répertorie les numéros/titres dont il dépend. Utilisez le modèle de fichier par ticket ci-dessous : un ticket par fichier, jamais un seul fichier combiné.
- **Véritable outil de suivi — GitHub, Linear, etc.** → publiez un ticket à la fois dans l’ordre des dépendances, bloqueurs en premier, afin de pouvoir référencer leurs identifiants réels. Utilisez les relations natives de blocage ou de sous-ticket lorsqu’elles existent ; sinon, renseignez la section « Bloqué par ». Sauf instruction contraire, appliquez l’étiquette `ready-for-agent`, puisque ces tickets sont conçus pour être pris directement par un agent.

Travaillez la **frontière** : tout ticket dont les bloqueurs sont tous terminés. Pour une chaîne purement linéaire cela signifie de haut en bas.

Ne fermez ni ne modifiez aucun problème parent.

<modele-ticket-local>

# <NN> — <Titre du ticket>

**Ce qu’il faut construire :** le comportement de bout en bout que ce ticket rend fonctionnel, du point de vue de l’utilisateur, et non une liste d’implémentation couche par couche.

**Bloqué par :** les numéros ou titres des tickets qui conditionnent celui-ci, ou « Aucun — peut commencer immédiatement ».

**Statut :** prêt pour l'agent

- [ ] Critère d'acceptation 1
- [ ] Critère d'acceptation 2

</modele-ticket-local>

<modele-ticket>

## Parent

Une référence au ticket parent dans l’outil de suivi. Omettez cette section si la source n’était pas un ticket existant.

## Que construire

Le comportement de bout en bout que ce ticket rend fonctionnel du point de vue de l’utilisateur, et non une procédure d’implémentation couche par couche.

## Critères d'acceptation

- [ ] Critère 1
- [ ] Critère 2

## Bloqué par

- Une référence à chaque ticket bloquant, ou "Aucun — peut démarrer immédiatement".

</modele-ticket>

Dans les deux cas, évitez les chemins de fichiers ou les extraits de code spécifiques : ils deviennent rapidement obsolètes. Exception : si un prototype produit un extrait qui code une décision plus précisément que la prose (machine à états, réducteur, schéma, forme de type), insérez-le et notez brièvement qu'il provient d'un prototype. Réduisez les parties riches en décisions – pas une démo fonctionnelle, juste les éléments importants.
