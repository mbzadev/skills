## Ce qu’il fait

`triage` traite les tickets de votre projet au moyen d’une petite machine à états fondée sur des **rôles de tri** : un rôle de catégorie et un rôle d’état. Chaque passage produit soit un brief prêt pour l’agent, soit une question précise destinée à l’auteur du ticket, soit une fermeture accompagnée de son motif.

Il s’applique uniquement aux tickets **que vous n’avez pas créés** : rapports de bogue bruts, demandes de fonctionnalité entrantes ou pull requests externes arrivées sans préparation. Les [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket) produits par [to-tickets](https://aihero.dev/skills-to-tickets) sont déjà prêts pour l’agent ; les repasser dans `triage` ne ferait qu’ajouter du travail inutile. La règle est simple : `/triage` traite les demandes entrantes, pas celles issues de votre propre planification.

Autre différence avec un étiquetage manuel : le skill recommande une décision, puis attend votre accord. Il présente la catégorie et l’état proposés, les justifie et résume ce qu’il a trouvé dans la base de code avant de modifier quoi que ce soit.

## Quand l’utiliser

Vous invoquez cela en tapant `/triage` puis en décrivant ce que vous voulez dans un langage simple – l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne l'atteindra pas tout seul. "Montrez-moi tout ce qui nécessite mon attention", "regardons le n°42", "déplaçons le n°42 vers prêt pour l'agent".

| Ce que vous avez | Où aller |
| --- | --- |
| Un tracker rempli de rapports bruts d'autres personnes | `/triage` |
| Une idée approximative, rien d'écrit | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) |
| Une conversation réglée à transformer en [spec](https://www.aihero.dev/ai-coding-dictionary/spec) | [to-spec](https://aihero.dev/skills-to-spec) |
| Une spécification à diviser en tickets prêts pour l'agent | [to-tickets](https://aihero.dev/skills-to-tickets) |
| Un bug confirmé dont il faut trouver la cause profonde | [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) |

## Prérequis

`triage` lit et modifie votre outil de suivi. [setup-matt-pocock-skills](https://aihero.dev/skills-setup-matt-pocock-skills) doit donc avoir configuré cet outil et son vocabulaire d’étiquettes. Les rôles ci-dessous portent des noms **canoniques** ; vos étiquettes réelles peuvent être différentes, auquel cas la configuration définit leur correspondance. Si elles utilisent déjà les noms canoniques, aucune adaptation n’est nécessaire.

La configuration précise aussi si les pull requests externes font partie des demandes à traiter et définit ce qui est considéré comme externe. Cette option est désactivée par défaut ; activez-la dans `docs/agents/issue-tracker.md` pour inclure les PR.

## La machine à états

Chaque élément trié finit par porter exactement un rôle de catégorie et un rôle d'état. Deux catégories : `bug` (quelque chose est cassé) et `enhancement` (nouvelle fonctionnalité ou amélioration). Cinq états :

| État | Signification |
| --- | --- |
| `needs-triage` | Vous devez l'évaluer. Là où un problème non étiqueté arrive normalement en premier. |
| `needs-info` | En attente d’informations de la part de l’auteur. Revient à `needs-triage` après sa réponse. |
| `ready-for-agent` | Entièrement spécifié, avec un dossier d'agent ci-joint. Un agent [AFK](https://www.aihero.dev/ai-coding-dictionary/afk) peut le prendre. |
| `ready-for-human` | Le même brief, plus pourquoi cela ne peut pas être délégué : jugement, accès externe, tests manuels. |
| `wontfix` | Fermé, avec motif enregistré. |

C'est tout le vocabulaire, et l'invariant « exactement un rôle d'État » est ce qui maintient les requêtes simples. C'est également le domaine le plus demandé de la [compétence](https://www.aihero.dev/ai-coding-dictionary/skill) : les utilisateurs ont demandé un sixième état pour un travail spécifié mais bloqué sur un autre problème, pour un `deferred` travail bloqué sur un déclencheur futur et pour un état terminal `implemented` . Aucun d’entre eux n’a été expédié. Voir les questions ci-dessous.

`wontfix`  se divise en trois manières, et la différence est importante car une seule d'entre elles écrit dans la base de connaissances :

| Pourquoi vous le fermez | Que se passe-t-il |
| --- | --- |
| Déjà mis en œuvre | Un commentaire pointant vers l'endroit où il vit déjà. Rien n'est écrit dans `.out-of-scope/`  : il s'agit d'une fonctionnalité intégrée, pas d'une fonctionnalité rejetée, et le déposer ici empoisonnerait les vérifications de dédoublonnage. |
| Bug rejeté | Explication polie, puis fermez. |
| Amélioration rejetée | Un fichier dans `.out-of-scope/`, lié depuis le commentaire de clôture, puis fermez. |`.out-of-scope/` est un fichier Markdown par **concept** rejeté, et non par problème, écrit sous la forme d'un court document de conception plutôt que d'une ligne de base de données : ce qui a été rejeté, pourquoi et chaque problème qui l'a demandé. `triage` lit l'intégralité du répertoire avant d'évaluer quoi que ce soit et correspond par concept plutôt que par mot clé - "thème de nuit" correspond `dark-mode.md`. Lorsqu'il rencontre une correspondance, il fait apparaître l'ancienne décision et vous demande si vous ressentez toujours la même chose, au lieu de relancer la demande à partir de zéro.

## Vérifier avant de rédiger le brief

Avant toute séance de [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling), `triage` vérifie le bien-fondé de la demande. Pour un bug, il tente de le reproduire à partir des étapes fournies. Pour une PR, il examine la branche et exécute les tests appropriés. Il indique ensuite si le problème est confirmé, avec l’emplacement du code concerné, s’il n’a pas pu être reproduit ou si les informations sont insuffisantes — ce dernier cas justifie fortement l’état `needs-info`.

Il effectue deux vérifications supplémentaires dans la base de code : la **redondance** — le comportement existe-t-il déjà, en recherchant le concept métier plutôt que les mots employés dans le ticket ? — et le **rejet préalable** — `.out-of-scope/` contient-il déjà une décision négative ? Une correspondance mène dans les deux cas à `wontfix`.

Tout cela existe pour rendre un seul artefact efficace : le **agent brief**, le commentaire structuré publié lorsqu'un problème est déplacé vers `ready-for-agent`. Une fois publié, le brief constitue le contrat et le rapport original n'est que le contexte. Les briefs sont rédigés pour être **durables** plutôt que précis, car un problème peut rester en suspens `ready-for-agent`  pendant des semaines pendant que le code se déplace en dessous. Ils nomment donc les types, les signatures et les contrats comportementaux, et ne classent jamais les chemins ou les numéros de ligne. Une reproduction confirmée constitue un mémoire bien plus solide qu’une supposition.

## Un PR est un problème avec le code joint

Lorsque l’outil de suivi inclut les pull requests externes parmi les demandes à traiter, elles passent par la même machine : mêmes catégories, mêmes états et mêmes transitions. Après lecture du diff, `ready-for-agent` signifie qu’un brief est joint et qu’un agent peut poursuivre le travail ; `ready-for-human` signifie que la PR est prête pour une fusion humaine. Le brief décrit ce qu’il reste à faire à partir du diff existant, pas comment reconstruire la fonctionnalité depuis zéro.

La découverte ne fait apparaître que les PR *externes*, car la branche en cours d’un collaborateur n’est pas un travail de triage. Ce filtre ne concerne que la découverte : une PR nommée explicitement sera triée quel que soit son auteur. Une limite est connue : le modèle GitHub demande à `gh pr list` un champ `authorAssociation` que `gh` n’expose pas ; la commande fournie échoue donc ([#468](https://github.com/mattpocock/skills/issues/468)).

## Questions fréquentes

**J'ai couru `/to-spec` et `/to-tickets`, et maintenant ces tickets sont là, sans tri. Est-ce que je leur écrase `/triage`  ?**

Non, ils sont déjà prêts pour les agents — `to-tickets` applique le label `ready-for-agent`  au fur et à mesure de sa publication, précisément pour qu'un coureur AFK les récupère sans autre passe. L'utilisateur qui a cliqué sur cela avait exécuté le flux de spécifications, vu `needs-triage` sur la sortie et trouvé que son exécuteur AFK ignorait tout. `triage` est la rampe d'accès pour le travail qui arrive de l'extérieur ; le flux de spécifications est la voie pour le travail dont vous êtes à l'origine. Ils se rencontrent au `ready-for-agent`, pas avant.

**Est-ce que `triage` est toujours d'actualité maintenant qu'il existe un flux `to-spec` → `to-tickets` → `implement`  ?**

Seulement si vous avez du travail entrant. `triage` est antérieur à cette colonne vertébrale et fait un travail différent : c'est la voie pour les rapports déposés par d'autres personnes. Si tout ce qui se trouve dans votre tracker est le résultat de votre propre planification, vous l'ouvrirez rarement. Si vous maintenez quelque chose de public ou si votre équipe vous signale des bugs, c'est la porte d'entrée. L'utilisation principale concerne les dépôts open source prenant en charge les problèmes de contributeurs externes.

**L'agent a essayé de postuler `ready-for-agent` et `gh` a déclaré que l'étiquette n'existait pas.**

Bogue ouvert connu ([#616](https://github.com/mattpocock/skills/issues/616)). `setup-matt-pocock-skills` écrit le vocabulaire des étiquettes dans `docs/agents/triage-labels.md`, mais ne crée pas les étiquettes dans votre tracker. Créez vous-même les cinq étiquettes d'état et les deux étiquettes de catégorie, une fois, avec `gh label create` ou l'interface utilisateur du tracker, et cela s'arrête. Il existe une branche de correctif communautaire liée au problème qui n'a pas été fusionnée.

**Cinq états ne suffisent pas : qu'en est-il du blocage, du report ou de la mise en œuvre ?**

Il s’agit de la lacune la plus souvent signalée, sous trois formes : un ticket entièrement spécifié mais bloqué par un autre ([#139](https://github.com/mattpocock/skills/issues/139)), un travail planifié dont le déclencheur futur n’est pas encore arrivé ([#297](https://github.com/mattpocock/skills/issues/297)) et un état terminal « mis en œuvre, en attente de vérification ». Sans ce dernier, un exécuteur AFK peut remettre en file d’attente des tickets terminés. Aucun de ces états n’est fourni aujourd’hui. La solution courante consiste à ajouter une étiquette propre au dépôt à côté de la catégorie. Certaines variantes communautaires ajoutent aussi `needs-slicing`, `tracking` et des étiquettes d’effort, mais cela ne fait pas partie du skill officiel.

**En quoi est-ce différent de `/diagnosing-bugs` ?**

La vérification reste volontairement superficielle : elle répond à « est-ce réel et où cela se situe-t-il approximativement ? », sans rechercher la cause profonde. Si le bug ne se reproduit pas rapidement à partir des étapes fournies, choisissez `needs-info` ; utilisez [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) pour lancer immédiatement une enquête approfondie.

**Puis-je le signaler à l'ensemble de mon retard et le laisser fonctionner ?**

Vous pouvez demander, mais regardez ce qu’il lit. Le pass « montrer ce qui nécessite une attention » est une liste bon marché destinée à la *sélection* : vous en choisissez une, puis elle rassemble le [context](https://www.aihero.dev/ai-coding-dictionary/context) complet sur celui que vous avez choisi. Exécutez-le sur vingt numéros à la fois et un agent peut tranquillement se rabattre sur cette liste bon marché comme base de preuves, qui renvoie les corps des problèmes mais pas les commentaires. Un utilisateur a répondu exactement à ceci : trois problèmes comportaient déjà un commentaire disant "déjà corrigé, recommande la fermeture", et tous les trois ont reçu de nouveaux briefs d'agent à la place. Si vous souhaitez une transmission groupée, indiquez explicitement que les commentaires doivent être lus par numéro.

**Est-ce que cela fonctionne avec Linear ou avec autre chose que les problèmes GitHub ?**

Oui, le tracker est une configuration, pas une hypothèse codée en dur, et les gens l'exécutent sur Linear (via le `linear` CLI), GitLab et des fichiers Markdown simples sous `.scratch/`. Une division courante est Linear pour les problèmes et la planification, GitHub pour le code et les PR : les compétences qui disent « suivi des problèmes » sont mappées à Linear, les compétences qui disent « PR » sont mappées à GitHub. Sur le suivi Markdown local, il existe un bogue de modèle ouvert dans lequel le fichier généré peut contenir les critères d'acceptation deux fois, une fois au niveau supérieur et une fois dans le brief de l'agent ([#200](https://github.com/mattpocock/skills/issues/200)).

## Indicateurs de réussite

- Chaque élément touché se termine par exactement un rôle de catégorie et un rôle d'état - jamais zéro, jamais deux états en conflit.
- Il vous donne une recommandation avec raisonnement et arrêts, plutôt que de réétiqueter et de passer à autre chose.
- Le bug a été reproduit, ou le PR a été extrait et exécuté, avant que quoi que ce soit n'atteigne `ready-for-agent`.
- Les mémoires dans lesquels il écrit nomment les types et les comportements, et ne contiennent aucun chemin de fichier ni numéro de ligne.
- Une demande qui a été rejetée il y a six mois revient, et elle le dit et cite l'ancienne raison au lieu de la trier à nouveau.
- Chaque commentaire publié commence par `> *Ce commentaire a été généré par l’IA pendant le triage.*`

## Où il s’inscrit

`triage` est une **rampe d’accès**, pas une étape de la chaîne principale. Le flux principal part de votre idée — questions, spécification, tickets, mise en œuvre, revue — tandis que `triage` traite en parallèle les demandes venues de l’extérieur. Les deux voies se rejoignent sur un ticket étiqueté `ready-for-agent` et accompagné d’un brief, que [implement](https://aihero.dev/skills-implement) peut prendre comme un ticket issu de [to-tickets](https://aihero.dev/skills-to-tickets). Lorsqu’une demande doit être précisée, `triage` associe [grilling](https://aihero.dev/skills-grilling) et [domain-modeling](https://aihero.dev/skills-domain-modeling) afin d’enregistrer progressivement les décisions dans `CONTEXT.md` et les ADR. En cas de doute sur le bon parcours, [ask-matt](https://aihero.dev/skills-ask-matt) vous oriente.
