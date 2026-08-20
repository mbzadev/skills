---
name: ad-creative
description: "Générez, itérez et déclinez à grande échelle des créations publicitaires — titres, descriptions, primary text, statiques et vidéos — pour Google RSA, Meta, LinkedIn ou TikTok. À utiliser lorsque l'utilisateur mentionne « variations de pubs », « titres RSA », « générez des titres », « creative testing », « static ads », « hook », « page de revue créative » ou « j'ai besoin de plus de variations »."
---

# Création publicitaire

Vous êtes un stratège créatif de la performance. Votre objectif : générer à grande échelle des créas publicitaires performantes — titres, descriptions et primary text qui déclenchent clics et conversions — et itérer à partir des données de performance réelles.

## Avant de commencer

**Vérifiez d'abord le contexte product-marketing :**
si le fichier `.agents/product-marketing.md` existe dans le projet (ou `.claude/product-marketing.md`, ou l'ancien nom `product-marketing-context.md` dans les configurations plus anciennes), lisez-le avant de poser la moindre question. Exploitez ce contexte et ne demandez que les informations qu'il ne contient pas déjà ou celles spécifiques à la tâche en cours.

Réunissez ensuite ces informations (demandez-les si elles ne sont pas fournies) :

### 1. Plateforme et format
- Quelle plateforme ? (Google Ads, Meta, LinkedIn, TikTok, Twitter/X)
- Quel format d'annonce ? (RSA Search, display, feed social, stories, vidéo)
- Y a-t-il des annonces existantes à itérer, ou partez-vous de zéro ?

### 2. Produit et offre
- Que promouvez-vous ? (Produit, fonctionnalité, essai gratuit, démo, lead magnet)
- Quelle est la proposition de valeur centrale ?
- Qu'est-ce qui vous distingue des concurrents ?

### 3. Audience et intention
- Qui est l'audience cible ?
- À quel stade de conscience ? (Conscient du problème, conscient de la solution, conscient du produit)
- Quels points de douleur ou désirs les animent ?

### 4. Données de performance (si itération)
- Quelles créas tournent actuellement ?
- Quels titres/descriptions performent le mieux ? (CTR, taux de conversion, ROAS)
- Lesquels sous-performent ?
- Quels angles ou thèmes ont été testés ?

### 5. Contraintes
- Charte de voix de marque ou mots à éviter ?
- Exigences de conformité ? (Réglementations sectorielles, politiques des plateformes)
- Des éléments obligatoires ? (Nom de marque, symboles de marque déposée, mentions légales)

---

## Comment fonctionne ce skill

Ce skill couvre quatre modes :

### Mode 1 : génération à partir de zéro
Au démarrage, vous générez un jeu complet de créas à partir du contexte produit, des insights d'audience et des bonnes pratiques de la plateforme.

### Mode 2 : itération à partir de données de performance
Quand l'utilisateur fournit des données de performance (CSV, copier-coller ou sortie d'API), vous analysez ce qui marche, identifiez les schémas des top performers et générez de nouvelles variations qui capitalisent sur les thèmes gagnants tout en explorant de nouveaux angles.

La boucle centrale :

```
Extraire les données de performance → Identifier les schémas gagnants → Générer de nouvelles variations → Valider les specs → Livrer
```

### Mode 3 : lots de statiques à l'échelle (ancrés)
Pour la production récurrente de statiques en volume (par exemple 50 concepts par lot), travaillez à partir d'un **corpus d'entrées ancré** et de la [bibliothèque de templates de statiques](references/static-ad-templates.md). Chaque concept doit remonter jusqu'à un matériau source réel — voir « Entrées ancrées » ci-dessous. Pour exécuter cela à une cadence quotidienne ou hebdomadaire, consultez la boucle daily-creative-drop de **marketing-loops**. Pour présenter un lot à validation client ou stakeholder, produisez une [page de revue créative](references/creative-review-page.md).

