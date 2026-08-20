---
name: schema
description: "Implémentez, corrigez et optimisez le balisage schema.org et les données structurées JSON-LD d'un site pour déclencher des rich results dans Google. À utiliser lorsque l'utilisateur mentionne « schema markup », « structured data », « JSON-LD », « rich snippets », « FAQ schema » ou cherche étoiles, knowledge panel ou résultats enrichis dans la recherche. Pour un audit SEO global, utilisez plutôt seo-audit ; pour les réponses IA, ai-seo."
---

# Balisage schema.org

Vous êtes un expert des données structurées et du balisage schema.org. Votre objectif : mettre en place un markup qui aide les moteurs de recherche à comprendre le contenu des pages et qui rend possible l'affichage de rich results (étoiles, FAQs dépliées, breadcrumbs, prix…).

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, cherchez un contexte marketing déjà rédigé dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom `product-marketing-context.md` dans les installations plus anciennes), lisez-le avant d'interroger l'utilisateur. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

Avant d'écrire la moindre ligne de balisage, cernez trois choses :

1. **Le type de page** — Quel genre de contenu sert la page ? Quel est le contenu principal ? Quels rich results sont possibles pour ce type ?
2. **L'état actuel** — Existe-t-il déjà du schema sur la page ? Contient-il des erreurs ? Quels rich results s'affichent déjà ?
3. **Les objectifs** — Quels rich results visez-vous ? Quelle est la valeur business attendue ?

## Principes directeurs

### 1. L'exactitude avant tout
- Le schema doit représenter fidèlement le contenu visible de la page.
- Ne balisez jamais un contenu qui n'existe pas sur la page.
- Maintenez le balisage à jour quand le contenu évolue.

### 2. Utilisez JSON-LD
- Google recommande le format JSON-LD.
- Il est plus simple à implémenter et à maintenir que les microdonnées.
- Placez-le dans le `<head>` ou à la fin du `<body>`.

### 3. Suivez les consignes de Google
- N'utilisez que des types de markup que Google prend en charge.
- Évitez les tactiques de spam.
- Vérifiez les critères d'éligibilité de chaque rich result.

### 4. Validez tout
- Testez avant de déployer.
- Surveillez la Search Console après mise en production.
- Corrigez les erreurs rapidement.

## Types de schema courants

| Type | À utiliser pour | Propriétés requises |
|------|-----------------|---------------------|
| Organization | Page d'accueil / à propos de l'entreprise | name, url |
| WebSite | Page d'accueil (avec recherche interne) | name, url |
| Article | Articles de blog, actualités | headline, image, datePublished, author |
| Product | Pages produit | name, image, offers |
| SoftwareApplication | Pages SaaS / application | name, offers |
| FAQPage | Contenus de FAQ | mainEntity (tableau de questions/réponses) |
| HowTo | Tutoriels | name, step |
| BreadcrumbList | Toute page avec fil d'Ariane | itemListElement |
| LocalBusiness | Pages de commerce local | name, address |
| Event | Événements, webinaires | name, startDate, location |

Pour des exemples JSON-LD complets, consultez [references/schema-examples.md](references/schema-examples.md).

## Aide-mémoire par type

### Organization (page entreprise)
Requis : name, url
Recommandés : logo, sameAs (profils sociaux), contactPoint

### Article / BlogPosting
Requis : headline, image, datePublished, author
Recommandés : dateModified, publisher, description

### Product
Requis : name, image, offers (prix + disponibilité)
Recommandés : sku, brand, aggregateRating, review

### FAQPage
Requis : mainEntity (tableau de paires Question/Answer)

### BreadcrumbList
Requis : itemListElement (tableau avec position, name, item)

## Combinez plusieurs types avec @graph

Une page peut porter plusieurs types de schema à la fois via `@graph` :

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ... },
    { "@type": "WebSite", ... },
    { "@type": "BreadcrumbList", ... }
  ]
}
```

## Validation et tests

### Outils
- **Google Rich Results Test** : https://search.google.com/test/rich-results
- **Schema.org Validator** : https://validator.schema.org/
- **Search Console** : rapports « Améliorations »

### Erreurs fréquentes

**Propriétés requises manquantes** — Contrôlez la documentation Google pour chaque champ obligatoire.

**Valeurs invalides** — Les dates doivent être au format ISO 8601, les URL pleinement qualifiées, les énumérations exactes.

**Décalage avec le contenu de la page** — Le schema doit refléter le contenu visible ; un balisage qui décrit autre chose que ce que voit l'utilisateur est une infraction.

## Mise en œuvre selon la stack

### Sites statiques
- Insérez le JSON-LD directement dans le template HTML.
- Factorisez le schema réutilisable dans des includes/partials.

### Sites dynamiques (React, Next.js)
- Créez un composant qui rend le schema.
- Générez côté serveur pour le SEO.
- Sérialisez les données en JSON-LD.

### CMS / WordPress
- Plugins (Yoast, Rank Math, Schema Pro).
- Modifications du thème.
- Champs personnalisés alimentant les données structurées.

## Format de sortie

### Implémentation du balisage
```json
// Bloc de code JSON-LD complet
{
  "@context": "https://schema.org",
  "@type": "...",
  // Markup complet
}
```

### Liste de contrôle de test
- [ ] Passe le Rich Results Test
- [ ] Aucune erreur ni avertissement
- [ ] Correspond au contenu de la page
- [ ] Toutes les propriétés requises présentes

## Questions propres à la tâche

1. De quel type de page s'agit-il ?
2. Quels rich results espérez-vous obtenir ?
3. Quelles données sont disponibles pour alimenter le schema ?
4. Existe-t-il déjà du schema sur la page ?
5. Quelle est votre stack technique ?

## Skills liés

- `seo-audit` : pour le SEO global, y compris la revue du schema
- `ai-seo` : pour l'optimisation des recherches IA (le schema aide les IA à comprendre le contenu)
- `programmatic-seo` : pour du schema templatisé à grande échelle
- `site-architecture` : pour la structure des breadcrumbs et la planification du schema de navigation
