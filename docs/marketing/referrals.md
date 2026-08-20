## Ce qu'il fait

`referrals` conçoit et optimise les programmes qui font venir de nouveaux clients par les clients existants : boucle de parrainage (moment déclencheur, partage, conversion, récompense), choix et dimensionnement des incitations, check-list de lancement, séquences d'e-mails et métriques de suivi. Il couvre à la fois le referral client et l'affiliation, et commence toujours par les départager, car ce sont deux mécaniques différentes avec des audiences, des récompenses et des outils distincts.

## Quand l'utiliser

Appelez `/referrals`, ou laissez Codex le sélectionner lorsqu'une tâche correspond. Utilisez ce skill lorsque vous voulez créer, optimiser ou analyser un programme de referral, un programme d'affiliation ou une stratégie de bouche-à-oreille (« refer a friend », incitation au parrainage, ambassador, viral loop). Pour un partenariat marketing entre deux entreprises qui s'adressent à la même audience, utilisez plutôt [co-marketing](https://aihero.dev/skills-co-marketing) ; pour la viralité au moment d'un lancement produit, voyez [launch](https://aihero.dev/skills-launch).

## Prérequis

Le skill lit le contexte `product-marketing` du projet (`.agents/product-marketing.md`) s'il existe, pour ancrer LTV, CAC et audience sans les redemander. Il a aussi besoin de quelques chiffres que vous seul connaissez : LTV moyenne d'un client, CAC actuel des autres canaux et budget d'incitations — c'est à partir d'eux qu'il dimensionne les récompenses.

## La boucle de referral

Un programme de referral est une boucle en quatre temps : un moment déclencheur (juste après le premier « aha », un jalon, un support exceptionnel), une action de partage (classée par efficacité, du partage in-product au code hors ligne), la conversion du filleul, puis la récompense qui referme la boucle. Le skill choisit le déclencheur et le mécanisme de partage en fonction de votre produit, puis la structure d'incitation :

| Structure | Quand la choisir |
|-----------|------------------|
| Sens unique (parrain seul) | Produits à forte valeur, simplicité maximale |
| Double-sided (les deux parties) | Meilleure conversion, cadrage gagnant-gagnant |
| Paliers gamifiés | Relancer les parrains ponctuels |

Les données de référence (clients parrainés avec 16 à 25 % de LTV en plus et 18 à 37 % de churn en moins) et les exemples de programmes connus vivent dans les fichiers de référence du skill.

## Questions fréquentes

**Referral ou affiliation : comment choisir ?**

Le referral mobilise vos clients existants, avec des récompenses ponctuelles, une confiance élevée et un volume modéré — idéal pour les produits self-serve à ticket faible ou moyen. L'affiliation mobilise des créateurs de contenu qui ne sont pas nécessairement clients, avec une commission continue et un volume plus élevé — idéal pour les produits à ticket élevé et les audiences inaccessibles autrement. Les deux peuvent coexister ; le skill pose les questions de LTV et de CAC qui départagent.

**Faut-il récompenser les deux parties ou seulement le parrain ?**

La récompense double-sided convertit mieux parce que le filleul reçoit aussi un avantage : le partage ne semble pas intéressé. La récompense à sens unique reste pertinente pour les produits à forte valeur, où la simplicité prime. Testez les deux si votre volume le permet — c'est l'un des premiers tests A/B que le skill propose.

**Comment éviter la fraude sans friction excessive ?**

Le skill traite la fraude comme un problème de conception, pas de répression : vérification avant versement de la récompense, limites par parrain, et suivi des signaux d'abus dans les métriques de santé du programme. Les mesures concrètes de prévention sont détaillées dans la référence consacrée aux programmes d'affiliation.

## Indicateurs de réussite

- Le plan commence par trancher referral contre affiliation (ou les deux), avec la LTV et le CAC pour justifier le choix.
- La boucle est explicitée : moment déclencheur choisi, mécanisme de partage classé, structure d'incitation argumentée.
- La check-list de lancement distingue avant, pendant et 30 jours après, avec tracking, attribution et prévention de fraude planifiés.
- Les métriques de succès séparent santé du programme et impact business (% de nouveaux clients issus du referral, CAC comparé, LTV des parrainés).

## Où il s'inscrit

`referrals` est le canal d'acquisition « clients qui amènent des clients » dans la famille Ingénierie de la croissance. Il s'appuie sur [emails](https://aihero.dev/skills-emails) pour les séquences de nurture qui réactivent les non-parrains, et se distingue de [co-marketing](https://aihero.dev/skills-co-marketing), qui fait collaborer deux entreprises plutôt que des clients individuels. Quand vous hésitez sur la compétence à mobiliser, [ask-mabza](https://aihero.dev/skills-ask-mabza) route la collection.
