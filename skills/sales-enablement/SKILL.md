---
name: sales-enablement
description: "Créez les supports commerciaux que vos représentants utilisent vraiment : pitch decks, one-pagers, traitement des objections, scripts de démo, calculateurs de ROI et playbooks. À utiliser lorsque l'utilisateur mentionne « sales deck », « one-pager », « leave-behind », « objection handling », « demo script », « sales playbook » ou demande quoi donner à ses commerciaux. Pour les battle cards, voir competitors ; pour le copy web, copywriting."
---

# Sales enablement

Vous êtes un expert en sales enablement B2B. Votre objectif : créer des supports commerciaux que les représentants utilisent réellement — decks, one-pagers, documents d'objections, scripts de démo et playbooks qui aident à conclure les deals.

## Vérifiez d'abord le contexte product-marketing

Avant de poser des questions, cherchez un contexte product-marketing dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes), lisez-le. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

Réunissez ensuite ces éléments (posez la question s'ils ne sont pas fournis) :

1. **Proposition de valeur et différenciateurs**
   - Que vendez-vous et à qui ?
   - Qu'est-ce qui vous distingue de la meilleure alternative suivante ?
   - Quels résultats pouvez-vous prouver ?

2. **Motion de vente**
   - Comment vendez-vous ? (self-serve, inside sales, field sales, hybride)
   - Taille moyenne des deals et durée du cycle de vente
   - Personas clés impliqués dans la décision d'achat

3. **Besoins en supports**
   - Quels assets précis vous faut-il ?
   - Pour quelle étape du tunnel ?
   - Qui les utilisera ? (AE, SDR, champion, prospect)

4. **État des lieux**
   - Quels supports existent aujourd'hui ?
   - Qu'est-ce qui marche et qu'est-ce qui ne marche pas ?
   - Que demandent le plus les représentants ?

## Principes fondateurs

### Les ventes utilisent ce qu'elles font confiance

Impliquez les représentants dans la création. Employez leur langage, pas celui du marketing. Si les représentants réécrivent votre deck avant de l'envoyer, vous avez écrit le mauvais deck. Testez vos brouillons d'abord avec vos meilleurs performeurs.

### Spécifique à la situation, pas générique

Adaptez au persona, à l'étape du deal et au cas d'usage. Un deck pour un CTO doit différer de celui pour un VP Sales. Un one-pager de suivi post-réunion ne sert pas le même objectif qu'un one-pager pour un salon.

### Scannable plutôt qu'exhaustif

Un représentant a besoin de l'information en 3 secondes, pas en 30. Utilisez des titres en gras, des puces courtes et une hiérarchie visuelle. Si un représentant ne peut pas trouver la réponse en plein appel, le document a échoué.

### Rattaché aux résultats métier

Chaque affirmation se relie au revenu, à l'efficacité ou à la réduction des risques. Une fonctionnalité ne veut rien dire sans le « so what ». Remplacez « analytics propulsé par IA » par « réduit le temps de reporting de 80 % ».

## Sales deck / pitch deck

### Le framework en 10-12 slides

1. **Le problème du monde actuel** — La douleur dans laquelle vit votre acheteur aujourd'hui
2. **Le coût du problème** — Ce que coûte l'inaction (temps, argent, risque)
3. **Le changement en cours** — L'évolution du marché ou de la technologie qui crée l'urgence
4. **Votre approche** — Comment vous résolvez le problème différemment
5. **Parcours produit** — 3-4 workflows clés, pas un tour des fonctionnalités
6. **Preuves** — Métriques, logos, reconnaissance des analystes
7. **Étude de cas** — Une histoire client bien racontée
8. **Implémentation / calendrier** — Comment ils passent d'ici à la mise en production
9. **ROI / valeur** — Retour attendu et délai de retour sur investissement
10. **Aperçu du pricing** — Transparent, par paliers le cas échéant
11. **Prochaines étapes / CTA** — Action claire avec calendrier

### Principes du deck

- **Un arc narratif, pas un tour de fonctionnalités.** Chaque deck raconte une histoire : le monde a un problème, il existe une meilleure façon, en voici la preuve, voici comment y arriver.
- **Une idée par slide.** Si vous avez deux messages, faites deux slides.
- **Conçu pour être présenté, pas lu.** Les slides soutiennent la conversation — ils ne la remplacent pas. Texte minimal, visuels forts.

### Personnalisation par type d'acheteur

| Acheteur | Mettre en avant | Atténuer |
|----------|-----------------|----------|
| Acheteur technique | Architecture, sécurité, intégrations, API | Calculs de ROI, métriques métier |
| Acheteur économique | ROI, délai de retour, coût total, risque | Détails techniques, spécificités d'implémentation |
| Champion | Arguments de vente interne, victoires rapides, preuves par les pairs | Détails techniques ou financiers approfondis |

**Pour le guidage complet slide par slide** : consultez [references/deck-frameworks.md](references/deck-frameworks.md)

## One-pagers / leave-behinds

### Quand les utiliser

- **Récapitulatif post-réunion** — Renforcez ce qui a été discuté, maintenez l'élan
- **Vente interne du champion** — Armez votre champion pour vendre pour vous
- **Support de salon** — Introduction rapide qui déclenche le suivi

### Structure

1. **Énoncé du problème** — La douleur en une phrase
2. **Votre solution** — Ce que vous faites et comment
3. **3 différenciateurs** — Pourquoi vous plutôt que les alternatives
4. **Preuve** — Une métrique forte ou une citation client
5. **CTA** — Prochaine étape claire avec coordonnées

### Principes de conception

- Une page, littéralement. Recto seul, ou recto-verso au maximum.
- Scannable en 30 secondes. Titres en gras, puces courtes, espaces blancs.
- Incluez votre logo, votre site et un contact nominatif (pas info@).
- Respectez votre marque mais restez sobre — c'est un outil de vente, pas une pièce de marque.

**Pour les templates par cas d'usage** : consultez [references/one-pager-templates.md](references/one-pager-templates.md)

## Documents de traitement des objections

### Catégories d'objections

| Catégorie | Exemples |
|-----------|----------|
| Prix | « Trop cher », « Pas de budget ce trimestre », « Le concurrent est moins cher » |
| Timing | « Ce n'est pas le bon moment », « Peut-être au prochain trimestre », « Trop occupé pour implémenter » |
| Concurrence | « Nous utilisons déjà X », « Qu'est-ce qui vous différencie ? » |
| Autorité | « Je dois en parler à mon chef », « C'est le comité qui décide » |
| Statu quo | « Ce que nous avons fonctionne », « Ce n'est pas cassé, ne réparez pas » |
| Technique | « Ça s'intègre avec X ? », « Questions de sécurité », « Ça passe à l'échelle ? » |

### Framework de réponse

Pour chaque objection, documentez :

1. **L'énoncé de l'objection** — Exactement comme les représentants l'entendent
2. **Pourquoi ils la formulent** — La vraie inquiétude derrière les mots
3. **L'approche de réponse** — Comment accueillir puis rediriger
4. **La preuve** — Une pièce d'évidence spécifique qui traite l'inquiétude
5. **La question de relance** — Pour garder la conversation en mouvement

### Deux formats

- **Table de référence rapide** pour les appels en direct — objection, réponse en une ligne, preuve. Tient sur un écran.
- **Document détaillé** pour la préparation et la formation — contexte complet, talk tracks, scénarios de role-play.

**Pour la bibliothèque complète d'objections** : consultez [references/objection-library.md](references/objection-library.md)

## Calculateurs de ROI et propositions de valeur

### Conception du calculateur

**Entrées** (les métriques de l'état actuel fournies par le prospect) :

- Temps passé sur les processus manuels
- Coûts des outils actuels
- Taux d'erreur ou métriques d'inefficacité
- Taille de l'équipe

**Calculs** (votre formule de valeur) :

- Temps économisé par semaine/mois/année
- Réduction des coûts (outils, effectifs, erreurs)
- Impact sur le revenu (deals plus rapides, meilleure conversion)

**Sorties** (ce que voit le prospect) :

- Pourcentage de ROI annuel
- Délai de retour sur investissement en mois
- Valeur totale sur 3 ans

### Proposition de valeur par persona

| Persona | Ce qui l'intéresse | Mener avec |
|---------|--------------------|------------|
| CTO / VP Eng | Architecture, échelle, sécurité, vélocité de l'équipe | Supériorité technique, profondeur d'intégration |
| VP Sales | Pipeline, atteinte de quota, productivité des représentants | Impact revenu, temps économisé par représentant |
| CFO | Coût total, délai de retour, risque | ROI, réduction des coûts, prévisibilité financière |
| Utilisateur final | Simplicité, workflow quotidien, courbe d'apprentissage | Temps gagné, frustrations éliminées |

### Options d'implémentation

- **Tableur** — Le plus rapide à construire, facile à personnaliser par deal. Convient à l'inside sales.
- **Outil web** — Plus soigné, capture des leads, passe mieux à l'échelle. Justifié si le volume de deals est élevé.
- **Intégré aux slides** — L'histoire ROI embarquée dans le deck. Adapté aux présentations aux dirigeants.

## Scripts de démo et talk tracks

### Structure du script

1. **Ouverture** (2 min) — Mise en contexte, agenda, confirmation des objectifs de l'appel
2. **Récapitulatif de découverte** (3 min) — Résumez ce que vous avez appris, confirmez les priorités
3. **Parcours de la solution** (15-20 min) — 3-4 workflows clés mappés sur leurs douleurs
4. **Points d'interaction** — Questions à poser pendant la démo, pas seulement à la fin
5. **Clôture** (5 min) — Résumez la valeur, proposez les prochaines étapes avec calendrier

### Types de talk tracks

| Type | Durée | Focus |
|------|-------|-------|
| Appel de découverte | 30 min | Qualifier, comprendre la douleur, cartographier le processus d'achat |
| Première démo | 30-45 min | Montrer 3-4 workflows liés à leur douleur |
| Deep-dive technique | 45-60 min | Architecture, sécurité, intégrations, API |
| Vue d'ensemble dirigeants | 20-30 min | Résultats métier, ROI, alignement stratégique |

### Principes clés

- **La démo après la découverte, jamais avant.** Si vous ne connaissez pas leur douleur, vous devinez quelles fonctionnalités comptent.
- **Personnalisez pour leur cas d'usage.** Employez leur terminologie, leurs données si possible, leur workflow.
- **Laissez du temps pour les questions.** Une démo où le prospect ne parle pas est une démo qui ne conclut pas.

**Pour les templates complets de scripts** : consultez [references/demo-scripts.md](references/demo-scripts.md)

## Briefs d'études de cas (format commercial)

### Ce qui distingue une étude de cas commerciale

Les études de cas marketing racontent une histoire. Les études de cas commerciaux arment les représentants avec des preuves d'accès rapide. Gardez-les courtes, orientées résultats et étiquetées pour la recherche.

### Structure

1. **Profil client** — Secteur, taille d'entreprise, rôle de l'acheteur
2. **Défi** — Ce qui leur posait problème (2-3 phrases)
3. **Solution** — Ce qu'ils ont implémenté (1-2 phrases)
4. **Résultats** — 3 métriques précises (avant/après)
5. **Citation** — Une phrase du client
6. **Étiquettes** — Secteur, cas d'usage, taille d'entreprise, persona

### Organisation

Organisez les études de cas pour que les représentants trouvent la bonne immédiatement :

- **Par secteur** — « Montrez-moi une étude de cas pour la santé »
- **Par cas d'usage** — « Montrez-moi quelqu'un qui nous a utilisés pour X »
- **Par taille d'entreprise** — « Montrez-moi un exemple enterprise »

## Templates de propositions

### Structure

1. **Résumé exécutif** — Leur défi, votre solution, résultat attendu (1 page maximum)
2. **Solution proposée** — Ce que vous livrerez, mappé sur leurs exigences
3. **Plan d'implémentation** — Calendrier, jalons, responsabilités
4. **Investissement** — Prix, conditions de paiement, ce qui est inclus
5. **Prochaines étapes** — Comment avancer, calendrier de décision

### Personnalisation

- Reprenez leur langage des appels de découverte
- Référencez les points de douleur précis qu'ils ont mentionnés
- N'incluez que les études de cas pertinentes (même secteur ou cas d'usage)
- Nommez les parties prenantes que vous avez rencontrées

### Erreurs courantes

- **Trop longue** — Au-delà de 10 pages, elle ne sera pas lue. Visez 5-7 pages.
- **Trop générique** — Une proposition templatisée signale un manque d'effort. Personnalisez au minimum le résumé exécutif.
- **Prix enfoui** — Ne les forcez pas à le chercher. Soyez transparent et assuré.

## Sales playbooks

### Contenu d'un playbook

- **Profil de l'acheteur** — À qui vous vendez, leurs objectifs et leurs douleurs
- **Critères de qualification** — BANT, MEDDIC, ou votre framework
- **Questions de découverte** — Organisées par thème, pas un script
- **Traitement des objections** — Top 10 des objections avec réponses
- **Positionnement concurrentiel** — Comment vous gagnez contre chaque concurrent
- **Déroulé de démo** — Séquence recommandée par persona
- **Templates d'e-mails** — Suivi, proposition, check-in, rupture

### Quand le construire

- **Lancement d'un nouveau produit** — Les représentants ont besoin d'une source de vérité unique
- **Nouveau segment de marché** — Des acheteurs différents exigent des approches différentes
- **Montée en compétence des nouvelles recrues** — Les playbooks réduisent nettement le temps de ramp-up

### Le garder vivant

Un playbook meurt quand on ne le met plus à jour. Révisez chaque trimestre, recueillez les retours des meilleurs représentants, supprimez ce qui est périmé. Assignez un propriétaire — sans propriétaire, il pourrit.

## Buyer persona cards

### Structure de la carte

| Champ | Description |
|-------|-------------|
| Rôle / intitulé | Intitulés courants et rattachement hiérarchique |
| Objectifs | À quoi ressemble la réussite pour cette personne |
| Douleurs | Ce qui la frustre au quotidien |
| Objections principales | Les 3-5 objections que vous entendrez de ce rôle |
| Critères d'évaluation | Comment cette personne juge les solutions |
| Processus d'achat | Son rôle dans la décision, qui elle influence |
| Angle de messagerie | La phrase unique qui résonne le plus |

### Types de personas

- **Acheteur économique** — Signe le chèque. Se soucie du ROI et du risque.
- **Acheteur technique** — Évalue le produit. Se soucie des capacités et de l'intégration.
- **Utilisateur final** — L'utilise au quotidien. Se soucie de la simplicité et de l'adéquation au workflow.
- **Champion** — Défend la solution en interne. A besoin de munitions pour vendre pour vous.
- **Bloqueur** — S'oppose à l'achat. Comprenez son inquiétude pour la neutraliser.

## Format de sortie

Livrez le bon format pour chaque type d'asset :

| Asset | Livrable |
|-------|----------|
| Sales deck | Plan slide par slide avec titre, copy et notes du présentateur |
| One-pager | Copy complète avec consignes de mise en page (hiérarchie visuelle, sections) |
| Document d'objections | Format tableau : objection, réponse, preuve, relance |
| Script de démo | Scène par scène avec minutage, talk track et points d'interaction |
| Calculateur de ROI | Champs d'entrée, formules, affichage des sorties avec données d'exemple |
| Playbook | Document structuré avec table des matières et sections |
| Persona card | Format carte d'une page par persona |
| Proposition | Copy section par section avec notes de personnalisation |

## Questions spécifiques à la tâche

Si le contexte manque, demandez :

1. De quels supports avez-vous besoin ? (deck, one-pager, document d'objections, etc.)
2. Qui les utilisera ? (AE, SDR, champion, prospect)
3. Pour quelle étape de vente ? (prospection, découverte, démo, négociation, clôture)
4. Quel est le persona cible ? (intitulé, séniorité, département)
5. Quelles sont les 3 objections que vous entendez le plus ?

## Intégrations d'outils

Pour le sales enablement partenaires, consultez le [registre des outils](https://github.com/mbzadev/skills/blob/main/tools/REGISTRY.md) :

| Outil | Rôle | Guide |
|-------|------|-------|
| **Introw** | Suivi de l'engagement partenaires, deal registration, plans d'action mutuels | [introw.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/introw.md) |

## Skills liés

- `competitors` : pour les pages de comparaison et d'alternatives publiques
- `copywriting` : pour le copy du site marketing
- `cold-email` : pour les e-mails de prospection outbound
- `revops` : pour le cycle de vie des leads, le scoring, le routage et la gestion du pipeline
- `pricing` : pour les décisions de pricing et de packaging
- `product-marketing` : pour le positionnement et la messagerie fondateurs
