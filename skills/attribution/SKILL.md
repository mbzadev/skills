---
name: attribution
description: "Sachez ce qui déclenche vos conversions et votre revenu : modèle d'attribution, multi-touch, MMM, incrementality, réconciliation de chiffres contradictoires, ou instrumentation first-party. À utiliser lorsque l'utilisateur dit « attribution », « first-touch vs last-touch », « mes dashboards se contredisent », « dark social », ou veut recoudre ses conversions à leur source. Pour les UTM et le tracking, voyez analytics ; pour les pixels, ads."
---

# Attribution marketing

Vous aidez les utilisateurs à répondre à la question la plus dure du marketing : **laquelle de mes actions a réellement causé cette conversion et ce revenu ?** L'attribution est là où les marketeurs perdent le plus d'argent — au profit de canaux qui paraissent excellents dans un dashboard et médiocres dans un autre, du « direct » et de la recherche de marque qui masquent la vraie source, et de modèles qui habillent une opinion en fait établi.

Ce skill repose sur deux piliers. Identifiez celui dont l'utilisateur a besoin avant d'entrer dans le sujet :

- **(A) Interprétation** — choisir un modèle d'attribution, sélectionner une approche de mesure et *réconcilier les chiffres contradictoires* que remontent les outils. Cela concerne tout le monde, y compris sans aucune équipe d'ingénierie.
- **(B) Maîtriser son attribution (first-party)** — instrumenter et recoudre l'attribution *soi-même* quand on contrôle le site ou l'app. C'est la voie « construction ». Utilisez-la quand l'utilisateur dit « je veux tracker ça moi-même » ou quand il gère une conversion qui se produit sur un domaine qui ne lui appartient pas.

La plupart des demandes commencent par (A). Ne basculez vers (B) que lorsque l'utilisateur contrôle la surface et veut construire.

## Vérifiez d'abord le contexte product-marketing

Avant toute recommandation, cherchez un contexte product-marketing dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes), lisez-le. Le type de business, la longueur du cycle de vente et la conversion principale conditionnent presque tous les conseils qui suivent.

## Périmètre — ce que ce skill ne couvre PAS

Énoncez ces frontières d'emblée pour ne pas reconstruire les skills voisins :

- **Le tracking d'événements général, les tracking plans, les UTM, GA4/GTM** → `analytics`. L'attribution *suppose que le tracking existe*. La ligne de partage : analytics = « quels événements et comment les déclencher » ; attribution = « comment les touchpoints se rattachent aux conversions et survivent jusqu'au revenu ».
- **Les pixels des plateformes publicitaires, le CAPI, le conversion tracking server-side** → `ads` (`references/conversion-tracking.md`). L'attribution consomme les chiffres déclarés par les plateformes et corrige leur biais ; elle n'installe pas les pixels.
- **Les étapes de pipeline, le cycle de vie des leads, les dashboards de revenu CRM** → `revops`. L'attribution alimente le pipeline en données ; elle n'en définit pas les étapes.
- **Apparaître dans / mesurer la recherche IA** → `ai-seo`. L'attribution ne fait que nommer le trafic IA comme angle mort.

---

## Pilier A — Interprétation

### 1. Ce que l'attribution peut et ne peut pas vous dire

Cadrez les attentes avant de toucher au moindre chiffre :

- **L'attribution est directionnelle, pas vérité.** C'est un modèle de causalité bâti sur des données incomplètes (cookies qui expirent, sessions fragmentées, touchpoints offline invisibles, gens qui se renseignent sur un appareil et achètent sur un autre). Traitez-la comme un indice solide, jamais comme un verdict.
- **Chaque modèle est une opinion.** Le first-touch donne tout le crédit à la première exposition ; le last-touch, au clic final. Les deux se trompent en sens inverse. Choisir un modèle, c'est choisir l'histoire à laquelle on croit — dites-le explicitement.
- **Le gap d'attribution est normal.** La somme des conversions déclarées par les canaux dépasse presque toujours les conversions réelles, parce que chaque plateforme revendique le même achat. Votre travail est de réduire et d'expliquer ce gap, pas de faire tomber les chiffres juste. Ils ne tomberont jamais juste.

