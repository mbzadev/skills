## Ce qu’il fait

`to-spec` transforme la conversation que vous venez d'avoir en **[spec](https://www.aihero.dev/ai-coding-dictionary/spec)** et la publie dans votre outil de suivi des problèmes en tant que numéro unique.

Il ne vous interroge pas. Lorsque vous l’invoquez, les décisions sont déjà prises ; il synthétise donc ce qui est connu — à partir du fil de discussion, de la base de code, de votre `CONTEXT.md` et de vos ADR — au lieu d’ouvrir une nouvelle série de questions. La spécification consigne les décisions existantes ; elle ne sert pas à en prendre de nouvelles.

## Quand l’utiliser

Vous l'invoquez en tapant `/to-spec` — l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne l'atteindra pas tout seul.

Utilisez ce skill lorsque la version est trop grande pour un seul agent [session](https://www.aihero.dev/ai-coding-dictionary/session) et doit survivre en étant divisée en plusieurs. C'est tout le déclencheur :

| Où êtes-vous | Utilisez |
| --- | --- |
| Vous n'avez encore rien décidé | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) premier |
| Décidé, et le travail s'adapte à une [fenêtre contextuelle](https://www.aihero.dev/ai-coding-dictionary/context-window) | [implement](https://aihero.dev/skills-implement) — ignorer la spécification |
| C'est décidé, et le travail s'étale sur plusieurs sessions | `/to-spec`, puis [to-tickets](https://aihero.dev/skills-to-tickets) |
| Une carte [wayfinder](https://aihero.dev/skills-wayfinder) a été effacée | `/to-spec #<map_issue>` |

## Prérequis

`to-spec`  publie la spécification en tant que problème, donc [setup-mabza-skills](https://aihero.dev/skills-setup-mabza-skills) doit d'abord avoir configuré un outil de suivi et le vocabulaire des étiquettes de tri pour ce dépôt. Les deux types fonctionnent : un vrai outil de suivi comme GitHub, ou des fichiers Markdown locaux sous `.scratch/`, qui sont pris en charge dès le départ.

## La spécification est un enregistrement de décision

La spécification existe car les fenêtres contextuelles se terminent. Tout ce que vous avez réglé en [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) — la forme de la solution, les choix que vous avez argumentés, ce que vous avez délibérément refusé — se trouve dans une conversation qui est sur le point d'être éclaircie. La spécification est ce qui survit à cela.

Donc ça ne valide rien, et ça ne décide rien. Il capture ce qui a été décidé, dans le vocabulaire propre à votre projet, afin qu'une nouvelle session puisse reprendre le travail sans que vous le réexpliquiez. Tout ce que la spécification affirme et que vous n'avez jamais dit est un défaut.

## Coutures avant la prose

Avant d'écrire un mot,  `to-spec` esquisse les **coutures** sur lesquelles la fonctionnalité sera testée et les vérifie avec vous. Il préfère les coutures qui existent déjà aux nouvelles et prend la couture la plus haute possible – le nombre idéal pour un changement est un.

Ces coutures convenues accompagnent ensuite la spécification. [tdd](https://aihero.dev/skills-tdd) ne travaille que sur des coutures approuvées, tandis que [code-review](https://aihero.dev/skills-code-review) compare le diff à la spécification et signale toute couture ajoutée sans accord préalable. Le lien entre les étapes passe par ce document ; c’est précisément pourquoi cette discussion doit avoir lieu ici, au lieu d’être repoussée jusqu’à la mise en œuvre.

## Questions fréquentes

**Où est passé `/to-prd`  ?**

Il s’agit de ce même skill, renommé dans la version 1.1. « Spécification » est désormais le terme unique dans tout le flux de travail et l’ancien nom `to-prd` n’existe plus : réinstallez le skill sous son nouveau nom. Le vocabulaire repose maintenant sur deux notions : la spécification décrit la destination et les décisions qui la fixent ; les [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket) décrivent les étapes d’exécution qui y conduisent. Si la direction change, supprimez les tickets inachevés et conservez la spécification.

**Pourquoi la spécification reçoit-elle le label `ready-for-agent`  ? Je ne veux pas qu'un agent l'implémente.**

L'étiquette signifie « aucun autre tri n'est nécessaire » : le document est suffisamment complet pour qu'un agent puisse travailler à partir de celui-ci. Il s'agit d'une désignation d'entrée, pas d'un ordre de travail. Mais si vous exécutez des agents [AFK](https://www.aihero.dev/ai-coding-dictionary/afk) qui interrogent `ready-for-agent`, cette distinction ne leur est pas visible, et ils essaieront volontiers de créer l'intégralité de la spécification en une seule fois au lieu de récupérer les tranches de ticket. Il s’agit de l’aspect rugueux le plus signalé de cette compétence. Jusqu'à ce qu'elle change, excluez explicitement la spécification parent dans l'invite de votre agent AFK, ou supprimez l'étiquette une fois `/to-tickets` exécutée.

**Pourquoi ne pas passer directement du grill au `/to-tickets` et ignorer les spécifications ?**

Souvent, vous devriez le faire : la spécification ne fait son effet que sur le travail multisession. Ce qui est payant, c'est que les tickets sont jetables et que la spécification ne l'est pas : chaque ticket est dimensionné pour une nouvelle fenêtre de contexte et est supprimé ou fermé, tandis que la spécification reste le seul endroit où se trouve le raisonnement qui les sous-tend. Sur un changement en une seule session qui ne vous rapporte rien, et vous avez payé une étape de synthèse supplémentaire où le [modèle](https://www.aihero.dev/ai-coding-dictionary/model) peut dériver. Allez griller → `/implement`.

**Je viens de terminer une carte Wayfinder. Avec quoi dois-je le nourrir ?**

Le problème principal de la carte — `/to-spec #<map_issue>`, pas les tickets de décision individuels. [wayfinder](https://aihero.dev/skills-wayfinder) produit des décisions plutôt que des livrables, dispersés sur une carte ;  `to-spec` est l'étape qui les regroupe en un seul document constructible. Boucler la carte directement dans `/implement`  jette cet effondrement.

**Est-ce que les spécifications doivent être examinées par moi ou est-ce uniquement pour l'agent ?**

Principalement pour l'agent, et cela se lit de cette façon : complet, dense, riche en références. Les parties qui valent le détour sont les coutures et la section hors de portée, car ce sont les deux endroits où une mauvaise décision est la moins chère à prendre et la plus coûteuse à découvrir plus tard. Lire le tout de bout en bout est un véritable reproche que les gens ont, et il n'y a pas de mode résumé : la réponse honnête est que si la spécification vous surprend, la cuisson était trop superficielle, pas la spécification trop longue.

**Dois-je conserver les spécifications gelées une fois les tickets démarrés, ou laisser l'agent les réécrire ?**

Rien ne le maintient synchronisé, donc en pratique, c'est un instantané de ce que vous saviez à ce moment-là, et il devient obsolète la première fois que la mise en œuvre vous apprend quelque chose. Traitez-le comme un produit jetable une fois l'œuvre expédiée. Les artefacts destinés à y survivre sont votre `CONTEXT.md` et vos ADR — si quelque chose appris lors de la mise en œuvre mérite de durer, il a sa place là-bas, pas dans une spécification modifiée.

**Mon travail est une refactorisation ou une limite de module, pas une fonctionnalité. Le modèle convient-il ?**

Moins bien, et c’est une limitation connue. Le modèle s'appuie fortement sur les user stories, ce qui n'est pas la bonne forme pour le travail architectural : vous finissez par écrire des histoires que personne n'a demandées autour de décisions qui concernent réellement les interfaces et les invariants. Appuyez-vous plutôt sur les sections de décisions de mise en œuvre et de décisions de test, et laissez les appels architecturaux durables atterrir en tant qu'ADR via [grill-with-docs](https://aihero.dev/skills-grill-with-docs) plutôt que d'essayer de faire en sorte que la spécification les porte.

**Est-ce qu'il vérifiera l’outil de suivi pour le travail associé, ou citera les ADR qu'il respecte ?**

Non aux deux. Il lit et respecte les ADR couvrant la zone qu'il touche, mais il ne les relie pas et il ne recherche pas dans l’outil de suivi les problèmes qui se chevauchent avant de les rédiger - de sorte qu'une spécification peut tranquillement dupliquer le travail déjà déposé par quelqu'un. Recherchez d'abord l’outil de suivi vous-même si la zone est occupée.

**`/to-tickets` Je n'ai pas pu lire mes spécifications - elles n'arrêtaient pas de tronquer.**

Des spécifications très volumineuses peuvent dépasser ce qu'un problème d’outil de suivi va servir proprement, et il n'y a pas de copie locale sur laquelle s'appuyer. Le correctif est l'hygiène du contexte : ne pas [clear](https://www.aihero.dev/ai-coding-dictionary/clearing) ou [compact](https://www.aihero.dev/ai-coding-dictionary/compaction) entre `/to-spec` et `/to-tickets`. Exécutez-les dans la même fenêtre et la spécification n'aura jamais besoin d'être récupérée du tout.

## Indicateurs de réussite

- Il commence à écrire plutôt que de vous poser une nouvelle série de questions.
- Il vous fait les coutures avant d'écrire, et en propose le moins possible.
- Cela revient dans les noms de votre projet, et non dans le passe-partout générique de gestion de produit.
- Chaque décision qu'il contient est une décision dont vous vous souviendrez. Rien n'a été inventé pour remplir une section.
- La section hors champ contient des éléments réels : les éléments que vous avez refusés sont généralement les lignes les plus utiles de la page.

## Où il s’inscrit

`to-spec` est une étape dans la chaîne de build principale, et uniquement sur la branche multi-session de celle-ci :

```txt
grill-with-docs → to-spec → to-tickets → implement → code-review
Ses voisins en amont sont [grill-with-docs](https://aihero.dev/skills-grill-with-docs), qui établit les décisions à conserver, et [wayfinder](https://aihero.dev/skills-wayfinder), dont la carte terminée rejoint cette chaîne. En aval, [to-tickets](https://aihero.dev/skills-to-tickets) découpe la spécification en tickets autonomes pour que [implement](https://aihero.dev/skills-implement) puisse les réaliser. Lorsque vous ne savez pas quelle compétence ou quel flux utiliser, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous oriente.
