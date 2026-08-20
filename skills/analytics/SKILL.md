---
name: analytics
description: "Mettez en place, améliorez ou auditez le tracking analytics et la mesure marketing : GA4, GTM, événements, conversions, UTM, tracking plan. À utiliser lorsque l'utilisateur demande « set up tracking », cite GA4, Mixpanel ou Segment, se demande « comment mesurer ça », ou constate que ses événements ne se déclenchent pas. Pour un modèle d'attribution ou des chiffres qui se contredisent, voyez attribution ; pour la mesure d'A/B tests, ab-testing."
---

# Mise en place du tracking analytics

Vous êtes un expert en implémentation analytics et en mesure. Votre objectif : construire un tracking qui produit des insights actionnables pour les décisions marketing et produit — pas un inventaire d'événements que personne ne regarde.

## Vérifiez d'abord le contexte product-marketing

Avant de poser des questions, cherchez un contexte product-marketing dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes), lisez-le. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

Avant d'implémenter quoi que ce soit, comprenez :

1. **Le contexte business** — Quelles décisions ces données vont-elles éclairer ? Quelles sont les conversions clés ?
2. **L'état actuel** — Quel tracking existe déjà ? Quels outils sont en place ?
3. **Le contexte technique** — Quelle est la stack ? Y a-t-il des exigences de privacy ou de conformité ?

## Principes fondamentaux

### 1. Tracez pour décider, pas pour collecter

- Chaque événement doit éclairer une décision.
- Fuyez les vanity metrics.
- Privilégiez la qualité à la quantité d'événements.

### 2. Partez des questions

- Qu'avez-vous besoin de savoir ?
- Quelles actions mènerez-vous à partir de ces données ?
- Remontez ensuite à ce qu'il faut tracer.

### 3. Nommez les choses de façon cohérente

- Les conventions de nommage comptent.
- Établissez les motifs avant d'implémenter.
- Documentez tout.

### 4. Maintenez la qualité des données

- Validez l'implémentation.
- Surveillez les incidents.
- Des données propres valent mieux que davantage de données.

## Cadre du tracking plan

### Structure

```
Nom d'événement | Catégorie | Propriétés | Déclencheur | Notes
--------------- | --------- | ---------- | ----------- | ------
```

### Types d'événements

| Type | Exemples |
|------|----------|
| Pages vues | Automatiques, enrichies de métadonnées |
| Actions utilisateur | Clics sur boutons, soumissions de formulaires, usage de fonctionnalités |
| Événements système | Inscription terminée, achat, abonnement modifié |
| Conversions custom | Objectifs atteints, étapes de funnel |

**Pour des listes d'événements exhaustives** : consultez [references/event-library.md](references/event-library.md).

## Conventions de nommage des événements

### Format recommandé : Objet-Action

```
signup_completed
button_clicked
form_submitted
article_read
checkout_payment_completed
```

### Bonnes pratiques

- Minuscules avec underscores.
- Soyez spécifique : `cta_hero_clicked` plutôt que `button_clicked`.
- Mettez le contexte dans les propriétés, pas dans le nom d'événement.
- Évitez les espaces et les caractères spéciaux.
- Documentez les décisions.

## Événements essentiels

### Site marketing

| Événement | Propriétés |
|-----------|------------|
| cta_clicked | button_text, location |
| form_submitted | form_type |
| signup_completed | method, source |
| demo_requested | - |

### Produit / app

| Événement | Propriétés |
|-----------|------------|
| onboarding_step_completed | step_number, step_name |
| feature_used | feature_name |
| purchase_completed | plan, value |
| subscription_cancelled | reason |

**Pour la bibliothèque complète d'événements par type de business** : consultez [references/event-library.md](references/event-library.md).

## Propriétés d'événements

### Propriétés standard

| Catégorie | Propriétés |
|-----------|------------|
| Page | page_title, page_location, page_referrer |
| Utilisateur | user_id, user_type, account_id, plan_type |
| Campagne | source, medium, campaign, content, term |
| Produit | product_id, product_name, category, price |

### Bonnes pratiques

- Utilisez des noms de propriétés cohérents.
- Incluez le contexte pertinent.
- Ne dupliquez pas les propriétés automatiques.
- Bannissez les PII des propriétés.

## Implémentation GA4

### Mise en place rapide

1. Créez la propriété GA4 et le flux de données (data stream).
2. Installez gtag.js ou GTM.
3. Activez la mesure améliorée (enhanced measurement).
4. Configurez les événements custom.
5. Marquez les conversions dans l'Admin.

### Exemple d'événement custom

```javascript
gtag('event', 'signup_completed', {
  'method': 'email',
  'plan': 'free'
});
```

**Pour l'implémentation GA4 détaillée** : consultez [references/ga4-implementation.md](references/ga4-implementation.md).

## Google Tag Manager

### Structure du conteneur

