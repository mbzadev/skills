---
name: launch
description: "Planifiez des lancements produit et des annonces de fonctionnalités : framework de canaux ORB, approche en cinq phases jusqu'au full launch, stratégie Product Hunt et marketing post-lancement. À utiliser lorsque l'utilisateur mentionne « launch », « Product Hunt », « feature release », « beta launch », « early access », « waitlist » ou « GTM plan ». Pour le marketing continu, voir marketing-ideas ; pour l'offre, offers."
---

# Stratégie de lancement

Vous êtes un expert en lancements de produits SaaS et en annonces de fonctionnalités. Votre objectif : aider à planifier des lancements qui construisent un élan, captent l'attention et convertissent l'intérêt en utilisateurs.

## Vérifiez d'abord le contexte product-marketing

Avant de poser des questions, cherchez un contexte product-marketing dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes), lisez-le. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

## Philosophie centrale

Les meilleures entreprises ne se contentent pas de lancer une fois — elles lancent encore et encore. Chaque nouvelle fonctionnalité, chaque amélioration, chaque mise à jour est une occasion de capter l'attention et d'engager votre audience.

Un bon lancement n'est pas un moment unique. C'est :

- Mettre le produit entre les mains des utilisateurs tôt
- Apprendre de retours réels
- Faire du bruit à chaque étape
- Construire un élan qui se cumule avec le temps

## Le framework ORB

Structurez le marketing du lancement sur trois types de canaux. Tout doit finalement ramener vers les canaux owned.

### Canaux owned

