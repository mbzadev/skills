## Ce qu’il fait

`teach` transforme le répertoire dans lequel vous l’exécutez en un espace de travail pédagogique permanent. Il vous enseigne un sujet au fil de plusieurs [sessions](https://www.aihero.dev/ai-coding-dictionary/session), au moyen de courtes leçons HTML autonomes.

Il ne s’appuie pas uniquement sur ce que le [modèle](https://www.aihero.dev/ai-coding-dictionary/model) sait déjà. Les [connaissances paramétriques](https://www.aihero.dev/ai-coding-dictionary/parametric-knowledge) sont considérées comme incertaines : avant d’enseigner, le skill recherche des sources fiables, les consigne dans `RESOURCES.md` et les cite dans chaque leçon. Il conserve également son état ([état persistant](https://www.aihero.dev/ai-coding-dictionary/stateful)) : la mission, les ressources, les leçons et les traces d’apprentissage sont enregistrées dans le répertoire, afin que la session suivante reparte de ces fichiers plutôt que de la seule conversation précédente.

## Quand l’utiliser

Vous l’invoquez en tapant `/teach` : l’[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne le déclenchera pas seul.

Utilisez ce skill lorsque l'apprentissage est le projet : un langage, un framework, une base de code que vous venez de rejoindre, du yoga, des shaders, une certification. Ce n’est pas l’outil d’une explication en passant.

| Ce que vous cherchez | Utilisez |
| --- | --- |
| Pour apprendre un sujet sur des semaines, avec des séances qui s'accumulent | `teach` |
| Une idée expliquée dans la session dans laquelle vous êtes déjà | Demandez simplement, lors de cette session |
| Le dernier message de l’agent doit être reformulé | [wait-what](https://aihero.dev/skills-wait-what) |
| Pour affiner une réflexion existante plutôt que découvrir un nouveau sujet | [grill-me](https://aihero.dev/skills-grill-me) |
| Un agent de fond pour lire [sources primaires](https://www.aihero.dev/ai-coding-dictionary/primary-source) et vous laisser un document cité | [recherche](https://aihero.dev/skills-research) |
| Pour apprendre quelque chose qui s'est produit au milieu d'une grillade, sans faire dérailler le [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) | [transfert](https://aihero.dev/skills-handoff) vers un espace de travail d'enseignement, puis `teach` là |

## Prérequis

`teach` crée un répertoire au lieu d’un fichier et suppose une mission par espace de travail. Exécutez-le donc dans un emplacement dédié à un seul sujet. Gardez cet espace en dehors du projet sur lequel vous travaillez : un dépôt séparé est préférable à un dossier global `~/.learnings/` ou au dépôt de production lui-même. Un dépôt dédié permet aussi de versionner et de valider les leçons.

Ce qui s'accumule dans ce répertoire :

| Chemin | Ce qu'il contient |
| --- | --- |
| `MISSION.md` | Pourquoi apprenez-vous cela. Tout le reste en dépend ; s'il manque, la première chose que `teach` fait est de vous interroger jusqu'à ce qu'il ne le soit plus |
| `RESOURCES.md` | Les sources vérifiées à partir desquelles il enseigne, divisées en Connaissance et Sagesse (communautés) |
| `lessons/*.html` | Les leçons numérotées — l'unité primaire d'enseignement |
| `reference/*.html` | Aide-mémoire compressés, algorithmes, glossaires : les documents sur lesquels vous revenez réellement |
| `learning-records/*.md` | Notes de style ADR sur ce que vous avez manifestement appris, utilisées pour décider quoi enseigner ensuite |
| `assets/*` | Composants réutilisables – une feuille de style partagée d'abord – pour que les leçons ressemblent à un seul cours |
| `NOTES.md` | Vos préférences pédagogiques déclarées |

Deux précisions importantes. Un glossaire convient à la plupart des sujets, mais le skill contient un `GLOSSARY-FORMAT.md` auquel `SKILL.md` ne renvoie plus : demandez-le explicitement si vous en avez besoin ([numéro #559](https://github.com/mbzadev/skills/issues/559)). L’espace de travail n’est pas toujours créé à l’endroit attendu ; vérifiez la première question ci-dessous avant de construire un cours volumineux.

## Force de stockage, pas maîtrise

Le concept central est la **force de stockage** : la rétention à long terme, par opposition à la **fluence**, ce rappel immédiat qui ressemble à la maîtrise pendant la lecture puis disparaît une semaine plus tard. `teach` renforce la première grâce à des difficultés souhaitables : rappel actif, espacement et entrelacement. La compréhension vient d’abord, car une difficulté excessive surcharge la mémoire de travail ; la compétence se construit ensuite au moyen d’une boucle de retour étroite, où la difficulté devient un outil.

Deux éléments orientent votre apprentissage. La **mission** — la raison concrète pour laquelle vous voulez apprendre ce sujet — donne sa direction à chaque leçon ; sans elle, les leçons deviennent abstraites et rien ne permet de choisir la suite. À partir de la mission et des traces d’apprentissage, `teach` sélectionne la prochaine leçon dans votre **zone proximale de développement** : assez stimulante pour demander un effort, mais pas au point de devenir inaccessible.

C’est aussi pourquoi la compétence repousse plutôt qu’elle n’oblige. Une question qui nécessite de la **sagesse** – un jugement dans le monde réel – obtient une tentative de réponse, puis un pointeur vers une communauté où vous pouvez la tester. Un quiz est une porte d'accès, pas une formalité : un utilisateur a déclaré avoir dit "merci beaucoup" et s'être fait dire que l'exercice était toujours en cours.

## Leçons, références et composants

Une **leçon** est un fichier HTML autonome, suffisamment court pour se terminer en une seule séance, lié à la mission, donnant une victoire tangible. Il cite ses sources, recommande une source principale à consulter soi-même et propose des liens vers des leçons entre frères et sœurs et des documents de référence.

La répartition est à savoir : les enseignements sont rarement revisités, les documents de référence le sont. Ainsi, l'essence compressée d'une leçon — la table de syntaxe, l'algorithme, la séquence de poses, le glossaire — appartient à `reference/`, et non enfouie dans la leçon qui l'a introduite.

Les leçons sont construites à partir de **composants** dans `assets/` : feuilles de style, widgets de quiz, simulateurs, aides à diagrammes. La réutilisation est la valeur par défaut. L'agent lit `assets/` avant de créer une leçon et construit à partir de ce qui s'y trouve, et tout ce qui est nouveau qu'une deuxième leçon pourrait utiliser est écrit en tant que composant plutôt qu'en ligne. La feuille de style partagée est le premier composant que gagne chaque espace de travail ; c’est ce qui empêche la production d’être une pile d’éléments ponctuels.

## Questions fréquentes

**Où met-il les fichiers ? Le mien a fini dans `~/.agents/skills`.**

Un vrai bogue ouvert ([#377](https://github.com/mbzadev/skills/issues/377)). `SKILL.md` utilise `./` pour deux racines différentes à la fois : `./MISSION-FORMAT.md` et ses frères et sœurs sont vraiment assis à côté de `SKILL.md` dans la compétence installée, tandis que `./lessons/`, `./reference/`, `./learning-records/` et `./assets/` sont censés être dans votre répertoire. Un agent qui résout le premier type dans le répertoire d'installation de la compétence résout également le deuxième type et écrit votre cours dans le dossier des compétences. Vérifiez où a atterri la première leçon avant de construire dessus et nommez explicitement le répertoire lorsque vous commencez plutôt que de vous fier à la compréhension du «répertoire actuel».

**Est-ce que je reste dans une séance ou en commence une nouvelle par leçon ?**

Les trois approches fonctionnent : rester dans la même session, réinvoquer `/teach` dans une nouvelle session ou ouvrir une nouvelle session dans le même dossier. Chaque leçon est sa propre invocation. Le dossier est la continuité, pas la conversation. Une pratique courante consiste à ouvrir une nouvelle session dans l'espace de travail et à dire `/teach next lesson for <topic>`.

**Comment puis-je savoir qu'il ne m'apprend pas quelque chose qu'il a inventé ?**

Pas sur la seule parole du skill : lisez les sources primaires. `teach`, comme tout skill fondé sur un LLM, ne mérite pas une confiance aveugle. Son mécanisme d’ancrage — `RESOURCES.md`, citations dans chaque leçon et source primaire recommandée — rend la vérification moins coûteuse, mais ne la remplace pas. Le risque est maximal dans les domaines procéduraux qui utilisent une notation précise, et plus faible lorsque le résultat se vérifie immédiatement, comme du code exécutable.

**La bonne réponse au quiz est toujours la première option.**

Confirmé par plusieurs personnes, sur Sonnet, sur Opus et sur GLM, et toujours non corrigé. `SKILL.md` exige désormais que chaque réponse soit le même nombre de mots, ce qui tue un tell différent – la bonne réponse était autrefois la seule entièrement motivée – mais ne dit rien sur la position. Un contributeur a testé un correctif de niveau d'instruction pour la position et a signalé que la bonne réponse atterrissait toujours dans l'emplacement A 33 fois sur 33 sur neuf leçons ([#335](https://github.com/mbzadev/skills/issues/335)), ce qui indique un composant de quiz aléatoire dans  `assets/`  comme le véritable correctif plutôt que comme une meilleure formulation. En attendant que cela soit livré, considérez la position de réponse comme dénuée de sens. Votre `assets/` répertoire vous appartient, donc demander un composant qui est mélangé au moment du rendu est une solution locale légitime.

**Cela supposait que je savais déjà des choses et j'utilisais des termes qu'ils n'avaient jamais définis.**

La plainte de fond la plus courante. Il n'y a pas d'étape d'évaluation : `teach` déduit votre niveau à partir de la mission et des dossiers d'apprentissage, et lors de la première session, il n'y a pas de dossier d'apprentissage. Un utilisateur l'exécutant dans un pipeline Wayfinder l'a dit clairement : "Il n'a jamais fait de grillage pour établir mon point de départ, il a donc fait de nombreuses hypothèses sur ce que je savais déjà." Un autre a rapporté des leçons s'appuyant sur un jargon non défini et une leçon adaptée à leur matériel qui couvrait ce que le matériel pouvait faire sans jamais dire ce qu'il ne pouvait pas faire. Deux choses aident : énoncer vos connaissances antérieures et vos lacunes dans le premier message, et corriger le niveau à voix haute lorsqu'un cours manque, car la correction devient un enregistrement d'apprentissage et oriente le suivant. Une étape explicite d'évaluation des connaissances est une demande de fonctionnalité permanente ([#725](https://github.com/mbzadev/skills/issues/725)), et non un comportement expédié.

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

`teach` est un **skill autonome, utilisable à tout moment**. Il ne constitue pas une étape de la chaîne d’ingénierie et ne partage aucun artefact avec elle ; il gère son propre répertoire pendant toute la durée de l’apprentissage.

Son voisin le plus proche est [handoff](https://aihero.dev/skills-handoff). Si une séance de questions révèle un sujet que vous ne comprenez pas, ne suspendez pas l’entretien pour l’apprendre sur place : utilisez `/handoff` vers un espace de travail pédagogique, apprenez-y le sujet avec `/teach`, puis revenez reprendre la conversation. Utilisez plutôt [research](https://aihero.dev/skills-research) lorsque vous souhaitez obtenir un document sourcé plutôt que des leçons conçues pour la mémorisation.

Lorsque vous hésitez entre plusieurs skills ou flux de travail, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous oriente dans toute la collection.
