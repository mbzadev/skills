## Ce qu'il fait

`image` produit les visuels marketing — hero de blog, visuels sociaux, bannières de profil, visuels de fiche d'annuaire, OG image — en choisissant pour chaque besoin la bonne voie de production : génération IA, édition IA, outil de design ou capture d'écran. Sa règle cardinale est de ne jamais générer l'UI d'un produit avec l'IA : les modèles hallucinent les interfaces, donc un mockup produit part toujours de vraies captures d'écran, éventuellement annotées par calques.

## Quand l'utiliser

Appelez `/image`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il faut créer, générer, éditer ou optimiser une image à usage marketing, ou choisir entre deux modèles de génération (Flux, Ideogram, Gemini/Nano Banana, Midjourney…) et les outils de design (Canva, Figma). La compression, la conversion WebP et les balises OG relèvent aussi de ce skill. Pour les visuels de publicités payantes et les specs publicitaires par plateforme, utilisez plutôt [ad-creative](https://aihero.dev/skills-ad-creative).

## Prérequis

Le skill lit le contexte product-marketing du projet (`.agents/product-marketing.md` s'il existe) avant de poser des questions, pour récupérer la voix, les couleurs et les contraintes de marque déjà documentées.

## Le bon outil pour le bon besoin

Le choix suit un arbre de décision simple : du texte lisible dans l'image appelle Ideogram ; la cohérence de marque sur plusieurs images appelle la référence multi-images de Flux ou Recraft ; l'édition en place passe par Gemini ou Flux Kontext ; vingt variantes de tailles d'un même design passent par Canva Magic Resize. Les logos, eux, se conçoivent toujours dans un outil de design — jamais en génération IA.

## L'optimisation fait partie de la création

Chaque image finit dans une page web : le skill livre rarement un visuel sans ses dimensions explicites, sa version WebP compressée (les hero sous 200 Ko), le lazy loading sous la ligne de flottaison et le texte alternatif. Les OG image suivent le standard 1200x630 avec les balises meta `og:image` qui vont avec — et peuvent être générées dynamiquement par page pour le SEO programmatique.

## Questions fréquentes

**Quel modèle choisir quand l'image doit contenir du texte ?**

Ideogram 3.0 reste le meilleur pour le rendu typographique ; Gemini et GPT Image / ChatGPT Images sont corrects. Au-delà d'un titre court, le réflexe est d'ajouter le texte en post-traitement ou par calque programmatique plutôt que de le faire générer — la plupart des modèles massacrent les textes longs.

**Peut-on générer un mockup de mon produit avec l'IA ?**

Non : les modèles inventent des interfaces plausibles mais fausses. Capturez l'UI réelle en résolution 2x, encadrez-la dans un mockup d'appareil, puis ajoutez flèches et labels avec du code ou un outil d'annotation.

**L'OG image est-elle vraiment nécessaire ?**

Oui — un lien partagé sans image de preview paraît cassé sur les réseaux, Slack et Discord. Une seule image de 1200x630 couvre à la fois le hero de blog et l'OG, ce qui en fait le format le plus rentable à produire.

## Indicateurs de réussite

- Les dimensions sont vérifiées contre les specs de la plateforme cible avant la génération, pas après un rendu mal cadré.
- Chaque image contenant du texte passe par Ideogram ou par un calque ajouté en post-traitement.
- Les visuels produit montrent la vraie UI — aucune interface générée.
- Les images livrées pour le web arrivent en WebP, redimensionnées à leur taille d'affichage, avec attributs `width`/`height`.
- Les pages partagées affichent une preview correcte : balises `og:image` et `twitter:image` présentes et fonctionnelles.

## Où il s'inscrit

`image` est l'outil de production visuelle de la collection : il fabrique les assets que les autres skills consomment.

Il alimente [social](https://aihero.dev/skills-social), qui décide quoi publier et dans quel format, et cède le terrain payant à [ad-creative](https://aihero.dev/skills-ad-creative) dès qu'il s'agit de visuels publicitaires et de specs d'ads. Pour parcourir l'ensemble des skills, passez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
