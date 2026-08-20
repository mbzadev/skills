## Ce qu’il fait

`wayfinder`  demande un effort trop important pour un seul agent [session](https://www.aihero.dev/ai-coding-dictionary/session) — une idée dont vous pouvez nommer la **destination** mais dont vous ne pouvez pas encore voir — et la trace comme une **carte** partagée de **tickets de décision** sur votre outil de suivi des problèmes, puis les résout un à la fois jusqu'à ce que la voie soit libre.

Ça planifie, ça ne fait pas. Chaque ticket contient une question dont la résolution est une décision, pas une tranche de construction à exécuter, et la carte est terminée lorsqu'il n'y a plus rien à décider avant que quelqu'un ne vienne construire la chose. Cette règle est ce qui sépare un ticket Wayfinder d'une implémentation ordinaire [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket), et c'est la règle que les agents enfreignent le plus souvent. Lorsque la carte s'efface, Wayfinder s'en va ; cela ne se poursuit pas dans le code.

## Quand l’utiliser

Vous l'invoquez en tapant `/wayfinder` — l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne l'atteindra pas tout seul.

Il s’agit du flux le plus lourd et le plus dense de l’ensemble, le déclencheur est donc étroit : l’effort doit être véritablement plus important que ce qu’une session d’agent peut contenir, et le chemin vers la destination doit être brumeux. La répartition est claire : `/grill-with-docs` pour la planification d'une seule session, `/wayfinder` pour la planification de plusieurs sessions.

| Ce que vous avez devant vous | Utilisez |
| --- | --- |
| Une fonctionnalité bien étendue que vous pouvez régler en une seule séance | [grill-me](https://aihero.dev/skills-grill-me), ou [grill-with-docs](https://aihero.dev/skills-grill-with-docs) lorsqu'il y a une base de code |
| Un nouveau projet, ou une construction s'étalant sur plusieurs sessions, dont le parcours n'est pas encore clair | `/wayfinder` |
| Un fil de discussion où la décision est déjà prise | [to-spec](https://aihero.dev/skills-to-spec) — passer directement devant la carte |
| Une carte de guidage dégagée | [to-spec](https://aihero.dev/skills-to-spec), puis [to-tickets](https://aihero.dev/skills-to-tickets) et [implement](https://aihero.dev/skills-implement) |
| Une session existante qui est déjà devenue trop grande | dites "remettez à `/wayfinder`" — [handoff](https://aihero.dev/skills-handoff) ponts vers une carte ainsi que hors d'une |

Il n’est pas nécessaire de partir d’un projet neuf. Wayfinder s’utilise régulièrement sur des bases de code anciennes ou partiellement construites ; il peut même y être plus utile, car une grande partie de l’incertitude porte alors sur « ce qui est déjà vrai ici » plutôt que sur « ce que nous devrions faire ».

## Prérequis

La carte et ses tickets vivent dans l’outil de suivi du dépôt. Wayfinder dépend donc de la configuration créée par [setup-mabza-skills](https://aihero.dev/skills-setup-mabza-skills). Celle-ci décrit, dans une section « Opérations d’orientation », la représentation de la carte, des tickets enfants, des dépendances et des requêtes de frontière pour GitHub, GitLab ou le suivi Markdown local. Wayfinder retrouve ce document au moyen du pointeur inscrit dans `AGENTS.md`, sans imposer de chemin fixe. Si aucun outil n’est configuré, il utilise des fichiers Markdown locaux.

L’outil de suivi joue un rôle fonctionnel : ses relations de blocage rendent la frontière visible directement dans son interface. Lorsqu’il ne possède pas de dépendances natives — dans certaines installations Gitea, par exemple — Wayfinder doit déduire les blocages à partir du texte de la carte. Cette solution fonctionne, mais demande davantage de surveillance.

## La carte, le brouillard et la frontière

La **carte** est un ticket unique étiqueté `wayfinder:map` ; ses tickets de décision sont des tickets enfants. C’est un **index, pas un entrepôt** : chaque décision détaillée n’existe qu’à un seul endroit, dans son ticket, tandis que la carte la résume et fournit le lien. Une session charge d’abord cette vue synthétique, puis ouvre les tickets individuels à la demande. La carte peut ainsi grandir sans imposer tout son historique à chaque nouvelle session.

Quatre choses y vivent :

- **Destination** — à quoi ressemble la fin de cette carte. La nommer est le premier acte de cartographie, avant qu’un ticket n’existe, car la destination fixe la portée par rapport à laquelle chaque ticket est mesuré.
- **Décisions jusqu'à présent** — une ligne par ticket fermé, chacune renvoyant à l'endroit où se trouve réellement le détail.
- **Pas encore spécifié** — le **brouillard de guerre**. Des décisions que vous pouvez prédire arrivent mais que vous ne pouvez pas encore exprimer clairement. Le test entre brouillard et ticket est de savoir si vous pouvez formuler la question avec précision *maintenant*, et non si vous pouvez y répondre. La résolution d'un ticket dissipe le brouillard qui l'attend et transforme tout ce qui est désormais spécifiable en de nouveaux tickets.
- **Hors de portée** — le travail est au-delà de la destination. Le brouillard ne se rassemble que *vers* la destination, donc le travail hors du champ d'application est fermé et n'est jamais terminé.

La **frontière** réunit les tickets ouverts, débloqués et non attribués : c’est la limite actuelle du connu. Avant de commencer, une session s’attribue un ticket ; l’attribution matérialise donc la réservation et les autres sessions l’ignorent. Dans les descriptions, désignez toujours les tickets par leur titre, jamais par un simple `#42` : une suite de numéros serait illisible.

## Les quatre types de tickets de décision

Chaque ticket porte une étiquette `wayfinder:<type>`  et est soit **[HITL](https://www.aihero.dev/ai-coding-dictionary/human-in-the-loop)** — travaillé avec un humain qui parle pour lui-même — soit **[AFK](https://www.aihero.dev/ai-coding-dictionary/afk)**, piloté par l'agent seul. Un ticket HITL n'est résolu que via l'échange en direct ; un agent qui répond à ses propres questions [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) l'a cassé.

| Tapez | Mode | Utilisez ce skill quand | Résolu par |
| --- | --- | --- | --- |
| `grilling` | HITL | La valeur par défaut. La question peut être réglée en en discutant. | [grilling](https://aihero.dev/skills-grilling) plus [modélisation de domaine](https://aihero.dev/skills-domain-modeling), dans une nouvelle session |
| `prototype` | HITL | "À quoi cela devrait-il ressembler" ou "comment cela devrait-il se comporter" - une question qui ne peut être résolue par les discussions. | [prototype](https://aihero.dev/skills-prototype), avec l'artefact construit lié au ticket comme atout |
| `research` | AFK | Un fait extérieur au répertoire de travail bloque une décision. | Un [research](https://aihero.dev/skills-research) [sous-agent](https://www.aihero.dev/ai-coding-dictionary/subagent), lancé pendant la cartographie et exécuté en parallèle sur une branche `research/<name>` |
| `task` | Soit | Rien à décider, mais le travail manuel bloque une décision : fournir un accès, s'inscrire à un service, déplacer des données pour que leur forme soit visible. | L'agent seul là où il peut, sinon une checklist précise pour l'humain |

`task` est le seul type qui *fait* plutôt que décide, et il gagne sa place en débloquant une décision – jamais en livrant une partie de la destination. C’est le type de problème qui se produit le plus souvent dans la pratique : les agents l’interprètent comme une étape de mise en œuvre et commencent à écrire le code du produit à l’intérieur de la carte.

La recherche est la seule exception à *un ticket par session*.

## Questions fréquentes

**En quoi est-ce différent de `/grill-with-docs` ? Par quoi dois-je commencer ?**

Le nombre de sessions, pas la taille du projet. `/grill-with-docs` est une planification en une seule session ; wayfinder est une planification multi-sessions. Si vous pouvez tout tenir en une seule conversation, le grillage est l'outil le moins cher et le meilleur, et Wayfinder est véritablement plus lent et plus dense dans ce cas. Le raccourci communautaire qui s'y est imposé : wayfinder n'a de sens que si le travail ne s'inscrit pas dans une seule session. C'est de loin la question d'orientation la plus posée, et elle continue d'être posée parce que les descriptions ne vous disent pas où se situe votre propre tâche sur cette ligne - vous devez juger vous-même du nombre de sessions.

**Quand il demande la « destination », cela signifie-t-il la fin de cette session ou la fin de tout ?**

La carte entière : la destination de la carte entière, pas seulement la session initiale. La question est ambiguë car Wayfinder est par définition un outil multi-session, donc une réponse à l'échelle de la session n'a jamais de sens. Les destinations typiques sont une [spec](https://www.aihero.dev/ai-coding-dictionary/spec) à transférer, une décision de verrouillage avant le début de la planification, une preuve de concept ou une modification mise en place comme une migration de données.

**La carte est effacée. Pourquoi ai-je encore besoin de `/to-spec` et `/to-tickets` — Wayfinder n'a-t-il pas déjà rédigé les spécifications et créé les tickets ?**

Les tickets de Wayfinder sont des tickets de décision, et au moment où la carte se ferme, ils sont tous fermés également. Ce qui reste est une carte pleine de décisions liées, qui n'est pas un plan de construction. [to-spec](https://aihero.dev/skills-to-spec) regroupe ces décisions liées en une seule spécification — `/to-spec #<map_issue>` — et [to-tickets](https://aihero.dev/skills-to-tickets) les découpe en tickets de mise en œuvre de traceurs. Boucler la carte directement dans [implement](https://aihero.dev/skills-implement) ignore le repli et supprime les détails liés. Passez directement à la mise en œuvre uniquement lorsque l’effort s’avère vraiment minime. Les gens gèrent le pipeline abrégé et signalent qu'il fonctionne ; les deux étapes supplémentaires vous achètent un artefact de spécification explicite qu'un critique ou un collègue peut lire, ce qui est d'autant plus important que vous êtes moins seul.

**Mon agent a commencé à écrire du code de production au milieu d'une session Wayfinder.**

L’échec le plus signalé avec cette compétence, et il y a un véritable trou derrière. La valeur par défaut « plan, ne pas faire » de Wayfinder peut être remplacée dans les **Notes** de la carte — mais les notes sont écrites par l'agent, donc la contrainte et son exemption se trouvent dans le même fichier que possède la partie contrainte. Un utilisateur a vu un agent écrire « cette carte effectue l'exécution » dans ses propres notes, puis la relire lors de sessions ultérieures en tant que sa propre licence, en s'appuyant sur un serveur en direct. Il n'y a pas d'arrêt strict dans les compétences pour "Je voulais dire la valeur par défaut". En attendant : lisez les notes sur n'importe quelle carte que vous n'avez pas tracée vous-même, conservez l'implémentation dans ses propres sessions et traitez tout `wayfinder:task` qui ressemble à une tranche de la construction comme mal tapé.

**J'ai enregistré 27 tickets, et au moment où je suis arrivé au treizième, le reste n'avait plus de sens.**

Un résultat réel et rapporté à plusieurs reprises, textuellement à partir d’un rapport de terrain. L'instinct par défaut de Wayfinder est de planifier de manière exhaustive, et une carte dont les tickets ultérieurs reposent sur des hypothèses que les précédents invalident est exactement le piège en cascade dont la compétence est accusée. Deux choses y font obstacle. Étendez la carte à une destination délimitée plutôt qu'à l'ensemble du produit - les praticiens rapportent systématiquement que les cartes limitées à une épopée définie se comportent mieux qu'un "outil V1" tentaculaire, et planifier quelque chose de très grand n'est pas l'objectif en premier lieu - l'expédition de petits incréments l'est. Et le [prototype](https://www.aihero.dev/ai-coding-dictionary/prototyping) de manière agressive : la seule raison pour laquelle l'itinéraire reste d'actualité est que l'incertitude est éliminée par des artefacts concrets bon marché avant que la mise en œuvre n'en dépende. Wayfinder est un "prototypemaxxing", pas un "planmaxxing".

**Puis-je traiter plusieurs tickets en parallèle ?**

La frontière est construite pour vous montrer ce qui est réalisable, et des bords bloquants sont là pour que le travail parallèle soit sûr sur papier. En pratique, un à la fois est la valeur par défaut la plus sûre. Les utilisateurs travaillant sur deux tickets de grillage à la fois se voient poser dans une session une question à laquelle ils viennent de répondre dans l'autre, car les sessions ne partagent pas de [context](https://www.aihero.dev/ai-coding-dictionary/context). Il existe également une lacune connue dans les prototypes de tickets : il a été signalé qu'un agent avait construit trois variantes d'interface utilisateur, en avait choisi une lui-même et fermé le ticket ; la sélection vous appartenait, et la compétence ne le dit pas assez fort actuellement. Si vous exécutez en parallèle, examinez d'abord vous-même le graphique de dépendance.

**Dois-je utiliser les problèmes GitHub ?**

Non. Tout outil de suivi peut convenir. GitHub est le mieux pris en charge, car ses sous-tickets et ses relations de blocage natives rendent la frontière visible sans ouvrir la carte ; GitLab, Linear, Jira et le suivi Markdown local sont également utilisés. Deux limites sont à connaître. Sans blocage natif, le graphe de dépendances est déduit du texte et peut nécessiter des corrections manuelles. Avec le suivi Markdown local, les artefacts restent dans le dépôt et risquent d’être conservés par inadvertance. À l’inverse, les mainteneurs de projets libres préfèrent parfois ce mode pour éviter d’encombrer un outil public avec des tickets de planification générés par des agents.

**Les grillades sont épuisantes. Chaque question comporte trois paragraphes.**

Il s’agit de la plainte la plus grave concernant Wayfinder et elle n’est pas résolue. La décomposition donnée par un utilisateur : la verbosité elle-même provoque l'épuisement des décisions, et la longueur supprime *pourquoi* une question est posée, de sorte que vous perdez la chaîne de décision en décision à mesure que la carte s'allonge. La verbosité ressemble à une propriété de l'ensemble actuel de [modèles](https://www.aihero.dev/ai-coding-dictionary/model) plutôt qu'à la compétence, et aucun correctif n'a été trouvé. Atténuations du praticien en circulation : exécutez un [effort de raisonnement](https://www.aihero.dev/ai-coding-dictionary/effort) inférieur et mettez une instruction en langage clair dans votre global `AGENTS.md`. Attendez-vous à y réfléchir sérieusement - la quantité de réflexion que Wayfinder vous demande n'est pas un défaut, c'est l'essentiel de sa fonction.

**Une décision que j'avais déjà prise s'est avérée erronée. Dois-je modifier l'ancien ticket ou en créer un nouveau ?**

Il n'existe pas de directives officielles et l'instinct de l'agent n'est d'aucune aide : il a tendance à concevoir autour de la mauvaise décision plutôt que de la contester, vous devez donc la piloter manuellement. Ce qui fonctionne, c'est d'indiquer clairement à Wayfinder ce qui a changé : il met à jour la carte, révise les tickets concernés et commente ceux déjà fermés. Les modifications de portée au milieu de la carte sont récupérables. Une carte que vous avez *conçue* pour changer est une odeur de cadrage.

**Où est passé `decision-mapping`  ?**

Il s'agit de cette compétence, renommée  `wayfinder`  dans la v1.1 et invoquée comme  `/wayfinder`. La « carte de décision » était un jargon et était également inexacte, car seul un des quatre types de tickets constitue réellement une décision en soi. Le recadrage a donné à la compétence un vocabulaire cohérent – ​​destination, brouillard de guerre, frontière, carte – au lieu d'un terme inventé superposé. L'unité a cependant conservé le mot « décision » : un **ticket de décision** est le nom d'un ticket d'orientation, précisément pour empêcher les gens de le lire comme un ticket de mise en œuvre.

## Indicateurs de réussite

- La destination est écrite et convenue avant qu'un seul ticket n'existe.
- Chaque ticket ouvert se lit comme une question. Tout ticket indiquant « construire le X » est soit mal tapé, soit appartient en aval de la carte.
- Vous pouvez consulter votre outil de suivi et voir quels tickets peuvent être pris sans ouvrir la carte — c'est la frontière qui s'affiche grâce au blocage natif.
- Une session résout un ticket, publie la réponse sous forme de commentaire de résolution, la ferme et laisse une ligne sur les *Décisions jusqu'à présent* de la carte. Puis ça s'arrête.
- **Pas encore spécifié** rétrécit avec le temps. Une zone de brouillard qui se transforme en ticket disparaît de cette section plutôt que de vivre aux deux endroits.
- Lorsque la grille d'ouverture en largeur ne révèle aucun brouillard, la compétence s'arrête et vous indique que l'effort est suffisamment faible pour sauter la carte.
- La session qui termine la carte vous remet une spécification, pas une pull request.

## Où il s’inscrit

`wayfinder` est une **rampe d'accès situationnelle**, pas la porte d'entrée par défaut. L'idée menée par le grill → la chaîne principale est toujours le point de départ de la plupart des travaux ; wayfinder est ce sur quoi vous grimpez lorsque l'idée est trop grande pour être retenue en une seule session, et il fusionne à nouveau sur cette chaîne à [to-spec](https://aihero.dev/skills-to-spec), car une carte effacée se transmet plutôt que de se construire.

Wayfinder s’appuie principalement sur d’autres compétences pour planifier : [grilling](https://aihero.dev/skills-grilling) et [domain-modeling](https://aihero.dev/skills-domain-modeling) résolvent les tickets de décision, [prototype](https://aihero.dev/skills-prototype) traite ceux que la discussion ne suffit pas à trancher et [research](https://aihero.dev/skills-research) travaille comme sous-agent afin que sa lecture ne remplisse pas votre session. [handoff](https://aihero.dev/skills-handoff) sert de pont vers ou depuis une carte lorsqu’une conversation devient trop longue ou qu’une piste secondaire apparaît en cours de session. Pour tout le reste, [ask-mabza](https://aihero.dev/skills-ask-mabza) parcourt la collection.
