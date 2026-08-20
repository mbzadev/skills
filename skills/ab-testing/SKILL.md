---
name: ab-testing
description: "Planifiez, concevez et implémentez des A/B tests statistiquement valides, ou bâtissez un programme d'expérimentation growth. À utiliser lorsque l'utilisateur dit « A/B test », « split test », « testons ce changement », « significativité statistique », « combien de temps doit durer ce test », « ICE score », ou veut départager deux versions par la mesure. Pour le tracking du test, voyez analytics ; pour l'optimisation de page au sens CRO, cro."
---

# Conception d'A/B tests

Vous êtes un expert en expérimentation et en A/B testing. Votre objectif : concevoir des tests qui produisent des résultats statistiquement valides et actionnables — pas des comparaisons au doigt mouillé qui finissent en décisions au hasard.

## Vérifiez d'abord le contexte product-marketing

Avant de poser des questions, cherchez un contexte product-marketing dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes), lisez-le. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

Avant de concevoir un test, comprenez :

1. **Le contexte du test** — Qu'essayez-vous d'améliorer ? Quel changement envisagez-vous ?
2. **L'état actuel** — Quel est le taux de conversion de référence ? Quel est le volume de trafic actuel ?
3. **Les contraintes** — Complexité technique ? Délais ? Outils disponibles ?

## Principes fondamentaux

### 1. Partez d'une hypothèse

- Pas simplement « voyons ce que ça donne ».
- Une prédiction précise du résultat.
- Fondée sur un raisonnement ou des données.

### 2. Testez une seule chose

- Une variable unique par test.
- Sinon, impossible de savoir ce qui a fonctionné.

### 3. Rigueur statistique

- Déterminez la taille d'échantillon à l'avance.
- Ne regardez pas les résultats en cours de route pour arrêter plus tôt.
- Engagez-vous sur la méthodologie.

### 4. Mesurez ce qui compte

- Une métrique primaire liée à la valeur business.
- Des métriques secondaires pour le contexte.
- Des guardrail metrics pour prévenir les dégâts.

## Cadre d'hypothèse

### Structure

```
Parce que [observation/donnée],
nous pensons que [changement]
provoquera [résultat attendu]
pour [audience].
Nous saurons que c'est vrai quand [métriques].
```

### Exemple

**Faible** : « Changer la couleur du bouton augmentera peut-être les clics. »

**Fort** : « Parce que les utilisateurs rapportent des difficultés à trouver le CTA (heatmaps et retours utilisateurs), nous pensons qu'agrandir le bouton et utiliser une couleur contrastante augmentera les clics sur le CTA de 15 % ou plus pour les nouveaux visiteurs. Nous mesurerons le click-through rate de la vue de page au début d'inscription. »

## Types de tests

| Type | Description | Trafic nécessaire |
|------|-------------|-------------------|
| A/B | Deux versions, un seul changement | Modéré |
| A/B/n | Plusieurs variantes | Plus élevé |
| MVT (multivariate) | Plusieurs changements en combinaisons | Très élevé |
| Split URL | Des URLs différentes pour chaque variante | Modéré |

## Taille d'échantillon

### Référence rapide

| Taux de base | Lift de 10 % | Lift de 20 % | Lift de 50 % |
|--------------|--------------|--------------|--------------|
| 1 % | 150k/variante | 39k/variante | 6k/variante |
| 3 % | 47k/variante | 12k/variante | 2k/variante |
| 5 % | 27k/variante | 7k/variante | 1,2k/variante |
| 10 % | 12k/variante | 3k/variante | 550/variante |

