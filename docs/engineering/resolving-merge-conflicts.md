## Ce qu’il fait

`resolving-merge-conflicts` fonctionne via une fusion ou un rebase git en cours, morceau par morceau, puis exécute les propres vérifications du projet et termine l'opération avec un commit.

Il refuse de traiter un conflit comme un problème de texte. Avant de toucher un morceau, il retrace chaque côté jusqu'à sa **[source principale](https://www.aihero.dev/ai-coding-dictionary/primary-source)** — le message de validation, le PR, le problème d'origine — il choisit donc entre deux intentions plutôt qu'entre deux blocs de texte, et il préserve les deux partout où ils sont compatibles. Là où ce n’est vraiment pas le cas, il choisit le camp qui correspond à l’objectif déclaré de la fusion et nomme le compromis. Il n'invente aucun nouveau comportement pour masquer un conflit, et `--abort` n'est pas une option dont il dispose : la fusion est toujours effectuée jusqu'à un commit terminé.

## Quand l’utiliser

Tapez `/resolving-merge-conflicts`, ou l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) l'atteint automatiquement lorsqu'une tâche convient.

Atteignez-le lorsque git s'est déjà arrêté sur des conflits qu'il n'a pas pu résoudre lui-même. Cela concerne le conflit en face de vous, et non aucun des deux côtés :

| Votre situation | Compétence |
| --- | --- |
| Mi-fusion ou mi-rebase, marqueurs de conflit dans l'arborescence | Celui-ci |
| Fusion terminée, quelque chose se comporte mal pour des raisons que vous ne pouvez pas voir | [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) |
| Planifier comment découper le travail pour que les branches entrent moins en collision | Ni l'un ni l'autre — voir la question du travail parallèle ci-dessous |

## Sources primaires sur `ours` et `theirs`

Le mode d'échec qui existe pour tuer est résolu par le drapeau : `--ours`, `--theirs`, ou par la suppression manuelle du bloc qui semble le moins important, de sorte que les marqueurs disparaissent et que la construction se compile. Cette résolution peut être syntaxiquement parfaite tout en laissant tomber silencieusement une modification faite exprès par quelqu'un.

Vous ne pouvez pas conserver une intention que vous n'avez pas lue. Ainsi, le travail commence dans l'historique — commits, PR, [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket) — et passe ensuite seulement au diff. Une autre étape dans la boucle existe pour la même raison : la compétence trouve les propres [vérifications automatisées](https://www.aihero.dev/ai-coding-dictionary/automated-check) du dépôt et les exécute avant de valider, car une fusion est l'endroit le plus simple dans git pour produire du code qui satisfait aux deux branches et ne réussit aucun des tests.

## Questions fréquentes

**Codex résout déjà assez bien les conflits tout seul. Pourquoi cela nécessite-t-il une compétence ?**

La valeur ajoutée réside dans les étapes « trouver les sources primaires » et « exécuter des boucles de rétroaction », qui autrement doivent être déclenchées manuellement à chaque fois. Un agent spontané produira généralement une résolution plausible à partir du seul diff et s'arrêtera là. La valeur de la compétence correspond aux deux étapes qu'elle ne permettra pas à l'agent de sauter : lire pourquoi chaque côté existe et exécuter les vérifications par la suite. C'est une mince marge par rapport à un bon [modèle](https://www.aihero.dev/ai-coding-dictionary/model), et c'est censé l'être : au moins un lecteur a prédit qu'il s'agit d'une compétence globale qui devient inutile à mesure que les modèles s'améliorent.

**Dois-je éloigner les agents parallèles des mêmes fichiers pour éviter les conflits en premier lieu ?**

Surtout non. Le zonage des fichiers entre des tâches parallèles coûte plus cher qu'il n'en économise, car les agents sont suffisamment doués pour gérer les conflits de fusion pour que le compromis ne soit pas aussi difficile qu'il y paraît. La seule discipline à conserver est de commencer par effectuer de grands refactors. Un grand changement de nom après que dix branches ont été dédoublées, c'est le cas qui reste cher.

Une mise en garde d'un rapport d'utilisateur sur les arbres de travail parallèles : lorsque des frères et sœurs [sessions](https://www.aihero.dev/ai-coding-dictionary/session) créent chacun un ticket dans leur propre arbre, la fusion est mieux effectuée par la session qui a écrit la modification, car c'est celle qui connaît déjà l'intention. Regrouper les conflits de tout le monde sur un seul agent à la fin jette exactement le [contexte](https://www.aihero.dev/ai-coding-dictionary/context) que l'étape 2 de cette compétence doit reconstruire.

**Pourquoi jamais `--abort` ?**

Abandonner annule le travail de résolution et vous ramène au même conflit, inchangé, la prochaine fois que vous essayez. La compétence est écrite pour le cas où la fusion va avoir lieu. Si vous avez décidé que cela ne devrait pas se produire, c'est une décision à prendre avant d'invoquer, et non une branche à l'intérieur de la boucle.

## Indicateurs de réussite

- L’agent cite des messages de commit, des pull requests ou des tickets pour justifier la résolution, pas seulement les fragments en conflit.
- Chaque morceau se retrouve avec le comportement des deux côtés, ou avec une note explicite nommant ce qui a été abandonné et pourquoi.
- Rien n'apparaît dans le résultat qui ne se trouvait sur aucune des deux branches.
- Typecheck, tests et format ont été localisés et exécutés en vert *avant* la validation, pas après que vous ayez remarqué quelque chose de cassé.
- Vous terminez sur une arborescence propre avec l'opération terminée, y compris chaque validation restante dans un rebase multi-validation.

## Où il s’inscrit

Un outil autonome accessible à tout moment, sans dépendance à aucune autre compétence : il commence lorsque git s'arrête et se termine lorsque l'arborescence est propre et validée. Son seul véritable voisin est [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), qui prend le relais au moment où une fusion est résolue proprement mais où le code fusionné se comporte mal - un problème de diagnostic, pas de conflit. Il s'éloigne entièrement du flux principal de l'idée à l'expédition, donc [ask-matt](https://aihero.dev/skills-ask-matt) est la carte de ce qui se déroule avant et après.
