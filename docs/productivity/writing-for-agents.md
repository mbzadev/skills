## Ce qu’il fait

`writing-for-agents` est la référence sur laquelle vous écrivez des documents destinés aux agents - une compétence, un `AGENTS.md`, un [spec](https://www.aihero.dev/ai-coding-dictionary/spec), une invite d'exécution, un README, n'importe quel document et [agent](https://www.aihero.dev/ai-coding-dictionary/agent) lit. L'emballage diffère ; ce n'est pas le cas de l'écriture : les mêmes leviers rendent chacun d'eux prévisible, de sorte que l'agent suit le même *processus* à chaque exécution plutôt que de produire le même résultat.

Son mouvement par défaut est la suppression, pas l'explication. Demandez à un agent d'écrire des instructions pour un autre agent et il passe la plupart de ses mots à expliquer ce que le [model](https://www.aihero.dev/ai-coding-dictionary/model) sait déjà — chacune de ces lignes est un **no-op**, payant [context](https://www.aihero.dev/ai-coding-dictionary/context) et ne changeant aucun comportement. Cette référence est l'objectif qui les trouve, c'est pourquoi elle gagne sa place au moins aussi souvent sur un document que vous possédez déjà que sur un fichier vierge.

Il s'appelait  `writing-great-skills` jusqu'à la v1.1. Le changement de nom suit ce qu'il a toujours été en dessous : presque rien n'est spécifique à une compétence. Les mécanismes réservés aux compétences (frontmatter, choix du modèle par rapport à l'utilisateur, compétences du routeur) sont divulgués à un `SKILL-MECHANICS.md`  lié que vous lisez uniquement lorsque le document devant vous est une compétence.

## Quand l’utiliser

Tapez `/writing-for-agents`, ou l'agent l'atteint tout seul lorsque vous créez ou modifiez une compétence, ou que vous modifiez `AGENTS.md`.

Accédez-y manuellement pour tout ce qu'un agent lit : vos documents, vos spécifications et vos [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket), votre système et vos invites [AFK](https://www.aihero.dev/ai-coding-dictionary/afk). Le test est une question : un agent lit-il ceci ? - et peu importe la façon dont le document arrive devant lui, qu'un pointeur le nomme, qu'un humain le colle ou qu'il se trouve simplement dans le dépôt. Pour déterminer ce qu'une base de code contient réellement en premier lieu, utilisez [grill-with-docs](https://aihero.dev/skills-grill-with-docs) — cette référence régit la façon dont un document est lu, pas ce qu'il sait.

## Les deux charges

L’idée sur laquelle repose toute la référence est une paire de budgets dépensés par chaque document et pointeur :

- **Chargement de contexte** — le coût du matériel toujours chargé sur la fenêtre de l'agent : une ligne `AGENTS.md` , une description de compétence, tout ce qui est en contexte à chaque [tour](https://www.aihero.dev/ai-coding-dictionary/turn), qu'il se déclenche ou non.
- **Charge cognitive** — le coût à votre charge : quels documents existent et quand les obtenir. Vous êtes l'indice. Ce n’est pas un coût à minimiser : c’est le prix de l’action humaine.

Une fois que vous réfléchissez à ces deux charges, la plupart des décisions de rédaction – diviser ou non, intégrer ou divulguer, pointer ou pousser – deviennent le même échange effectué à différents endroits.

## Les leviers

- **[Pointeurs de contexte](https://www.aihero.dev/ai-coding-dictionary/context-pointer)** — la référence conservée dans le contexte qui nomme le matériel hors contexte et code quand l'atteindre. Une description de compétence et une `AGENTS.md` ligne nommant un document sont le même objet ; c'est la *formulation* du pointeur, et non sa cible, qui décide de la fiabilité avec laquelle l'agent l'atteint.
- **Hiérarchie des informations** — l'échelle depuis l'étape dans le fichier, jusqu'à la référence dans le fichier, jusqu'à la référence divulguée derrière un pointeur. **[Divulgation progressive](https://www.aihero.dev/ai-coding-dictionary/progressive-disclosure)** est le mouvement vers le bas de cette échelle pour que le haut reste lisible.
- **Critères d'achèvement** — la clarté et l'exigence de l'état effectué de chaque étape, et les **démarches** que la demande entraîne ; la défense contre **l'achèvement prématuré**.
- **Mots principaux** — un concept compact déjà dans le pré-entraînement du modèle (*tight*, *red*, *tracer bullet*) avec lequel l'agent réfléchit lors de l'exécution du document. Il s'ancre deux fois : exécution dans le corps, invocation dans le pointeur.
- **Élagage** — source unique de vérité, de pertinence et test de non-opération appliqué phrase par phrase, contre la **duplication**, les **sédiments** et l'**étalement**.

## Questions fréquentes

**Où est passé `/writing-great-skills`  ?**

Il s'agit de cette compétence, renommée en v1.1. Les praticiens le pointaient déjà vers `AGENTS.md`, les documents, les spécifications, les tickets et les invites d'exécution bien avant que le nom ne rattrape son retard ; la structure, les mots principaux et l'élagage s'avèrent être l'art de tout texte lu par un agent. Il n'y a pas d'alias — réinstallez sous le nouveau nom.

**« Écrire pour les agents » – c'est donc l'agent qui écrit ?**

L'inverse. Vous êtes l'auteur ; l'agent est le lecteur. C'est toute la difficulté du genre : on écrit pour un lecteur qui a déjà tout lu, donc l'explication est du gaspillage et la précision est tout le travail.

**Je ne peux pas simplement demander à l'agent de l'écrire pour moi ?**

Vous pouvez, et cela produira quelque chose de verbeux. Laissé seul, le modèle explique ce qu'il sait déjà, et il n'appliquera pas le test de non-opération ni ne cherchera pas seul un mot principal. Utilisez la référence sur le projet – une passe de révision est l’endroit où atterrit la majeure partie de sa valeur.

**J'ai demandé à un agent de découper un document et cela a supprimé la fonctionnalité.**

Les agents doivent « rationaliser » et optimiser la longueur, car la longueur est ce qu'ils peuvent voir. Le test de non-opération est comportemental et non esthétique : supprimez la ligne et demandez si le comportement de l'agent a changé. Lorsqu'une phrase échoue, supprimez la phrase entière plutôt que d'en couper des mots - et réglez un désaccord à ce sujet en exécutant le document, et non en argumentant.

**Comment puis-je savoir quand c'est terminé ?**

Quand cela fonctionne, et que vous ne trouvez plus de doublons, de sédiments ou de non-opérations. Il n'y a pas d'évaluation automatisée ici ; la vérification est une exécution manuelle plus le vocabulaire du mode de défaillance comme diagnostic. Lorsqu'un document se comporte mal, ce vocabulaire constitue également le kit de réparation : nommez d'abord le mode de défaillance, puis corrigez-le.

**Est-ce que cela devrait vivre à `AGENTS.md` ou ailleurs ?**

Demandez quelle charge vous souhaitez payer. `AGENTS.md` se charge dans chaque [session](https://www.aihero.dev/ai-coding-dictionary/session) sans condition ; le matériel derrière un pointeur ne coûte que la ligne du pointeur jusqu'à ce qu'il se déclenche. Tout ce qui s'applique dans un contexte sur dix est payant les neuf autres fois.

**Dois-je réécrire mes documents pour chaque nouveau modèle ?**

Généralement non, et le sur-ajustement à un modèle est son propre piège. La mise à jour pour un nouveau modèle est généralement une autre passe sans opération plutôt qu'une réécriture.

**Ma compétence ne fonctionne que sur la tâche exacte à partir de laquelle je l'ai construite.**

La voie courante - effectuer le travail une fois, puis demander à l'agent de l'écrire comme une compétence - sur-indexe sur cette seule exécution, et les exemples apparaissent trop spécifiques. Conservez l'exécution comme preuve, puis faites une abstraction délibérément : supprimez ce qui appartenait à ce dépôt et à ces fichiers, et écrivez pour la classe de tâche.

** L'anglais n'est pas ma langue maternelle. Est-ce que je perds l’avantage du premier mot ?**

Non, trouver le mot qui regroupe le plus de comportements dans le moins de [jetons](https://www.aihero.dev/ai-coding-dictionary/token) est un travail que la référence fait pour vous. C'est l'une des raisons pour lesquelles il est prévu.

## Indicateurs de réussite

- Le document devient plus court à mesure qu'il s'améliore, et vous êtes surpris du peu qu'il en reste.
- Vous pouvez pointer un mot principal et le regarder fonctionner à plusieurs endroits.
- Rien n'est indiqué deux fois, sous quelque forme que ce soit. La duplication est le signe le plus fiable qu’un document n’a jamais été testé.
- La référence dont une seule branche a besoin se trouve derrière un pointeur plutôt que dans le fichier principal.

## Où il s’inscrit

Il s’agit d’une référence autonome accessible à tout moment. Il n'a pas de voisin dans la chaîne car il se situe sous l'ensemble plutôt qu'à côté d'une seule compétence : chaque compétence ici a été écrite contre elle, et les documents que les autres compétences laissent derrière eux - un `CONTEXT.md`  et ses ADR, une spécification, un ticket - sont exactement le texte qu'il régit une fois qu'un agent doit les lire. Lorsque vous ne savez pas quelle compétence ou quel flux correspond à une tâche, [ask-matt](https://aihero.dev/skills-ask-matt) vous guide sur l'ensemble de l'ensemble.
