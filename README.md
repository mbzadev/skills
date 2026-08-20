## Installation

### 1. Installer les skills dans Codex

La méthode immédiatement disponible consiste à copier les skills avec `skills.sh` :

```bash
npx skills@latest add mbzadev/skills
```

Dans l’interface de l’installateur, sélectionnez Codex comme cible, puis choisissez les skills voulus. Incluez `setup-mabza-skills` si vous utilisez les flux d’ingénierie du dépôt.

Les fichiers installés vous appartiennent : vous pouvez les adapter, les versionner dans votre projet et récupérer les mises à jour avec `npx skills update`.

### 2. Plugin Codex natif

Le dépôt contient aussi le manifeste natif [`.codex-plugin/plugin.json`](./.codex-plugin/plugin.json). Il permet de valider puis de publier la collection comme plugin Codex. Tant que le plugin n’est pas référencé dans une place de marché Codex, passez par `skills.sh` au lieu d’utiliser une commande d’installation directe non prise en charge.

La décision d’architecture est documentée dans [`.agents/adr/0002-ship-as-a-codex-plugin.md`](./.agents/adr/0002-ship-as-a-codex-plugin.md).

### 3. Configurer le dépôt cible

Dans Codex, lancez `/setup-mabza-skills` une fois par dépôt. Le skill vous demandera :

- quel outil de suivi utiliser : GitHub, GitLab, un autre service ou des fichiers locaux ;
- quelles étiquettes employer pendant le triage ;
- où conserver les documents de domaine produits par les flux de travail.

La configuration est ensuite enregistrée dans `AGENTS.md` et `docs/agents/`.

## Pourquoi ces compétences existent

Ces skills corrigent les modes de défaillance courants rencontrés avec Codex et les agents de programmation.

### #1 : L'agent n'a pas fait ce que je voulais

