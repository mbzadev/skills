## Ce qu’il fait

`implement` réalise un travail déjà décidé. Donnez-lui un [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket), une [spécification](https://www.aihero.dev/ai-coding-dictionary/spec) ou le plan convenu dans la conversation ; il écrit le code, applique [tdd](https://aihero.dev/skills-tdd) aux coutures convenues, vérifie les types, lance [code-review](https://aihero.dev/skills-code-review) à la fin et crée le commit sur la branche actuelle.

Il ne rouvre jamais le plan. Il ne mène pas de nouvel entretien, ne demande pas de clarification et ne propose pas une autre approche. Tout ce qui a été décidé en amont constitue son entrée ; le skill transforme cet accord en code.

## Quand l’utiliser

Vous l’invoquez explicitement avec `/implement` : Codex ne le déclenche pas seul, car `agents/openai.yaml` définit `policy.allow_implicit_invocation: false`. Lorsque [ask-mabza](https://aihero.dev/skills-ask-mabza) ou [to-tickets](https://aihero.dev/skills-to-tickets) indique « puis `/implement` pour chaque ticket », il s’agit d’une instruction destinée à l’utilisateur.

Le lieu de résidence actuel du travail détermine s'il s'agit de la bonne compétence :

| Le travail est… | Atteindre |
| --- | --- |
| Un ticket sur l’outil de suivi | `/implement #42`, un ticket par [session](https://www.aihero.dev/ai-coding-dictionary/session), [clearing](https://www.aihero.dev/ai-coding-dictionary/clearing) contexte entre tickets |
| Une spécification, pas encore divisée, et la construction s'étend sur des sessions | [to-tickets](https://aihero.dev/skills-to-tickets) d'abord, puis `/implement` par ticket |
| Une spécification, et la construction est petite | `/implement` directement par rapport à la spécification |
| Seulement dans la conversation que vous venez d'avoir, et c'est encore petit | `/implement` juste là, dans la même fenêtre |
| Pas encore écrit nulle part | [grill-with-docs](https://aihero.dev/skills-grill-with-docs), ou [grill-me](https://aihero.dev/skills-grill-me) s'il n'y a pas de base de code |
| Un comportement concret que vous souhaitez tester en premier, sans spécification | [tdd](https://aihero.dev/skills-tdd) directement |
| Déjà construit et vous souhaitez qu'il soit vérifié | [code-review](https://aihero.dev/skills-code-review) directement |

Le cas de la même session mérite d'être nommé car la première ligne de la compétence ne le couvre pas.  `SKILL.md`  dit "la spécification ou les tickets", ce qui pousse le [modèle](https://www.aihero.dev/ai-coding-dictionary/model) à partir à la recherche d'un fichier qui n'existe pas. Si le plan réside uniquement dans le fil de discussion, dites-le lorsque vous l'invoquez.

## Prérequis

`implement`  s'engage sur la branche sur laquelle vous vous trouvez. Il n’en crée pas et ne le demande pas. Vérifiez que vous êtes sur la branche sur laquelle vous souhaitez travailler avant de commencer.

Si les tickets provenaient de [to-tickets](https://aihero.dev/skills-to-tickets), l’outil de suivi sur lequel ils vivent a été configuré par [setup-mabza-skills](https://aihero.dev/skills-setup-mabza-skills). `code-review` lit la même configuration pour trouver la spécification d'origine à la clôture.

## Ce qu'une seule exécution fait

Une course comporte cinq temps, dans l'ordre :

1. Lisez le ticket ou les spécifications et résolvez les coutures.
2. Conduisez [tdd](https://aihero.dev/skills-tdd) aux coutures préalablement convenues, une tranche rouge-verte à la fois.
3. Typecheck souvent, exécutez des fichiers de test uniques au fur et à mesure.
4. Exécutez la suite de tests complète une fois, à la fin.
5. Exécutez [code-review](https://aihero.dev/skills-code-review), puis validez-vous dans la branche actuelle.

Un trajet couvre un ticket. Les tickets produits par [to-tickets](https://aihero.dev/skills-to-tickets) sont des tranches verticales dimensionnées pour tenir dans une seule nouvelle [fenêtre contextuelle](https://www.aihero.dev/ai-coding-dictionary/context-window). Le rythme prévu est donc : effacer le contexte, réaliser un ticket, le valider, puis effacer à nouveau. Chaque ticket est autonome, ce qui rend le contexte du ticket précédent inutile.

## Coutures pré-convenues

L'idée sur laquelle repose la compétence est la **couture** : la limite publique à laquelle vous observez le comportement, sans atteindre l'intérieur. Les tests sont à portée de main. Travailler selon un accord convenu avant l'écriture d'un code est ce qui maintient les tests durables, car l'implémentation en dessous peut être réécrite sans que les tests ne bougent.

Le mot « convenu à l'avance » fait un vrai travail, et c'est aussi l'articulation la plus faible de la compétence. Rien à l'intérieur `implement` ne correspond aux coutures. `tdd` est la compétence qui demande, et elle refuse d'écrire un test sur une couture non confirmée. Ainsi, en pratique, l'accord se produit soit en amont de la spécification, soit lors du premier échange du run. Si cela ne se produit nulle part, la précondition ne se déclenche jamais et l'exécution devient silencieusement "il suffit d'écrire le code". Nommer les coutures dans la spécification est ce qui arrête cela.

## Questions fréquentes

**C'est terminé, mais mon ticket est toujours ouvert et les critères d'acceptation ne sont toujours pas cochés.**

Correct et attendu. `implement` n'a aucune étape d'achèvement. Il se termine à la validation et ne touche jamais à l'élément de travail, confirmé sur les problèmes GitHub et sur l’outil de suivi de Markdown local, il ne s'agit donc pas d'un problème d'intégration de l’outil de suivi. Il ne donne pas non plus suite aux conclusions `code-review` produites et ne coche pas les cases `- [ ]` sur le problème d'origine. Fermez le ticket et rapprochez vous-même les critères. Cela mord le plus durement sur une chaîne de dépendance, car `to-tickets` définit la frontière comme des tickets dont les bloqueurs sont tous fermés. Si rien ne se ferme, rien ne se débloque visiblement.

**Puis-je le pointer sur tous mes tickets à la fois, ou en exécuter plusieurs en parallèle ?**

Non. Une invocation, un ticket. L'envoi par lots dans une file d'attente de tickets et la distribution du [sous-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) sont tous deux demandés à plusieurs reprises, et aucun n'existe. Exécuter plusieurs sessions `/implement`  côte à côte dans une seule extraction est pire que non prise en charge : un rapport de terrain décrit un `git commit --amend` dans une session atterrissant sur le commit d'une autre session, une cache disparaissant de `refs/stash` et des commits atterrissant sur la mauvaise branche, le tout en un seul après-midi sur trois problèmes. Les sessions partagent un répertoire de travail, un index et un HEAD. Les arbres de travail Git sont la solution de contournement de la communauté, et notez que `refs/stash` est également partagé entre les arbres de travail, donc les arbres de travail à eux seuls ne résolvent pas le cas de dissimulation. Si vous voulez du parallélisme aujourd'hui, vous l'assemblez vous-même.

**Peut-il ouvrir une pull request au lieu de valider ?**

Non intégré. Il s'engage directement sur la branche actuelle, ce que plusieurs personnes trouvent trop impatients : le code atterrit avant d'avoir eu l'occasion de vérifier son fonctionnement. Il n'y a pas d'indicateur de configuration ni de mode PR. Les gens le remplacent lors de l'invocation (« s'engager dans une branche et ouvrir un PR ») ou en modifiant leur copie locale de la compétence.

**`code-review` dit qu'il ne peut pas voir mes modifications.**

`code-review` reviews `git diff <fixed-point>...HEAD`, qui exclut les modifications par étapes et dans l'arbre de travail. `implement` l'exécute avant la validation, donc à moins qu'une validation intermédiaire n'existe déjà, il n'y a rien dans cette différence à réviser. Plusieurs personnes l'ont signalé et le problème n'est pas résolu des deux côtés. Engagez-vous d’abord, puis examinez le point à partir duquel vous êtes parti.

Par ailleurs, certaines personnes ne souhaitent délibérément pas que la révision soit effectuée au cours de l'exécution, car un agent révisant le code qu'il vient d'écrire est biaisé en faveur de sa propre solution. Exécuter [code-review](https://aihero.dev/skills-code-review) dans une nouvelle session par rapport à un point fixe est une alternative légitime, et c'est la même raison pour laquelle la compétence exécute ses deux axes dans des sous-agents distincts.

**Un ticket a brûlé 150 000 jetons. Est-ce que je l'utilise mal ?**

Il est probable que le ticket soit trop gros plutôt que la compétence soit mal utilisée. Une exécution effectue une exploration de la base de code, une boucle rouge-vert par couture, une suite complète et une révision, donc un ticket non trivial dépassant 100 000 [tokens](https://www.aihero.dev/ai-coding-dictionary/token) est normal plutôt qu'un signe que quelque chose s'est cassé. Le levier est en amont : dimensionnez correctement les tickets dans [to-tickets](https://aihero.dev/skills-to-tickets) afin que chacun s'adapte à une nouvelle fenêtre. Si un seul ticket continue d'exploser, divisez-le plutôt que d'augmenter le niveau [effort](https://www.aihero.dev/ai-coding-dictionary/effort).

**`/implement #2` dans une nouvelle session, j'ai travaillé sur quelque chose de complètement sans rapport.**

`#2` est résolu par rapport à toute liste numérotée que l'agent peut voir, qui dans une nouvelle session peut être un fichier de tâches, une liste de contrôle ou une autre liste de travail plutôt que l’outil de suivi configuré. La résolution est confiante plutôt que fermée, de sorte que l’erreur n’est évidente que lorsqu’elle a commencé. Transmettez la référence complète, l'URL du problème ou `owner/repo#2`, et demandez-lui de confirmer le titre avant qu'il ne commence.

## Indicateurs de réussite

- La session s'ouvre en lisant le ticket ou la spécification et en reformulant ce qu'elle va construire, plutôt que de vous demander quoi construire.
- Vous pouvez voir une véritable invocation `/tdd` dans la trace, pas seulement des tests apparaissant dans le diff.
- Les contrôles de type et les fichiers de test uniques s'exécutent à plusieurs reprises pendant l'exécution, et la suite complète s'exécute une fois vers la fin.
- L'exécution atteint une validation sur votre branche actuelle sans que vous lui demandiez de continuer.
- Le différentiel correspond à la valeur d'un ticket : une tranche verticale à travers chaque couche, et non plusieurs tickets balayés ensemble.

## Où il s’inscrit

`implement` est l'étape de construction de la chaîne principale, la deuxième à partir de la fin :

```txt
grill-with-docs → to-spec → to-tickets → implement → code-review
```

Ses voisins sont [to-tickets](https://aihero.dev/skills-to-tickets), qui produit les tickets qu'il consomme et déclare les fronts de blocage qui décident de leur ordre ; [tdd](https://aihero.dev/skills-tdd), qu'il entraîne intérieurement à chaque couture ; et [code-review](https://aihero.dev/skills-code-review), qu'il exécute avant de s'engager. Il se situe en aval des compétences de planification et leur fait confiance. Il ne revalide pas la forme de ce qui lui a été remis, de sorte qu'une carte mal structurée ou un ticket superposé horizontalement est construit tel qu'écrit.

Cette confiance est la raison pour laquelle [wayfinder](https://aihero.dev/skills-wayfinder) fusionne sur la chaîne à [to-spec](https://aihero.dev/skills-to-spec) plutôt que de boucler sa carte directement dans `implement`. Accédez directement à `implement` à partir d'une carte uniquement lorsque l'effort s'est avéré vraiment minime.

[ask-mabza](https://aihero.dev/skills-ask-mabza) est le routeur sur toute la collection lorsque vous n'êtes pas sûr du flux dans lequel vous vous trouvez.
