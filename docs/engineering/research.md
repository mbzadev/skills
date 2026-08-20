## Ce qu’il fait

`research`  répond à une question en lisant les sources qui possèdent la réponse, puis laisse un fichier Markdown cité dans le dépôt. Il fonctionne uniquement à partir de **[sources primaires](https://www.aihero.dev/ai-coding-dictionary/primary-source)** — documents officiels, code source, spécifications, API propriétaires — et suit chaque réclamation jusqu'à la source qui en est propriétaire, de sorte qu'il ne répétera pas le récit d'un article de blog sur une API lorsque les propres documents de l'API sont accessibles.

Il ne vous répond pas dans la conversation. Le résultat est un fichier, écrit là où le dépôt conserve déjà ces notes, avec un lien sur chaque réclamation. C'est là l'essentiel : un document auquel vous pouvez réagir, remettre à un autre agent ou jeter, plutôt qu'une réponse qui disparaît à la fin de la [session](https://www.aihero.dev/ai-coding-dictionary/session).

## Quand l’utiliser

Tapez `/research`, ou laissez l’agent le sélectionner automatiquement lorsqu’une tâche devient principalement un travail de lecture.

Utilisez ce skill lorsque la prochaine étape consiste à *trouver quelque chose* en dehors du répertoire de travail - comment se comporte une API tierce, ce que dit réellement une spécification, si une revendication de version est valable - et vous préférez ne pas bloquer votre propre fil de discussion en faisant la lecture. Ce dont vous avez besoin détermine quelle compétence :

| Ce dont vous avez besoin | Utilisez |
| --- | --- |
| Un fait extérieur qu'une décision attend | `research` |
| Une décision prise *avec* vous, par entretien | [griller](https://aihero.dev/skills-grilling) |
| Une décision d'architecture durable, inscrite dans les `CONTEXT.md` et les ADR | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) |
| Pour savoir si une approche fonctionne dans votre base de code | [prototype](https://aihero.dev/skills-prototype) |
| Un plan trop ambitieux pour une seule session | [wayfinder](https://aihero.dev/skills-wayfinder) |

La frontière entre `research` et `grill-with-docs` est la **durée de conservation du résultat**. La recherche produit des informations à courte durée de vie, par exemple le fonctionnement actuel du mécanisme d’authentification d’une bibliothèque. Un ADR enregistre au contraire une décision durable. Si le résultat attendu est une décision plutôt qu’un fait, vous avez besoin d’une séance de [questions approfondies](https://www.aihero.dev/ai-coding-dictionary/grilling), pas d’une recherche.

## Démarches déléguées

Le facteur déterminant est que la lecture s'exécute en tant qu'**agent d'arrière-plan**. Vous continuez à travailler ; il se déclenche, suit chaque revendication jusqu'à sa source principale, écrit un fichier Markdown et rend compte. La recherche est un travail préparatoire que vous déléguez, sans penser que vous sous-traitez : vous obtenez un document à analyser, à planifier ou à concevoir, et vous passez toujours l'appel.

La délégation n'est pas surveillée et l'agent d'arrière-plan peut engendrer son propre agent d'arrière-plan. Il s’agit de l’aspect brut le mieux documenté de la compétence.

L'endroit où le fichier atterrit est décidé par le dépôt, pas par la compétence : il correspond à toute convention existant déjà pour les notes, et s'il n'y en a pas, il choisit un endroit raisonnable et vous indique où. Il écrit un fichier par exécution.

## Questions fréquentes

**Cela a donné naissance à un deuxième agent de recherche : est-ce censé arriver ?**

Non. Il s’agit du [ticket ouvert nº 530](https://github.com/mbzadev/skills/issues/530). Le skill demande à son appelant de lancer un agent en arrière-plan sans en restreindre le type. L’agent créé peut donc être de type `general-purpose`, disposer lui-même de l’outil `Agent` et relancer les mêmes instructions. Un utilisateur a ainsi observé qu’une seule recherche consommait environ 450 000 [jetons](https://www.aihero.dev/ai-coding-dictionary/token) dans trois analyses superposées, dont une copie s’est terminée une demi-heure plus tard sans être visible. Le même emboîtement a été confirmé dans Codex avec GPT-5.6-sol. Aucun correctif structurel n’est livré. Certains utilisateurs ajoutent une consigne demandant à tout [sous-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) déjà lancé d’effectuer lui-même le travail au lieu de le déléguer à nouveau. Après l’invocation, surveillez donc les tâches en arrière-plan et arrêtez toute duplication.

L’échec inverse existe également : si vos propres instructions globales interdisent à un agent de redéléguer du travail, l’agent en arrière-plan refusera poliment la tâche et la compétence ne fera rien en silence.

**Où le fichier doit-il se trouver – et dois-je le valider ?**

La compétence place le fichier là où le dépôt conserve déjà des notes et n'a pas d'opinion au-delà. Celui de la communauté est assez réglé : les ADR sont conservés, les dossiers de recherche ne le sont pas. La version la plus pointue, tirée d'un fil de discussion Discord sur exactement cette question : "ADR oui. Tout le reste est archivé ou supprimé une fois terminé. Autrement, cela devient une corvée de travail et peut empoisonner les futures lectures du dépôt si vous vous éloignez de la spécification/recherche." Un dossier de recherche enregistre ce qui était vrai le jour où il a été rédigé, donc un dossier périmé est pire que rien. Dans l’ensemble, ces artefacts n’appartiennent pas vraiment à git, et il n’y a pas de foyer canonique pour eux – les gens utilisent plutôt Obsidian, un dépôt de connaissances distinct ou le système de suivi des problèmes.

**Qu'est-ce qui constitue une source primaire de « haute confiance », et qui décide ?**

Le [modèle](https://www.aihero.dev/ai-coding-dictionary/model) le fait. La compétence nomme les *types* de sources éligibles (documents officiels, code source, spécifications, API propriétaires) et il n'y a pas de liste verte, pas de porte de domaine et pas de passe de vérification. Il s'agissait de l'objection la plus forte lorsque la compétence a été proposée pour la première fois et elle n'a jamais reçu de réponse publique : « Cinq sous-agents de recherche pointés vers des éléments indésirables ne vous donnent que cinq mauvaises réponses sûres plus rapidement. Comment contrôlez-vous ce qui compte comme sources de haute confiance ? L'atténuation dont vous disposez réellement est la citation sur chaque réclamation. Suivez-en deux ou trois. S'ils atterrissent sur un résumé de la chose plutôt que sur la chose, l'exécution échoue dans son unique tâche.

**Une session ultérieure réutilise-t-elle ce qu'une exécution précédente a trouvé ?**

Non. Aucun mécanisme ne recharge automatiquement une recherche antérieure ; le document reste dans le dépôt jusqu’à ce qu’un humain ou un skill le désigne. La valeur vient du fichier Markdown que l’agent relira comme contexte, pas de la collecte elle-même. Un fichier produit une seule fois puis oublié n’est qu’une recherche plus élaborée. Pour qu’il reste utile, introduisez-le explicitement dans l’étape suivante : joignez-le à une spécification, citez-le pendant une séance de questions ou liez-le depuis un [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket).

**Pourquoi ne pas simplement demander à l'agent d'aller lire la documentation ?**

Vous pouvez, et une invite de deux lignes indiquant exactement que c'était la pratique remplacée par cette compétence. Deux choses que la compétence achète par rapport à l'invite : elle s'exécute en arrière-plan afin que votre session garde son [context](https://www.aihero.dev/ai-coding-dictionary/context) propre, et la contrainte de source principale et la sortie du fichier cité ressortent de la même manière à chaque fois plutôt que de la manière dont vous l'avez formulé. Par rapport au mode de recherche approfondie d'un [harnais](https://www.aihero.dev/ai-coding-dictionary/harness), la différence réside dans l'artefact et la discipline source, pas dans la recherche. Si une invite de deux lignes vous donne ce dont vous avez besoin sur une petite question, utilisez l'invite de deux lignes.

**Quand arrête-t-il la lecture ?**

Il n'y a pas de critère d'arrêt dans la compétence, et cela se manifeste par deux plaintes qui semblent opposées mais qui constituent le même écart : des agents qui vont beaucoup trop en profondeur et des agents qui couvrent un sujet de manière large tout en manquant le détail spécifique qui comptait. Un praticien l'a expliqué comme suit : « Les compétences en recherche approfondie sont parfois un peu trop approfondies. Et demander à un agent de faire des recherches aboutit généralement à manquer des détails cruciaux ». La portée est à vous. Une question précise et à laquelle il est possible de répondre – une API, un comportement, une revendication de version – revient bien mieux que « recherche X ».

**`/wayfinder` tickets de recherche créés – dois-je les résoudre moi-même ?**

Non, il les déclenche maintenant pour vous. Dans les modifications inédites depuis la version 1.1, une session de cartographie génère un sous-agent  `/research`  par ticket de recherche et les brûle en parallèle, capturant les résultats sur une branche  `research/<name>`  jetable avec un [pointeur de contexte](https://www.aihero.dev/ai-coding-dictionary/context-pointer) du ticket. Les tickets de recherche sont la seule exception à la règle d'un ticket par session de Wayfinder, car ils sont [AFK](https://www.aihero.dev/ai-coding-dictionary/afk) — rien ne vous attend. Deux problèmes connus avec ces branches : le sous-agent a été vu ouvrir un brouillon de PR à partir d'une branche qui n'est jamais censée fusionner ([numéro 576](https://github.com/mbzadev/skills/issues/576)), et la suppression ultérieure de la branche brise les pointeurs de contexte que contiennent les tickets.

## Indicateurs de réussite

- Votre propre session continue. Si vous êtes assis à le regarder lire, la délégation n'a pas eu lieu.
- Exactement une nouvelle tâche en arrière-plan apparaît. Un deuxième avec un nom presque identique est le bogue de nidification.
- Un nouveau fichier Markdown apparaît, dans le dossier que le dépôt utilise déjà pour les notes, et l'agent vous indique le chemin.
- Chaque revendication contient un lien, et en suivre deux au hasard vous amène sur un document officiel, une spécification ou le fichier source réel - pas sur la rédaction de quelqu'un à ce sujet.
- Vous pouvez prendre la décision sur laquelle vous étiez coincé seul à partir du dossier, sans revenir vous-même aux sources.

## Où il s’inscrit

`research` est un skill autonome, utilisable à tout moment, qui alimente la réflexion sans rester dans la chaîne de construction. Son fichier est destiné à être réutilisé *dans* le flux : [grilling](https://aihero.dev/skills-grilling) et [grill-with-docs](https://aihero.dev/skills-grill-with-docs) posent des questions plus précises lorsque les faits sont établis, et [to-spec](https://aihero.dev/skills-to-spec) peut synthétiser ses résultats. [wayfinder](https://aihero.dev/skills-wayfinder) est le seul skill qui l’invoque directement, en confiant chaque ticket de recherche de sa carte à un sous-agent `/research`. Pour voir la carte complète, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
