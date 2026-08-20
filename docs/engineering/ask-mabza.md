## Ce qu’il fait

`ask-mabza` est le routeur des skills de ce dépôt. Décrivez votre situation — une idée impossible à démarrer, une série de rapports de bogues entrants ou une [session](https://www.aihero.dev/ai-coding-dictionary/session) qui s’éternise — et il vous indiquera le skill ou la séquence de skills adaptée, ainsi que les étapes où une décision humaine est nécessaire.

Il recommande, puis s’arrête. Il ne pose pas les questions à votre place, n’écrit pas de [spécification](https://www.aihero.dev/ai-coding-dictionary/spec), n’ouvre aucun fichier et ne déclenche pas le skill qu’il vient de nommer. Il vous donne simplement la prochaine commande à saisir. La carte est maintenue manuellement pour les skills de ce dépôt ; elle ne recense donc ni vos skills personnels ni ceux d’un autre auteur.

## Quand l’utiliser

Vous l’invoquez en tapant `/ask-mabza` : l’agent ne le déclenchera pas seul.

| Votre situation | Ce que le routeur rend |
| --- | --- |
| Une idée, mais aucune idée par où commencer | La tête du flux principal et si la build est suffisamment petite pour ignorer la spécification |
| Bogues et demandes provenant d'autres personnes | La rampe d'accès [triage](https://aihero.dev/skills-triage), et pourquoi les [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket) que vous avez générés vous-même n'y appartiennent pas |
| Deux compétences qui semblent interchangeables | La frontière entre eux, et c'est généralement un test concret plutôt qu'une question de goût. [grill-me](https://aihero.dev/skills-grill-me) ou [grill-with-docs](https://aihero.dev/skills-grill-with-docs) s'active si vous êtes dans un répertoire de travail ; [grill-with-docs](https://aihero.dev/skills-grill-with-docs) ou [wayfinder](https://aihero.dev/skills-wayfinder) active si l'effort correspond à une session |
| Une longue séance et une décision sur le [contexte](https://www.aihero.dev/ai-coding-dictionary/context) | L'arbre ordonné sur les cinq options à une limite de phase |
| Une compétence que vous avez déjà choisie | Rien d'utile. Invoquez cette compétence directement. |

## Prérequis

Le routeur nomme les compétences ; il ne les installe pas. Tout ce qu'il pointe doit être installé pour que la recommandation soit exploitable, et il ne connaît que les compétences promues dans ce dépôt.

Les itinéraires dépendants de l’outil de suivi — triage, `to-spec`, `to-tickets`, `implement` — supposent que [setup-mabza-skills](https://aihero.dev/skills-setup-mabza-skills) a déjà configuré un outil de suivi des problèmes dans le dépôt. Le routeur peut les recommander avant que cela ne se produise.

## Des flux, pas des compétences

Le mot avec lequel la compétence vous permet de réfléchir est **flux** : un chemin *à travers* les compétences, pas un seul. Nommer votre situation vous place sur un flux à une étape, ce qui est une réponse différente de « voici la compétence qui correspond à vos mots-clés ». Il existe quatre types de parcours, et la compétence elle-même les porte intégralement :

- **Le flux principal**, idée d'expédition. Grill, spécification, tickets, implémentation, révision, avec deux branches à l'intérieur : un détour de prototype lorsqu'une question nécessite un code exécutable pour être réglé, et la séparation spécifications-tickets, qui ne rapporte son coût que lorsque la construction s'étend sur plus d'une session.
- **On-ramps**, pour une situation qui génère du travail puis se fond dans le flux principal : rapports de bogues entrants, quelque chose de cassé, ou un effort trop flou et trop important pour tenir en une seule session.
- **Autonomes**, issus de chaque flux, recherchés selon leurs propres conditions : le prototype, le questionnaire, le conflit de fusion dans lequel vous êtes déjà assis.
- **Une couche de vocabulaire en dessous**, les deux références que les autres compétences intègrent lorsque les mots plutôt que le processus sont le problème.

## La limite de phase

L'autre idée qu'il vous propose est la **limite de phase**. Une phase est une partie du travail au sein d'une session - le [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling), la mise en œuvre, le contrôle qualité - et la frontière entre deux d'entre elles est le seul endroit où se pose la question « que dois-je faire avec ce contexte ? appartient. À mi-phase, il n'y a rien à décider : continuez ou divisez ce qui reste en [sous-agents](https://www.aihero.dev/ai-coding-dictionary/subagent).| Options | Prenez-le quand |
| --- | --- |
| **Continuer** | La phase suivante veut celle-ci textuellement, ou il vous reste [zone intelligente](https://www.aihero.dev/ai-coding-dictionary/smart-zone). C'est le seul mouvement qui maintient la session comme [source primaire](https://www.aihero.dev/ai-coding-dictionary/primary-source), alors excluez-la d'abord |
| **`/clear`** | Tout ce qui est derrière vous est jetable. Coup le moins cher du tableau, et aller simple si vous vous trompez |
| **[transfert](https://aihero.dev/skills-handoff)** | Quelque chose doit voyager : un nouveau [harnais](https://www.aihero.dev/ai-coding-dictionary/harness), un nouvel annuaire, un collègue, une tâche secondaire démarrée à mi-phase |
| **Sous-agent** | La tâche est suffisamment limitée pour être exécutée avec vous [loin du clavier](https://www.aihero.dev/ai-coding-dictionary/afk) |
| **`/compact`** | Aucune des réponses ci-dessus. La valeur par défaut, et elle arrive souvent ici |

Deux d'entre eux se trompent régulièrement, c'est pourquoi le routeur transmet la commande plutôt que la liste. `/handoff` se lit comme le pont général entre les fenêtres et ne l'est pas : la portabilité est la totalité de ce qu'il achète. `/compact` est le bas de l'arbre plutôt que la première portée, car les quatre questions au-dessus sont chacune moins chères ou plus précises.

## Questions fréquentes

**N'y a-t-il pas simplement une liste des compétences dans le bon ordre ?**

Les gens continuent d’en demander un dans le README. Cette compétence est cette liste – c’est pour cela qu’elle existe. Une table statique dirait  `wayfinder → to-spec → to-tickets → implement → code-review`  et serait fausse dans la plupart des situations, car les parties intéressantes sont les branches - existe-t-il une base de code, la construction s'étend-elle sur les sessions, cette question peut-elle être réglée en parlant. Le coût honnête est que le routeur est entretenu manuellement et est en retard sur le dépôt. `/grilling` et `/resolving-merge-conflicts` tous deux expédiés bien avant que le routeur ne les nomme.

**Il m'a dit que la moitié des compétences ne sont pas installées.**

Les skills orchestrateurs sont volontairement configurés avec `policy.allow_implicit_invocation: false` dans `agents/openai.yaml`. Ils restent installés et accessibles sur demande explicite, même si Codex ne les déclenche pas automatiquement. En cas de doute, appelez le skill par son nom ou vérifiez le répertoire `skills/` référencé par `.codex-plugin/plugin.json`.

**Il décrit le comportement d'une compétence, et la compétence ne fait pas cela.**

Aussi réel, aussi non fixé. Le routeur répond à partir de son propre résumé d'une ligne de chaque compétence plutôt qu'à partir de la compétence elle-même. Un rapport détaillé a suivi trois instances au cours d'une seule session, y compris une recommandation de sauter [à la spécification](https://aihero.dev/skills-to-spec) sur la base de la glose "transformer le fil en spécification" -  `to-spec/SKILL.md`  n'a jamais été ouvert. Dans tous les cas, la vérification n'a eu lieu qu'après que l'utilisateur a repoussé la demande, et jamais de sa propre initiative. Sauter `to-spec` il y a eu un véritable contrôle des coutures, et les tickets qui sont sortis sous-estimaient le travail. Lorsque le routeur affirme quelque chose de porteur à propos d'une autre compétence, demandez-lui d'ouvrir cette `SKILL.md` d'abord. La même chose s'applique aux questions que la carte ne couvre pas du tout, comme par exemple s'il faut utiliser le [mode plan](https://www.aihero.dev/ai-coding-dictionary/agent-mode) : cette réponse est l'inférence du [modèle](https://www.aihero.dev/ai-coding-dictionary/model), pas quelque chose d'écrit ici.

**Pourquoi est-ce de la prose au lieu d'une liste de contrôle numérotée ?**

Une plainte juste, déposée comme une question ouverte, affirmant que la majeure partie du routage est déterministe et que le récit rend difficile à analyser. Rien ne vous empêche de demander le formulaire compressé : "donnez-moi simplement la séquence" vous obtenez la séquence. Ce que porte la prose, c'est la moitié conditionnelle : les branches, où une décision humaine est attendue, et où dégager ou compacter entre les étapes. Une liste de contrôle plate répond exactement à cela.

**Peut-il utiliser mes propres compétences ou celles d'un autre auteur ?**

Non. Trois propositions distinctes ont demandé un routeur qui lit votre répertoire local `skills/`  et recommande tout ce qui est installé. `ask-mabza` n'est pas cela. Il s'agit d'une carte d'un ensemble, entretenue à la main, et elle ne sait rien des compétences que vous avez écrites ou installées ailleurs.

**Il m'a dit de modifier un SKILL.md.**

Ce conseil est souvent correct et rarement durable. Quelqu'un lui a demandé comment faire en sorte que [implement](https://aihero.dev/skills-implement) ferme les tickets, on lui a dit d'ajouter une ligne à la compétence et a immédiatement repéré le problème : `npx skills update` écrase le fichier et l'installation du plugin est en lecture seule. Mettez le comportement debout dans le vôtre `AGENTS.md`, ou dites-le dans l'invocation. Les adaptations au niveau des invites survivent aux mises à jour : diriger le flux vers Linear au lieu de GitHub, ou lui demander quels tickets ouverts pourraient fonctionner en parallèle, sont deux choses que les gens font de cette façon.

**Il a nommé une compétence que je n'ai pas, ou j'en ai manqué une.**

Vérifiez le journal des modifications pour un changement de nom avant de supposer qu'il a disparu. `writing-great-skills` est devenu [writing-for-agents](https://aihero.dev/skills-writing-for-agents) sans alias, `to-prd` est devenu [to-spec](https://aihero.dev/skills-to-spec), et `pathfinder` est devenu [wayfinder](https://aihero.dev/skills-wayfinder). Quatre compétences ont été purement et simplement retirées dans les compétences qui les absorbaient : `ubiquitous-language`, `design-an-interface`, `qa` et `request-refactorisation-plan`. Le cas inverse est le décalage du routeur, ci-dessus.

## Indicateurs de réussite

- Il se termine par nommer ce qu'il faut taper et s'arrête là, au lieu de commencer le travail lui-même.
- L'itinéraire qu'il renvoie mentionne où effacer ou compacter le contexte et où vous êtes censé réviser, pas seulement une liste de noms de compétences.
- Lorsque deux compétences sont proches, il indique laquelle et pourquoi l'autre ne vous convient pas.
- Toute affirmation concernant le comportement d'une autre compétence apparaît dans la trace lors de la lecture du `SKILL.md` de cette compétence.
- Vous reconnaissez votre propre situation dans ce qu'elle vous rend, plutôt que dans le scénario générique le plus proche.

## Où il s’inscrit

`ask-mabza` est un **routeur autonome** qui couvre toute la collection. Ce n’est jamais une étape de la chaîne : il pointe vers chaque parcours et sert de nœud commun aux autres pages de documentation. Vous arrivez le plus souvent sur [grill-with-docs](https://aihero.dev/skills-grill-with-docs), point de départ du flux principal, ou sur [triage](https://aihero.dev/skills-triage), qui traite le travail entrant plutôt que celui que vous avez planifié.

Il s'agit d'une [source secondaire](https://www.aihero.dev/ai-coding-dictionary/secondary-source) sur les compétences qu'elle décrit. Là où le routeur et un `SKILL.md` ne sont pas d'accord, le `SKILL.md` a raison.
