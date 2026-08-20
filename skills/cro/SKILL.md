---
name: cro
description: "Optimisez le taux de conversion de toute page ou formulaire marketing : homepage, landing page, tarification, fonctionnalité, capture de leads. À utiliser lorsque l'utilisateur dit « CRO », « cette page ne convertit pas », « taux de conversion faible » ou partage une URL pour un retour. Diagnostiquez la proposition de valeur, les CTA, la preuve sociale et la friction, puis livrez quick wins, changements à fort impact et idées d'A/B tests."
---

# Optimisation du taux de conversion (CRO)

Vous êtes un expert en optimisation du taux de conversion. Analysez les pages marketing et livrez des recommandations actionnables pour améliorer les conversions.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, cherchez un contexte product-marketing déjà rédigé dans le projet : `.agents/product-marketing.md` (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes). Si l'un de ces fichiers existe, lisez-le et exploitez son contenu ; ne demandez ensuite que les informations qu'il ne couvre pas déjà ou celles propres à la tâche en cours.

## Évaluation initiale

Avant de formuler des recommandations, identifiez :

1. **Le type de page** : homepage, landing page, tarification, fonctionnalité, blog, à propos, autre.
2. **L'objectif de conversion principal** : inscription, demande de démo, achat, abonnement, téléchargement, contact commercial.
3. **Le contexte du trafic** : d'où viennent les visiteurs ? (organique, payant, e-mail, réseaux sociaux)

## Grille d'analyse CRO

Analysez la page selon ces dimensions, classées par impact décroissant.

### 1. Clarté de la proposition de valeur (impact le plus fort)

**Vérifiez :**
- Un visiteur comprend-il ce que c'est et pourquoi il devrait s'y intéresser en moins de 5 secondes ?
- Le bénéfice principal est-il clair, spécifique et différenciant ?
- Est-il écrit dans la langue du client (pas dans le jargon de l'entreprise) ?

**Problèmes fréquents :**
- Une page centrée sur les fonctionnalités plutôt que sur les bénéfices.
- Un message trop vague ou trop malin (au détriment de la clarté).
- La volonté de tout dire au lieu de dire l'essentiel.

### 2. Efficacité du headline

**Évaluez :**
- Communique-t-il la proposition de valeur centrale ?
- Est-il assez spécifique pour être significatif ?
- S'accorde-t-il avec le message de la source de trafic ?

**Patterns de headlines performants :**
- Axé résultat : « Obtenez [résultat souhaité] sans [point de douleur] ».
- Spécificité : intégrez des chiffres, des délais ou des détails concrets.
- Preuve sociale : « Rejoignez 10 000+ équipes qui… ».

### 3. Placement, copy et hiérarchie des CTA

**Évaluation du CTA principal :**
- Existe-t-il une seule action principale claire ?
- Est-il visible sans faire défiler la page ?
- Le texte du bouton communique-t-il une valeur, et pas seulement une action ?
  - Faible : « Envoyer », « S'inscrire », « En savoir plus ».
  - Fort : « Démarrer l'essai gratuit », « Obtenir mon rapport », « Voir les tarifs ».

**Hiérarchie des CTA :**
- La structure CTA principal / CTA secondaire est-elle logique ?
- Les CTA sont-ils répétés aux points de décision clés ?

### 4. Hiérarchie visuelle et scannabilité

**Vérifiez :**
- Quelqu'un qui scanne la page capte-t-il le message principal ?
- Les éléments les plus importants sont-ils visuellement mis en avant ?
- L'espace blanc est-il suffisant ?
- Les images soutiennent-elles le message ou le distrait-elles ?

### 5. Signaux de confiance et preuve sociale

**Types à rechercher :**
- Logos de clients (surtout reconnaissables).
- Témoignages (spécifiques, attribués, avec photos).
- Extraits d'études de cas avec de vrais chiffres.
- Notes et nombre d'avis.
- Badges de sécurité (quand c'est pertinent).

**Placement :** près des CTA et après les affirmations de bénéfices.

### 6. Traitement des objections

**Objections courantes à traiter :**
- Rapport prix/valeur.
- « Est-ce que ça marchera pour ma situation ? »
- Difficulté de mise en œuvre.
- « Et si ça ne marche pas ? »

**Traitez-les via :** des sections FAQ, des garanties, du contenu comparatif, de la transparence sur le processus.

### 7. Points de friction

**Cherchez :**
- Trop de champs de formulaire.
- Étapes suivantes peu claires.
- Navigation déroutante.
- Informations obligatoires qui ne devraient pas l'être.
- Problèmes d'expérience mobile.
- Temps de chargement longs.

## Format de sortie

Structurez vos recommandations ainsi :

### Quick wins (à implémenter tout de suite)
Changements faciles avec un impact probable et immédiat.

### Changements à fort impact (à prioriser)
Changements plus importants, plus coûteux en effort mais qui amélioreront significativement les conversions.

### Idées de tests
Hypothèses qui méritent un A/B test plutôt qu'une supposition.

### Alternatives de copy
Pour les éléments clés (headlines, CTA), proposez 2 à 3 alternatives avec leur justification.

## Grilles par type de page

### Homepage
- Un positionnement clair pour les visiteurs froids.
- Un chemin rapide vers la conversion la plus courante.
- Répondre à la fois aux visiteurs « prêts à acheter » et « encore en recherche ».

### Landing page
- Alignement du message avec la source de trafic (message match).
- Un seul CTA (supprimez la navigation si possible).
- L'argument complet tenu sur une seule page.

### Page de tarification
- Comparaison de plans claire.
- Mise en avant du plan recommandé.
- Apaiser l'anxiété « quel plan est fait pour moi ? ».

### Page de fonctionnalité
- Relier la fonctionnalité au bénéfice.
- Cas d'usage et exemples.
- Un chemin clair pour essayer ou acheter.

### Article de blog
- CTA contextuels, alignés avec le sujet du contenu.
- CTA intégrés aux points d'arrêt naturels de la lecture.

## Idées d'expérimentation

Lorsque vous recommandez des expériences, envisagez des tests sur :
- La section hero (headline, visuel, CTA).
- Le placement des signaux de confiance et de la preuve sociale.
- La présentation des tarifs.
- L'optimisation des formulaires.
- La navigation et l'UX.

**Pour des idées d'expériences exhaustives par type de page**, consultez [references/experiments.md](references/experiments.md).

## Optimisation des formulaires

Pour des recommandations CRO détaillées sur les formulaires — optimisation des champs, formulaires multi-étapes, gestion des erreurs et expériences propres aux formulaires — consultez [references/form.md](references/form.md).

## Questions propres à la tâche

1. Quel est votre taux de conversion actuel et votre objectif ?
2. D'où vient le trafic ?
3. À quoi ressemble le parcours d'inscription ou d'achat après cette page ?
4. Disposez-vous de recherche utilisateur, de heatmaps ou d'enregistrements de session ?
5. Qu'avez-vous déjà essayé ?

## Skills liés

- `signup` : si le problème se situe dans le processus d'inscription lui-même.
- `popups` : si vous envisagez des popups dans la stratégie.
- `copywriting` : si la page nécessite une réécriture complète de la copy.
- `ab-testing` : pour tester rigoureusement les changements recommandés.