Quand un utilisateur exige un chiffre unique et vrai, recadrez : « Nous pouvons obtenir un chiffre *défendable et cohérent*, plus une lecture des canaux à la hausse. Une vérité objective unique n'existe pas — voici pourquoi, et voici ce qu'on utilise pour décider quand même. »

### 2. Les modèles d'attribution

Les six modèles standards — ou sept avec le data-driven — et la manière dont chacun ment :

| Modèle | Règle de crédit | Idéal pour | Comment il ment |
|---|---|---|---|
| **First-touch** | 100 % au premier touchpoint connu | Valorisation top-of-funnel / demand-gen ; cycles courts | Ignore tout ce qui a clos la vente ; sur-crédite les canaux de notoriété |
| **Last-touch** | 100 % au dernier touchpoint avant conversion | Direct-response, e-commerce rapide | Sur-crédite le bottom-funnel + la recherche de marque/le direct ; ignore ce qui a créé la demande |
| **Last non-direct** | 100 % au dernier touchpoint, en sautant le « direct » | Correctif bon marché à la pollution du direct | Toujours mono-touch ; déplace simplement l'angle mort |
| **Linéaire** | Crédit égal à chaque touchpoint | Parcours longs et multi-touch où chaque étape compte | Traite une visite anodine comme une démo ; flatte les canaux à haute fréquence |
| **Time-decay** | Plus de crédit aux touchpoints proches de la conversion | Cycles longs où la récence compte | Sous-crédite le haut du funnel ; reste une hypothèse, pas une mesure |
| **Position-based (en U)** | 40 % au premier, 40 % au dernier, 20 % au milieu | B2B avec des moments clairs de « création » + « closing » | Le découpage 40/40/20 est arbitraire ; les touchpoints intermédiaires sont lésés |
| **Data-driven (algorithmique/Shapley)** | Crédit issu d'une contribution marginale modélisée | Comptes à fort volume avec suffisamment de conversions | Une boîte noire ; exige du volume ; aveugle aux touchpoints offline/dark qu'on ne lui a pas donnés |

**Règles pratiques :**

- Ne présentez jamais un modèle isolé pour un cycle de vente long. Montrez **first-touch et last-touch côte à côte** — la vérité vit entre les deux, et l'écart entre eux *est* l'insight.
- Le data-driven exige du volume (Google Ads l'a longtemps réservé aux comptes dépassant ~3 000 interactions publicitaires et ~300 conversions sur 30 jours ; ces minimums ont depuis été assouplis et la DDA est devenue le défaut, mais à faible volume, c'est du bruit déguisé en science). À faible volume, utilisez plutôt le position-based.
- Le modèle compte bien moins que la **cohérence** et qu'un contrôle hors-modèle (Pilier A §4, le déclaré).

Pour les mathématiques des modèles, des exemples commentés d'un même parcours scoré de six façons et Shapley expliqué simplement, consultez `references/attribution-models.md`.

### 3. Les trois paradigmes de mesure

Les modèles répartissent le crédit *au sein* de vos données tracées. Les paradigmes sont la façon d'approcher la *causalité* — de plus en plus rigoureux, de plus en plus coûteux :

| Paradigme | Ce que c'est | À quoi il répond | Exige | Piège |
|---|---|---|---|---|
| **MTA** (multi-touch attribution) | Recoudre les touchpoints au niveau utilisateur, appliquer un modèle | « Quels touchpoints apparaissent sur les parcours qui convertissent ? » | Un tracking user-level propre et cross-device | La perte de cookies et la privacy ont éviscéré les données user-level ; il sous-mesure en silence |
| **MMM** (media/marketing mix modeling) | Régression top-down du spend versus les résultats dans le temps | « Quelle est la contribution agrégée de chaque canal, y compris offline/brand ? » | 2 à 3 ans de données hebdomadaires, de la variation de budget | Corrélationnel ; lent à réagir ; a besoin de vraies variations de budget pour apprendre |
| **Incrementality** (geo holdout, PSA, ghost ads, on/off) | Expérience contrôlée : exposés versus privés | « Ce canal a-t-il *causé* un lift que je n'aurais pas eu autrement ? » | La capacité de retirer l'exposition ; assez de volume pour la significance | L'étalon-or, mais on ne peut tester que quelques choses à la fois |

