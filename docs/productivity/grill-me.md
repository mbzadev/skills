## Ce qu’il fait

`grill-me` prend une **idée encore floue** et vous questionne jusqu’à ce qu’elle soit suffisamment claire pour être engagée. Vous n’avez pas besoin d’un plan détaillé pour commencer : la session sert précisément à le construire. Le skill pose ses questions par **tours**. Chaque tour couvre toute la **frontière**, c’est-à-dire les questions dont les prérequis sont déjà réglés ; aucune question ne dépend donc d’une réponse qui n’a pas encore été donnée.

Il est **[apatride](https://www.aihero.dev/ai-coding-dictionary/stateless)**. Il n’écrit aucun fichier et ne laisse aucun espace de travail derrière lui. La seule chose qu’il laisse est une version plus précise de l’idée, dans votre propre tête.

## Quand l’utiliser

Vous l’invoquez en tapant `/grill-me` : l’[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne le déclenchera pas seul. Commencez dans une **nouvelle conversation**, plutôt que sur un plan qu’un agent a déjà rédigé.

Utilisez ce skill dès qu’une idée mérite d’être prise au sérieux (fonctionnalité, orientation produit, décision professionnelle ou texte), bien avant d’en connaître toutes les conséquences. Le flou n’est pas une raison d’attendre : c’est précisément ce que la séance doit réduire. Si l’idée est déjà parfaitement précise, vous n’avez pas besoin de cette compétence.

Laquelle des trois compétences de grillade que vous souhaitez dépend de ce qui se trouve devant vous :

- **N'importe quoi, n'importe où** — `grill-me`. Il n'a besoin d'aucun dépôt et n'écrit aucun fichier, et le sujet n'a pas besoin d'être du code.
- **Une base de code sur laquelle s’aligner** — [grill-with-docs](https://aihero.dev/skills-grill-with-docs). Le même entretien, mais [avec état](https://www.aihero.dev/ai-coding-dictionary/stateful) : il lit votre code et conserve ce qu’il apprend dans `CONTEXT.md` et les ADR.
- **Trop gros pour une session** — [wayfinder](https://aihero.dev/skills-wayfinder). Il trace l'effort sous forme de carte et exécute des sessions de grillades à l'intérieur.

Laissez le [mode plan](https://www.aihero.dev/ai-coding-dictionary/agent-mode) désactivé. Le mode Plan amène l’agent à se précipiter vers la production d’un plan, ce qui est le contraire de rester en enquête.

## C’est une conversation, pas un interrogatoire

La compétence pose les questions, mais **vous** possédez la portée. C’est la partie qui manque aux gens, et elle sépare une session qui transforme une idée en décisions de celle qui produit des absurdités confiantes.

Le mode d'échec est la **passivité** : répondre « d'accord, d'accord, d'accord » à quarante questions et proposer un plan que l'agent a écrit et auquel vous avez hoché la tête. Cela semble productif parce que c’était long. Rien n’a été décidé, et le résultat comporte une certitude qu’il n’a pas mérité.

Être actif, c’est diriger. Repoussez une question posée en dessous de la fidélité dont vous avez besoin. Dites quand la portée dérive. Répondez « Je ne sais pas » et pensez-le. Cette compétence est conçue pour aider un ingénieur, pas pour le remplacer : ce qui en sort suit la qualité de vos réponses, pas le nombre de questions posées.

L’erreur inverse est réelle mais plus rare : rester dans l’entretien si longtemps que vous n’atteignez jamais le code.

## Grillable et nongrilable

Certaines questions peuvent être répondues en parlant. D’autres ne le peuvent pas, et aucune quantité de grillades ne vous y mènera.

« Un long formulaire ou trois pages ? » et « Comment cette interaction devrait-elle se comporter ? » sont **impossibles à trancher par la discussion seule** : il faut quelque chose à observer. Lorsque vous rencontrez ce cas, arrêtez les questions, construisez une version jetable avec [prototype](https://aihero.dev/skills-prototype), observez-la, puis revenez répondre en une phrase.

C'est en discutant d'une question insoluble que les séances explosent. L'agent ne cesse de reformuler, vous continuez à deviner, et la portée s'agrandit pour combler l'incertitude.

## Questions fréquentes

**À combien de questions dois-je m'attendre et comment savoir quand cela se terminera ?**

Comptez les tours plutôt que les questions. Une session ordinaire peut compter quarante-six questions réparties en quatre tours. Elle se termine lorsque la frontière est vide : chaque branche a été parcourue et aucune décision importante n’a été laissée de côté.

**Il m'a posé deux cents questions. Qu'est-ce qui n'a pas fonctionné ?**

Généralement, le périmètre était trop vaste. Demandez à l’agent de diviser le travail en morceaux plus petits, puis de traiter chacun séparément. Les sessions très longues dérivent aussi dans la **[zone muette](https://www.aihero.dev/ai-coding-dictionary/smart-zone)**, lorsque la [fenêtre de contexte](https://www.aihero.dev/ai-coding-dictionary/context-window) est si remplie que les questions deviennent moins pertinentes.

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

`grill-me` est un **skill autonome que vous pouvez utiliser n’importe où, pour n’importe quel sujet**. Son absence d’état le rend portable : aucun dépôt, aucun espace de travail, aucune configuration et aucune hypothèse selon laquelle l’idée concerne un logiciel. Il peut servir à préparer une décision commerciale, un texte ou la prochaine étape d’un projet.

Cette portabilité le distingue de [grill-with-docs](https://aihero.dev/skills-grill-with-docs), qui pose les mêmes questions tout en lisant la base de code et en enregistrant les décisions dans `CONTEXT.md` et les ADR. Les deux reposent sur la primitive [grilling](https://aihero.dev/skills-grilling) ; `grill-me` est simplement le point d’entrée sans dépôt ni fichier.

Si ce que vous avez grillé s'avère être un logiciel, vous pouvez confier la même conversation à [to-spec](https://aihero.dev/skills-to-spec) et poursuivre le flux de construction - une option, pas le but de la compétence. Lorsque vous ne savez pas quel flux vous convient, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous dirige.
