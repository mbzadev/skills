---
name: ask-matt
description: "Demandez quelle compétence ou quel flux correspond à votre situation. Un routeur sur les compétences de ce dépôt."
---

# Demander à Matt

Vous n’avez pas besoin de mémoriser tous les skills : décrivez simplement votre situation.

Un **flux** est un parcours à travers plusieurs skills. La plupart des tâches suivent un **flux principal**, rejoint par deux **rampes d’accès**. Les autres skills sont autonomes ou fournissent un vocabulaire partagé aux étapes supérieures.

## Le flux principal : idée → livraison

C’est l’itinéraire habituel : vous partez d’une idée et souhaitez la livrer.

1. **`/grill-with-docs`** — précisez l’idée par un entretien. Commencez ici lorsque vous **travaillez dans un dépôt** : le skill conserve ce qu’il apprend dans `CONTEXT.md` et les ADR. Sans dépôt, utilisez `/grill-me` — voir les outils autonomes. Les deux reposent sur `/grilling`, mais seul `grill-with-docs` laisse une trace durable.
2. **Branche — toutes les questions peuvent-elles être résolues par la discussion ?** Si une réponse doit être rendue concrète par du code — état, logique métier ou interface à observer — faites un détour par un prototype, avec **`/handoff`** pour sortir du fil principal puis y revenir :
   - lancez **`/handoff`**, puis ouvrez une nouvelle session à partir du fichier produit ;
   - **`/prototype`** pour répondre à la question avec un code jetable,
   - lancez de nouveau **`/handoff`** pour rapporter la réponse et liez-la depuis la discussion d’origine.
3. **Branche — s'agit-il d'une version multi-session ?**
   - **Oui** → lancez **`/to-spec`** pour transformer le fil en spécification, puis **`/to-tickets`** pour le découper en tranches verticales, chacune déclarant ses **dépendances**. En suivi local, chaque ticket devient un fichier sous `.scratch/<feature>/issues/` et les bloqueurs sont traités manuellement en premier. Dans un véritable outil de suivi, les dépendances deviennent des liens natifs et tout ticket débloqué peut être pris. Lancez ensuite **`/implement`** pour chaque ticket et utilisez **`/clear` entre deux tickets**. Chaque ticket étant autonome, le contexte précédent peut être abandonné.
   - **Non** → **`/implement`** ici même, dans la même fenêtre contextuelle.

   Dans les deux cas, **`/implement`** réalise le travail en pilotant **`/tdd`** — une tranche rouge-vert à la fois — puis exécute **`/code-review`**, qui examine le diff selon deux axes : Normes et Spécification. Utilisez **`/tdd`** seul pour développer un comportement concret en commençant par le test, sans spécification complète. Utilisez **`/code-review`** seul pour examiner une branche ou une PR par rapport à un point fixe.

### Hygiène du contexte

Conservez les étapes 1 à 3 dans **une même fenêtre de contexte** : ne compactez pas et n’effacez pas la conversation avant `/to-tickets`, afin que l’entretien, la spécification et les tickets partagent le même raisonnement. Chaque exécution de `/implement` peut ensuite repartir d’un contexte vierge avec son ticket.

La limite est la **[smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone)** : la portion de contexte — environ 150 000 jetons sur les modèles les plus avancés — dans laquelle le raisonnement reste fiable. Si la session s’en approche avant `/to-tickets`, utilisez `/compact` à la prochaine limite de phase au lieu de poursuivre avec un contexte dégradé.

## Rampes d'accès

Une situation de départ qui génère du travail, puis se fond dans le flux principal.

- **Les bugs et les demandes s’accumulent** → **`/triage`**. Il fait progresser les tickets entrants selon des rôles de tri et produit des tickets prêts pour l’agent, que **`/implement`** pourra traiter ensuite.

Le tri concerne uniquement les problèmes **que vous n'avez pas créés** : rapports de bogues, demandes de fonctionnalités entrantes, tout ce qui arrive brut. Les tickets produits par `/to-tickets`  sont déjà prêts pour l'agent, alors **ne les triez pas**.

