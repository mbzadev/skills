---
name: site-architecture
description: "Planifiez la structure d'un site : hiérarchie des pages, navigation, URL et maillage interne. À utiliser lorsque l'utilisateur parle de plan de site, de sitemap visuel, de structure de site, de hiérarchie de pages, d'architecture de l'information, de design de navigation ou de breadcrumbs, ou demande de quelles pages il a besoin et comment organiser son site. Sitemaps XML et audit SEO technique : seo-audit ; données structurées : schema."
---

# Architecture de site

Vous êtes un expert en architecture de l'information. Votre objectif : aider à planifier la structure d'un site — hiérarchie des pages, navigation, patterns d'URL et maillage interne — pour qu'il soit intuitif pour les utilisateurs et optimisé pour les moteurs de recherche.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, vérifiez si le projet contient un fichier de contexte product-marketing : `.agents/product-marketing.md` (ou `.claude/product-marketing.md`, ou l'ancien nom `product-marketing-context.md` dans les configurations plus anciennes). Si oui, lisez-le avant toute chose et exploitez ce contexte ; ne demandez à l'utilisateur que les informations qui n'y figurent pas ou celles spécifiques à cette tâche.

Réunissez ensuite ces éléments (demandez-les s'ils ne sont pas fournis) :

### 1. Contexte business
- Que fait l'entreprise ?
- Qui sont les audiences principales ?
- Quels sont les 3 objectifs principaux du site ? (conversion, trafic SEO, pédagogie, support)

### 2. État actuel
- Nouveau site ou restructuration d'un site existant ?
- Si restructuration : qu'est-ce qui cloche ? (taux de rebond élevé, mauvais SEO, utilisateurs qui ne trouvent rien)
- URL existantes à préserver (pour les redirections) ?

### 3. Type de site
- Site marketing SaaS
- Site de contenu / blog
- E-commerce
- Documentation
- Hybride (SaaS + contenu)
- Petite entreprise / commerce local

### 4. Inventaire du contenu
- Combien de pages existent ou sont prévues ?
- Quelles sont les pages les plus importantes ? (par trafic, conversion ou valeur business)
- Des sections ou extensions prévues ?

## Types de sites et points de départ

| Type de site | Profondeur typique | Sections clés | Pattern d'URL |
|--------------|-------------------|---------------|---------------|
| Marketing SaaS | 2-3 niveaux | Accueil, Fonctionnalités, Pricing, Blog, Docs | `/features/nom`, `/blog/slug` |
| Contenu / blog | 2-3 niveaux | Accueil, Blog, Catégories, À propos | `/blog/slug`, `/category/slug` |
| E-commerce | 3-4 niveaux | Accueil, Catégories, Produits, Panier | `/categorie/sous-categorie/produit` |
| Documentation | 3-4 niveaux | Accueil, Guides, Référence API | `/docs/section/page` |
| Hybride SaaS + contenu | 3-4 niveaux | Accueil, Produit, Blog, Ressources, Docs | `/product/feature`, `/blog/slug` |
| Petite entreprise | 1-2 niveaux | Accueil, Services, À propos, Contact | `/services/nom` |

**Pour les templates complets de hiérarchie de pages** : consultez [references/site-type-templates.md](references/site-type-templates.md)

## Conception de la hiérarchie des pages

### La règle des 3 clics

Un utilisateur doit atteindre toute page importante en 3 clics depuis l'accueil. Ce n'est pas absolu, mais si des pages critiques sont enterrées à 4 niveaux ou plus, quelque chose ne va pas.

### Plat contre profond

| Approche | Adapté à | Compromis |
|----------|----------|-----------|
| Plat (2 niveaux) | Petits sites, portfolios | Simple mais ne passe pas à l'échelle |
| Modéré (3 niveaux) | La plupart des sites SaaS, contenu | Bon équilibre profondeur / trouvabilité |
| Profond (4+ niveaux) | E-commerce, grandes docs | Passe à l'échelle mais risque d'enterrer le contenu |

**Règle empirique** : restez aussi plat que possible tout en gardant une navigation propre. Si un menu déroulant compte plus de 20 éléments, ajoutez un niveau de hiérarchie.

### Les niveaux de hiérarchie

| Niveau | Définition | Exemple |
|--------|-----------|---------|
| L0 | Page d'accueil | `/` |
| L1 | Sections principales | `/features`, `/blog`, `/pricing` |
| L2 | Pages de section | `/features/analytics`, `/blog/seo-guide` |
| L3+ | Pages de détail | `/docs/api/authentication` |

### Le format arbre ASCII

Utilisez ce format pour les hiérarchies de pages :

```
Accueil (/)
├── Fonctionnalités (/features)
│   ├── Analytics (/features/analytics)
│   ├── Automation (/features/automation)
│   └── Intégrations (/features/integrations)
├── Pricing (/pricing)
├── Blog (/blog)
│   ├── [Catégorie : SEO] (/blog/category/seo)
│   └── [Catégorie : CRO] (/blog/category/cro)
├── Ressources (/resources)
│   ├── Études de cas (/resources/case-studies)
│   └── Templates (/resources/templates)
├── Docs (/docs)
│   ├── Premiers pas (/docs/getting-started)
│   └── Référence API (/docs/api)
├── À propos (/about)
│   └── Carrières (/about/careers)
└── Contact (/contact)
```

**Quand utiliser ASCII contre Mermaid** :
- ASCII : drafts rapides de hiérarchie, contextes texte seul, structures simples
- Mermaid : présentations visuelles, relations complexes, montrer des zones de navigation ou des patterns de maillage

## Conception de la navigation

### Types de navigation

| Type de nav | Rôle | Emplacement |
|-------------|------|-------------|
| Nav d'en-tête | Navigation principale, toujours visible | En haut de chaque page |
| Menus déroulants | Regrouper les sous-pages sous leur parent | Se déploie depuis les items d'en-tête |
| Nav de pied de page | Liens secondaires, légal, sitemap | En bas de chaque page |
| Nav latérale | Navigation de section (docs, blog) | À gauche au sein d'une section |
| Breadcrumbs | Situer la page courante dans la hiérarchie | Sous l'en-tête, au-dessus du contenu |
| Liens contextuels | Contenu lié, étapes suivantes | Dans le corps de la page |

### Règles de navigation d'en-tête

- **4 à 7 éléments maximum** dans la nav principale (au-delà, paralysie décisionnelle)
- **Le bouton CTA** se place à l'extrême droite (ex. « Essai gratuit », « Commencer »)
- **Le logo** pointe vers l'accueil (à gauche)
- **Ordonnez par priorité** : les pages les plus importantes / visitées d'abord
- En cas de mega menu, limitez-vous à 3-4 colonnes

### Organisation du pied de page

Regroupez les liens de footer en colonnes :
- **Produit** : Fonctionnalités, Pricing, Intégrations, Changelog
- **Ressources** : Blog, Études de cas, Templates, Docs
- **Entreprise** : À propos, Carrières, Contact, Presse
- **Légal** : Confidentialité, CGU, Sécurité

### Format des breadcrumbs

```
Accueil > Fonctionnalités > Analytics
Accueil > Blog > Catégorie SEO > Titre de l'article
```

Les breadcrumbs doivent refléter la hiérarchie des URL. Chaque segment du breadcrumb doit être un lien cliquable, sauf la page courante.

**Pour les patterns de navigation détaillés** : consultez [references/navigation-patterns.md](references/navigation-patterns.md)

## Structure des URL

### Principes de conception

1. **Lisible par les humains** — `/features/analytics` plutôt que `/f/a123`
2. **Des tirets, pas de underscores** — `/blog/seo-guide` plutôt que `/blog/seo_guide`
3. **Reflette la hiérarchie** — le chemin doit suivre la structure du site
4. **Politique de slash de fin cohérente** — choisissez (avec ou sans) et imposez-la partout
5. **Toujours en minuscules** — `/About` doit rediriger vers `/about`
6. **Court mais descriptif** — `/blog/how-to-improve-landing-page-conversion-rates` est trop long ; `/blog/landing-page-conversions` est mieux

### Patterns d'URL par type de page

| Type de page | Pattern | Exemple |
|--------------|---------|---------|
| Accueil | `/` | `example.com` |
| Page fonctionnalité | `/features/{nom}` | `/features/analytics` |
| Pricing | `/pricing` | `/pricing` |
| Article de blog | `/blog/{slug}` | `/blog/seo-guide` |
| Catégorie de blog | `/blog/category/{slug}` | `/blog/category/seo` |
| Étude de cas | `/customers/{slug}` | `/customers/acme-corp` |
| Documentation | `/docs/{section}/{page}` | `/docs/api/authentication` |
| Légal | `/{page}` | `/privacy`, `/terms` |
| Landing page | `/{slug}` ou `/lp/{slug}` | `/free-trial`, `/lp/webinar` |
| Comparaison | `/compare/{concurrent}` ou `/vs/{concurrent}` | `/compare/nom-du-concurrent` |
| Intégration | `/integrations/{nom}` | `/integrations/slack` |
| Template | `/templates/{slug}` | `/templates/marketing-plan` |

### Erreurs courantes

- **Des dates dans les URL de blog** — `/blog/2024/01/15/titre` n'apporte rien et rallonge l'URL. Utilisez `/blog/titre`.
- **Sur-imbrication** — `/products/category/subcategory/item/detail` est trop profond. Aplatissez autant que possible.
- **Changer des URL sans redirections** — chaque ancienne URL doit recevoir une redirection 301 vers sa nouvelle URL. Sans elles, vous perdez le capital des backlinks et cassez les pages pour quiconque avait bookmarké ou linké l'ancienne URL.
- **Des ID dans les URL** — `/product/12345` n'est pas lisible. Utilisez des slugs.
- **Des paramètres de requête pour le contenu** — `/blog?id=123` devrait être `/blog/titre`.
- **Des patterns incohérents** — ne mélangez pas `/features/analytics` et `/product/automation`. Choisissez un parent.

### Alignement breadcrumb-URL

Le fil d'Ariane doit refléter le chemin de l'URL :

| URL | Breadcrumb |
|-----|-----------|
| `/features/analytics` | Accueil > Fonctionnalités > Analytics |
| `/blog/seo-guide` | Accueil > Blog > Guide SEO |
| `/docs/api/auth` | Accueil > Docs > API > Authentication |

## Plan de site visuel (Mermaid)

Utilisez Mermaid `graph TD` pour les sitemaps visuels. Les relations de hiérarchie y sont claires et vous pouvez annoter les zones de navigation.

### Hiérarchie de base

```mermaid
graph TD
    HOME[Accueil] --> FEAT[Fonctionnalités]
    HOME --> PRICE[Pricing]
    HOME --> BLOG[Blog]
    HOME --> ABOUT[À propos]

    FEAT --> F1[Analytics]
    FEAT --> F2[Automation]
    FEAT --> F3[Intégrations]

    BLOG --> B1[Article 1]
    BLOG --> B2[Article 2]
```

### Avec zones de navigation

```mermaid
graph TD
    subgraph Nav d'en-tête
        HOME[Accueil]
        FEAT[Fonctionnalités]
        PRICE[Pricing]
        BLOG[Blog]
        CTA[Commencer]
    end

    subgraph Nav de pied de page
        ABOUT[À propos]
        CAREERS[Carrières]
        CONTACT[Contact]
        PRIVACY[Confidentialité]
    end

    HOME --> FEAT
    HOME --> PRICE
    HOME --> BLOG
    HOME --> ABOUT

    FEAT --> F1[Analytics]
    FEAT --> F2[Automation]
```

**Pour plus de templates Mermaid** : consultez [references/mermaid-templates.md](references/mermaid-templates.md)

## Stratégie de maillage interne

### Types de liens

| Type | Rôle | Exemple |
|------|------|---------|
| Navigationnel | Passer d'une section à l'autre | Liens d'en-tête, footer, sidebar |
| Contextuel | Contenu lié dans le texte | « En savoir plus sur [analytics](/features/analytics) » |
| Hub and spoke | Relier le contenu d'un cluster à son hub | Articles de blog pointant vers la page pilier |
| Inter-sections | Relier des pages parentes de sections différentes | Page fonctionnalité pointant vers une étude de cas liée |

### Règles de maillage interne

1. **Aucune page orpheline** — chaque page doit recevoir au moins un lien interne
2. **Ancres descriptives** — « nos fonctionnalités analytics » plutôt que « cliquez ici »
3. **5 à 10 liens internes pour 1 000 mots** de contenu (repère approximatif)
4. **Linktez plus souvent les pages importantes** — accueil, pages fonctionnalités clés, pricing
5. **Utilisez les breadcrumbs** — des liens internes gratuits sur chaque page
6. **Sections de contenu lié** — « Articles liés » ou « Vous aimerez aussi » en bas de page

### Le modèle hub and spoke

Pour les sites riches en contenu, organisez autour de pages hubs :

```
Hub : /blog/seo-guide (vue d'ensemble exhaustive)
├── Spoke : /blog/keyword-research (renvoie vers le hub)
├── Spoke : /blog/on-page-seo (renvoie vers le hub)
├── Spoke : /blog/technical-seo (renvoie vers le hub)
└── Spoke : /blog/link-building (renvoie vers le hub)
```

Chaque spoke renvoie vers le hub. Le hub pointe vers tous les spokes. Les spokes se relient entre eux quand c'est pertinent.

### Checklist d'audit du maillage

- [ ] Chaque page reçoit au moins un lien interne entrant
- [ ] Aucun lien interne cassé (404)
- [ ] Les ancres sont descriptives (pas « cliquez ici » ni « en savoir plus »)
- [ ] Les pages importantes concentrent le plus de liens entrants
- [ ] Les breadcrumbs sont implémentés sur toutes les pages
- [ ] Les articles de blog proposent du contenu lié
- [ ] Les liens inter-sections relient fonctionnalités et études de cas, blog et pages produit

## Format de sortie

Quand vous produisez un plan d'architecture de site, livrez ces éléments :

### 1. Hiérarchie des pages (arbre ASCII)
Structure complète du site avec les URL à chaque nœud. Utilisez le format arbre ASCII de la section Conception de la hiérarchie.

### 2. Sitemap visuel (Mermaid)
Diagramme Mermaid montrant les relations entre pages et les zones de navigation. Utilisez `graph TD` avec des subgraphs pour les zones de nav quand c'est utile.

### 3. Table de mapping des URL

| Page | URL | Parent | Emplacement nav | Priorité |
|------|-----|--------|-----------------|----------|
| Accueil | `/` | — | En-tête | Haute |
| Fonctionnalités | `/features` | Accueil | En-tête | Haute |
| Analytics | `/features/analytics` | Fonctionnalités | Dropdown en-tête | Moyenne |
| Pricing | `/pricing` | Accueil | En-tête | Haute |
| Blog | `/blog` | Accueil | En-tête | Moyenne |

### 4. Spécification de navigation
- Items de la nav d'en-tête (ordonnés, avec CTA)
- Sections et liens du footer
- Nav latérale (le cas échéant)
- Notes d'implémentation des breadcrumbs

### 5. Plan de maillage interne
- Pages hubs et leurs spokes
- Opportunités de liens inter-sections
- Audit des pages orphelines (si restructuration)
- Liens recommandés par page clé

## Questions propres à la tâche

1. Nouveau site ou restructuration d'un site existant ?
2. Quel type de site ? (SaaS, contenu, e-commerce, docs, hybride, petite entreprise)
3. Combien de pages existent ou sont prévues ?
4. Quelles sont les 5 pages les plus importantes du site ?
5. Des URL existantes doivent-elles être préservées ou redirigées ?
6. Qui sont les audiences principales, et que cherchent-elles à accomplir sur le site ?

## Skills liés

- `content-strategy` : pour planifier le contenu à créer et les clusters thématiques
- `programmatic-seo` : pour construire des pages SEO à grande échelle avec templates et données
- `seo-audit` : pour le SEO technique, l'optimisation on-page et les problèmes d'indexation
- `cro` : pour optimiser des pages individuelles pour la conversion
- `schema` : pour implémenter les données structurées breadcrumb et site navigation
- `competitors` : pour les frameworks de pages comparatives et les patterns d'URL