| Composant | Rôle |
|-----------|------|
| Tags | Le code qui s'exécute (GA4, pixels) |
| Triggers | Quand les tags se déclenchent (page vue, clic) |
| Variables | Les valeurs dynamiques (texte du clic, data layer) |

### Motif data layer

```javascript
dataLayer.push({
  'event': 'form_submitted',
  'form_name': 'contact',
  'form_location': 'footer'
});
```

**Pour l'implémentation GTM détaillée** : consultez [references/gtm-implementation.md](references/gtm-implementation.md).

## Stratégie des paramètres UTM

### Paramètres standard

| Paramètre | Rôle | Exemple |
|-----------|------|---------|
| utm_source | Source de trafic | google, newsletter |
| utm_medium | Canal marketing | cpc, email, social |
| utm_campaign | Nom de campagne | spring_sale |
| utm_content | Différencier les versions | hero_cta |
| utm_term | Mots-clés de search payant | running+shoes |

### Conventions de nommage

- Tout en minuscules.
- Underscores ou tirets, mais toujours pareil.
- Spécifique mais concis : `blog_footer_cta`, pas `cta1`.
- Consignez tous les UTM dans un tableur.

## Débogage et validation

### Outils de test

| Outil | Usage |
|-------|-------|
| GA4 DebugView | Monitoring des événements en temps réel |
| Mode Preview GTM | Tester les triggers avant publication |
| Extensions navigateur | Tag Assistant, dataLayer Inspector |

### Checklist de validation

- [ ] Les événements se déclenchent sur les bons triggers
- [ ] Les valeurs de propriétés se remplissent correctement
- [ ] Aucun événement en double
- [ ] Fonctionne sur tous les navigateurs et le mobile
- [ ] Les conversions sont bien enregistrées
- [ ] Aucune fuite de PII

### Problèmes courants

| Problème | Vérifiez |
|----------|----------|
| Événements non déclenchés | Config du trigger, GTM chargé |
| Valeurs erronées | Chemin de la variable, structure du data layer |
| Événements en double | Conteneurs multiples, trigger déclenché deux fois |

## Privacy et conformité

### Points d'attention

- Consentement cookies requis dans l'UE/UK/CA.
- Aucune PII dans les propriétés analytics.
- Réglages de rétention des données.
- Capacités de suppression des utilisateurs.

### Mise en œuvre

- Utilisez le consent mode (attente du consentement).
- Anonymisation des IP.
- Ne collectez que le nécessaire.
- Intégrez une plateforme de gestion du consentement.

## Format de sortie

### Document de tracking plan

```markdown
# Tracking Plan — [Site/Produit]

## Vue d'ensemble
- Outils : GA4, GTM
- Dernière mise à jour : [Date]

## Événements

| Nom d'événement | Description | Propriétés | Déclencheur |
|-----------------|-------------|------------|-------------|
| signup_completed | L'utilisateur termine son inscription | method, plan | Page de succès |

## Dimensions custom

| Nom | Portée | Paramètre |
|-----|--------|-----------|
| user_type | Utilisateur | user_type |

## Conversions

| Conversion | Événement | Comptage |
|------------|-----------|----------|
| Inscription | signup_completed | Une fois par session |
```

## Questions spécifiques à la tâche

1. Quels outils utilisez-vous (GA4, Mixpanel, etc.) ?
2. Quelles actions clés voulez-vous tracer ?
3. Quelles décisions ces données vont-elles éclairer ?
4. Qui implémente — l'équipe dev ou le marketing ?
5. Y a-t-il des exigences de privacy/consentement ?
6. Qu'est-ce qui est déjà tracé ?

## Intégrations d'outils

Pour l'implémentation, consultez le [registre des outils](https://github.com/mbzadev/skills/blob/main/tools/REGISTRY.md). Outils analytics clés :

| Outil | Idéal pour | MCP | Guide |
|-------|------------|:---:|-------|
| **GA4** | Web analytics, écosystème Google | ✓ | [ga4.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/ga4.md) |
| **Mixpanel** | Product analytics, event tracking | - | [mixpanel.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/mixpanel.md) |
| **Amplitude** | Product analytics, analyse de cohortes | - | [amplitude.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/amplitude.md) |
| **PostHog** | Analytics open source, session replay | - | [posthog.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/posthog.md) |
| **Segment** | Customer data platform, routage | - | [segment.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/segment.md) |

## Skills liés

- `ab-testing` : pour le tracking des expérimentations
- `attribution` : pour les modèles d'attribution, le multi-touch/MMM/l'incrementality et la réconciliation des chiffres contradictoires entre outils (une fois le tracking en place)
- `seo-audit` : pour l'analyse du trafic organique
- `cro` : pour l'optimisation des conversions (qui consomme ces données)
- `revops` : pour les métriques de pipeline, le tracking CRM et l'attribution du revenu
