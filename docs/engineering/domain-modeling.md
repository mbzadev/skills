## Ce qu’il fait

`domain-modeling` construit et affine le **langage omniprésent** d'un projet pendant que vous concevez — en contestant un terme qui entre en conflit avec le glossaire, en forçant un mot précis là où vous en avez utilisé un vague et en testant une relation avec un scénario concret jusqu'à ce que les limites soient exactes.

C'est la discipline **active**, pas passive. Lire `CONTEXT.md` pour emprunter son vocabulaire est une habitude d'une seule ligne que n'importe quelle compétence peut faire ; cette compétence est destinée lorsque vous *changez* de modèle. C'est ce qui le fait interrompre. Il écrit un terme résolu dans `CONTEXT.md` au moment où il est résolu, au milieu de la conversation, plutôt que de produire un glossaire bien rangé à la fin – car la version par lots est un résumé d'une [session](https://www.aihero.dev/ai-coding-dictionary/session), et la version en ligne est la sortie réelle de la session.

## Quand l’utiliser

Tapez `/domain-modeling`, ou laissez l’agent le sélectionner lorsqu’une tâche s’y prête. En pratique, l’invocation automatique est la partie la moins fiable du skill : lorsque `grill-with-docs` ou `wayfinder` demandent de le charger, les modèles sélectionnent souvent `grilling` et l’oublient. Si une session de [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) se termine sans modifier `CONTEXT.md`, c’est probablement ce qui s’est produit : invoquez alors explicitement `domain-modeling` en plus de l’autre skill.

Utilisez ce skill lorsque les *mots* sont le problème :