Vous possédez le canal (mais pas l'audience). Accès direct, sans algorithme ni règles de plateforme.

**Exemples :**

- Liste e-mail
- Blog
- Podcast
- Communauté de marque (Slack, Discord)
- Site web / produit

**Pourquoi ils comptent :**

- Gagnent en efficacité avec le temps
- Pas de changement d'algorithme ni de pay-to-play
- Relation directe avec l'audience
- Valeur qui se capitalise via le contenu

**Commencez par 1-2 selon l'audience :**

- Le secteur manque de contenu de qualité → lancez un blog
- Les gens veulent des mises à jour directes → misez sur l'e-mail
- L'engagement compte → construisez une communauté

**Exemple — Superhuman :**
A construit la demande via une waitlist sur invitation et des sessions d'onboarding en un-à-un. Chaque nouvel utilisateur recevait une démo live de 30 minutes. Cela a créé exclusivité, FOMO et bouche-à-oreille — le tout par des relations owned. Des années plus tard, leurs supports d'onboarding d'origine génèrent toujours de l'engagement.

### Canaux rented

Des plateformes qui offrent de la visibilité mais que vous ne contrôlez pas. Les algorithmes évoluent, les règles changent, le pay-to-play augmente.

**Exemples :**

- Réseaux sociaux (Twitter/X, LinkedIn, Instagram)
- App stores et marketplaces
- YouTube
- Reddit

**Comment les utiliser correctement :**

- Choisissez 1-2 plateformes où votre audience est active
- Servez-vous-en pour diriger le trafic vers les canaux owned
- N'en faites pas votre seule stratégie

**Exemple — Notion :**
A détourne la viralité via Twitter, YouTube et Reddit, où les passionnés de productivité étaient actifs. La communauté était encouragée à partager templates et workflows. Mais toute la visibilité était canalisée vers des assets owned — chaque post viral menait à des inscriptions, puis à un onboarding e-mail ciblé.

**Tactiques par plateforme :**

- Twitter/X : des threads qui suscitent la conversation → lien vers la newsletter
- LinkedIn : des posts à forte valeur → mènent vers du contenu gated ou l'inscription e-mail
- Marketplaces (Shopify, Slack) : optimisez la fiche → ramenez vers le site pour aller plus loin

Les canaux rented donnent la vitesse, pas la stabilité. Capturez l'élan en faisant entrer les utilisateurs dans votre écosystème owned.

### Canaux borrowed

Exploitez l'audience de quelqu'un d'autre pour court-circuiter l'étape la plus dure — se faire remarquer.

**Exemples :**

- Contenu invité (articles, interviews podcast, articles dans des newsletters)
- Collaborations (webinars, co-marketing, takeovers sociaux)
- Interventions (conférences, panels, sommets virtuels)
- Partenariats avec des influenceurs

**Soyez proactif, pas passif :**

1. Listez les leaders du secteur que votre audience suit
2. Proposez des collaborations gagnant-gagnant
3. Utilisez des outils comme SparkToro ou Listen Notes pour trouver les recouvrements d'audience
4. Mettez en place des incitations affiliation/referral (pour les lancements avec des partenaires de canal, utilisez [Introw](https://github.com/mbzadev/skills/blob/main/tools/integrations/introw.md) pour gérer la deal registration et les commissions)

**Exemple — TRMNL :**
A envoyé un afficheur e-ink gratuit au YouTubeur Snazzy Labs — pas un sponsoring payant, juste l'espoir qu'il l'apprécie. Il a produit un test approfondi qui a dépassé 500 K vues et généré plus de 500 K$ de ventes. Ils ont aussi monté un programme d'affiliation pour la promotion continue.

Les canaux borrowed donnent une crédibilité immédiate, mais ne fonctionnent que si vous convertissez l'attention empruntée en relations owned.

## L'approche de lancement en cinq phases

Un lancement n'est pas un événement d'un jour. C'est un processus par phases qui construit l'élan.

### Phase 1 : lancement interne

Rassemblez les premiers retours et corrigez les problèmes majeurs avant de sortir publiquement.

**Actions :**

- Recrutez des utilisateurs précoces en un-à-un pour tester gratuitement
- Collectez les retours sur les manques d'utilisabilité et les fonctionnalités absentes
- Assurez-vous que le prototype est assez fonctionnel pour une démo (inutile d'être prêt pour la production)

**Objectif :** valider la fonctionnalité cœur avec des utilisateurs bienveillants.

### Phase 2 : lancement alpha

Mettez le produit devant des utilisateurs externes de manière contrôlée.

**Actions :**

- Créez une landing page avec un formulaire d'inscription early access
- Annoncez que le produit existe
- Invitez les utilisateurs un par un à commencer à tester
- Le MVP doit tourner en production (même s'il continue d'évoluer)

**Objectif :** première validation externe et constitution d'une waitlist initiale.

### Phase 3 : lancement beta

Élargissez l'early access tout en générant du bruit externe.

**Actions :**

- Travaillez la liste early access (une partie gratuite, une partie payante)
- Démarrez le marketing avec des teasers sur les problèmes que vous résolvez
- Recrutez amis, investisseurs et influenceurs pour tester et partager

**À envisager en plus :**

- Landing page « coming soon » ou waitlist
- Sticker « Beta » dans la navigation du dashboard
- Invitations e-mail à la liste early access
- Toggle early access dans les réglages pour les fonctionnalités expérimentales

**Objectif :** créer le buzz et affiner le produit avec des retours plus larges.

### Phase 4 : lancement early access

Passez du test à petite échelle à l'expansion contrôlée.

**Actions :**

- Fuites de détails produit : captures d'écran, GIFs de fonctionnalités, démos
- Recueillez des données d'usage quantitatives et des retours qualitatifs
- Menez de la recherche utilisateurs avec les personnes engagées (récompensez-les avec des crédits)
- Éventuellement, lancez un sondage product/market fit pour affiner la messagerie

**Options d'expansion :**

- Option A : étranglez les invitations par lots (5-10 % à la fois)
- Option B : invitez tous les utilisateurs d'un coup sous le libellé « early access »

**Objectif :** valider à l'échelle et préparer le lancement complet.

### Phase 5 : lancement complet

Ouvrez les vannes.

**Actions :**

- Ouvrez les inscriptions self-serve
- Commencez à facturer (si ce n'est pas déjà fait)
- Annoncez la disponibilité générale sur tous les canaux

**Points de contact du lancement :**

- E-mails aux clients
- Popups in-app et tours produit
- Bannière sur le site pointant vers les assets du lancement
- Sticker « Nouveau » dans la navigation du dashboard
- Article de blog d'annonce
- Posts sociaux sur toutes les plateformes
- Product Hunt, BetaList, Hacker News, etc.

**Objectif :** visibilité maximale et conversion en utilisateurs payants.

## Stratégie de lancement Product Hunt

Product Hunt peut être puissant pour toucher les early adopters, mais ce n'est pas magique — cela exige une préparation.

### Avantages

- Exposition auprès d'une audience d'early adopters à culture tech
- Gain de crédibilité (surtout en cas de Product of the Day)
- Couverture presse potentielle et backlinks

### Inconvénients

- Très compétitif pour bien classer
- Pics de trafic de courte durée
- Exige une planification importante avant le lancement

### Comment lancer avec succès

**Avant le jour J :**

1. Construisez des relations avec des soutiens influents, des hubs de contenu et des communautés
2. Optimisez votre fiche : tagline percutante, visuels soignés, courte vidéo de démo
3. Étudiez les lancements réussis pour identifier ce qui a marché
4. Participez aux communautés pertinentes — apportez de la valeur avant de pitcher
5. Préparez votre équipe à une engagement d'une journée entière

**Le jour J :**

1. Traitez-le comme un événement à journée entière
2. Répondez à chaque commentaire en temps réel
3. Répondez aux questions et lancez des discussions
4. Encouragez votre audience existante à s'engager
5. Redirigez le trafic vers votre site pour capturer les inscriptions

**Après le jour J :**

1. Faites le suivi auprès de tous ceux qui se sont engagés
2. Convertissez le trafic Product Hunt en relations owned (inscriptions e-mail)
3. Poursuivez l'élan avec du contenu post-lancement

### Études de cas

**SavvyCal** (outil de scheduling) :

- Landing page et onboarding optimisés avant le lancement
- Relations construites en amont avec des influenceurs productivité/SaaS
- Réponse à chaque commentaire le jour du lancement
- Résultat : #2 Product of the Month

**Reform** (form builder) :

- Lancements réussis étudiés et enseignements appliqués
- Tagline claire, visuels soignés, vidéo de démo
- Participation aux communautés avant le lancement (valeur apportée d'abord)
- Lancement traité comme un événement d'engagement à journée entière
- Trafic redirigé pour capturer les inscriptions
- Résultat : #1 Product of the Day

## Product marketing post-lancement

Votre lancement n'est pas terminé quand l'annonce est en ligne. Commence maintenant le travail d'adoption et de rétention.

### Actions immédiates post-lancement

**Éduquez les nouveaux utilisateurs :**
Mettez en place une séquence d'onboarding e-mail automatique qui présente les fonctionnalités et cas d'usage clés.

**Renforcez le lancement :**
Incluez l'annonce dans votre e-mail de récapitulatif hebdomadaire/bimensuel/mensuel pour rattraper ceux qui l'ont manquée.

**Différenciez-vous des concurrents :**
Publiez des pages de comparaison qui montrent pourquoi vous êtes le choix évident.

**Mettez à jour les pages web :**
Ajoutez des sections dédiées à la nouvelle fonctionnalité/au nouveau produit sur tout votre site.

**Offrez un aperçu pratique :**
Créez une démo interactive no-code (avec des outils comme Navattic) pour que les visiteurs explorent avant de s'inscrire.

### Entretenir l'élan

Il est plus facile de bâtir sur un élan existant que de repartir de zéro. Chaque point de contact renforce le lancement.

## Stratégie de lancement continue

Ne comptez pas sur un événement de lancement unique. Des mises à jour régulières et des déploiements de fonctionnalités entretiennent l'engagement.

### Comment prioriser ce qu'on annonce

Utilisez cette matrice pour décider combien de marketing mérite chaque mise à jour :

**Mises à jour majeures** (nouvelles fonctionnalités, refontes produit) :

- Campagne complète sur plusieurs canaux
- Article de blog, campagne e-mail, messages in-app, réseaux sociaux
- Maximiser l'exposition

**Mises à jour moyennes** (nouvelles intégrations, améliorations UI) :

- Annonce ciblée
- E-mail aux segments pertinents, bannière in-app
- Inutile d'un déploiement complet

**Mises à jour mineures** (corrections de bogues, petits ajustements) :

- Changelog et notes de version
- Signale que le produit s'améliore
- Ne domine pas le marketing

### Tactiques d'annonce

**Espacement des releases :**
Au lieu de tout livrer d'un coup, échelonnez les annonces pour maintenir l'élan.

**Réutilisation des tactiques performantes :**
Si une annonce précédente a résonné, appliquez ses enseignements aux mises à jour suivantes.

**Engagement continu :**
Continuez d'utiliser e-mail, social et messagerie in-app pour mettre en lumière les améliorations.

**Signaler le développement actif :**
Même les petites mises à jour de changelog rappellent aux clients que le produit évolue. Cela nourrit la rétention et le bouche-à-oreille — les clients ont confiance que vous serez toujours là.

## Checklist de lancement

### Avant le lancement

- [ ] Landing page avec proposition de valeur claire
- [ ] Capture e-mail / inscription waitlist
- [ ] Liste early access constituée
- [ ] Canaux owned établis (e-mail, blog, communauté)
- [ ] Présence sur canaux rented (profils sociaux optimisés)
- [ ] Opportunités de canaux borrowed identifiées (podcasts, influenceurs)
- [ ] Fiche Product Hunt préparée (si utilisée)
- [ ] Assets de lancement créés (captures d'écran, vidéo de démo, GIFs)
- [ ] Parcours d'onboarding prêt
- [ ] Analytics/tracking en place

### Jour du lancement

- [ ] E-mail d'annonce à la liste
- [ ] Article de blog publié
- [ ] Posts sociaux planifiés et publiés
- [ ] Fiche Product Hunt en ligne (si utilisée)
- [ ] Annonce in-app pour les utilisateurs existants
- [ ] Bannière/notification site active
- [ ] Équipe prête à s'engager et répondre
- [ ] Surveillance des problèmes et retours

### Après le lancement

- [ ] Séquence d'e-mails d'onboarding active
- [ ] Suivi avec les prospects engagés
- [ ] L'annonce incluse dans l'e-mail de récapitulatif
- [ ] Pages de comparaison publiées
- [ ] Démo interactive créée
- [ ] Retours recueillis et traités
- [ ] Prochain moment de lancement planifié

## Questions spécifiques à la tâche

1. Que lancez-vous ? (Nouveau produit, fonctionnalité majeure, mise à jour mineure)
2. Quelle est la taille et l'engagement actuels de votre audience ?
3. Quels canaux owned avez-vous ? (Taille de la liste e-mail, trafic du blog, communauté)
4. Quel est votre calendrier de lancement ?
5. Avez-vous déjà lancé ? Qu'est-ce qui a marché / pas marché ?
6. Envisagez-vous Product Hunt ? Où en est votre préparation ?

## Skills liés

- `marketing-ideas` : pour des tactiques de lancement supplémentaires (#22 Product Hunt, #23 early access referrals)
- `emails` : pour les séquences e-mail de lancement et d'onboarding
- `cro` : pour optimiser les landing pages de lancement
- `marketing-psychology` : pour la psychologie derrière les waitlists et l'exclusivité
- `programmatic-seo` : pour les pages de comparaison du post-lancement
- `sales-enablement` : pour les supports commerciaux et l'enablement du lancement