**Comment choisir :** petit budget / cycle court → de bons UTM + du last-non-direct + une enquête déclarative battent n'importe quel modèle sophistiqué. Budget intermédiaire, plusieurs canaux → MTA au quotidien + des tests d'incrementality périodiques sur les plus grosses lignes de dépense. Gros budget, dépenses offline + brand → MMM pour le portefeuille + incrementality pour valider les coefficients du MMM. L'incrementality est l'arbitre chaque fois que deux canaux revendiquent les mêmes conversions.

Le tableau de décision par budget × cycle de vente × nombre de canaux, et la façon de *lire* un test geo-holdout / PSA (pas un cours de stats), sont dans `references/measurement-paradigms.md`.

### 4. L'attribution déclarative (self-reported)

Le signal le plus sous-utilisé, et souvent le plus honnête pour les cycles longs et le dark social. Une enquête post-conversion « Comment avez-vous connu notre entreprise ? » capte ce que le tracking ne peut structurellement pas voir : podcasts, bouche-à-oreille, communautés Slack, le tweet d'un fondateur, « un ami m'en a parlé ».

- **Quand elle bat le tracking :** cycles de réflexion longs, fort bouche-à-oreille, stratégie brand/communauté, ou dark social intense (voir §5). Si une grande part de vos parcours est classée « direct », vous avez un trou en forme d'enquête déclarative.
- **Posez la question au moment de la conversion** (inscription, premier achat, demande de démo) — le souvenir est au plus net, avant qu'il ne s'estompe.
- **La formulation :** une question ouverte (« Comment avez-vous entendu parler de nous pour la première fois ? ») capte le dark social ; une liste de choix courte est plus facile à quantifier mais biaise la réponse. Bonne pratique : liste de vos canaux connus **plus un champ libre « autre / dites-nous en plus »**.
- **Traitez-la comme un input de triangulation, pas comme un évangile** — la mémoire est floue et les gens créditent le touchpoint *mémorable*, pas le premier. C'est le contrôle hors-modèle qui garde vos modèles tracés honnêtes.
- Côté construction, c'est un champ de formulaire écrit dans votre CRM/analytics comme propriété de la personne — voir Pilier B et `references/first-party-tracking.md`.

### 5. Réconcilier les sources contradictoires

La demande derrière la plupart des travaux d'attribution : **« Google dit 50, Meta dit 40, GA dit 60, mon CRM dit 35 — qui a raison ? »** Personne. Voici le cadre.

**Pourquoi chaque source ment systématiquement :**

| Source | Biais en faveur de | Parce que |
|---|---|---|
| **Plateformes publicitaires** (Google/Meta/LinkedIn) | Se sur-compte *elle-même* | Revendique les conversions view-through + clic dans sa propre fenêtre ; chaque plateforme compte le même achat ; motivée à paraître bonne |
| **GA / web analytics** | Dernier clic non direct | Perd le cross-device, perd les utilisateurs qui bloquent les cookies, déverse l'inconnu dans le direct |
| **CRM** | Ce que le commercial a tapé / ce que le formulaire a capturé | Saisie humaine, écrasements de lead source, deals offline sans trace digitale |
| **Enquête déclarative** | Le touchpoint *mémorable* | Biais de rappel ; sous-compte les touchpoints ennuyeux mais réels comme le retargeting |

**Comment trianguler :**

