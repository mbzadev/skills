## Ce qu’il fait

`grill-with-docs`  vous interroge sur un plan ou une conception jusqu'à ce que vous et l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) en partagiez une compréhension, et écriviez le vocabulaire et les décisions difficiles dans votre dépôt pendant ce temps. C'est le même entretien [grill-me](https://aihero.dev/skills-grill-me) qui se déroule – une série de questions, puis attendez, puis la série suivante – pointée vers une base de code.

C'est **[avec état](https://www.aihero.dev/ai-coding-dictionary/stateful)**. Toute autre compétence de grillade laisse la [session](https://www.aihero.dev/ai-coding-dictionary/session) dans votre tête ; celui-ci laisse les fichiers sur le disque. Un terme est résolu et arrive dans `CONTEXT.md` au moment où il est résolu, et non regroupé à la fin. Une décision franchit trois portes et aboutit à un ADR. C'est toute la différence, et c'est aussi la source de la plupart des problèmes que les gens rencontrent avec cette compétence : les artefacts sont de vrais fichiers dans un véritable dépôt, ils peuvent donc être absents quand vous les attendiez, et ils peuvent dériver lorsque plus d'une personne les écrit.

## Quand l’utiliser

Vous l'invoquez en tapant `/grill-with-docs`  : l’agent ne le déclenchera pas seul.

Utilisez ce skill au début d'un changement, dans un repo, lorsque le plan est encore flou et que les mots de la chose ne sont pas encore réglés. C'est l'outil à session unique. La compétence de grillade que vous souhaitez dépend de ce qui se trouve devant vous :

| Ce que vous avez | Utilisez |
| --- | --- |
| Vous ne travaillez pas du tout dans un répertoire de travail | [grille-moi](https://aihero.dev/skills-grill-me) |
| Un repo et un changement que vous pouvez régler en une seule session | `grill-with-docs` |
| Un effort trop important pour être réalisé en une seule session : une nouvelle version, une fonctionnalité importante | [wayfinder](https://aihero.dev/skills-wayfinder) |
| Un dépôt sans aucun document de domaine et sans fonctionnalité particulière en tête | `grill-with-docs`, destiné au dépôt plutôt qu'à un changement |
| Une décision bloquée sur la connaissance dans la tête d'un autre | [au-questionnaire](https://aihero.dev/skills-to-questionnaire) |

La répartition Wayfinder se résume au nombre de sessions : `/grill-with-docs` pour la planification d'une seule session, `/wayfinder` pour la planification de plusieurs sessions.

## Prérequis

La compétence écrit dans votre dépôt, vous devez donc vous trouver dans un endroit où vous pouvez écrire en toute sécurité. Les termes résolus vont dans un glossaire `CONTEXT.md`  à la racine — ou dans le `CONTEXT.md` du contexte approprié, si un `CONTEXT-MAP.md`  à la racine marque le dépôt comme multi-contexte. Les décisions vont à `docs/adr/`. Les deux sont créés paresseusement ; rien n’existe jusqu’à ce que le premier mandat ou la première décision se cristallise, il n’y a donc rien à étayer dès le départ.

Il a également besoin de deux autres compétences présentes, car sa propre  `SKILL.md` est une ligne qui leur délègue : [grilling](https://aihero.dev/skills-grilling) fournit l'entretien, [domain-modeling](https://aihero.dev/skills-domain-modeling) fournit l'écriture. L'installation de `grill-with-docs` seul vous procure une compétence qui ne fonctionne pas.

## La trace écrite

Trois choses ressortent d’une séance, et elles ne sont pas égales.

| Qu'est-ce qui a résolu | Où il atterrit |
| --- | --- |
| Un terme — le propre mot du projet pour une chose | `CONTEXT.md`, en ligne, au moment où il est résolu |
| Une décision difficile à revenir, surprenante sans contexte, et un véritable compromis | Un ADR sous `docs/adr/` |
| Tout le reste que vous avez décidé | La conversation, et nulle part ailleurs |

Cette troisième ligne est celle qui surprend les gens. `CONTEXT.md` est un glossaire et est délibérément conservé comme tel - pas de détails d'implémentation, pas de [spec](https://www.aihero.dev/ai-coding-dictionary/spec), pas de notes de travail. Les ADR sont limités aux trois conditions à la fois, de sorte que la plupart des décisions ne sont pas admissibles et que la plupart des sessions n'en produisent aucune. Une session qui produit un glossaire plus précis et aucun ADR fonctionne comme prévu, mais cela signifie que la majeure partie de ce que vous avez convenu n'existe que dans la [fenêtre contextuelle](https://www.aihero.dev/ai-coding-dictionary/context-window) dans laquelle vous l'avez accepté. Remettez cette même conversation à [to-spec](https://aihero.dev/skills-to-spec) plutôt que [effacement](https://www.aihero.dev/ai-coding-dictionary/clearing).Le glossaire est le point important. Le langage du domaine est ce que cette compétence construit réellement : les mots propres du projet, convenus une fois, de sorte que vous, l'agent et vos collègues arrêtez de payer pour les recréer. Il vaut la peine de dire que tout le monde n'est pas d'accord sur le fait que cela achète des performances d'agent : la réticence publique la plus forte est qu'un terme et son expansion en anglais simple obtiennent le même résultat à partir du [modèle](https://www.aihero.dev/ai-coding-dictionary/model), et que le vocabulaire comprime réellement la communication entre les humains qui le partagent. Cette lecture laisse toujours le glossaire précieux ; cela déplace simplement la valeur.

## Un seul responsable de l’écriture

Les sorties avec état supposent qu’une seule personne les gère. Une équipe de deux développeurs travaillant pendant quatre mois dans un dépôt a signalé une dérive d'état sur environ 20 % des PR fusionnés échantillonnés, les citations ADR et README revendiquant les surfaces les plus à dérive – les documents délibérés et organisés par l'homme ont dérivé pire que la mémoire de l'agent. L'élagage des documents périmés n'a pas tenu ; le même balayage était de nouveau obsolète en quelques jours. Ce qui a fonctionné, c'est de supprimer complètement l'état fantôme et d'ajouter une citation déterministe et un linter de lien à CI.

Connexe : l'exécution répétée de la compétence sur des modifications non liées dans un dépôt a tendance à accumuler des documents sur des sujets mixtes, car rien ne sépare la sortie d'une session de celle d'une autre. Ni l’un ni l’autre de ces éléments n’est fixé dans la compétence aujourd’hui.

## Questions fréquentes

**Dois-je utiliser ceci ou `/wayfinder` ?**

La portée du travail décide du choix. Utilisez ce skill pour ce que vous pouvez régler en une seule session ; utilisez [wayfinder](https://aihero.dev/skills-wayfinder) lorsque l’effort est trop important et doit d’abord être représenté comme une carte de décisions et de [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket). Wayfinder est plus lent et plus dense : l’invoquer pour une fonctionnalité de taille raisonnable est une erreur fréquente. Il ne remplace pas ce skill ; il peut au contraire vous renvoyer ici pour les portions de sa carte qui tiennent dans une session.

**Il a fonctionné, mais non `CONTEXT.md` et aucun ADR n'est apparu.**

Deux causes sont connues. La première est normale : rien ne justifie la création d’un document. Les ADR exigent trois conditions, et une session qui n’introduit ni nouveau vocabulaire ni décision durable n’a réellement rien à écrire. La seconde est un bogue : lorsqu’un autre orchestrateur — un cadre multi-agents ou une règle de pipeline — invoque ce skill, l’écriture d’une partie des fichiers peut échouer silencieusement alors que l’entretien continue. Ce problème est documenté mais pas corrigé. Dans ce cas, vérifiez le répertoire de travail avant de considérer la session comme terminée.

**Il a tout demandé en même temps, sans aucune recommandation et n'a jamais mentionné `CONTEXT.md`.**

C'est la compétence qui ne parvient pas à charger ses deux dépendances. Parce que  `SKILL.md` est une délégation sur une seule ligne, un agent qui ne capte pas [grilling](https://aihero.dev/skills-grilling) et [domain-modeling](https://aihero.dev/skills-domain-modeling) devine ce que signifie griller, et vous obtenez un vidage de questions indifférencié. Le chargement partiel est le cas le plus déroutant — `grilling` charge, `domain-modeling` ne le fait pas, et vous obtenez un bon entretien sans trace écrite. Cela est en corrélation avec le modèle et le niveau [effort](https://www.aihero.dev/ai-coding-dictionary/effort), et c'est le problème le plus signalé avec cette compétence. Si vous le soupçonnez, demandez directement à l'agent quelles compétences il a chargées.

**Où sont passées toutes mes autres décisions ?**

Dans la conversation uniquement. Il s’agit de la plainte ouverte la plus importante concernant la compétence : le glossaire n’est pas une spécification, la plupart des réponses ne donnent pas lieu à un ADR et il n’existe pas de registre reliant chaque réponse résolue à une spécification, un ticket et un test. Les réponses précises (garanties de commande, exigences négatives, valeurs numériques par défaut) sont adoucies en une prose plus faible en aval, et le résultat peut paraître complet tout en manquant ce que vous avez réellement décidé. L'atténuation disponible aujourd'hui consiste à conserver la session et à la transmettre directement à [to-spec](https://aihero.dev/skills-to-spec), et à relire la spécification par rapport à vos propres réponses plutôt que de supposer qu'elle les a capturées.

**Puis-je le pointer vers un dépôt existant qui ne contient aucune documentation ?**

Oui. C'est la bonne compétence pour une base de code sans ADR, sans langage de domaine et sans principes de conception – invoquez-la et dites « aidez-moi à documenter mon dépôt ». Le modèle de communauté l'associe à [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) pour construire ou réparer un `CONTEXT.md`. Attendez-vous à le diriger : il lira le code et vous demandera ce qu'il trouve, et c'est vous qui direz lesquels des mots déjà dans la base de code sont les bons.

**Que dois-je faire à la fin de la session ?**

Le message final de la compétence a tendance à être ouvert, ce qui constitue une aspérité connue. Dans le flux principal, la réponse est [to-spec](https://aihero.dev/skills-to-spec), dans la même conversation. Si le changement est suffisamment petit pour être construit immédiatement, passez directement à [implement](https://aihero.dev/skills-implement) à la place.

**Pourquoi ça s'appelle comme ça ?**

Personne n'est content du nom. Il existe une suggestion ouverte de le renommer `grill-domain-model`, ce qui décrit le comportement plus honnêtement. Rien n'a bougé dessus. Si un changement de nom arrive, la page de documentation se déplace avec lui et l'URL change.

## Indicateurs de réussite

- `CONTEXT.md` change *pendant* la session, terme par terme, plutôt que d'apparaître en bloc à la fin.
- Le glossaire se lit comme du vocabulaire pur (les mots de votre projet avec des définitions strictes) et ne contient aucun détail d'implémentation ni prose de type spécification.
- Les questions auxquelles la base de code peut répondre obtiennent une réponse en lisant la base de code, ce qui ne vous est pas demandé.
- Vous obtenez peu ou pas d'ADR, et ceux que vous obtenez sont des décisions que vous seriez ennuyé de devoir relancer en justice.
- Il remet en question un mot que vous avez utilisé car votre glossaire existant le définit différemment.

## Où il s’inscrit

`grill-with-docs` est le chef de la chaîne de construction principale :

```txt
grill-with-docs → to-spec → to-tickets → implement → code-review
```

Cela vient avant que quoi que ce soit ne soit écrit sous forme de spécification - cela produit la compréhension partagée et le vocabulaire établi que [to-spec](https://aihero.dev/skills-to-spec) synthétise ensuite sans vous interroger à nouveau. Ses voisins proches sont [grill-me](https://aihero.dev/skills-grill-me), le même entretien sans dépôt ni fichier, et [domain-modeling](https://aihero.dev/skills-domain-modeling), le glossaire et la discipline ADR qu'il anime ; les deux reposent sur la primitive [grilling](https://aihero.dev/skills-grilling). En amont de celui-ci, [wayfinder](https://aihero.dev/skills-wayfinder) cartographie les efforts trop importants pour une session et peut lui restituer des parties de la carte. Lorsque vous ne savez pas quelle compétence ou quel flux vous convient, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous dirige.