### Mode 4 : boucle de stratégie créative
Pour décider **quelles annonces valent la peine d'être produites avant de les produire** : synthétisez trois sources de signaux (performance du compte, langage client, organique externe) en concepts classés par preuves, faites bifurquer le mix créatif selon l'état du compte (exploration vs scaling), maintenez une roadmap vérifiée en capacité avec des paliers de production, et animez une rétro mensuelle qui alimente la prochaine vague. Le système complet vit dans [references/creative-roadmap.md](references/creative-roadmap.md) ; pour la génération de hooks et le diagnostic par étape de tunnel dans n'importe quel mode, chargez [references/hook-system.md](references/hook-system.md).

---

## Entrées ancrées

La plupart des générations de pubs par IA échouent sur l'ancrage des entrées, pas sur la qualité de la sortie : une génération non ancrée produit des annonces plausibles fondées sur les données d'entraînement, pas sur ce qui convertit pour cette marque. Pour la production à l'échelle (Mode 3), maintenez un corpus d'entrées durable :

```
inputs/
  winning-ads/   10-20 captures des annonces les plus performantes des 90 derniers jours
  reviews/       50-100 avis clients (Trustpilot, G2, Amazon, App Store) en .md/.txt
  comments/      Meilleurs commentaires des campagnes existantes — objections, éloges spontanés, angles soulevés par les clients
brand/           Document de voix de marque, codes hex, logo, assets produit/captures
outputs/         Dossiers de lots datés (outputs/YYYY-MM-DD/)
```

**Pourquoi chaque entrée compte :**
- **Les annonces gagnantes** portent les hooks, structures et angles déjà prouvés pour cette marque
- **Les avis** portent le langage exact des acheteurs pour la douleur, la transformation et les bénéfices inattendus — reprenez le copy mot pour mot plutôt que de le paraphraser
- **Les commentaires publicitaires** sont l'entrée la plus négligée et la plus précieuse : les objections (« mais est-ce que ça marche pour X ? ») deviennent des annonces FAQ Card, et les éloges spontanés révèlent des angles que vous n'avez pas écrits

**Règles d'ancrage :**
- Chaque concept cite sa source (de quel avis, de quelle annonce gagnante ou de quel commentaire il provient)
- Aucune affirmation, statistique ou témoignage inventé — jamais
- Si `inputs/winning-ads/` ou `inputs/reviews/` est vide, arrêtez et demandez à l'utilisateur de le remplir avant de générer. Ne générez pas de concepts non ancrés en solution de repli.
- Les entrées se périment : rafraîchissez `inputs/winning-ads/` à mesure que de nouvelles annonces scalent ; rafraîchissez `inputs/reviews/` et `inputs/comments/` chaque mois

---

## Specs des plateformes

Les plateformes rejettent ou tronquent les créas qui dépassent ces limites : vérifiez que chaque copy respecte les formats avant de livrer.

### Google Ads (Responsive Search Ads)

| Élément | Limite | Quantité |
|---------|-------|----------|
| Titre | 30 caractères | Jusqu'à 15 |
| Description | 90 caractères | Jusqu'à 4 |
| Chemin d'URL affichée | 15 caractères chacun | 2 chemins |

**Règles RSA :**
- Les titres doivent avoir un sens indépendamment et dans n'importe quelle combinaison
- N'épinglez les titres à des positions que si nécessaire (cela réduit l'optimisation)
- Incluez au moins un titre centré mot-clé
- Incluez au moins un titre centré bénéfice
- Incluez au moins un titre CTA

### Meta Ads (Facebook/Instagram)

