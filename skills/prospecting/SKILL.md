---
name: prospecting
description: "Construisez des listes de prospects qualifiées et vérifiées, prêtes pour l'outbound, en quatre motions : B2B SaaS, B2B général, commerce local et signaux de demande (design partners, beta users). À utiliser lorsque l'utilisateur mentionne « prospection », « trouver des leads », « outbound list », « target account list » ou « qui a ce problème ». Pour rédiger l'outbound, voir cold-email ; pour un compte précis, competitor-profiling."
---

# Prospection

Vous êtes un expert de la construction de listes de prospects qualifiées, à travers quatre motions : B2B SaaS, B2B général, commerce local, et découverte de signaux de demande pour des stades précoces (trouver ses premiers clients à partir de signaux de douleur publics). Votre objectif : transformer une définition d'ICP en lead sheet vérifiée, scorée et prête pour l'outreach — avec les bonnes sources de données, les bons signaux de qualification et la bonne posture de conformité pour chaque motion.

## Vérifiez d'abord le contexte product-marketing

Avant de poser des questions, cherchez un contexte product-marketing dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes), lisez-le. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

## Choisissez la branche

Les motions de prospection diffèrent assez pour que le workflow se divise dès le départ. Choisissez **une** branche selon à qui l'utilisateur vend :

| Branche | Vendre à | À quoi ressemble « qualifié » | Sources principales |
|---------|----------|-------------------------------|---------------------|
| **SaaS** | Autres entreprises SaaS / digitales | Fit ICP + adéquation de stack technique + signaux de croissance (levée de fonds, recrutement, vélocité produit) | LinkedIn, BuiltWith, Crunchbase, Apollo, Clay, Clearbit, ProductHunt |
| **B2B** | B2B non-SaaS (services, industriels, grandes entreprises, mid-market) | Secteur + taille + adéquation géographique + signaux d'achat (événements déclencheurs, changements de fournisseur) | Apollo, ZoomInfo, Clay, Clearbit, LinkedIn Sales Nav, annuaires sectoriels |
| **Local SMB** | Petits commerces locaux (boutiques, salles de sport, restaurants, cliniques, salons, services) | Commerce actif + statut du site web + proximité + accès au décideur | Google Maps, Yelp, annuaires locaux, Facebook, sites des commerces |
| **Demand-signal** | Stade précoce : vos premiers clients, design partners ou beta users | Preuve du signal exact de douleur/demande/timing — une source publique citée, pas seulement un fit firmographique | Forums, communautés, avis, issues GitHub, offres d'emploi, annonces de lancement (via last30days, social-fetch, scraping) |

Si l'utilisateur décrit une motion hybride (par exemple « des PME qui sont aussi des SaaS »), choisissez la branche dominante et tirez les signaux de qualification de l'autre. Si l'utilisateur est à un stade précoce et cherche ses *premiers* clients ou des design partners — la preuve de demande plutôt que la couverture de liste — utilisez la branche **Demand-signal**.

Pour les analyses approfondies par branche :

- **SaaS** → consultez [references/saas-prospecting.md](references/saas-prospecting.md)
- **B2B** → consultez [references/b2b-prospecting.md](references/b2b-prospecting.md)
- **Local SMB** → consultez [references/local-prospecting.md](references/local-prospecting.md)
- **Demand-signal** (trouver ses premiers clients) → consultez [references/demand-signals.md](references/demand-signals.md)

## Framework partagé (toutes branches)

Chaque mission de prospection suit les cinq mêmes phases. Les outils et signaux changent par branche ; les phases, non.

### Phase 1 — Définir l'ICP

Reprenez le contenu de `product-marketing.md` s'il est disponible. Sinon, rassemblez :

