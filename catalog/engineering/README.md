# Ingénierie

Compétences que j'utilise quotidiennement pour le travail de code.

## Invoqués par l’utilisateur

Accessibles uniquement sur demande explicite. Dans Codex, cette règle est définie par `policy.allow_implicit_invocation: false` dans `agents/openai.yaml`.

- **[ask-matt](../../skills/ask-matt/SKILL.md)** — Indiquez votre situation pour trouver le skill ou le flux de travail adapté. Ce routeur couvre tous les skills invoqués par l’utilisateur.
- **[grill-with-docs](../../skills/grill-with-docs/SKILL.md)** — Menez une séance de questions approfondie tout en construisant le modèle de domaine du projet, en précisant la terminologie et en mettant à jour `CONTEXT.md` ainsi que les ADR.
- **[triage](../../skills/triage/SKILL.md)** — Faites progresser les tickets entrants dans une machine à états fondée sur des rôles de tri.
- **[improve-codebase-architecture](../../skills/improve-codebase-architecture/SKILL.md)** — Analysez une base de code, présentez les possibilités d’amélioration dans un rapport HTML visuel, puis approfondissez celle que vous choisissez.
- **[setup-matt-pocock-skills](../../skills/setup-matt-pocock-skills/SKILL.md)** — Configurez une fois par dépôt l’outil de suivi, les étiquettes de tri et l’organisation de la documentation du domaine nécessaires aux autres skills d’ingénierie.
- **[to-spec](../../skills/to-spec/SKILL.md)** — Transformez la conversation en cours en spécification et publiez-la dans le système de suivi des problèmes.
- **[to-tickets](../../skills/to-tickets/SKILL.md)** — Divisez un plan, une spécification ou une conversation en tickets, chacun déclarant ses dépendances sous forme de texte local ou de liens de blocage natifs.
- **[implement](../../skills/implement/SKILL.md)** — Réalisez le travail décrit par une spécification ou des tickets, pilotez `/tdd` selon les coutures convenues, puis terminez par `/code-review` avant le commit.
- **[wayfinder](../../skills/wayfinder/SKILL.md)** — Planifiez un effort trop vaste pour une seule session sous la forme d’une carte partagée de tickets de décision, puis résolvez-les un à un jusqu’à ce que le chemin vers la destination soit clair.

## Invocables par le modèle

Accessible au modèle ou à l'utilisateur (phrase de déclenchement riche pour que le modèle puisse les atteindre).

- **[prototype](../../skills/prototype/SKILL.md)** — Créez un prototype jetable pour répondre à une question de conception : un seul fichier HTML partageable pour l'état/la logique, ou plusieurs variantes d'interface utilisateur basculables.

- **[diagnosing-bugs](../../skills/diagnosing-bugs/SKILL.md)** — Boucle de diagnostic disciplinée pour les bugs difficiles et les régressions de performances : créez une boucle de rétroaction qui passe au rouge sur ce bug → minimiser → hypothèse → instrument → corriger → test de régression.
- **[research](../../skills/research/SKILL.md)** — Enquêtez sur une question par rapport à des sources primaires hautement fiables et capturez les résultats sous forme de fichier Markdown cité dans le dépôt, exécuté en tant qu'agent d'arrière-plan.
- **[tdd](../../skills/tdd/SKILL.md)** — Développement piloté par les tests avec une boucle de refactor rouge-vert. Crée des fonctionnalités ou corrige des bogues, une tranche verticale à la fois.
- **[domain-modeling](../../skills/domain-modeling/SKILL.md)** — Créez et affinez activement le modèle de domaine d’un projet : éprouvez les termes, testez-les avec des scénarios extrêmes et mettez à jour `CONTEXT.md` ainsi que les ADR au fil de la discussion.
- **[codebase-design](../../skills/codebase-design/SKILL.md)** — Discipline et vocabulaire partagés pour la conception de modules profonds : petites interfaces, coutures propres, testables via l'interface.
- **[code-review](../../skills/code-review/SKILL.md)** — Examine le diff depuis un point fixe selon deux axes indépendants : **Normes**, pour les conventions du dépôt et les mauvaises odeurs de Fowler, et **Spécification**, pour la fidélité au ticket ou au document d’origine. Les deux analyses s’exécutent dans des sous-agents distincts.
- **[resolving-merge-conflicts](../../skills/resolving-merge-conflicts/SKILL.md)** — Résolvez une fusion ou un rebasage en conflit, morceau par morceau, en remontant à l’intention de chaque côté, puis terminez l’opération sans utiliser `--abort`.
- **[wizard](../../skills/wizard/SKILL.md)** — Générez un assistant bash interactif qui guide un humain à travers les étapes que lui seul peut effectuer : provisionnement de l'infrastructure, configuration des informations d'identification ou des secrets CI, navigation dans un tableau de bord tiers inconnu ou exécution d'une migration ou d'un basculement ponctuel.
