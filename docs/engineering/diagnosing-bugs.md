## Ce qu’il fait

`diagnosing-bugs` exécute un diagnostic en six phases sur un bug dur ou une régression de performances : construire une repro, la minimiser, classer les hypothèses, instrumenter, corriger avec un test de régression, nettoyer.

Cela ne permettra pas à l'agent de formuler une théorie jusqu'à ce qu'une boucle de rétroaction **étroite** existe - une commande nommée, déjà exécutée une fois, qui devient rouge sur *ce* bug et verte lorsqu'il est corrigé. Le comportement par défaut d'un agent de codage qui reçoit un rapport de bogue est de lire le code et de le deviner ; cette compétence bloque cela. S'il n'existe aucune commande compatible rouge, il n'y a pas de phase 2. Cette seule porte est à laquelle sert la compétence. Tout ce qui suit – bissection, tests d’hypothèses, instrumentation – est mécanique une fois que le signal existe.

## Quand l’utiliser

Tapez `/diagnosing-bugs`, ou l'agent l'atteint tout seul lorsqu'une tâche convient : il est invoqué par le modèle et se déclenche sur "diagnostiquer" / "déboguer ceci" ou sur un rapport indiquant que quelque chose est cassé, lance, échoue ou est lent.

Attaquez-vous aux plus difficiles : un bug qui résiste au premier regard, un flocon intermittent, une régression qui s'est glissée entre deux états bien connus. Il est lourd de par sa conception et ce n'est pas le bon outil pour une question à laquelle vous souhaitez répondre dans un seul message.

