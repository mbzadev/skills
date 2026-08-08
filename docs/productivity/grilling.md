## Ce qu’il fait

`grilling` est la boucle d'entretien qui teste un plan, une décision ou une idée avant que quiconque n'y agisse. Il cartographie le sujet comme un **arbre de conception** - chaque décision se ramifie dans les décisions qui en découlent - et vous interroge branche par branche jusqu'à ce que rien ne soit laissé en silence.

Il ne pose pas une question à la fois, ni tout en même temps. Chaque **tour** interroge toute la **frontière** : chaque décision dont les conditions préalables sont déjà réglées, et rien d'autre. Deux questions ne partagent jamais un tour si l’une dépend de l’autre – une question qui dépend d’une réponse encore ouverte appartient à un tour ultérieur. Vos réponses déterminent les décisions, la frontière se déplace vers l'extérieur et le tour suivant demande ce que cela a débloqué. Treize questions sont généralement posées en trois tours environ au lieu de treize.

## Quand l’utiliser

Tapez `/grilling`, ou l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) l'atteint tout seul lorsqu'une tâche lui convient. C'est la seule [compétence](https://www.aihero.dev/ai-coding-dictionary/skill) de la famille des grillades qui est invoquée par le modèle, c'est pourquoi vous la saisissez rarement : généralement, une compétence que vous avez *fait* saisie l'exécute pour vous.

En tapant `/grilling` , vous obtenez directement l'entretien simple et rien d'autre. Où vous voulez quelque chose de plus que ça :

