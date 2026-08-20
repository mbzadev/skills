## Ce qu'il fait

`prospecting` transforme une définition d'ICP en liste de prospects vérifiée, scorée et prête pour l'outreach, à travers quatre motions distinctes : B2B SaaS, B2B général, commerce local et découverte de signaux de demande pour les premiers clients.

Sa contrainte définissante : chaque lead doit être qualifié sur preuve — une URL source par affirmation, des niveaux de confiance honnêtes, des e-mails validés avant d'entrer dans la liste — et tout le processus s'opère sous garde-fous de conformité stricts : pas de scraping massif de LinkedIn ou Google Maps, aucun contournement de protection anti-bot, et une traçabilité conservée pour chaque contact en vue du GDPR et du CAN-SPAM.

## Quand l'utiliser

Appelez `/prospecting`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill pour la phase de construction et de qualification de listes : « trouver des prospects », « outbound list », « target account list », « ICP-fit accounts », « trouver mes premiers clients », « design partners », « beta users », « qui a ce problème ». Pour rédiger la séquence outbound une fois la liste bâtie, utilisez plutôt [cold-email](https://aihero.dev/skills-cold-email) ; pour la recherche approfondie sur un compte précis, [competitor-profiling](https://aihero.dev/skills-competitor-profiling).

## Prérequis

Le skill lit en premier un éventuel fichier `.agents/product-marketing.md` dans le projet — la définition de l'ICP qui ancre toute la mission. Aucun outil payant n'est obligatoire : sans Apollo, Clay ou ZoomInfo, il retombe sur la recherche assistée par navigateur avec les sources publiques.

## Quatre branches, un framework

Le workflow bifurque dès le départ selon la cible — SaaS, B2B, Local SMB ou Demand-signal — car « qualifié » ne veut pas dire la même chose pour une entreprise SaaS en croissance, un restaurant de quartier ou un futur design partner identifié par un post de forum. Mais les cinq phases restent immuables : définir l'ICP, construire 2 à 3 fois plus de candidats que visé, qualifier sur preuve, scorer, livrer la lead sheet. La branche Demand-signal, elle, chasse la preuve de douleur publique plutôt que le fit firmographique, et livre un rapport de preuves au lieu d'une table.

## Le score Hot n'existe pas sans signal

La grille Hot / Warm / Cold / Skip ne récompense pas le fit ICP seul : un lead « Hot » exige un signal d'achat clair, un décideur accessible et un contact vérifié. La cible d'équilibre tourne autour de 20 % de Hot et 30 % de Warm — 25 leads vérifiés battent 250 contacts majoritairement inutilisables.

## Questions fréquentes

**Faut-il accepter tous les leads renvoyés par Apollo ou ZoomInfo ?**

Non. Ces bases sont souvent périmées — le skill exige un recoupement multi-sources avant tout score « Hot », et « confiance élevée » signifie deux sources indépendantes, pas deux recherches de l'agent. Les e-mails passent en plus par une validation de délivrabilité avant d'entrer dans la liste.

**Peut-on scraper LinkedIn ou Google Maps pour aller plus vite ?**

Non, et c'est explicite : le navigateur est un outil de recherche assistée, pas un scraper — risque de suspension de compte et violation des conditions. Les données sans provenance (fuites, courtiers opaques) sont également bannies, tandis que les fournisseurs sous licence restent utilisables dans le respect de leurs conditions.

**Tableau ou CSV ?**

Tableau markdown dans la conversation par défaut ; passage au CSV au-delà de 25 lignes ou sur demande. Dans les deux cas, la livraison se termine par les « Top outreach targets » — 3 à 5 leads hot justifiés en une phrase — et les questions restées ouvertes.

## Indicateurs de réussite

- La branche choisie est explicite et le scoring appliqué est celui de cette branche.
- Chaque lead, surtout les « Hot », s'accompagne d'au moins une URL source et d'un niveau de confiance.
- Aucun e-mail non vérifié ne figure dans la liste finale ; les invalides sont isolés et signalés.
- La traçabilité source + date est conservée pour chaque contact.
- La liste se termine par les Top outreach targets et les paramètres de recherche (ICP, zone, date).

## Où il s'inscrit

`prospecting` est l'étape amont de la chaîne outbound : il produit la liste qualifiée que les autres skills exploitent. Sa sortie alimente [cold-email](https://aihero.dev/skills-cold-email) pour l'écriture des séquences, puis [revops](https://aihero.dev/skills-revops) pour le routage et le handoff CRM ; la définition de l'ICP vient de [product-marketing](https://aihero.dev/skills-product-marketing). En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