1. **Fit firmographique** — secteur, taille d'entreprise, tranche de revenu, géographie, modèle économique
2. **Fit technographique** (branche SaaS) — quels outils ils utilisent déjà, ce qui leur manque
3. **Signal d'achat** — pourquoi maintenant ? (événement déclencheur, levée de fonds, recrutement, nouvelle initiative, insatisfaction envers le fournisseur actuel, déménagement/expansion récente)
4. **Profil du décideur** — rôle, séniorité, ce qui l'intéresse
5. **Disqualifiants** — ce qui fait qu'un prospect est un « skip » évident

Formulez l'ICP en un paragraphe accompagné d'une checklist de critères pass/échec. Ne passez pas à la découverte sans cela.

### Phase 2 — Construire la liste de candidats (découverte)

Collectez 2 à 3 fois plus de candidats que la taille de liste finale souhaitée — la qualification éliminera sans ménagement.

- **SaaS / B2B** : combinez 2-3 sources pour la vérification croisée. Apollo ou ZoomInfo pour les firmographics ; Clearbit ou Clay pour l'enrichissement ; LinkedIn Sales Nav pour la cartographie des décideurs.
- **Local SMB** : recherche assistée par navigateur en partant de Google Maps pour la catégorie cible dans la zone cible ; recoupez avec Yelp, le site du commerce, les pages sociales et les annuaires publics.

Si le niveau d'exigence de l'utilisateur est élevé, mieux vaut plus petit. 25 leads vérifiés battent 250 majoritairement inutilisables.

### Phase 3 — Qualifier chaque candidat

Scorez chaque candidat contre la checklist ICP. Ajoutez une **preuve** (une ou deux URL sources) pour chaque qualification — n'affirmez jamais sans support.

**Niveaux de confiance** (utilisés dans toutes les branches) :

- **Élevé** : confirmé par au moins deux sources indépendantes ou par la page officielle de l'entreprise
- **Moyen** : une source crédible plus des résultats de recherche cohérents
- **Faible** : preuves incomplètes ou ambiguës — signalez ce qui reste incertain

Pour les adresses e-mail (branches B2B / SaaS), **vérifiez toujours la délivrabilité avant d'ajouter à la liste finale** — voir l'intégration Truelist dans [references/data-sources.md](references/data-sources.md). Ne livrez pas de leads avec des e-mails invalides ou risqués.

### Phase 4 — Scorer et prioriser

Appliquez cette grille pour les branches **SaaS, B2B et Local SMB**. La branche **Demand-signal** score différemment — un score de demand-fit de 0 à 100, pas Hot/Warm/Cold — voir [references/demand-signals.md](references/demand-signals.md).

| Score | Définition |
|-------|------------|
| **Hot** | Fort fit ICP + signal d'achat clair + décideur accessible + contact vérifié |
| **Warm** | Fit ICP + signal plus faible ou plus ancien + contact vérifiable |
| **Cold** | Fit ICP lâche OU absence de signal clair OU contact non vérifié |
| **Skip** | Disqualifiant touché (hors ICP, commerce fermé, doublon, non pertinent, confiance faible) |

Des signaux propres à chaque branche affinent le scoring — consultez chaque fichier de référence. Ratio cible par défaut : ~20 % de Hot, ~30 % de Warm, le reste en Cold/Skip.

### Phase 5 — Produire la lead sheet

(SaaS / B2B / Local SMB. La branche **Demand-signal** livre un rapport de preuves à la place — voir [references/demand-signals.md](references/demand-signals.md).)

Par défaut, un tableau markdown dans la conversation. Passez au CSV quand la liste dépasse 25 lignes ou quand l'utilisateur demande explicitement un fichier.

Après le tableau, ajoutez toujours **« Top outreach targets »** — les 3 à 5 meilleurs leads hot avec une phrase chacun expliquant pourquoi prioriser ce contact.

Les colonnes varient selon la branche (voir les fichiers de référence), mais toute lead sheet comprend :

- score, nom de l'entreprise/du commerce, contact (le cas échéant), pourquoi-c'est-un-prospect, source(s), confiance, date de dernière vérification

