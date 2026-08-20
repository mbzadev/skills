---
name: directory-submissions
description: "Soumettez votre produit aux annuaires startups, SaaS, IA, agents, MCP, no-code et sites d'avis pour construire backlinks, domain rating et découvrabilité. À utiliser lorsque l'utilisateur mentionne « annuaires », « backlinks », « Product Hunt », « TAAFT », « Futurepedia », « G2 » ou prépare la couverture annuaires d'un lancement. Pour le lancement global, voyez launch ; pour les pages programmatiques derrière ces backlinks, programmatic-seo."
---

# Soumissions aux annuaires

Vous êtes un expert de la distribution par annuaires pour les produits logiciels. Votre objectif : aider l'utilisateur à bâtir une fondation cumulative de backlinks et de découvrabilité en soumettant son produit aux bons annuaires, dans le bon ordre, avec le bon positionnement — et faire en sorte que cette fondation produise réellement des leads plutôt que des backlinks de vanité.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, cherchez un contexte marketing déjà rédigé dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom `product-marketing-context.md` dans les installations plus anciennes), lisez-le avant d'interroger l'utilisateur. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

## Philosophie centrale

Les soumissions aux annuaires sont la **couche fondation** de la distribution — jamais la stratégie entière. Elles font trois choses bien :

1. **Elles transmettent des backlinks dofollow** depuis des sites à fort domain rating vers vos pages marketing. Cela relève votre DR, ce qui rend l'ensemble de votre site plus facile à classer sur des mots-clés compétitifs.
2. **Elles créent de la surface de découvrabilité** — les gens qui parcourent les annuaires IA/SaaS sont des acheteurs en recherche active, pas du trafic aléatoire.
3. **Elles se font citer par les moteurs IA** — ChatGPT, Claude, Perplexity et les AI Overviews de Google puisent massivement dans les annuaires à fort DR pour répondre aux requêtes « quel est le meilleur [catégorie] ? ». Le trafic issu des IA convertit **6 à 27× mieux** que le trafic de recherche traditionnel.

Mais les annuaires seuls ne généreront pas de leads significatifs. Ils servent à transmettre du link equity vers les pages qui, elles, génèrent des leads — galeries de templates, pages comparatives, pages alternatives, articles de blog. **Construisez d'abord les pages de destination, puis soumettez aux annuaires pour que le link equity ait quelque chose d'utile à arroser.**

Le catalogue complet des annuaires vit dans `references/directory-list.md`. La bibliothèque de variantes de positionnement vit dans `references/positioning-variations.md`. Le template du suivi des soumissions vit dans `references/submission-tracker-template.csv`.

## Les trois règles d'or

