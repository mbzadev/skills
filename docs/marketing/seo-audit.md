## Ce qu’il fait

`seo-audit` diagnostique les problèmes SEO d’un site et produit des recommandations actionnables pour améliorer ses performances en recherche organique. L’audit suit un ordre de priorité fixe — crawlabilité et indexation d’abord, fondations techniques, on-page, qualité du contenu, autorité et liens ensuite — parce qu’un problème d’indexation rend caduque toute optimisation en aval.

Sa contrainte définissante : il ne tire jamais de constat sur le schema markup depuis un simple fetch du HTML. De nombreux CMS injectent le JSON-LD en JavaScript, invisible pour `web_fetch` et `curl` ; le skill exige une vérification par navigateur, Rich Results Test ou Screaming Frog avant de déclarer un schema manquant, faute de quoi l’audit produirait des conclusions fausses.

## Quand l’utiliser

Appelez `/seo-audit`, ou laissez Codex le sélectionner lorsqu’une tâche correspond.

Utilisez ce skill lorsque vous voulez auditer, examiner ou diagnostiquer le SEO d’un site — « audit SEO », « SEO technique », « pourquoi je ne rank pas », chute de trafic, mise à jour Google subie, erreurs de crawl, problèmes d’indexation, revue des balises meta ou des core web vitals. Une demande vague comme « mon SEO est mauvais » suffit : commencez par un audit. Pour construire des pages SEO à grande échelle avec des templates et des données, utilisez plutôt [programmatic-seo](https://aihero.dev/skills-programmatic-seo) ; pour être cité par les moteurs de recherche IA (ChatGPT, Perplexity, AI Overviews), utilisez plutôt [ai-seo](https://aihero.dev/skills-ai-seo) ; pour l’implémentation de données structurées, [schema](https://aihero.dev/skills-schema).

## Prérequis

Le skill lit le contexte product-marketing du projet (fichier `.agents/product-marketing.md`) avant de poser des questions, et ne demande que ce que ce contexte ne couvre pas — ce mécanisme est central à toute la collection marketing. L’accès à la Search Console et aux analytics n’est pas obligatoire mais rend l’audit nettement plus précis.

## L’ordre de priorité

L’audit descend une pile de cinq étages, dans cet ordre :

1. **Crawlabilité et indexation** — Google peut-il trouver et indexer le site ?
2. **Fondations techniques** — le site est-il rapide et fonctionnel ?
3. **Optimisation on-page** — le contenu est-il optimisé ?
4. **Qualité du contenu** — mérite-t-il de ranker ?
5. **Autorité et liens** — a-t-il de la crédibilité ?

Un site non crawlable rend inutile le reste de la pile ; c’est pourquoi l’ordre compte autant que les constats eux-mêmes. Le périmètre s’adapte au type de site : SaaS, e-commerce, blog, multilingue (hreflang, canonical inter-locale, sitemaps internationaux) et commerce local ont chacun leur liste de problèmes caractéristiques.

## Le rapport produit

Le rapport final se présente en quatre blocs : une synthèse exécutive (santé globale, 3 à 5 problèmes prioritaires, quick wins), les constats techniques, on-page et de contenu dans un format uniforme — problème, impact, preuve, correction, priorité — puis un plan d’action ordonné des corrections critiques aux recommandations de long terme. Chaque constat s’appuie sur une preuve observable, jamais sur une impression.

## Questions fréquentes

**Mon trafic a chuté après une mise à jour Google. Par où commencer ?**

Par la couche indexation : état `site:`, rapport de couverture de la Search Console, comparaison entre l’indexé et l’attendu. Une chute post-mise à jour vient souvent d’un problème de qualité de contenu ou de thin content à l’échelle du site plutôt que d’un détail technique isolé ; l’ordre de priorité du skill amène naturellement à examiner ces couches dans le bon sequence.

**L’audit dit « aucun schema trouvé » alors que Yoast/RankMath est installé. Lequel croire ?**

Ni l’un ni l’autre tant que la vérification n’a pas été refaite avec un outil qui exécute le JavaScript : navigateur avec `document.querySelectorAll('script[type="application/ld+json"]')`, Google Rich Results Test ou Screaming Frog. Les plugins SEO injectent souvent le JSON-LD côté client, invisible dans le HTML statique — c’est précisément le faux négatif que le skill est conçu pour éviter.

**Audit complet du site ou focus sur quelques pages ?**

Les deux sont légitimes : précisez le périmètre au lancement. Un audit complet traverse les cinq couches ; un focus page reste utile pour les corrections on-page (titles, headings, contenu, images, maillage interne) mais ne dira rien de la crawlabilité ou du crawl budget.

## Indicateurs de réussite

- Le rapport commence par une synthèse exécutive avec les 3 à 5 problèmes prioritaires et les quick wins identifiés.
- Chaque constat mentionne le problème, son impact, la preuve de sa découverte, une correction précise et une priorité.
- Le plan d’action final est ordonné : corrections critiques, améliorations à fort impact, quick wins, long terme.
- Aucun constat « schema manquant » ne repose uniquement sur `web_fetch` ou `curl`.
- Les seuils chiffrés apparaissent dans les constats techniques (LCP < 2,5 s, INP < 200 ms, CLS < 0,1, titles 50-60 caractères, meta descriptions 150-160 caractères).

## Où il s’inscrit

`seo-audit` est l’outil de diagnostic de la famille SEO : on y entre avec un symptôme (« mon trafic a chuté », « je ne rank pas ») et on en sort avec un plan d'action priorisé. Il travaille en amont de [programmatic-seo](https://aihero.dev/skills-programmatic-seo), qui audite ses pages après leur lancement, et de façon complémentaire à [site-architecture](https://aihero.dev/skills-site-architecture), qui conçoit la hiérarchie de pages que l'audit vérifie ensuite. Pour naviguer toute la collection, démarrez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
