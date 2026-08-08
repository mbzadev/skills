## Ce qu’il fait

`tdd`  crée une fonctionnalité ou corrige un test de bug en premier : un test qui échoue, puis juste assez de code pour le réussir, puis le comportement suivant. Il contient les normes qui font que cette boucle produit des tests qui valent la peine d'être conservés : ce qu'est un bon test, où vont les tests, à quoi servent les simulations et les trois anti-modèles qui ruinent discrètement une suite.

Il n'écrit aucun test sur une couture que vous n'avez pas acceptée au préalable. Avant qu'un test n'existe, il nomme les limites publiques auxquelles il a l'intention de tester et s'arrête pour votre confirmation, car l'effort de test est limité et c'est là que vous le dépensez sur les chemins critiques plutôt que sur chaque cas limite. L'autre chose à savoir est que `tdd` est une **référence**, pas un pilote. Il contient les règles de la boucle, et quelque chose d'autre (vous, ou [implement](https://aihero.dev/skills-implement)) exécute la [session](https://www.aihero.dev/ai-coding-dictionary/session) qui les applique.

## Quand l’utiliser

Tapez `/tdd`, ou l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) l'atteint automatiquement lorsqu'une tâche convient : créer une fonctionnalité ou corriger un test de bogue en premier, ou lorsque vous dites "refactor rouge-vert".

Atteignez-le lorsqu'il y a un comportement concret à construire, avec une entrée et une sortie observable, et que vous voulez des tests qui survivent à un refactor.

| Votre situation | Où aller |
| --- | --- |
| Un comportement avec des entrées et des sorties définies — une logique métier, un contrat de requête/réponse, une transformation, une validation | `tdd` |
| Le comportement n'est pas encore cerné | [to-spec](https://aihero.dev/skills-to-spec), qui accepte également les coutures de test avant qu'un code ne soit écrit |
| La question porte sur la forme de l’interface, pas sur les tests | [codebase-design](https://aihero.dev/skills-codebase-design) |
| Vous avez une [spécification](https://www.aihero.dev/ai-coding-dictionary/spec) ou des [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket) et souhaitez exécuter toute la construction | [implement](https://aihero.dev/skills-implement), qui pilote `tdd` ticket par ticket |
| Configuration, câblage, collage, annotations de type, délégation CRUD directe | Rien ici ne va bien — voir l'écart ouvert ci-dessous |

Cette dernière ligne correspond à une véritable lacune, pas à une préférence de style. Le skill décide *où* placer les coutures, mais pas *si* un changement mérite un test. Sur un changement dépourvu de source de vérité indépendante, le test risque de ne faire que reformuler l’implémentation : c’est l’anti-modèle tautologique que le skill cherche lui-même à éviter. Ce point fait l’objet du [ticket nº 746](https://github.com/mattpocock/skills/issues/746), toujours ouvert. En attendant sa résolution, ce jugement vous revient ou doit être défini dans votre fichier `AGENTS.md`.

## Prérequis

[codebase-design](https://aihero.dev/skills-codebase-design) doit être installé. Auparavant, `tdd` contenait ses propres conseils sur les modules profonds et la conception d’interfaces. Depuis la version 1.0, ces conseils appartiennent au skill partagé, dont `tdd` reprend le vocabulaire. Rien d’autre n’est requis : le skill est [sans état](https://www.aihero.dev/ai-coding-dictionary/stateless) et ne crée aucun fichier qui lui soit propre.

## La boucle et la couture sur laquelle elle passe

Trois mots portent cette compétence.

**Rouge-vert.** Écrivez d’abord un test qui échoue, puis juste assez de code pour le faire réussir. N’anticipez pas le test suivant. Il n’y a pas de phase de refactorisation : elle a été retirée en juin 2026, car les agents l’exécutaient rarement et la révision fonctionne mieux dans une session distincte. La refactorisation relève de [code-review](https://aihero.dev/skills-code-review).

**Tranche verticale.** Une couture, un test, une implémentation minimale, puis recommencez. Le premier cycle est une **balle traçante** qui prouve un chemin de bout en bout. À l’inverse, le découpage horizontal écrit tous les tests avant tout le code. Ces tests groupés vérifient un comportement *imaginé* et imposent une structure avant que l’implémentation soit comprise.

**Couture convenue à l'avance.** Une couture est la limite publique sur laquelle vous observez un comportement sans atteindre l'intérieur. La règle est absolue : pas de test sur une couture non confirmée. Dans la chaîne complète, les coutures sont convenues plus tôt, lors de [to-spec](https://aihero.dev/skills-to-spec) — "`/tdd`  doit fonctionner uniquement sur des coutures de test préalablement convenues,  `/code-review`  vérifie que seules les coutures de test convenues ont été utilisées." Invoqué seul,  `tdd`  vous le demande directement.

Les trois anti-modèles qu’il est écrit pour empêcher :

| Anti-modèle | Le dire |
| --- | --- |
| Couplé à la mise en œuvre | Le test s'interrompt lorsque vous renommez une fonction interne, même si le comportement n'a pas changé. Collaborateurs internes moqués, nombre d'appels affirmé, requêtes de base de données utilisées pour vérifier à la place de l'interface. |
| Tautologique | La valeur attendue est calculée de la même manière que le code la calcule, donc le test réussit par construction. Les valeurs attendues doivent provenir d'ailleurs : un littéral connu, un exemple concret, la spécification. |
| Tranchage horizontal | Un lot de tests a atterri avant toute implémentation. |

Les simulations concernent uniquement les limites du système : les API externes, le temps, le caractère aléatoire, parfois le système de fichiers ou la base de données. Pas vos propres modules.

## Questions fréquentes

**Pourquoi n'est-il pas refactorisé ? La description dit "rouge-vert-refactor".**

Parce que l'étape de refactorisation a été supprimée et la description ne l'a pas été. La suppression était délibérée : les agents ne l'ont pratiquement jamais fait, et il est préférable de conserver la mise en œuvre et la révision dans des sessions séparées. Que le résultat compte toujours comme TDD selon le livre importe moins que de savoir si la boucle produit un meilleur code. L'inadéquation entre la phrase de déclenchement et le corps est classée sous le numéro [numéro 589](https://github.com/mattpocock/skills/issues/589) et est toujours ouverte, donc "refactor rouge-vert" continue de fonctionner comme une phrase qui déclenche la compétence. Ce que vous obtenez est rouge → vert et refactorisé dans [code-review](https://aihero.dev/skills-code-review).

**Il m'a demandé de choisir une couture de test et je ne savais pas laquelle choisir.**

Il s'agit de la friction la plus signalée avec la compétence ([numéro 607](https://github.com/mattpocock/skills/issues/607)). L'invite répertorie les coutures candidates par leur nom uniquement, sans rien indiquer sur ce que chacune d'entre elles capture ou manque, vous choisissez donc entre les étiquettes. Aucun correctif n'a encore été livré. La solution pratique consiste à demander à l'agent quels sont les compromis avant de répondre : qu'est-ce qui manque à la couture au niveau du composant que la couture d'intégration rattrape, et à quel point est-elle plus lente. C'est aussi pourquoi la chaîne accepte les coutures à l'avant dans `to-spec`, où vous avez toute la fonctionnalité en vue plutôt qu'une seule invite.

**Il a écrit l'implémentation avant le test, même si la compétence indique rouge en premier.**

Cela arrive. Un utilisateur a poussé le [model](https://www.aihero.dev/ai-coding-dictionary/model) dessus et a obtenu une réponse inhabituellement honnête : "Je savais que la compétence disait 'un test à la fois, regardez-le échouer pour la bonne raison' - je l'ai lu. J'ai simplement repris mon habitude normale par défaut." La compétence est écrite pour vivre avec cela. Aucune instruction n'oblige un agent à se conformer à 100 % du temps, et forcer plus fort restreint la créativité de l'agent pour peu de gain : la boucle vaut la peine d'être exécutée même si elle n'est pas strictement suivie, car les résultats sont quand même globalement meilleurs. Si une stricte adhésion est importante pour une tranche particulière, surveillez la course plutôt que de vous fier aux compétences nécessaires pour la faire respecter.

**Devrait-il d'abord écrire des tests de navigateur ou de bout en bout ?**

Généralement non, et la compétence ne l’arrêtera pas. Un utilisateur a signalé que l'agent avait d'abord écrit un test Playwright, puis avait gravé une longue boucle en le réexécutant et en concluant que le *test* était interrompu pour une fonctionnalité qui n'existait pas encore. Configurez-le dans votre `AGENTS.md`. Les tests du navigateur sont suffisamment lents pour que la boucle de rétroaction rouge-vert cesse d'être rentabilisée ; déclarez dans votre dépôt `AGENTS.md` qu'ils sont écrits après le fonctionnement du comportement.

**Est-ce que `/tdd` remplace `/implement`, ou le `/do-work` du cours ?**

Non. `/tdd` documente la méthodologie ; `/implement` est une boucle travail → feedback → commit très simple et constitue le remplacement direct de `/do-work`. Le cours est unique `/do-work` l'étape est maintenant divisée en `/implement`, `/tdd` et `/code-review`. Si vous demandez lequel présenter contre un ticket, la réponse est presque toujours `/implement`.

**Où sont passés les modules profonds et les conseils de conception d'interface ?**

Ces conseils ont rejoint [codebase-design](https://aihero.dev/skills-codebase-design) dans la version 1.0, afin que plusieurs skills partagent le même vocabulaire. `refactoring.md` a disparu au même moment : la refactorisation relève désormais de [code-review](https://aihero.dev/skills-code-review), qui porte aussi la référence aux mauvaises odeurs de Fowler.

**Est-il au courant de mes autres tickets ?**

Non. Exécuté contre un ticket, il proposera volontiers un travail appartenant à un ticket frère, car il n'a pas de vue sur le reste du graphique du problème ([numéro #129](https://github.com/mattpocock/skills/issues/129)). La position de Matt est que ce n'est pas le travail de  `tdd`. Transmettre la spécification à côté du ticket est utile ; En premier lieu, le bon dimensionnement des tickets aide davantage.

## Indicateurs de réussite

- Il s'arrête et nomme les coutures sur lesquelles il a l'intention de tester, et attend avant qu'un fichier de test n'existe.
- Un test apparaît, devient rouge, obtient juste assez de code pour réussir, et alors seulement le test suivant apparaît – pas un lot de tests suivi d'un lot de code.
- Les noms des tests sont lus comme des capacités ("l'utilisateur peut payer avec un panier valide"), et non comme des éléments internes ("la caisse appelle paymentService.process").
- Les valeurs attendues dans les assertions sont des littéraux que vous pouvez retracer jusqu'à la spécification, et non des valeurs recalculées de la même manière que le code les calcule.
- Renommer une fonction interne ne casse rien dans la suite.
- Les simulations n'apparaissent qu'aux frontières externes - l'API de paiement, l'horloge - et jamais autour de vos propres modules.

## Où il s’inscrit

`tdd` est le moteur à l'intérieur de l'étape de construction de la chaîne principale, plutôt qu'une étape en soi :

```txt
grill-with-docs → to-spec → to-tickets → implement → code-review
```

[to-spec](https://aihero.dev/skills-to-spec) fait approuver les coutures de test en amont, [implement](https://aihero.dev/skills-implement) pilote ensuite `tdd` ticket par ticket et [code-review](https://aihero.dev/skills-code-review) vérifie que seules les coutures convenues ont été utilisées ; la refactorisation lui appartient désormais. [codebase-design](https://aihero.dev/skills-codebase-design) fournit le vocabulaire commun des coutures et des modules profonds employé par `tdd`. Vous pouvez aussi invoquer `tdd` seul lorsqu’un comportement concret doit être construit sans spécification complète. Si vous hésitez sur le bon skill, [ask-matt](https://aihero.dev/skills-ask-matt) vous oriente.
