---
name: code-review
description: "Examinez les changements depuis un point fixe — commit, branche, balise ou base de fusion — selon deux axes : Normes, pour vérifier les conventions documentées du dépôt, et Spécification, pour vérifier la fidélité au ticket ou au document d’origine. Les deux revues sont menées par des sous-agents parallèles et présentées côte à côte."
---

Examinez selon deux axes le diff entre `HEAD` et un point fixe fourni par l’utilisateur :

- **Normes** — le code respecte-t-il les conventions documentées de ce dépôt ?
- **Spécification** — le code met-il fidèlement en œuvre le ticket ou la spécification d’origine ?

Les deux axes fonctionnent comme des **sous-agents parallèles** afin de ne pas polluer le contexte de chacun, puis cette compétence regroupe leurs résultats.

La configuration de l’outil de suivi doit déjà exister : exécutez `/setup-matt-pocock-skills` si `docs/agents/issue-tracker.md` est absent.

## Processus

### 1. Fixer le point de comparaison

Utilisez comme point fixe la référence fournie par l’utilisateur : SHA de commit, nom de branche, balise, `main`, `HEAD~5`, etc. S’il n’en a indiqué aucune, demandez-la.

Capturez la commande diff une fois : `git diff <fixed-point>...HEAD`  (trois points, donc la comparaison est avec la base de fusion). Notez également la liste des commits via `git log <fixed-point>..HEAD --oneline`.

Avant d'aller plus loin, confirmez que le point fixe est résolu (`git rev-parse <fixed-point>`) et que le diff n'est pas vide. Une mauvaise référence ou un diff vide devrait échouer ici – pas à l’intérieur de deux sous-agents parallèles.

### 2. Identifiez la source des spécifications

Recherchez la spécification d'origine, dans cet ordre :

1. Références présentes dans les messages de commit — `#123`, `Closes #45`, GitLab `!67`, etc. — à récupérer selon le processus décrit dans `docs/agents/issue-tracker.md`.
2. Un chemin que l'utilisateur a passé en argument.
3. Un fichier de spécifications sous `docs/`, `specs/` ou `.scratch/` correspondant au nom de branche ou à la fonctionnalité.
4. Si rien n'est trouvé, demandez à l'utilisateur où se trouve la spécification. S'ils disent qu'il n'y en a pas, le sous-agent **Spécification** ignorera et signalera « aucune spécification disponible ».

### 3. Identifier les sources des normes

Tout ce qui dans le dépôt documente la façon dont le code doit être écrit, comme `CODING_STANDARDS.md` ou `CONTRIBUTING.md`.

En plus de tous les documents du dépôt, l'axe Normes porte toujours la **ligne de base d'odeur** ci-dessous - un ensemble fixe d'odeurs de code Fowler (_Refactoring_, ch.3) qui s'applique même lorsqu'un dépôt ne documente rien. Deux règles le lient :

- **Le dépôt est prioritaire.** Une norme documentée du dépôt l’emporte toujours. Si elle autorise explicitement une pratique que la liste de référence signalerait, ne remontez pas ce résultat.
- **Toujours une question de jugement.** Chaque odeur est une heuristique étiquetée ("possible envie de fonctionnalité"), jamais une violation grave - et, comme toute norme ici, ignorez tout ce que les outils imposent déjà.

Chaque odeur indique *ce que c'est* → *comment réparer* ; comparez-le avec la différence :

