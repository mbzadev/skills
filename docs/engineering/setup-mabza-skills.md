## Ce qu’il fait

`setup-mabza-skills` répond à trois questions sur un dépôt : où se trouvent les tickets, comment s’appellent les étiquettes de tri et où se trouvent les documents du domaine. Il enregistre les réponses dans des fichiers Markdown sous `docs/agents/`.

Ces fichiers sont les seuls éléments qui varient d’un dépôt à l’autre. Les skills restent identiques partout : ils lisent `docs/agents/issue-tracker.md` au moment de l’exécution et suivent ses instructions. L’ensemble n’est donc pas lié à GitHub et aucun fichier de skill n’a besoin d’être modifié pour cibler un autre outil. L’invocation « lier les skills à un outil de suivi personnalisé » fonctionne avec tout service accessible par programmation.

Il s’agit d’un skill piloté par une conversation, et non d’un script déterministe. Il lit votre `git remote`, votre fichier `AGENTS.md` et votre éventuel `CONTEXT.md`, présente ce qu’il a trouvé, puis attend votre confirmation avant toute écriture.

## Quand l’utiliser

Vous l’invoquez en tapant `/setup-mabza-skills` : l’agent ne le déclenchera pas seul. Il est volontairement réservé à l’utilisateur, afin qu’aucun autre skill ne modifie la configuration à sa place.