**Calculateurs :**
- [Evan Miller](https://www.evanmiller.org/ab-testing/sample-size.html)
- [Optimizely](https://www.optimizely.com/sample-size-calculator/)

**Pour les tables détaillées de tailles d'échantillon et les calculs de durée** : consultez [references/sample-size-guide.md](references/sample-size-guide.md).

## Choix des métriques

### Métrique primaire

- Une seule métrique qui compte le plus.
- Directement liée à l'hypothèse.
- Celle qui servira à trancher le test.

### Métriques secondaires

- Étayent l'interprétation de la métrique primaire.
- Expliquent pourquoi et comment le changement a fonctionné.

### Guardrail metrics

- Ce qui ne doit pas se dégrader.
- Interrompez le test si elles deviennent significativement négatives.

### Exemple : test sur une page tarifs

- **Primaire** : taux de sélection d'un plan
- **Secondaires** : temps sur la page, distribution des plans
- **Guardrails** : tickets de support, taux de remboursement

## Conception des variantes

### Que faire varier

| Catégorie | Exemples |
|-----------|----------|
| Titres / copy | Angle du message, proposition de valeur, spécificité, ton |
| Design visuel | Mise en page, couleurs, images, hiérarchie |
| CTA | Texte du bouton, taille, placement, nombre |
| Contenu | Informations incluses, ordre, quantité, preuve sociale |

### Bonnes pratiques

- Un seul changement, mais significatif.
- Assez audacieux pour produire une différence.
- Fidèle à l'hypothèse.

## Allocation du trafic

| Approche | Répartition | Quand l'utiliser |
|----------|-------------|------------------|
| Standard | 50/50 | Le défaut pour un A/B |
| Conservatrice | 90/10, 80/20 | Limiter le risque d'une mauvaise variante |
| Progressive (ramping) | Démarrer petit, augmenter | Atténuer le risque technique |

**Points de vigilance :**
- Cohérence : un même utilisateur retrouve sa variante à chaque visite.
- Exposition équilibrée selon l'heure du jour et le jour de la semaine.

## Implémentation

### Client-side

- JavaScript modifie la page après chargement.
- Rapide à implémenter, peut provoquer du flicker.
- Outils : PostHog, Optimizely, VWO.

### Server-side

- La variante est déterminée avant le rendu.
- Pas de flicker, exige du travail de développement.
- Outils : PostHog, LaunchDarkly, Split.

## Déroulement du test

### Checklist de pré-lancement

- [ ] Hypothèse documentée
- [ ] Métrique primaire définie
- [ ] Taille d'échantillon calculée
- [ ] Variantes correctement implémentées
- [ ] Tracking vérifié
- [ ] QA effectuée sur toutes les variantes

### Pendant le test

**À faire :**
- Surveiller les problèmes techniques.
- Contrôler la qualité des segments.
- Documenter les facteurs externes.

**À éviter :**
- Regarder les résultats et arrêter avant la taille d'échantillon prévue
- Modifier les variantes en cours de test
- Ajouter du trafic depuis de nouvelles sources

### Le problème du peeking

Consulter les résultats avant d'avoir atteint la taille d'échantillon et arrêter en avance provoque des faux positifs et des décisions erronées. Engagez-vous à l'avance sur la taille d'échantillon et faites confiance au processus.

## Analyse des résultats

### Significativité statistique

- 95 % de confiance = p-value < 0,05.
- Cela signifie moins de 5 % de chances que le résultat soit dû au hasard.
- Ce n'est pas une garantie — juste un seuil.

### Checklist d'analyse

1. **Taille d'échantillon atteinte ?** Sinon, le résultat est préliminaire.
2. **Statistiquement significatif ?** Vérifiez les intervalles de confiance.
3. **Taille d'effet significative ?** Comparez au MDE, projetez l'impact.
4. **Métriques secondaires cohérentes ?** Étayent-elles la primaire ?
5. **Alertes guardrails ?** Quelque chose s'est-il dégradé ?
6. **Écarts de segments ?** Mobile versus desktop ? Nouveaux versus revenants ?

### Interpréter les résultats

| Résultat | Conclusion |
|----------|------------|
| Vainqueur significatif | Implémentez la variante |
| Perdant significatif | Gardez le contrôle, comprenez pourquoi |
| Pas de différence significative | Il faut plus de trafic ou un test plus audacieux |
| Signaux mixtes | Creusez, éventuellement par segment |

## Documentation

Documentez chaque test avec :
- L'hypothèse
- Les variantes (avec captures d'écran)
- Les résultats (échantillon, métriques, significativité)
- La décision et les apprentissages

**Pour les templates** : consultez [references/test-templates.md](references/test-templates.md).

## Programme d'expérimentation growth

Les tests isolés ont de la valeur ; un programme d'expérimentation continu est un actif qui se cumule. Cette section couvre la conduite des expériences comme un moteur de growth permanent, pas seulement des tests ponctuels.

### La boucle d'expérimentation

```
1. Générer des hypothèses (à partir des données, de la recherche, des concurrents, du feedback client)
2. Prioriser avec un scoring ICE
3. Concevoir et lancer le test
4. Analyser les résultats avec rigueur statistique
5. Promouvoir les gagnants dans un playbook
6. Générer de nouvelles hypothèses à partir des apprentissages
→ Recommencer
```

### Génération d'hypothèses

Alimentez votre backlog d'expériences à partir de sources multiples :

| Source | Ce qu'il faut chercher |
|--------|------------------------|
| Analytics | Points d'abandon, pages à faible conversion, segments sous-performants |
| Recherche client | Points de douleur, confusions, attentes non satisfaites |
| Analyse concurrentielle | Fonctionnalités, messages ou motifs UX qu'ils utilisent et pas vous |
| Tickets de support | Questions ou plaintes récurrentes sur les parcours de conversion |
| Heatmaps / enregistrements | Où les utilisateurs hésitent, rage-cliquent ou abandonnent |
| Expériences passées | Les tests « perdants significatifs » révèlent souvent de nouveaux angles à tester |

### Priorisation ICE

Notez chaque hypothèse de 1 à 10 sur trois dimensions :

| Dimension | Question |
|-----------|----------|
| **Impact** | Si ça marche, de combien cela fera-t-il bouger la métrique primaire ? |
| **Confidence** | Quel est notre degré de certitude que ça marche ? (Fondé sur des données, pas sur l'intuition.) |
| **Ease** | Avec quelle vitesse et à quel coût pouvons-nous livrer et mesurer ? |

**Score ICE** = (Impact + Confidence + Ease) / 3

Lancez d'abord les expériences aux scores les plus élevés. Rescorez chaque mois, le contexte évoluant.

### Vélocité d'expérimentation

Suivez votre rythme d'expérimentation comme indicateur avancé du growth :

| Métrique | Cible |
|----------|-------|
| Expériences lancées par mois | 4 à 8 pour la plupart des équipes |
| Taux de réussite (win rate) | 20 à 30 % est courant pour un programme mature (un taux durablement plus élevé signale des hypothèses trop timides) |
| Durée moyenne d'un test | 2 à 4 semaines |
| Profondeur du backlog | 20+ hypothèses en file |
| Lift cumulé | Gains composés de tous les gagnants |

### Le playbook d'expériences

Quand un test gagne, ne vous contentez pas de l'implémenter — documentez le motif :

```
## [Nom de l'expérience]
**Date** : [date]
**Hypothèse** : [l'hypothèse]
**Taille d'échantillon** : [n par variante]
**Résultat** : [gagnant/perdant/non concluant] — [métrique primaire] a varié de [X %] (IC 95 % : [plage], p=[valeur])
**Guardrails** : [les éventuelles métriques guardrail et leurs résultats]
**Écarts de segments** : [différences notables par appareil, segment ou cohorte]
**Pourquoi ça a marché/échoué** : [analyse]
**Motif** : [l'insight réutilisable — ex. « la preuve sociale près des CTA tarifs augmente la sélection de plan »]
**À appliquer à** : [autres pages/parcours où ce motif pourrait fonctionner]
**Statut** : [implémenté / mis de côté / test de suivi nécessaire]
```

Avec le temps, votre playbook devient une bibliothèque de motifs de growth éprouvés, propres à votre produit et à votre audience.

### Cadence d'expérimentation

**Chaque semaine (30 min)** : passez en revue les expériences en cours pour détecter les problèmes techniques et surveiller les guardrails. Ne déclarez pas de vainqueur en avance — mais arrêtez bien les tests dont les guardrails sont significativement négatifs.

**Toutes les deux semaines** : concluez les expériences terminées. Analysez les résultats, mettez à jour le playbook, lancez l'expérience suivante du backlog.

**Chaque mois (1 heure)** : examinez la vélocité d'expérimentation, le win rate, le lift cumulé. Réapprovisionnez le backlog d'hypothèses. Repriorisez avec ICE.

**Chaque trimestre** : auditez le playbook. Quels motifs ont été appliqués à grande échelle ? Quels motifs gagnants n'ont pas encore été scalés ? Quelles zones du funnel sont sous-testées ?

## Erreurs courantes

### Conception du test

- Tester un changement trop petit (indétectable)
- Tester trop de choses à la fois (impossible d'isoler)
- Pas d'hypothèse claire

### Exécution

- Arrêter trop tôt
- Modifier des éléments en cours de test
- Ne pas vérifier l'implémentation

### Analyse

- Ignorer les intervalles de confiance
- Choisir les segments qui arrangent (cherry-picking)
- Sur-interpréter des résultats non concluants

## Questions spécifiques à la tâche

1. Quel est votre taux de conversion actuel ?
2. Combien de trafic reçoit cette page ?
3. Quel changement envisagez-vous, et pourquoi ?
4. Quel est le plus petit gain qui vaut la peine d'être détecté ?
5. Quels outils de test avez-vous ?
6. Avez-vous déjà testé cette zone ?

## Skills liés

- `cro` : pour générer des idées de tests fondées sur les principes du CRO
- `analytics` : pour mettre en place la mesure du test
- `copywriting` : pour rédiger la copy des variantes
