## Ce qu’il fait

`grill-me`  prend une **idée libre** et vous interviewe jusqu'à ce que vous puissiez vous y engager. Vous n'avez pas besoin d'un plan élaboré pour commencer - en produire un est à cela que sert la [session](https://www.aihero.dev/ai-coding-dictionary/session). Il pose des questions en **tours** : chaque tour représente toute la **frontière** — chaque question dont vous avez déjà réglé les conditions préalables — donc on ne vous demande jamais quelque chose qui dépend d'une réponse qu'il n'a pas encore entendue.

Il est **[apatride](https://www.aihero.dev/ai-coding-dictionary/stateless)**. Il n’écrit aucun fichier et ne laisse aucun espace de travail derrière lui. La seule chose qu’il laisse est une version plus précise de l’idée, dans votre propre tête.

## Quand l’utiliser

Vous l'invoquez en tapant `/grill-me` — l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne l'atteindra pas tout seul. Commencez-le dans une **nouvelle conversation**, et non au-dessus d'un plan que vous avez déjà demandé à un agent d'écrire.

Atteignez-le dès que vous avez une idée qui mérite d'être prise au sérieux (une fonctionnalité, une direction de produit, un appel professionnel, un écrit) et bien avant d'avoir compris ce que cela implique. Le flou n’est pas une raison pour attendre ; c'est la chose que la séance mange. Si vous pouvez déjà préciser la chose avec précision, vous n'avez pas besoin de la griller.

Laquelle des trois compétences de grillade que vous souhaitez dépend de ce qui se trouve devant vous :

- **N'importe quoi, n'importe où** — `grill-me`. Il n'a besoin d'aucun dépôt et n'écrit aucun fichier, et le sujet n'a pas besoin d'être du code.
- **Une base de code sur laquelle s'aligner** — [grill-with-docs](https://aihero.dev/skills-grill-with-docs). La même interview, mais [stateful](https://www.aihero.dev/ai-coding-dictionary/stateful) : il lit votre code et garde ce qu'il apprend dans `CONTEXT.md`  et les ADR.
- **Trop gros pour une session** — [wayfinder](https://aihero.dev/skills-wayfinder). Il trace l'effort sous forme de carte et exécute des sessions de grillades à l'intérieur.

Laissez le [mode plan](https://www.aihero.dev/ai-coding-dictionary/agent-mode) désactivé. Le mode Plan amène l’agent à se précipiter vers la production d’un plan, ce qui est le contraire de rester en enquête.

## C'est une conversation, pas une interview

La compétence pose les questions, mais **vous** possédez la portée. C’est la partie qui manque aux gens, et elle sépare une session qui transforme une idée en décisions de celle qui produit des absurdités confiantes.

Le mode d'échec est la **passivité** : répondre « d'accord, d'accord, d'accord » à quarante questions et proposer un plan que l'agent a écrit et auquel vous avez hoché la tête. Cela semble productif parce que c’était long. Rien n’a été décidé, et le résultat comporte une certitude qu’il n’a pas mérité.

Être actif, c’est diriger. Repoussez une question posée en dessous de la fidélité dont vous avez besoin. Dites quand la portée dérive. Répondez « Je ne sais pas » et pensez-le. Cette compétence est conçue pour aider un ingénieur, pas pour le remplacer : ce qui en sort suit la qualité de vos réponses, pas le nombre de questions posées.

L’erreur inverse est réelle mais plus rare : rester dans l’entretien si longtemps que vous n’atteignez jamais le code.

## Grillable et nongrilable

Certaines questions peuvent être répondues en parlant. D’autres ne le peuvent pas, et aucune quantité de grillades ne vous y mènera.

"Un long formulaire ou trois pages ?" et "Comment devrait se sentir cette interaction?" sont **illisibles** – ils ont besoin de quelque chose à quoi réagir. Lorsque vous en frappez un, arrêtez de griller. Construisez la version jetable avec [prototype](https://aihero.dev/skills-prototype), regardez-la, puis revenez et répondez en une seule ligne.

C'est en discutant d'une question insoluble que les séances explosent. L'agent ne cesse de reformuler, vous continuez à deviner, et la portée s'agrandit pour combler l'incertitude.

## Questions fréquentes

**À combien de questions dois-je m'attendre et comment savoir quand cela se terminera ?**

Comptez les tours, pas les questions. Quarante-six questions réparties en quatre tours constituent une session ordinaire. Cela se termine lorsque la frontière est vide – chaque branche visitée, rien n’est laissé en silence.

**Il m'a posé deux cents questions. Qu'est-ce qui n'a pas fonctionné ?**

Généralement, le champ d’application était trop vaste. Demandez à l'agent de diviser d'abord le travail en morceaux plus petits, puis de griller chacun d'entre eux. Les sessions très longues dérivent également dans la **[zone muette](https://www.aihero.dev/ai-coding-dictionary/smart-zone)**, où la [fenêtre contextuelle](https://www.aihero.dev/ai-coding-dictionary/context-window) est suffisamment pleine pour que les questions empirent.

**Puis-je revenir sur une question à la fois ?**

Oui. Ajoutez ceci à votre global `AGENTS.md` :

```
Pendant l’entretien, pose une seule question à la fois.
```

**Et si je ne connais vraiment pas la réponse ?**

Dis-le. "Je ne sais pas" est une vraie réponse, et une question à laquelle vous ne pouvez pas répondre est généralement un signe de prototype plutôt que de deviner.

**Dois-je démarrer une nouvelle session avant d'écrire la spécification ?**

Non. La valeur de la session est le [context](https://www.aihero.dev/ai-coding-dictionary/context) que vous venez de créer. Remettez la même conversation directement à [to-spec](https://aihero.dev/skills-to-spec).

**Le modèle est-il important ?**

Plus que pour la plupart des compétences. Griller s'appuie sur la propre perception du [modèle](https://www.aihero.dev/ai-coding-dictionary/model) de la façon dont les systèmes se cassent, alors donnez-lui le meilleur de vous-même. La mise en œuvre suit principalement le contexte et tolère un modèle moins cher.

## Indicateurs de réussite

- Vous n’êtes pas d’accord avec au moins une proposition : une séance qui ne provoque aucune réaction était probablement inutile.
- Les questions arrivent en quelques tours, et chaque tour s’appuie clairement sur vos réponses précédentes.
- Une question fait apparaître une décision que vous aviez prise implicitement.
- À la fin, vous pouvez défendre chaque choix auprès d’une personne qui n’a pas participé à la conversation.

## Où il s’inscrit

`grill-me` est un **autonome que vous pouvez exécuter n'importe où, sur n'importe quoi**. Le fait d'être apatride est ce qui le rend portable : pas de dépôt, pas d'espace de travail, pas de configuration et aucune hypothèse selon laquelle l'idée concerne même le logiciel. Les gens le signalent aux décisions commerciales, à l'écriture, à ce qu'il faut faire ensuite – tout ce qui ne reste pas immobile dans leur tête.

Cette portabilité est toute la différence avec [grill-with-docs](https://aihero.dev/skills-grill-with-docs), qui exécute la même interview mais lit une base de code pour s'aligner et enregistre ce qu'il apprend sous le nom de `CONTEXT.md`  et d'ADR. Les deux reposent sur la primitive [grilling](https://aihero.dev/skills-grilling) ;  `grill-me`  est la porte d'entrée invoquée par l'utilisateur qui ne transporte rien avec elle.

Si ce que vous avez grillé s'avère être un logiciel, vous pouvez confier la même conversation à [to-spec](https://aihero.dev/skills-to-spec) et poursuivre le flux de construction - une option, pas le but de la compétence. Lorsque vous ne savez pas quel flux vous convient, [ask-matt](https://aihero.dev/skills-ask-matt) vous dirige.