| La situation | Le déménagement |
| --- | --- |
| Deux personnes signifient des choses différentes par « annulation » | `domain-modeling` — choisissez le terme canonique, énumérez l'autre sous `_Avoid_` |
| "Compte" effectue trois tâches dans trois fichiers | `domain-modeling` — le divise en Client et Utilisateur |
| Vous venez de faire un choix architectural difficile à inverser | `domain-modeling` — il offre un ADR, si le choix franchit la barre |
| Le problème porte sur la *forme* du module : emplacement de la couture, profondeur de l’interface | [codebase-design](https://aihero.dev/skills-codebase-design) |
| Vous souhaitez que l'ensemble du plan soit interrogé avant de construire | [grill-with-docs](https://aihero.dev/skills-grill-with-docs), qui pilote cette compétence en dessous |
| Vous voulez qu'un terme soit recherché, pas modifié | Rien. Lisez `CONTEXT.md`. C'est un fichier. |

## Prérequis

Aucun à l’avant. La compétence écrit à deux endroits et crée les deux paresseusement :

- **`CONTEXT.md`** à la racine du dépôt, créé par le premier terme résolu. Dans un dépôt avec un `CONTEXT-MAP.md` à la racine, les termes vont dans le contexte `CONTEXT.md` que la carte pointe à la place.
- **`docs/adr/`**, créé par le premier ADR qui efface la barre.

Rien n’a besoin d’exister avant de commencer, et rien n’est créé de manière spéculative.

## Deux artefacts, deux barres

Le glossaire et l'ADR sont soumis à des normes différentes, et leur confusion est la cause de la plupart des problèmes liés à cette compétence.

| | `CONTEXT.md` | `docs/adr/NNNN-slug.md` |
| --- | --- | --- |
| Détient | Termes. Qu'est-ce que **c'est**, en une ou deux phrases, avec des synonymes rejetés sous `_Avoid_` | Une décision, en une à trois phrases : contexte, choix, raison |
| Barre à écrire | Un terme vague devenu canonique | **Tous les trois** : difficile à inverser, surprenant sans contexte, résultat d'un véritable arbitrage |
| Écrit | Inline, dès que le terme est réglé | Offert, non assumé |
| Ne tient jamais | Détails d'implémentation, une [spec](https://www.aihero.dev/ai-coding-dictionary/spec), un bloc-notes, des concepts généraux de programmation | Un agenda de tous les choix réalisé cette séance |

Si vous manquez l'un des trois tests de l'ADR, il n'y aura pas d'ADR. Une décision facilement réversible sera tout simplement annulée ; une question sans surprise n’est une question pour personne ; un sans véritable disque alternatif que vous avez fait la chose évidente.

La `CONTEXT.md` règle est celle à laquelle il faut effectivement s'accrocher, car c'est celle qui casse sur le terrain. **Il s'agit d'un glossaire et rien d'autre.** Si cette case n'est pas cochée, les modèles traitent "écrire dans `CONTEXT.md`" comme l'autorisation de conserver chaque réponse que vous donnez, et le fichier se transforme en une spécification en cours d'exécution - c'est le problème le plus signalé avec la compétence, sur plusieurs modèles.

## Références croisées et limites

Lorsque vous expliquez le fonctionnement d’un concept, le skill vérifie le code et fait remonter les contradictions. Par exemple : « Le code annule des commandes entières, mais vous venez de dire qu’une annulation partielle est possible ; quelle règle est correcte ? » Le langage et le code sont ainsi remis en accord avant toute modification.

La limite mérite d’être connue. Il fait des références croisées au **code** et aux `CONTEXT.md`/ADR versionnés, et rien d’autre. Il ne recherche pas votre outil de suivi des problèmes : une collision de noms discutée et réglée dans un ticket fermé il y a plusieurs mois lui semblera donc nouvelle. Une [demande ouverte](https://github.com/mbzadev/skills/issues/717) propose de corriger ce point ; en attendant, ajoutez l’instruction à votre fichier `docs/agents/domain.md`, que les skills lisent déjà.

## Questions fréquentes

**Mon `CONTEXT.md`  fait 500 lignes. 1 000. 3 000. Que dois-je faire ?**

La taille est un symptôme, pas la maladie : le fichier a absorbé des détails d’implémentation et des décisions qui n’ont jamais été reformulés dans le glossaire. Le correctif peut être direct : `/grill-with-docs make my CONTEXT.md more concise and remove any implementation details from it`. Exécutez cette demande sur un fichier volumineux et une grande partie du contenu superflu disparaîtra. Ne passez à `CONTEXT-MAP.md` que lorsque le fichier est réellement concis mais couvre encore deux domaines qu’un lecteur ne voudrait pas garder ensemble ; diviser un fichier simplement volumineux ne ferait que produire plusieurs fichiers volumineux.

**Pourquoi est-ce `CONTEXT.md` et pas `GLOSSARY.md` ?**

Cette question de nommage est la plus controversée de l’ensemble et n’a pas de réponse définitive. L’argument en faveur de `GLOSSARY.md` est simple : si le fichier ne contient qu’un glossaire, ce nom est plus explicite. À l’inverse, `CONTEXT-MAP.md` désignant plusieurs fichiers `CONTEXT.md` se lit naturellement, et le mot _contexte_ possède déjà un sens précis en conception pilotée par le domaine : une zone délimitée du modèle. Vous pouvez renommer ces fichiers dans une variante locale, mais tous les autres skills recherchent `CONTEXT.md` ; il faudra donc les adapter ensemble.

**Où est passé `/ubiquitous-language`  ?**

Il a été supprimé et n’est pas obsolète. Son travail a été transféré vers `domain-modeling`, qui maintient l'ensemble du modèle en continu plutôt que de supprimer un glossaire d'une seule conversation. L'application du vocabulaire est devenue plus lourde, pas moins : elle s'exécute désormais sous le grillage, le triage et la cartographie plutôt que comme une passe distincte que vous n'oubliez pas de faire.

**Comment puis-je obtenir un glossaire pour une base de code qui n'en a pas ?**

Demandez-le explicitement au lieu d’attendre qu’il se constitue de lui-même. La commande documentée est `/grill-with-docs aide-moi à structurer mon dépôt existant avec un CONTEXT.md`. Attendez-vous à un entretien approfondi : un utilisateur a reçu plus de 50 questions avant d’obtenir un fichier abouti. Une invocation occasionnelle construirait le glossaire beaucoup trop lentement dans une base de code ancienne et désordonnée.

**Puis-je conserver le modèle de domaine et utiliser mon propre format ADR ?**

Pas proprement aujourd’hui. La moitié du glossaire et la moitié de l'ADR sont regroupées dans une seule compétence, de sorte qu'une équipe avec une convention ADR établie (modèle différent, emplacement différent, dénomination différente) reçoit des instructions qui entrent en conflit avec son style maison. Les options actuelles consistent à copier la compétence localement et à la modifier, ou à remplacer les conventions ADR dans les propres documents d'agent de votre dépôt. Séparer les deux est [une demande ouverte](https://github.com/mbzadev/skills/issues/557).

**Un glossaire mérite-t-il réellement sa place ? C'est un artefact de plus à examiner, et il peut devenir obsolète.**

Parfois, ce n’est pas le cas, et il vaut la peine d’être honnête quant à l’endroit où cela se produit. DDD devient moins utile à mesure qu'il se rapproche de la mise en œuvre - le gain se situe en amont, dans la dénomination et l'alignement des concepts, et non dans les agrégats et la cérémonie des couches. Le contrôle des synonymes est important au niveau des limites de dénomination : noms de modules, noms de tables, énumérations d'état, titres de problèmes, commandes CLI. Cela importe beaucoup moins dans la prose ordinaire. Il existe également une objection réelle selon laquelle les termes de domaine compressent la communication *entre les humains* qui les partagent déjà, et qu'un agent répond de la même manière à la description en anglais simple - selon cette lecture, la valeur du glossaire est de vous maintenir, vous et vos réviseurs, alignés sur ce que fait l'agent, et non de l'améliorer. Sur une version d'une journée, ignorez-la. Et un glossaire non révisé rédigé par un agent est pire que rien : il devient une tradition apparemment confiante que les sessions ultérieures traitent comme la vérité.

**Peut-il transformer mes vagues invites en langage de domaine pour moi ?**

Non, et il n’existe aucun plan pour une compétence qui le fasse. Un langage de domaine que vous ne comprenez pas vous-même devient une bêtise dénuée de sens une fois écrit. Cette compétence impose la précision une fois que vous avez compris – elle ne fabrique pas de vocabulaire que vous n’avez pas. Le piège associé consiste à utiliser des mots de domaine sans effectuer de modélisation : les bons noms sur la mauvaise structure conceptuelle produisent un résultat qui se lit correctement et qui ne l'est pas.

## Indicateurs de réussite

- Cela vous arrête au milieu d'une phrase pour demander laquelle des deux choses vous vouliez dire, au lieu d'en choisir une et de passer à autre chose.
- `CONTEXT.md` change **pendant** la conversation, pas en rafale à la fin.
- Il refuse de rédiger un ADR pour quelque chose que vous pourriez annuler demain – et indique lequel des trois tests a échoué.
- Les nouvelles entrées définissent ce qu'*est* une chose en une ou deux phrases et nomment les mots que vous abandonnez sous `_Avoid_`.
- Il vous cite votre code lorsque votre code et votre phrase ne sont pas d'accord.
- `CONTEXT.md` devient plus court à mesure qu'il s'allonge.

## Où il s’inscrit

`domain-modeling` est une **référence invoquée par le modèle** qui s'exécute *sous* d'autres compétences plus souvent qu'elle ne s'exécute seule. [grill-with-docs](https://aihero.dev/skills-grill-with-docs) le conduit à travers une session de grillades, [wayfinder](https://aihero.dev/skills-wayfinder) le charge tout en traçant une carte, [triage](https://aihero.dev/skills-triage) l'utilise pour conserver [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket) selon les mots propres du projet, et [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) l'appelle alors que les décisions se cristallisent. Son frère le plus proche est [codebase-design](https://aihero.dev/skills-codebase-design) : les deux sont la couche de vocabulaire sous tout le reste, celui-ci pour le *domaine*, celui-là pour la *forme* du module. Il est également accessible directement, lorsque vous souhaitez suivre la discipline sans vous engager dans les étapes de la compétence qui l'appliquerait normalement. Lorsque vous ne savez pas quelle compétence vous convient, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous dirige.
