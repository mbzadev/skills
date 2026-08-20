---
name: ai-seo
description: "Optimisez votre contenu pour être cité par les moteurs et assistants IA (ChatGPT, Perplexity, AI Overviews, Claude, Copilot). À utiliser lorsque l'utilisateur parle d'AI SEO, d'AEO, de GEO, de LLMO, d'AI Overviews, de citations ou de visibilité IA, de llms.txt, ou demande comment apparaître dans les réponses générées par IA. Pour un audit SEO classique, voir seo-audit ; pour les données structurées, voir schema."
---

# SEO pour la recherche IA

Vous êtes un expert de l'optimisation pour la recherche IA — l'art de rendre un contenu découvrable, extractible et citable par les systèmes IA, notamment Google AI Overviews, ChatGPT, Perplexity, Claude, Gemini et Copilot. Votre objectif : aider l'utilisateur à faire citer son contenu comme source dans les réponses générées par IA.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, vérifiez si le projet contient un fichier de contexte product-marketing : `.agents/product-marketing.md` (ou `.claude/product-marketing.md`, ou l'ancien nom `product-marketing-context.md` dans les configurations plus anciennes). Si oui, lisez-le avant toute chose et exploitez ce contexte ; ne demandez à l'utilisateur que les informations qui n'y figurent pas ou celles spécifiques à cette tâche.

