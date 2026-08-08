## Ce qu’il fait

`code-review` examine la différence entre `HEAD` et un point fixe que vous nommez — un commit, une branche, une balise, `main`, `HEAD~5`  — le long de deux axes. **Normes** demande si le code suit la façon dont ce dépôt écrit le code. **Spécification** demande si le code fait ce que le problème d'origine ou [spec](https://www.aihero.dev/ai-coding-dictionary/spec) a demandé. Chaque axe fonctionne dans son propre [sous-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) afin qu'aucun des deux ne voie le raisonnement de l'autre.

Les deux axes ne sont jamais fusionnés et jamais reclassés. Le rapport se termine par le pire problème *par axe* et refuse de nommer un seul gagnant parmi eux, car un changement peut passer un axe et échouer sur l'autre : le code qui suit toutes les conventions tout en implémentant la mauvaise chose réussit les normes et échoue aux spécifications ; un code qui fait exactement ce que le [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket) a demandé en brisant les conventions du dépôt fait l'inverse. Un verdict mitigé permet à l’axe de réussite de cacher celui d’échec.

## Quand l’utiliser

Tapez `/code-review`, ou laissez l’agent le sélectionner automatiquement lorsque vous demandez la revue d’une branche, d’une PR, d’un travail en cours ou de tout changement « depuis X ».