Exécutez-le une fois par dépôt, avant la première utilisation d’un autre skill d’ingénierie. Si [triage](https://aihero.dev/skills-triage), [to-spec](https://aihero.dev/skills-to-spec), [to-tickets](https://aihero.dev/skills-to-tickets) ou [wayfinder](https://aihero.dev/skills-wayfinder) commence à deviner où publier les tickets, ou tente d’appliquer des étiquettes absentes de votre outil de suivi, la configuration n’a pas encore été effectuée. Vous pouvez aussi l’exécuter sur un projet déjà avancé : le skill tient compte de l’existant et ne remet pas en cause le travail accompli.

## Prérequis

Il écrit dans le dépôt dans lequel vous l'exécutez :

| Il écrit | Où |
| --- | --- |
| `issue-tracker.md` | `docs/agents/` |
| `domain.md` | `docs/agents/` |
| `triage-labels.md` | `docs/agents/`, uniquement lorsque la compétence `triage`  est installée |
| Un bloc `## Skills de l’agent` | `AGENTS.md` à la racine du dépôt |

Tous ces éléments sont des fichiers Markdown versionnés. Il n’existe pas de configuration globale ou propre à l’utilisateur : chaque dépôt conserve sa propre copie.

## Les trois décisions

Il mène chaque section avec la réponse recommandée et ignore toute exploration déjà réglée. La plupart des analyses comportent deux confirmations et sont terminées.

| Décision | Ce qu'il propose | Quand il demande réellement |
| --- | --- | --- |
| **Suivi des problèmes** | celui qui correspond à votre `git remote` | toujours — c'est le seul vrai choix |
| **Étiquettes de tri** | conserver les cinq noms canoniques (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) | uniquement si la compétence `triage`  est installée |
| **Documents du domaine** | contexte unique : un `CONTEXT.md` plus `docs/adr/` à la racine | seulement s'il détecte les signaux monorepo, et alors il offre un multi-contexte `CONTEXT-MAP.md` |

Les options de l’outil de suivi :

| Options | Où vivent les problèmes | Besoins |
| --- | --- | --- |
| **GitHub** | les problèmes GitHub du dépôt | le `gh` CLI |
| **GitLab** | les problèmes GitLab du dépôt | le `glab` CLI |
| **Markdown local** | fichiers sous `.scratch/<feature>/` dans ce dépôt | aucun outil distant |
| **Autre** | à l’emplacement que vous indiquez | une description de votre flux de travail |

Les trois premiers sont fournis sous forme de modèles et fonctionnent immédiatement. Le suivi Markdown local est une option à part entière, pas une solution de secours : un projet individuel sans dépôt distant est entièrement pris en charge. N’utilisez toutefois pas à la fois GitHub et le suivi Markdown local ; ce sont deux solutions alternatives, pas deux couches complémentaires.

« Autre » n’est pas une option factice. Elle permet d’utiliser Jira, Linear, Azure DevOps ou Beads : vous décrivez le flux de travail, le skill l’enregistre dans `docs/agents/issue-tracker.md`, puis les skills suivants appliquent ces instructions. La communauté l’a déjà fait avec une variante Jira via [MCP](https://www.aihero.dev/ai-coding-dictionary/mcp), une interface en ligne de commande Gitea inspirée de `gh` et un tableau de bord local sur mesure.

## Questions fréquentes

**Dois-je utiliser GitHub ?**

Non. GitHub, GitLab et le suivi Markdown local sous `.scratch/` sont fournis sous forme de modèles prêts à l’emploi ; les autres outils passent par l’option « Autre ». L’outil de suivi relève de la configuration du dépôt, pas du fonctionnement intrinsèque du skill.

**Dois-je le réexécuter après avoir mis à jour les compétences ?**

Interrogé directement après la v1.1, Mabza a répondu oui. Le message de clôture de la compétence est plus doux : il vous indique qu'une réexécution n'est nécessaire que pour changer d’outil de suivi ou recommencer. Les deux sont défendables et la raison de l'écart est réelle : les modèles de départ changent entre les versions, donc un `docs/agents/issue-tracker.md` écrit par une version plus ancienne peut devenir obsolète par rapport aux compétences qui le lisent actuellement. Si une compétence en aval commence à faire quelque chose que la documentation décrit différemment, la réexécution est la solution la moins chère.

**Où la configuration est-elle écrite ?** Dans `AGENTS.md`, à la racine du dépôt. Si le fichier n’existe pas, le skill vous présente son contenu avant de le créer. Un bloc `## Skills de l’agent` existant est mis à jour sur place afin d’éviter les doublons.

**Cela n'a pas créé mes étiquettes de tri.**

En effet, le skill ne les crée pas. `docs/agents/triage-labels.md` est une *table de correspondance* : elle indique à `/triage` quelles étiquettes de votre outil correspondent aux cinq rôles canoniques. Elle n’exécute pas `gh label create`. Sur un nouveau dépôt GitHub, les étiquettes peuvent donc ne pas exister. Deux conséquences :

- Si votre outil utilise déjà les noms canoniques, la correspondance est directe et vous n’avez rien à configurer.
- Les étiquettes `wayfinder:map` et `wayfinder:<type>` de [wayfinder](https://aihero.dev/skills-wayfinder) ne sont pas créées ici non plus. Comme `gh issue create --label <missing>` échoue si l’étiquette est absente, créez-les manuellement avant la première exécution de Wayfinder sur GitHub.

**Puis-je configurer le comportement des autres compétences ici — [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) cadence, format de question, ton ?**

Non. Il configure trois éléments : le suivi, les étiquettes et l’organisation des documents. Les préférences générales appartiennent à votre fichier `AGENTS.md`, sous forme d’instructions claires que Codex et les skills peuvent lire.

**Puis-je conserver la configuration dans un répertoire global au lieu de la valider dans chaque dépôt ?**

Pas aujourd'hui. Il existe une demande ouverte pour exactement cela de la part d'une personne qui exécute les compétences dans de nombreux dépôts, et aucun mode au niveau utilisateur n'existe. Chaque dépôt a son propre `docs/agents/`.

**N'est-ce pas étrange d'avoir une compétence qui configure les autres compétences ?**

La réserve est légitime : le modèle configure lui-même les skills qu’il utilisera ensuite. L’alternative serait toutefois de dupliquer les consignes de suivi dans chaque skill qui manipule des tickets. Le compromis retenu consiste à produire des fichiers Markdown lisibles et modifiables : vous pouvez contrôler chaque fichier généré, puis effectuer les ajustements courants à la main sans relancer le skill.

## Indicateurs de réussite

- `docs/agents/issue-tracker.md` et `docs/agents/domain.md` existent, plus `triage-labels.md` si `triage` est installé.
- Une section `## Skills de l’agent` apparaît dans `AGENTS.md`, avec un résumé d’une ligne pointant vers chacun de ces fichiers.
- L’outil de suivi proposé correspond au dépôt distant réellement utilisé, et les noms d’étiquettes correspondent à ceux qui existent dans cet outil.
- Ensuite, `/to-tickets` publie sans vous demander où se trouvent les problèmes, et `/triage` applique des étiquettes plutôt que de les inventer.
- Rien dans les fichiers de compétences eux-mêmes n'a changé. Si le programme d'installation a modifié un `SKILL.md`, quelque chose s'est mal passé.

## Où il s’inscrit

`setup-mabza-skills` est la **configuration initiale** du flux d’ingénierie : tout le reste la suppose, mais elle ne constitue pas une étape de la chaîne. [triage](https://aihero.dev/skills-triage) applique les étiquettes définies ici ; [to-spec](https://aihero.dev/skills-to-spec) et [to-tickets](https://aihero.dev/skills-to-tickets) publient dans l’outil de suivi indiqué ; [wayfinder](https://aihero.dev/skills-wayfinder) lit les règles de navigation du même fichier. [domain-modeling](https://aihero.dev/skills-domain-modeling) remplira ensuite le document de domaine. Pour choisir le prochain skill, utilisez [ask-mabza](https://aihero.dev/skills-ask-mabza).
