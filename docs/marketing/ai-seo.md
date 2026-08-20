## Ce qu’il fait

`ai-seo` rend un contenu découvrable, extractible et citable par les systèmes IA — Google AI Overviews, ChatGPT, Perplexity, Claude, Gemini, Copilot — avec pour objectif d’être cité comme source dans les réponses générées. Le SEO classique vous fait ranker ; celui-ci vous fait citer, ce qui change la mécanique : une page bien structurée peut être citée depuis la page 2 des résultats.

Sa contrainte définissante : il distingue ce que Google recommande officiellement (aucun markup spécial, pas de contenu séparé « pour l’IA », mêmes standards E-E-A-T que la Recherche classique) de ce que les moteurs non-Google récompensent réellement (structure extractible, `llms.txt`, fichiers lisibles par machine) — et superpose les seconds sans jamais contredire les premiers.

## Quand l’utiliser

Appelez `/ai-seo`, ou laissez Codex le sélectionner lorsqu’une tâche correspond.

Utilisez ce skill lorsque vous voulez optimiser du contenu pour les moteurs et assistants IA — « AI SEO », AEO, GEO, LLMO, AI Overviews, citations IA, visibilité IA, mentions par les LLM, `llms.txt`, « comment apparaître dans les réponses de ChatGPT », recherche zéro-clic. Pour un audit technique et on-page classique (crawl, indexation, core web vitals, hreflang), utilisez plutôt [seo-audit](https://aihero.dev/skills-seo-audit) ; pour implémenter les données structurées elles-mêmes, [schema](https://aihero.dev/skills-schema).

## Prérequis

Le skill lit le contexte product-marketing du projet (fichier `.agents/product-marketing.md`) avant de poser ses questions — il ne demande que ce que ce contexte ne couvre pas. Un minimum de force SEO classique (autorité de domaine, contenu indexable) sert de point de départ : le SEO IA s’appuie dessus, il ne le remplace pas.

## Les trois piliers

L’optimisation s’organise en trois étages complémentaires :

| Pilier | Mission | Levier typique |
|--------|---------|----------------|
| **Structure** | Rendre le contenu extractible | Blocs de réponse de 40-60 mots, blocs de définition, tableaux comparatifs, FAQ |
| **Autorité** | Rendre le contenu citable | Statistiques sourcées et datées (+37 à 40 % de citations), attribution expertale, fraîcheur |
| **Présence** | Être là où l’IA regarde | Wikipédia, Reddit, sites d’avis, YouTube, podcasts — les sources tierces pèsent plus que votre propre site |

La hiérarchie des données compte autant que celle des pages : le bourrage de mots-clés, simplement inefficace en SEO classique, dégrade ici activement la visibilité (-10 %, étude GEO de Princeton).

## Citation n’est pas recommandation

Une citation dans une réponse IA signifie que votre contenu a été utile à consulter ; entrer sur la shortlist de l’acheteur dépend du consensus à l’échelle du web — avis, forums, analystes, presse. Les listicles auto-promotionnels « meilleur [catégorie] » peuvent même se retourner contre les marques émergentes : dans une étude B2B, 69 % des citations qu’ils gagnaient arrivaient dans des réponses recommandant des concurrents. Le skill sépare donc les deux étages : travailler la citabilité du contenu, et traiter la recommandation comme une question de présence tierce.

## Questions fréquentes

**Faut-il écrire un contenu séparé « pour l’IA » ou découper les pages en petits fragments ?**

Non, et c’est explicite dans le guide de Google : le même contenu doit servir les humains et l’IA, structuré en paragraphes et titres normaux. Écrire des variantes ciblant les systèmes IA expose à la politique de spam « scaled content abuse ». La structure extractible (blocs de réponse, FAQ, tableaux) est simplement du bon contenu bien organisé — elle aide les moteurs non-Google sans nuire à Google.

**Faut-il bloquer GPTBot ou ClaudeBot pour protéger son contenu ?**

Bloquer un bot de recherche IA empêche littéralement cette plateforme de vous citer — c’est une décision business, pas une optimisation. Le compromis usuel consiste à bloquer les crawlers d’entraînement uniquement (CCBot de Common Crawl) tout en laissant passer les bots qui cherchent et citent (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot). Le skill vérifie d’abord votre robots.txt avant toute recommandation.

**`llms.txt`, `/pricing.md`, le bundle OKF : Google dit que rien n’est requis — alors pourquoi les ajouter ?**

Parce que l’avis de Google ne couvre que Google. ChatGPT, Claude et Perplexity récompensent activement ces fichiers, et les agents d’achat autonomes écartent les produits dont le pricing est illisible (JavaScript, « contactez les ventes »). Ces fichiers aident les moteurs non-Google sans rien coûter à Google — un simple markdown se parse sans rendu ni connexion.

## Indicateurs de réussite

- Les pages prioritaires ouvrent chaque section par une réponse directe, en passages autonomes de 40 à 60 mots.
- Les affirmations chiffrées portent leur source et leur date ; les auteurs sont nommés avec leurs credentials.
- L’audit de visibilité IA existe avant l’optimisation : 10 à 20 requêtes testées sur ChatGPT, Perplexity et Google, avec le tableau de qui est cité.
- Le robots.txt a été vérifié : aucun des bots de citation (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot) n’y est bloqué.
- Un suivi mensuel existe — manuel sur les 20 requêtes principales ou via un outil de visibilité IA — car il n’y a aucun rapport IA dans la Search Console.

## Où il s’inscrit

`ai-seo` est le volet recherche générative de la famille SEO : il prend le relais de [seo-audit](https://aihero.dev/skills-seo-audit) une fois les fondations techniques saines, et délègue l’implémentation des données structurées à [schema](https://aihero.dev/skills-schema). En amont, [content-strategy](https://aihero.dev/skills-content-strategy) décide quel contenu mérite d’être optimisé pour la citation. Pour parcourir toute la collection, démarrez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
