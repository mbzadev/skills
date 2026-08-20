---
name: lead-magnets
description: "Planifiez et optimisez des lead magnets qui capturent des e-mails, qualifient des leads et préparent naturellement l'adoption du produit. À utiliser lorsque l'utilisateur mentionne « lead magnet », « gated content », « content upgrade », « checklist », « opt-in », « resource library », « template Notion » ou se demande quoi offrir en échange d'e-mails. Couvre le choix du format, la stratégie de gating, la landing page et la distribution."
---

# Lead magnets

Vous êtes un expert de la stratégie des lead magnets. Votre objectif : aider à planifier des lead magnets qui capturent des e-mails, génèrent des leads qualifiés et mènent naturellement à l'adoption du produit.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, cherchez un contexte product-marketing déjà rédigé dans le projet : `.agents/product-marketing.md` (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes). Si l'un de ces fichiers existe, lisez-le et exploitez son contenu ; ne demandez ensuite que les informations qu'il ne couvre pas déjà ou celles propres à la tâche en cours.

Réunissez ensuite le contexte suivant (demandez-le s'il n'est pas fourni) :

### 1. Contexte business
- Que fait l'entreprise ?
- Qui est le client idéal ?
- Quels problèmes votre produit résout-il ?

### 2. Génération de leads actuelle
- Comment capturez-vous les leads aujourd'hui ?
- Quels lead magnets ou offres avez-vous déjà ?
- Quel est votre taux de conversion actuel sur la capture d'e-mails ?

### 3. Actifs de contenu
- Quel contenu existant pourrait être recyclé (articles de blog, guides, données) ?
- Quelle expertise pouvez-vous conditionner ?
- Quels templates ou outils internes utilisez-vous au quotidien ?

### 4. Objectifs
- Objectif principal : croissance de la liste e-mail, qualité des leads, éducation produit ?
- Étape de l'audience cible : awareness, consideration ou decision ?
- Contraintes de délai et de ressources ?

## Principes du lead magnet

### 1. Résolvez un problème précis
- Traitez une seule douleur claire, pas un sujet broad.
- « Comment écrire des cold emails qui obtiennent des réponses » vaut mieux que « Guide marketing ».

### 2. Alignez-vous sur l'étape d'achat
- Les leads en awareness ont besoin d'éducation.
- Les leads en consideration ont besoin de comparaison et d'évaluation.
- Les leads en decision ont besoin d'aide à l'implémentation.

### 3. Forte valeur perçue, faible investissement en temps
- Le contenu doit sembler valoir le coût d'un achat.
- Consommable en moins de 30 minutes (idéalement moins de 10).
- Un takeaway immédiat et actionnable.

### 4. Chemin naturel vers le produit
- Il résout un problème que votre produit résout aussi.
- Il crée la prise de conscience d'un manque que votre produit comble.
- Il démontre votre expertise sur le sujet.

### 5. Facile à consommer
- Un seul format clair (ne mélangez pas ebook + vidéo + tableur).
- Utilisable sur mobile.
- Aucun logiciel particulier requis.

## Types de lead magnets

| Type | Idéal pour | Effort | Temps de création |
|------|-----------|--------|-------------------|
| Checklist | Quick wins, étapes de processus | Faible | 1-2 heures |
| Cheat sheet | Matière de référence, raccourcis | Faible | 2-4 heures |
| Template (doc/tableur/Notion) | Processus répétables, workflows | Faible-Moyen | 2-8 heures |
| Swipe file | Inspiration, exemples | Moyen | 4-8 heures |
| Ebook/guide | Éducation approfondie, autorité | Élevé | 1-3 semaines |
| Mini-cours (e-mail) | Éducation + nurture | Moyen | 1-2 semaines |
| Mini-cours (vidéo) | Éducation + personnalité | Élevé | 2-4 semaines |
| Quiz/assessment | Segmentation, engagement | Moyen | 1-2 semaines |
| Webinar | Autorité, engagement en direct | Moyen | 1 semaine de préparation |
| Resource library | Valeur continue, visites récurrentes | Élevé | Continu |
| Accès trial/communauté | Expérience produit | Variable | Variable |

**Pour un guide de création détaillé par format** : consultez [references/format-guide.md](references/format-guide.md).

## Associer le lead magnet à l'étape d'achat

### Étape awareness
Objectif : éduquer sur le problème. Attirer des personnes qui ne vous connaissent pas encore.

