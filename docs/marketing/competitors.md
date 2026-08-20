## Ce qu'il fait

`competitors` construit des pages alternatives (« [Concurrent] alternative ») et comparatives (« [Vous] vs [concurrent] ») qui se classent sur les requêtes les plus concurrentielles et aident les évaluateurs à choisir. Sa contrainte définissante : l'honnêteté est traitée comme une exigence de conception, pas une option — la page reconnaît les forces du concurrent et désigne explicitement les cas où il convient mieux que vous, parce que les lecteurs comparent réellement et vérifient chaque affirmation.

La contrepartie de cette honnêteté est un travail de fond : recherche approfondie par concurrent (produit, tarifs, exploration des avis G2/Capterra/TrustRadius) et données centralisées dans une source de vérité unique qui alimente toutes les pages.

## Quand l'utiliser

Appelez `/competitors`, ou laissez Codex le sélectionner lorsqu'une tâche correspond. Utilisez ce skill lorsqu'il faut positionner votre produit face à un concurrent, créer des pages « alternative to X » ou « X vs Y », ou constituer un jeu de pages comparatives. Pour des supports internes à la force de vente (decks, battle cards confidentielles, documents d'objections), utilisez plutôt [sales-enablement](https://aihero.dev/skills-sales-enablement).

## Prérequis

Aucun prérequis technique. Le skill lit le contexte `product-marketing` du projet (`.agents/product-marketing.md`) s'il existe, pour reprendre sans les redemander proposition de valeur, différenciateurs et profil client idéal — autant d'entrées dont ces pages ont précisément besoin.

## Quatre formats, quatre intentions

Le choix du format découle de l'intention de recherche, pas de la préférence rédactionnelle :

| Format | Intention du chercheur | Motif d'URL |
| --- | --- | --- |
| Alternative (singulier) | Veut quitter un concurrent précis | `/alternatives/[concurrent]` |
| Alternatives (pluriel) | Explore le marché, plus tôt dans le parcours | `/alternatives/[concurrent]-alternatives` |
| Vous vs concurrent | Vous compare directement à lui | `/vs/[concurrent]` |
| Concurrent vs concurrent | Compare deux concurrents entre eux | `/compare/[a]-vs-[b]` |

Le format pluriel porte une nuance à connaître : ces pages gagnent souvent des citations dans les réponses IA, mais une IA n'y recommande votre marque que si un consensus hors site (avis, forums) l'y pousse — une liste où vous vous classez premier ne suffit pas.

## Une source de vérité par concurrent

Chaque concurrent dispose d'un profil unique (positionnement, tarifs palier par palier, forces/faiblesses, plaintes récurrentes, notes de migration) au format YAML, duquel découlent toutes les pages. Une évolution de tarif se corrige une fois et se propage partout. Le profil vit : vérification tarifaire trimestrielle, révision complète annuelle, mise à jour à la alerte quand un client signale un changement chez un concurrent.

## Questions fréquentes

**Faut-il vraiment citer les points où le concurrent est meilleur ?**

Oui, et c'est ce qui fait convertir : le lecteur établit lui-même la comparaison et vérifie vos affirmations. Une page qui ne dit que du bien de vous perd toute crédibilité au premier contre-exemple, tandis qu'une section « à qui le concurrent convient mieux » honnête fait passer le reste de la page pour fiable.

**Par quel format commencer ?**

Commencez par les formats qui capturent une intention chaude : les pages « alternative » singulières ciblent des utilisateurs prêts à migrer et convertissent mieux qu'une liste plurielle à intention exploratoire. Le plan de pages livré par le skill ordonne les priorités selon le volume de recherche.

## Indicateurs de réussite

- Chaque page s'ouvre sur un TL;DR de 2-3 phrases avec les différences clés, puis un tableau d'un coup d'œil.
- Les comparaisons ne se limitent pas aux tableaux : chaque dimension est développée en paragraphe, avec des cas d'usage.
- La section tarification compare palier par palier, coûts cachés inclus, avec un coût total calculé pour une équipe type.
- La page indique explicitement à qui le concurrent convient mieux — pas seulement à qui vous convenez.
- Les données concurrents proviennent d'un profil unique réutilisable, pas d'un copier-coller par page.

## Où il s'inscrit

`competitors` est la brique comparative de la famille SEO & découvrabilité : il fournit les pages de destination vers lesquelles [directory-submissions](https://aihero.dev/skills-directory-submissions) fait converger le link equity, s'appuie sur [schema](https://aihero.dev/skills-schema) pour le balisage FAQ des comparatifs, et se déploie à grande échelle avec [programmatic-seo](https://aihero.dev/skills-programmatic-seo). Pour savoir quelle compétence mobiliser dans votre situation, [ask-mabza](https://aihero.dev/skills-ask-mabza) route la collection.
