## Ce qu'il fait

`analytics` met en place, améliore ou audite le tracking qui mesure vos efforts marketing et produit : GA4, GTM, événements, conversions, dimensions custom, paramètres UTM, du tracking plan au débogage.

Sa règle cardinale : tracer pour décider, pas pour collecter. Chaque événement doit éclairer une décision concrète ; le skill part des questions que vous vous posez et remonte à ce qu'il faut tracer, plutôt que d'empiler des événements que personne ne consultera. L'artefact de sortie est un tracking plan documenté — événements, propriétés, déclencheurs, conversions — pas une simple balise posée sur la page.

## Quand l'utiliser

Appelez `/analytics`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il s'agit d'implémenter ou de réparer la mesure : « set up tracking », « mes conversions ne remontent pas », « comment mesurer ça », tracking plan, UTM, DebugView. Une fois le tracking en place, pour choisir un modèle d'attribution ou réconcilier des chiffres qui se contredisent entre Google, Meta et GA4, utilisez plutôt [attribution](https://aihero.dev/skills-attribution).

## Prérequis

Le skill lit en priorité le contexte `product-marketing` du projet (fichier `.agents/product-marketing.md` s'il existe) pour les conversions clés et le contexte business — sans lui, il vous posera davantage de questions en amont. Aucune autre configuration n'est requise.

## Partir des questions, remonter au tracking

La séquence imposée : quelles décisions ces données doivent-elles éclairer, quelles actions en découleront, et seulement ensuite quels événements tracer. Les vanity metrics sont écartées, les noms d'événements suivent le format Objet-Action (`signup_completed`, `cta_hero_clicked`), et le contexte vit dans les propriétés — jamais dans le nom.

## Un tracking plan, pas une pile d'événements

Le livrable est un document : tableau d'événements avec propriétés et déclencheurs, dimensions custom, conversions avec leur comptage. Il s'accompagne d'une checklist de validation (événements déclenchés au bon moment, pas de doublons, pas de fuite de PII, fonctionnement cross-navigateur) et des garde-fous privacy : consent mode, anonymisation IP, aucune donnée personnelle dans les propriétés.

## Questions fréquentes

**Mes événements ne remontent pas dans GA4 — par où commencer ?**

Par les outils de débogage avant toute modification : GA4 DebugView pour voir les événements en temps réel, le mode Preview de GTM pour tester les triggers avant publication, puis une extension comme Tag Assistant. Les trois causes classiques sont un trigger mal configuré, un chemin de variable erroné dans le data layer, ou des conteneurs multiples qui déclenchent tout deux fois.

**Faut-il tracer un maximum d'événements ?**

Non. Des données propres valent mieux que davantage de données : chaque événement doit correspondre à une décision, et un nommage cohérent établi avant l'implémentation évite de réécrire le tracking six mois plus tard. La bibliothèque d'événements du skill propose par contre une base éprouvée par type de business plutôt que de partir d'une page blanche.

**Où consigner les paramètres UTM ?**

Dans un tableur partagé, avec une convention stricte : tout en minuscules, séparateurs cohérents, valeurs spécifiques (`blog_footer_cta`, pas `cta1`). Sans registre, les campagnes se dupliquent et l'attribution en aval devient inutilisable.

## Indicateurs de réussite

- Le livrable est un tracking plan documenté : tableau d'événements avec propriétés et déclencheurs, dimensions custom, conversions avec règle de comptage.
- Chaque événement proposé se rattache à une décision ou une question explicite ; aucun vanity metric.
- Les noms d'événements suivent le format Objet-Action en minuscules/underscores.
- La checklist de validation a été passée : déclenchement, valeurs, doublons, cross-navigateur, conversions, absence de PII.

## Où il s'inscrit

`analytics` est la fondation de la chaîne de mesure : tout le reste suppose que le tracking existe. En aval, [attribution](https://aihero.dev/skills-attribution) relie ces touchpoints aux conversions et au revenu, et [ab-testing](https://aihero.dev/skills-ab-testing) s'appuie sur ce tracking pour mesurer des expériences. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
