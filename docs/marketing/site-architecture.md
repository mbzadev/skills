## Ce qu’il fait

`site-architecture` planifie la structure d’un site — hiérarchie des pages, navigation, patterns d’URL et maillage interne — pour qu’il soit intuitif pour les utilisateurs et optimisé pour les moteurs de recherche. Sa contrainte définissante : la structure se conçoit avant les pages ; le plan livré est un ensemble coordonné (arbre de hiérarchie, sitemap visuel Mermaid, table de mapping des URL, spécification de navigation, plan de maillage), pas une simple liste de pages.

## Quand l’utiliser

Appelez `/site-architecture`, ou laissez Codex le sélectionner lorsqu’une tâche correspond.

Utilisez ce skill lorsque vous planifiez quelles pages un site doit avoir et comment elles se relient — « plan de site », « sitemap visuel », « structure de site », hiérarchie de pages, architecture de l’information, design de navigation, structure des URL, breadcrumbs, « de quelles pages ai-je besoin », « comment organiser mon site ». Il ne traite pas des sitemaps XML ni du diagnostic technique : pour l’indexation, le crawl et l’audit SEO, utilisez plutôt [seo-audit](https://aihero.dev/skills-seo-audit).

## Prérequis

Le skill lit le contexte product-marketing du projet (fichier `.agents/product-marketing.md`) avant de poser ses questions : audiences, objectifs du site et pages les plus importantes orientent directement la hiérarchie. En cas de restructuration, l’inventaire des URL existantes est nécessaire pour planifier les redirections 301.

## Plat contre profond

La décision centrale est la profondeur de la hiérarchie, arbitrée par la règle des 3 clics — toute page importante atteignable en 3 clics depuis l’accueil :

| Approche | Adapté à | Compromis |
|----------|----------|-----------|
| Plat (2 niveaux) | Petits sites, portfolios | Simple mais ne passe pas à l’échelle |
| Modéré (3 niveaux) | La plupart des sites SaaS, contenu | Bon équilibre profondeur / trouvabilité |
| Profond (4+ niveaux) | E-commerce, grandes docs | Passe à l’échelle mais risque d’enterrer le contenu |

Le point de départ dépend du type de site (marketing SaaS, contenu, e-commerce, documentation, hybride, petite entreprise), chacun avec sa profondeur typique et ses patterns d’URL. Dans tous les cas : restez aussi plat que possible, et si un menu déroulant dépasse une vingtaine d’éléments, ajoutez un niveau.

## Aucune page orpheline

Le maillage interne est conçu en même temps que la hiérarchie, selon le modèle hub and spoke : chaque spoke renvoie à son hub, le hub couvre ses spokes, et les pages importantes (accueil, fonctionnalités clés, pricing) concentrent les liens entrants — avec des ancres descriptives et des breadcrumbs qui reflètent exactement le chemin d’URL. Une checklist d’audit vérifie qu’aucune page n’est orpheline, qu’aucun lien n’est cassé et que les sections communiquent entre elles.

## Questions fréquentes

**Faut-il mettre des dates dans les URL de blog ?**

Non : `/blog/2024/01/15/titre` n’apporte rien et rallonge l’URL ; `/blog/titre` suffit. Même logique pour les ID (`/product/12345`), les paramètres de requête (`/blog?id=123`) et les patterns incohérents — lisible, descriptif, un seul parent par type de page.

**Je restructure un site existant : comment ne pas perdre mon SEO ?**

Chaque ancienne URL doit recevoir une redirection 301 vers sa nouvelle URL — sans elles, le capital des backlinks est perdu et les liens bookmarkés cassent. C’est pourquoi le skill demande l’inventaire des URL à préserver dès le cadrage, et livre un plan de maillage qui inclut l’audit des pages orphelines.

**Arbre ASCII ou diagramme Mermaid pour présenter la structure ?**

Les deux font partie du format de sortie, pour des usages distincts : l’arbre ASCII pour les drafts rapides et les contextes texte seul, le diagramme Mermaid (`graph TD`) pour les présentations visuelles et l’annotation des zones de navigation (nav d’en-tête, footer).

## Indicateurs de réussite

- Le plan se compose des cinq livrables : arbre de hiérarchie avec URL, sitemap visuel Mermaid, table de mapping des URL, spécification de navigation, plan de maillage interne.
- Toute page importante est atteignable en 3 clics depuis l’accueil ; la nav principale compte 4 à 7 éléments avec le CTA à droite.
- Chaque breadcrumb reflète le chemin d’URL, chaque segment cliquable sauf la page courante.
- Aucune page orpheline : chaque page reçoit au moins un lien interne, les hubs relient leurs spokes.
- En restructuration, chaque ancienne URL a une redirection 301 documentée vers la nouvelle.

## Où il s’inscrit

`site-architecture` est l’étape de conception de la famille SEO : il définit le squelette sur lequel [programmatic-seo](https://aihero.dev/skills-programmatic-seo) génère ses pages à grande échelle et que [seo-audit](https://aihero.dev/skills-seo-audit) vérifie une fois le site en production. Pour parcourir toute la collection, démarrez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
