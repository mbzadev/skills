## Ce qu’il fait

`to-tickets` prend un plan, une [spec](https://www.aihero.dev/ai-coding-dictionary/spec) ou la conversation dans laquelle vous vous trouvez, et le divise en un ensemble de **[tickets](https://www.aihero.dev/ai-coding-dictionary/ticket)** sur votre outil de suivi des problèmes. Chaque ticket déclare ses **bords de blocage** — les autres tickets qui doivent se terminer avant de pouvoir commencer.

Chaque ticket est une **tranche verticale** : un chemin étroit mais complet à travers chaque couche du changement (schéma, API, interface utilisateur, tests) qui peut être démontré seul dès son arrivée. C’est la contrainte qui fait qu’il se comporte différemment de la manière évidente de diviser le travail, qui consiste à couper une couche à la fois et à l’intégrer à la fin. Il dimensionne également chaque ticket pour qu'il tienne dans une seule nouvelle [fenêtre contextuelle](https://www.aihero.dev/ai-coding-dictionary/context-window), car la chose qui récupérera le ticket est une [session](https://www.aihero.dev/ai-coding-dictionary/session) qui n'a jamais vu vos spécifications.

## Quand l’utiliser

Vous l'invoquez en tapant `/to-tickets` — l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne l'atteindra pas tout seul.

| Où êtes-vous | Utilisez |
| --- | --- |
| Vous rencontrez un problème de spécifications et la build s'étend sur plusieurs sessions | `/to-tickets`, ou `/to-tickets #<spec_issue>` |
| Le plan est uniquement dans la conversation, jamais écrit | `/to-tickets` lit le fil directement — aucune spécification n'est nécessaire |
| L'ensemble du changement tient dans une seule fenêtre contextuelle | [implement](https://aihero.dev/skills-implement) — ignorer les tickets |
| Rien n'est encore décidé | [grill-with-docs](https://aihero.dev/skills-grill-with-docs), puis [to-spec](https://aihero.dev/skills-to-spec) |
| Une carte [wayfinder](https://aihero.dev/skills-wayfinder) a été effacée | [to-spec](https://aihero.dev/skills-to-spec) d'abord, pour réduire la carte, puis `/to-tickets` |

Les tickets produits par  `to-tickets`  sont prêts pour l'agent par construction. N'exécutez pas [triage](https://aihero.dev/skills-triage) dessus - le tri est destiné au travail arrivé de quelqu'un d'autre.

## Prérequis

`to-tickets` publie dans un outil de suivi, donc [setup-mabza-skills](https://aihero.dev/skills-setup-mabza-skills) doit en avoir configuré un pour ce dépôt, ainsi que le vocabulaire des étiquettes de triage. Les deux types fonctionnent : un vrai outil de suivi comme GitHub ou Linear, ou des fichiers Markdown locaux sous `.scratch/`, qui sont pris en charge dès le départ.

## Des tranches verticales, pas des couches

Une tranche **horizontale** livre une couche technique du changement. Rien ne fonctionne tant que toutes les couches ne sont pas terminées, et les critères d'acceptation de chaque ticket dépendent alors du travail d'un autre ticket. Une tranche **verticale** traverse au contraire toutes les couches sur un chemin étroit : elle peut être vérifiée seule et fournit déjà un comportement utilisable.

C’est la règle que les gens enfreignent le plus souvent, et les conséquences sont bien documentées. Une équipe a exécuté une pile de 26 tickets découpés par couche (corpus, producteur, agrégateur, sélecteur) et a obtenu environ vingt agents par ticket fermé, dont environ les trois quarts ont été retravaillés. Leur propre autopsie a retracé chaque classe d'échec jusqu'au découpage horizontal plutôt qu'aux implémentations.

Deux étapes précèdent toute publication. `to-tickets` repère d’abord la préparation technique — « faciliter le changement avant de réaliser le changement fonctionnel » — et les vérifications qui doivent fonctionner en premier. Il vous présente ensuite la découpe sous forme de liste numérotée et vous demande si la granularité est correcte, si les dépendances bloquantes sont réelles et si certains tickets doivent être fusionnés ou séparés. Rien n’est envoyé à l’outil de suivi avant votre accord : c’est le moment idéal pour corriger le plan.

## Dépendances bloquantes

Les bords sont la pointe de l’artefact. Ils lisent de deux manières selon l’outil de suivi :

| Traqueur | Où vivent les bords | Comment les travailler |
| --- | --- | --- |
| Markdown local | Texte dans un fichier par ticket sous `.scratch/<feature>/issues/<NN>-<slug>.md`, bloqueurs numérotés en premier | De haut en bas, à la main |
| Un vrai outil de suivi (GitHub, Linear) | Liens de blocage natifs ou sous-problèmes là où l’outil de suivi les contient | Tout ticket dont les bloqueurs sont terminés se trouve sur la **frontière** et peut être saisi |

Les bords vivent dans le ticket de toute façon. Le médium décide seulement si quelque chose peut agir sur eux en parallèle. `to-tickets` produit l'artefact ; le gérer – une session à la fois ou une flotte – est votre travail, pas celui de la compétence.

## L’exception des refactorisations transversales

Une forme de changement échappe à la règle de la tranche verticale. Un **refactorisation transversal** est une modification mécanique unique — renommer une colonne ou retaper un symbole partagé — dont le rayon d’impact couvre toute la base de code. Une seule étape peut alors casser des milliers de sites d’appel, sans qu’une tranche verticale puisse rester verte.

`to-tickets` séquences qui se transforment en **expansion-contraction** à la place :

- **Développer** — ajoutez le nouveau formulaire à côté de l'ancien pour que rien ne se casse.
- **Migrer** — déplacez les sites d'appel par lots dimensionnés par rayon d'explosion (par package, par répertoire), un ticket par lot, chacun bloqué par l'extension. CI reste vert car l'ancien formulaire existe toujours.
- **Contrat** — supprimez l'ancien formulaire une fois qu'il ne reste plus d'appelant, dans un ticket bloqué par chaque lot de migration.

Là où même les lots ne peuvent pas rester verts seuls, ils partagent une branche d'intégration et bloquent tous un ticket final d'intégration et de vérification. Le vert n'est promis que là-bas.

## Questions fréquentes

**Il a produit douze tickets pour un changement de trois lignes.**

La décomposition excessive est la friction la plus signalée sur cette compétence, et elle est cohérente entre les praticiens : le [modèle](https://www.aihero.dev/ai-coding-dictionary/model) utilise par défaut les unités atomiques et perd le regroupement qui leur donnerait un sens. L'étape du quiz existe exactement pour cela : demandez-lui de fusionner, et elle le fera. La réponse la plus profonde est que les tickets ont un plancher : si l'ensemble du changement tient dans une seule fenêtre contextuelle, vous n'avez pas du tout besoin de cette compétence. Accédez directement à [implement](https://aihero.dev/skills-implement).

**Les tickets sont sortis un par couche : tous les schémas dans un, toutes les API dans un autre.**

C'est l'échec contre lequel la règle de la tranche verticale est écrite, et la compétence le produit encore parfois. Découvrez-le à l'étape du quiz en posant une question par ticket : que puis-je démontrer une fois cela fait ? Un ticket sans réponse est une tranche horizontale. Certaines personnes ajoutent une ligne « chemin de démonstration » à chaque ticket pour cette raison et signalent que cela pousse le modèle vers une décomposition verticale.

**Sur GitHub, les tickets n'ont pas été créés en tant que sous-problèmes du problème de spécification.**

Connu et non corrigé. Le problème a été signalé sur une douzaine d’exécutions et plusieurs modèles, [notamment dans le ticket 554](https://github.com/mbzadev/skills/issues/554). `gh` le prend en charge nativement depuis la v2.94 avec `gh issue create --parent <n>`, puis `gh issue edit <parent> --add-sub-issue <n>`. Tant que le modèle d’outil de suivi ne privilégie pas ces relations, reliez manuellement les tickets parents après l’exécution.

** « Bloqué par » a été écrit dans le corps du problème au lieu d'un véritable lien de blocage.**

Même classe de problème, [rapporté dans le numéro 513](https://github.com/mbzadev/skills/issues/513), où l'agent est allé jusqu'à affirmer que GitHub n'a aucune relation de blocage native. C'est le cas — `gh issue create --blocked-by 12,15`. Étant donné que les bloqueurs sont publiés en premier, leurs numéros sont toujours disponibles au moment de la création. Le corps du texte est censé être la solution de secours pour les trackers sans bord natif, et non la valeur par défaut.

**Où vont les tickets locaux ? Les notes de la v1.1 indiquaient un niveau racine `tickets.md`.**

Ils l’ont fait, et c’était un bogue : un seul fichier partagé s’exécutait également lorsque des agents parallèles lui écrivaient. Le mode local écrit désormais un fichier par ticket sous `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, dans l'ordre des dépendances, correspondant à la disposition du modèle de suivi local déjà décrit. Le préfixe `NN`  est un véritable identifiant de ticket, donc `/implement 03`  fonctionne au lieu de retaper un long titre.

**Il n'arrêtait pas de tronquer lorsqu'il essayait de lire mes spécifications.**

Une spécification très volumineuse peut dépasser proprement ce qu'un problème d’outil de suivi renvoie, et il n'y a pas de copie locale sur laquelle s'appuyer - l'agent brûle ensuite les [appels d'outil](https://www.aihero.dev/ai-coding-dictionary/tool-call) récupérant des morceaux et n'atteint jamais la fin. Ne pas [effacer](https://www.aihero.dev/ai-coding-dictionary/clearing) ou [compact](https://www.aihero.dev/ai-coding-dictionary/compaction) entre `/to-spec` et `/to-tickets`. Exécutez-les dans la même fenêtre contextuelle et la spécification n'a jamais besoin d'être récupérée.

**Les critères d’acceptation ne vérifiaient rien : certains étaient déjà satisfaits avant le début du travail.**

Le modèle demande des critères et ne dit rien quant à savoir s'ils peuvent échouer, c'est ce qui se produit. Trois formes reviennent : un critère déjà vrai au niveau de la validation de base, un critère qui ne peut être satisfait que par le travail détenu par un autre ticket, et un critère qui reformule la demande plutôt que de dériver de l'artefact. Le découpage vertical empêche la plupart de cela - une tranche qui offre un comportement qui n'existait pas auparavant est rouge à la base du commit par construction - mais la vérification vaut la peine d'être effectuée à la main. Pour chaque critère, nommez l'observation qui le montrerait faux et confirmez qu'elle échoue au moment de la validation à partir de laquelle l'implémenteur commence.

**Les tickets sont publiés. Comment puis-je les exécuter réellement ?**

La compétence s'arrête à l'artefact et il n'y a pas de mode de répartition automatique. La répartition est manuelle : regardez le tableau, comptez les tickets sans bloqueurs ouverts et ouvrez autant de sessions d'agent. Un ticket par nouveau contexte, effacé entre eux. Sachez que [implement](https://aihero.dev/skills-implement) ne ferme ni ne coche le ticket de manière fiable une fois terminé, sur GitHub ou lors d'un suivi Markdown local, vous devez donc mettre à jour l'état du ticket.

## Indicateurs de réussite

- Chaque ticket a une réponse à la question "Que puis-je faire une démonstration une fois cela fait ?" – et la réponse est le comportement, pas une couche.
- La liste vous revient numérotée, avec une ligne "Bloqué par" sur chacune, avant que quoi que ce soit ne soit publié.
- Le ticket en haut n'a pas de bloqueur et peut être démarré immédiatement.
- Rien dans le corps d'un ticket n'est un chemin de fichier ou un numéro de ligne, à l'exception d'un extrait produit par un prototype.
- Chaque ticket se lit comme quelque chose qu'une nouvelle session pourrait terminer sans vous dans la salle.
- Le préparation technique, là où il en a trouvé, se trouve au début de la commande plutôt que mélangé aux tickets de fonctionnalité.

## Où il s’inscrit

`to-tickets` est une étape dans la chaîne de construction principale :

```txt
grill-with-docs → to-spec → to-tickets → implement → code-review
```

En amont se trouve [to-spec](https://aihero.dev/skills-to-spec), ce qui lui donne une spécification établie à découper - conservez les deux dans une seule fenêtre contextuelle ininterrompue. En aval se trouve [implement](https://aihero.dev/skills-implement), qui crée un ticket par nouvelle session, pilotant [tdd](https://aihero.dev/skills-tdd) pour les tests et se terminant par [code-review](https://aihero.dev/skills-code-review). Lorsque vous ne savez pas quelle compétence ou quel flux vous convient, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous dirige.
