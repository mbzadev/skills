## Ce qu'il fait

`schema` implémente, corrige et optimise le balisage schema.org d'un site (JSON-LD en priorité) pour que Google puisse afficher des rich results : étoiles, FAQs dépliées, breadcrumbs, prix, knowledge panel. Sa contrainte définissante est simple : le balisage doit décrire fidèlement le contenu visible de la page, et rien d'autre — il ne crée jamais d'information que la page ne montre pas, car un décalage entre markup et contenu réel est traité comme une infraction.

Chaque mise en œuvre est validée avant déploiement (Rich Results Test, Schema.org Validator) puis surveillée dans la Search Console, et le skill ne propose que des types que Google prend réellement en charge.

## Quand l'utiliser

Appelez `/schema`, ou laissez Codex le sélectionner lorsqu'une tâche correspond. Utilisez ce skill lorsque vous souhaitez ajouter ou réparer du JSON-LD, obtenir des rich snippets sur des pages précises, ou baliser des FAQ, produits, articles, événements ou breadcrumbs. Pour un problème SEO global qui dépasse les données structurées, utilisez plutôt [seo-audit](https://aihero.dev/skills-seo-audit) ; pour être mieux cité par ChatGPT ou Perplexity, voyez [ai-seo](https://aihero.dev/skills-ai-seo).

## Prérequis

Aucun prérequis technique. Le skill cherche en revanche un contexte `product-marketing` à la racine du projet (`.agents/product-marketing.md`) et s'en sert pour éviter de redemander le positionnement, l'audience ou le vocabulaire produit déjà consignés — créez ce fichier en amont pour des sessions plus courtes.

## Décrire, jamais inventer

Le principe central du skill : le schema est une description machine du contenu existant. Il refuse de baliser un contenu absent de la page, reste synchronisé quand le contenu change, et signale tout décalage entre markup et contenu visible. Les valeurs suivent des formats stricts (dates ISO 8601, URL complètes, énumérations exactes) car ce sont les erreurs les plus fréquentes en validation.

## JSON-LD d'abord, combiné avec @graph

Google recommande le JSON-LD : un bloc placé dans le `<head>` ou en fin de `<body>`, plus simple à maintenir que les microdonnées dispersées dans le HTML. Quand une page nécessite plusieurs types à la fois (Organization + WebSite + BreadcrumbList sur une page d'accueil), le skill les regroupe dans un seul bloc `@graph` plutôt que d'empiler des scripts distincts. L'implémentation s'adapte à la stack — templates statiques, composants React/Next.js rendus côté serveur, ou plugins WordPress (Yoast, Rank Math).

## Questions fréquentes

**J'ai ajouté le markup FAQ — pourquoi Google n'affiche pas les étoiles ou la FAQ dépliée ?**

Le balisage rend la page *éligible*, jamais *garantie* : Google décide seul de l'affichage, selon le type de requête, la qualité perçue et ses propres tests. Le skill vérifie d'abord ce qui dépend de vous — markup valide, propriétés requises, correspondance avec le contenu — puis vous dit franchement quand le reste échappe à tout contrôle.

**Peut-on baliser du contenu caché ou anticipé (une note qui n'existe pas encore, une FAQ planifiée) ?**

Non, et c'est la ligne rouge du skill : baliser un contenu qui n'existe pas visiblement sur la page est une infraction aux consignes Google, avec un risque de pénalité manuelle. Ajoutez d'abord le contenu visible, balisez-le ensuite.

## Indicateurs de réussite

- Le JSON-LD produit passe le Google Rich Results Test sans erreur ni avertissement.
- Chaque propriété requise du type visé est présente, et les valeurs sont au bon format (ISO 8601 pour les dates, URL absolues).
- Le balisage reflète le contenu réellement visible sur la page — pas plus.
- Sur une page à plusieurs types, tout est regroupé dans un seul bloc `@graph`.
- Le skill n'a pas redemandé le positionnement produit si `.agents/product-marketing.md` existait déjà.

## Où il s'inscrit

`schema` est l'outil spécialisé données structurées de la famille SEO & découvrabilité : il intervient quand [seo-audit](https://aihero.dev/skills-seo-audit) repère des rich results manquants, alimente [ai-seo](https://aihero.dev/skills-ai-seo) en markup que les moteurs IA exploitent pour l'extraction de réponses, et accompagne [programmatic-seo](https://aihero.dev/skills-programmatic-seo) pour templatiser le balisage sur des milliers de pages. Quand vous hésitez sur la compétence à mobiliser, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous oriente.
