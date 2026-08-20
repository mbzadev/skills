## Ce qu'il fait

`directory-submissions` orchestre la couche annuaires d'un lancement : sélection des annuaires pertinents (startups, SaaS, IA, agents/MCP, no-code, sites d'avis), préparation d'un positionnement distinct par type d'annuaire, soumission par lots avec suivi, et pilotage des avis G2/Capterra. Sa contrainte définissante : les annuaires sont traités comme une fondation, jamais comme la stratégie — le skill refuse de lancer une soumission tant que les pages de destination qui convertiront le trafic (alternatives, cas d'usage, templates) ne sont pas en ligne, car un backlink qui atterrit sur une page d'accueil générique ne produit rien.

## Quand l'utiliser

Appelez `/directory-submissions`, ou laissez Codex le sélectionner lorsqu'une tâche correspond. Utilisez ce skill lorsque vous préparez la couche annuaires d'un lancement ou une campagne de backlinks continue : Product Hunt, BetaList, annuaires IA comme TAAFT ou Futurepedia, registres MCP, fiches G2 ou Capterra. Pour le moment de lancement dans son ensemble, utilisez plutôt [launch](https://aihero.dev/skills-launch) ; pour construire les pages programmatiques que ces backlinks doivent arroser, voyez [programmatic-seo](https://aihero.dev/skills-programmatic-seo).

## Prérequis

Le skill vérifie lui-même la préparation du produit (phase 0 : neuf points dont page de tarification, mentions légales, captures réelles, vidéo de démo). Il lit aussi le contexte `product-marketing` du projet (`.agents/product-marketing.md`) s'il existe, pour ancrer le positionnement et l'audience sans les redemander — la bibliothèque de variantes par annuaire part de ce vocabulaire.

## La fondation avant la soumission

Les annuaires font trois choses : transmettre des backlinks dofollow qui relèvent le domain rating, créer de la surface de découvrabilité auprès d'acheteurs en recherche active, et se faire citer par les moteurs IA (ChatGPT, Claude, Perplexity) dont le trafic convertit plusieurs fois mieux que la recherche classique. Le skill en tire trois règles non négociables : la landing page doit être prête avant la soumission, les pages de destination doivent exister avant les annuaires, et la description doit varier selon le type d'annuaire — un annuaire startup attend le résultat, un annuaire SaaS le cadrage « alternative », un annuaire IA l'architecture AI-first. Le catalogue complet (13 paliers) et les variantes de positionnement vivent dans des fichiers de référence du skill.

## L'ancre Product Hunt et les avis G2

Product Hunt est la soumission au levier le plus fort et la plus facile à gâcher : l'algorithme pondère la qualité des commentaires plus que le nombre d'upvotes, et le skill déroule une préparation de trois semaines (compte préchauffé, page « Upcoming », assets du jour J) avec une règle d'or — demander du feedback, jamais des upvotes. En parallèle, une fiche G2 sans avis reste morte : le protocole « 10-en-30 » sollicite 20 utilisateurs qualifiés pour obtenir les 10 avis qui font apparaître l'app dans la Grid, avec les échéances des rapports saisonniers G2 à respecter.

## Questions fréquentes

**Peut-on soumettre aux annuaires pendant qu'on construit le site, pour prendre de l'avance ?**

Non : la phase 0 bloque toute soumission tant que la page liée n'est pas en ligne, indexée et équipée (H1 unique, tarification, mentions légales, captures réelles). Soumettre trop tôt brûle l'avantage de première soumission et dirige le link equity vers une page qui ne convertit rien — le skill aide d'abord à construire ce qui manque.

**Faut-il passer par un service de soumission payant ?**

Non. Les annuaires listés sont gratuits et l'ensemble tient dans un après-midi de copier-coller par lot ; les services à 60-200 $ revendent ce travail. Le skill fournit le tracker CSV et l'ordre de soumission semaine par semaine pour le faire vous-même.

**Pourquoi ne pas utiliser la même description partout ?**

Les moteurs IA recoupent les contenus entre annuaires et déclassent le contenu dupliqué — et chaque audience répond à un cadrage différent. Le skill prépare une variante par type d'annuaire (tagline, description à 60 caractères, description longue à 150 mots) à partir de sa bibliothèque de positionnements.

## Indicateurs de réussite

- Le plan s'ouvre sur l'évaluation de préparation : les neuf points vérifiés, avec distinction entre blocages durs et mous.
- Chaque palier retenu l'est avec sa raison, et les paliers écartés le sont aussi.
- Les variantes de positionnement sont fournies par type d'annuaire, pas en description unique.
- Si une date de lancement est connue, le calendrier Product Hunt est mappé à des dates concrètes.
- Le plan d'avis « 10-en-30 » désigne qui solliciter, quand et comment, et le tracker CSV est fourni.

## Où il s'inscrit

`directory-submissions` est la couche fondation de la distribution dans la famille SEO & découvrabilité : il s'exécute dans le sillage de [launch](https://aihero.dev/skills-launch) pour le moment phare, alimente en link equity les pages construites par [programmatic-seo](https://aihero.dev/skills-programmatic-seo) et [competitors](https://aihero.dev/skills-competitors), et prépare le terrain que [ai-seo](https://aihero.dev/skills-ai-seo) exploite pour la citation par les IA. Quand vous hésitez sur la compétence à mobiliser, [ask-mabza](https://aihero.dev/skills-ask-mabza) route la collection.
