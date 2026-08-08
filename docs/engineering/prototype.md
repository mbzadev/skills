## Ce qu’il fait

`prototype` écrit **un code jetable qui répond à une question** : ce modèle d'état semble-t-il correct ou à quoi devrait ressembler cet écran. La question vient en premier et décide de la forme de tout ce qui suit ; un prototype qui répond à la mauvaise question est un pur déchet, aussi beau soit-il.

Le caractère jetable contraint la manière dont le code est *écrit* ; il ne promet pas sa suppression. Pas de tests, pas de gestion des erreurs au-delà du strict nécessaire, pas d’abstraction ni de persistance : rien de cela n’aide à répondre à la question étudiée. La réponse utile rejoint ensuite le code réel, tandis que le prototype reste sur une branche séparée de la branche principale comme preuve exécutable du raisonnement.

## Quand l’utiliser

Tapez `/prototype`, ou l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) l'atteint automatiquement lorsqu'une tâche convient.

Atteignez-le dès que vous rencontrez une question que vous ne pouvez pas régler en parlant – une machine à états dont vous ne pouvez pas garder les cas extrêmes dans votre tête, un écran que vous ne pouvez pas imaginer tant que vous n'avez pas vu trois versions côte à côte. Les séances de [Grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) gonflent exactement sur ces questions : l'agent reformule, vous devinez, et la portée s'agrandit pour combler l'incertitude. Arrêtez de griller, créez la version jetable, regardez-la, puis répondez en une seule ligne. Si, à la place, quelque chose déjà construit se comporte mal et que vous voulez savoir pourquoi, utilisez [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) — le prototypage explore ce qu'il faut construire, pas pourquoi l'objet construit est cassé.

