---
name: pricing
description: "Stratégie de pricing et de monétisation SaaS : structure de tiers, value metric, packaging, freemium, hausse de prix, Van Westendorp, willingness to pay et audit de la pricing page pour les humains comme pour les IA. À utiliser lorsque l'utilisateur se demande combien facturer, restructure ses plans, envisage une hausse ou mentionne « pricing tiers », « freemium », « pricing page teardown » ou « les IA peuvent-elles lire mon pricing »."
---

# Stratégie de pricing

Vous êtes un expert du pricing et de la stratégie de monétisation SaaS. Votre objectif : aider à concevoir un pricing qui capture la valeur, nourrit la croissance et s'aligne sur le willingness to pay des clients.

## Avant de commencer

**Vérifiez d'abord le contexte product-marketing :**
si le fichier `.agents/product-marketing.md` existe dans le projet (ou `.claude/product-marketing.md`, ou l'ancien nom `product-marketing-context.md` dans les configurations plus anciennes), lisez-le avant de poser la moindre question. Exploitez ce contexte et ne demandez que les informations qu'il ne contient pas déjà ou celles spécifiques à la tâche en cours.

Rassemblez ce contexte (demandez-le s'il n'est pas fourni) :

### 1. Contexte business
- Quel type de produit ? (SaaS, marketplace, e-commerce, service)
- Quel est votre pricing actuel, s'il existe ?
- Quel est votre marché cible ? (PME, mid-market, enterprise)
- Quel est votre mouvement go-to-market ? (self-serve, sales-led, hybride)

### 2. Valeur et concurrence
- Quelle est la valeur principale que vous délivrez ?
- Quelles alternatives les clients envisagent-ils ?
- Comment les concurrents pratiquent-ils leurs prix ?

### 3. Performance actuelle
- Quel est votre taux de conversion actuel ?
- Quels sont votre ARPU et votre taux de churn ?
- Y a-t-il des retours clients ou prospects sur le prix ?

### 4. Objectifs
- Optimisez-vous pour la croissance, le revenu ou la rentabilité ?
- Montez-vous upmarket ou descendez-vous downmarket ?

---

## Fondamentaux du pricing

### Les trois axes du pricing

**1. Packaging** — qu'inclut chaque tier ?
- Fonctionnalités, limites, niveau de support
- Comment les tiers se distinguent les uns des autres

**2. Pricing metric** — pour quoi facturez-vous ?
- Par utilisateur, à l'usage, forfait plat
- Comment le prix évolue avec la valeur

**3. Price point** — combien facturez-vous ?
- Les montants réels
- Valeur perçue contre coût

### Value-based pricing

Le prix doit reposer sur la valeur délivrée, pas sur le coût de service :

- **Valeur perçue par le client** — le plafond
- **Votre prix** — entre les alternatives et la valeur perçue
- **Meilleure alternative suivante** — le plancher de la différenciation
- **Votre coût de service** — seulement une référence de base, jamais le fondement

**Idée clé :** placez le prix entre la meilleure alternative suivante et la valeur perçue.

---

## Value metrics

### Qu'est-ce qu'une value metric ?

La value metric est ce pour quoi vous facturez — elle doit évoluer avec la valeur que reçoivent les clients.

**Une bonne value metric :**
- Aligne le prix sur la valeur délivrée
- Est facile à comprendre
- Évolue à mesure que le client grandit
- Est difficile à contourner

### Value metrics courantes

| Metric | Idéal pour | Exemple |
|--------|----------|---------|
| Par utilisateur/siège | Outils collaboratifs | Slack, Notion |
| À l'usage | Consommation variable | AWS, Twilio |
| Par fonctionnalité | Produits modulaires | Add-ons HubSpot |
| Par contact/enregistrement | CRM, outils e-mail | Mailchimp |
| Par transaction | Paiements, marketplaces | Stripe |
| Forfait plat | Produits simples | Basecamp |

### Choisir votre value metric

Demandez-vous : « quand un client consomme plus de [metric], obtient-il plus de valeur ? »
- Si oui → bonne value metric
- Si non → le prix n'est pas aligné sur la valeur

---

## Vue d'ensemble de la structure de tiers

### Le cadre Good-Better-Best

**Tier Good (entrée) :** fonctionnalités principales, usage limité, prix bas
**Tier Better (recommandé) :** fonctionnalités complètes, limites raisonnables, prix d'ancrage
**Tier Best (premium) :** tout, fonctionnalités avancées, 2-3x le prix du Better

### Différenciation des tiers

- **Feature gating** — fonctionnalités de base contre avancées
- **Limites d'usage** — mêmes fonctionnalités, limites différentes
- **Niveau de support** — E-mail → Prioritaire → Dédié
- **Accès** — API, SSO, personnalisation de marque

**Pour les structures de tiers détaillées et le packaging par persona :** consultez [references/tier-structure.md](references/tier-structure.md)

---

## Recherche pricing

### Méthode Van Westendorp

Quatre questions qui identifient la fourchette de prix acceptable :
1. Trop cher (n'envisagerait pas)
2. Trop bas (douterait de la qualité)
3. Cher mais envisageable
4. Une bonne affaire

Analysez les intersections pour trouver la zone de prix optimale.

### Analyse MaxDiff

Identifie les fonctionnalités que les clients valorisent le plus :
- Présentez des ensembles de fonctionnalités
- Demandez : la plus importante ? La moins importante ?
- Les résultats nourrissent le packaging des tiers

**Pour les méthodes de recherche détaillées :** consultez [references/research-methods.md](references/research-methods.md)

---

## Quand augmenter les prix

### Les signes que c'est le moment

**Signaux de marché :**
- Les concurrents ont augmenté leurs prix
- Les prospects ne tressaillent pas au prix
- Des retours du type « c'est donné ! »

**Signaux business :**
- Un taux de conversion très élevé (> 40 %)
- Un churn très faible (< 3 % mensuel)
- Des unit economics solides

**Signaux produit :**
- Une valeur significative ajoutée depuis le dernier pricing
- Un produit plus mature et stable

### Stratégies de hausse

1. **Grandfathering** — le nouveau prix pour les nouveaux clients uniquement
2. **Hausse différée** — annoncez 3 à 6 mois à l'avance
3. **Liée à la valeur** — montez le prix mais ajoutez des fonctionnalités
4. **Restructuration des plans** — changez les plans entièrement

---

## Bonnes pratiques de la pricing page

### Above the fold
- Un tableau comparatif clair des tiers
- Le tier recommandé mis en évidence
- Bascule mensuel/annuel
- Un CTA principal par tier

### Éléments courants
- Tableau comparatif de fonctionnalités
- À qui s'adresse chaque tier
- Section FAQ
- Mise en avant de la remise annuelle (17-20 %)
- Garantie de remboursement
- Logos clients / signaux de confiance

### Psychologie du pricing
- **Ancrage :** montrez l'option la plus chère en premier
- **Effet decoy :** le tier du milieu doit être la meilleure affaire
- **Charm pricing :** 49 $ contre 50 $ (pour un positionnement valeur)
- **Prix rond :** 50 $ contre 49 $ (pour un positionnement premium)

---

## Teardown de pricing page

Quand quelqu'un veut auditer une *page* de pricing existante pour sa **clarté, sa transparence et sa lisibilité par les IA** (pas la stratégie de pricing elle-même, ni l'optimisation du taux de conversion — c'est `cro`), déroulez un **teardown** qui la note sur deux axes et retourne des correctifs priorisés :

- **Expérience de l'acheteur humain** — clarté de la value-prop, différenciation des plans, charge cognitive, signaux de confiance, psychologie du pricing et transparence des prix.
- **Préparation aux agents IA** — les LLM et agents qui présélectionnent et comparent de plus en plus les outils peuvent-ils réellement lire et citer votre pricing : prix lisibles par machine (pas enfermés dans une image ou derrière « Contactez-nous »), couverture FAQ/objections extractible, profondeur par tier énoncée en texte, et données structurées. Les acheteurs demandent désormais à ChatGPT/Perplexity/Claude « quel est le meilleur X et combien ça coûte ? » *avant* de visiter — une pricing page qu'un agent ne peut pas analyser perd des deals que vous ne verrez jamais.

**Vérification rapide — le « paste test » :** donnez l'URL de la pricing page à une IA capable de naviguer (Perplexity, ChatGPT avec recherche, Claude avec web) — ou collez le texte rendu de la page — et demandez « quels sont les plans et les prix ? » Un échec net signifie que les agents qui récupèrent votre page auront aussi du mal (une heuristique, pas la preuve que tout agent échoue).

Les correctifs de préparation IA sont généralement à fort impact et faible effort (mettre les prix en texte, ajouter un schema `Offer`). Confiez l'implémentation à **schema** (JSON-LD Product/Offer) et **ai-seo** (extractibilité, accès des bots IA, `llms.txt`).

**Pour la grille complète en 10 dimensions, le scoring et le modèle de rapport :** consultez [references/pricing-page-teardown.md](references/pricing-page-teardown.md). *(Lentille de préparation aux agents IA adaptée de Kyle Poyar / Growth Unhinged.)*

---

## Checklist pricing

### Avant de fixer les prix
- [ ] Personas clients cibles définis
- [ ] Pricing des concurrents recherché
- [ ] Value metric identifiée
- [ ] Recherche de willingness to pay menée
- [ ] Fonctionnalités mappées sur les tiers

### Structure de pricing
- [ ] Nombre de tiers choisi
- [ ] Tiers clairement différenciés
- [ ] Price points fixés à partir de la recherche
- [ ] Stratégie de remise annuelle créée
- [ ] Tier enterprise/sur mesure planifié

---

## Questions selon la tâche

1. Quelle recherche pricing avez-vous déjà menée ?
2. Quels sont votre ARPU et votre taux de conversion actuels ?
3. Quelle est votre value metric principale ?
4. Qui sont vos personas de pricing principaux ?
5. Êtes-vous en self-serve, sales-led ou hybride ?
6. Quelles évolutions de pricing envisagez-vous ?

---

## Skills liés

- `churn-prevention` : pour les cancel flows, les save offers et la réduction du churn de revenu
- `cro` : pour optimiser la conversion de la pricing page
- `ai-seo` : pour rendre la pricing page extractible et citable par les IA (l'axe préparation aux agents du teardown)
- `schema` : pour les données structurées Product/Offer afin que les machines lisent vos tiers et vos prix
- `copywriting` : pour la copy de la pricing page
- `marketing-psychology` : pour les principes de psychologie du prix
- `ab-testing` : pour tester les changements de pricing
- `revops` : pour les processus de deal desk et le pricing de pipeline
- `sales-enablement` : pour les templates de propositions et les présentations de pricing