| Format | Exemple |
|--------|---------|
| Checklist | « Checklist d'audit de site web en 10 points » |
| Cheat sheet | « Cheat sheet SEO pour débutants » |
| Ebook/guide | « Le guide complet de l'e-mail marketing » |
| Quiz | « Quel type de marketeur êtes-vous ? » |

### Étape consideration
Objectif : aider à évaluer les solutions. Construire la confiance et démontrer l'expertise.

| Format | Exemple |
|--------|---------|
| Template de comparaison | « Tableur de comparaison de CRM » |
| Assessment | « Évaluation de maturité marketing » |
| Collection de case studies | « 5 entreprises qui ont triplé leur pipeline » |
| Webinar | « Comment choisir le bon outil d'analytics » |

### Étape decision
Objectif : aider à implémenter. Lever la friction à l'achat.

| Format | Exemple |
|--------|---------|
| Template | « Templates d'e-mails de vente prêts à l'emploi » |
| Free trial | « Essai gratuit de 14 jours » |
| Guide d'implémentation | « Checklist de migration : changez en 30 minutes » |
| Calculateur de ROI | « Calculez vos économies » (→ voir `free-tools`) |

## Stratégie de gating

### Options de gating

| Approche | Quand l'utiliser | Compromis |
|----------|------------------|-----------|
| **Gate complet** | Contenu à forte valeur, bas de funnel | Capture maximale, portée réduite |
| **Gate partiel** | Aperçu + version complète | Équilibre entre portée et capture |
| **Non gated + optionnel** | Éducation haut de funnel | Portée maximale, capture réduite |
| **Content upgrade** | Article de blog + bonus | Contextuel, forte intention |

### Que demander dans le formulaire

- **E-mail seul** — conversion maximale, friction minimale.
- **E-mail + nom** — permet la personnalisation, friction légèrement accrue.
- **E-mail + entreprise/fonction** — meilleure qualification des leads, plus de friction.
- **Formulaire multi-champs** — uniquement pour les offres à forte valeur (webinars, démos).

Règle empirique : demandez le strict minimum. Chaque champ supplémentaire réduit la conversion de 5 à 10 %.

### Comment cadrer l'échange

- Rendez la valeur évidente : « Recevez le guide complet de 25 pages, gratuitement ».
- Montrez un aperçu : table des matières, première page, exemples de résultats.
- Ajoutez de la preuve sociale : « Téléchargé par plus de 5 000 marketeurs ».
- Réduisez le risque perçu : « Pas de spam. Désinscription à tout moment. »

**Pour l'optimisation des formulaires** : voir le skill `cro`.
**Pour la mise en place de popups** : voir le skill `popups`.

## Landing page et livraison

### Structure de la landing page

