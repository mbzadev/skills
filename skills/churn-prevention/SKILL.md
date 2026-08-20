---
name: churn-prevention
description: "Réduisez le churn volontaire et involontaire : flux d'annulation, exit surveys, save offers dynamiques, dunning et récupération des paiements échoués. À utiliser lorsque l'utilisateur mentionne « churn », « résiliation », « offboarding », « save offer », « dunning », « win-back », « rétention » ou « les clients partent », ou veut retenir ses abonnés. Pour les séquences win-back, voir emails ; pour les paywalls, voir paywalls."
---

# Prévention du churn et rétention SaaS

Vous êtes un expert de la rétention SaaS et de la prévention du churn. Votre objectif : réduire à la fois le churn volontaire (des clients qui choisissent d'annuler) et le churn involontaire (des paiements qui échouent), au moyen de flux d'annulation bien conçus, d'offres de sauvegarde dynamiques, de rétention proactive et de stratégies de dunning.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, cherchez un contexte product-marketing déjà rédigé dans le projet : `.agents/product-marketing.md` (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes). Si l'un de ces fichiers existe, lisez-le et exploitez son contenu ; ne demandez ensuite que les informations qu'il ne couvre pas déjà ou celles propres à la tâche en cours.

Réunissez ensuite ce contexte (demandez-le s'il n'est pas fourni) :

### 1. Situation actuelle face au churn
- Quel est votre taux de churn mensuel ? (volontaire vs involontaire, si connu)
- Combien d'abonnés actifs ?
- Quel est le MRR moyen par client ?
- Avez-vous aujourd'hui un flux d'annulation, ou la résiliation est-elle instantanée ?

### 2. Facturation et plateforme
- Quel prestataire de facturation ? (Stripe, Chargebee, Paddle, Recurly, Braintree)
- Intervalles mensuels, annuels, ou les deux ?
- Proposez-vous la pause ou le downgrade d'abonnement ?
- Un outillage de rétention existe-t-il déjà ? (Churnkey, ProsperStack, Raaft)

### 3. Produit et données d'usage
- Suivez-vous l'usage des fonctionnalités par utilisateur ?
- Pouvez-vous identifier les décrochages d'engagement ?
- Disposez-vous des raisons d'annulation des churns passés ?
- Quelle est votre métrique d'activation ? (Que font les utilisateurs retenus que les utilisateurs churnés ne font pas ?)

### 4. Contraintes
- B2B ou B2C ? (Cela influence la conception du flux)
- L'annulation en self-service est-elle obligatoire ? (Certaines réglementations imposent une résiliation facile)
- Quel ton de marque pour l'offboarding ? (Empathique, direct, ludique)

---

## Fonctionnement du skill

Le churn se présente sous deux formes qui exigent des stratégies différentes :

| Type | Cause | Solution |
|------|-------|----------|
| **Volontaire** | Le client choisit d'annuler | Flux d'annulation, save offers, exit surveys |
| **Involontaire** | Le paiement échoue | E-mails de dunning, relances intelligentes, mises à jour de carte |

Le churn volontaire représente généralement 50 à 70 % du churn total. Le churn involontaire en représente 30 à 50 %, mais il est souvent plus facile à corriger.

Ce skill couvre trois modes d'intervention :

1. **Construire un flux d'annulation** — conception de zéro, avec questionnaire, save offers et confirmation.
2. **Optimiser un flux existant** — analyse des données d'annulation et amélioration du taux de sauvegarde.
3. **Mettre en place le dunning** — récupération des paiements échoués par relances intelligentes et séquences d'e-mails.

---

## Conception du flux d'annulation

### Structure du flux

Tout flux d'annulation suit cette séquence :

```
Déclencheur → Questionnaire → Offre dynamique → Confirmation → Post-annulation
```

**Étape 1 : déclencheur.** Le client clique sur « Annuler mon abonnement » dans les paramètres du compte.

**Étape 2 : exit survey.** Demandez pourquoi il annule. La réponse détermine la save offer à présenter.

**Étape 3 : save offer dynamique.** Présentez une offre ciblée en fonction de la raison invoquée (remise, pause, downgrade…).

**Étape 4 : confirmation.** S'il veut malgré tout annuler, confirmez clairement, avec un message sur la fin de période de facturation.

**Étape 5 : post-annulation.** Fixez les attentes, proposez un chemin de réactivation simple et déclenchez la séquence de win-back.

### Conception de l'exit survey

L'exit survey est la fondation du dispositif. Catégories de raisons qui fonctionnent :

| Raison | Ce qu'elle vous apprend |
|--------|------------------------|
| Trop cher | Sensibilité au prix ; peut répondre à une remise ou à un downgrade |
| Pas assez utilisé | Faible engagement ; peut répondre à une pause ou à de l'aide à l'onboarding |
| Fonctionnalité manquante | Lacune produit ; montrez la roadmap ou une solution de contournement |
| Passage à un concurrent | Pression concurrentielle ; comprenez ce qu'il offre |
| Problèmes techniques / bugs | Qualité produit ; escaladez vers le support |
| Besoin temporaire / saisonnier | Motif d'usage ; proposez la pause |
| Entreprise fermée / a changé | Inévitable ; tirez-en les leçons et laissez partir avec grâce |
| Autre | Catégorie fourre-tout ; ajoutez un champ de texte libre |

**Bonnes pratiques du questionnaire :**
- Une seule question, choix unique avec texte libre facultatif.
- 5 à 8 options maximum (évitez la fatigue décisionnelle).
- Placez les raisons les plus fréquentes en premier (revoyez les données chaque trimestre).
- Ne donnez pas l'impression d'un chantage émotionnel.
- Le cadrage « Aidez-nous à nous améliorer » fonctionne mieux que « Pourquoi partez-vous ? ».

### Save offers dynamiques

L'idée clé : **accordez l'offre à la raison**. Une remise ne sauve pas quelqu'un qui n'utilise pas le produit. Une roadmap produit ne sauve pas quelqu'un qui ne peut plus payer.

**Correspondance raison → offre :**

| Raison d'annulation | Offre principale | Offre de repli |
|---------------------|------------------|----------------|
| Trop cher | Remise (20-30 % pendant 2-3 mois) | Downgrade vers un palier inférieur |
| Pas assez utilisé | Pause (1-3 mois) | Session d'onboarding offerte |
| Fonctionnalité manquante | Aperçu de roadmap + calendrier | Guide de contournement |
| Passage à un concurrent | Comparaison concurrentielle + remise | Session de feedback |
| Problèmes techniques | Escalade immédiate vers le support | Crédit + correctif prioritaire |
| Besoin temporaire / saisonnier | Pause de l'abonnement | Downgrade temporaire |
| Entreprise fermée | Pas d'offre (respectez la situation) | — |

### Types de save offers

**Remise**
- Le point optimal se situe entre 20 et 30 % pendant 2 à 3 mois.
- Évitez les remises de 50 % et plus (elles apprennent aux clients à annuler pour obtenir des réductions).
- Limitez l'offre dans le temps (« Cette offre expire quand vous quittez cette page »).
- Affichez le montant économisé en devise, pas seulement le pourcentage.

**Pause d'abonnement**
- Pause de 1 à 3 mois maximum (au-delà, la réactivation devient rare).
- 60 à 80 % des mises en pause finissent par revenir en actif.
- Réactivation automatique avec e-mail de préavis.
- Conservez leurs données et leurs réglages intacts.

**Downgrade de plan**
- Proposez un palier inférieur plutôt qu'une annulation complète.
- Montrez ce qu'ils conservent par rapport à ce qu'ils perdent.
- Présentez cela comme un « réajustement de plan », pas comme un « downgrade ».
- Facilitez la remontée de palier quand ils sont prêts.

**Déblocage / extension de fonctionnalité**
- Débloquez une fonctionnalité premium qu'ils n'ont pas essayée.
- Prolongez l'essai d'un palier supérieur.
- Fonctionne mieux pour les raisons du type « je n'en tire pas assez de valeur ».

**Contact personnalisé**
- Pour les comptes à forte valeur (les 10-20 % les élevés en MRR).
- Orientez vers le customer success pour un appel.
- E-mail personnel du fondateur pour les petites structures.

### Motifs d'interface du flux d'annulation

```
┌─────────────────────────────────────┐
│  Nous sommes désolés de vous voir   │
│  partir                             │
│                                     │
│  Quelle est la principale raison    │
│  de votre annulation ?              │
│                                     │
│  ○ Trop cher                        │
│  ○ Pas assez utilisé                │
│  ○ Il me manque une fonctionnalité  │
│  ○ Je passe à un autre outil        │
│  ○ Problèmes techniques             │
│  ○ Temporaire / pas besoin now      │
│  ○ Autre : [____________]           │
│                                     │
│  [Continuer]                        │
│  [Laisser tomber, garder mon        │
│   abonnement]                       │
└─────────────────────────────────────┘
         ↓ (sélectionne « Trop cher »)
┌─────────────────────────────────────┐
│  Et si nous pouvions aider ?        │
│                                     │
│  Nous aimerions vous garder. Voici  │
│  une offre spéciale :               │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  -25 % pendant 3 mois         │  │
│  │  Économisez XX €/mois         │  │
│  │                               │  │
│  │  [Accepter l'offre]           │  │
│  └───────────────────────────────┘  │
│                                     │
│  Ou passez au [Plan Basique] à      │
│  X €/mois →                         │
│                                     │
│  [Non merci, continuer              │
│   l'annulation]                     │
└─────────────────────────────────────┘
```

**Principes d'interface :**
- Gardez visible l'option « continuer l'annulation » (pas de dark patterns).
- Une offre principale + une de repli, pas un mur d'options.
- Montrez les économies en devise concrète, pas en pourcentage abstrait.
- Utilisez le nom du client et ses données de compte quand c'est possible.
- Adaptez au mobile (beaucoup d'annulations se font sur mobile).

Pour des motifs de flux d'annulation détaillés par secteur et par prestataire de facturation, consultez [references/cancel-flow-patterns.md](references/cancel-flow-patterns.md).

---

## Prédiction du churn et rétention proactive

La meilleure sauvegarde se joue avant que le client ne clique sur « Annuler ».

### Signaux de risque

Suivez ces indicateurs avancés du churn :

| Signal | Niveau de risque | Délai |
|--------|-----------------|-------|
| Fréquence de connexion en baisse de 50 %+ | Élevé | 2-4 semaines avant l'annulation |
| Arrêt de l'usage d'une fonctionnalité clé | Élevé | 1-3 semaines avant |
| Pic de tickets support puis silence | Élevé | 1-2 semaines avant |
| Baisse du taux d'ouverture des e-mails | Moyen | 2-6 semaines avant |
| Visites de la page de facturation en hausse | Élevé | Quelques jours avant |
| Suppression de sièges d'équipe | Élevé | 1-2 semaines avant |
| Export de données initié | Critique | Quelques jours avant |
| Score NPS sous 6 | Moyen | 1-3 mois avant |

### Modèle de score de santé

Construisez un score de santé simple (0-100) à partir de signaux pondérés :

```
Score de santé = (
  Score fréquence de connexion × 0,30 +
  Score usage des fonctionnalités × 0,25 +
  Sentiment support          × 0,15 +
  Santé facturation          × 0,15 +
  Score d'engagement         × 0,15
)
```

| Score | Statut | Action |
|-------|--------|--------|
| 80-100 | En bonne santé | Opportunités d'upsell |
| 60-79 | À surveiller | Prise de contact proactive |
| 40-59 | À risque | Campagne d'intervention |
| 0-39 | Critique | Contact personnalisé |

### Interventions proactives

**Avant qu'ils ne pensent à annuler :**

| Déclencheur | Intervention |
|-------------|--------------|
| Baisse d'usage > 50 % pendant 2 semaines | E-mail « Nous avons remarqué que vous n'utilisez plus [fonctionnalité]. Un coup de main ? » |
| Approche de la limite du plan | Invite d'upgrade (pas un mur — c'est le rôle de paywalls) |
| Aucune connexion depuis 14 jours | E-mail de réengagement avec les dernières évolutions produit |
| Détracteur NPS (0-6) | Suivi personnel sous 24 heures |
| Ticket support non résolu > 48 h | Escalade + point de statut proactif |
| Renouvellement annuel dans 30 jours | E-mail de récap de valeur + confirmation de renouvellement |

---

## Churn involontaire : récupération des paiements

Les paiements échoués causent 30 à 50 % du churn total, mais c'est le plus récupérable.

### La pile de dunning

```
Pré-dunning → Relance intelligente → E-mails de dunning → Période de grâce → Annulation ferme
```

### Pré-dunning (prévenir les échecs)

- **Alertes d'expiration de carte** : e-mail 30, 15 et 7 jours avant l'expiration.
- **Moyen de paiement de secours** : proposez un second moyen de paiement dès l'inscription.
- **Services de mise à jour de carte** : programmes Visa/Mastercard (réduit les refus définitifs de 30 à 50 %).
- **Notification pré-facturation** : e-mail 3 à 5 jours avant le prélèvement pour les plans annuels.

### Logique de relance intelligente

Tous les échecs ne se valent pas. Stratégie de relance selon le type de refus :

| Type de refus | Exemples | Stratégie de relance |
|---------------|----------|----------------------|
| Refus temporaire (soft decline) | Fonds insuffisants, timeout du processeur | 3 à 5 relances sur 7 à 10 jours |
| Refus définitif (hard decline) | Carte volée, compte clôturé | Ne relancez pas — demandez une nouvelle carte |
| Authentification requise | 3D Secure, SCA | Envoyez le client mettre à jour son paiement |

**Calendrier de relance recommandé :**
- Relance 1 : 24 heures après l'échec.
- Relance 2 : 3 jours après.
- Relance 3 : 5 jours après.
- Relance 4 : 7 jours après (avec escalade de l'e-mail de dunning).
- Après 4 relances : annulation ferme avec chemin de réactivation.

**Astuce de relance intelligente :** retentez le prélèvement le jour du mois où il réussissait à l'origine (si le 1er fonctionnait avant, retentez le 1er). Stripe Smart Retries gère cela automatiquement.

### Séquence d'e-mails de dunning

| E-mail | Moment | Ton | Contenu |
|--------|--------|-----|---------|
| 1 | Jour 0 (échec) | Alerte amicale | « Votre paiement n'est pas passé. Mettez à jour votre carte. » |
| 2 | Jour 3 | Rappel utile | « Petit rappel — mettez à jour votre paiement pour garder l'accès. » |
| 3 | Jour 7 | Urgence | « Votre compte sera suspendu dans 3 jours. Mettez-le à jour maintenant. » |
| 4 | Jour 10 | Dernier avertissement | « Dernière chance de garder votre compte actif. » |

**Bonnes pratiques des e-mails de dunning :**
- Lien direct vers la page de mise à jour du paiement (sans connexion si possible).
- Montrez ce qu'ils perdront (leurs données, l'accès de leur équipe).
- Ne blâmez pas (« votre paiement n'est pas passé » plutôt que « vous n'avez pas payé »).
- Incluez un contact support pour obtenir de l'aide.
- Le texte brut performe mieux que les e-mails maquettés pour le dunning.

### Benchmarks de récupération

| Métrique | Faible | Moyen | Bon |
|----------|--------|-------|-----|
| Récupération des refus temporaires | < 40 % | 50-60 % | 70 %+ |
| Récupération des refus définitifs | < 10 % | 20-30 % | 40 %+ |
| Récupération globale des paiements | < 30 % | 40-50 % | 60 %+ |
| Prévention par pré-dunning | Aucune | 10-15 % | 20-30 % |

Pour le playbook de dunning complet avec configuration par prestataire, consultez [references/dunning-playbook.md](references/dunning-playbook.md).

---

## Métriques et mesure

### Métriques clés du churn

| Métrique | Formule | Cible |
|----------|---------|-------|
| Taux de churn mensuel | Clients churnés / Clients en début de mois | < 5 % B2C, < 2 % B2B |
| Churn de revenu (net) | (MRR perdu - MRR d'expansion) / MRR initial | Négatif (expansion nette) |
| Taux de sauvegarde du flux d'annulation | Sauvegardés / Sessions d'annulation totales | 25-35 % |
| Taux d'acceptation des offres | Offres acceptées / Offres présentées | 15-25 % |
| Taux de réactivation après pause | Réactivés / Total des mises en pause | 60-80 % |
| Taux de récupération du dunning | Récupérés / Total des paiements échoués | 50-60 % |
| Délai avant annulation | Jours entre premier signal de churn et annulation | Suivre la tendance |

### Analyse par cohorte

Segmentez le churn selon :
- **Le canal d'acquisition** — quels canaux apportent les clients les plus fidèles ?
- **Le type de plan** — quels plans churnent le plus ?
- **L'ancienneté** — quand les annulations se concentrent-elles ? (30, 60, 90 jours ?)
- **La raison d'annulation** — quelles raisons progressent ?
- **Le type de save offer** — quelles offres fonctionnent le mieux pour quels segments ?

### A/B tests du flux d'annulation

Testez une seule variable à la fois :

| Test | Hypothèse | Métrique |
|------|-----------|----------|
| Pourcentage de remise (20 % vs 30 %) | Une remise plus élevée sauve plus | Taux de sauvegarde, impact sur la LTV |
| Durée de pause (1 vs 3 mois) | Une pause plus longue augmente le retour | Taux de réactivation |
| Placement du questionnaire (avant vs après l'offre) | Le questionnaire d'abord personnalise les offres | Taux de sauvegarde |
| Présentation de l'offre (modal vs page complète) | La page complète capte plus l'attention | Taux de sauvegarde |
| Ton du texte (empathique vs direct) | Le ton empathique réduit la friction | Taux de sauvegarde |

**Pour concevoir des expériences statistiquement rigoureuses sur le flux d'annulation**, utilisez le skill **ab-testing**. PostHog convient bien à ces expériences : ses feature flags peuvent répartir les utilisateurs dans différents flux côté serveur, et ses analytics d'entonnoir suivent chaque étape du flux d'annulation (questionnaire → offre → acceptation/refus → confirmation). Consultez le [guide d'intégration PostHog](https://github.com/mbzadev/skills/blob/main/tools/integrations/posthog.md) pour la mise en place.

---

## Erreurs fréquentes

- **Aucun flux d'annulation** — l'annulation instantanée laisse de l'argent sur la table. Même un simple questionnaire + une offre sauve 10 à 15 %.
- **Rendre l'annulation difficile à trouver** — les boutons cachés nourrissent le ressentiment et les mauvais avis. De nombreuses juridictions imposent une résiliation simple (règle Click-to-Cancel de la FTC).
- **La même offre pour toutes les raisons** — une remise uniforme ne répond ni à « fonctionnalité manquante » ni à « pas assez utilisé ».
- **Des remises trop profondes** — au-delà de 50 %, les clients apprennent le cycle annulation-return pour les promotions.
- **Ignorer le churn involontaire** — souvent 30 à 50 % du churn total, et le plus simple à corriger.
- **Pas d'e-mails de dunning** — laisser les échecs de paiement annuler silencieusement des comptes.
- **Un texte culpabilisant** — « Êtes-vous sûr de vouloir nous abandonner ? » abîme la confiance dans la marque.
- **Ne pas suivre la LTV des offres acceptées** — un client « sauvé » qui churne 30 jours plus tard n'était pas vraiment sauvé.
- **Des pauses trop longues** — au-delà de 3 mois, la réactivation devient rare. Fixez des limites.
- **Aucun chemin post-annulation** — facilitez la réactivation et déclenchez les e-mails de win-back, car certains utilisateurs churnés voudront revenir.

---

## Intégrations d'outils

Pour la mise en œuvre, consultez le [registre des outils](https://github.com/mbzadev/skills/blob/main/tools/REGISTRY.md).

### Plateformes de rétention

| Outil | Idéal pour | Fonction clé |
|-------|------------|--------------|
| **Churnkey** | Flux d'annulation + dunning complets | Offres adaptatives par IA, 34 % de sauvegarde moyen |
| **ProsperStack** | Flux d'annulation avec analytics | Moteur de règles avancé, intégration Stripe/Chargebee |
| **Raaft** | Constructeur simple de flux d'annulation | Mise en place facile, adapté aux débuts |
| **Chargebee Retention** | Clients Chargebee | Intégration native, ex-Brightback |

### Prestataires de facturation (dunning)

| Prestataire | Relances intelligentes | E-mails de dunning | Mise à jour de carte |
|-------------|:---------------------:|:------------------:|:--------------------:|
| **Stripe** | Intégrées (Smart Retries) | Intégrés | Automatique |
| **Chargebee** | Intégrées | Intégrés | Via la passerelle |
| **Paddle** | Intégrées | Intégrés | Gérée |
| **Recurly** | Intégrées | Intégrés | Intégrée |
| **Braintree** | Configuration manuelle | Manuelles | Via la passerelle |

### Outils CLI associés

| Outil | Sert à |
|-------|--------|
| `stripe` | Gestion des abonnements, configuration du dunning, relances de paiement |
| `customer-io` | Séquences d'e-mails de dunning, campagnes de rétention |
| `posthog` | A/B tests du flux d'annulation via feature flags, analytics d'entonnoir |
| `mixpanel` / `ga4` | Suivi d'usage, analyse des signaux de churn |
| `segment` | Routage d'événements pour le score de santé |

---

## Skills liés

- `emails` : pour les séquences win-back après annulation.
- `paywalls` : pour les moments d'upgrade in-app et la fin d'essai.
- `pricing` : pour la structure des plans et la stratégie de remise annuelle.
- `onboarding` : pour l'activation qui prévient le churn précoce.
- `analytics` : pour instrumenter les événements de signaux de churn.
- `ab-testing` : pour tester les variantes du flux d'annulation avec rigueur statistique.
