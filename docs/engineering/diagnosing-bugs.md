## Ce qu’il fait

`diagnosing-bugs` suit six phases pour un bogue difficile ou une régression de performances : établir une reproduction, la réduire au minimum, classer les hypothèses, instrumenter le code, corriger avec un test de régression, puis nettoyer.

Le skill ne permet pas de formuler une théorie tant qu’une boucle de retour **étroite** n’existe pas : une commande nommée, déjà exécutée une fois, qui devient rouge sur *ce* bogue et verte après sa correction. Sans commande de ce type, il n’y a pas de phase 2. Une fois le signal établi, la bissection, les tests d’hypothèses et l’instrumentation deviennent mécaniques.

## Quand l’utiliser

Tapez `/diagnosing-bugs`, ou laissez l’agent le sélectionner lorsqu’une tâche s’y prête : il est invocable par le modèle et réagit à « diagnostiquer », « déboguer ceci » ou à un rapport signalant qu’un comportement est cassé, lent ou en échec.

Réservez-le aux cas difficiles : un bogue qui résiste à un premier examen, un bogue intermittent ou une régression apparue entre deux états connus. Le processus est volontairement exigeant et ne convient pas à une question qui doit recevoir une réponse en un seul message.

| Votre situation | Où aller |
| --- | --- |
| Un défaut spécifique que vous pouvez décrire comme un symptôme | Cette compétence |
| Un point final lent ou une régression temporelle avec un avant et un après | Cette compétence — elle a une branche de performance (mesurer une ligne de base, puis diviser en deux) |
| « Où sont les goulots d'étranglement dans cette base de code ? » — aucun symptôme spécifique | Pas ce skill. Il diagnostique une panne connue ; il n’effectue pas d’audit général. |
| Un rapport de bogue brut de quelqu'un d'autre, pas encore confirmé ni rédigé | [triage](https://aihero.dev/skills-triage) premier |
| Code jetable pour répondre à une question de conception, pas pour rechercher un défaut | [prototype](https://aihero.dev/skills-prototype) |
| Construire d'abord un test de comportement planifié | [tdd](https://aihero.dev/skills-tdd) |
| Il n’existe aucune bonne couture pour verrouiller le bogue | [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) — ce skill traite précisément ce problème. |

## Le skill repose sur une boucle courte

La phase 1 nécessite des efforts disproportionnés car c'est la seule phase qui est difficile. La compétence donne une échelle de façons de construire la boucle, grossièrement par ordre de préférence :

1. Un test défaillant sur une couture qui atteint réellement le bogue.
2. Un script curl ou HTTP sur un serveur de développement en cours d'exécution.
3. Une invocation CLI avec une entrée de test, comparée à un instantané connu.
4. Un script de navigateur sans interface qui vérifie le DOM, la console ou le réseau.
5. Une capture rejouée : une requête, une charge utile ou un journal d'événements enregistré, exécuté via le chemin de code de manière isolée.
6. Un harnais jetable : un sous-ensemble minimal du système, un appel de fonction.
7. Une propriété ou boucle fuzz, pour "une sortie parfois erronée".
8. Un harnais de bissection que vous pouvez remettre à `git bisect run`.
9. Une boucle différentielle — même entrée, ancienne version contre nouvelle.
10. Un script bash avec [humain dans la boucle](https://www.aihero.dev/ai-coding-dictionary/human-in-the-loop), en dernier recours. Le skill fournit `scripts/hitl-loop.template.sh` : l’agent exécute le script, vous suivez les invites dans le terminal et vos réponses reviennent sous une forme analysable.

*Une* boucle n’est pas le but. Une boucle **serrée** s’exécute en quelques secondes, produit toujours le même verdict, vérifie précisément le symptôme observé — et non « le programme n’a pas planté » — et peut être lancée par un agent sans surveillance. Une boucle lente de 30 secondes vaut à peine mieux que rien. Pour un bogue intermittent, cherchez plutôt à augmenter le **taux de reproduction** : répétez le déclencheur, parallélisez les essais, ajoutez du stress ou élargissez les fenêtres de synchronisation jusqu’à obtenir un signal exploitable.

Lorsqu'il ne peut vraiment pas en construire un, il lui est demandé de s'arrêter et de le dire, de lister ce qu'il a essayé et de vous demander un accès à [environnement](https://www.aihero.dev/ai-coding-dictionary/environment), un artefact capturé ou l'autorisation d'ajouter une instrumentation temporaire. De toute façon, il ne faut pas procéder à des hypothèses.

## Les portes entre phases

Les phases sont des portes, pas une liste de contrôle. Chacun refuse de s’ouvrir jusqu’à ce que quelque chose de spécifique soit vrai.| Porte | Ce qui doit être vrai |
| --- | --- |
| Dans la phase 2 | Une commande nommée, déjà exécutée et collée avec sa sortie, qui peut passer en rouge sur ce bogue |
| En phase 3 | La reproduction est reproduite *et* minimisée — chaque élément restant est porteur |
| En phase 4 | Il existe 3 à 5 hypothèses classées et falsifiables, chacune énonçant sa prédiction, qui vous est présentée avant qu'aucune ne soit testée |
| En phase 5 | Les sondes correspondent à une prédiction spécifique, une variable à la fois, chaque journal de débogage étant marqué de style `[DEBUG-a4f2]` afin que le nettoyage soit un grep |
| Terminé | La reproduction originale ne se reproduit plus, l'instrumentation a disparu et l'hypothèse qui s'est avérée correcte est écrite dans le message de validation |

La phase 5 comporte une trappe de secours qui mérite d'être connue. Le test de régression est écrit avant le correctif, mais seulement s'il existe une **couture correcte** - une où le test exerce le véritable modèle de bogue tel qu'il se produit sur le site d'appel. Lorsque la seule couture disponible est trop superficielle, il est demandé à la compétence de le dire plutôt que de passer un test qui donne une fausse confiance. Cette absence est elle-même la découverte, et c'est ce qui achemine l'autopsie vers `improve-codebase-architecture`.

## Questions fréquentes

**Il se déclenche sur des questions rapides pour lesquelles je voulais juste une réponse directe.**

Il s’agit du problème le plus signalé concernant cette compétence, et il est réel. Sur GPT-5.6-Sol en particulier, les utilisateurs signalent qu'il se déclenche sur une description simple d'un problème : "le modèle déclenche à la place la compétence de diagnostic de bogues plutôt formelle. Il continue ensuite à construire un scénario de reproduction - en construisant souvent un scénario simulé avec une valeur limitée - avant de me donner une réponse ou une suggestion. Cela entraîne des délais de réponse considérables." Quatre personnes distinctes ont signalé la même forme sur le [numéro 578](https://github.com/mbzadev/skills/issues/578). La solution acceptée consiste à commencer par une approche plus légère et à passer à une approche plus lourde uniquement lorsque le problème le justifie, mais ce changement n’a pas encore eu lieu. La compétence est calibrée par rapport au comportement d'invocation de Codex ; un [modèle](https://www.aihero.dev/ai-coding-dictionary/model) avec un seuil d'activation inférieur le surchauffe. Jusqu'à ce qu'il soit gradué, la solution pratique consiste à dire ce que vous voulez (« répondez simplement à ceci, ne diagnostiquez pas ») ou à désactiver l'invocation du modèle pour celui-ci dans votre [harnais](https://www.aihero.dev/ai-coding-dictionary/harness).

**Puis-je le pointer vers une base de code et demander où se trouvent les problèmes de performances ?**

Non. Il diagnostique une panne que vous pouvez déjà nommer. Sa branche performance est destinée à une régression avec un symptôme – établir une mesure de base, puis diviser en deux, mesurer d'abord et corriger ensuite – et non à un balayage proactif. Une compétence pour la version proactive a été [proposée et fermée](https://github.com/mbzadev/skills/issues/431) ; il n'existe actuellement aucune compétence pour cela.

**Est-ce qu'il s'arrête et me demande avant d'écrire le correctif ?**

Non. Seule la phase 3 dispose d'un point de contrôle humain : la liste des hypothèses classées vous est présentée avant qu'aucune ne soit testée, et elle procède selon son propre classement si vous êtes absent. Il n'y a aucune passerelle entre l'instrumentation et le correctif, l'agent peut donc commencer à écrire du code avant que vous ayez accepté sa cause première. [Issue #124](https://github.com/mbzadev/skills/issues/124) demande cette porte et est toujours ouverte. Si vous le souhaitez, dites-le lorsque vous invoquez la compétence.

**J'ai déjà exécuté `/triage` sur ce rapport de bogue. Est-ce encore le même travail ?**

En partie, et aucune des deux compétences ne l’admet. Comme l'a dit un lecteur : "L'étape 3 du triage est essentiellement une instance superficielle et limitée de la phase 1 à 2 du diagnostic des bogues, mais aucun des deux fichiers ne mentionne l'autre." Le triage effectue une passe limitée « est-ce réellement un bogue et quelle est la surface » ; cette compétence fait la version approfondie. Effectuer le tri en premier n'est pas inutile - sa vérification vous donne souvent la majeure partie de la matière première de la phase 1 - mais attendez-vous à le refaire correctement ici, et n'attendez aucune référence croisée pour vous le dire.

**La repro affichera-t-elle les secrets des fuites ?**

C’est possible. La compétence demande à l'agent de coller l'invocation et sa sortie, et de demander des artefacts tels que des fichiers HAR, des vidages de journaux et des vidages de mémoire. Aucun d’entre eux n’est désinfecté par instruction. [Issue #674](https://github.com/mbzadev/skills/issues/674) soulève exactement cela : les informations d'identification, les jetons, les cookies et les données personnelles accompagnant une discussion, un problème ou un PR – et propose un garde-fou de rédaction. Il est ouvert et non mis en œuvre. Considérez la rédaction comme votre travail pour le moment, en particulier avant que la sortie ne soit rendue publique.

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
- Quand il ne peut pas verrouiller le bogue avec un test, il le dit clairement au lieu d'en écrire un superficiel.

## Où il s’inscrit

`diagnosing-bugs` est un skill autonome, utilisable à tout moment. Vous l’utilisez lorsqu’un comportement est cassé et vous en sortez lorsque le correctif et son test de régression sont en place ; il ne conserve aucun état et ne nécessite aucune configuration préalable. [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente les demandes « quelque chose est cassé » vers lui.

Deux voisins comptent. [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) prend le [handoff](https://www.aihero.dev/ai-coding-dictionary/handoff) lorsque la véritable découverte est que le code n'a pas de couture pour verrouiller le bogue - la recommandation est faite après le correctif, lorsqu'il y a plus d'informations. [triage](https://aihero.dev/skills-triage) se situe en amont pour les bogues qui arrivent sous forme de rapports bruts d'autres personnes, et fait une version moins profonde des mêmes deux premières phases.