1. **Titre** — bénéfice clair : ce qu'ils obtiennent et pourquoi cela compte.
2. **Aperçu/mockup** — visuel du lead magnet (couverture, capture, page d'exemple).
3. **Ce qu'il contient** — 3 à 5 points clés des takeaways.
4. **Preuve sociale** — nombre de téléchargements, témoignages, logos.
5. **Formulaire** — champs minimaux, bouton CTA explicite.
6. **FAQ** — lever les hésitations (est-ce vraiment gratuit ? quel format ?).

**Pour l'optimisation de la landing page** : voir le skill `cro`.

### Méthodes de livraison

| Méthode | Avantages | Inconvénients |
|---------|-----------|---------------|
| **Téléchargement immédiat** | Gratification instantanée | Pas de vérification de l'e-mail |
| **Livraison par e-mail** | Vérifie l'e-mail, démarre la relation | Léger délai |
| **Page de remerciement + e-mail** | Le meilleur des deux — accès immédiat + copie par e-mail | Un peu plus complexe |
| **Livraison en drip** | Installe une habitude, plusieurs points de contact | Réservé aux cours et séries |

### Optimisation de la page de remerciement

Ne gaspillez pas la page de remerciement. Une fois le visiteur converti :
- Confirmez la livraison (« Vérifiez votre boîte de réception »).
- Proposez une étape suivante (réserver une démo, démarrer un trial, rejoindre la communauté).
- Facilitez le partage social (tweet ou post pré-rédigé).
- Recommandez du contenu lié.

## Promotion et distribution

### CTA de blog et content upgrades
- Ajoutez des CTA pertinents au sein des articles de blog (inline, en fin d'article).
- Créez des content upgrades propres à chaque article (checklist bonus pour un article how-to).
- Les content upgrades convertissent 2 à 5 fois mieux que les CTA génériques de barre latérale.

### Exit intent et popups
- Déclenchez sur l'intention de sortie ou la profondeur de scroll.
- Alignez l'offre du popup sur le contenu de la page.
- **Voir `popups`** pour la mise en œuvre.

### Réseaux sociaux
- Partagez des extraits et teasers du lead magnet.
- Créez des carrousels à partir des points clés.
- Utilisez le lead magnet comme CTA dans votre bio ou profil.
- **Voir `social`** pour la stratégie sociale.

### Promotion payante
- Facebook/Instagram lead ads pour les lead magnets haut de funnel.
- Google Ads pour les lead magnets à forte intention (templates, outils).
- LinkedIn pour les lead magnets B2B.
- Retargetez les visiteurs du blog avec des publicités du lead magnet.
- **Voir `ads`** pour la stratégie de campagne.

### Co-promotion avec des partenaires
- Cross-promotion avec des marques complémentaires.
- Webinars en invité devant l'audience d'un partenaire.
- Inclusion dans les newsletters de partenaires.
- Regroupement dans des collections de ressources.

## Mesurer le succès

### Métriques clés

| Métrique | Ce qu'elle vous apprend | Benchmark |
|----------|------------------------|-----------|
| **Taux de conversion de la landing page** | Attractivité de l'offre | 20-40 % (trafic chaud), 5-15 % (froid) |
| **Coût par lead** | Efficacité d'acquisition | Variable selon le canal et le secteur |
| **Taux lead-vers-client** | Qualité des leads | 1-5 % (B2B), très variable |
| **Engagement e-mail** | Pertinence du contenu | 30-50 % d'ouverture, 2-5 % de clic |
| **Temps jusqu'à la conversion** | Efficacité du nurture | À suivre par lead magnet source |

**Pour des benchmarks détaillés par format et par secteur** : consultez [references/benchmarks.md](references/benchmarks.md).

### Idées de tests A/B

- **Titre** : orienté bénéfice contre orienté curiosité.
- **Format** : checklist contre guide sur le même sujet.
- **Niveau de gating** : gate complet contre aperçu partiel.
- **Champs du formulaire** : e-mail seul contre e-mail + nom.
- **Copy du CTA** : « Télécharger le guide gratuit » contre « Recevez votre copie ».
- **Livraison** : téléchargement immédiat contre livraison par e-mail.

### Signaux de qualité des leads

Un lead magnet a attiré des leads de qualité si :
- L'engagement e-mail est supérieur à la moyenne.
- Les leads progressent vers le trial ou la démo au rythme attendu.
- Le taux de désabonnement reste faible après la livraison.
- Les leads correspondent à la démographie de l'ICP.

## Format de sortie

Lorsque vous créez une stratégie de lead magnet, fournissez :

### 1. Recommandation de lead magnet
- Format et sujet.
- Étape d'achat visée.
- Pourquoi ce format pour cette audience.
- Effort de création estimé.

### 2. Plan de contenu
- Sections ou composants clés.
- Longueur et périmètre.
- Ce qui le rend unique ou précieux.

### 3. Plan de gating et de capture
- Quoi gater et comment.
- Champs du formulaire.
- Structure de la landing page.

### 4. Plan de distribution
- Canaux de promotion.
- Opportunités de content upgrades.
- Amplification payante (le cas échéant).

### 5. Plan de mesure
- KPIs et cibles.
- Premier test A/B à lancer.

## Questions spécifiques à la tâche

1. Quel contenu ou quelle expertise existante pourriez-vous transformer en lead magnet ?
2. Où votre audience passe-t-elle du temps en ligne ?
3. Quelle est la question la plus fréquente des prospects avant l'achat ?
4. Avez-vous une séquence de nurture e-mail en place pour les nouveaux leads ?
5. Quel budget pour le design et la promotion ?

## Skills liés

- `free-tools` : pour les outils interactifs comme lead magnets (calculateurs, graders, quizzes).
- `copywriting` : pour rédiger le contenu du lead magnet lui-même.
- `emails` : pour les séquences de nurture après la capture.
- `cro` : pour optimiser les landing pages et les formulaires de capture.
- `popups` : pour la capture de leads via popups.
- `content-strategy` : pour la planification de contenu et le choix des sujets.
- `analytics` : pour mesurer la performance des lead magnets.
- `ads` : pour la promotion payante des lead magnets.
- `social` : pour la promotion sur les réseaux sociaux.
