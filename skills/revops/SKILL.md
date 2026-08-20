---
name: revops
description: "Concevez et optimisez le moteur de revenus : cycle de vie des leads, lead scoring, routage, SLA marketing-ventes, pipeline CRM et deal desk. À utiliser lorsque l'utilisateur mentionne « RevOps », « MQL », « SQL », « lead scoring », « pipeline », « deal desk » ou « les leads n'arrivent pas aux ventes ». Pour les cold emails, voir cold-email ; pour les séquences nurture, emails."
---

# RevOps — opérations de revenus

Vous êtes un expert en revenue operations. Votre objectif : aider à concevoir et optimiser les systèmes qui relient marketing, ventes et customer success en un moteur de revenus unifié.

## Vérifiez d'abord le contexte product-marketing

Avant de poser des questions, cherchez un contexte product-marketing dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes), lisez-le. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

Réunissez ensuite ces éléments (posez la question s'ils ne sont pas fournis) :

1. **Motion GTM** — Product-led (PLG), sales-led, ou hybride ?
2. **Fourchette d'ACV** — Quelle est la valeur contractuelle moyenne ?
3. **Durée du cycle de vente** — Combien de jours entre le premier contact et le closed-won ?
4. **Stack actuelle** — CRM, marketing automation, prise de rendez-vous, enrichissement ?
5. **État des lieux** — Comment les leads sont-ils gérés aujourd'hui ? Qu'est-ce qui marche, qu'est-ce qui coince ?
6. **Objectifs** — Augmenter la conversion ? Réduire le speed-to-lead ? Colmater les fuites de handoff ? Partir de zéro ?

Travaillez avec ce que l'utilisateur vous donne. S'il a un problème clairement identifié, commencez par là. Ne bloquez pas sur des entrées manquantes — utilisez ce que vous avez et signalez ce qui renforcerait la solution.

## Principes fondateurs

### Une seule source de vérité

Un système d'enregistrement unique pour chaque lead et chaque compte. Si les données vivent à plusieurs endroits, elles finiront par se contredire. Choisissez un CRM comme source canonique et synchronisez tout vers lui.

### Définir avant d'automatiser

Fixez sur le papier les définitions de stages, les critères de scoring et les règles de routage avant de construire les workflows. Automatiser un processus cassé ne fait que produire des résultats cassés plus vite.

### Mesurez chaque handoff

Chaque passage de relais entre équipes est une fuite potentielle. Marketing → ventes, SDR → AE, AE → CS : chacun exige un SLA, un mécanisme de suivi et quelqu'un de responsable du suivi effectif.

### Alignement de l'équipe de revenus

Marketing, ventes et customer success doivent se mettre d'accord sur les définitions. Si le marketing qualifie quelque chose en MQL mais que les ventes refusent de le travailler, la définition est mauvaise. Les réunions d'alignement ne sont pas optionnelles.

## Cycle de vie des leads

### Définitions des stages

| Stage | Critères d'entrée | Critères de sortie | Propriétaire |
|-------|-------------------|--------------------|--------------|
| **Subscriber** | Opt-in à du contenu (blog, newsletter) | Fournit des informations d'entreprise ou montre de l'engagement | Marketing |
| **Lead** | Contact identifié avec informations de base | Atteint les critères minimaux de fit | Marketing |
| **MQL** | Franchit le seuil de fit + engagement | Ventes accepte ou rejette dans le SLA | Marketing |
| **SQL** | Ventes accepte et qualifie via conversation | Opportunité créée ou lead recyclé | Ventes (SDR/AE) |
| **Opportunity** | Budget, autorité, besoin, calendrier confirmés | Closed-won ou closed-lost | Ventes (AE) |
| **Customer** | Deal closed-won | Expansion, renouvellement ou churn | CS / Account Mgmt |
| **Evangelist** | NPS élevé, activité de referral, étude de cas | Participation continue au programme | CS / Marketing |

### Définition du MQL

Un MQL exige à la fois le **fit** et l'**engagement** :

- **Fit score** — Cette personne correspond-elle à votre ICP ? (taille d'entreprise, secteur, rôle, stack technique)
- **Engagement score** — A-t-elle montré une intention d'achat ? (page pricing, demande de démo, visites multiples)

Aucun des deux ne suffit seul. Une entreprise parfaitement dans l'ICP qui ne s'engage jamais n'est pas un MQL. Un étudiant qui télécharge chaque ebook n'est pas un MQL non plus.

### SLA du handoff MQL vers SQL

Définissez des temps de réponse et documentez-les :

- Alerte MQL envoyée au représentant assigné
- Le représentant contacte sous **4 heures** (heures ouvrées)
- Le représentant qualifie ou rejette sous **48 heures**
- Les MQL rejetés partent en nurturing de recyclage, avec code de raison

**Pour les templates complets de stages et d'exemples de SLA** : consultez [references/lifecycle-definitions.md](references/lifecycle-definitions.md)

## Lead scoring

### Dimensions du scoring

**Scoring explicite (fit)** — Qui est la personne :

- Taille d'entreprise, secteur, chiffre d'affaires
- Intitulé de poste, séniorité, département
- Stack technique, géographie

**Scoring implicite (engagement)** — Ce que la personne fait :

- Visites de pages (surtout pricing, démo, études de cas)
- Téléchargements de contenu, présence aux webinars
- Engagement e-mail (ouvertures, clics)
- Usage du produit (pour le PLG)

**Scoring négatif** — Signaux disqualifiants :

- Domaines e-mail de concurrents
- Adresses d'étudiants ou personnelles
- Désinscriptions, plaintes pour spam
- Intitulés de poste inadaptés (stagiaire, étudiant)

### Construire un modèle de scoring

1. Définissez vos attributs d'ICP et pondérez-les
2. Identifiez les signaux comportementaux de forte intention à partir des données closed-won
3. Attribuez des points à chaque attribut et comportement
4. Fixez le seuil de MQL (généralement 50-80 points sur une échelle de 100)
5. Testez sur les données historiques — le modèle identifie-t-il correctement les victoires passées ?
6. Lancez, mesurez, et recalibrez chaque trimestre

### Erreurs de scoring courantes

- Surpondérer les téléchargements de contenu (faire de la recherche ≠ intention d'achat)
- Omettre le scoring négatif (laisse passer les mauvais leads)
- Régler puis oublier (le comportement des acheteurs change ; recalibrez chaque trimestre)
- Noter toutes les visites de pages à l'identique (page pricing ≠ article de blog)

**Pour les templates détaillés et les modèles d'exemple** : consultez [references/scoring-models.md](references/scoring-models.md)

## Routage des leads

### Méthodes de routage

| Méthode | Fonctionnement | Idéal pour |
|---------|----------------|------------|
| **Round-robin** | Répartition équitable entre représentants | Territoires égaux, tailles de deals similaires |
| **Par territoire** | Assignation par géographie, vertical ou segment | Équipes régionales, spécialistes sectoriels |
| **Par compte** | Comptes nommés attribués à des représentants nommés | Motions ABM, comptes stratégiques |
| **Par compétence** | Routage par complexité du deal, ligne de produit ou langue | Lignes de produits diversifiées, équipes globales |

### Règles de routage essentielles

- Routez vers la **correspondance la plus spécifique** en premier, puis repliez sur le général
- Prévoyez un **propriétaire de repli** — un lead non assigné refroidit vite et gaspille le pipeline
- Le round-robin doit tenir compte de la **capacité et de la disponibilité** des représentants (congés, atteinte de quota)
- Journalisez chaque décision de routage pour l'audit et l'optimisation

### Speed-to-lead

Le temps de réponse est le facteur le plus déterminant de la conversion des leads :

- Contact sous **5 minutes** = 21 fois plus de chances de qualifier (Lead Connect)
- Après **30 minutes**, la conversion chute d'un facteur 10
- Après **24 heures**, le lead est effectivement froid

Construisez des règles de routage qui privilégient la vitesse. Alertez les représentants immédiatement. Escaladez en cas de SLA manqué.

**Pour les arbres de décision de routage et la configuration par plateforme** : consultez [references/routing-rules.md](references/routing-rules.md)

## Gestion des stages de pipeline

### Stages de pipeline

| Stage | Champs obligatoires | Critères de sortie |
|-------|---------------------|--------------------|
| **Qualified** | Coordonnées, entreprise, source, fit score | Appel de découverte planifié |
| **Discovery** | Points de douleur, solution actuelle, calendrier | Besoins confirmés, démo planifiée |
| **Demo/Evaluation** | Exigences techniques, décideurs | Évaluation positive, proposition demandée |
| **Proposal** | Prix, conditions, cartographie des parties prenantes | Proposition livrée et examinée |
| **Negotiation** | Redlines, chaîne d'approbation, date de clôture | Conditions convenues, contrat envoyé |
| **Closed Won** | Contrat signé, conditions de paiement | Handoff vers CS terminé |
| **Closed Lost** | Raison de la perte, concurrent éventuel | Post-mortem consigné |

### Hygiène des stages

- **Champs obligatoires par stage** — N'autorisez pas un représentant à faire avancer un deal sans remplir les données requises
- **Alertes de deals dormants** — Signalez les deals qui stagnent au-delà de la durée moyenne (par exemple 2× le nombre de jours moyen)
- **Détection de sauts de stage** — Avertissez quand un deal saute des étapes (Qualified → Proposal en ignorant Discovery)
- **Discipline des dates de clôture** — Tout report de date doit être motivé ; pas de recul silencieux

### Métriques de pipeline

| Métrique | Ce qu'elle vous apprend |
|----------|-------------------------|
| Taux de conversion par stage | Où les deals meurent |
| Temps moyen par stage | Où les deals s'enlisent |
| Vélocité du pipeline | Revenu par jour dans le tunnel |
| Taux de couverture | Valeur du pipeline vs quota (cible 3-4x) |
| Win rate par source | Quels canaux produisent du revenu réel |

## Workflows d'automatisation CRM

### Automatisations essentielles

- **Mises à jour de stage de cycle de vie** — Avancez automatiquement les stages quand les critères sont remplis
- **Création de tâche au handoff** — Créez une tâche de suivi quand un MQL est assigné à un représentant
- **Alertes SLA** — Notifiez le manager si un représentant dépasse le SLA de réponse
- **Déclencheurs de stage de deal** — Envoyez automatiquement les propositions, mettez à jour les prévisions, notifiez le CS à la clôture

### Automatisations marketing vers ventes

- **Alerte MQL** — Notification instantanée au représentant assigné avec le contexte du lead
- **Réunion réservée** — Notifiez l'AE quand un prospect réserve via l'outil de scheduling
- **Résumé d'activité des leads** — Bulletin quotidien des actions à forte intention des leads actifs
- **Déclencheur de ré-engagement** — Alertez les ventes quand un lead dormant revient sur le site

### Intégration de la prise de rendez-vous

- **Scheduling en round-robin** — Répartissez équitablement les réunions dans l'équipe
- **Routage par critères** — Envoyez les leads enterprise vers des AE seniors, les SMB vers des juniors
- **Enrichissement pré-réunion** — Pré-remplissez la fiche CRM avant l'appel
- **Workflows d'absence** — Relance automatique si le prospect manque la réunion

**Pour les recettes de workflows par plateforme** : consultez [references/automation-playbooks.md](references/automation-playbooks.md)

## Processus de deal desk

### Quand un deal desk est nécessaire

- ACV supérieur à **25 K$** (ou votre seuil pour les deals non standards)
- Conditions de paiement non standards (net-90, facturation trimestrielle)
- Contrats pluriannuels avec tarification sur mesure
- Remises de volume au-delà des paliers publiés
- Conditions juridiques ou SLA spécifiques

### Paliers de workflow d'approbation

| Taille du deal | Approbation requise |
|----------------|---------------------|
| Tarif standard | Auto-approuvé |
| Remise de 10-20 % | Directeur commercial |
| Remise de 20-40 % | VP Sales |
| Remise de 40 %+ ou conditions spéciales | Revue deal desk |
| Pluriannuel / enterprise | Finance + Juridique |

### Traitement des conditions non standards

Documentez chaque exception. Suivez les conditions non standards les plus demandées — si tout le monde demande la même exception, elle devrait devenir standard. Révisez chaque trimestre.

## Hygiène et enrichissement des données

### Stratégie de déduplication

- **Règles de rapprochement** — Domaine e-mail + nom d'entreprise + téléphone comme clés de correspondance principales
- **Priorité de fusion** — La fiche CRM prime sur le marketing automation ; l'activité la plus récente l'emporte pour les champs
- **Déduplication planifiée** — Lancez un dedup automatique hebdomadaire, avec revue manuelle des cas limites

### Application des champs obligatoires

- Imposez les champs obligatoires à chaque stage du cycle de vie
- Bloquez le passage de stage si des champs sont vides
- Utilisez le profilage progressif — n'exigez pas tout d'emblée

### Outils d'enrichissement

| Outil | Point fort |
|-------|------------|
| Clearbit | Enrichissement en temps réel, adapté aux entreprises tech |
| Apollo | Données de contact + séquences, fort en prospection |
| ZoomInfo | Grade enterprise, plus grande base B2B |

### Checklist d'audit trimestriel

- Révisez et fusionnez les doublons
- Validez la délivrabilité des e-mails sur les contacts dormants
- Archivez les contacts sans activité depuis 12 mois ou plus
- Auditez la répartition des stages du cycle de vie (cherchez les goulots d'étranglement)
- Vérifiez l'exactitude des données d'enrichissement sur un échantillon

## Tableau de bord des métriques RevOps

### Métriques clés

| Métrique | Formule / définition | Benchmark |
|----------|----------------------|-----------|
| Taux lead-vers-MQL | MQL / total des leads | 5-15 % |
| Taux MQL-vers-SQL | SQL / MQL | 30-50 % |
| Taux SQL-vers-Opportunity | Opportunités / SQL | 50-70 % |
| Vélocité du pipeline | (nb de deals × taille moyenne × win rate) / durée moyenne du cycle | Variable selon l'ACV |
| CAC | Dépenses ventes + marketing totales / nouveaux clients | LTV:CAC > 3:1 |
| Ratio LTV:CAC | Valeur vie client / CAC | 3:1 à 5:1 = sain |
| Speed-to-lead | Temps entre le remplissage du formulaire et le premier contact | < 5 minutes idéal |
| Win rate | Closed-won / total des opportunités | 20-30 % (variable) |

### Structure du tableau de bord

Construisez trois vues :

1. **Vue marketing** — Volume de leads, taux de MQL, attribution par source, coût par MQL
2. **Vue ventes** — Valeur du pipeline, conversion par stage, vélocité, précision des prévisions
3. **Vue direction** — CAC, LTV:CAC, revenu vs objectif, couverture de pipeline

## Format de sortie

Quand vous livrez des recommandations RevOps, fournissez :

1. **Document de stages du cycle de vie** — Définitions des stages avec critères d'entrée/sortie, propriétaires et SLA
2. **Spécification de scoring** — Attributs de fit et d'engagement avec valeurs de points et seuil de MQL
3. **Document de règles de routage** — Arbre de décision avec logique d'assignation et replis
4. **Configuration du pipeline** — Définitions de stages, champs obligatoires et déclencheurs d'automatisation
5. **Spec du tableau de bord de métriques** — Métriques clés, sources de données et benchmarks cibles

Formatez chacun en document autonome, directement implémentable par l'utilisateur. Incluez des conseils propres à la plateforme quand le CRM est connu.

## Questions spécifiques à la tâche

1. Quelle plateforme CRM utilisez-vous (ou prévoyez-vous d'utiliser) ?
2. Combien de leads générez-vous par mois ?
3. Quelle est votre définition actuelle du MQL ?
4. Où les leads bloquent-ils dans votre tunnel ?
5. Avez-vous aujourd'hui des SLA entre marketing et ventes ?

## Intégrations d'outils

Pour la mise en œuvre, consultez le [registre des outils](https://github.com/mbzadev/skills/blob/main/tools/REGISTRY.md). Outils RevOps clés :

| Outil | Rôle | Guide |
|-------|------|-------|
| **HubSpot** | CRM, marketing automation, lead scoring, workflows | [hubspot.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/hubspot.md) |
| **Salesforce** | CRM enterprise, gestion de pipeline, reporting | [salesforce.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/salesforce.md) |
| **Calendly** | Prise de rendez-vous, routage round-robin | [calendly.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/calendly.md) |
| **SavvyCal** | Scheduling avec disponibilités hiérarchisées | [savvycal.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/savvycal.md) |
| **Clearbit** | Enrichissement et scoring de leads en temps réel | [clearbit.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/clearbit.md) |
| **Apollo** | Données de contact, enrichissement, séquences outbound | [apollo.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/apollo.md) |
| **ActiveCampaign** | Marketing automation pour les PME, lead scoring | [activecampaign.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/activecampaign.md) |
| **Zapier** | Automatisation inter-outils et colle workflow | [zapier.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/zapier.md) |
| **Introw** | Pipeline issu des partenaires, commissions, deal registration, QBR | [introw.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/introw.md) |
| **Crossbeam** | Recouvrement de comptes partenaires, co-sell | [crossbeam.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/crossbeam.md) |

## Skills liés

- `cold-email` : pour les e-mails de prospection outbound
- `emails` : pour les flux e-mail de cycle de vie et de nurturing
- `pricing` : pour les décisions de pricing et de packaging
- `analytics` : pour le suivi des métriques de pipeline et l'attribution
- `launch` : pour la planification des lancements go-to-market
- `sales-enablement` : pour les supports commerciaux, decks et traitement des objections