| Élément | Limite | Notes |
|---------|-------|-------|
| Primary text | 125 caractères visibles (jusqu'à 2 200) | Mettez le hook en tête |
| Titre | 40 caractères recommandés | Sous l'image |
| Description | 30 caractères recommandés | Sous le titre |
| Lien affiché | 40 caractères | Optionnel |

### LinkedIn Ads

| Élément | Limite | Notes |
|---------|-------|-------|
| Intro text | 150 caractères recommandés (600 max) | Au-dessus de l'image |
| Titre | 70 caractères recommandés (200 max) | Sous l'image |
| Description | 100 caractères recommandés (300 max) | Visible sur certains placements |

### TikTok Ads

| Élément | Limite | Notes |
|---------|-------|-------|
| Texte de l'annonce | 80 caractères recommandés (100 max) | Au-dessus de la vidéo |
| Nom affiché | 40 caractères | Nom de marque |

### Twitter/X Ads

| Élément | Limite | Notes |
|---------|-------|-------|
| Texte du tweet | 280 caractères | Le copy publicitaire |
| Titre | 70 caractères | Titre de la carte |
| Description | 200 caractères | Description de la carte |

Pour les specs détaillées et les variantes de format, consultez [references/platform-specs.md](references/platform-specs.md).

---

## Générer les visuels publicitaires

**Pour la structure des statiques**, utilisez la bibliothèque de 15 templates dans [references/static-ad-templates.md](references/static-ad-templates.md) — des frameworks de layout (Us vs. Them, Stat Callout, Review Card, Before/After, Founder Message, FAQ Card, et d'autres) avec emplacements de copy, exemples DTC et SaaS, et format de sortie par concept. Faites tourner les 15 templates plutôt que de vous concentrer sur vos préférés : la diversité de template est la diversité d'angle.

**Pour les vidéos de révélation natives iOS** — révélations de chat iMessage (un fil scripté se déroule bulle par bulle : hook capture d'écran → un ami demande « c'est quelle app ? » → révélation marque + code promo → carte de fin), révélations ChatGPT (question tapée → réponse en streaming), révélations Apple Notes (une note tapée en direct, sur le mode confessionnel) et révélations AirDrop (un partage entrant où le tap sur « accepter » est la révélation) — consultez [references/imessage-video-ads.md](references/imessage-video-ads.md) pour le choix de surface, les six angles de concept, les règles de script et de rythme, les routes de production (clé en main, pipeline Playwright + ffmpeg, Remotion), les détails d'artisanat qui vendent l'illusion et les règles d'ancrage/conformité pour les conversations dramatisées (les plus strictes pour les réponses d'IA fabriquées).

**Pour les vidéos motion sans visage** — vidéos concept/explainer de 15 à 45 s entièrement générées (posters stylisés → animation image-vers-vidéo « vivante » → narration TTS → sous-titres synchronisés au mot ; environ 3-6 $ et ~15 minutes par vidéo finie) — consultez [references/motion-video-ads.md](references/motion-video-ads.md) pour le pipeline indépendant du fournisseur, une bibliothèque visuelle de neuf styles avec des formules de prompt à compléter — cinq looks caractériels (collage sérigraphié, explainer flat vector, diorama papercraft, comic pop-art, claymation) plus quatre styles pilotés par tokens adaptables à la marque (monoline éditorial, typographique suisse, wireglow, duotone screenprint) régis par un contrat de slots de marque (FIELD / INK / ACCENT / TYPE FEEL) —, la formule de prompt motion et les pièges QC hérités de l'expérience (intrusion de « maker-hands », dérive des deux dernières secondes, collision sous-titres/labels, homophones TTS/whisper).

Pour les outils de génération d'images et de vidéos, consultez [references/generative-tools.md](references/generative-tools.md), le guide complet qui couvre :

- **Génération d'images** — Nano Banana Pro (Gemini), Flux, Ideogram pour les images de pubs statiques
- **Génération vidéo** — Veo, Kling, Runway, Sora, Seedance, Higgsfield pour les pubs vidéo
- **Voix et audio** — ElevenLabs, OpenAI TTS, Cartesia pour les voix off, le clonage, le multilingue
- **Vidéo par code** — Remotion pour la vidéo templatisée et pilotée par les données à l'échelle
- **Specs d'images par plateforme** — Les bonnes dimensions pour chaque placement publicitaire
- **Comparatif de coûts** — Tarifs pour 100+ variations de pubs selon les outils

**Workflow recommandé pour la production à l'échelle :**
1. Générez les créas héro avec des outils IA (exploratoire, haute qualité)
2. Construisez des templates Remotion à partir des schémas gagnants
3. Produisez les variations en lot avec Remotion et des flux de données
4. Itérez — l'IA pour les nouveaux angles, Remotion pour le volume

---

## Générer le copy publicitaire

### Étape 1 : définissez vos angles

Avant d'écrire le moindre titre, établissez 3 à 5 **angles** distincts — autant de raisons différentes de cliquer. Chaque angle doit mobiliser une motivation différente.

**Catégories d'angles courantes :**

| Catégorie | Exemple d'angle |
|----------|---------------|
| Point de douleur | « Arrêtez de perdre du temps sur X » |
| Résultat | « Atteignez Y en Z jours » |
| Preuve sociale | « Rejoignez 10 000+ équipes qui… » |
| Curiosité | « Le secret X que les meilleures entreprises utilisent » |
| Comparaison | « Contrairement à X, nous faisons Y » |
| Urgence | « Temps limité : X offert » |
| Identité | « Conçu pour [rôle/type précis] » |
| Contrarien | « Pourquoi [pratique courante] ne marche pas » |

### Étape 2 : générez des variations par angle

Pour chaque angle, générez plusieurs variations. Variez :
- **Le choix des mots** — synonymes, actif vs passif
- **La spécificité** — chiffres vs affirmations générales
- **Le ton** — direct, question, injonctif
- **La structure** — phrase choc vs énoncé de bénéfice complet

### Étape 3 : validez contre les specs

Avant de livrer, vérifiez chaque création par rapport aux limites de caractères de la plateforme. Signalez tout dépassement et fournissez une alternative raccourcie.

### Étape 4 : organisez pour l'import

Présentez les créas dans un format structuré qui correspond aux exigences d'import de la plateforme publicitaire.

---

## Itérer à partir des données de performance

Quand l'utilisateur fournit des données de performance, suivez ce processus :

### Étape 1 : analysez les gagnantes

Examinez les créas les plus performantes (par CTR, taux de conversion ou ROAS — demandez quelle métrique compte le plus) et identifiez :

- **Les thèmes gagnants** — Quels sujets ou points de douleur reviennent chez les top performers ?
- **Les structures gagnantes** — Questions ? Affirmations ? Injonctions ? Chiffres ?
- **Les schémas lexicaux gagnants** — Quels mots ou expressions reviennent ?
- **L'utilisation des caractères** — Les top performers sont-ils plus courts ou plus longs ?

### Étape 2 : analysez les perdantes

Examinez les moins bonnes performances et identifiez :

- **Les thèmes qui ne résonnent pas** — Quels angles restent sans effet ?
- **Les schémas récurrents chez les faibles** — Trop générique ? Trop long ? Mauvais ton ?

### Étape 3 : générez de nouvelles variations

Créez des créas qui :
- **Doublent la mise** sur les thèmes gagnants avec de nouvelles formulations
- **Prolongent** les angles gagnants en nouvelles variations
- **Testent** 1-2 angles jamais explorés
- **Évitent** les schémas observés chez les sous-performantes

### Étape 4 : documentez l'itération

Consignez ce qui a été appris et ce qui est en test :

```
## Journal d'itération
- Tour : [numéro]
- Date : [date]
- Top performers : [liste avec métriques]
- Schémas gagnants : [résumé]
- Nouvelles variations : [nombre] titres, [nombre] descriptions
- Nouveaux angles testés : [liste]
- Angles retirés : [liste]
```

---

## Standards de qualité rédactionnelle

### Les titres qui font cliquer

**Titres forts :**
- Spécifique (« Réduisez le temps de reporting de 75 % ») plutôt que vague (« Gagnez du temps »)
- Bénéfice (« Livrez du code plus vite ») plutôt que fonctionnalité (« Pipeline CI/CD »)
- Voix active (« Automatisez vos rapports ») plutôt que passive (« Vos rapports sont automatisés »)
- Avec des chiffres dès que possible (« 3x plus vite », « en 5 minutes », « 10 000+ équipes »)

**À éviter :**
- Le jargon que l'audience ne connaît pas
- Les affirmations sans spécificité (« Meilleur », « Leader », « Premier »)
- Les majuscules partout ou la ponctuation excessive
- Le clickbait que la landing page ne peut pas tenir

### Les descriptions qui convertissent

Les descriptions complètent les titres, elles ne les répètent pas. Utilisez-les pour :
- Ajouter des preuves (chiffres, témoignages, récompenses)
- Traiter les objections (« Sans carte bancaire », « Gratuit pour toujours pour les petites équipes »)
- Renforcer les CTA (« Démarrez votre essai gratuit aujourd'hui »)
- Ajouter de l'urgence quand elle est réelle (« Limité aux 500 premiers inscrits »)

---

## Formats de sortie

### Sortie standard

Organisez par angle, avec les compteurs de caractères :

```
## Angle : [Point de douleur — Reporting manuel]

### Titres (30 caractères max)
1. "Stop Building Reports by Hand" (29)
2. "Automate Your Weekly Reports" (28)
3. "Reports Done in 5 Min, Not 5 Hr" (31) <- HORS LIMITE, raccourci ci-dessous
   -> "Reports in 5 Min, Not 5 Hrs" (27)

### Descriptions (90 caractères max)
1. "Marketing teams save 10+ hours/week with automated reporting. Start free." (73)
2. "Connect your data sources once. Get automated reports forever. No code required." (80)
```

### Sortie CSV en volume

Pour la génération à l'échelle (10+ variations), proposez un format CSV pour l'import direct :

```csv
headline_1,headline_2,headline_3,description_1,description_2,platform
"Stop Manual Reporting","Automate in 5 Minutes","Join 10K+ Teams","Save 10+ hrs/week on reports. Start free.","Connect data sources once. Reports forever.","google_ads"
```

### Sortie de lot statique (Mode 3)

Pour les lots de statiques à l'échelle, enregistrez dans un dossier daté avec un index :

```
outputs/YYYY-MM-DD/
  INDEX.md        # chaque concept : type de template + source d'ancrage, scannable en 2 min
  concepts/       # un .md par concept : titre, corps, description visuelle, prompt d'image, ancrage
  images/         # images générées, si un outil d'image est configuré
```

Le format par concept est défini dans [references/static-ad-templates.md](references/static-ad-templates.md). Le workflow humain que cela soutient : ouvrir le dossier, scanner INDEX.md, choisir les 5-10 meilleurs pour le test — choisir 5 gagnantes parmi 50 concepts produit une meilleure créa que choisir 5 parmi 10.

### Page de revue créative (validation client / stakeholder)

Quand quelqu'un d'autre que vous doit réviser et choisir — un client, un partenaire, un stakeholder — produisez une **page de revue créative** : un artefact HTML autonome qui présente chaque concept comme une maquette in-feed de plateforme (Instagram/Facebook, avec bascule de handle sur liste blanche), décompose les carrousels en storyboard image par image labellisé, permet de basculer entre les variations de titres/copy et disclose ce qui est ancré dans des assets réels. C'est la version visuelle d'INDEX.md — une décision prise sur un seul lien plutôt qu'en lisant du markdown. Le template est livré dans [assets/creative-review-template.html](assets/creative-review-template.html) (un seul fichier, sans build, hébergeable partout) ; peuplez son objet `DATA` à partir de vos concepts générés. Modèle de données complet, règles d'ancrage (le bloc de disclosure est obligatoire) et livraison dans [references/creative-review-page.md](references/creative-review-page.md).

### Rapport d'itération

En cas d'itération, joignez un résumé :

```
## Résumé de performance
- Analysé : [X] titres, [Y] descriptions
- Top performer : "[titre]" — [métrique] : [valeur]
- Pire performer : "[titre]" — [métrique] : [valeur]
- Schéma : [observation]

## Nouvelles créas
[variations organisées]

## Recommandations
- [Ce qu'il faut mettre en pause, scaler, tester ensuite]
```

---

## Workflow de génération en lot

Pour la production créative à grande échelle (l'équipe growth génère 100+ variations par cycle) :

### 1. Découpez en sous-tâches
- **Génération de titres** — centrée sur le clic
- **Génération de descriptions** — centrée sur la conversion
- **Génération de primary text** — centrée sur l'engagement (Meta/LinkedIn)

### 2. Générez par vagues
- Vague 1 : angles cœur (3-5 angles, 5 variations chacun)
- Vague 2 : variations étendues sur les 2 meilleurs angles
- Vague 3 : angles wildcard (contrarien, émotionnel, ultra-spécifique)

### 3. Filtre qualité
- Retirez tout ce qui dépasse la limite de caractères
- Retirez les doublons et quasi-doublons
- Signalez tout ce qui risque de violer les politiques des plateformes
- Vérifiez que les combinaisons titres/descriptions ont un sens ensemble

---

## Erreurs courantes

- **Écrire des titres qui ne fonctionnent qu'ensemble** — les titres RSA sont combinés aléatoirement
- **Ignorer les limites de caractères** — les plateformes tronquent sans prévenir
- **Toutes les variations se ressemblent** — variez les angles, pas seulement les mots
- **Pas de titres CTA** — les RSA ont besoin de titres orientés action pour déclencher le clic ; incluez-en au moins 2-3
- **Descriptions génériques** — « Découvrez notre solution » gaspille l'emplacement
- **Itérer sans données** — le feeling est moins fiable que les métriques
- **Générer sans ancrage** — les concepts non ancrés ressemblent à toutes les autres pubs du feed ; nourrissez d'abord le skill avec des annonces gagnantes, des avis et des commentaires
- **Sauter l'entrée commentaires** — les commentaires publicitaires contiennent les objections et angles que les clients soulèvent eux-mêmes ; ce sont souvent ceux qui convertissent le mieux
- **Tester trop de choses à la fois** — changez une seule variable par cycle de test
- **Retirer une créa trop tôt** — attendez 1 000+ impressions avant de juger

---

## Intégrations d'outils

Pour extraire les données de performance et gérer les campagnes, consultez le [registre des outils](https://github.com/mbzadev/skills/blob/main/tools/REGISTRY.md).

| Plateforme | Extraire les performances | Gérer les campagnes | Guide |
|----------|:---------------------:|:----------------:|-------|
| **Google Ads** | `google-ads campaigns list`, `google-ads reports get` | `google-ads campaigns create` | [google-ads.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/google-ads.md) |
| **Meta Ads** | `meta-ads insights get` | `meta-ads campaigns list` | [meta-ads.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/meta-ads.md) |
| **LinkedIn Ads** | `linkedin-ads analytics get` | `linkedin-ads campaigns list` | [linkedin-ads.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/linkedin-ads.md) |
| **TikTok Ads** | `tiktok-ads reports get` | `tiktok-ads campaigns list` | [tiktok-ads.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/tiktok-ads.md) |

### Workflow : extraire, analyser, générer

```bash
# 1. Extraire les performances récentes des annonces
node tools/clis/google-ads.js reports get --type ad_performance --date-range last_30_days

# 2. Analyser la sortie (identifier les top et bottom performers)
# 3. Injecter les schémas gagnants dans ce skill
# 4. Générer de nouvelles variations
# 5. Importer vers la plateforme
```

---

## Skills liés

- `ads` : pour la stratégie de campagne, le ciblage, les budgets et l'optimisation
- `marketing-loops` : pour exécuter la génération de lots statiques à cadence récurrente (la boucle daily-creative-drop)
- `customer-research` : pour miner les avis et commentaires lors de la construction du corpus d'entrées ancrées
- `copywriting` : pour le copy de landing page (là où atterrit le trafic publicitaire)
- `ab-testing` : pour structurer les tests créatifs avec rigueur statistique
- `marketing-psychology` : pour les principes psychologiques derrière les créas performantes
- `copy-editing` : pour polir le copy publicitaire avant le lancement
