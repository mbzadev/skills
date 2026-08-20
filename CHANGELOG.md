# Journal des modifications

## 1.3.0

### Minor Changes

- [`528f909`](https://github.com/mabzadev/skills/commit/528f90924e7631e4d2fffe554ee43a4c9deb979d) Thanks [@mabzadev](https://github.com/mabzadev)! - Importer la collection marketing : 49 skills reformulés en français (conversion, contenu & copywriting, SEO, payant, mesure, rétention, croissance, stratégie, ventes), le dossier `tools/` des guides d'intégration, la catégorie `catalog/marketing/` et 49 pages `docs/marketing/`.

## Non publié

### Migration vers Codex

- Remplacement de l’ancien conditionnement par un plugin Codex natif défini dans `.codex-plugin/plugin.json`.
- Suppression des fichiers, skills, hooks et métadonnées propres aux autres harnais.
- Adoption de `AGENTS.md` comme fichier unique d’instructions du dépôt.
- Conservation des règles d’invocation explicite dans les fichiers `agents/openai.yaml`.
- Passage des commandes d’installation à `mbzadev/skills` et mise à jour des scripts de version et de liaison locale.

## 1.2.3

### Modifications des correctifs

- [#779](https://github.com/mbzadev/skills/pull/779) [`efce423`](https://github.com/mbzadev/skills/commit/efce423018fc6468a3239621f1c1bcaacc723801) Merci [@mbzadev](https://github.com/mbzadev) ! - Faites `diagnosing-bugs` rédigez des secrets.

  - Ajoutez une section **Caviarder** à `SKILL.md`. La compétence permet à l'agent d'afficher les commandes, les sorties et les artefacts capturés ; la section fait de la rédaction le premier pas sur chacun - écrivez `<REDACTED>`, créez des boucles sur les variables d'environnement afin que les informations d'identification restent dans l'environnement et citez uniquement les lignes porteuses de signal d'un artefact capturé.
  - Le critère d'achèvement de la phase 1 disait "coller l'invocation et sa sortie". Il dit maintenant de le montrer expurgé, et la phase 1 demande à l'utilisateur un artefact capturé **expurgé**.
  - Notez dans `scripts/hitl-loop.template.sh` que `capture` imprime sa valeur sur le terminal, donc il prend des observations lors de la connexion reste un `step`.

- [#781](https://github.com/mbzadev/skills/pull/781) [`14bfbbd`](https://github.com/mbzadev/skills/commit/14bfbbd8654a8d2910299e1a004c19c1979687d8) Merci [@mbzadev](https://github.com/mbzadev) ! - Rend les instructions de répartition des sous-agents indépendantes du nom des outils dans `code-review`, `codebase-design` et `improve-codebase-architecture`.

- [#783](https://github.com/mbzadev/skills/pull/783) [`c0fd1e9`](https://github.com/mbzadev/skills/commit/c0fd1e973e040347d424e09934099f1bd6c2dee0) Merci [@mbzadev](https://github.com/mbzadev) ! - assistant : supprimer l'estimation du temps. Le modèle disparaît `TOTAL_MINUTES` et l'affichage du temps restant `stage` prend uniquement un nom et la progression est comptée par étapes.

## 1.2.2

### Modifications des correctifs

- [#766](https://github.com/mbzadev/skills/pull/766) [`4aaccb5`](https://github.com/mbzadev/skills/commit/4aaccb58d40559d7e3c59a029b2290ae5ba538de) Merci [@mbzadev](https://github.com/mbzadev) ! - Rendre `writing-for-agents` modèle-invocable à nouveau dans le Codex.

  - Déposez `policy.allow_implicit_invocation: false` de `agents/openai.yaml`. Le Codex a filtré la compétence hors de la liste des compétences visibles par le modèle, de sorte que sa description ne pouvait pas la déclencher – seule une mention explicite `$writing-for-agents` fonctionnait.
  - Mettez à jour les anciennes `interface.display_name` et `interface.short_description`, qui nommaient toujours l'ancienne `writing-great-skills` compétence.
  - Déplacez la compétence de la liste **Invoquée par l'utilisateur** vers la liste **Invoquée par le modèle** dans `README.md` et `skills/README.md`.

## 1.2.0

### Modifications mineures

- [#551](https://github.com/mbzadev/skills/pull/551) [`697d4ce`](https://github.com/mbzadev/skills/commit/697d4ce9742da558fd1ba6697c8e9775e2e302dd) Merci [@mbzadev](https://github.com/mbzadev) ! - Ajoute les métadonnées Codex à chaque skill.

  - Ajoutez un `agents/openai.yaml` à côté de chaque `SKILL.md` avec les métadonnées de l'interface utilisateur du Codex (`interface.display_name`, `interface.short_description`).
  - Marque chaque skill invoqué par l’utilisateur avec `policy.allow_implicit_invocation: false`, afin que l’appel explicite `$skill` reste possible sans déclenchement automatique.
  - Documente le modèle d’invocation dans `.agents/invocation.md`, `AGENTS.md` et les README des catégories promues.

- [#593](https://github.com/mbzadev/skills/pull/593) [`0f2bdbd`](https://github.com/mbzadev/skills/commit/0f2bdbdb06220d2df3718b8f0483157c6c8a8600) Merci [@mbzadev](https://github.com/mbzadev) ! - Promotion de **`to-questionnaire`** depuis `in-progress/` vers la catégorie **Productivité** ; il est désormais livré dans le plugin. Il transforme une décision que vous ne pouvez pas prendre seul en un questionnaire Markdown destiné à la personne qui détient la réponse, à remplir de manière asynchrone ou pendant une réunion.

  Son geste déterminant est qu'il vous interroge sur l'**envoi**, pas sur le sujet : une séance de grillage normale interroge le sujet, ce à quoi vous ne pouvez pas répondre ici, donc l'entretien demande uniquement à qui le questionnaire est destiné et ce dont vous avez besoin en retour, puis vise chaque question sur l'écart entre les deux.

Désormais promu : entrée dans le plugin, présence dans le README racine et dans le README Productivité sous **Invoqué par l’utilisateur**, page `docs/productivity/to-questionnaire.md` et route autonome dans `ask-mabza`. Le routeur le présente comme le complément de `/grill-me` : ce dernier vous interroge vous-même, tandis que le questionnaire s’adresse à une autre personne.

- [#680](https://github.com/mbzadev/skills/pull/680) [`b3376f8`](https://github.com/mbzadev/skills/commit/b3376f8d39848dd08572ec2667da4739a67c8c04) Merci [@mbzadev](https://github.com/mbzadev) ! - Promotion de **`wizard`** depuis `in-progress/` vers la catégorie **Engineering**, afin qu’il soit livré dans le plugin et puisse être invoqué par le modèle. Il génère un script bash interactif qui guide un humain dans une procédure manuelle — configuration d’un service tiers, migration ponctuelle ou transition d’un état A vers un état B — en ouvrant chaque URL, en indiquant les actions à effectuer, puis en enregistrant les valeurs dans `.env` et dans les secrets GitHub Actions.

  `template.sh` fournit déjà une expérience utilisateur soignée : progression et temps restant, confirmations, ouverture d’URL multiplateforme — y compris sous WSL —, saisie masquée des secrets, mise à jour idempotente de `.env`, écriture via `gh secret` et `gh variable` avec solution de secours, puis résumé final des étapes ignorées. Tout ce qui précède le marqueur `STAGES` forme une bibliothèque fixe qui n’est jamais modifiée manuellement ; le skill doit uniquement définir le périmètre de la procédure et créer ses **étapes**.

  Ingénierie plutôt que productivité : il lit `.env*`, `docker-compose*`, la configuration du framework et chaque `secrets.*`/`vars.*` référence dans `.github/workflows/` pour se définir, écrit les secrets CI et vérifie sa sortie avec `bash -n` et `shellcheck`.

  Comme il est invocable par le modèle, l’agent peut le sélectionner dès qu’il rencontre une étape que seul un humain peut réaliser, au lieu de transmettre des instructions numérotées dans le chat. La commande `/wizard` reste inchangée : l’invocation par le modèle ajoute simplement un mode de déclenchement. Sa description précise ce qu’il produit et les quatre situations qui le déclenchent — approvisionnement d’infrastructure, configuration d’identifiants ou de secrets CI, parcours d’un tableau de bord tiers inconnu, migration ou basculement ponctuel — ainsi que le cas où il ne faut pas l’utiliser : lorsque l’agent peut réaliser l’étape lui-même. La confirmation de la liste des étapes avant toute écriture sert désormais de proposition lorsque le skill est invoqué en cours de construction.

  Désormais câblé en tant que skill promu : entrée de plugin, README principal et d’ingénierie sous **Invoqué par le modèle**, page `docs/engineering/wizard.md` et route autonome dans `ask-mabza` pour les étapes que seul un humain peut suivre.

- [#763](https://github.com/mbzadev/skills/pull/763) [`77d207e`](https://github.com/mbzadev/skills/commit/77d207ef03219cc603e2832e1159cbdd1c91818e) Merci [@mbzadev](https://github.com/mbzadev) ! - Remodeler la compétence **`prototype`** autour de deux idées : la démo est **un seul fichier HTML partageable** et le prototype est **une source principale**.

  La branche logique produit désormais un fichier autonome (HTML/CSS/JS simple, pas de build, pas de serveur) au lieu d'une application de terminal — un non-développeur peut l'ouvrir par double-clic et le piloter dans son propre langage de domaine : un panneau d'état étiqueté, des boutons de lecture libre toujours disponibles et un ensemble de **procédures pas à pas guidées** à onglets, chacune étant un scénario avec les boutons ordonnés sur lesquels appuyer en dessous. Le module portable de logique pure s'intègre toujours dans le code réel ; le shell HTML est le jetable.

Jetable ne signifie plus supprimé. Plutôt que d'être supprimé une fois qu'il a répondu à sa question, le prototype est capturé comme preuve exécutable sur une branche jetable (`prototype/<name>`) hors de la branche principale, avec un pointeur de contexte laissé sur le problème d'implémentation — de sorte que la branche principale ne conserve que la décision validée tandis que l'exploration reste trouvable. La réponse (verdict + question) est toujours capturée durablement dans un problème/ADR/commit.

- [#751](https://github.com/mbzadev/skills/pull/751) [`355fa74`](https://github.com/mbzadev/skills/commit/355fa7420b418af838998f7ec4365ceda1c8dfcc) Merci [@mbzadev](https://github.com/mbzadev) ! - Ajoute **`wait-what`**, un correctif minimal contre la verbosité du modèle. Il reformule le dernier message avec le contexte manquant, un français technique clair et le vocabulaire de `CONTEXT.md`.

  Le mécanisme est le nom. Les compétences de concision échouent en grandissant – une compétence de 400 lignes laisse toujours le modèle verbeux – donc celui-ci est un seul mot principal précis et rien d'autre. Les noms qui décrivent la _sortie_ (`/tldr`, `/no-fluff`) font que le modèle coupe les mots et vous perd davantage ; nommer l'état de l'auditeur demande les deux moitiés à la fois, moins de mots **et** le contexte qui vous manquait. Il réutilise également les mots principaux déjà présents dans votre `AGENTS.md` global, donc la compétence `AGENTS.md` et chaque `CONTEXT.md` atteignent les mêmes jetons.

  Il répare un message ; ça n'empêche pas le suivant. Le remède contre le jargon est un langage partagé construit dès le départ avec `/grill-with-docs` ; c'est ce que vous recherchez lorsque vous n'en avez pas encore.

- [#763](https://github.com/mbzadev/skills/pull/763) [`77d207e`](https://github.com/mbzadev/skills/commit/77d207ef03219cc603e2832e1159cbdd1c91818e) Merci [@mbzadev](https://github.com/mbzadev) ! - Nommez l'unité `/wayfinder` un **ticket de décision** et brûlez les tickets de recherche avec des sous-agents.

  Les utilisateurs lisaient encore un ticket Wayfinder comme un ticket d’implémentation ordinaire, alors que Wayfinder utilise des **tickets de décision** : des questions dont la résolution produit une décision. La description du skill, `ask-mabza`, les README et la page de documentation introduisent désormais ce terme de façon cohérente. `CONTEXT.md` enregistre également **ticket de décision** comme terme du domaine, afin que les recommandations de vocabulaire ne contredisent plus son emploi volontaire.

  Les tickets de recherche ne sont plus garés pour une session lancée séparément. La recherche reste un véritable type de ticket : c'est un véritable bloqueur partagé sur lequel reposent les décisions en aval, et cette dépendance est exactement ce que les bords de blocage de la frontière visent à rendre. Ce qui change, c'est la façon dont le problème est résolu : parce que la recherche est AFK, la cartographie ne s'arrête pas et ne la lit pas. Après avoir créé les tickets, la session de création de graphiques déclenche un sous-agent `/research` pour chaque ticket de recherche afin de le graver en parallèle, capturant les résultats sur une branche jetable `research/<name>` avec un pointeur de contexte. Les tickets de recherche sont la seule exception à _un ticket par session_.

- [#763](https://github.com/mbzadev/skills/pull/763) [`77d207e`](https://github.com/mbzadev/skills/commit/77d207ef03219cc603e2832e1159cbdd1c91818e) Merci [@mbzadev](https://github.com/mbzadev) ! - **Rupture :** renommez **`writing-great-skills`** → **`writing-for-agents`**, restructurez-le et ajoutez un nouveau mot principal.

La référence couvre désormais tout document qu'un agent consomme - compétences, `AGENTS.md`, documents atteints par un pointeur - et pas seulement les compétences. `GLOSSARY.md` est fusionné dans `SKILL.md` (un traitement faisant autorité par terme ; les listes de synonymes `_Avoid_` et la liste autonome La définition de la prévisibilité a disparu ); les mécanismes de compétences uniquement (frontmatter, modèle invoqué par rapport à l'utilisateur, compétences de routeur, coupe d'invocation du fractionnement) sont divulgués à un nouveau `SKILL-MECHANICS.md`. La compétence est désormais **invoquée par le modèle** : elle se déclenche lors de la création ou de l'édition de compétences ou lors de la modification du pointeur de `AGENTS.md`. `ask-mabza` mis à jour. Réinstallez sous le nouveau nom ; l'ancien nom a disparu (pas d'alias).

La section d'élagage gagne du **cache**. La source unique de vérité s'étend désormais au-delà du document dans l'environnement — `package.json` les scripts, les fichiers de configuration, la disposition des répertoires, `--help` les résultats font eux-mêmes autorité, donc un document qui les reformule est un cache de recherche, ne gagnant sa charge que lorsque la recherche est coûteuse. L'objectif positif : mettre en cache ce que l'agent ne peut pas trouver en regardant (les conventions non écrites, la raison derrière un choix, les pièges qu'aucune configuration n'avoue) et laisser les recherches dans un seul fichier et une seule commande dans l'environnement, où elles ne peuvent pas devenir obsolètes.

- [#533](https://github.com/mbzadev/skills/pull/533) [`45afd80`](https://github.com/mbzadev/skills/commit/45afd8074a8b7de5fe073845d080fa9dd6c429fa) Merci [@mbzadev](https://github.com/mbzadev) ! - Ajoutez un filtre de portée YAGNI à l'étape Explorer de la compétence **`improve-codebase-architecture`**. Au lieu d'analyser l'ensemble du dépôt de manière uniforme, il s'étend désormais à l'endroit où le changement atterrit réellement : si vous nommez une direction, il le prend, sinon il lit les 20 derniers messages de validation pour orienter l'exploration vers des chemins activement développés. Une opportunité d'approfondissement du code que personne ne touche est une refactorisation que vous n'encaisserez jamais - l'effet de levier ne rapporte que là où vous continuez à modifier - de sorte que le rapport cesse de ranger les coins dormants du dépôt.

### Modifications des correctifs

- [#763](https://github.com/mbzadev/skills/pull/763) [`77d207e`](https://github.com/mbzadev/skills/commit/77d207ef03219cc603e2832e1159cbdd1c91818e) Merci [@mbzadev](https://github.com/mbzadev) ! — Affine `/ask-mabza` : le routeur couvre désormais les limites de phase, les deux erreurs fréquentes de Wayfinder et deux skills jusque-là absents.

  **Limites de phase.** Une **phase** est une partie du travail au sein d’une session — cadrage, mise en œuvre ou contrôle qualité — et sa limite est l’endroit où l’on décide quoi faire du contexte accumulé. L’ancienne section « Passage d’une session à l’autre » est remplacée par un arbre de décision présentant cinq options dans l’ordre : continuer, `/clear`, `/handoff`, sous-agent et `/compact`. Le raisonnement détaillé se trouve dans `PHASE-BOUNDARIES.md`.

  - **`/handoff` a été survendu.** Il se lit comme le pont général entre les fenêtres contextuelles. C'est étroit : vous n'en avez besoin que lorsque quelque chose doit voyager : un nouveau harnais, un nouveau répertoire, un collègue ou une tâche secondaire lancée à mi-phase. Ce qu'il achète, c'est la portabilité.
  - **`/compact` est la valeur par défaut, pas la première portée.** Il se trouve au bas de l'arbre, après les quatre questions moins chères ou plus précises au-dessus. Commencer par là produit une session qui est en toute confiance fausse, quel que soit le résumé aplati.
  - **Deux branches manquaient complètement.** **Continuer** est celui à exclure en premier — c'est le seul mouvement qui maintient la conversation comme source principale plutôt que comme résumé d'une seule — et un **sous-agent** gère tout ce qui est suffisamment précis pour exécuter AFK.

  La trappe de secours de Context Hygiène indique désormais `/compact` plutôt que `/handoff` (même harnais, même répertoire, à une limite – la clause de transfert ne s'applique pas), et le chiffre de la zone intelligente est mis à jour de ~ 120 000 à ~ 150 000 jetons.

  **Routage de Wayfinder.** Les deux erreurs les plus fréquentes avec ce flux de travail, qui est aussi le plus exigeant sur le plan cognitif :

  - **L’utiliser pour un travail trop ambitieux.** Wayfinder est plus lent et plus dense qu’une seule séance de questions. Il est réservé aux idées qui ne tiennent réellement pas dans une session ; une fonctionnalité bien cadrée relève plutôt de `/grill-with-docs`.
  - **Perdre le chemin à la sortie.** Lorsque la carte devient claire, Wayfinder transmet le travail au flux de travail principal via `/to-spec`, qui transforme les décisions liées en plan constructible. Il ne passe directement à `/implement` que si l’effort s’est révélé réellement modeste.

  **Routes manquantes.** `/grilling` et `/resolving-merge-conflicts` ont été ajoutés au routeur. `grill-me` et `grill-with-docs` sont désormais distingués selon que l’utilisateur travaille ou non dans un dépôt.

- [#502](https://github.com/mbzadev/skills/pull/502) [`44eed54`](https://github.com/mbzadev/skills/commit/44eed545186ffd0263e8004867750b80cfddd215) Merci [@mbzadev](https://github.com/mbzadev) ! — Rend `/setup-mabza-skills` plus convivial et aligne le suivi local sur les spécifications actuelles.

  - **Étiquettes de triage.** Elles ne sont configurées que si le skill `triage` est installé, au moyen d’une seule question recommandant de conserver les valeurs par défaut. Si `triage` n’est pas installé, la section et `docs/agents/triage-labels.md` sont omis.
  - **Pull requests externes.** Leur utilisation comme source de demandes n’est plus une question de configuration initiale. Les modèles GitHub et GitLab conservent une option désactivée par défaut, que l’utilisateur peut modifier plus tard dans `docs/agents/issue-tracker.md`.
  - **Documentation du domaine.** Un contexte unique est désormais utilisé par défaut ; le mode multicontexte n’est proposé que lorsque le dépôt présente les caractéristiques d’un monorepo.
  - **Tickets locaux.** Chaque ticket possède son propre fichier sous `.scratch/<feature>/issues/<NN>-<slug>.md` ; un fichier `tickets.md` combiné n’est plus utilisé. `/to-tickets` et le modèle de suivi local sont alignés, et la spécification se nomme `spec.md` plutôt que `PRD.md`. Les pages de documentation de `setup-mabza-skills` et `to-tickets` ont été resynchronisées.

- [#532](https://github.com/mbzadev/skills/pull/532) [`170ad48`](https://github.com/mbzadev/skills/commit/170ad48655825783d0193e850e31a9aac957bb95) Merci [@mbzadev](https://github.com/mbzadev) ! — Généralise **`grilling`**. Sa description et son corps ne se limitent plus à l’entretien autour d’un plan logiciel : « ce plan » devient « ceci », « valider le plan » devient « agir » et « explorer la base de code » devient « explorer l’environnement ». La technique ne change pas ; elle sert désormais à éprouver tout plan, toute décision ou toute idée.

- [#593](https://github.com/mbzadev/skills/pull/593) [`a4b2009`](https://github.com/mbzadev/skills/commit/a4b2009a1a3ac9575506c10b4c84f08f9bba7a38) Merci [@mbzadev](https://github.com/mbzadev) ! — Retravaille **`grilling`** pour poser les questions par tours. Le skill cartographie l’arbre de décision et interroge toute la **frontière** — les questions dont les prérequis sont déjà réglés — dans un même tour numéroté. Il recalcule ensuite la frontière à partir des réponses de l’utilisateur.

Mêmes 13 questions atterrissent en ~3 tours au lieu de 13. Les faits que l'environnement peut répondre sont envoyés aux sous-agents de référence, de sorte que la recherche ne bloque jamais la ronde : seules les questions en aval d'une exploration en cours l'attendent. La session se termine lorsque la frontière est vide.

Chaque question en rond est émise en une seule forme fixe — `❓ **Q1** - **<title>**`, puis le corps (prose ou choix multiples), puis la recommandation sur son propre `➡️` ligne. Un tour se lit comme une liste numérotée scannable avec chaque recommandation séparée visuellement de la question, de sorte que vous pouvez répondre par numéro au lieu de citer les questions en arrière.

`grill-me`, `grill-with-docs` et `triage` parcourent désormais la frontière un tour à la fois. L’étape de grill de `triage` et la métadonnée Codex `short_description` de `grilling` décrivent ce nouveau rythme. L’option globale permettant de revenir à une question à la fois dans `AGENTS.md` reste inchangée.

- [#752](https://github.com/mbzadev/skills/pull/752) [`c66bdee`](https://github.com/mbzadev/skills/commit/c66bdeeee002d81e3f8b21403c07f9a0d7bea6da) Merci [@mbzadev](https://github.com/mbzadev) ! - Retire six skills du dépôt. Ils restaient auparavant installables individuellement avec [skills.sh](https://skills.sh/mbzadev/skills).

Quatre compétences retraitées, chacune déjà absorbée par une compétence qui fait mieux le travail :

- **`ubiquitous-language`** → **`/domain-modeling`**, qui construit et maintient l'ensemble du modèle de domaine plutôt que de supprimer un glossaire d'une seule conversation.
- **`design-an-interface`** → **`/codebase-design`**. Rien n'est perdu : la technique du "concevez-le deux fois" - des sous-agents parallèles générant des conceptions radicalement différentes, d'Ousterhout - est intégrée à cette compétence sous le nom de `DESIGN-IT-TWICE.md`.
- **`qa`** → **`/triage`** et **`/to-tickets`**.
- **`request-refactorisation-plan`** → **`/to-spec`** et **`/improve-codebase-architecture`**.

Et deux qui n’étaient que les miens – liés à ma propre machine et jamais destinés à quelqu’un d’autre. Le `personal/` bucket les accompagne :

- **`edit-article`**
- **`obsidian-vault`**, qui a codé en dur un chemin vers mon propre coffre-fort Obsidian.

`skills/` reste comme un seau, maintenant vide. `skills/` est inchangé et est maintenant décrit pour ce qu'il est réellement : une chaîne bêta, publiée volontairement, installable une compétence à la fois via skills.sh.

- [#734](https://github.com/mbzadev/skills/pull/734) [`a2f9333`](https://github.com/mbzadev/skills/commit/a2f9333669ff53db762c87ecda5a15442060a3be) Merci [@mbzadev](https://github.com/mbzadev) ! - Terminez le `to-prd` → `to-spec` renommer : "spec" est désormais le seul terme dans le texte expédié.

  - **`to-spec`** ne s'ouvre plus avec "vous connaissez peut-être ce document en tant que PRD" — la parenthèse est supprimée de la compétence et de sa page de documentation. Le modèle de suivi des Markdown local supprime la même couverture.
  - **`code-review`** parle du problème/spécification d'origine plutôt que du problème/PRD, dans sa description du sujet, son résumé à deux axes et l'ordre de recherche de la source des spécifications. Les deux README ont été resynchronisés.
  - **Les modèles d’outil de suivi GitHub et GitLab** indiquent désormais "Les problèmes et les spécifications de ce dépôt sont en direct en tant que problèmes GitHub/GitLab" — ils avaient été laissés sur les "PRD" lorsque le modèle local a été mis à jour, de sorte que le terme obsolète s'est propagé dans chaque dépôt dans lequel ils ont été écrits.
  - **`docs/engineering/research.md`** pointait vers `https://aihero.dev/skills-to-prd`, une limace morte pour la compétence renommée ; il lie désormais `to-spec` comme le font les dix-neuf autres pages de documentation.

  Le CHANGELOG et les ensembles de modifications existants nomment toujours les PRD où ils documentent le changement de nom lui-même, ce qui est correct.

## 1.1.0

### Modifications mineures

- [#406](https://github.com/mbzadev/skills/pull/406) [`930a450`](https://github.com/mbzadev/skills/commit/930a450089f77a49af09001d955db8452a4b867d) Merci [@mbzadev](https://github.com/mbzadev) ! - Mettez à jour le routeur **`ask-mabza`** avec l'ensemble des compétences. Il cartographie désormais cinq compétences qui manquaient : **`tdd`** (tissé dans le flux principal alors que le moteur rouge-vert `implement` conduit), **`diagnosing-bugs`** (une nouvelle rampe d'accès "Quelque chose est cassé" — il n'y avait auparavant aucune route pour un bogue), **`domain-modeling`** et **`codebase-design`** (une nouvelle section « Vocabulaire en dessous ») et **`grilling`** (la primitive d'entretien partagé). `prototype` est développé de manière autonome et la description s'étend des « compétences invoquées par l'utilisateur » aux « compétences ». Une règle de maintenance est ajoutée à `AGENTS.md` de sorte que tout futur ajout/renommage/suppression de compétence ou modification de flux déclenche une nouvelle vérification `ask-mabza` , en plus de la règle de resynchronisation de la page de documentation existante.

- [#464](https://github.com/mbzadev/skills/pull/464) [`639df6e`](https://github.com/mbzadev/skills/commit/639df6e7386dfddc739b2aecdeff37a876f2483b) Merci [@mbzadev](https://github.com/mbzadev) ! — Promeut et renforce **`code-review`**. L’ancien skill bêta `review` devient `code-review`, rejoint la catégorie ingénierie, apparaît dans les README et reçoit la page `docs/engineering/code-review.md`. `/implement` et les autres documents pointent désormais vers lui. Le skill ajoute aussi une référence permanente aux principales mauvaises odeurs de Fowler sur l’axe **Normes**. Les règles du dépôt l’emportent toujours, et chaque odeur reste une heuristique à examiner plutôt qu’une violation certaine.

- [#464](https://github.com/mbzadev/skills/pull/464) [`639df6e`](https://github.com/mbzadev/skills/commit/639df6e7386dfddc739b2aecdeff37a876f2483b) Merci [@mbzadev](https://github.com/mbzadev) ! - Affûtage **`grilling`** sur deux fronts.

  **Une porte de confirmation.** L'agent n'appliquera pas le plan tant que vous n'aurez pas confirmé que la compréhension partagée a été atteinte, ce qui transforme le critère d'achèvement de « compréhension partagée » existant de la compétence en une porte d'arrêt explicite. Le `description` recrute également le mot principal **`grill`** pré-entraîné ("Grillez l'utilisateur sans relâche") pour affiner l'invocation, et la page de documentation est resynchronisée.

**Faits contre décisions.** Grilling divise désormais les _facts_ (recherchez-les – explorez la base de code) des _décisions_ (mettez chacun d'eux à l'humain et attendez sa réponse). L'ancienne ligne générale - "si une question peut être répondue en explorant la base de code, explorez plutôt la base de code" - a été écrite pour le cas d'un humain vivant, mais une fois qu'une autre compétence s'exécute dans un cadre de résolution du ticket, elle se lit comme une licence pour répondre également aux _décisions_ de manière autonome. Séparer les deux empêche un agent de grillades de foncer et de répondre à ses propres questions.

- [#463](https://github.com/mbzadev/skills/pull/463) [`af6d692`](https://github.com/mbzadev/skills/commit/af6d6922c3e2b5288eef155346cbe319e4ed3bd0) Merci [@mbzadev](https://github.com/mbzadev) ! - Ajoutez deux modes d'échec de pilotage adjacents à **`writing-great-skills`**, tous deux concernant la façon dont le langage que vous considérez comme « désactivé » dirige toujours l'agent. **La négation** — l'_éléphant_ — gouverne par l'interdiction : nommer ce qui _ne pas_ faire replace le comportement interdit dans son contexte et le rend _plus_ disponible, pas moins (_ne pensez pas à un éléphant_), donc le remède consiste à inciter le **positif**. **L'espace négatif** - le vide - est l'aveuglement face au pilotage effectué par ce que vous laissez *de côté* : chaque décision qu'une compétence refuse est déléguée aux priorités de l'agent plutôt que laissée neutre, donc le remède est de lire un brouillon pour ses silences et de décider délibérément de chaque omission (remplissez-le ou laissez-le ouvert comme une véritable **branche**). Conservés sous forme de deux entrées, pas une - ils comportent des diagnostics différents et des remèdes différents - chacun étant une entrée complète `GLOSSARY.md` plus une puce de mode de défaillance `SKILL.md` , correspondant à la façon dont tous les autres modes de défaillance sont transportés.

- [`850873c`](https://github.com/mbzadev/skills/commit/850873cd73d5f81826ebf512ad35d2b1e113001f) Merci [@mbzadev](https://github.com/mbzadev) ! - Faites en sorte que le modèle de compétence **`prototype`** soit invoqué, afin que l'agent puisse l'atteindre de manière autonome (et d'autres compétences le peuvent également). Sa description est réécrite autour du mot principal _prototype_ — code jetable qui répond à une question de conception — avec un déclencheur par branche (vérification d'état/logique ou exploration de l'interface utilisateur).

- [#409](https://github.com/mbzadev/skills/pull/409) [`0d74d01`](https://github.com/mbzadev/skills/commit/0d74d01cbc64ca27778a49b38599f70c534e76a0) Merci [@mbzadev](https://github.com/mbzadev) ! - Ajoutez la compétence **`research`** — une petite compétence invoquée par un modèle qui fait tourner un **agent d'arrière-plan** pour enquêter sur une question par rapport aux **sources primaires** (documents officiels, code source, spécifications, API propriétaires), puis laisse un seul fichier Markdown cité partout où le dépôt conserve de telles notes. Il s'agit d'un travail de lecture délégable : vous continuez à travailler pendant la lecture et récupérez un document à griller, à planifier ou à concevoir. Répertorié dans les README de niveau supérieur et d'ingénierie (invoqués par le modèle), ajouté à `.codex-plugin/plugin.json`, doté d'une page de documentation à l'adresse `docs/engineering/research.md` et acheminé en tant que autonome dans `ask-mabza`.

- [#469](https://github.com/mbzadev/skills/pull/469) [`a0329ba`](https://github.com/mbzadev/skills/commit/a0329ba95751f58566ed7ab484475917a68f1629) Merci [@mbzadev](https://github.com/mbzadev) ! — Allège le **processus** de `to-issues`, déplace les détails dans une section de **référence** et ajoute la prise en charge des **refactorisations larges**. Ces changements mécaniques, dont le rayon d’impact traverse toute la base de code, suivent une séquence **développement–contraction** : ajoutez la nouvelle forme, migrez les sites d’appel par lots, puis supprimez l’ancienne. Chaque lot doit garder la CI verte ; si cela est impossible, une étape finale d’intégration et de vérification porte cette garantie.

- [#464](https://github.com/mbzadev/skills/pull/464) [`386d4ff`](https://github.com/mbzadev/skills/commit/386d4ff719a7c420ad1454232d0436b01f1b8c17) Merci [@mbzadev](https://github.com/mbzadev) ! — Unification des compétences de planification. **`to-prd` devient `to-spec`** et « spec » devient le terme utilisé partout. **`to-plan` et `to-issues` fusionnent dans `to-tickets`, puis `to-issues` est supprimé.** `to-tickets` découpe un plan, une spécification ou une conversation en **tickets** — des tranches verticales, chacune déclarant ses dépendances bloquantes. Selon l’outil configuré par `/setup-mabza-skills`, ces dépendances sont soit écrites dans un fichier Markdown local, soit représentées par des liens de blocage natifs. Dans les deux cas, chaque ticket contient les informations nécessaires et l’outil détermine seulement si plusieurs tickets peuvent être traités en parallèle.

  La publication privilégie les **sous-tickets natifs** pour la relation parent → tranche et les **relations de blocage natives** lorsqu’elles sont disponibles. Les sections `## Parent` et `## Bloqué par` servent de solution de repli. Le modèle « Que construire » pointe vers le code d’un `/prototype` au lieu d’en recopier un extrait.

Le flux principal de `ask-mabza` achemine désormais `idea → /to-spec → /to-tickets → /implement`, et il existe des pages de documentation destinées aux humains aux adresses `docs/engineering/to-spec.md` et `docs/engineering/to-tickets.md`.

- [#464](https://github.com/mbzadev/skills/pull/464) [`0557d57`](https://github.com/mbzadev/skills/commit/0557d57579d9b3d39839fdaf8d4a6542b17539ce) Merci [@mbzadev](https://github.com/mbzadev) ! — Wayfinder est documenté comme une **rampe d’accès situationnelle**, et non comme le nouveau point d’entrée principal. La chaîne _idée → mise en œuvre_, conduite par les skills de clarification, reste le parcours par défaut. Le routeur **`ask-mabza`** décrit désormais les déclencheurs concrets de Wayfinder — nouveau projet ou fonctionnalité trop vaste pour une seule session — et `grill-me` ainsi que `grill-with-docs` y renvoient lorsque le travail dépasse cette limite.

- [#464](https://github.com/mbzadev/skills/pull/464) [`639df6e`](https://github.com/mbzadev/skills/commit/639df6e7386dfddc739b2aecdeff37a876f2483b) Merci [@mbzadev](https://github.com/mbzadev) ! - Diplômé et recadré **`wayfinder`** — la compétence nécessaire pour planifier une énorme partie du travail, que plusieurs sessions d'agent peuvent contenir. Il passe de `in-progress/` à `engineering/` (entrée du plugin, niveau supérieur + README d'ingénierie sous **Invoqué par l'utilisateur**, une page de documentation à `docs/engineering/wayfinder.md` et un itinéraire dans `ask-mabza`), atterrissant en tant que compétence mature. Le renommage et le recadrage qui l'ont amené là :

  - **`decision-mapping` est renommé en `wayfinder`**, invoqué comme `/wayfinder`. La « carte de décision » était un jargon et inexacte : un seul type de ticket constitue en réalité une décision. Le recadrage trace plutôt un itinéraire à travers un problème brumeux, donnant un cadre de mot principal cohérent – ​​**brouillard de guerre**, **frontière**, **la carte** – plutôt qu'un terme inventé superposé.
  - **Destination comme mot principal.** Wayfinding trouve le _way_ vers une destination ; il ne facture pas de frais pour le construire. Nommer la destination est le premier acte de cartographie - il fixe la portée et façonne chaque ticket - de sorte que la carte gagne un champ `## Destination` vers lequel chaque session s'oriente et qu'elle est triée avant qu'un ticket n'existe.
  - **Planifiez, ne faites pas.** La carte produit des **décisions, pas des livrables** ; c'est fait lorsqu'il n'y a plus rien à décider avant que quelqu'un ne construise la chose. Un effort peut remplacer cela dans ses notes.
  - **La carte est un index, pas un magasin.** Une décision se trouve exactement à un seul endroit – son ticket – de sorte que la carte ne contient que l'essentiel et les liens, sans jamais reformuler ; le fait de transformer le brouillard en un ticket efface la zone graduée afin que rien ne s'attarde à deux endroits.
  - **Collaboratif par défaut.** La carte se déplace d'un fichier Markdown local vers le suivi des problèmes du dépôt : un seul `wayfinder:map` numéro dont les tickets sont ses problèmes enfants — une URL partagée que l'équipe peut regarder. Les sessions chargent la carte en basse résolution et zooment sur les tickets à la demande. Wayfinder reste indépendant de l’outil de suivi (GitHub, GitLab, local-markdown) derrière un pointeur dans `docs/agents/issue-tracker.md`, et `setup-mabza-skills` amorce la section « Opérations de navigation ».
  - **Réclamation par affectation, pas par étiquette.** Une session revendique un ticket en l'attribuant au développeur de conduite — le cessionnaire _est_ la réclamation — libérant le vocabulaire de l'étiquette pour `wayfinder:<type>` seul.
  - **Blocage natif.** Le blocage préfère la relation de dépendance native de l’outil de suivi, qui restitue visuellement la frontière dans sa propre interface utilisateur de l’outil de suivi afin que l'humain voie ce qui est exploitable sans ouvrir la carte. Les modèles GitHub et GitLab précisent la recette native, avec une solution de repli de convention corporelle.
  - **Séparation du brouillard et du hors-périmètre.** Deux sections de carte clairement nommées — `## Pas encore spécifié` pour le brouillard qui reste dans le périmètre, et `## Hors périmètre` pour le travail situé au-delà de la destination — empêchent de confondre ce dernier avec une frontière exploitable.
  - **Un quatrième type de ticket, `task`.** Il représente un travail manuel qui bloque une décision — fournir un accès, déplacer des données ou s’inscrire à un service. C’est le seul type qui _agit_ au lieu de décider, et il n’est légitime que s’il débloque une décision.
  - **Classification des tickets HITL / AFK.** Chaque type de ticket est **HITL** — humain dans la boucle, pour les questions et les prototypes — ou **AFK** — agent seul, pour la recherche ; une tâche peut relever de l’un ou de l’autre. Un ticket HITL ne se résout que par un échange réel avec l’humain. Un agent qui répond à ses propres questions rompt donc, par définition, le mode HITL.
  - **Sortie anticipée sans brouillard restaurée.** Si la grille d'ouverture en largeur ne fait pas surface de brouillard, le voyage est suffisamment petit pour une session - il s'arrête donc et vous demande comment vous souhaitez procéder plutôt que de construire une carte dont personne n'a besoin.

### Modifications des correctifs

- [#464](https://github.com/mbzadev/skills/pull/464) [`639df6e`](https://github.com/mbzadev/skills/commit/639df6e7386dfddc739b2aecdeff37a876f2483b) Merci [@mbzadev](https://github.com/mbzadev) ! - Remodelez **`tdd`** en une compétence de référence uniquement et ajoutez un anti-modèle manquant.

  **Référence uniquement.** La boucle de refactorisation rouge → vert → est ancrée par les mots principaux que le modèle contient déjà, de sorte que le flux de travail étape par étape reformulait en grande partie la boucle. Suppression du flux de travail et de la liste de contrôle par cycle ; a intégré leur seule idée durable – tranches verticales / tranches verticales – dans la section Anti-modèles et une courte liste de règles de la boucle. Introduction de **couture** comme mot principal indiquant où vont les tests : testez uniquement selon des coutures préalablement convenues, confirmées avec l'utilisateur avant la rédaction de tout test. A également abandonné l'étape de refactorisation — TDD est maintenant rouge → vert ; le refactorisation appartient à l'étape de révision, donc la règle de refactorisation et `refactorisation.md` ont été supprimées (sa maison est `code-review`).

  **Tests tautologiques.** Ajout de l'anti-modèle de test tautologique : un test dont l'assertion est recalculée de la manière dont le code la calcule passe par construction et donne une confiance nulle - distinct de l'anti-modèle de couplage d'implémentation déjà couvert. Ajouté en tant que pair sur les mêmes sites : un principe de philosophie (les valeurs attendues doivent provenir d'une source indépendante de vérité), une porte de liste de contrôle et une paire d'exemples MAUVAIS/BON dans `tests.md`.

- [`e00eadb`](https://github.com/mbzadev/skills/commit/e00eadb4bb32c3d5a631ead1a5ed5d6a7c5f74e2) Merci [@mbzadev](https://github.com/mbzadev) ! - Extension de **`triage`** aux pull requests externes, traitées comme des tickets accompagnés de code et soumises aux mêmes rôles et à la même machine à états. Une option propre au dépôt active leur inclusion ; la découverte ne remonte que les PR externes. L’étape de reproduction réservée aux bogues devient une vérification générale de la demande, et le contrôle de redondance classe comme `wontfix` les demandes déjà mises en œuvre sans polluer la base `.out-of-scope/`. `setup-mabza-skills` reçoit l’option correspondante pour GitHub et GitLab.

- [#472](https://github.com/mbzadev/skills/pull/472) [`d869d45`](https://github.com/mbzadev/skills/commit/d869d45afc32beab1c2d1350f8de5e81589512cd) Merci [@mbzadev](https://github.com/mbzadev) ! - Correction **`wayfinder`** du codage en dur du chemin de la documentation du suivi des problèmes, qui brisait l'indirection sur laquelle s'appuie le reste de la suite.

  `to-issues`, `to-prd` et `triage` ne codent aucun chemin en dur : ils trouvent le système de suivi grâce au bloc `### Suivi des tickets` que `setup-mabza-skills` écrit dans `AGENTS.md`. Ce bloc pointe vers la documentation, quel que soit son emplacement. Wayfinder utilisait au contraire le chemin littéral `docs/agents/issue-tracker.md` ; dans un dépôt qui rangeait cette documentation ailleurs, il revenait silencieusement au suivi Markdown local, même si `AGENTS.md` déclarait clairement GitHub. Il résout désormais le document par le même pointeur et lit sa section « Opérations Wayfinder », ce qui préserve l’indirection dans toute la collection.

## 1.0.1

### Modifications des correctifs

- [`d20ee26`](https://github.com/mbzadev/skills/commit/d20ee2684e2a9442698ac3c1e0f2c5b68c4cf296) Merci [@mbzadev](https://github.com/mbzadev) ! - Réutilisez d'abord la compétence **`teach`**. Les leçons sont désormais construites à partir de **composants** réutilisables dans `./assets/` : feuilles de style, widgets de quiz, simulateurs, aides à diagrammes. La réutilisation est la valeur par défaut : l'agent lit `./assets/` avant de créer une leçon, construit à partir de ce qui est là et extrait tout ce qui est nouveau et réutilisable dans un composant plutôt que de l'intégrer.

## 1.0.0

### Changements majeurs

- [`47bde84`](https://github.com/mbzadev/skills/commit/47bde84da032afb2e5058f997f3bbca47d321dbd) Merci [@mbzadev](https://github.com/mbzadev) ! - Ajoutez la compétence **`ask-mabza`** — un routeur invoqué par l'utilisateur qui vous oriente vers la compétence ou le flux adapté à votre situation.

  **Rupture :** `ask-mabza` oriente vers les autres compétences invoquées par l’utilisateur dans ce dépôt ; celles-ci doivent donc être installées pour que les routes fonctionnent.

- [`47bde84`](https://github.com/mbzadev/skills/commit/47bde84da032afb2e5058f997f3bbca47d321dbd) Merci [@mbzadev](https://github.com/mbzadev) ! - Ajoutez les compétences de conception partagées et recâblez les compétences existantes dessus.

  - Nouvelle compétence **`codebase-design`** — le vocabulaire des modules profonds (module, interface, profondeur, couture, adaptateur) et les principes pour mettre beaucoup de comportement derrière une petite interface. La langue qui vivait auparavant dans `improve-codebase-architecture/LANGUAGE.md` vit désormais ici, généralisée pour être réutilisée dans toutes les compétences.
  - Nouvelle compétence **`domain-modeling`** — construisez et affinez activement le modèle de domaine d'un projet, testez les termes par rapport au glossaire et maintenez `CONTEXT.md` et les ADR à jour.
  - `improve-codebase-architecture` tire désormais son vocabulaire d'architecture de `/codebase-design` et son modèle de domaine de `/domain-modeling`.
  - `tdd` s'appuie désormais sur `/codebase-design` pour des conseils de conception d'interface — ses notes en ligne `deep-modules.md` / `interface-design.md` ont été supprimées au profit de la compétence partagée.
  - `grill-with-docs` construit désormais le modèle de domaine en ligne via `/domain-modeling`.

  **Rupture :** ces compétences dépendent désormais des nouvelles compétences `codebase-design` / `domain-modeling` , vous devez donc les installer également.

- [`47bde84`](https://github.com/mbzadev/skills/commit/47bde84da032afb2e5058f997f3bbca47d321dbd) Merci [@mbzadev](https://github.com/mbzadev) ! - Supprimez les compétences **`caveman`** et **`zoom-out`**.

  - `caveman` était une copie d'une autre compétence que je testais et n'était jamais censée être publique.
  - `zoom-out` est resté inutilisé dans la pratique, il a donc été supprimé du dépôt.

  **Rupture :** les deux compétences ont été supprimées.

- [`47bde84`](https://github.com/mbzadev/skills/commit/47bde84da032afb2e5058f997f3bbca47d321dbd) Merci [@mbzadev](https://github.com/mbzadev) ! - Renommez la compétence **`diagnose`** en **`diagnosing-bugs`**.

  **Rupture :** invoquez-le sous le nom `/diagnosing-bugs` — l'ancien nom `/diagnose` n'existe plus.

- [`47bde84`](https://github.com/mbzadev/skills/commit/47bde84da032afb2e5058f997f3bbca47d321dbd) Merci [@mbzadev](https://github.com/mbzadev) ! - Remplacez **`write-a-skill`** par **`writing-great-skills`**.

  - Supprimé `write-a-skill`.
  - Ajouté `writing-great-skills` (plus son `GLOSSARY.md`) — une référence pour bien rédiger et éditer des compétences : le vocabulaire et les principes qui rendent une compétence prévisible, traquant les non-opérations jusqu'au niveau de la phrase.
  - Exposé `grilling` en tant que compétence invoquée par le modèle - la boucle d'entretien réutilisable derrière `grill-me` et `grill-with-docs`.

  **Rupture :** `write-a-skill` a été supprimé ; utilisez plutôt `writing-great-skills` .

### Modifications mineures

- [`47bde84`](https://github.com/mbzadev/skills/commit/47bde84da032afb2e5058f997f3bbca47d321dbd) Merci [@mbzadev](https://github.com/mbzadev) ! - Ajoutez la compétence **`resolving-merge-conflicts`** — une boucle pour résoudre un conflit de fusion ou de rebase git en cours. Autonome, sans dépendance à d’autres compétences.

- [`47bde84`](https://github.com/mbzadev/skills/commit/47bde84da032afb2e5058f997f3bbca47d321dbd) Merci [@mbzadev](https://github.com/mbzadev) ! - Renommez la taxonomie des compétences de **Commandes/Compétences** en **Invoquée par l'utilisateur/Invoquée par le modèle** dans la documentation, et ajoutez `docs/invocation.md` définissant la répartition : les compétences invoquées par l'utilisateur ne sont accessibles que lorsque vous les saisissez et existent pour orchestrer ; les compétences invoquées par le modèle peuvent également être atteintes automatiquement lorsque la tâche correspond. Une compétence invoquée par un utilisateur peut invoquer des compétences invoquées par un modèle, mais jamais par un autre utilisateur.

### Modifications des correctifs

- [`47bde84`](https://github.com/mbzadev/skills/commit/47bde84da032afb2e5058f997f3bbca47d321dbd) Merci [@mbzadev](https://github.com/mbzadev) ! - Renforcez la compétence **`review`** : vérification rapide des références, règles à source unique et coupes sans opération.