> "Personne ne sait exactement ce qu'il veut"
>
> David Thomas et Andrew Hunt, [Le programmeur pragmatique](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**Le problème.** Le mode de défaillance le plus courant en développement logiciel est le désalignement. Vous pensez que le développeur sait ce que vous voulez ; puis vous découvrez ce qu’il a construit et réalisez qu’il ne vous avait pas compris.

C’est exactement la même chose avec l’IA. Un déficit de communication s’installe entre vous et l’agent. La solution consiste à organiser une **séance de questions approfondies** : demandez à l’agent de vous interroger précisément sur ce que vous souhaitez construire.

**Le correctif** consiste à utiliser :

- [`/grill-me`](./skills/grill-me/SKILL.md) — pour les usages sans code ;
- [`/grill-with-docs`](./skills/grill-with-docs/SKILL.md) — le même entretien, accompagné d’une documentation durable.

Ce sont les skills les plus utiles de la collection. Ils vous aident à vous aligner avec l’agent avant de commencer et à réfléchir en profondeur au changement envisagé. Utilisez-les _chaque fois_ que vous préparez une modification importante.

### #2 : L'agent est beaucoup trop verbeux

> Avec un langage omniprésent, les conversations entre développeurs et les expressions du code sont toutes dérivées du même modèle de domaine.
>
> Eric Evans, [Conception pilotée par domaine](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)

**Le problème.** Au début d’un projet, les développeurs et les personnes pour lesquelles ils créent le logiciel — les experts du domaine — n’emploient généralement pas le même langage.

La même tension existe avec les agents. Ils arrivent dans un projet et doivent comprendre son jargon au fil de l’eau ; ils utilisent alors vingt mots là où un seul suffirait.

**La solution** est un langage partagé, consigné dans un document qui aide les agents à décoder le vocabulaire du projet.

<details>
<summary>
Exemple
</summary>

Voici un exemple de fichier [`CONTEXT.md`](https://github.com/mbzadev/course-video-manager/blob/076a5a7a182db0fe1e62971dd7a68bcadf010f1c/CONTEXT.md), tiré du dépôt `course-video-manager`. Laquelle de ces formulations est la plus facile à lire ?

- **AVANT** : "Il y a un problème lorsqu'une leçon à l'intérieur d'une section d'un cours devient "réelle" (c'est-à-dire qu'elle se voit attribuer une place dans le système de fichiers)"
- **APRÈS** : "Il y a un problème avec la cascade de matérialisation"

Cette concision s’avère payante séance après séance.

</details>

Ce mécanisme est intégré à [`/grill-with-docs`](./skills/grill-with-docs/SKILL.md). Le skill mène un entretien approfondi, construit un langage partagé avec l’IA et consigne dans des ADR les décisions difficiles à expliquer.

Il est difficile d’en mesurer la puissance sans l’essayer : c’est l’une des techniques les plus utiles du dépôt.

> [!TIP]
> Un langage partagé présente de nombreux autres avantages que la réduction de la verbosité :
>
> - **Les variables, fonctions et fichiers sont nommés de manière cohérente**, en utilisant le langage partagé
> - En conséquence, la **base de code est plus facile à naviguer** pour l'agent
> - L'agent **dépense également moins de jetons en réflexion**, car il a accès à un langage plus concis

### #3 : Le code ne fonctionne pas

> "Faites toujours de petits pas délibérés. Le taux de retour est votre limite de vitesse. Ne vous lancez jamais dans une tâche trop importante."
>
> David Thomas et Andrew Hunt, [Le programmeur pragmatique](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**Le problème.** Même lorsque vous êtes alignés sur ce qu’il faut construire, l’agent peut encore produire du code qui ne fonctionne pas.

Il est temps d'examiner vos boucles de rétroaction. Sans retour sur la façon dont le code qu’il produit s’exécute réellement, l’agent volera à l’aveugle.

**La solution.** Il faut fournir les boucles de rétroaction habituelles : types statiques, accès au navigateur et tests automatisés.

Pour les tests automatisés, une boucle rouge-vert est essentielle : l’agent écrit d’abord un test qui échoue, puis le minimum de code nécessaire pour le faire réussir. Cette rétroaction continue améliore nettement la qualité du code.

Le skill **[`/tdd`](./skills/tdd/SKILL.md)** s’intègre à n’importe quel projet. Il encadre la boucle rouge-vert et indique à l’agent ce qui caractérise de bons ou de mauvais tests.

Pour le débogage, la compétence **[`/diagnosing-bugs`](./skills/diagnosing-bugs/SKILL.md)** regroupe les bonnes pratiques dans une boucle disciplinée, qui progresse phase par phase.

### #4 : Nous avons construit une boule de boue

> "Investissez dans la conception du système _chaque jour_."
>
> Kent Beck, [Programmation extrême expliquée](https://www.amazon.co.uk/Extreme-Programming-Explained-Embrace-Change/dp/0321278658)

> "Les meilleurs modules sont profonds. Ils permettent d'accéder à de nombreuses fonctionnalités via une interface simple."
>
> John Ousterhout, [Une philosophie de la conception de logiciels](https://www.amazon.co.uk/Philosophy-Software-Design-2nd/dp/173210221X)

**Le problème.** La plupart des applications créées avec des agents deviennent complexes et difficiles à modifier. En accélérant fortement le codage, les agents accélèrent aussi l’entropie logicielle ; les bases de code se complexifient à un rythme inédit.

**La solution** consiste à replacer la conception du code au centre du développement assisté par l’IA.

Ceci est intégré à chaque niveau de ces compétences :

- [`/to-spec`](./skills/to-spec/SKILL.md) vous interroge sur les modules que vous touchez avant de créer une spécification

Et surtout, [`/improve-codebase-architecture`](./skills/improve-codebase-architecture/SKILL.md) étudie la base de code pour repérer les possibilités d’approfondissement et vous présente les meilleurs candidats. Exécutez-le tous les quelques jours. Il s’agit d’une enquête, pas d’un sauvetage : sur une base de code véritablement ancienne, il trouvera des pistes concrètes, mais il ne démêlera pas la complexité à votre place.

### Résumé

Les principes fondamentaux du génie logiciel sont plus importants que jamais. Cette collection les transforme en pratiques reproductibles afin d’aider Codex à produire des applications fiables et maintenables.

## Référence

Les skills se répartissent selon leur mode d’invocation. Les skills **invoqués par l’utilisateur** ne s’exécutent que lorsque vous les appelez explicitement, par exemple avec `/grill-me` ; ils orchestrent généralement un flux de travail. Les skills **invocables par le modèle** peuvent être appelés par vous ou sélectionnés automatiquement par Codex lorsque la tâche correspond. Un skill invoqué par l’utilisateur peut s’appuyer sur des skills invocables par le modèle, mais pas sur un autre skill réservé à l’utilisateur.

### Ingénierie

Compétences que j'utilise quotidiennement pour le travail de code.

**Invoqués par l’utilisateur**

- **[ask-mabza](./skills/ask-mabza/SKILL.md)** — Indiquez votre situation pour trouver le skill ou le flux de travail adapté. Ce routeur couvre tous les skills invoqués par l’utilisateur dans ce dépôt.
- **[grill-with-docs](./skills/grill-with-docs/SKILL.md)** — Menez une séance de questions approfondie tout en construisant le modèle de domaine du projet, en précisant la terminologie et en mettant à jour `CONTEXT.md` ainsi que les ADR.
- **[triage](./skills/triage/SKILL.md)** — Faites progresser les tickets entrants dans une machine à états fondée sur des rôles de tri.
- **[improve-codebase-architecture](./skills/improve-codebase-architecture/SKILL.md)** — Analysez une base de code, présentez les possibilités d’amélioration dans un rapport HTML visuel, puis approfondissez celle que vous choisissez.
- **[setup-mabza-skills](./skills/setup-mabza-skills/SKILL.md)** — Configurez une fois par dépôt l’outil de suivi, les étiquettes de tri et l’organisation de la documentation du domaine nécessaires aux autres skills d’ingénierie.
- **[to-spec](./skills/to-spec/SKILL.md)** — Transformez la conversation en cours en spécification et publiez-la dans l’outil de suivi, sans nouvel entretien : le skill synthétise ce qui a déjà été décidé.
- **[to-tickets](./skills/to-tickets/SKILL.md)** — Divisez un plan, une spécification ou une conversation en tickets, chacun déclarant ses dépendances — sous forme de texte dans un fichier local ou de liens de blocage natifs dans un véritable outil de suivi.
- **[implement](./skills/implement/SKILL.md)** — Réalisez le travail décrit par une spécification ou des tickets, pilotez `/tdd` selon les coutures convenues, puis terminez par `/code-review` avant le commit.
- **[wayfinder](./skills/wayfinder/SKILL.md)** — Planifiez un effort trop vaste pour une seule session sous la forme d’une carte partagée de tickets de décision, puis résolvez-les un à un jusqu’à ce que le chemin vers la destination soit clair.

**Invocables par le modèle**

- **[prototype](./skills/prototype/SKILL.md)** — Créez un prototype jetable pour répondre à une question de conception — un seul fichier HTML partageable pour les questions d'état/de logique, ou plusieurs variantes d'interface utilisateur radicalement différentes pouvant être basculées à partir d'un seul itinéraire.
- **[diagnosing-bugs](./skills/diagnosing-bugs/SKILL.md)** — Boucle de diagnostic disciplinée pour les bogues difficiles et les régressions de performances : créez une boucle de rétroaction qui passe au rouge sur ce bogue → minimiser → hypothèse → instrument → corriger → test de régression.
- **[research](./skills/research/SKILL.md)** — Enquêtez sur une question par rapport à des sources primaires hautement fiables et capturez les résultats sous forme de fichier Markdown cité dans le dépôt, exécuté en tant qu'agent d'arrière-plan.
- **[tdd](./skills/tdd/SKILL.md)** — Développement piloté par les tests avec une boucle rouge-vert. Créez des fonctionnalités ou corrigez des bogues, une tranche verticale à la fois.
- **[domain-modeling](./skills/domain-modeling/SKILL.md)** — Créez et affinez activement le modèle de domaine d'un projet — testez les termes par rapport au glossaire, effectuez des tests de résistance avec des scénarios extrêmes et mettez à jour  `CONTEXT.md`  et les ADR en ligne.
- **[codebase-design](./skills/codebase-design/SKILL.md)** — Discipline et vocabulaire partagés pour concevoir des modules profonds : beaucoup de comportement derrière une petite interface, clairement délimitée et testable.
- **[code-review](./skills/code-review/SKILL.md)** — Examinez le diff selon deux axes indépendants : **Normes** — respecte-t-il les conventions du dépôt et les principaux signaux de mauvaise conception ? — et **Spécification** — implémente-t-il fidèlement le ticket ou la spécification d’origine ? Les deux analyses s’exécutent dans des sous-agents distincts.
- **[resolving-merge-conflicts](./skills/resolving-merge-conflicts/SKILL.md)** — Résolvez une fusion ou un rebasage en conflit, élément par élément, en remontant à l’intention de chaque côté, puis terminez l’opération sans utiliser `--abort`.
- **[wizard](./skills/wizard/SKILL.md)** — Générez un assistant bash interactif qui guide un humain à travers les étapes que lui seul peut effectuer : provisionnement de l'infrastructure, configuration des informations d'identification ou des secrets CI, navigation dans un tableau de bord tiers inconnu ou exécution d'une migration ou d'un basculement ponctuel.

### Productivité

Outils généraux de productivité, non spécifiques au code.

**Invoqués par l’utilisateur**

- **[grill-me](./skills/grill-me/SKILL.md)** — Soyez interrogé sans relâche sur un plan ou une conception jusqu'à ce que chaque branche de l'arbre de conception soit résolue.
- **[handoff](./skills/handoff/SKILL.md)** — Compactez la conversation en cours dans un document de transfert afin qu'un autre agent puisse continuer le travail.
- **[teach](./skills/teach/SKILL.md)** — Apprenez à l'utilisateur une nouvelle compétence ou un nouveau concept au cours de plusieurs sessions, en utilisant le répertoire actuel comme espace de travail d'enseignement avec état.
- **[to-questionnaire](./skills/to-questionnaire/SKILL.md)** — Transformez une décision que vous ne pouvez pas trancher seul en un questionnaire Markdown destiné à la personne qui détient la réponse, à remplir de manière asynchrone ou ensemble lors d’une réunion. Il vous interroge sur l’envoi — le destinataire et les informations attendues —, pas sur le sujet.
- **[wait-what](./skills/wait-what/SKILL.md)** — Déclenchez-le dès qu’un message n’est pas clair. L’agent le reformule en français clair, avec le contexte manquant et le vocabulaire de `CONTEXT.md`.

**Invocables par le modèle**

- **[grilling](./skills/grilling/SKILL.md)** — Interrogez l'utilisateur sans relâche sur un plan, une décision ou une idée jusqu'à ce que chaque branche de l'arbre de conception soit résolue. La primitive d'entretien réutilisable derrière `grill-me`, `grill-with-docs`, `triage`, `wayfinder` et `improve-codebase-architecture`.
- **[writing-for-agents](./skills/writing-for-agents/SKILL.md)** — Rédaction de documents pour les agents : skills, `AGENTS.md` et tout document auquel un agent accède par un pointeur.

### Marketing

La collection marketing : conversion, contenu, SEO, payant, mesure, rétention, croissance, stratégie et ventes. Tous invocables par le modèle ; [`product-marketing`](./skills/product-marketing/SKILL.md) est le point d'entrée — il crée le document de contexte produit lu par tous les autres.

**Invocables par le modèle**

**Optimisation de la conversion**

- **[cro](./skills/cro/SKILL.md)** — Optimisez le taux de conversion des pages et formulaires marketing : diagnostic, hypothèses priorisées, expériences.
- **[signup](./skills/signup/SKILL.md)** — Optimisez les flux d'inscription et d'activation d'essai pour réduire l'abandon.
- **[onboarding](./skills/onboarding/SKILL.md)** — Optimisez l'onboarding post-inscription, l'activation et le time-to-value.
- **[popups](./skills/popups/SKILL.md)** — Créez et optimisez popups, modales, overlays et barres collantes à des fins de conversion.
- **[paywalls](./skills/paywalls/SKILL.md)** — Créez et optimisez paywalls in-app, écrans d'upgrade et feature gates.

**Contenu & copywriting**

- **[copywriting](./skills/copywriting/SKILL.md)** — Écrivez ou réécrivez le texte de conversion de n'importe quelle page : accueil, landing, pricing.
- **[copy-editing](./skills/copy-editing/SKILL.md)** — Éditez, relisez et rafraîchissez du texte marketing existant.
- **[cold-email](./skills/cold-email/SKILL.md)** — Écrivez des emails froids B2B et des séquences de relance qui obtiennent des réponses.
- **[emails](./skills/emails/SKILL.md)** — Créez des séquences email lifecycle automatisées : welcome, nurture, réengagement.
- **[sms](./skills/sms/SKILL.md)** — Marketing SMS/MMS : welcome flows, panier abandonné, conformité TCPA/A2P.
- **[social](./skills/social/SKILL.md)** — Créez, planifiez et optimisez le contenu social (LinkedIn, X, TikTok) et menez le social listening.
- **[image](./skills/image/SKILL.md)** — Créez, générez et optimisez des images marketing : héros de blog, visuels sociaux, OG images.
- **[video](./skills/video/SKILL.md)** — Produisez des vidéos avec des outils IA ou des frameworks programmatiques (Remotion, HeyGen).
- **[content-strategy](./skills/content-strategy/SKILL.md)** — Planifiez la stratégie de contenu : clusters thématiques, piliers, calendrier éditorial.

**SEO & découvrabilité**

- **[seo-audit](./skills/seo-audit/SKILL.md)** — Auditez et diagnostiquez les problèmes SEO : technique, on-page, core web vitals, indexation.
- **[ai-seo](./skills/ai-seo/SKILL.md)** — Optimisez le contenu pour les moteurs de recherche IA (AEO/GEO/LLMO, citations LLM).
- **[programmatic-seo](./skills/programmatic-seo/SKILL.md)** — Créez des pages SEO à grande échelle via des templates et des données.
- **[site-architecture](./skills/site-architecture/SKILL.md)** — Planifiez hiérarchie de pages, navigation, URLs et maillage interne.
- **[schema](./skills/schema/SKILL.md)** — Ajoutez et corrigez le balisage schema.org et les données structurées JSON-LD.
- **[competitors](./skills/competitors/SKILL.md)** — Créez des pages comparatives « alternatives/vs » pour le SEO et les ventes.
- **[aso](./skills/aso/SKILL.md)** — Auditez et optimisez une fiche App Store ou Google Play.
- **[directory-submissions](./skills/directory-submissions/SKILL.md)** — Soumettez votre produit aux annuaires startups/SaaS/AI pour backlinks et découverte.

**Payant & distribution**

- **[ads](./skills/ads/SKILL.md)** — Stratégie et gestion de campagnes payantes Google/Meta/LinkedIn/X, ABM et tracking de conversion.
- **[ad-creative](./skills/ad-creative/SKILL.md)** — Générez et itérez à grande échelle des créas publicitaires : headlines RSA, ads statiques, vidéos.
- **[influencer-marketing](./skills/influencer-marketing/SKILL.md)** — Gérez les partenariats influenceurs, créateurs et ambassadeurs, de la sélection au ROI.
- **[public-relations](./skills/public-relations/SKILL.md)** — Relations presse et médias gagnés : pitch de journalistes, newsjacking, préparation de podcast.

**Mesure & tests**

- **[analytics](./skills/analytics/SKILL.md)** — Mettez en place et auditez le tracking : GA4, GTM, événements, UTM, plans de tag.
- **[attribution](./skills/attribution/SKILL.md)** — Choisissez et interprétez les modèles d'attribution, réconciliez les chiffres contradictoires entre outils.
- **[ab-testing](./skills/ab-testing/SKILL.md)** — Planifiez, concevez et exécutez des tests A/B et des programmes d'expérimentation growth.

**Rétention**

- **[churn-prevention](./skills/churn-prevention/SKILL.md)** — Réduisez le churn : cancel flows, save offers, dunning, win-back.
- **[community-marketing](./skills/community-marketing/SKILL.md)** — Construisez et animez des communautés (Discord, Slack, forums) au service de la croissance.

**Ingénierie de la croissance**

- **[free-tools](./skills/free-tools/SKILL.md)** — Planifiez et construisez des outils gratuits « engineering as marketing » : calculatrices, générateurs.
- **[referrals](./skills/referrals/SKILL.md)** — Créez et optimisez des programmes de referral, d'affiliation et de bouche-à-oreille.
- **[lead-magnets](./skills/lead-magnets/SKILL.md)** — Créez des aimants à leads : ebooks, checklists, templates gated.
- **[co-marketing](./skills/co-marketing/SKILL.md)** — Trouvez des partenaires co-marketing et planifiez des campagnes conjointes.
- **[marketing-loops](./skills/marketing-loops/SKILL.md)** — Mettez en place des workflows marketing récurrents auto-exécutés par un agent.

**Stratégie & monétisation**

- **[product-marketing](./skills/product-marketing/SKILL.md)** — Créez et maintenez le document de contexte produit que tous les autres skills marketing lisent en premier.
- **[marketing-plan](./skills/marketing-plan/SKILL.md)** — Générez un plan marketing complet de 13 sections structuré AARRR, niveau fractional CMO.
- **[marketing-ideas](./skills/marketing-ideas/SKILL.md)** — Générez des idées et stratégies marketing pour SaaS (bibliothèque de 139 idées par catégorie).
- **[marketing-psychology](./skills/marketing-psychology/SKILL.md)** — Appliquez les principes de psychologie et modèles mentaux au marketing.
- **[marketing-council](./skills/marketing-council/SKILL.md)** — Simulez un conseil de marketeurs légendaires qui débattent puis synthétisent.
- **[offers](./skills/offers/SKILL.md)** — Concevez des offres : value stack, bonus stacking, garanties, rareté et urgence.
- **[pricing](./skills/pricing/SKILL.md)** — Décisions de pricing, packaging, freemium, value metric, Van Westendorp.
- **[customer-research](./skills/customer-research/SKILL.md)** — Menez et synthétisez la recherche client : interviews, review mining, personas, JTBD.

**Ventes & RevOps**

- **[revops](./skills/revops/SKILL.md)** — Revenue operations : lead scoring, routage MQL/SQL, handoff marketing-ventes, CRM.
- **[sales-enablement](./skills/sales-enablement/SKILL.md)** — Créez le collateral de vente : pitch decks, one-pagers, objections, scripts de démo.
- **[launch](./skills/launch/SKILL.md)** — Planifiez un lancement produit : Product Hunt, beta, waitlist, GTM.
- **[competitor-profiling](./skills/competitor-profiling/SKILL.md)** — Recherchez et profilez des concurrents depuis leurs URLs, en dossiers structurés.
- **[prospecting](./skills/prospecting/SKILL.md)** — Trouvez et qualifiez des listes de prospects : B2B SaaS, local, signaux de demande.
