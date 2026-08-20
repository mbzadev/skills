## Ce qu'il fait

Il optimise ce qui se passe après l'inscription : activation des utilisateurs, première session, time-to-value et parcours de configuration. Le point de départ n'est jamais le flux lui-même mais sa définition de l'activation — l'action unique qui corrèle le plus fortement avec la rétention, trouvée en comparant ce que font les utilisateurs retenus et les autres. Tout le parcours est ensuite jugé à l'aune de cette boussole : chaque étape entre l'inscription et cet aha moment est une candidate à la suppression.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/onboarding`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill lorsque les inscriptions existent mais que les utilisateurs ne collent pas au produit — activation faible, configuration inachevée, empty states qui découragent. Pour optimiser le flux qui précède (le formulaire d'inscription lui-même), utilisez plutôt [signup](https://aihero.dev/skills-signup) ; pour les séquences d'e-mails au long cours, [emails](https://aihero.dev/skills-emails).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question, et seules les informations manquantes sont demandées. Une analyse de cohortes entre utilisateurs retenus et partis, quand elle existe, alimente directement la définition de l'aha moment.

## La boussole : l'aha moment

Le principe directeur tient en une phrase : faire plutôt que montrer, et le time-to-value avant tout. Le premier diagnostic consiste donc à nommer l'événement d'activation (créer un premier projet, voir un premier rapport, réaliser une première transaction selon le produit), puis à mesurer le funnel étape par étape pour concentrer l'effort sur la plus forte chute.

Le reste de la boîte à outils est connexe à cette boussole :

| Élément | Rôle dans le parcours |
|---|---|
| Approche des 30 premières secondes | produit d'abord, configuration guidée ou valeur d'abord — chacun avec son risque |
| Checklist d'onboarding | 3 à 7 éléments triés par valeur, pour les configurations multi-étapes |
| Empty states | des opportunités d'onboarding, jamais des impasses |
| E-mails déclenchés | renforcent les actions in-app au lieu de les dupliquer |
| Utilisateurs bloqués | détection par inactivité, puis réengagement gradué jusqu'au contact humain |

## Questions fréquentes

**Par où commencer quand tout le flux semble à revoir ?**
Par la funnel : mesurez l'abandon à chaque étape entre l'inscription et l'activation, et attaquez la plus grosse chute. Répartir l'effort uniformément sur un parcours dilue l'impact.

**Faut-il une visite guidée (tour) du produit ?**
Seulement si l'interface est réellement complexe, et jamais plus de 3 à 5 étapes, fermables à tout instant. Un tour n'est pas de l'activation : faire la chose bat apprendre ce qu'elle est.

**Les e-mails d'onboarding ne doublonnent-ils pas le parcours in-app ?**
Ils doivent au contraire le prolonger : déclenchés par les actions réelles de l'utilisateur (bienvenue, configuration inachevée à 24 h et 72 h, activation atteinte), ils ramènent vers le produit avec un CTA précis.

## Indicateurs de réussite

- Le livrable commence par une définition explicite de l'événement d'activation avant toute recommandation de flux.
- La funnel annoncée chiffre l'abandon étape par étape et désigne la priorité.
- Les recommandations distinguent la première session (un seul objectif) du reste du parcours.
- Les utilisateurs bloqués ont un plan de réengagement gradué, pas seulement un e-mail de rappel.

## Où il s'inscrit

Étape de la chaîne `cro → signup → onboarding` : une fois le compte créé, ce skill raccourcit le chemin jusqu'à la valeur — et prépare le terrain pour [paywalls](https://aihero.dev/skills-paywalls), qui convertit au payant une fois l'aha moment atteint. Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