- **Quelque chose est cassé** → **`/diagnosing-bugs`**. Utilisez-le pour les cas difficiles : bug qui résiste à une première inspection, panne intermittente ou régression apparue entre deux états connus. Le skill ne formule pas d’hypothèse avant d’avoir une **boucle de rétroaction courte** — une commande qui échoue déjà sur *ce* bug —, puis termine par un test de régression. S’il révèle l’absence d’une bonne couture pour tester le comportement, confiez l’amélioration structurelle à **`/improve-codebase-architecture`**.

- **Un effort vaste et encore flou — nouveau projet ou fonctionnalité trop grande pour une seule session** → **`/wayfinder`**. Lorsque le chemin vers la destination n’est pas encore visible, il construit dans l’outil de suivi une **carte partagée** de **tickets de décision**, puis les résout un à un. Il produit des **décisions, pas des livrables**, jusqu’à dissiper l’incertitude. Utilisez `/grill-with-docs` lorsque l’idée tient dans une seule session ; réservez Wayfinder aux efforts qui dépassent réellement cette limite.

  Lorsque la carte est résolue, **elle transmet le travail au lieu de le construire** : revenez au flux principal avec **`/to-spec`**, qui rassemble les décisions liées en une spécification exploitable, puis lancez `/to-tickets` et `/implement`. Ne passez directement à `/implement` que si l’effort s’est finalement révélé très limité.

## Santé de la base de code

Cette section concerne l’entretien, pas les nouvelles fonctionnalités.

- **`/improve-codebase-architecture`** — exécutez-le régulièrement pour maintenir une base de code claire pour les agents. Il fait émerger des **possibilités d’approfondissement** ; en choisir une produit une idée à réintroduire dans le flux principal avec `/grill-with-docs`. Ce skill trouve les candidats, tandis que **`/codebase-design`** fournit le vocabulaire pour concevoir la solution retenue.

## Vocabulaire en dessous

Deux références invocables par le modèle se placent *sous* les autres skills et constituent chacune la source de vérité de leur vocabulaire. Appelez-les directement lorsque le problème porte sur les **mots** plutôt que sur le processus, ou laissez les skills précédents les sélectionner.

- **`/domain-modeling`** — affiner le langage *domaine* du projet : contester un terme flou, résoudre un mot surchargé ("compte" effectuant trois tâches), enregistrer une décision difficile à annuler en tant qu'ADR. C'est la discipline active `/grill-with-docs` qui s'efforce de garder `CONTEXT.md` un glossaire propre.
- **`/codebase-design`** — le vocabulaire du module profond (module, interface, profondeur, couture, adaptateur, levier, localité) pour concevoir la *forme* d'un module : beaucoup de comportement derrière une petite interface à une couture propre. `/tdd` et `/improve-codebase-architecture` le parlent tous les deux.

## Limites de phase

Une **phase** est une partie du travail au sein d'une session : le grillage, la mise en œuvre, l'assurance qualité. À la **limite** entre deux d'entre eux, vous avez cinq options, et choisir entre elles est la décision la plus floue de toute cette carte :

- **Continuer** — restez dans la session actuelle ; cette option ne coûte rien et ne perd aucun contexte.
- **`/clear`** — videz la fenêtre, alors que rien ici n'a d'importance pour la suite.
- **`/handoff`** — écrivez un fichier Markdown portable. Étroit : uniquement pour un **nouveau harnais**, un **nouveau répertoire**, un **collègue** ou une tâche secondaire **à mi-phase**. Ce qu'il achète, c'est la portabilité.
- **Sous-agent** — envoie une tâche à portée étroite vers sa propre fenêtre et récupère un rapport.
- **`/compact`** — compressez le contexte et poursuivez dans une nouvelle session. C’est l’option **par défaut** au bout de l’arbre de décision, pas le premier réflexe.

Lisez [PHASE-BOUNDARIES.md](PHASE-BOUNDARIES.md) pour l'arbre ordonné - les cinq questions, le raisonnement derrière chaque branche et pourquoi le coût de la source principale fait de **Continuer** celui à exclure en premier. Prenez la décision **à** une limite ; à mi-phase, continuez ou divisez le reste en sous-agents.

## Outils autonomes, hors du flux principal