Réunissez ensuite ces éléments (demandez-les s'ils ne sont pas fournis) :

### 1. Visibilité IA actuelle
- Savez-vous si votre marque apparaît aujourd'hui dans les réponses générées par IA ?
- Avez-vous vérifié ChatGPT, Perplexity ou Google AI Overviews sur vos requêtes clés ?
- Quelles requêtes comptent le plus pour votre activité ?

### 2. Contenu et domaine
- Quel type de contenu produisez-vous ? (Blog, documentation, comparatifs, pages produit)
- Quelle est votre autorité de domaine / votre force SEO classique ?
- Avez-vous déjà des données structurées (schema markup) ?

### 3. Objectifs
- Être cité comme source dans les réponses IA ?
- Apparaître dans les Google AI Overviews sur des requêtes précises ?
- Concurrencer des marques déjà citées ?
- Optimiser le contenu existant ou créer du contenu optimisé pour l'IA ?

### 4. Paysage concurrentiel
- Qui sont vos principaux concurrents dans les résultats de recherche IA ?
- Sont-ils cités là où vous ne l'êtes pas ?

## Comment fonctionne la recherche IA

### Le paysage de la recherche IA

| Plateforme | Fonctionnement | Sélection des sources |
|------------|----------------|----------------------|
| **Google AI Overviews** | Synthétise les pages en tête des résultats | Forte corrélation avec les rankings classiques |
| **ChatGPT (avec recherche)** | Cherche sur le web, cite ses sources | Éventail plus large que le top des rankings |
| **Perplexity** | Cite toujours ses sources avec des liens | Favourise le contenu autoritaire, récent, bien structuré |
| **Gemini** | Assistant IA de Google | Puisé dans l'index Google + Knowledge Graph |
| **Copilot** | Recherche IA propulsée par Bing | Index Bing + sources autoritaires |
| **Claude** | Brave Search (quand activé) | Données d'entraînement + résultats Brave Search |

Pour une analyse approfondie de la sélection de sources de chaque plateforme et de quoi optimiser par plateforme, consultez [references/platform-ranking-factors.md](references/platform-ranking-factors.md).

### La différence clé avec le SEO classique

Le SEO classique vous fait ranker. Le SEO IA vous fait **citer**.

En recherche classique, il faut être en page 1. En recherche IA, une page bien structurée peut être citée même en position 2 ou 3 de la SERP — les systèmes IA choisissent leurs sources selon la qualité, la structure et la pertinence du contenu, pas seulement sa position.

**Chiffres clés :**
- Les AI Overviews apparaissent sur ~45 % des recherches Google
- Les AI Overviews réduisent jusqu'à 58 % les clics vers les sites
- Une marque a 6,5 fois plus de chances d'être citée via des sources tierces que via son propre domaine
- Un contenu optimisé est cité 3 fois plus souvent qu'un contenu non optimisé
- Les statistiques et citations augmentent la visibilité de 40 % et plus, toutes requêtes confondues

### Position officielle de Google contre réalité multi-plateforme

Lisez ce point une fois avant toute autre chose.

**La position de Google** ([guide d'optimisation des fonctionnalités IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)) :
> « Les bonnes pratiques SEO restent pertinentes, car nos fonctionnalités d'IA générative sur la Recherche Google s'appuient sur nos systèmes fondamentaux de classement et de qualité. »

Google le dit explicitement :
- **Aucun markup ni fichier spécial n'est requis** pour les AI Overviews ou l'AI Mode
- **Ne découpez pas le contenu pour l'IA** — écrivez pour des humains, structurez avec des titres et paragraphes normaux
- **N'écrivez pas de contenu séparé pour l'IA** — c'est le risque de tomber sous la politique de spam « scaled content abuse »
- Le **contenu utile, fiable, pensé d'abord pour les humains** gagne — mêmes standards E-E-A-T que la Recherche classique
- **Aucun rapport Search Console spécifique à l'IA** — utilisez les métriques SEO standard

**Les autres moteurs IA (ChatGPT, Claude, Perplexity, Copilot) se comportent différemment :**
- Ils récompensent activement la structure extractible — passages, FAQ, tableaux comparatifs, blocs de définition
- Ils analysent `llms.txt`, les pages de pricing structurées et les fichiers lisibles par machine quand ils existent
- Ils citent davantage les sources tierces (Reddit, Wikipédia, sites d'avis) que les pages en tête des résultats

**Ce que cela implique pour le travail :**
- Les patterns structurels de ce skill (blocs de réponse de 40-60 mots, schema FAQ, tableaux comparatifs) aident matériellement les moteurs IA **non-Google**. Ils ne pénalisent pas Google — c'est simplement une bonne organisation de contenu.
- Pour Google AI Overviews / AI Mode précisément : optimisez pour les humains et la Recherche core, point final. Solide E-E-A-T, informations originales, HTML sémantique, indexabilité propre.
- Pour ChatGPT/Claude/Perplexity : ajoutez la structure extractible + llms.txt + fichiers lisibles par machine.

En cas de doute, revenez à « écrire pour les humains, organiser pour la clarté » — cela satisfait les deux camps.

### Query fan-out (recherche IA de Google)

Les fonctionnalités IA de Google ne répondent pas qu'à la requête tapée : elles génèrent en coulisses des **requêtes connexes concurrentes** et récupèrent des résultats pour chacune.

L'exemple de Google lui-même : un utilisateur qui demande « comment réparer des pelouses » déclenche des requêtes fan-out sur les désherbants, l'éradication sans produits chimiques, la prévention des mauvaises herbes, etc. L'IA synthétise l'ensemble.

**Implications :**
- Le ciblage une page par mot-clé perd de son efficacité. Couvrez le **cluster thématique complet** pour être retrouvable aussi sur les variantes fan-out.
- L'intention longue traîne compte moins que l'autorité thématique — les systèmes IA de Google comprennent les synonymes et l'équivalence sémantique.
- Une page qui répond exhaustivement à un sujet parent (sous-questions incluses) sera retrievalée plus souvent que des pages étroites par requête.

**Action** : lors de la planification de contenu, listez les 5 à 10 requêtes connexes vers lesquelles l'IA va probablement se déployer, et vérifiez que votre contenu (ou votre site dans son ensemble) les couvre.

## Audit de visibilité IA

Avant d'optimiser, évaluez votre présence actuelle en recherche IA.

### Étape 1 : vérifiez les réponses IA sur vos requêtes clés

Testez 10 à 20 de vos requêtes les plus importantes sur les plateformes :

| Requête | Google AI Overview | ChatGPT | Perplexity | Vous cité ? | Concurrents cités ? |
|---------|:-----------------:|:-------:|:----------:|:-----------:|:-------------------:|
| [requête 1] | Oui/Non | Oui/Non | Oui/Non | Oui/Non | [qui] |
| [requête 2] | Oui/Non | Oui/Non | Oui/Non | Oui/Non | [qui] |

**Types de requêtes à tester :**
- « Qu'est-ce que [votre catégorie de produit] ? »
- « Meilleur [catégorie de produit] pour [cas d'usage] »
- « [Votre marque] vs [concurrent] »
- « Comment [problème résolu par votre produit] »
- « Prix de [votre catégorie de produit] »

### Étape 2 : analysez les patterns de citation

Quand vos concurrents sont cités et pas vous, examinez :
- **Structure du contenu** — leur contenu est-il plus extractible ?
- **Signaux d'autorité** — ont-ils plus de citations, statistiques, citations d'experts ?
- **Fraîcheur** — leur contenu est-il plus récemment mis à jour ?
- **Schema markup** — ont-ils des données structurées qui vous manquent ?
- **Présence tierce** — sont-ils cités via Wikipédia, Reddit, sites d'avis ?

### Étape 3 : contrôle d'extractibilité du contenu

Pour chaque page prioritaire, vérifiez :

| Contrôle | Réussi/Échec |
|---------|--------------|
| Définition claire dès le premier paragraphe ? | |
| Blocs de réponse autonomes (compréhensibles hors contexte) ? | |
| Statistiques avec sources citées ? | |
| Tableau comparatif pour les requêtes « [X] vs [Y] » ? | |
| Section FAQ avec des questions en langage naturel ? | |
| Schema markup (FAQ, HowTo, Article, Product) ? | |
| Attribution à un expert (nom d'auteur, credentials) ? | |
| Mis à jour récemment (moins de 6 mois) ? | |
| Structure de titres alignée sur les formulations de requêtes ? | |
| Robots IA autorisés dans robots.txt ? | |

### Étape 4 : contrôle de l'accès des robots IA

Vérifiez que votre robots.txt autorise les crawlers IA. Chaque plateforme IA a son propre bot, et le bloquer empêche cette plateforme de vous citer :

- **GPTBot** et **ChatGPT-User** — OpenAI (ChatGPT)
- **PerplexityBot** — Perplexity
- **ClaudeBot** et **anthropic-ai** — Anthropic (Claude)
- **Google-Extended** — Google Gemini et AI Overviews
- **Bingbot** — Microsoft Copilot (via Bing)

Inspectez votre robots.txt à la recherche de règles `Disallow` visant ces bots. Si vous en trouvez, c'est une décision business : bloquer empêche l'entraînement des IA sur votre contenu, mais aussi votre citation. Un compromis possible : bloquer les crawlers d'entraînement uniquement (comme **CCBot** de Common Crawl) tout en laissant passer les bots de recherche listés ci-dessus.

Consultez [references/platform-ranking-factors.md](references/platform-ranking-factors.md) pour la configuration robots.txt complète.

## Stratégie d'optimisation

### Les trois piliers

```
1. Structure (rendre le contenu extractible)
2. Autorité (le rendre citable)
3. Présence (être là où l'IA regarde)
```

### Pilier 1 : Structure — rendre le contenu extractible

Les systèmes IA extraient des passages, pas des pages. Chaque affirmation clé doit tenir comme énoncé autonome.

**Patterns de blocs de contenu :**
- **Blocs de définition** pour les requêtes « Qu'est-ce que X ? »
- **Blocs étape par étape** pour les requêtes « Comment X »
- **Tableaux comparatifs** pour les requêtes « X vs Y »
- **Blocs avantages/inconvénients** pour les requêtes d'évaluation
- **Blocs FAQ** pour les questions récurrentes
- **Blocs de statistiques** avec sources citées

Pour les templates détaillés de chaque type de bloc, consultez [references/content-patterns.md](references/content-patterns.md).

**Règles structurelles :**
- Ouvrez chaque section par la réponse directe (ne l'enterrez pas)
- Gardez les passages de réponse clés entre 40 et 60 mots (optimal pour l'extraction en snippet)
- Utilisez des titres H2/H3 formulés comme les gens posent leurs requêtes
- Les tableaux battent la prose pour le contenu comparatif
- Les listes numérotées battent les paragraphes pour le contenu procédural
- Un paragraphe = une seule idée claire

### Pilier 2 : Autorité — rendre le contenu citable

Les systèmes IA préfèrent les sources en qui ils peuvent avoir confiance. Construisez la « citabilité ».

**La recherche GEO de Princeton** (KDD 2024, étudiée sur Perplexity.ai) a classé 9 méthodes d'optimisation :

| Méthode | Gain de visibilité | Application |
|---------|:------------------:|-------------|
| **Citer des sources** | +40 % | Ajoutez des références autoritaires avec liens |
| **Ajouter des statistiques** | +37 % | Incluez des chiffres précis avec leurs sources |
| **Ajouter des citations** | +30 % | Citations d'experts avec nom et fonction |
| **Ton autoritaire** | +25 % | Écrivez avec une expertise démontrée |
| **Améliorer la clarté** | +20 % | Simplifiez les concepts complexes |
| **Termes techniques** | +18 % | Employez le vocabulaire du domaine |
| **Vocabulaire unique** | +15 % | Augmentez la diversité lexicale |
| **Optimisation de la fluidité** | +15 à 30 % | Améliorez lisibilité et enchaînements |
| ~~Bourrage de mots-clés~~ | **-10 %** | **Dégrade activement la visibilité IA** |

**Meilleure combinaison :** fluidité + statistiques = gain maximal. Les sites peu bien classés profitent encore plus — jusqu'à +115 % de visibilité avec des citations.

**Statistiques et données** (+37 à 40 % de citations)
- Incluez des chiffres précis avec leurs sources
- Citez la recherche originale, pas des résumés de recherche
- Datez toutes les statistiques
- Les données originales battent les données agrégées

**Attribution expertale** (+25 à 30 % de citations)
- Des auteurs nommés avec credentials
- Citations d'experts avec fonction et organisation
- Formulation « Selon [source] » pour étayer les affirmations
- Bios d'auteurs montrant l'expertise pertinente

**Signaux de fraîcheur**
- « Dernière mise à jour : [date] » affiché bien visiblement
- Rafraîchissements réguliers (trimestriel minimum sur les sujets concurrentiels)
- Références à l'année en cours et statistiques récentes
- Retrait ou mise à jour des informations obsolètes

**Alignement E-E-A-T**
- Expérience de première main démontrée
- Informations précises et détaillées (pas génériques)
- Sourcing et méthodologie transparents
- Expertise claire de l'auteur sur le sujet

### Pilier 3 : Présence — être là où l'IA regarde

Les systèmes IA ne citent pas que votre site — ils citent les endroits où vous apparaissez.

**Les sources tierces comptent plus que votre propre site :**
- Mentions Wikipédia (7,8 % de toutes les citations ChatGPT)
- Discussions Reddit (1,8 % des citations ChatGPT)
- Publications sectorielles et articles invités
- Sites d'avis (G2, Capterra, TrustRadius pour le SaaS B2B)
- YouTube (fréquemment cité par Google AI Overviews)
- Podcasts (les épisodes sont transcrits, les notes publiées — les deux sont crawlés et cités)
- Réponses Quora

**Actions :**
- Gardez votre page Wikipédia exacte et à jour
- Participez authentiquement aux communautés Reddit
- Faites-vous figurer dans les roundups sectoriels et articles comparatifs
- Maintenez des profils à jour sur les plateformes d'avis pertinentes
- Créez du contenu YouTube pour les requêtes how-to clés — les modèles ne regardent pas la vidéo, ils lisent la couche textuelle autour d'elle ; consultez [references/youtube-ai-citations.md](references/youtube-ai-citations.md) pour l'anatomie complète (transcription, sous-titres, chapitres, description, commentaire épinglé)
- Intervenez dans des podcasts de votre catégorie (préparez-vous avec la préparation d'invité podcast du skill public-relations)
- Répondez avec profondeur aux questions Quora pertinentes

### Fichiers lisibles par machine pour les agents IA

> **Position de Google** : non requis pour les AI Overviews ou l'AI Mode. Leur guide dit explicitement qu'aucun nouveau markup, fichier IA ou markdown n'est nécessaire pour apparaître dans la recherche IA générative.
>
> **Pourquoi les inclure quand même** : les moteurs IA non-Google (ChatGPT, Claude, Perplexity) et les agents d'achat autonomes récompensent la structure extractible. Les fichiers ci-dessous aident ces moteurs sans nuire à Google.

Les agents IA ne font pas que répondre aux questions — ils deviennent acheteurs. Quand un agent IA évalue des outils au nom d'un utilisateur, il a besoin d'informations structurées et parsables. Si votre pricing est enfermé dans une page rendue en JavaScript ou derrière un « contactez les ventes », l'agent vous ignorera et recommandera des concurrents dont il peut réellement lire l'information.

Ajoutez ces fichiers lisibles par machine à la racine du site :

**`/pricing.md` ou `/pricing.txt`** — données de pricing structurées pour les agents IA

```markdown
# Pricing — [Nom de votre produit]

## Free
- Price: $0/month
- Limits: 100 emails/month, 1 user
- Features: Basic templates, API access

## Pro
- Price: $29/month (billed annually) | $35/month (billed monthly)
- Limits: 10,000 emails/month, 5 users
- Features: Custom domains, analytics, priority support

## Enterprise
- Price: Custom — contact sales@example.com
- Limits: Unlimited emails, unlimited users
- Features: SSO, SLA, dedicated account manager
```

**Pourquoi c'est important dès maintenant :**
- Les agents IA comparent de plus en plus les produits par programme avant qu'un humain ne visite votre site
- Un pricing opaque est filtré des parcours d'achat médiés par IA
- Un simple fichier markdown se parse trivialement pour n'importe quel LLM — pas de rendu, pas de JavaScript, pas de mur de connexion
- Même principe que `robots.txt` (pour les crawlers), `llms.txt` (pour le contexte IA) et `AGENTS.md` (pour les capacités des agents)

**Bonnes pratiques :**
- Utilisez des unités cohérentes (mensuel vs annuel, par siège vs forfait)
- Incluez des limites et seuils précis, pas seulement des noms de fonctionnalités
- Listez ce qui est inclus à chaque palier, pas seulement ce qui différencie
- Maintenez-le à jour — un pricing périmé est pire que pas de fichier du tout
- Linktez-le depuis votre sitemap et votre page de pricing principale

**`/llms.txt`** — fichier de contexte pour les systèmes IA (voir [llmstxt.org](https://llmstxt.org))

Si vous n'en avez pas encore, ajoutez un `llms.txt` qui donne aux systèmes IA un aperçu rapide de ce que fait votre produit, à qui il s'adresse, et des liens vers les pages clés (dont votre pricing).

**`/okf/` — bundle Open Knowledge Format (soutenu par Google, v0.1)**

Google a [introduit OKF](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing) en juin 2026 — une spécification markdown pour représenter le contenu d'un site sous forme de répertoire de fichiers inter-liés avec frontmatter YAML, lisible par les agents sans scraping. Conçu au départ pour les métadonnées de catalogues data-team ; le détournement « site lisible par agents » a été popularisé par Suganthan Mohanadasan. Aucun signal de ranking AI-search confirmé aujourd'hui — traitez-le comme un enregistrement de couche protocole, aux débuts de schema.org. **Pour l'analyse complète, les chemins d'implémentation (générateur gratuit, plugin WordPress, à la main), les conseils d'hébergement et quand s'en passer, consultez [references/okf.md](references/okf.md).**

### Schema markup pour l'IA

Les données structurées aident les systèmes IA à comprendre votre contenu. Schemas clés :

| Type de contenu | Schema | En quoi il aide |
|-----------------|--------|-----------------|
| Articles / posts de blog | `Article`, `BlogPosting` | Identification auteur, date, sujet |
| Contenu how-to | `HowTo` | Extraction des étapes pour les requêtes procédurales |
| FAQ | `FAQPage` | Extraction directe question/réponse |
| Produits | `Product` | Prix, fonctionnalités, avis |
| Comparatifs | `ItemList` | Données de comparaison structurées |
| Avis | `Review`, `AggregateRating` | Signaux de confiance |
| Organisation | `Organization` | Reconnaissance d'entité |

Un contenu avec le schema approprié affiche 30 à 40 % de visibilité IA supérieure sur les moteurs IA non-Google. **Note de Google** : les données structurées ne sont « pas requises pour la recherche IA générative » mais restent recommandées pour la stratégie SEO globale. Pour l'implémentation, utilisez le skill **schema**.

## Expériences agentiques

Au-delà des moteurs de recherche IA qui synthétisent le contenu, des agents autonomes commencent à accéder directement aux sites — cliquer, lire, comparer, voire acheter au nom des utilisateurs. Le guide de Google signale cette catégorie émergente à anticiper.

**Comment les agents accèdent à votre site :**
- **Rendu visuel** — ils capturent/lisent la page comme le ferait un utilisateur
- **Inspection du DOM** — ils analysent la structure HTML de la page
- **Arbre d'accessibilité** — ils s'appuient sur la même information sémantique que les technologies d'assistance (labels, rôles, landmarks, titres)

**Ce qu'il faut faire :**
- **Servez un contenu significatif sans acrobaties JavaScript** — si la page est blanche tant que 4 frameworks ne sont pas chargés, l'agent voit du blanc
- **HTML sémantique** — utilisez `<main>`, `<nav>`, `<article>`, `<button>`, une hiérarchie de titres correcte, du texte `alt` sur les images
- **Arbre d'accessibilité propre** — chaque élément interactif labellisé ; ARIA utilisé correctement (ou pas du tout quand le HTML natif suffit)
- **Sélecteurs stables / layouts prévisibles** — les agents peinent sur les sites qui se re-rendent à chaque interaction
- **Pricing, specs, coordonnées visibles** — tout ce dont un agent a besoin pour une recommandation d'achat doit être sur une page publique et indexable (c'est là que `/pricing.md` et fichiers similaires aident)

**Émergent — Universal Commerce Protocol (UCP) :**
Google mentionne l'UCP comme protocole à venir qui donnera aux agents des points d'accroche standardisés pour les interactions commerciales (découverte de catalogue, pricing, checkout). Surveillez l'adoption ; en attendant, les recommandations structurelles ci-dessus en sont le précurseur.

Pour l'e-commerce et le commerce local spécifiquement, Google met en avant :
- **Merchant Center feeds** + **Google Business Profile** pour la visibilité produits/services dans la AI Search
- **Business Agent** pour l'engagement client conversationnel (le cas échéant)

## Les types de contenu les plus cités

Tout le contenu ne se cite pas aussi bien. Priorisez ces formats :

| Type de contenu | Part de citations | Pourquoi l'IA le cite |
|-----------------|:-----------------:|----------------------|
| **Articles comparatifs** | ~33 % | Structuré, équilibré, forte intention |
| **Guides de référence** | ~15 % | Exhaustifs, autoritaires |
| **Recherche / données originales** | ~12 % | Statistiques uniques et citables |
| **Sélections / listicles** | ~10 % | Structure claire, riches en entités |
| **Pages produit** | ~10 % | Détails précis extractibles par l'IA |
| **Guides how-to** | ~8 % | Structure étape par étape |
| **Opinion / analyse** | ~10 % | Perspective experte, citable |

**Sous-performants pour la citation IA :**
- Posts de blog génériques sans structure
- Pages produit maigres avec du remplissage marketing
- Contenu gated (l'IA n'y accède pas)
- Contenu sans date ni attribution d'auteur
- Contenu uniquement en PDF (plus difficile à parser pour l'IA)

**Être cité n'est pas être recommandé.** Une citation signifie que votre contenu a été utile à consulter ; être *recommandé* — entrer sur la shortlist réelle de l'acheteur — dépend du consensus à l'échelle du web (avis, forums, analystes, presse) et largement indépendant de votre propre contenu. Les listicles auto-promotionnels « meilleur [catégorie] » peuvent même se retourner contre les marques émergentes : dans une étude B2B sur 100 requêtes, 69 % des citations AI Overview gagnées par des listicles auto-promotionnels arrivaient dans des réponses recommandant des concurrents plutôt que la marque éditrice. Consultez [references/citations-vs-recommendations.md](references/citations-vs-recommendations.md) pour l'échelle de visibilité (retrieved → cited → mentioned → recommended), la stratégie de buyers' guide selon le stade, ce qui vaut une recommandation, et l'angle mort d'attribution.

## Suivre la visibilité IA

### Que suivre

| Métrique | Ce qu'elle mesure | Comment vérifier |
|----------|-------------------|------------------|
| Présence AI Overview | Des AI Overviews apparaissent-ils sur vos requêtes ? | Vérification manuelle ou Semrush/Ahrefs |
| Taux de citation de marque | Fréquence à laquelle vous êtes cité dans les réponses IA | Outils de visibilité IA (voir ci-dessous) |
| Part de voix IA | Vos citations vs concurrents | Peec AI, Otterly, ZipTie |
| Sentiment des citations | Comment l'IA décrit votre marque | Revue manuelle + outils de monitoring |
| Taux de recommandation | Être sur la shortlist, pas seulement cité (voir [citations-vs-recommendations.md](references/citations-vs-recommendations.md)) | Suivi de prompts + cadrage des mentions |
| Attribution des sources | Quelles de vos pages sont citées | Suivi du trafic de référents IA |

### Outils de monitoring de visibilité IA

| Outil | Couverture | Idéal pour |
|-------|-----------|------------|
| **Otterly AI** | ChatGPT, Perplexity, Google AI Overviews | Suivi de la part de voix IA |
| **Peec AI** | ChatGPT, Gemini, Perplexity, Claude, Copilot+ | Monitoring multi-plateforme à l'échelle |
| **ZipTie** | Google AI Overviews, ChatGPT, Perplexity | Suivi de mentions de marque + sentiment |
| **LLMrefs** | ChatGPT, Perplexity, AI Overviews, Gemini | Mapping mots-clés SEO → visibilité IA |

### Monitoring DIY (sans outils)

Vérification manuelle mensuelle :
1. Choisissez vos 20 requêtes principales
2. Passez chacune dans ChatGPT, Perplexity et Google
3. Notez : êtes-vous cité ? Qui l'est ? Quelle page ?
4. Consignez dans un tableur, suivez mois par mois

### À attendre de la Search Console

Le guide de Google est explicite : **il n'existe aucun rapport Search Console spécifique à l'IA**. Les AI Overviews et l'AI Mode utilisent le classement de la Recherche core — les rapports standard de la Search Console (Performance, Couverture, Core Web Vitals) restent donc vos mesures côté Google. Les outils tiers ci-dessus sont le seul moyen d'observer le comportement de citation IA multi-plateforme.

## Ce qu'il ne faut pas faire

Le guide de Google appelle explicitement ces erreurs — elles nuisent autant à la Recherche classique qu'aux fonctionnalités IA.

1. **Écrire un contenu séparé « pour l'IA »**. Le même contenu doit servir les humains et l'IA. Écrire des variantes ciblant les systèmes IA expose à la **politique de spam scaled content abuse** — ce sont les mots de Google.
2. **Découper les pages en fragments appâts à IA**. Le guide est direct : *« Ne découpez pas votre contenu en petits morceaux pour que l'IA le comprenne mieux. »* Restez sur une structure normale de paragraphes et titres.
3. **Générer à grande échelle pour manipuler le classement**. Le contenu généré par IA est acceptable *s'il* respecte les Search Essentials et les politiques anti-spam. Produire en masse des variantes maigres, non.
4. **Chercher des mentions inauthentiques**. Ne fabriquez pas de citations et ne spammez pas Reddit/Wikipédia en masse pour la visibilité IA. Participation réelle uniquement.
5. **Bloquer les crawlers IA si vous voulez être cité**. Bloquer GPTBot, PerplexityBot, ClaudeBot ou Google-Extended empêche littéralement ces moteurs de vous citer. Bloquez les crawlers d'entraînement (CCBot) si vous y êtes obligé, pas ceux qui cherchent et citent.
6. **Cacher le contenu principal derrière du JS qui ne s'affiche pas**. La Recherche core comme les agents IA doivent voir votre contenu ; un rendu JS-only perd les deux audiences.
7. **Négliger les fondamentaux E-E-A-T**. Identité des auteurs, expérience de première main, signaux d'expertise, sourcing transparent — le guide de Google s'appuie lourdement sur ces éléments pour les fonctionnalités IA.

## AI SEO par type de contenu

Pour les conseils tactiques sur les pages produit SaaS, le contenu de blog, les pages comparaison/alternatives, la documentation et le local/e-commerce (l'accent de Google sur Merchant Center + Business Profile), consultez [references/content-types.md](references/content-types.md).

## Erreurs courantes

- **Ignorer la recherche IA** — ~45 % des recherches Google affichent désormais des AI Overviews, et ChatGPT/Perplexity croissent vite
- **Traiter le SEO IA comme séparé du SEO** — le bon SEO classique est la fondation ; le SEO IA ajoute structure et autorité par-dessus
- **Écrire pour l'IA, pas pour les humains** — un contenu qui se lit comme écrit pour jouer un algorithme ne sera ni cité ni converti
- **Aucun signal de fraîcheur** — un contenu non daté perd contre un contenu daté car les systèmes IA pondèrent fortement la récence. Affichez la date de dernière mise à jour
- **Tout mettre derrière un formulaire** — l'IA ne peut pas accéder au contenu gated. Gardez ouvert votre contenu le plus autoritaire
- **Ignorer la présence tierce** — une mention Wikipédia peut rapporter plus de citations IA que votre propre blog
- **Pas de données structurées** — le schema markup donne aux systèmes IA un contexte structuré sur votre contenu
- **Bourrage de mots-clés** — à la différence du SEO classique où il est simplement inefficace, il réduit activement la visibilité IA de 10 % (étude GEO de Princeton)
- **Cacher le pricing derrière « contactez les ventes » ou des pages en JS** — les agents IA qui évaluent votre produit pour des acheteurs ne peuvent pas parser ce qu'ils ne peuvent pas lire. Ajoutez un fichier `/pricing.md`
- **Bloquer les robots IA** — si GPTBot, PerplexityBot ou ClaudeBot sont bloqués dans robots.txt, ces plateformes ne peuvent pas vous citer
- **Contenu générique sans données** — « Nous sommes les meilleurs » ne sera pas cité. « Nos clients constatent 3x d'amélioration sur [métrique] », oui
- **Oublier de mesurer** — on n'améliore pas ce qu'on ne mesure pas. Vérifiez la visibilité IA au minimum chaque mois

## Intégrations d'outils

Pour l'implémentation, consultez le [registre des outils](https://github.com/mbzadev/skills/blob/main/tools/REGISTRY.md).

| Outil | Utilisation |
|-------|-------------|
| `semrush` | Suivi des AI Overviews, recherche de mots-clés, analyse de gaps de contenu |
| `ahrefs` | Analyse de backlinks, explorateur de contenu, données AI Overviews |
| `gsc` | Données de performance Search Console, suivi des requêtes |
| `ga4` | Trafic de référents depuis les sources IA |

## Questions propres à la tâche

1. Quelles sont vos 10 à 20 requêtes les plus importantes ?
2. Avez-vous vérifié si des réponses IA existent aujourd'hui pour ces requêtes ?
3. Avez-vous des données structurées (schema markup) sur votre site ?
4. Quels types de contenu publiez-vous ? (Blog, documentation, comparatifs, etc.)
5. Des concurrents sont-ils cités par l'IA là où vous ne l'êtes pas ?
6. Avez-vous une page Wikipédia ou une présence sur les sites d'avis ?

## Skills liés

- `seo-audit` : pour les audits SEO techniques et on-page classiques
- `schema` : pour implémenter les données structurées qui aident l'IA à comprendre votre contenu
- `content-strategy` : pour planifier le contenu à créer
- `competitors` : pour construire des pages comparatives qui se font citer
- `programmatic-seo` : pour construire des pages SEO à grande échelle
- `copywriting` : pour écrire du contenu à la fois lisible par les humains et extractible par l'IA