1. **Choisissez une seule source de vérité pour le nombre de conversions** — généralement votre CRM ou votre backend (le système où l'argent est réel). Tout le reste explique *d'où elles viennent* ; rien d'autre n'a le droit de redéfinir *combien il y en a*.
2. **N'additionnez jamais entre plateformes.** Si Google et Meta revendiquent chacun une conversion, vous avez une conversion avec deux prétendants, pas deux conversions. Dédupliquez contre le total de la source de vérité.
3. **Lisez l'accord directionnel, pas la correspondance absolue.** Si toutes les sources disent que le search payant monte et que l'organique descend ce trimestre, cette tendance est fiable même si aucun chiffre ne concorde.
4. **Utilisez le déclaré comme arbitre** quand les plateformes se disputent les mêmes conversions, et **l'incrementality** quand les enjeux justifient un test.
5. **Anticipez et chiffrez le gap.** Présentez « les plateformes revendiquent N ; nous pouvons en vérifier M ; le delta, c'est la sur-revendication + le view-through + le non-tracé — voici notre meilleure allocation ».

Le livrable est une allocation honnête avec des niveaux de confiance, pas une fausse réconciliation au dixième près.

### 6. Les angles morts

Là où les conversions se cachent, faisant paraître faibles de vrais canaux :

- **Direct** — le tiroir à tout faire. Marques-pages et URLs tapées, oui, mais aussi les referrers retirés, les passages app-vers-web, le dark social, et tout touchpoint que votre tracking a perdu. Une part importante de direct est un problème de *mesure*, pas un canal.
- **Recherche de marque** — des gens qui vous ont découverts ailleurs et ont tapé votre nom sur Google. Le last-touch offre le crédit au search de marque payant/organique ; le vrai moteur, c'est ce qui les a poussés à chercher. Segmente branded versus non-branded, sinon vous définancez le haut du funnel.
- **Dark social** — le partage qui ne transporte pas de referrer : DMs, Slack/Discord, podcasts, newsletters, captures d'écran. Structurellement invisible au tracking ; le déclaré est le seul moyen de le voir (§4).
- **Trafic IA** — les assistants et la recherche IA influencent de plus en plus les acheteurs, puis les renvoient via la recherche de marque ou le direct : le touchpoint IA est donc invisible dans l'analytics. Nommez-le et confiez l'approfondissement à `ai-seo`.

Le fil conducteur : **quand le « direct » et la recherche de marque dominent, votre haut de funnel fonctionne et votre attribution le cache.** Dites-le explicitement — c'est l'erreur de lecture la plus courante du marketing.

### 7. L'embranchement par type de business

Les défauts divergent nettement. Résumé ici ; playbooks complets dans `references/by-business-type.md`.

- **SaaS B2B (cycle long, avec vente assistée) :** les parcours s'étalent sur des semaines ou des mois et impliquent plusieurs personnes, donc les modèles mono-touch égarent gravement. Ancrez-vous sur le **CRM comme source de vérité**, utilisez **first-touch + position-based** côte à côte, appuyez-vous fort sur le **déclaré au moment de la démo/de l'inscription**, et traitez l'attribution **pipeline/revenu** (→ `revops`) comme le vrai tableau de score. Les touchpoints offline (événements, conversations commerciales) rendent la MTA la plus faible et le déclaré le plus fort ici.
- **E-commerce / DTC (cycle court, self-serve) :** parcours rapides, gros volume, dépenses concentrées en paid social + search. Ancrez-vous sur le **ROAS des plateformes mais méfiez-vous en** (inflation iOS/CAPI), validez avec le **MMM dès que le spend devient significatif** et l'**incrementality/geo-holdouts** sur vos plus gros canaux, et utilisez une **enquête post-achat** pour capter ce que les pixels ratent. Le last-touch est défendable pour des SKU à rotation rapide ; MMM + incrementality, c'est ce qui alloue le vrai budget.

---

## Pilier B — Maîtriser son attribution (first-party)

Utilisez ce pilier quand l'utilisateur **contrôle le site/l'app** et veut instrumenter l'attribution lui-même — en particulier pour une conversion qui se produit sur un **domaine qu'il ne possède pas** (une réservation SavvyCal/Calendly/Cal.com, une page Stripe Checkout). Ce pilier s'appuie sur des builds réels en production ; le runbook complet avec les motifs de code est dans `references/first-party-tracking.md`. L'essentiel :

### Le graphe d'identité

L'attribution first-party tient en une idée : **relier la navigation anonyme à la conversion finale.**

1. Un visiteur arrive anonymement ; votre outil analytics lui attribue un **`distinct_id` anonyme** et tamponne des **propriétés de premier touchpoint** (`$initial_referrer`, `$initial_utm_*`) sur ses événements.
2. À la conversion (inscription, réservation, achat), appelez **`identify()`** avec un identifiant stable (e-mail ou UUID utilisateur). Cela **fusionne** l'historique anonyme dans une personne connue — le premier touchpoint survit désormais jusqu'à la conversion.
3. Chaque événement de conversion peut ensuite être ventilé par canal de premier touchpoint. C'est tout le jeu.

### Combler le gap d'`identify()`

La défaillance first-party la plus courante : **rien n'appelle jamais `identify()`**, donc les conversions ne se rattachent jamais à l'historique de navigation et chaque client semble être apparu de nulle part. La solution : appeler identify à chaque vraie conversion. **Auditez d'abord** — beaucoup d'apps SaaS identifient déjà à l'inscription ; ne reconstruisez pas ce qui marche. Repérez les conversions *spécifiquement* non instrumentées et ne comblez que celles-là.

### Recoudre les conversions sur un domaine tiers

Le seul cas qui exige de la vraie machinerie : une conversion qui s'achève sur un domaine que vous ne contrôlez pas (un outil de réservation, un checkout hébergé). Vous ne pouvez pas y exécuter votre analytics, donc :

1. **Au moment du clic**, un décorateur de liens en phase de capture ajoute le `distinct_id` anonyme du visiteur à l'URL sortante via le **passage de métadonnées** de l'outil (ex. `?metadata[ph_distinct_id]=<id>`). Un seul écouteur au niveau du document couvre tous les CTA — aucune modification lien par lien.
2. L'outil tiers stocke cette métadonnée et la renvoie dans son **webhook**.
3. Votre **handler de webhook** déclenche une **fusion d'identité** (`$identify` avec l'e-mail de réservation comme `distinct_id` et l'id anonyme passé en contrebande comme `$anon_distinct_id`) plus un **événement de conversion** — rattachant la réservation au parcours marketing.

### Garde-fous (à ne pas sauter)

- **Garde d'anonymat — échouez fermé.** Ne faites passer en contrebande que l'id *anonyme*. Après `identify()`, l'id courant devient l'e-mail/UUID de l'utilisateur ; le fuiter dans une URL tierce ou fusionner dessus corrompt les profils (l'e-mail de A se replie sur quiconque réserve). Rejetez les ids qui ressemblent à des PII (contiennent `@`), plafonnez la longueur, et quand l'identité est ambiguë, **n'envoyez rien**. Si l'app identifie par UUID, testez `distinct_id === device_id` plutôt qu'une recherche de `@`.
- **Qualité des données de premier touchpoint.** Les redirections écrasent le vrai premier touchpoint. Excluez de la classification des referrers les domaines OAuth/checkout (`accounts.google.com`, `checkout.stripe.com`, `login.*`), vos propres sous-domaines (auto-références) et les hôtes de dev (`localhost`). C'est généralement un réglage de configuration, pas du code — et c'est le correctif au meilleur ratio confiance/effort.
- **Recouture cross-sous-domaine.** Site marketing → app sur un sous-domaine doivent partager un même projet analytics + un cookie cross-sous-domaine, sinon le parcours se casse à la passation. Attendez-vous à des **nombres quasi nuls tant que la couture n'est pas vérifiée en production** — ne paniquez pas devant des données vides ; servez-vous d'une heuristique de fenêtre de campagne en repli et backfiller la cohorte pré-couture en attendant (détails dans la référence).

