## Ce qu’il fait

`code-review` examine le diff entre `HEAD` et un point de référence que vous indiquez — commit, branche, balise, `main` ou `HEAD~5` — selon deux axes. **Normes** vérifie que le code respecte les conventions du dépôt ; **Spécification** vérifie qu’il répond bien à la demande d’origine ou à la [spécification](https://www.aihero.dev/ai-coding-dictionary/spec). Chaque axe est confié à un [sous-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) distinct afin que les analyses restent indépendantes.

Les deux axes restent séparés et ne sont jamais reclassés. Le rapport termine par le problème le plus grave de chaque axe, sans désigner de gagnant unique : un changement peut respecter les normes tout en répondant à la mauvaise demande, ou satisfaire la demande tout en rompant les conventions du dépôt. Un verdict global masquerait l’un de ces échecs.

## Quand l’utiliser

Tapez `/code-review`, ou laissez l’agent le sélectionner automatiquement lorsque vous demandez la revue d’une branche, d’une PR, d’un travail en cours ou de tout changement « depuis X ».

| Votre situation | Utilisez |
| --- | --- |
| Un diff existe et vous voulez savoir s'il est bien construit *et* est la bonne chose | `code-review` |
| Vous voulez traquer les bogues du diff — chemins nuls, courses, erreurs d’exécution | La revue intégrée de Codex, et non ce skill (voir le conflit de noms ci-dessous) |
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

L'étape 1 dépend de  `docs/agents/issue-tracker.md`, que [setup-mabza-skills](https://aihero.dev/skills-setup-mabza-skills) écrit. Sans cela, l'axe fonctionne toujours si vous lui donnez un chemin. Sans aucune spécification, le sous-agent Spécification est ignoré et le rapport indique « aucune spécification disponible » plutôt que d'inventer des exigences.

## Les deux axes

| | Normes | Spécification |
| --- | --- | --- |
| Question | Est-ce bien construit ? | Est-ce la bonne chose ? |
| Lit | Les normes documentées du dépôt, ainsi que la référence en matière d'odeur | Le problème ou la spécification d'origine |
| Rapports | Violations documentées (peut être difficile) et odeurs (toujours une question de jugement) | Exigences manquantes ou partielles, dérive du périmètre, exigences mal mises en œuvre |
| Chaque découverte cite | Le fichier de normes et la règle, ou le nom de l’odeur avec l’extrait concerné | La ligne de la spécification |

Cette conception évite les revues génériques qui ignorent vos normes : elles signalent parfois des choix délibérés et manquent les invariants dont dépend réellement la base de code. La documentation du dépôt est donc la [source principale](https://www.aihero.dev/ai-coding-dictionary/primary-source) de l’axe Normes, et **les conventions du dépôt l’emportent toujours**.

La **référence des mauvaises odeurs** constitue le socle minimal : douze odeurs de code de Fowler tirées du chapitre 3 de _Refactoring_ — nom mystérieux, code dupliqué, envie de fonctionnalité, amas de données, obsession primitive, commutateurs répétés, chirurgie au fusil de chasse, changement divergent, généralité spéculative, chaînes de messages, intermédiaire et héritage refusé. Chacune est une heuristique, par exemple « possible envie de fonctionnalité », jamais une violation certaine. Chaque constat explique ce qu’il est et comment y remédier. Les règles déjà imposées par le linter sont ignorées par les deux axes.

## Questions fréquentes

**Il entre en collision avec celui de Codex `/code-review`. Que dois-je faire ?**

Le problème le plus souvent signalé avec ce skill n’est toujours pas corrigé. Codex fournit son propre `/code-review`, qui recherche des bogues dans le diff, alors que celui-ci vérifie la conformité aux spécifications et aux normes du dépôt. Selon le mode d’installation, l’un peut masquer l’autre : l’installation locale peut prendre le pas sur le skill intégré, tandis que le plugin peut imposer un préfixe de nom. Si cette collision vous gêne, renommez la copie locale et notez la version d’origine afin de pouvoir la resynchroniser après une mise à jour.

**Ses sous-agents continuent d'invoquer `/code-review` à nouveau et génèrent plus d'agents.**

Un bogue ouvert, reproduit par plusieurs personnes dans plusieurs harnais, permet à un sous-agent de recharger le skill et de relancer la revue. Certains correctifs ajoutent aux consignes des sous-agents : « N’invoquez pas `/code-review` et ne créez pas d’agent supplémentaire ; effectuez directement cette revue. » Si vous exécutez le skill sans surveillance, contrôlez le nombre d’agents engendrés.

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

[ask-mabza](https://aihero.dev/skills-ask-mabza) parcourt toute la collection lorsque vous n'êtes pas sûr de la compétence recherchée par la situation.