### Règle 1 : la fondation avant la soumission
Ne soumettez jamais à un annuaire tant que la landing page qu'il va lier n'est pas en ligne, indexée et dotée de :
- Un `<h1>` unique et une hiérarchie de titres séquentielle — les pages à hiérarchie propre affichent des taux de citation IA **2,8× supérieurs**, et 87 % des pages citées par ChatGPT utilisent un H1 unique.
- Une vraie page de tarification (même « gratuit pendant la bêta » — la plupart des annuaires Tier 1 l'exigent).
- Politique de confidentialité + conditions d'utilisation.
- Assets de logo en PNG + SVG + carré 1024×1024 + favicon.
- 5 à 8 vraies captures d'écran du produit en 1920×1080 (pas des maquettes marketing).
- Une vidéo de démo de 60 à 90 secondes — les produits avec vidéo sur Product Hunt récoltent **2,7× plus d'upvotes**.
- Un balisage schema FAQ (les moteurs IA pondèrent lourdement le `FAQPage` JSON-LD pour l'extraction de réponses).
- Des données structurées : `Organization`, `Product`, `SoftwareApplication`.

### Règle 2 : les pages de destination avant les annuaires
Les annuaires sont la *source* du link equity. Il vous faut des *destinations* capables de convertir le trafic résultant. Minimum avant toute soumission :
- 3 à 5 pages alternatives concurrents (`/alternatives/[concurrent]`) ciblant les mots-clés « [concurrent] alternative ». Les pages comparatives/alternatives convertissent à **5-15 %** contre 0,5-2 % pour le contenu générique.
- 3 à 5 pages cas d'usage (`/for/[audience]` ou `/use-cases/[cas-usage]`).
- Une galerie de templates de plus de 20 entrées (si applicable — ce fut le plus gros levier SEO de Typeform, générant 30K d'inscriptions non-brandées et 3 M$/an de LTV).
- 1 article de blog « best of » rédigé par vous-même sur votre propre catégorie, avec une couverture honnête des concurrents.

### Règle 3 : le positionnement varie selon le type d'annuaire
Ne copiez-collez jamais la même description partout. Les moteurs IA pénalisent le contenu dupliqué, et chaque audience d'annuaire répond à un cadrage différent. Voir `references/positioning-variations.md` pour la bibliothèque complète de variantes. En résumé :

| Surface | Mettre en avant | Pourquoi |
|---|---|---|
| Annuaires startups | **Le résultat** | L'audience est composée d'autres fondateurs. Ils veulent savoir ce que ça fait. |
| Annuaires SaaS | **Le cadrage alternative** | Les gens cherchent « [concurrent] alternative » — allez à leur rencontre. |
| Annuaires IA | **L'architecture AI-first** | Les audiences TAAFT/Futurepedia veulent explicitement des outils IA. |
| Annuaires agents/MCP | **L'angle agent/MCP** | Niche mais à forte intention. Une vraie douve. |
| Annuaires no-code | **La facilité + la puissance** | L'audience privilégie la vitesse de construction à la profondeur. |
| Annuaires devs | **La profondeur technique** | Les audiences devs récompensent la substance technique. |
| Sites d'avis B2B | **Le ROI + le cas d'usage** | Les acheteurs veulent des résultats et des études de cas. |

## Déroulé

### Étape 1 : évaluation de préparation (phase 0)

Posez ces 9 questions à l'utilisateur. Si une réponse est « non », il n'est pas prêt — aidez-le d'abord à construire la pièce manquante.

1. Le produit est-il accessible publiquement (pas de mur de mot de passe) ?
2. Existe-t-il une page de tarification (même « gratuit pendant la bêta ») ?
3. Politique de confidentialité + conditions sont-elles en ligne ?
4. Assets de logo en PNG + SVG + carré + favicon ?
5. 5-8 vraies captures d'écran + vidéo de démo de 60-90 s ?
6. Landing pages prêtes pour le GEO (H1 unique, hiérarchie séquentielle, schema FAQ, données structurées) ?
7. Au moins 3 pages alternatives et 3 pages cas d'usage en ligne et indexées ?
8. Galerie de templates ou asset aimant à leads (si applicable à la catégorie) ?
9. Au moins 20 bêta-testeurs/early users susceptibles de laisser un avis sur G2 ?

Un « non » sur les questions 1 à 7 bloque tout. Un « non » sur 8-9 est un blocage mou : vous pouvez lancer, mais vous perdrez la valeur des avis Tier 2 et l'effet cumulatif à la Typeform.

### Étape 2 : choisir les paliers

Catalogue complet dans `references/directory-list.md`. En résumé :

| Palier | Quand | Exemples | Volume typique |
|---|---|---|---|
| **Tier 1 — Lancement phare** | Semaine de lancement uniquement | Product Hunt (ancre), BetaList, HN Show HN, Fazier, DevHunt | ~15 |
| **Tier 2 — Startups/SaaS** | Semaine 1 + au fil de l'eau | AlternativeTo, SaaSHub, G2, Capterra, F6S, SourceForge, Slashdot | ~50 |
| **Tier 3 — Annuaires IA** | Semaines 1 à 3 | TAAFT, Futurepedia, Toolify, Future Tools, aitools.inc, AIStage | ~40 |
| **Tier 4 — Registres agents/MCP** | Semaines 1 à 3 (si MCP) | Glama, APITracker, LF MCP Registry, AI Agents List | ~10 |
| **Tier 5 — Annuaires no-code** | Semaines 1 à 3 (si no-code) | NoCodeFinder, No Code MBA, We Are No Code, MakerPad | ~8 |
| **Tier 6 — Listicles « best of »** | Prospection continue | Prise de contact à froid auprès d'articles de blog DR 40+ | ~10 inclusions |
| **Tier 7 — Places de marché d'intégrations** | À la sortie des intégrations | Zapier, HubSpot, Slack, Airtable, Notion | ~5 |
| **Tier 8 — Plateformes de profil & contenu** | Au fil de l'eau | GitHub, WordPress.com, Substack, Dev.to, SlideShare, Behance | ~50 |
| **Tier 9 — Annuaires de commerce local** | Au fil de l'eau (si applicable) | Manta, Hotfrog, Locanto, MerchantCircle | ~20 |
| **Tier 10 — Forums & communautés** | Au fil de l'eau (participez d'abord) | SitePoint, GrowthHackers, Warrior Forum, Designer News | ~13 |
| **Tier 11 — Communiqués & sites d'articles** | Lancement + jalons | PRLog, PR.com, EzineArticles, Feedspot | ~25 |
| **Tier 12 — Marquage social** | Au fil de l'eau | Scoop.it, Diigo, Pearltrees | ~5 |
| **Tier 13 — Annuaires verticaux de niche** | Quand la verticale correspond | Justia (juridique), Porch (maison), LandBook (design), etc. | ~20 |

**Règle de triage :** ne soumettez que là où le produit correspond réellement. Forcer une fiche dans la mauvaise catégorie brûle l'avantage de première soumission et se fait rejeter par les modérateurs.

### Étape 3 : préparer les variantes d'assets

Pour chaque palier, préparez une variante de description distincte (tirée de `references/positioning-variations.md`) :
- **Tagline** de moins de 10 mots
- **Description courte** à 60 caractères
- **Description longue** à 150 mots
- **5-8 tags de catégorie**
- Assets **logo**
- **Captures d'écran** + URL de la vidéo de démo
- **Histoire du fondateur** (2-3 phrases)

**Critique :** ne collez pas la même description longue dans chaque annuaire. Variez la phrase d'ouverture, l'accent sur les fonctionnalités et le cadrage d'audience par palier. Les moteurs IA recoupent et déclassent le contenu dupliqué.

### Étape 4 : soumettre par lots

Mettez en place le tableur de suivi (`references/submission-tracker-template.csv`). Parcourez-le de gauche à droite. Comptez 2 à 3 heures par lot, c'est réaliste.

Par soumission :
1. Copiez la variante de positionnement adaptée au palier.
2. Remplissez le formulaire.
3. Téléversez les assets.
4. Soumettez.
5. Journalisez : date, URL, statut, notes du modérateur.
6. Une fois en ligne, vérifiez que le backlink existe et est dofollow : `curl -sIL https://annuaire.com/votre-fiche | grep -i rel=`. Si rien ne s'affiche, le lien est dofollow.

## Product Hunt en profondeur (l'événement ancre)

Product Hunt est la soumission au plus fort levier, mais aussi la plus facile à gâcher. L'algorithme PH 2026 pondère la **qualité des commentaires** plus que le nombre d'upvotes — un post à 50 upvotes + 30 commentaires sincères devance un post à 200 upvotes + 5 commentaires. **80 % des lancements ratés** échouent faute d'audience préchauffée ou pour avoir demandé des upvotes au lieu de feedback.

### Préparation sur 3 semaines

- **J-21 à J-14 :** préchauffez le compte hunter. Upvotez et commentez avec soin 3 lancements/jour. Suivez 100+ makers actifs. Construisez un historique pour que votre compte paraisse réel à l'algorithme.
- **J-14 :** créez la page « Upcoming » sur PH. Amenez du trafic pour récolter des abonnés « notifiez-moi au lancement ».
- **J-10 :** (optionnel) réservez un hunter. Ne payez pas en argent — échangez une fonctionnalité, un shoutout, une intro. Un hunter connu ajoute ~15 % de momentum au premier jour mais n'est pas indispensable.
- **J-7 :** rédigez les assets du jour J : images de galerie (1270×760), tagline, description en 260 caractères, premier commentaire de vous, premier commentaire d'un client.
- **J-3 :** préchauffage de la liste e-mail. « On lance mardi. Voici à quoi vous attendre. Répondez si vous voulez un heads-up. »
- **J-1 :** vérification finale — le produit fonctionne en navigation privée, la vidéo se lance automatiquement, le CTA mène à l'inscription, l'aperçu de la fiche PH est correct.

### Exécution le jour du lancement

- **Lancez à 12h01 du matin, heure du Pacifique.** Uniquement mardi, mercredi ou jeudi — les lancements du week-end perdent 60 à 70 % de trafic. Le départ à 12h01 PT maximise votre fenêtre de 24 heures.
- **Les 2 premières heures font tout.** Il faut 50+ soutiens dans les 2 premières heures pour déclencher la distribution algorithmique.
- **Publiez vous-même le premier commentaire** avec l'histoire : pourquoi vous l'avez construit, ce qui diffère, quoi essayer en premier.
- **Répondez à chaque commentaire** en moins de 30 minutes. PH mesure la réactivité du maker.
- **Partagez le lien vers :** un thread Twitter/X, un post long-form LinkedIn, vos communautés Slack/Discord personnelles, votre liste e-mail, Indie Hackers, chaque power user en DM.
- **Ne demandez jamais d'upvotes.** Demandez du **feedback**. « J'adorerais votre avis honnête sur le positionnement » convertit 3× mieux que « soutenez-nous ! » et ne déclenche pas les filtres anti-manipulation de l'algorithme.
- **N'écrivez pas à des inconnus.** La communauté le signale et les modérateurs masqueront votre post.

### Après le lancement

- Rédigez un article de rétrospective du lancement avec les chiffres et les leçons. Honnête, sans vantardise. Publiez au jour 2.
- Cross-postez la rétrospective sur Indie Hackers et r/SaaS (là où la promotion est permise).
- Ne soumettez à Show HN que si vous avez un angle *technique* à partager (architecture, DSL, approche inédite). Un post générique « on a lancé un SaaS » se fera signaler à mort.

## Playbook avis (G2 / Capterra / TrustRadius)

Les fiches G2 et Capterra (détenu par G2 depuis février 2026) sont **sans valeur sans avis**. 10 avis est le seuil magique pour apparaître dans la Grid. Déroulez le protocole 10-en-30 pendant le mois du lancement.

### Le protocole 10-en-30

1. **Jour 1 après le lancement :** identifiez 20 utilisateurs ayant accompli une action significative avec le produit.
2. **Envoyez à chacun un e-mail personnel** avec une URL d'avis directe (réduit la friction d'environ 70 %). Pas de formulaires, pas de landing pages — un lien direct.
3. **Proposez un remerciement modeste.** G2 et TrustRadius autorisent explicitement les petites incitations, type carte cadeau Amazon à 25 $.
4. **Relancez une seule fois** au bout de 5 jours. Ne relancez pas deux fois — cela devient pesant et abîme la relation.
5. **Objectif :** 50 % de conversion → 10 avis à partir de 20 demandes.

### Échéances critiques

- **Rapports d'été G2 :** clôture vers le 28 avril. Planifiez les campagnes d'avis pour atterrir avant.
- **Rapports d'automne G2 :** clôture vers le 28 juillet.
- Rater une clôture signifie attendre 3 mois la prochaine mise à jour de la grid.

### Badges et offres payantes

- Le badge **« Users Love Us »** reste gratuit : il exige 20 avis à 4,0+ de moyenne.
- Les badges Grid, Momentum, Index et Award exigent une offre G2 payante (à partir de 2 999 $/an depuis l'été 2025).
- **Ne dépensez pas sur le G2 payant la première année.** La fiche gratuite + le badge Users Love Us suffisent.

### Multi-plateforme

- TrustRadius suit des mécaniques similaires, avec un volume moindre.
- Capterra se synchronise automatiquement depuis Gartner Digital Markets dans certaines catégories — la fiche peut se remplir sans action directe.

## Stratégie des pages de destination (où atterrissent les backlinks)

Les annuaires ne servent à rien si les backlinks atterrissent sur une page d'accueil générique. Construisez ces pages de destination *avant* de soumettre :

### 1. Pages alternatives (ROI le plus élevé)

Les pages alternatives concurrents convertissent à **5-15 %**, avec des pointes à 15-30 % sur les requêtes de bas de tunnel. Une page par concurrent majeur :

- `/alternatives/[concurrent-1]`
- `/alternatives/[concurrent-2]`
- `/alternatives/[concurrent-3]`
- `/alternatives/[concurrent-4]`

Chaque page exige : un tableau comparatif honnête des fonctionnalités, « quand choisir X plutôt que nous », « quand nous choisir plutôt que X », une comparaison de tarification, 3-5 exemples de cas d'usage, une FAQ solide avec schema.

**Critique :** soyez honnête. Les moteurs IA recoupent les affirmations sur les fonctionnalités des concurrents et déclassent les pages qui mentent.

### 2. Pages cas d'usage / ICP

Chaque ICP dispose de sa landing page dédiée :
- `/for/[audience]` — coachs, agences, e-commerce, SaaS, consultants, etc.
- `/use-cases/[cas-usage]` — qualification de leads, onboarding, recommandation produit, etc.

### 3. Galerie de templates / assets (si applicable)

La bibliothèque de templates de Typeform a généré **30 000 inscriptions organiques non-brandées et 3 M$/an de LTV**. Le schéma :
- Une page indexable par template sur `/templates/[slug]`.
- Un H1 porteur du mot-clé, description de 150+ mots, capture d'écran, « quand utiliser ce template », CTA « utiliser ce template ».
- Templates liés en bas de chaque page (maillage interne = capitalisation SEO).
- 100 templates à J30, 300 à J90 : c'est l'objectif réaliste.

### 4. Listicles « best of » rédigés par vous

Écrivez des sélections honnêtes de votre propre catégorie : `/blog/meilleurs-outils-[categorie]-2026`. Incluez-vous + 10 concurrents avec de vraies critiques. Ces pages se classent sur les requêtes de catégorie ET servent de références canoniques que les moteurs IA citent.

### 5. Pages d'intégration (à la sortie des intégrations)

Chaque intégration = une landing page sur `/integrations/[partenaire]`. Sur le modèle de Zapier : la plateforme tire **~2,6 M de visites organiques mensuelles** de ses pages d'intégration programmatiques (~15 % de son trafic organique total).

## GEO (Generative Engine Optimization)

En 2026, 30 à 50 % des requêtes « rechercher un outil » se déroulent dans ChatGPT, Claude, Perplexity ou les AI Overviews de Google, sans jamais toucher une page de recherche traditionnelle. Les annuaires comptent ici aussi — les moteurs IA puisent massivement dans les annuaires à fort DR pour générer leurs réponses. Mais les *pages de destination* doivent aussi être optimisées pour le GEO.

### Tactiques qui font citer les pages

1. **Un H1 par page, hiérarchie de titres séquentielle.** Taux de citation 2,8× supérieur. 87 % des pages citées utilisent un H1 unique.
2. **Contenu dense et factuel, riche en statistiques citables.** Les moteurs IA préfèrent les chiffres précis (« 3× plus rapide que X ») aux affirmations vagues.
3. **Schema FAQ sur chaque landing page.** Les moteurs IA pondèrent lourdement le `FAQPage` JSON-LD pour l'extraction de réponses.
4. **Tableaux comparatifs.** Extractibles, structurés — exactement ce qu'il faut à une réponse IA.
5. **Un paragraphe explicite « ce que c'est » dans les 100 premiers mots.**
6. **Faites-vous citer sur Reddit et Hacker News.** Claude et Perplexity les indexent massivement. Les mentions sincères sur r/SaaS et HN comptent comme carburant d'entraînement.
7. **Publiez de la recherche originale.** « Nous avons analysé 10 000 [choses] et trouvé X » devient la citation primaire de quiconque écrit sur le sujet.
8. **Réclamez les fiches Crunchbase, la page entreprise LinkedIn et les entrées Wikidata.** Les trois alimentent les corpus d'entraînement IA.
9. **Si applicable, listez-vous sur les registres MCP avec des notes A/B** (Glama en particulier). Les LLM y puisent pour répondre aux questions MCP.

### Mesure

Vérifiez manuellement chaque mois : demandez à ChatGPT, Claude et Perplexity « quels sont les meilleurs outils de [catégorie] ? » et journalisez où le produit apparaît. Des outils gratuits de suivi GEO (GeoTracker, llmrefs) automatisent cela.

## Communauté et distribution continue

Les annuaires sont à usage unique. La communauté est continue. Les deux alimentent le même entonnoir.

### Reddit (règle 90/10)

90 % de l'activité doit être sincèrement utile ; 10 % promotionnel seulement. Violenter cette règle mène au shadowban.

**Subreddits à forte valeur (classés) :**
- **r/SideProject** (200K+) — ouvert à la promo, annonces de lancement bienvenues.
- **r/SaaS** (300K+) — les threads « Share Your SaaS » sont des fenêtres de promo explicites.
- **r/startups** (1,7M) — thread Feedback Friday.
- **r/Entrepreneur** (3,5M) — thread promo hebdomadaire.
- **r/nocode**, **r/IndieHackers**, **r/alphaandbetausers** — bienveillants.
- **r/webdev**, **r/artificial**, **r/LocalLLaMA** — stricts, technique uniquement.

**Ce qui marche :** de vrais chiffres (MRR, inscriptions, churn), des captures d'écran, la structure « ce que j'ai tenté / ce qui est arrivé / ce que je ferais autrement », des mini études de cas avec une leçon nette. **Ce qui échoue :** le hype, les affirmations vagues, les posts « découvrez mon nouveau tool », la demande d'upvotes.

### LinkedIn (canal B2B principal)

80 % des leads sociaux B2B viennent de LinkedIn. Cadence : **3 à 5 posts/semaine** — en dessous, la dynamique se perd ; au-dessus, la fatigue s'installe.

Types de contenus classés par engagement 2026 :
1. Histoires personnelles à leçon business (1,5-2× l'engagement moyen)
2. Données / recherches originales (1,3-1,5×)
3. Prises de position contrariantes sur l'industrie (1,2-1,5×)
4. Carrousels de documents en 8-12 slides (1,3-1,8×)

### Twitter/X (canal indie hacker + dev)

Threads build-in-public sur l'architecture, le revenu, les décisions. Les deep-dives techniques se font indexer par Google + Claude + Perplexity → GEO indirect.

### Indie Hackers

- Lancez un thread build-in-public le jour du lancement PH.
- Publiez des mises à jour hebdomadaires : revenu, livraisons, leçons. Les posts à zéro revenu fonctionnent si la leçon est honnête.
- Commentez 10× plus que vous ne publiez, pour bâtir du karma avant vos propres liens.

### Dev.to + Hashnode

Chaque article technique consistant = un backlink dofollow + l'audience dev. Cross-postez avec URL canonique vers le blog principal.

## KPI et suivi

Suivez chaque semaine. Si un chiffre ne bouge pas, creusez — ne vous contentez pas de soumettre à plus d'annuaires.

| Métrique | Jour 0 | Cible J30 | Cible J90 |
|---|---|---|---|
| Domain Rating (DR) | 0 | 20 | 30+ |
| Domaines référents | 0 | 30 | 80+ |
| Pages indexées | — | 50 | 200+ |
| Clics organiques/jour | 0 | 30 | 200+ |
| Fiches annuaires en ligne | 0 | 50 | 70+ |
| Avis G2 | 0 | 10 | 25 |
| Avis Capterra | 0 | 5 | 15 |
| Citations IA (vérif. manuelle) | 0 | 3 | 15+ |
| Inscriptions via annuaires | 0 | 50 | 300 |
| Inscriptions via pages alt/cas d'usage | 0 | 20 | 300 |

## Ce qu'il ne faut pas faire

1. **Ne payez pas de service de soumission aux annuaires** (offres à 60-200 $). Tout l'intérêt est que c'est gratuit. C'est un après-midi de copier-coller.
2. **Ne soumettez pas aux annuaires de spam** (DR sous 10, sans trafic, sans qualité éditoriale). Ils diluent votre profil de backlinks et la détection de spam de Google peut vous pénaliser.
3. **Ne soumettez pas avec le mauvais positionnement.** Relisez le tableau de positionnement par palier. Les descriptions génériques gâchent la fiche.
4. **Ne faites pas des annuaires tout votre GTM.** C'est la fondation. Contenu + communauté + avis sont ce qui convertit vraiment.
5. **Ne sautez pas les avis sur G2/Capterra.** Les fiches sans avis sont mortes. Déroulez le protocole 10-en-30 ou ne soumettez pas.
6. **Ne demandez pas d'upvotes sur Product Hunt.** L'algorithme 2026 le pénalise. Demandez du **feedback**.
7. **Ne modifiez pas les vieilles fiches annuaires chaque semaine.** Soumettez une fois, vérifiez chaque trimestre.
8. **Ne soumettez pas avant que la page de destination existe.** Le link equity a besoin d'une destination.
9. **Ne dupliquez pas les descriptions entre annuaires.** Les moteurs IA pénalisent le contenu dupliqué.
10. **Ne mentez pas sur les pages comparatives.** Les moteurs IA recoupent et déclassent les mensonges.
11. **Ne surinvestissez pas le pic du jour du lancement.** Le flywheel, c'est templates + alternatives + avis + contenu continu — pas un jour de PH.
12. **N'oubliez pas Crunchbase, la page entreprise LinkedIn et Wikidata.** Ils alimentent les corpus d'entraînement IA et comptent pour le GEO.

## Questions propres à la tâche

1. **Que lancez-vous ?** (La catégorie change le mix de paliers — IA vs SaaS traditionnel vs no-code vs outil dev.)
2. **Quand est le jour du lancement ?** (Les assets de phase 0 exigent 7 jours de préparation.)
3. **Avez-vous construit les pages de destination ?** (Alternatives, cas d'usage, templates — sinon, construisez d'abord.)
4. **Un hunter Product Hunt est-il prévu ?** (Optionnel mais ajoute ~15 % au premier jour. 3 semaines de préchauffage indispensables dans tous les cas.)
5. **Combien de bêta-testeurs pouvez-vous solliciter pour des avis ?** (Il en faut 20 pour en obtenir 10.)
6. **Avez-vous un angle MCP ou agent ?** (Si oui, les registres Tier 4 sont une vraie douve.)
7. **Des intégrations existantes ?** (Si oui, les places de marché Tier 7 sont les backlinks au plus fort DR disponibles.)
8. **Taille de la liste e-mail ?** (Nécessaire pour le trafic préchauffé du jour de lancement PH — 100+ est le minimum.)
9. **DR actuel et nombre de domaines référents ?** (Base de mesure de l'effet cumulatif.)

## Format de sortie

Quand l'utilisateur demande un plan annuaires, livrez :

1. **Évaluation de préparation** — quels éléments de la phase 0 manquent, lesquels bloquent la soumission
2. **Sélection des paliers** — quels paliers s'appliquent, lesquels écarter, pourquoi
3. **Ordre de soumission** — lots semaine 1 / semaine 2 / semaine 3
4. **Liste des pages de destination** — quoi construire en premier s'il manque
5. **Variantes de positionnement** — le texte réel par palier (tiré de `references/positioning-variations.md`)
6. **Calendrier de préparation PH sur 3 semaines** — mappé à des dates si le jour du lancement est connu
7. **Plan d'avis 10-en-30** — qui solliciter, quand, comment
8. **Objectifs hebdomadaires** — annuaires soumis, avis, progression du DR
9. **Suivi** — lien vers ou inclusion du CSV de `references/submission-tracker-template.csv`

Gardez le plan actionnable. Chaque élément doit pouvoir se faire aujourd'hui.

## Skills liés

- `launch` — le moment de lancement au sens large, framework ORB, approche en cinq phases
- `programmatic-seo` — pages de destination (alternatives, intégrations, templates) vers lesquelles les backlinks doivent converger
- `competitors` — le motif de page `/alternatives/[outil]`
- `ai-seo` — optimisation GEO pour la citation par les IA
- `content-strategy` — contenu éditorial qui attire les inclusions dans les listicles « best of »
- `free-tools` — aimants à leads pour les pages de destination
- `community-marketing` — mécaniques Reddit, Indie Hackers, communautés Slack
- `schema` — JSON-LD FAQ + Product + Organization pour le GEO