| Votre situation | Où aller |
| --- | --- |
| Un défaut spécifique que vous pouvez décrire comme un symptôme | Cette compétence |
| Un point final lent ou une régression temporelle avec un avant et un après | Cette compétence — elle a une branche de performance (mesurer une ligne de base, puis diviser en deux) |
| « Où sont les goulots d'étranglement dans cette base de code ? — aucun symptôme spécifique | Pas cette compétence. Il diagnostique une panne connue, il n'effectue pas d'audit |
| Un rapport de bug brut de quelqu'un d'autre, pas encore confirmé ni rédigé | [triage](https://aihero.dev/skills-triage) premier |
| Code jetable pour répondre à une question de conception, pas pour rechercher un défaut | [prototype](https://aihero.dev/skills-prototype) |
| Construire d'abord un test de comportement planifié | [tdd](https://aihero.dev/skills-tdd) |
| Il n'existe aucune bonne couture pour verrouiller le bug | [améliorer-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) — cette compétence s'y applique elle-même |

## Le skill repose sur une boucle courte

La phase 1 nécessite des efforts disproportionnés car c'est la seule phase qui est difficile. La compétence donne une échelle de façons de construire la boucle, grossièrement par ordre de préférence :

1. Un test défaillant quelle que soit la couture qui atteint le bug.
2. Un script curl ou HTTP sur un serveur de développement en cours d'exécution.
3. Une invocation CLI avec une entrée d'appareil, comparée à un instantané connu.
4. Un script de navigateur sans tête s'affirmant sur le DOM, la console ou le réseau.
5. Une capture rejouée : une requête, une charge utile ou un journal d'événements enregistré, exécuté via le chemin de code de manière isolée.
6. Un harnais jetable : un sous-ensemble minimal du système, un appel de fonction.
7. Une propriété ou boucle fuzz, pour "une sortie parfois erronée".
8. Un harnais de bissection que vous pouvez remettre à `git bisect run`.
9. Une boucle différentielle — même entrée, ancienne version contre nouvelle.
10. Un script bash avec [humain dans la boucle](https://www.aihero.dev/ai-coding-dictionary/human-in-the-loop), en dernier recours. Le skill fournit `scripts/hitl-loop.template.sh` : l’agent exécute le script, vous suivez les invites dans le terminal et vos réponses reviennent sous une forme analysable.

*Une* boucle n'est pas le but. **Tight** est : rapide (secondes), déterministe (même verdict à chaque exécution), précis (affirme votre symptôme exact, et non "n'a pas planté") et exécutable par un agent sans surveillance. Une boucle feuilletée de 30 secondes vaut à peine mieux que rien. Pour un bug qui n'apparaît que parfois, la cible n'est pas une reproduction propre mais un **taux de reproduction plus élevé** — bouclez le déclencheur, parallélisez, ajoutez du stress, injectez des mises en veille, jusqu'à ce que le taux de flocon soit suffisamment élevé pour déboguer.

Lorsqu'il ne peut vraiment pas en construire un, il lui est demandé de s'arrêter et de le dire, de lister ce qu'il a essayé et de vous demander un accès à [environnement](https://www.aihero.dev/ai-coding-dictionary/environment), un artefact capturé ou l'autorisation d'ajouter une instrumentation temporaire. De toute façon, il ne faut pas procéder à des hypothèses.

## Les portes entre phases

Les phases sont des portes, pas une liste de contrôle. Chacun refuse de s’ouvrir jusqu’à ce que quelque chose de spécifique soit vrai.| Porte | Ce qui doit être vrai |
| --- | --- |
| Dans la phase 2 | Une commande nommée, déjà exécutée et collée avec sa sortie, qui peut passer en rouge sur ce bug |
| En phase 3 | La reproduction est reproduite *et* minimisée — chaque élément restant est porteur |
| En phase 4 | Il existe 3 à 5 hypothèses classées et falsifiables, chacune énonçant sa prédiction, qui vous est présentée avant qu'aucune ne soit testée |
| En phase 5 | Les sondes correspondent à une prédiction spécifique, une variable à la fois, chaque journal de débogage étant marqué de style `[DEBUG-a4f2]` afin que le nettoyage soit un grep |
| Terminé | La reproduction originale ne se reproduit plus, l'instrumentation a disparu et l'hypothèse qui s'est avérée correcte est écrite dans le message de validation |

La phase 5 comporte une trappe de secours qui mérite d'être connue. Le test de régression est écrit avant le correctif, mais seulement s'il existe une **couture correcte** - une où le test exerce le véritable modèle de bogue tel qu'il se produit sur le site d'appel. Lorsque la seule couture disponible est trop superficielle, il est demandé à la compétence de le dire plutôt que de passer un test qui donne une fausse confiance. Cette absence est elle-même la découverte, et c'est ce qui achemine l'autopsie vers `improve-codebase-architecture`.

## Questions fréquentes

**Il se déclenche sur des questions rapides pour lesquelles je voulais juste une réponse directe.**

Il s’agit du problème le plus signalé concernant cette compétence, et il est réel. Sur GPT-5.6-Sol en particulier, les utilisateurs signalent qu'il se déclenche sur une description simple d'un problème : "le modèle déclenche à la place la compétence de diagnostic de bugs plutôt formelle. Il continue ensuite à construire un scénario de reproduction - en construisant souvent un scénario simulé avec une valeur limitée - avant de me donner une réponse ou une suggestion. Cela entraîne des délais de réponse considérables." Quatre personnes distinctes ont signalé la même forme sur le [numéro 578](https://github.com/mattpocock/skills/issues/578). La solution acceptée consiste à commencer par une approche plus légère et à passer à une approche plus lourde uniquement lorsque le problème le justifie, mais ce changement n’a pas encore eu lieu. La compétence est calibrée par rapport au comportement d'invocation de Codex ; un [modèle](https://www.aihero.dev/ai-coding-dictionary/model) avec un seuil d'activation inférieur le surchauffe. Jusqu'à ce qu'il soit gradué, la solution pratique consiste à dire ce que vous voulez (« répondez simplement à ceci, ne diagnostiquez pas ») ou à désactiver l'invocation du modèle pour celui-ci dans votre [harnais](https://www.aihero.dev/ai-coding-dictionary/harness).

**Puis-je le pointer vers une base de code et demander où se trouvent les problèmes de performances ?**

Non. Il diagnostique une panne que vous pouvez déjà nommer. Sa branche performance est destinée à une régression avec un symptôme – établir une mesure de base, puis diviser en deux, mesurer d'abord et corriger ensuite – et non à un balayage proactif. Une compétence pour la version proactive a été [proposée et fermée](https://github.com/mattpocock/skills/issues/431) ; il n'existe actuellement aucune compétence pour cela.

**Est-ce qu'il s'arrête et me demande avant d'écrire le correctif ?**

Non. Seule la phase 3 dispose d'un point de contrôle humain : la liste des hypothèses classées vous est présentée avant qu'aucune ne soit testée, et elle procède selon son propre classement si vous êtes absent. Il n'y a aucune passerelle entre l'instrumentation et le correctif, l'agent peut donc commencer à écrire du code avant que vous ayez accepté sa cause première. [Issue #124](https://github.com/mattpocock/skills/issues/124) demande cette porte et est toujours ouverte. Si vous le souhaitez, dites-le lorsque vous invoquez la compétence.

**J'ai déjà exécuté `/triage` sur ce rapport de bug. Est-ce encore le même travail ?**

En partie, et aucune des deux compétences ne l’admet. Comme l'a dit un lecteur : "L'étape 3 du triage est essentiellement une instance superficielle et limitée de la phase 1 à 2 du diagnostic des bogues, mais aucun des deux fichiers ne mentionne l'autre." Le triage effectue une passe limitée « est-ce réellement un bug et quelle est la surface » ; cette compétence fait la version approfondie. Effectuer le tri en premier n'est pas inutile - sa vérification vous donne souvent la majeure partie de la matière première de la phase 1 - mais attendez-vous à le refaire correctement ici, et n'attendez aucune référence croisée pour vous le dire.

**La repro affichera-t-elle les secrets des fuites ?**

C’est possible. La compétence demande à l'agent de coller l'invocation et sa sortie, et de demander des artefacts tels que des fichiers HAR, des vidages de journaux et des vidages de mémoire. Aucun d’entre eux n’est désinfecté par instruction. [Issue #674](https://github.com/mattpocock/skills/issues/674) soulève exactement cela : les informations d'identification, les jetons, les cookies et les données personnelles accompagnant une discussion, un problème ou un PR – et propose un garde-fou de rédaction. Il est ouvert et non mis en œuvre. Considérez la rédaction comme votre travail pour le moment, en particulier avant que la sortie ne soit rendue publique.

**Mon scanner de sécurité a signalé cette compétence comme présentant un risque élevé.**

Snyk le signale, et le signalement est un faux positif. C'est la seule compétence de l'ensemble qui contient un script shell exécutable (`hitl-loop.template.sh`) ainsi que des instructions pour l'exécuter et pour boucler un serveur de développement. Expédié `.sh` plus les instructions d'exécution et le HTTP sortant suffisent à déclencher un scanner statique. Le script lui-même comprend environ 30 lignes d'invites `read -r -p`  qui s'arrêtent pour une entrée humaine. Le scanner évalue la surface des capacités, et non un exploit prouvé.

**Qu'est-il arrivé à `/diagnose` ?**

Renommé en `/diagnosing-bugs` dans la v1.0.0. L'ancien nom n'existe plus. Tout ce qui enchaîne `/diagnose`  (une compétence wrapper, une invite enregistrée) doit être mis à jour.

## Indicateurs de réussite

- Il vous montre une commande et sa sortie rouge avant de proposer une seule théorie. Si la théorie arrive en premier, la compétence ne fonctionne pas.
- La panne qu'il reproduit est celle que vous avez signalée, et non celle trouvée à proximité en cours de route.
- Il réduit la reproduction avant qu'elle ne commence à deviner et peut vous indiquer pourquoi chaque pièce restante est porteuse.
- Une liste classée de 3 à 5 hypothèses s'affiche, chacune avec une prédiction que vous pourriez falsifier, avant que l'une d'entre elles ne soit testée.
- Chaque journal de débogage qu'il ajoute porte une balise comme `[DEBUG-a4f2]`, et un grep pour cette balise revient vide lorsqu'il déclare terminé.
- Le message de commit ou la pull request indique quelle hypothèse s’est révélée correcte.
- Quand il ne peut pas verrouiller le bug avec un test, il le dit clairement au lieu d'en écrire un superficiel.

## Où il s’inscrit

`diagnosing-bugs` est un outil autonome accessible à tout moment. Vous y entrez lorsque quelque chose est cassé et vous abandonnez lorsque le correctif et son test de régression sont installés ; il ne contient aucun état et ne nécessite aucune configuration préalable. [ask-matt](https://aihero.dev/skills-ask-matt) route "Quelque chose est cassé" ici.

Deux voisins comptent. [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) prend le [handoff](https://www.aihero.dev/ai-coding-dictionary/handoff) lorsque la véritable découverte est que le code n'a pas de couture pour verrouiller le bogue - la recommandation est faite après le correctif, lorsqu'il y a plus d'informations. [triage](https://aihero.dev/skills-triage) se situe en amont pour les bogues qui arrivent sous forme de rapports bruts d'autres personnes, et fait une version moins profonde des mêmes deux premières phases.