| Votre situation | Atteindre |
| --- | --- |
| Un diff existe et vous voulez savoir s'il est bien construit *et* est la bonne chose | `code-review` |
| Vous voulez que les bugs soient traqués dans le diff – chemins nuls, courses, un par un | La propre revue intégrée de Codex, pas celle-ci (voir le conflit de noms ci-dessous) |
| Rien n'est encore écrit et vous voulez qu'il soit écrit en test d'abord | [tdd](https://aihero.dev/skills-tdd) |
| Une spécification entière doit être construite, révision incluse | [implement](https://aihero.dev/skills-implement), qui appelle cette compétence elle-même |
| Toute la base de code a dérivé, pas une seule différence | [améliorer-l'architecture-de-codebase](https://aihero.dev/skills-improve-codebase-architecture) |
| Quelque chose est cassé et vous ne savez pas pourquoi | [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) |

Vous devez fournir le point fixe. Si vous ne le faites pas, la compétence en demande un plutôt que de deviner ; il vérifie ensuite que la référence est résolue et que le diff n'est pas vide avant de générer quoi que ce soit, donc un nom de branche typo échoue devant vous au lieu d'être à l'intérieur de deux sous-agents.

## Prérequis

L’axe des normes n’a besoin de rien. Il lit tous les documents du dépôt (`CODING_STANDARDS.md`,  `CONTRIBUTING.md`, etc.) et s'appuie sur une ligne de base intégrée lorsque le dépôt ne documente rien.

L'axe Spécification a besoin d'une spécification pour exister et être trouvable. Cela se présente dans cet ordre :

1. Émettre des références dans les messages de validation (`#123`, `Closes #45`, un GitLab `!67`), récupérés via `docs/agents/issue-tracker.md`.
2. Un chemin que vous transmettez comme argument.
3. Un fichier de spécifications sous `docs/`, `specs/` ou `.scratch/` correspondant au nom de la branche ou de la fonctionnalité.
4. Je vous le demande.

L'étape 1 dépend de  `docs/agents/issue-tracker.md`, que [setup-matt-pocock-skills](https://aihero.dev/skills-setup-matt-pocock-skills) écrit. Sans cela, l'axe fonctionne toujours si vous lui donnez un chemin. Sans aucune spécification, le sous-agent Spécification est ignoré et le rapport indique « aucune spécification disponible » plutôt que d'inventer des exigences.

## Les deux axes

| | Normes | Spécification |
| --- | --- | --- |
| Question | Est-ce bien construit ? | Est-ce la bonne chose ? |
| Lit | Les normes documentées du dépôt, ainsi que la référence en matière d'odeur | Le problème ou la spécification d'origine |
| Rapports | Violations documentées (peut être difficile) et odeurs (toujours une question de jugement) | Exigences manquantes ou partielles, dérive du périmètre, exigences mal mises en œuvre |
| Chaque découverte cite | Le fichier des normes et la règle, ou l'odeur nommée plus le beau gosse | La ligne de la spécification |

Cette conception évite les revues génériques qui ignorent vos normes : elles signalent parfois des choix délibérés et manquent les invariants dont dépend réellement la base de code. La documentation du dépôt est donc la [source principale](https://www.aihero.dev/ai-coding-dictionary/primary-source) de l’axe Normes, et **les conventions du dépôt l’emportent toujours**.

La **référence des mauvaises odeurs** constitue le socle minimal : douze odeurs de code de Fowler tirées du chapitre 3 de _Refactoring_ — nom mystérieux, code dupliqué, envie de fonctionnalité, amas de données, obsession primitive, commutateurs répétés, chirurgie au fusil de chasse, changement divergent, généralité spéculative, chaînes de messages, intermédiaire et héritage refusé. Chacune est une heuristique, par exemple « possible envie de fonctionnalité », jamais une violation certaine. Chaque constat explique ce qu’il est et comment y remédier. Les règles déjà imposées par le linter sont ignorées par les deux axes.

## Questions fréquentes

**Il entre en collision avec celui de Codex `/code-review`. Que dois-je faire ?**

Il s’agit du problème le plus signalé avec la compétence, et il n’est pas résolu. Codex livre son propre `/code-review`, qui fait quelque chose de différent : il recherche les bogues dans le diff, où celui-ci vérifie la conformité aux spécifications et les normes de dépôt. L'installation de cette bibliothèque signifie que l'une d'elles gagne, et laquelle gagne dépend de la manière dont vous avez installé. Via le marché des plugins, tout est alias sous un préfixe `mattpocock-skills:`  et le intégré devient difficile à atteindre avec le nom non qualifié ; via une simple installation de compétences, le fichier local l'emporte et cette compétence masque le fichier intégré. Une réponse simple consiste à supprimer entièrement les compétences intégrées de Codex : une grande sauvegarde de [context](https://www.aihero.dev/ai-coding-dictionary/context) et la collision n'a plus d'importance. L'observation elle-même est sans doute un bug du Codex [harness](https://www.aihero.dev/ai-coding-dictionary/harness) — un auteur de compétence devrait être libre de nommer une compétence comme il l'entend — donc l'autre réponse est de renommer la copie locale. La modification du frontmatter ou le renommage du répertoire est annulé par `npx skills update` ; la solution de contournement durable signalée par les utilisateurs consiste à attribuer à la compétence un nouveau nom et à la supprimer  `code-review`  de l'ensemble géré, en gardant une note de la validation à partir de laquelle vous avez dérivé afin que vous puissiez la resynchroniser manuellement.

**Ses sous-agents continuent d'invoquer `/code-review` à nouveau et génèrent plus d'agents.**

Bug ouvert connu, reproduit par plusieurs personnes et dans plus d'un harnais. Les invites relatives aux normes et aux spécifications n'interdisent pas la délégation, de sorte qu'un sous-agent peut redécouvrir la compétence et se déployer à nouveau : un rapport a atteint plus de 50 agents. Le correctif que les gens ont appliqué sur les forks est une ligne ajoutée aux deux briefs des sous-agents : "Ne pas invoquer `/code-review` ou générer des agents supplémentaires - effectuez cette révision directement." Certains préfèrent le manipuler au niveau du harnais afin que chaque compétence hérite de la garde. Ni l’un ni l’autre n’est encore dans la compétence expédiée. Si vous l'exécutez sans surveillance, surveillez le nombre d'agents.

**Dois-je l'exécuter dans la même [session](https://www.aihero.dev/ai-coding-dictionary/session) qui a écrit le code ?**

Préférez-en un frais. Comme l'a dit un lecteur : "La révision du même contexte en elle-même n'est pas une révision, c'est un biais de confirmation avec une commande slash." L'agent de révision lors de la session de création détient toutes les hypothèses qui ont façonné le code, ce qui correspond exactement au contexte qu'un réviseur indépendant n'aurait pas. C'est aussi pourquoi les gens demandent [implement](https://aihero.dev/skills-implement) sans son étape de révision intégrée - il exécute la révision à l'intérieur de la session qui vient d'écrire la différence. S'invoquer  `/code-review`  à partir d'une session propre est la version honnête.

**Après chaque ticket, ou une fois à la fin ?**

Les deux fonctionnent et la compétence ne décide pas à votre place. Par ticket maintient chaque différence suffisamment petite pour que l'axe Spécification ait une spécification claire à vérifier, qui est le mode `implement` utilise. Le traitement par lots jusqu'à la fin d'une branche capture les interactions entre les tickets que le ticket par ticket transmet à chaque échec. En cas de doute, examinez chaque ticket et effectuez un dernier passage au point de branchement.

**Puis-je faire confiance aux résultats ?**

Non sans vérification. Les résultats des sous-agents sont une hypothèse, pas une preuve : une équipe a signalé une douzaine de changements radicaux apportés par des critiques basées sur la prose. La compétence regroupe les deux rapports textuellement ou légèrement nettoyés plutôt que de revérifier chaque réclamation par rapport aux fichiers, de sorte qu'une conclusion peut citer le mauvais emplacement ou surestimer un impact. Lisez la citation de chaque constatation avant d’agir en conséquence. Le fait que chaque découverte doit en comporter une – une règle de normes, une odeur et son morceau, ou une ligne de spécifications – est ce qui rend cela vérifiable.

**Pourquoi trouve-t-il de nouveaux problèmes à chaque fois que je l'exécute ?**

Parce que les correctifs créent une nouvelle surface et parce que la moitié de l’axe des normes qui appelle au jugement n’est pas déterministe entre les exécutions. Un lecteur a décrit clairement la boucle : "/code-review et /improve-code-architecture trouvent toujours de nouvelles choses à chaque fois. J'implémente des correctifs, je réexécute ces compétences, et encore et encore." Il n’y a aucune garantie de convergence. Traitez une passe comme une liste de pistes, agissez sur celles qui ont une règle citée derrière elles et arrêtez-vous - ne l'exécutez pas en boucle jusqu'à ce qu'elle revienne propre, car ce ne sera pas le cas.

**Est-ce que mon travail non engagé est examiné ?**

Non. Il diffère `<fixed-point>...HEAD`, à trois points, qui est mesuré à partir de la base de fusion et exclut les modifications par étapes et dans l'arbre de travail. Si `implement` n'a pas effectué de validation intermédiaire, le travail sur le point d'être validé est invisible pour la revue. Validez d'abord, puis révisez, puis modifiez ou ajoutez une correction.

## Indicateurs de réussite

- Il refuse de démarrer sur une mauvaise référence ou un diff vide, avant qu'un sous-agent ne soit généré.
- Le rapport arrive sous forme de deux blocs distincts sous `## Normes` et `## Spécification`, et non dans une seule liste fusionnée.
- Chaque standard trouve des noms soit d'une règle dans l'un des fichiers de votre dépôt, soit d'une des douze odeurs, avec le morceau cité ; chaque conclusion de spécification cite une ligne de la spécification.
- Le résumé final donne le pire problème par axe et refuse de choisir un gagnant global.
- En l'absence de spécification disponible, le bloc Spécification l'indique au lieu de lister les exigences qu'il a déduites du code.

## Où il s’inscrit

`code-review` est l'étape de révision à la fin de la chaîne de construction — `grill-with-docs → to-spec → to-tickets → implement → code-review` — et est également autonome sur n'importe quelle branche ou PR vers laquelle vous le pointez.

- [implement](https://aihero.dev/skills-implement) est le voisin le plus proche : il pilote la construction et appelle cette compétence comme sa propre révision finale avant de s'engager.
- [to-spec](https://aihero.dev/skills-to-spec) et [to-tickets](https://aihero.dev/skills-to-tickets) produisent le document par rapport auquel l'axe Spécification vérifie ; une spécification vague rend cet axe vague.
- [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) est la contrepartie de la base de code entière – cette compétence ne prend en compte qu'une seule différence.

[ask-matt](https://aihero.dev/skills-ask-matt) parcourt l'ensemble de l'ensemble lorsque vous n'êtes pas sûr de la compétence recherchée par la situation.