| Ce que vous avez | Atteindre |
| --- | --- |
| Vous ne travaillez pas dans un répertoire de travail | [grill-me](https://aihero.dev/skills-grill-me) — la même [session](https://www.aihero.dev/ai-coding-dictionary/session), sous un nom l'agent ne se déclenchera jamais tout seul |
| Vous êtes dans un répertoire de travail | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) — la même session, et il écrit `CONTEXT.md` et les ADR au fur et à mesure |
| Un effort trop grand pour être réalisé en une seule séance | [wayfinder](https://aihero.dev/skills-wayfinder) — il trace une carte et exécute des grillades à l'intérieur des tickets de décision |
| Une question que la discussion ne peut pas résoudre : à quoi devrait ressembler ou ressentir quelque chose | [prototype](https://aihero.dev/skills-prototype) — construisez la version jetable, puis revenez |
| Une compétence qui vous est propre et qui nécessite un entretien | Invoquez `/grilling` de là, plutôt que d'écrire une autre interview |

## Le tour, la frontière et la décision

Trois idées portent toute la compétence.

L'**arbre de conception** est le modèle du sujet : des décisions auxquelles sont suspendues des décisions. La **frontière** est l'ensemble des décisions dont les conditions préalables sont toutes réglées — les seules questions qui peuvent honnêtement être posées à ce jour. Un **tour** est une frontière, posée dans son intégralité et répondue dans son intégralité.

Au cours d'un tour, chaque question arrive sous une forme fixe : numérotée et intitulée derrière une ligne `❓`, puis le corps, puis la réponse recommandée par l'agent seule sur une ligne `➡️` . C'est ce qui fait qu'un tour doit répondre par numéro - "1 oui, 2 la deuxième option, 3 non, voici pourquoi" - au lieu de citer des questions. Le format présente une aspérité connue : la recommandation argumente parfois *contre* la question telle qu'elle a été formulée, donc être d'accord avec la recommandation signifie répondre « non » à la question. Lorsque cela se produit, répondez à la recommandation et dites-le.

L’autre moitié de la conception est la séparation entre les faits et les décisions. Les faits sont le propre travail de la compétence : lorsqu'une question de frontière nécessite quelque chose que l'[environnement](https://www.aihero.dev/ai-coding-dictionary/environment) peut régler, elle envoie un [sous-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) pour aller le découvrir plutôt que de vous le demander. Cela ne bloque pas cela - seules les questions en aval d'une exploration en cours attendent. Les décisions vous appartiennent et vous devez les attendre. Un agent exécutant `grilling` qui répond à ses propres décisions a brisé la compétence, sans l'interpréter libéralement. La session se termine lorsque la frontière est vide et elle n’agira pas sur ce que vous avez convenu tant que vous n’aurez pas confirmé que vous êtes parvenu à un accord commun.

La limite honnête : la frontière est le jugement de l'agent, pas un graphique calculé. Il peut poser deux questions en une seule fois et découvrir ensuite seulement qu'une réponse aurait dû changer l'autre. Il n’y a aucune protection contre cela au-delà du fait de le dire, ce qui rouvrira la branche concernée au prochain tour.

## Ce qui relève du mécanisme et de ses flux

Cette page décrit le mécanisme. Les adaptations les plus courantes sont documentées dans les workflows qui l’utilisent.

| Question | Où on répond |
| --- | --- |
| L'arbre, la frontière, les tours, le format des questions, faits vs décisions | Ici |
| Combien de temps doit durer une session, que faire d'une question à laquelle vous ne pouvez pas répondre en parlant, comment éviter d'acquiescer | [grille-moi](https://aihero.dev/skills-grill-me) |
| Qu'est-ce qui est écrit dans `CONTEXT.md`, qu'est-ce qui devient un ADR | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) |

## Questions fréquentes

**Puis-je revenir sur une question à la fois ?**

Oui, et une grande partie du public le fait. Ajoutez ceci à votre global `AGENTS.md` :

```
Pendant l’entretien, pose une seule question à la fois.
```

Le défaut basé sur les tours est véritablement contesté. Les praticiens qui lisent lentement, qui travaillent dans une langue seconde ou qui utilisent le format séquentiel comme échafaudage de concentration déclarent tous que le rythme un à la fois est meilleur pour eux, et que la désinscription est soutenue plutôt que tolérée.

**Où est passé `/batch-grill-me`  ?**

Dans cette compétence. Les questions basées sur des séries de questions ont été brièvement livrées en tant que compétence distincte, puis ont été transférées dans `grilling` elles-mêmes, de sorte que tout ce qui était construit sur la primitive — `grill-me`, `grill-with-docs`, `triage`, `wayfinder` — l'a obtenu en même temps. Il n'y a pas de `batch-grill-me` à installer, ni de compétence séquentielle distincte non plus ; la ligne `AGENTS.md`  ci-dessus est le moyen de revenir à un à la fois.

**Poser tout un tour à la fois ne fait-il pas perdre les questions que mes réponses précédentes auraient soulevées ?**

Il s'agit de l'objection la plus courante à la conception d'un tour, et la frontière est la réponse : un tour ne contient que des questions qui ne dépendent pas les unes des autres, donc aucune réponse dans un tour ne peut invalider une autre question de ce tour. Les réponses remodèlent toujours tout en aval : le tour suivant est recalculé et non pré-écrit. Ce que vous perdez est plus petit que ce que « toutes les questions à la fois » implique, et plus grand que rien : voyez la limite de la frontière ci-dessus.

**Il n'y avait plus de questions et la construction a commencé.**

Une porte de confirmation existe précisément pour cela : le skill n’est pas terminé lorsque la frontière se vide, mais lorsque vous confirmez que la compréhension est partagée. Les [modèles](https://www.aihero.dev/ai-coding-dictionary/model) rapides ou configurés avec un faible effort de raisonnement franchissent parfois cette limite, résument l’entretien en quelques questions puis commencent à construire. Si cela se produit, ajoutez dans `AGENTS.md` une instruction explicite interdisant toute implémentation sans votre autorisation.

**Il a répondu à ses propres questions au lieu de me les poser.**

Il s'agit d'un bug dans l'exécution, et non du comportement prévu, et c'est la raison pour laquelle les faits et les décisions ont été séparés dans le texte de la compétence. Cela apparaît le plus souvent lorsqu'une autre compétence s'exécute `grilling`  dans un cadre de résolution de ce ticket, où la tâche environnante se lit comme une autorisation pour continuer à avancer. La même contrainte explique pourquoi il n'y a pas de mode asynchrone : des personnes ont demandé une variante qui lit un problème GitHub et publie un mémo de décision consolidé, et c'est une compétence différente, car une session de grillage à laquelle personne ne répond a produit l'opinion de l'agent plutôt que la vôtre.

**Puis-je limiter le nombre de questions ?**

Non, et un plafond est délibérément hors de portée. Certains plans nécessitent trois questions et d’autres cinquante ; un plafond fixe tronque le cas difficile ou semble arbitraire sur le cas facile. La direction en langage clair est le contrôle prévu : dites-lui de conclure ou d'arrêter et d'accepter le plan là où il se trouve. Si une session dure très longtemps, la cause est généralement que la portée était trop grande ; briser le travail et griller les morceaux.

**J'ai installé `grill-me` tout seul et rien ne se passe.**

`grill-me` est un skill d’une seule ligne qui demande d’exécuter une session `/grilling` ; ce dernier doit donc également être installé. Il en va de même pour `grill-with-docs`, qui dépend en plus de [domain-modeling](https://aihero.dev/skills-domain-modeling). L’installation de la collection complète évite ce problème ; une installation sélective doit aussi inclure les primitives nécessaires.

**`grill-with-docs` s’est exécuté sans charger `grilling`.**

Une aspérité réelle et non corrigée, signalée dans les [harnais](https://www.aihero.dev/ai-coding-dictionary/harness) et les modèles : une compétence qui nomme une autre compétence ne provoque pas de manière fiable le chargement de cette compétence, et `grill-with-docs`  en nomme deux. Le tell est une session qui demande tout en même temps sans aucune recommandation – c'est le modèle qui improvise un entretien plutôt que de diriger celui-ci. Demander directement à l'agent s'il a chargé `grilling` et `domain-modeling` le récupère généralement.

## Indicateurs de réussite

- Un tour arrive sous forme de liste numérotée, chaque question avec sa recommandation sur une ligne `➡️`  distincte, et vous pouvez répondre à tout le tour par numéro.
- Rien dans un tour ne nécessite une réponse en premier à une autre question du même tour.
- Les tours ultérieurs demandent des choses que le premier tour n'aurait pas pu demander.
- Il va rechercher des faits – lire des fichiers, envoyer un sous-agent – ​​plutôt que de vous demander quelque chose qu'il aurait pu découvrir.
- La recherche exécutée en arrière-plan ne bloque pas le cycle ; seules les questions qui en dépendent attendent.
- Il s'arrête à la fin et vous demande de confirmer que la compréhension est partagée, au lieu de commencer le travail.
- Le nombre de questions reste élevé tandis que le nombre de tours reste faible.

## Où il s’inscrit

`grilling` est une **primitive**, pas une étape que vous planifiez : la source unique de vérité pour la technique d'entretien, conservée au même endroit afin que chaque compétence qui nécessite un entretien l'atteigne au lieu d'en inventer une. [grill-me](https://aihero.dev/skills-grill-me) et [grill-with-docs](https://aihero.dev/skills-grill-with-docs) sont ses deux portes d'entrée invoquées par l'utilisateur, et  `grill-with-docs` est l'endroit où commence la chaîne de construction principale, avant [to-spec](https://aihero.dev/skills-to-spec). [wayfinder](https://aihero.dev/skills-wayfinder) l'exécute pour résoudre les tickets de décision, [triage](https://aihero.dev/skills-triage) pour transformer un rapport vague en un rapport exploitable, et [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) pour parcourir l'arbre une fois vous avez choisi un candidat à approfondir. Lorsque vous ne savez pas quel point d'entrée vous convient, [ask-matt](https://aihero.dev/skills-ask-matt) vous dirige.
