## Ce qu'il fait

`competitor-profiling` transforme une liste d'URLs de concurrents en dossiers de profil structurés : scraping des pages clés du site (positioning, pricing, fonctionnalités, avis G2/Capterra), métriques SEO et backlinks via DataForSEO, puis synthèse en forces, faiblesses et implications pour votre produit, plus une synthèse inter-concurrents.

Sa contrainte définissante : chaque affirmation doit remonter à une source, et toutes les données brutes sont persistées sur disque — dans `competitor-profiles/raw/<concurrent>/<date>/` — avant la synthèse, pour pouvoir être relue, auditée ou re-exécutée sans relancer les appels API. Les pages concurrentes sont traitées comme des données à analyser, jamais comme des instructions à suivre.

## Quand l'utiliser

Appelez `/competitor-profiling`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il s'agit de researcher, profiler ou analyser des concurrents à partir de leurs URLs : profil concurrent, analyse concurrentielle, competitive intelligence, deep dive ou paysage de marché. Pour transformer ces profils en pages de comparaison publiques, utilisez plutôt [competitors](https://aihero.dev/skills-competitors) ; pour les battle cards destinées aux commerciaux, [sales-enablement](https://aihero.dev/skills-sales-enablement).

## Prérequis

Le skill lit en premier un éventuel fichier `.agents/product-marketing.md` dans le projet pour situer votre produit face aux profils. Côté outillage, il s'appuie sur les outils MCP Firecrawl (scraping) et DataForSEO (métriques SEO), référencés dans son guide interne.

## Quick scan ou deep profile

Deux profondeurs commandent toute la recherche. Le quick scan — homepage et pricing uniquement, métriques SEO de synthèse — est le défaut ; le deep profile ajoute tous les sites d'avis, l'analyse complète des backlinks et la découverte de concurrents organiques. Il se justifie sur demande explicite ou quand la liste compte trois concurrents ou moins.

## Des instantanés datés, comparables entre eux

Tous les profils suivent le même template — En un coup d'œil, Positioning, Produit, Pricing, Preuve sociale, SEO, Forces/faiblesses, Implications — pour rester comparables côte à côte, quitte à sacrifier l'exhaustivité d'un profil isolé. Chaque profil porte sa date de génération, signale ce qui semble périmé, et une mise à jour note ses changements dans un Change Log plutôt qu'en écrasant l'historique.

## Questions fréquentes

**Faut-il profiler tous les concurrents d'un coup ?**

Non. Au-delà d'une dizaine, le skill propose de commencer par le top 5, choisi sur le recouvrement de domaines ou la similarité de marché. Le scraping se parallélise par type de page, et la synthèse inter-concurrents se construit en dernier.

**Que faire des affirmations invérifiables d'un site concurrent ?**

Le principe est le croisement : si un concurrent affiche « 10 000 clients », le profil confronte ce chiffre à son profil de trafic et de backlinks. Ce qui reste une inférence est étiqueté comme telle — un profil exact prime sur un profil flatteur.

**À quelle fréquence mettre à jour les profils ?**

En priorité les pages pricing, les plus volatiles, puis les métriques SEO qui bougent au mois, et le changelog pour la direction produit. Les données brutes de chaque exécution vivent dans un dossier daté distinct, ce qui permet de différencier les instantanés dans le temps.

## Indicateurs de réussite

- Un fichier markdown par concurrent apparaît sous `competitor-profiles/`, complété par un `_summary.md` comparatif.
- Les données brutes sont présentes sur disque (scrapes, JSON SEO, avis), rangées par concurrent et par date.
- Chaque force ou faiblesse citée dans un profil s'accompagne de sa source.
- Chaque profil affiche sa date de génération et son niveau de profondeur.
- La comparaison finale croise bien les mêmes métriques pour tous les concurrents.

## Où il s'inscrit

`competitor-profiling` est l'étage recherche de l'intelligence concurrentielle : il produit la matière première que les autres skills transforment. Il alimente [competitors](https://aihero.dev/skills-competitors) pour les pages de comparaison publiques et [sales-enablement](https://aihero.dev/skills-sales-enablement) pour les battle cards, là où [seo-audit](https://aihero.dev/skills-seo-audit) audit votre propre site face à ces mêmes concurrents. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