- **Nom mystérieux** — une fonction, une variable ou un type dont le nom ne révèle pas ce qu'il fait ou contient. → renommez-le ; si aucun nom honnête ne vient, le design est trouble.
- **Code dupliqué** — la même forme logique apparaît dans plusieurs morceaux ou fichiers dans la modification. → extraire la forme partagée, appeler-la des deux.
- **Envie de fonctionnalité** — une méthode utilise davantage les données d’un autre objet que les siennes ; déplacez-la vers les données qu’elle convoite.
- **Groupes de données** — les mêmes champs ou paramètres circulent toujours ensemble, comme un type qui ne demande qu’à exister. → Regroupez-les dans un type unique et transmettez-le.
- **Obsession des primitives** — une valeur primitive ou une chaîne remplace un concept de domaine qui mérite son propre type. → Donnez au concept un petit type dédié.
- **Commutations répétées** — la même cascade `switch`/`if` sur le même type se reproduit tout au long du changement. → remplacer par du polymorphisme, ou une carte partagée par les deux sites.
- **Chirurgie au fusil de chasse** — un changement logique impose des modifications dispersées dans de nombreux fichiers du diff. → Rassemblez ce qui change dans un seul module.
- **Changement divergent** — un fichier ou un module est modifié pour plusieurs raisons indépendantes. → divisé pour que chaque module change pour une raison.
- **Généralité spéculative** — abstraction, paramètres ou hooks ajoutés pour les besoins que la spécification n'a pas. → supprimez-le ; inline jusqu'à ce qu'un réel besoin se manifeste.
- **Chaînes de messages** — longue `a.b().c().d()` navigation dont l'appelant ne devrait pas dépendre. → masquer la marche derrière une méthode sur le premier objet.
- **Intermédiaire inutile** — une classe ou une fonction ne fait que déléguer. → Supprimez-la et appelez directement la véritable cible.
- **Héritage refusé** — une sous-classe ou une implémentation ignore ou remplace l’essentiel de ce dont elle hérite. → Supprimez l’héritage et utilisez la composition.

### 4. Générer les deux sous-agents en parallèle

**Invite de sous-agent standard**

 – inclure :

- La commande de diff complète et la liste des commits.
- La liste des fichiers sources des normes que vous avez trouvés à l'étape 3, **plus la référence d'odeur de l'étape 3** collée dans son intégralité — le sous-agent n'y a aucun autre accès.
- Le brief suivant : « Produisez un rapport par fichier ou fragment lorsque c’est pertinent. (a) Pour chaque violation d’une norme documentée, citez le fichier et la règle. (b) Pour chaque mauvaise odeur de référence, nommez-la et citez le fragment concerné. Distinguez les violations certaines des éléments qui relèvent du jugement. Les normes du dépôt priment sur la liste de référence. Ignorez ce que les outils automatisés imposent déjà. Limite : 400 mots. »

**Invite de spécification du sous-agent**

 – inclure :

- La commande de diff et la liste des commits.
- Le chemin ou le contenu récupéré de la spécification.
- Le brief suivant : « Produisez un rapport couvrant (a) les exigences absentes ou partielles, (b) les comportements ajoutés sans avoir été demandés — dérive de périmètre — et (c) les exigences apparemment présentes mais incorrectement mises en œuvre. Citez la ligne de spécification associée à chaque résultat. Limite : 400 mots. »

Si la spécification est manquante, ignorez le sous-agent Spécification et notez-le dans le rapport final.

### 5. Synthétiser les résultats

Présentez les deux rapports sous les rubriques `## Normes` et `## Spécification` , textuellement ou légèrement nettoyées. Ne **pas** fusionner ou reclasser les résultats – les deux axes sont délibérément séparés (voir _Pourquoi deux axes_).

Terminez par un résumé d'une ligne : le total des résultats par axe et le pire problème _au sein de chaque axe_ (le cas échéant). Ne choisissez pas un seul gagnant sur tous les axes – c’est le reclassement que la séparation vise à empêcher.

## Pourquoi deux axes

Un changement peut réussir un axe et échouer sur l’autre :

- Code qui suit toutes les normes mais implémente la mauvaise chose → **Les normes sont réussies, les spécifications échouent.**
- Code qui fait exactement ce que le problème demande mais enfreint les conventions du projet → **Réussite des spécifications, échec des normes.**

Les signaler séparément empêche un axe de masquer l’autre.
