## Ce qu'il fait

`aso` audite une fiche App Store ou Google Play : il récupère les données de la fiche en production, note les métadonnées, les visuels et les avis sur six dimensions pondérées (score sur 100), puis produit un plan d'action priorisé par impact et effort. Sa contrainte définissante : l'audit est relatif à la maturité de la marque — un écart aux meilleures pratiques ASO n'est pas traité comme une erreur si l'app appartient à un acteur dominant, car une équipe disposant d'un million de notes fait des choix informés par des données que l'audit ne voit pas.

Chaque recommandation du rapport est spécique et chiffrée (« remplacer le sous-titre X par Y, 28 caractères »), jamais un « améliorez le sous-titre ».

## Quand l'utiliser

Appelez `/aso`, ou laissez Codex le sélectionner lorsqu'une tâche correspond. Utilisez ce skill quand vous partagez une URL de fiche app store à améliorer, cherchez à gagner en visibilité ou en classement dans les stores, ou voulez comparer votre fiche à celle de 2-3 concurrents. Pour optimiser la conversion d'une landing page web qui dirige vers l'install, utilisez plutôt [cro](https://aihero.dev/skills-cro).

## Prérequis

Une URL de fiche publique suffit pour lancer l'audit. Le skill lit aussi le contexte `product-marketing` du projet (`.agents/product-marketing.md`) s'il existe, afin de ne pas redemander le positionnement et l'audience déjà consignés ; l'accès aux consoles (App Store Connect, Google Play Console) est un plus, jamais un prérequis.

## Trois paliers de maturité de marque

Le cœur de l'audit classe l'app avant de la noter, car le barème change selon le palier :

| Palier | Signaux | Barème |
| --- | --- | --- |
| Dominant | Marque universelle, 1M+ de notes, top 10 de catégorie | Ajusté : titre marque-only valide, visuels lifestyle légitimes, notation au marché réel |
| Established | 100K+ de notes, reconnue dans sa catégorie | Partiel : marque-d'abord admise si 1-2 mots-clés subsistent |
| Challenger | Moins de 100K de notes, la plupart des apps | Strict : chaque caractère, chaque capture et chaque mot-clé compte |

La question qui gouverne chaque retrait de points : est-ce une erreur, ou un choix délibéré d'une équipe qui a des données que je n'ai pas ?

## Six dimensions, un score sur 100

Les visuels pèsent le plus lourd (25 %), suivis du titre/sous-titre et des notes/avis (20 % chacun), puis description (15 %), métadonnées/fraîcheur et signaux de conversion (10 % chacun). Le rapport rapproche systématiquement les règles des deux stores, qui divergent sur l'essentiel : chez Apple, la description longue n'est pas indexée et le champ mots-clés masqué se compte en octets ; chez Google Play, la description complète est indexée massivement et il n'existe pas de champ masqué. Les seuils techniques y sont vérifiés (captures 10 max côté Apple, 8 max côté Google, Android Vitals au-dessus de 1,09 % de crash…).

## Questions fréquentes

**Pourquoi des apps comme Instagram ou Uber violent-elles toutes les règles sans être pénalisées ?**

Parce que le manuel ASO sert la découverte, et qu'elles n'en ont pas besoin : leurs utilisateurs les cherchent par nom de marque. L'audit leur applique un barème ajusté — un titre sans mot-clé ou l'absence de vidéo y est un choix rationnel, pas une opportunité manquée. Les mêmes choix chez une app Challenger seraient signalés comme des erreurs.

**L'audit peut-il mesurer les volumes de recherche ou mon classement exact ?**

Non, et le rapport le dit franchement : volumes de recherche et positions exactes exigent des outils payants. L'audit couvre tout ce qui se lit sur la fiche publique — texte, visuels, notes, signaux de conversion — et identifie les écarts de mots-clés par rapport aux concurrents, sans prétendre au classement.

## Indicateurs de réussite

- Le rapport s'ouvre sur une carte de scores : six dimensions, notes, mention de A à F.
- Suivent un top 3 de victoires rapides réalisables en moins d'une heure.
- Chaque recommandation est actionnable et accompagnée de son compte de caractères.
- Les différences de règles entre Apple et Google sont signalées quand elles changent la recommandation.
- Ce qui ne peut pas être évalué sans outils payants est explicitement indiqué plutôt qu'esquissé.

## Où il s'inscrit

`aso` est le pendant store mobile de la famille SEO & découvrabilité : il traite la visibilité dans l'App Store et Google Play là où les autres skills traitent le web. Il travaille en amont de [analytics](https://aihero.dev/skills-analytics), qui mesure l'attribution des installs, et de façon complémentaire à [cro](https://aihero.dev/skills-cro), qui optimise les landing pages web d'acquisition. Pour choisir la bonne compétence dans la collection, [ask-mabza](https://aihero.dev/skills-ask-mabza) route votre demande.