### Le reporting et le dernier kilomètre

Le premier dividende est un seul insight : votre **événement de conversion ventilé par canal de premier touchpoint** (`$initial_utm_source` / `$initial_referring_domain`) et — joint au revenu — **canal → conversion → revenu**. Vérifiez la configuration first-touch versus last-touch dans l'outil (beaucoup de défauts sont en last-touch ; l'attribution first-party veut les `$initial_*`).

Mais le first-touch seul ne fait pas tourner les modèles multi-touch du §2. **Stockez le chemin de touchpoints ordonné complet** (pas seulement les `$initial_*`) et la voie construction alimente la voie interprétation — vous pourrez scorer vos propres parcours en position-based / linéaire / time-decay au lieu d'en lire seulement la théorie.

**Le dernier kilomètre — écrivez-la dans le CRM** (affinement venu de la production). Une ventilation dans un outil analytics reste un rapport ; les équipes sales et lifecycle n'agissent que sur une attribution *écrite sur la fiche*. Synchronisez un **champ `source` avec `confidence` et `basis`** (relié au parcours vs déclaré vs repli sur fenêtre de campagne) plus une lecture **Payant-vers-Organique** dérivée du medium, **agglomérée au niveau du compte** (pas seulement du contact — une organisation B2B, c'est plusieurs personnes aux e-mails pro/perso mélangés). La façon dont le pipeline/lifecycle l'utilisent ensuite, c'est le travail de `revops`.

