## Ce qu’il fait

`teach`  transforme le répertoire dans lequel vous l'exécutez en un espace de travail d'enseignement permanent et vous enseigne un sujet à travers de nombreuses [sessions](https://www.aihero.dev/ai-coding-dictionary/session), dans de courtes leçons HTML autonomes.

Il n'enseigne pas à partir de ce que le [modèle](https://www.aihero.dev/ai-coding-dictionary/model) sait déjà. [Les connaissances paramétriques](https://www.aihero.dev/ai-coding-dictionary/parametric-knowledge) sont traitées comme non fiables : avant d'enseigner, elles vont trouver des ressources hautement fiables, les enregistrent dans `RESOURCES.md` et les cite dans chaque leçon. L'autre fait structurel est qu'il s'agit de [stateful](https://www.aihero.dev/ai-coding-dictionary/stateful) — la mission, les ressources, les leçons et l'enregistrement de ce que vous avez appris se trouvent tous dans le répertoire sous forme de fichiers, de sorte que la session suivante reprend ces fichiers plutôt que ce qui reste de la dernière conversation.

## Quand l’utiliser

Vous l'invoquez en tapant `/teach` — l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne l'atteindra pas tout seul.

Atteignez-le lorsque l'apprentissage est le projet : un langage, un framework, une base de code que vous venez de rejoindre, du yoga, des shaders, une certification. Ce n’est pas l’outil d’une explication en passant.

| Ce que tu veux | Que rechercher |
| --- | --- |
| Pour apprendre un sujet sur des semaines, avec des séances qui s'accumulent | `teach` |
| Une idée expliquée dans la session dans laquelle vous êtes déjà | Demandez simplement, lors de cette session |
| Le dernier message de l’agent doit être reformulé | [wait-what](https://aihero.dev/skills-wait-what) |
| Pour affiner la réflexion que vous avez déjà, plutôt que d'acquérir du nouveau matériel | [grille-moi](https://aihero.dev/skills-grill-me) |
| Un agent de fond pour lire [sources primaires](https://www.aihero.dev/ai-coding-dictionary/primary-source) et vous laisser un document cité | [recherche](https://aihero.dev/skills-research) |
| Pour apprendre quelque chose qui s'est produit au milieu d'une grillade, sans faire dérailler le [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) | [transfert](https://aihero.dev/skills-handoff) vers un espace de travail d'enseignement, puis `teach` là |

## Prérequis

`teach`  crée un répertoire plutôt que de produire un fichier, et la compétence suppose une mission par espace de travail — alors exécutez-la quelque part où vous êtes heureux de vous consacrer à un seul sujet. Gardez-le en dehors du projet dans lequel vous travaillez : un dépôt séparé est le répertoire d'accueil recommandé, plutôt qu'un dossier global `~/.learnings/`  ou le projet de travail lui-même. Un dépôt dédié rend également les leçons validables, c'est ainsi que les équipes les ont partagées.

Ce qui s'accumule dans ce répertoire :

| Chemin | Ce qu'il contient |
| --- | --- |
| `MISSION.md` | Pourquoi apprenez-vous cela. Tout le reste en dépend ; s'il manque, la première chose que `teach` fait est de vous interviewer jusqu'à ce qu'il ne le soit plus |
| `RESOURCES.md` | Les sources vérifiées à partir desquelles il enseigne, divisées en Connaissance et Sagesse (communautés) |
| `lessons/*.html` | Les leçons numérotées — l'unité primaire d'enseignement |
| `reference/*.html` | Aide-mémoire compressés, algorithmes, glossaires : les documents sur lesquels vous revenez réellement |
| `learning-records/*.md` | Notes de style ADR sur ce que vous avez manifestement appris, utilisées pour décider quoi enseigner ensuite |
| `assets/*` | Composants réutilisables – une feuille de style partagée d'abord – pour que les leçons ressemblent à un seul cours |
| `NOTES.md` | Vos préférences pédagogiques déclarées |

Deux notes honnêtes sur cette liste. Un glossaire convient à la plupart des sujets, mais la compétence contient un `GLOSSARY-FORMAT.md`  auquel `SKILL.md`  ne renvoie plus, vous n'en obtiendrez donc qu'un si vous le demandez ([numéro #559](https://github.com/mattpocock/skills/issues/559)). Et l’espace de travail n’est pas toujours créé là où vous l’attendez – consultez la première question ci-dessous avant de créer un long cours par-dessus.

## Force de stockage, pas maîtrise

Le mot avec lequel réfléchir est **force de stockage** : rétention à long terme, par opposition à **fluence**, le rappel instantané qui ressemble à une maîtrise pendant que vous lisez et disparaît une semaine plus tard. `teach` construit le premier grâce à des difficultés souhaitables : pratique de récupération, espacement, entrelacement. La connaissance vient en premier, là où la difficulté est l'ennemie car elle ronge la mémoire de travail dont vous avez besoin pour comprendre ; Ensuite, la compétence est acquise à travers une boucle de rétroaction étroite, où la difficulté est l'outil.

Deux choses orientent ce que vous apprenez. La **mission** – la raison concrète et concrète pour laquelle vous voulez cela – fonde chaque leçon ; sans cela, les leçons deviennent abstraites et rien ne décide de la suite. À partir de la mission et des dossiers d'apprentissage,  `teach`  sélectionne la leçon suivante dans votre **zone de développement proximal** : suffisamment stimulante pour demander des efforts, pas si loin qu'elle cesse d'être apprise.

C’est aussi pourquoi la compétence repousse plutôt qu’elle n’oblige. Une question qui nécessite de la **sagesse** – un jugement dans le monde réel – obtient une tentative de réponse, puis un pointeur vers une communauté où vous pouvez la tester. Un quiz est une porte d'accès, pas une formalité : un utilisateur a déclaré avoir dit "merci beaucoup" et s'être fait dire que l'exercice était toujours en cours.

## Leçons, références et composants

Une **leçon** est un fichier HTML autonome, suffisamment court pour se terminer en une seule séance, lié à la mission, donnant une victoire tangible. Il cite ses sources, recommande une source principale à consulter soi-même et propose des liens vers des leçons entre frères et sœurs et des documents de référence.

La répartition est à savoir : les enseignements sont rarement revisités, les documents de référence le sont. Ainsi, l'essence compressée d'une leçon — la table de syntaxe, l'algorithme, la séquence de poses, le glossaire — appartient à `reference/`, et non enfouie dans la leçon qui l'a introduite.

Les leçons sont construites à partir de **composants** dans `assets/` : feuilles de style, widgets de quiz, simulateurs, aides à diagrammes. La réutilisation est la valeur par défaut. L'agent lit `assets/` avant de créer une leçon et construit à partir de ce qui s'y trouve, et tout ce qui est nouveau qu'une deuxième leçon pourrait utiliser est écrit en tant que composant plutôt qu'en ligne. La feuille de style partagée est le premier composant que gagne chaque espace de travail ; c’est ce qui empêche la production d’être une pile d’éléments ponctuels.

## Questions fréquentes

**Où met-il les fichiers ? Le mien a fini dans `~/.agents/skills`.**

Un vrai bug ouvert ([#377](https://github.com/mattpocock/skills/issues/377)). `SKILL.md` utilise `./` pour deux racines différentes à la fois : `./MISSION-FORMAT.md` et ses frères et sœurs sont vraiment assis à côté de `SKILL.md` dans la compétence installée, tandis que `./lessons/`, `./reference/`, `./learning-records/` et `./assets/` sont censés être dans votre répertoire. Un agent qui résout le premier type dans le répertoire d'installation de la compétence résout également le deuxième type et écrit votre cours dans le dossier des compétences. Vérifiez où a atterri la première leçon avant de construire dessus et nommez explicitement le répertoire lorsque vous commencez plutôt que de vous fier à la compréhension du «répertoire actuel».

**Est-ce que je reste dans une séance ou en commence une nouvelle par leçon ?**

Les trois approches fonctionnent : rester dans la même session, réinvoquer `/teach` dans une nouvelle session ou ouvrir une nouvelle session dans le même dossier. Chaque leçon est sa propre invocation. Le dossier est la continuité, pas la conversation. Une pratique courante consiste à ouvrir une nouvelle session dans l'espace de travail et à dire `/teach next lesson for <topic>`.

**Comment puis-je savoir qu'il ne m'apprend pas quelque chose qu'il a inventé ?**

Pas sur la seule parole du skill : lisez les sources primaires. `teach`, comme tout skill fondé sur un LLM, ne mérite pas une confiance aveugle. Son mécanisme d’ancrage — `RESOURCES.md`, citations dans chaque leçon et source primaire recommandée — rend la vérification moins coûteuse, mais ne la remplace pas. Le risque est maximal dans les domaines procéduraux qui utilisent une notation précise, et plus faible lorsque le résultat se vérifie immédiatement, comme du code exécutable.

**La bonne réponse au quiz est toujours la première option.**

Confirmé par plusieurs personnes, sur Sonnet, sur Opus et sur GLM, et toujours non corrigé. `SKILL.md` exige désormais que chaque réponse soit le même nombre de mots, ce qui tue un tell différent – la bonne réponse était autrefois la seule entièrement motivée – mais ne dit rien sur la position. Un contributeur a testé un correctif de niveau d'instruction pour la position et a signalé que la bonne réponse atterrissait toujours dans l'emplacement A 33 fois sur 33 sur neuf leçons ([#335](https://github.com/mattpocock/skills/issues/335)), ce qui indique un composant de quiz aléatoire dans  `assets/`  comme le véritable correctif plutôt que comme une meilleure formulation. En attendant que cela soit livré, considérez la position de réponse comme dénuée de sens. Votre `assets/` répertoire vous appartient, donc demander un composant qui est mélangé au moment du rendu est une solution locale légitime.

**Cela supposait que je savais déjà des choses et j'utilisais des termes qu'ils n'avaient jamais définis.**

La plainte de fond la plus courante. Il n'y a pas d'étape d'évaluation : `teach` déduit votre niveau à partir de la mission et des dossiers d'apprentissage, et lors de la première session, il n'y a pas de dossier d'apprentissage. Un utilisateur l'exécutant dans un pipeline Wayfinder l'a dit clairement : "Il n'a jamais fait de grillage pour établir mon point de départ, il a donc fait de nombreuses hypothèses sur ce que je savais déjà." Un autre a rapporté des leçons s'appuyant sur un jargon non défini et une leçon adaptée à leur matériel qui couvrait ce que le matériel pouvait faire sans jamais dire ce qu'il ne pouvait pas faire. Deux choses aident : énoncer vos connaissances antérieures et vos lacunes dans le premier message, et corriger le niveau à voix haute lorsqu'un cours manque, car la correction devient un enregistrement d'apprentissage et oriente le suivant. Une étape explicite d'évaluation des connaissances est une demande de fonctionnalité permanente ([#725](https://github.com/mattpocock/skills/issues/725)), et non un comportement expédié.

**Est-ce qu'il effectue des répétitions espacées et sait-il quand arrêter d'enseigner ?**

Non au premier, et pas de manière fiable au second. L'espacement et l'entrelacement sont des principes sur lesquels les leçons sont conçues, mais rien ne prévoit une révision, et il n'y a pas d'intégration d'Anki ou de calendrier – les deux sont des demandes récurrentes. L'écart associé réside dans les critères de sortie : comme l'a dit un utilisateur,  `teach`  "est bon pour faire la leçon suivante, mais pas aussi bon pour savoir quand s'arrêter et passer à la révision ou à la pratique réelle." Si vous souhaitez réviser ou explorer au lieu de nouveaux documents, demandez-le ; la compétence ne proposera pas le changement seule.

**Est-ce uniquement utile pour le code ?**

Non, et l'utilisation sans codage représente la plus grande partie du dossier : registre formel coréen, japonais, piano, guitare, conception de jeux de société, OpenSCAD, intrigues de films, certifications Azure et CCNA, examens universitaires et enfants de huit et dix ans obtenant des livres imprimables sur les salles d'évasion et les salamandres de feu. Rien dans la compétence n'est spécifique à la programmation : la mission, les ressources, la zone de développement proximale et les exercices fonctionnent de la même manière dans tous les domaines. Dans le domaine du code, l'utilisation la plus importante signalée n'est pas l'apprentissage d'un langage à partir de zéro, mais l'orientation vers une base de code inconnue ou la pile d'une nouvelle équipe.

**Avec quel modèle dois-je l'exécuter ?**

Il n’y a pas de réponse canonique et les différences signalées sont importantes. Il a été rapporté qu'un [effort de raisonnement](https://www.aihero.dev/ai-coding-dictionary/effort) plus élevé produit des leçons sensiblement meilleures que le réglage moyen. Un utilisateur a exécuté la même compétence via Copilot CLI avec Codex et a obtenu une seule carte HTML de 30 lignes sur laquelle Codex a produit une leçon complète. Il fonctionne sans modification dans Codex Cowork, sous réserve que votre organisation autorise ou non l'ajout de compétences. Si les leçons s'avèrent minces, changez de modèle, de [harnais](https://www.aihero.dev/ai-coding-dictionary/harness) ou d'effort avant de réécrire votre invite.

## Indicateurs de réussite

- La première chose qu'il fait dans un répertoire vide est de vous interroger sur les raisons pour lesquelles vous voulez cela, plutôt que de produire une leçon.
- `RESOURCES.md`  se remplit avant les leçons, et chaque leçon nomme une source principale qui mérite d'être lue vous-même.
- Les réclamations dans une leçon effectuent des liens. Une leçon sans citations est l’enseignement de compétences de mémoire.
- Une leçon prend une séance et vous permet de faire une chose que vous ne pouviez pas faire auparavant.
- Ouvrir une nouvelle session dans le dossier et dire "prochaine leçon" continue le cours au lieu de le redémarrer.
- `learning-records/` grandit et les leçons cessent de réenseigner ce que vous avez déjà démontré.
- Les leçons ressemblent à un seul cours : elles partagent la feuille de style située dans `assets/` au lieu d’en embarquer chacune une copie.
- Une question qui exige du jugement vous conduit vers un forum, une communauté ou un cours, et pas seulement vers une réponse générée.

## Où il s’inscrit

`teach` est un **autonome accessible à tout moment**. Il ne s'agit pas d'une étape dans une chaîne de construction et ne partage aucun artefact avec le flux d'ingénierie ; il est propriétaire de son annuaire et y vit aussi longtemps que dure le sujet.

Son voisin le plus proche est [handoff](https://aihero.dev/skills-handoff). Si une séance de questions révèle un sujet que vous ne comprenez pas, ne suspendez pas l’entretien pour l’apprendre sur place : utilisez `/handoff` vers un espace de travail pédagogique, apprenez-y le sujet avec `/teach`, puis revenez reprendre la conversation. Utilisez plutôt [research](https://aihero.dev/skills-research) lorsque vous souhaitez obtenir un document sourcé plutôt que des leçons conçues pour la mémorisation.

Lorsque vous n'êtes pas sûr de la compétence ou du flux qui vous convient, [ask-matt](https://aihero.dev/skills-ask-matt) vous guide sur l'ensemble de l'ensemble.
