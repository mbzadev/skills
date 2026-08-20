## Ce qu’il fait

`grilling` est une boucle de questions qui met à l’épreuve un plan, une décision ou une idée avant toute mise en œuvre. Elle représente le sujet comme un **arbre de conception** : chaque décision ouvre les décisions qui en dépendent, puis le skill vous interroge branche par branche jusqu’à ce qu’aucune question importante ne reste en suspens.

Elle ne pose ni une seule question à la fois, ni toutes les questions d’un coup. Chaque **tour** couvre toute la **frontière** : les décisions dont les prérequis sont déjà réglés, et rien de plus. Deux questions ne figurent jamais dans le même tour si l’une dépend de l’autre. Vos réponses fixent les décisions, déplacent la frontière et déterminent les questions du tour suivant. Treize questions sont ainsi généralement traitées en trois tours plutôt qu’en treize échanges séparés.

## Quand l’utiliser

Tapez `/grilling`, ou laissez l’[agent](https://www.aihero.dev/ai-coding-dictionary/agent) le sélectionner lorsqu’une tâche s’y prête. C’est le seul [skill](https://www.aihero.dev/ai-coding-dictionary/skill) de la famille des questions qui soit invocable par le modèle ; vous le déclencherez donc rarement directement, car un autre skill peut l’utiliser pour vous.

En tapant `/grilling` , vous obtenez directement l'entretien simple et rien d'autre. Où vous voulez quelque chose de plus que ça :

| Situation | Utilisez |
| --- | --- |
| Vous ne travaillez pas dans un dépôt | [grill-me](https://aihero.dev/skills-grill-me) — la même [session](https://www.aihero.dev/ai-coding-dictionary/session), sans déclenchement automatique |
| Vous êtes dans un répertoire de travail | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) — la même session, et il écrit `CONTEXT.md` et les ADR au fur et à mesure |
| Un effort trop grand pour être réalisé en une seule séance | [wayfinder](https://aihero.dev/skills-wayfinder) — il trace une carte et exécute des grillades à l'intérieur des tickets de décision |
| Une question que la discussion ne peut pas résoudre : à quoi devrait ressembler ou ressentir quelque chose | [prototype](https://aihero.dev/skills-prototype) — construisez la version jetable, puis revenez |
| Une compétence qui vous est propre et qui nécessite un entretien | Invoquez `/grilling` de là, plutôt que d'écrire un autre entretien |

## Le tour, la frontière et la décision

Trois idées portent toute la compétence.

L'**arbre de conception** est le modèle du sujet : des décisions auxquelles sont suspendues des décisions. La **frontière** est l'ensemble des décisions dont les conditions préalables sont toutes réglées — les seules questions qui peuvent honnêtement être posées à ce jour. Un **tour** est une frontière, posée dans son intégralité et répondue dans son intégralité.

Au cours d'un tour, chaque question arrive sous une forme fixe : numérotée et intitulée derrière une ligne `❓`, puis le corps, puis la réponse recommandée par l'agent seule sur une ligne `➡️` . C'est ce qui fait qu'un tour doit répondre par numéro - "1 oui, 2 la deuxième option, 3 non, voici pourquoi" - au lieu de citer des questions. Le format présente une aspérité connue : la recommandation argumente parfois *contre* la question telle qu'elle a été formulée, donc être d'accord avec la recommandation signifie répondre « non » à la question. Lorsque cela se produit, répondez à la recommandation et dites-le.

L’autre moitié de la conception sépare les faits des décisions. Les faits relèvent du skill : lorsqu’une question de la frontière exige une information que l’[environnement](https://www.aihero.dev/ai-coding-dictionary/environment) peut fournir, il délègue la recherche à un [sous-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) au lieu de vous la demander. Seules les questions qui dépendent de cette recherche attendent. Les décisions restent les vôtres et le skill doit les attendre. Un agent qui répond à ses propres questions dans `grilling` détourne le fonctionnement prévu. La session se termine lorsque la frontière est vide, mais aucune mise en œuvre ne commence avant votre confirmation explicite.

La limite honnête : la frontière est le jugement de l'agent, pas un graphique calculé. Il peut poser deux questions en une seule fois et découvrir ensuite seulement qu'une réponse aurait dû changer l'autre. Il n’y a aucune protection contre cela au-delà du fait de le dire, ce qui rouvrira la branche concernée au prochain tour.

## Ce qui relève du mécanisme et de ses flux

Cette page décrit le mécanisme. Les adaptations les plus courantes sont documentées dans les flux de travail qui l’utilisent.

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

Il s'agit d'un bogue dans l'exécution, et non du comportement prévu, et c'est la raison pour laquelle les faits et les décisions ont été séparés dans le texte de la compétence. Cela apparaît le plus souvent lorsqu'une autre compétence s'exécute `grilling`  dans un cadre de résolution de ce ticket, où la tâche environnante se lit comme une autorisation pour continuer à avancer. La même contrainte explique pourquoi il n'y a pas de mode asynchrone : des personnes ont demandé une variante qui lit un problème GitHub et publie un mémo de décision consolidé, et c'est une compétence différente, car une session de grillage à laquelle personne ne répond a produit l'opinion de l'agent plutôt que la vôtre.

**Puis-je limiter le nombre de questions ?**

Non, et un plafond est délibérément hors de portée. Certains plans nécessitent trois questions et d’autres cinquante ; un plafond fixe tronque le cas difficile ou semble arbitraire sur le cas facile. La direction en langage clair est le contrôle prévu : dites-lui de conclure ou d'arrêter et d'accepter le plan là où il se trouve. Si une session dure très longtemps, la cause est généralement que la portée était trop grande ; briser le travail et griller les morceaux.

**J'ai installé `grill-me` tout seul et rien ne se passe.**

`grill-me` est un skill d’une seule ligne qui demande d’exécuter une session `/grilling` ; ce dernier doit donc également être installé. Il en va de même pour `grill-with-docs`, qui dépend en plus de [domain-modeling](https://aihero.dev/skills-domain-modeling). L’installation de la collection complète évite ce problème ; une installation sélective doit aussi inclure les primitives nécessaires.

**`grill-with-docs` s’est exécuté sans charger `grilling`.**

Un problème réel et non corrigé est signalé dans les [harnais](https://www.aihero.dev/ai-coding-dictionary/harness) et les modèles : le fait qu’un skill en nomme un autre ne garantit pas son chargement, et `grill-with-docs` en nomme deux. Le symptôme est une session qui pose tout en même temps sans recommandation : le modèle improvise alors l’entretien au lieu de le diriger. Demandez directement à l’agent s’il a chargé `grilling` et `domain-modeling` pour le vérifier.

## Indicateurs de réussite

- Un tour arrive sous forme de liste numérotée, chaque question avec sa recommandation sur une ligne `➡️`  distincte, et vous pouvez répondre à tout le tour par numéro.
- Rien dans un tour ne nécessite une réponse en premier à une autre question du même tour.
- Les tours ultérieurs demandent des choses que le premier tour n'aurait pas pu demander.
- Il va rechercher des faits – lire des fichiers, envoyer un sous-agent – ​​plutôt que de vous demander quelque chose qu'il aurait pu découvrir.
- La recherche exécutée en arrière-plan ne bloque pas le cycle ; seules les questions qui en dépendent attendent.
- Il s'arrête à la fin et vous demande de confirmer que la compréhension est partagée, au lieu de commencer le travail.
- Le nombre de questions reste élevé tandis que le nombre de tours reste faible.

## Où il s’inscrit

`grilling` est une **primitive**, pas une étape que vous planifiez : elle constitue la source unique de vérité pour la technique d’entretien. Les autres skills l’utilisent au lieu de réinventer cette mécanique. [grill-me](https://aihero.dev/skills-grill-me) et [grill-with-docs](https://aihero.dev/skills-grill-with-docs) sont ses deux points d’entrée invoqués par l’utilisateur ; `grill-with-docs` ouvre généralement la chaîne principale, avant [to-spec](https://aihero.dev/skills-to-spec). [wayfinder](https://aihero.dev/skills-wayfinder) l’utilise pour résoudre des tickets de décision, [triage](https://aihero.dev/skills-triage) pour préciser une demande vague et [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) pour examiner la base de code. En cas de doute, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous oriente.