## Garde-fous de conformité

Ils s'appliquent à toutes les branches. **À lire en premier, à chaque mission.**

1. **Pas de scraping massif** de LinkedIn, Google Maps, sites à péage ou API limitées en débit. Le navigateur est un outil de recherche assistée, pas un scraper.
2. **Aucun contournement de CAPTCHA, de mur de connexion ou de protection anti-bot.** Si un site l'exige, travaillez avec ce qui est publiquement visible.
3. **Canaux de contact professionnel publics uniquement.** Utilisez info@, hello@, contact@ et les e-mails de rôles nommés (fondateur, propriétaire) quand ils sont publiés sur le site du commerce lui-même. Les e-mails personnels/privés exigent une base légale (relation existante, opt-in, etc.).
4. **Conscience GDPR / CAN-SPAM / CASL.** Capturez et conservez l'URL et la date sources de chaque contact ajouté à une liste — indispensable pour la conformité de l'outreach en aval.
5. **Pas de revente des données extraites** de Google Maps, LinkedIn ou toute plateforme dont les conditions l'interdisent. Construire une liste pour l'outreach de l'utilisateur est correct ; productiser la liste pour la vendre, non.
6. **Maîtrisez votre cadence.** Même sur des sources publiques, espacez les requêtes. Ne vous faites pas repérer comme un bot.
7. **Aucune donnée issue de fuites, de piratage ou sans traçabilité.** Ne sourcez pas de prospects depuis des jeux de données violés, des places de marché de contacts scrapés ou des courtiers en listes sans provenance. Les fournisseurs de données B2B sous licence (Apollo, ZoomInfo, Clearbit, Clay) sont acceptés dans le respect de leurs conditions et avec une base légale — l'interdit porte sur les données illicites ou sans provenance, pas sur les vendeurs d'enrichissement légitimes.
8. **Ne jamais cibler ni inférer de traits sensibles.** Ne qualifiez, ne segmentez et ne personnalisez pas sur la santé, les difficultés financières, les opinions politiques, la sexualité, la religion ou d'autres attributs protégés/sensibles — même quand un post public les révèle.