Vous arriverez également ici sans le choisir. [wayfinder](https://aihero.dev/skills-wayfinder) fichiers `prototype` décision [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket) sur sa carte, et en travailler une est cette compétence.

## Deux branches

La question sélectionne la branche, et les branches produisent des artefacts très différents :

- **"Ce modèle logique/état vous convient-il ?"** — un **fichier HTML unique partageable**. Une page autonome, sans build ni serveur, que quelqu'un ouvre en double-cliquant. Il comporte un panneau d'état étiqueté qui s'affiche à nouveau après chaque clic, des boutons de lecture libre pour accéder au modèle dans n'importe quel ordre, et des **procédures guidées** à onglets — un scénario par onglet, chacun avec les boutons ordonnés sur lesquels appuyer en dessous. Tout est étiqueté dans le langage du domaine, vous pouvez donc le confier à un concepteur, un PM ou un expert du domaine et les laisser tester eux-mêmes le modèle. La logique derrière la page est un petit module pur – un réducteur, une machine, un ensemble de fonctions – maintenu propre du DOM afin que la version validée passe directement dans le code réel.
- **"À quoi cela devrait-il ressembler ?"** — plusieurs variantes d'interface utilisateur **radicalement différentes** sur un itinéraire, commutables à partir d'une barre inférieure flottante et d'un paramètre d'URL  `?variant=` . Les variantes doivent être en désaccord sur la structure, pas sur la couleur ; trois grilles de cartes modifiées sont un papier peint, pas un prototype. Dans la mesure du possible, ils s'affichent à l'intérieur d'une page réelle, en fonction de données réelles et d'une densité réelle, car une variante jugée dans le vide semble toujours correcte.

Les deux gardent l’état en mémoire, démarrent sans aucune réflexion et vous montrent l’état complet après chaque étape. Au moment où vous vous retrouvez à en renforcer un – en ajoutant un test, en câblant la vraie base de données, en généralisant pour un cas dont vous pourriez avoir besoin plus tard – vous avez arrêté le prototypage.

## Le prototype est une source primaire

Un prototype fini laisse deux choses, et elles vont à des endroits différents.

La **réponse** — le verdict et la question qu'il a résolue — est capturée de manière durable : un message de validation, un ADR, le problème de mise en œuvre. C’est ce que conserve la branche principale, intégrée au vrai code.

Le **prototype** est la preuve exécutable d'où provient la réponse, et il n'est pas supprimé. Il n'appartient pas non plus à main - il n'y a rien à maintenir et il pourrit vite - donc il est engagé dans une branche jetable `prototype/<name>`  hors de main, jamais fusionnée, avec un [pointeur de contexte](https://www.aihero.dev/ai-coding-dictionary/context-pointer) vers cette branche laissée sur le problème d'implémentation. Le principal reste propre ; l'exploration reste trouvable et réexécutable par celui qui reprend ensuite le travail.

## Questions fréquentes

**Attendez : le prototype n'est-il pas censé être supprimé ?**

Plus maintenant. Avant, c'était : construisez-le, conservez la réponse, rangez le code. L'objection la plus vive à cela n'a jamais porté sur la vitesse - c'était *qui reprendra le travail ensuite [session](https://www.aihero.dev/ai-coding-dictionary/session), et sur quoi doivent-ils travailler ?* Un résumé en prose d'un prototype perd ce qui le rendait convaincant. Le prototype est donc désormais traité comme une [source primaire](https://www.aihero.dev/ai-coding-dictionary/primary-source) : il atterrit sur une  `prototype/<name>` branche hors de main et le problème d'implémentation y pointe. Ce qui a changé, c'est l'endroit où réside le code, et non la discipline : il ne fusionne toujours jamais avec le code principal.

**Il était utilisé pour créer une application de terminal. Où est-ce passé ?**

La branche logique émet désormais un seul fichier HTML partageable. Une application de terminal ne peut être pilotée que par quelqu'un avec le dépôt cloné et un runtime installé, ce qui exclut exactement les personnes dont le prototype a besoin - le concepteur, le PM, l'expert du domaine qui sait ce que le modèle d'état est censé signifier. Un fichier autonome qui s'ouvre par double-clic et survit à l'envoi par courrier électronique peut être piloté par n'importe qui. Le module de logique pure en dessous est inchangé et constitue toujours la partie qui entre dans le code réel.

**Un agent m'a dit de le faire `/prototype`  alors que j'aurais dû le mettre en œuvre.**

Connu, et c'est un problème de dénomination. `prototype` est un mot générique et attrayant qui se lit à un agent ignorant le flux comme "la prochaine étape évidente" une fois que les tickets existent, il est donc recommandé par son nom même lorsque la conception a été entièrement réglée dans la conversation. Si vous savez déjà quoi construire, la prochaine étape est `/implement`, par ticket. Recherchez un prototype uniquement lorsqu'une question de conception spécifique n'est véritablement pas résolue et que parler ne la résoudra pas.

**Dois-je prototyper l'ensemble de l'application avant de créer l'une de ses fonctionnalités de production, par exemple pour en faire une démonstration aux prospects ?**

Il s'agit d'un artefact différent portant le nom de cette compétence. Un prototype ici se limite à une seule question : « qu'est-ce que l'application dans son ensemble ? » n’en est pas un. Un prototype d'application complète n'a pas de point d'arrêt naturel, il devient donc l'application de production par élan : la passe de nettoyage n'a jamais lieu et le code écrit selon les règles du prototype (pas de tests, pas de gestion des erreurs) se retrouve devant les utilisateurs. Si vous avez besoin d'une démo de vente, construisez-la délibérément comme une démo et indiquez clairement qu'il ne s'agit pas d'une production. Si vous avez besoin de régler une question de conception, réduisez-la à cette question.

**Comment puis-je l'exécuter dans sa propre session ?**

Un prototype vit dans son propre répertoire et génère beaucoup de [context](https://www.aihero.dev/ai-coding-dictionary/context) dont vous ne voulez pas dans le fil de discussion qui a posé la question, alors exécutez-le ailleurs et ramenez uniquement la réponse. [handoff](https://aihero.dev/skills-handoff) est le pont dans les deux sens.

**N'est-ce pas le moyen le plus rapide possible de graver des jetons ?**

Cela peut être le cas si vous prototypez des questions auxquelles vous auriez pu répondre en parlant, ou si vous laissez un prototype s'étendre sur une fonctionnalité entière. La comparaison qui compte n’est pas celle des jetons contre zéro ; c'est [tokens](https://www.aihero.dev/ai-coding-dictionary/token) contre la construction du mauvais modèle d'état et la découverte après avoir reçu des appelants en production. Gardez la question étroite et la portée courte, et les dépenses restent proportionnées.

## Indicateurs de réussite

- Vous pouvez dire en une phrase à quelle question le prototype existe pour répondre - et c'est écrit en haut de la démo, pas seulement dans votre tête.
- Quelqu'un qui ne lit pas le code peut piloter la démo logique. Ils ouvrent le fichier, appuient sur les boutons dans un onglet de présentation et décrivent ce qu'ils voient dans leurs propres mots.
- Quelqu'un dit "attendez, ça ne devrait pas être possible" ou "hein, j'ai supposé X". C'est un bug dans l'*idée*, c'est là tout l'intérêt.
- Les variantes de l'interface utilisateur ne sont pas d'accord sur la mise en page et la hiérarchie des informations, pas seulement sur la couleur et la copie - et le retour que vous obtenez est "l'en-tête de B avec la barre latérale de C".
- On y répond en une seule séance. Si vous êtes encore en train de le construire un jour plus tard, la question était trop grande ; divisez-le.
- Quand c'est fini, main contient la décision et aucun du prototype, et le problème d'implémentation pointe vers la branche qui le détient toujours.

## Où il s’inscrit

`prototype` est un **autonome accessible à tout moment** — vous y entrez pour régler une question de conception, puis vous en ressortez — et c'est aussi une machine sur laquelle fonctionne une autre compétence.

Son plus gros consommateur est [wayfinder](https://aihero.dev/skills-wayfinder). Une carte Wayfinder est composée de **tickets de décision**, et `prototype` est l'un des quatre types de ticket : celui utilisé lorsque la question bloquante est "à quoi cela devrait-il ressembler" ou "comment devrait-il se comporter", qu'aucune discussion ne résout. Wayfinder augmente la fidélité d'une discussion brumeuse en créant quelque chose de concret auquel réagir, et cette compétence est la façon dont cette chose concrète est construite. Un ticket prototype est résolu par la réponse, et le prototype est lié à la carte en tant qu'atout.

Les autres voisins sont en amont et en aval. [grill-me](https://aihero.dev/skills-grill-me) et [grill-with-docs](https://aihero.dev/skills-grill-with-docs) répondent à des questions grillables ; les plus ingrillables viennent ici à la place, et la réponse en une seule ligne remonte dans l'interview. En aval, un modèle d'état validé ou une direction d'interface utilisateur devient une entrée établie pour [to-spec](https://aihero.dev/skills-to-spec), qui peut intégrer l'extrait riche en décisions produit par le prototype plutôt que de le décrire en prose. Pour tout le reste, [ask-matt](https://aihero.dev/skills-ask-matt) vous achemine sur l'ensemble de l'ensemble.