- **`/grill-me`** — le même entretien approfondi que `/grill-with-docs`, mais **sans état** : il ne crée aucun fichier ni `CONTEXT.md`. Utilisez-le lorsque vous ne travaillez pas dans un dépôt — pour préciser un plan, une conception ou un texte. Dans un dépôt, préférez `/grill-with-docs`, qui conserve une trace écrite.
- **`/grilling`** — la primitive d'entretien elle-même : les tournées, la frontière, les faits sont le travail de l'agent et les décisions vous appartiennent. `/grill-me` et `/grill-with-docs` sont les deux voies d'entrée nommées, et `/triage`, `/wayfinder` et `/improve-codebase-architecture` l'exécutent tous en interne. Accédez-y directement uniquement lorsque vous souhaitez que l'entretien soit sans emballage.
- **`/resolving-merge-conflicts`** — effectuez une fusion en cours ou rebasez un conflit morceau par morceau, en résolvant par **intention** tracée à la source principale de chaque côté plutôt qu'en sélectionnant des lignes, puis terminez l'opération. Il ne fonctionne jamais `--abort`. Autonome et hors de chaque flux : utilisez-le lorsque vous êtes déjà au milieu d'un conflit.
- **`/prototype`** — un petit programme jetable qui répond à une question de conception : ce modèle d’état semble-t-il correct, ou à quoi devrait ressembler cette interface ? Le caractère jetable contraint la manière d’écrire le code, sans obliger à supprimer le résultat : la réponse rejoint le code réel et le prototype reste disponible comme **source principale** sur une branche `prototype/<name>` séparée de la branche principale, liée depuis le ticket de mise en œuvre. C’est un détour par rapport à l’étape 2 du flux principal, à utiliser dès qu’une question de conception résiste à une discussion sur papier.
- **`/research`** — déléguez les tâches de lecture à un **agent d'arrière-plan** : il étudie une question par rapport aux **sources primaires**, puis laisse un fichier Markdown cité dans le dépôt. Continuez à travailler pendant la lecture. Le fichier qu'il produit est quelque chose à intégrer *dans* le flux principal à `/grill-with-docs`  : la recherche nourrit la réflexion, elle ne la remplace pas.
- **`/to-questionnaire`** — lorsque la chose qui vous bloque n'est pas dans votre tête ou dans la base de code mais dans celle de **quelqu'un d'autre**, cela lui écrit un questionnaire à remplir. C'est l'inverse de `/grill-me` : au lieu de vous interroger sur le sujet, il vous interroge sur l'**envoi** — à qui il va, ce dont vous avez besoin en retour – et dirige les questions vers l’écart. Ce qui revient est important pour `/grill-with-docs` ou `/to-spec`.
- **`/wizard`** — pour les étapes que seul un **humain** peut effectuer : provisionner l'infrastructure, configurer les informations d'identification ou les secrets CI, cliquer sur un tableau de bord tiers inconnu, exécuter une migration ou un basculement ponctuel. Il génère un script bash interactif qui ouvre chaque URL, capture chaque valeur et l'écrit dans les secrets `.env` et GitHub — de sorte que la procédure cesse d'être quelque chose que vous réexpliquez à un agent à chaque fois. Invoqué par le modèle, de sorte que l'agent l'atteint au moment où il heurte un mur, vous seul pouvez passer. Si l’agent pouvait le faire lui-même, il le devrait ; c’est là qu’un humain est véritablement au courant.
- **`/wait-what`** — le correctif pour un message qui n’est pas clair. Utilisez-le au milieu d’une conversation : l’agent reformule son propos en français clair, ajoute le contexte manquant et reprend le vocabulaire de `CONTEXT.md`. Il agit après coup ; `/grill-with-docs` prévient le problème en établissant un langage partagé dès le départ.
- **`/teach`** — apprenez un concept sur plusieurs sessions, en utilisant le répertoire actuel comme espace de travail avec état.
- **`/writing-for-agents`** — référence pour la rédaction des documents que les agents consomment : compétences, AGENTS.md, documents pointés.

## Précondition

**`/setup-matt-pocock-skills`** — exécutez-le avant le premier flux d’ingénierie afin de configurer l’outil de suivi, les étiquettes de tri et l’organisation de la documentation attendus par les autres skills. Les outils de suivi personnalisés sont également pris en charge.
