## Ce qu'il fait

`co-marketing` aide deux entreprises complémentaires à mener des campagnes communes : identification des partenaires (recouvrement d'audience, scoring, sources de prospection), brainstorming d'idées de campagnes, prise de contact à froid, et structuration de l'accord — propriété des leads, engagements de promotion, calendrier, partage des métriques. Son filtre de départ est strict : le meilleur partenaire partage votre buyer persona mais résout un problème différent, sans se battre pour le même budget ; un concurrent adjacent ne devient pas partenaire en changeant de nom.

## Quand l'utiliser

Appelez `/co-marketing`, ou laissez Codex le sélectionner lorsqu'une tâche correspond. Utilisez ce skill lorsque vous cherchez avec qui associer votre entreprise ou planifiez une campagne conjointe : « co-marketing », « partner marketing », « joint campaign », « cross-promotion », « co-brand », « avec qui devrions-nous nous associer ? ». Pour un programme où vos propres clients parrainent d'autres clients, utilisez plutôt [referrals](https://aihero.dev/skills-referrals) ; pour les partenariats au moment d'un lancement produit, voyez [launch](https://aihero.dev/skills-launch).

## Prérequis

Le skill lit le contexte `product-marketing` du projet (`.agents/product-marketing.md`) s'il existe, pour dériver l'ICP et le workflow dans lequel s'inscrit votre produit — c'est de là que sortent les candidats partenaires adjacents. Les données de recouvrement de comptes (Crossbeam, Reveal) enrichissent l'analyse quand elles sont disponibles, mais ne sont pas exigées pour démarrer.

## Le recouvrement d'audience comme filtre

L'identification des partenaires repose sur un principe : même audience, budget différent. Concrètement, le même buyer persona avec un problème résolu différent, une position adjacente dans le workflow (avant, après ou à côté de votre outil), un stade d'entreprise comparable. Chaque candidat est ensuite noté de 1 à 5 sur six critères — adéquation et taille d'audience, alignement de marque, qualité d'engagement, potentiel de réciprocité, facilité d'exécution — et les pistes se trouvent dans quatre terrains de chasse :

| Terrain | Exemples de signaux |
|---------|---------------------|
| Écosystème d'intégrations | Partenaires existants, même catégorie de marketplace |
| Catégories adjacentes | Outils en amont, en aval, même rôle autre workflow |
| Signaux communautaires | Mêmes podcasts sponsorisés, mêmes conférences |
| Sources de données | Crossbeam/Reveal, sondages clients, voisins G2/Capterra |

## Le catalogue de campagnes et l'accord

Une fois le partenaire trouvé, le skill puise dans un catalogue organisé en quatre familles — contenu (article co-écrit, ebook commun, rapport d'étude), événements (webinar, summit, stand partagé), marketing produit (lancement d'intégration, landing « better together », bundle), communauté (takeover, giveaway, AMA) — chacune tracée avec son effort et son mode de partage des leads. La campagne ne démarre qu'avec un accord écrit en huit points, dont la question qui fâche est réglée d'avance : à qui vont les leads, et que promet chaque partie en promotion.

## Questions fréquentes

**Comment trouver des partenaires quand on n'a pas encore d'intégrations ?**

Les sondages clients restent la source la plus directe : demandez « qu'utilisez-vous d'autre ? » et les adjacents apparaissent. Complétez avec les voisins de catégorie sur G2 et Capterra, les sponsors des podcasts que votre audience écoute, et les offres d'emploi qui mentionnent votre outil à côté d'autres — une entreprise qui recrute sur votre stack et une autre a probablement la même clientèle.

**Comment répartir les leads d'une campagne commune ?**

Trois schémas dominent selon le format : leads partagés pour le contenu gated (ebook, rapport, webinar), chacun garde ses leads pour l'exposition d'audience (échange de newsletters, takeover), et signature partagée pour le contenu non gated. Le skill fait choisir le schéma au moment de la planification, jamais après la capture — c'est le premier point de l'accord en huit points.

**Par quoi commencer quand aucun des deux n'a d'expérience de co-marketing ?**

Par le format à faible effort et faible engagement : un échange d'invitations podcast ou de newsletters en invité prouve la capacité d'exécution réciproque sans partage de leads ni actifs co-créés. Les formats à effort élevé (workshop co-animé, rapport d'étude) viennent après, une fois la relation démontrée — l'aisance de collaboration est d'ailleurs suivie comme métrique qualitative à part entière.

## Indicateurs de réussite

- La liste de partenaires est scorée sur les six critères, avec la source qui a fait émerger chaque candidat.
- Les idées de campagnes mobilisent la proposition de valeur combinée des deux produits, pas seulement deux audiences côte à côte.
- L'accord couvre les huit points, dont le traitement des leads et les engagements de promotion minimaux de chaque côté.
- Le plan de mesure sépare métriques quantitatives (leads, MQL/SQL, revenu attribué) et qualitatives (réactivité, accueil de l'audience).

## Où il s'inscrit

`co-marketing` est le canal « audience empruntée » de la famille Ingénierie de la croissance : il complète [referrals](https://aihero.dev/skills-referrals), qui mobilise vos clients plutôt que d'autres entreprises, et alimente en leads co-capturés le nurture de [emails](https://aihero.dev/skills-emails). Le contenu co-créé se planifie avec [content-strategy](https://aihero.dev/skills-content-strategy). Quand vous hésitez sur la compétence à mobiliser, [ask-mabza](https://aihero.dev/skills-ask-mabza) route la collection.