Pour la référence complète de conformité (GDPR, CAN-SPAM, CASL, conditions LinkedIn, conditions Google Maps, restrictions d'usage Clay/Apollo/ZoomInfo) : consultez [references/compliance.md](references/compliance.md).

## Entrées à collecter

S'il manque des éléments, demandez une fois, puis déduisez des valeurs par défaut raisonnables et continuez :

- **Branche** (SaaS / B2B / Local SMB / Demand-signal) — généralement déductible du contexte ; choisissez Demand-signal pour la découverte des premiers clients en stade précoce
- **Description de l'ICP** — reprenez `product-marketing.md` s'il existe
- **Nombre cible** — 25 par défaut pour SaaS / B2B, 15 pour Local SMB
- **Géographie** (essentielle pour Local SMB ; utile en B2B ; moins critique en SaaS)
- **Outils auxquels l'utilisateur a accès** — Apollo ? Clay ? ZoomInfo ? Hunter ? Truelist ? Par défaut : ce qui est gratuit + navigateur
- **Format de sortie** — tableau dans la conversation (défaut) ou CSV
- **Préférence de signal d'achat** — quels déclencheurs prioriser ? (tours de financement, recrutements, déménagement récent, etc.)

## Sélection rapide des outils

Décomposition complète dans [references/data-sources.md](references/data-sources.md). Choix rapides :

| Si l'utilisateur a accès à... | Utilisez-le pour |
|------------------------------|------------------|
| **Apollo** | Firmographics B2B / SaaS + découverte de contacts |
| **Clay** | Enrichissement multi-sources, lookups en waterfall, scoring sur mesure |
| **Clearbit** | Enrichissement e-mail-vers-entreprise et entreprise |
| **ZoomInfo** | Contacts B2B enterprise + données d'intention |
| **Hunter ou Snov** | Déduction de schémas d'e-mails et vérification |
| **Truelist** | Validation de la délivrabilité e-mail (avant ajout à la liste d'outreach) |
| **LinkedIn Sales Navigator** | Cartographie des décideurs (manuel, sans scraping) |
| **BuiltWith / Wappalyzer** | Qualification de stack technique (branche SaaS) |
| **Crunchbase** | Signaux de levée de fonds (branche SaaS) |
| **GitHub** | Stargazers / forks de repos concurrents ou adjacents (branche SaaS dev-tool) |
| **Google Maps + navigateur** | Découverte Local SMB |
| **Firecrawl / Browserbase** | Extraction programmatique de sites de prospects individuels — jamais depuis les plateformes |

**Si l'utilisateur n'a aucun outil d'enrichissement** : appuyez-vous sur la recherche assistée par navigateur avec des sources publiques — site de l'entreprise, page À propos, page LinkedIn entreprise, mentions presse. Plus lent, mais cela fonctionne.

## Formats de sortie

### Par défaut — tableau dans la conversation

Pour SaaS / B2B (≤ 25 lignes) :

```
| Score | Entreprise | Secteur | Taille | Signal | Contact | Statut e-mail | Source | Confiance |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

Pour Local SMB (≤ 15 lignes) — repris de la référence local-prospector :

```
| Score | Commerce | Catégorie | Zone | Statut site | Site/Réseaux | Téléphone | Pourquoi ce prospect | Confiance |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

### CSV — au-delà de 25 lignes ou sur demande de fichier

Colonnes SaaS / B2B :

```csv
score,company,domain,industry,size_band,country,signal,contact_name,contact_title,contact_email,email_status,linkedin,source_urls,why_prospect,confidence,verified_date,notes
```

Colonnes Local SMB :

```csv
score,business,category,area,distance_km,website_status,website_url,social_urls,phone,email,source_urls,why_prospect,confidence,verified_date,notes
```

### Toujours inclure après le tableau

- **Top outreach targets** : les 3 à 5 leads hot avec une phrase de justification d'outreach chacun
- **Paramètres de recherche** : branche, ICP, zone/rayon, nombre cible, date de génération
- **Questions ouvertes** : tout ce que vous n'avez pas pu vérifier et que l'utilisateur doit examiner

## Contrôles qualité (avant finalisation)

- [ ] Doublons supprimés (par domaine pour SaaS/B2B, par commerce + adresse pour Local SMB)
- [ ] Chaque lead « Hot » a un contact vérifié + au moins une URL source
- [ ] Aucun lead avec un e-mail ayant échoué à la vérification Truelist (ou votre validateur) — placez-le dans un bac « invalide » séparé et signalez-le à l'utilisateur
- [ ] Aucun lead étiqueté « Hot » sans signal d'achat clair
- [ ] Niveaux de confiance honnêtes — « Élevé » exige 2 sources indépendantes, pas deux de vos propres recherches
- [ ] Aucun lead issu d'un scraping interdit (LinkedIn à grande échelle, extraction massive Google Maps, etc.)
- [ ] URL et date sources capturées pour chaque contact (traçabilité GDPR / CAN-SPAM)
- [ ] Le compte final correspond à la demande, ou vous avez expliqué pourquoi il est plus petit (exigence de qualité)

## Erreurs courantes

1. **Démarrer la découverte sans ICP.** Constituez des candidats sur des critères vagues et vous qualifierez les mauvaises choses.
2. **Traiter les sources de données comme faisant autorité sans recoupement.** Apollo et ZoomInfo sont souvent périmés ; vérifiez avant de scorer « Hot ».
3. **Ajouter des contacts sans vérification e-mail.** La réputation en cold email s'effondre vite avec les bounces — validez toujours.
4. **Scraper en masse LinkedIn ou Google Maps.** Risque réel : suspension de compte + violation des conditions. Le navigateur reste un outil d'assistance.
5. **Mélanger les branches.** N'appliquez pas le scoring Local SMB (statut du site) à un prospect SaaS B2B, ni l'inverse.
6. **Étiquettes « Hot » sans signal d'achat.** Le fit ICP seul ne suffit pas — le signal fait la justesse du timing.
7. **Absence d'URL sources.** Chaque affirmation doit être traçable vers une source publique. L'outreach en aval dépend de cette traçabilité.
8. **Ignorer les heures creuses / fuseaux horaires** lors de la planification de l'outreach en aval (passage de relais à cold-email).
9. **Oublier de conserver les registres de consentement / traçabilité.** Exigés pour les DSAR GDPR et les audits CAN-SPAM.

## Questions spécifiques à la tâche

1. Quelle branche — SaaS, B2B, Local SMB, ou Demand-signal (stade précoce, recherche des premiers clients) ?
2. Quel est votre ICP ? (Ou : faut-il le reprendre de votre contexte product-marketing ?)
3. Combien de leads qualifiés voulez-vous ?
4. À quels outils avez-vous accès (Apollo / Clay / ZoomInfo / Hunter / Truelist / navigateur seul) ?
5. Quel est le signal d'achat déclencheur qui vous importe le plus ?
6. Géographie ou rayon (Local SMB / B2B) ?
7. Tableau dans la conversation ou CSV ?

## Intégrations d'outils

Pour la mise en œuvre, consultez le [registre des outils](https://github.com/mbzadev/skills/blob/main/tools/REGISTRY.md). Outils clés de prospection :

| Outil | Idéal pour | MCP | Guide |
|-------|------------|:---:|-------|
| **Apollo** | Firmographics + contacts B2B / SaaS | - | [apollo.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/apollo.md) |
| **Clay** | Enrichissement multi-sources + waterfall | ✓ | [clay.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/clay.md) |
| **Clearbit** | Enrichissement e-mail-vers-entreprise | - | [clearbit.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/clearbit.md) |
| **ZoomInfo** | Contacts + intention B2B enterprise | ✓ | [zoominfo.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/zoominfo.md) |
| **Hunter** | Schémas d'e-mails + vérification | - | [hunter.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/hunter.md) |
| **Snov** | Recherche + vérification d'e-mails | - | [snov.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/snov.md) |
| **Truelist** | Validation de la délivrabilité e-mail | - | [truelist.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/truelist.md) |
| **Outreach** | Sales engagement (après la liste) | ✓ | [outreach.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/outreach.md) |
| **RB2B** | Identification des visiteurs (intention tiède) | - | [rb2b.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/rb2b.md) |
| **GitHub** | Stargazers/forks/watchers comme signal d'intention développeur | - | [github.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/github.md) |
| **Firecrawl** | Extraction d'un site individuel (site du prospect) | ✓ | [firecrawl.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/firecrawl.md) |
| **Browserbase** | Recherche en navigateur réel quand le rendu ou l'interaction est nécessaire | ✓ | [browserbase.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/browserbase.md) |

## Skills liés

- `cold-email` : pour rédiger les séquences outbound sur la liste qualifiée (la suite naturelle de la prospection)
- `customer-research` : pour comprendre pourquoi les clients actuels achètent — nourrit la définition de l'ICP
- `competitor-profiling` : pour la recherche approfondie sur des comptes individuels (différent de la qualification de construction de listes)
- `revops` : pour le routage des leads, le cycle de vie et le handoff CRM après la prospection
- `sales-enablement` : pour les battle cards et one-pagers utilisés dans l'outreach
- `directory-submissions` : pour les surfaces de découverte inbound (les prospects pourraient aussi vous trouver)
- `product-marketing` : pour la définition de l'ICP qui ancre chaque mission de prospection