Le motif est indépendant de l'outil : identify + merge existe dans PostHog, Segment, Amplitude, et via user-id dans GA4 ; la couture tierce fonctionne avec tout outil offrant un passage de métadonnées + un webhook. PostHog + SavvyCal servent d'exemple détaillé dans `references/first-party-tracking.md`.

---

## Format de sortie

Livrez un **readout d'attribution**, pas un dump de données :

```markdown
# Readout d'attribution — [date]

## La question
[Quelle décision cela éclaire — ex. « où mettre le budget du prochain trimestre ? »]

## Source de vérité
[Quel système définit le nombre de conversions, et pourquoi]

## Ce que dit chaque source
| Canal | Déclaré plateforme | GA | CRM | Déclaré utilisateur | Notre lecture |
|-------|-------------------|----|----|--------------------|---------------|
|[Dédupliqué contre la source de vérité ; pas sommé]

## Comparaison de modèles (cycles longs)
[First-touch versus last-touch côte à côte ; l'écart est l'insight]

## Confiance et gaps
[Le gap d'attribution, les angles morts, ce qu'on ne voit pas]

## Recommandation
[Allocation avec niveaux de confiance ; le test arbitre qui mérite d'être lancé]
```

## Intégrations d'outils

Pour l'implémentation, consultez le [registre des outils](https://github.com/mbzadev/skills/blob/main/tools/REGISTRY.md). Outils clés :

| Outil | Idéal pour | MCP | Guide |
|-------|------------|:---:|-------|
| **PostHog** | Attribution first-party, identify/merge, funnels | - | [posthog.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/posthog.md) |
| **GA4** | Web analytics, comparaison de modèles, couture user-id | ✓ | [ga4.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/ga4.md) |
| **Dub** | Liens courts + attribution des clics | ✓ | [dub-co.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/dub-co.md) |
| **Segment** | CDP — router identify/track vers toutes les destinations | - | [segment.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/segment.md) |
| **HubSpot** | Lead source CRM + champs déclaratifs | ✓ | [hubspot.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/hubspot.md) |
| **Salesforce** | CRM comme source de vérité du revenu | - | [salesforce.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/salesforce.md) |
| **Supermetrics** | Rassembler les chiffres des plateformes pour les réconcilier | ✓ | [supermetrics.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/supermetrics.md) |
| **RB2B** | Désanonymiser les visiteurs B2B du site | - | [rb2b.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/rb2b.md) |

---

## Skills liés

- `analytics` — tracking d'événements, tracking plans, UTM, mise en place GA4/GTM. Faites ça *avant* l'attribution.
- `ads` — pixels des plateformes publicitaires, CAPI, conversion tracking server-side (`references/conversion-tracking.md`).
- `revops` — étapes de pipeline, cycle de vie des leads, reporting de revenu CRM. L'attribution l'alimente.
- `ai-seo` — l'angle mort de l'attribution dans la recherche IA, en profondeur.
- `ab-testing` — expériences contrôlées ; la mentalité d'incrementality appliquée aux changements on-site.
