## Ce qu'il fait

`content-strategy` décide quel contenu produire — piliers, clusters de sujets, types, ordre de priorité — avant que quiconque n'écrive quoi que ce soit. Sa contrainte définissante : chaque contenu recommandé doit être recherchable ou partageable (idéalement les deux), et la priorisation est une matrice pondérée nourrie par la recherche client plutôt qu'une liste d'idées sortie d'intuition.

## Quand l'utiliser

Appelez `/content-strategy`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il faut planifier une stratégie éditoriale, choisir des sujets, construire des piliers ou prioriser un backlog de contenus — notamment quand la question posée est « que publier ? » ou « je ne sais pas quoi écrire ». Pour rédiger une pièce précise une fois le sujet choisi, utilisez plutôt [copywriting](https://aihero.dev/skills-copywriting) ; pour le contenu social spécifiquement, [social](https://aihero.dev/skills-social).

## Prérequis

Le skill lit le contexte product-marketing du projet (`.agents/product-marketing.md` s'il existe) avant toute question : la stratégie de contenu en découle directement. Il exploite ensuite volontiers la matière première disponible — exports de mots-clés, transcriptions d'appels, réponses de sondages — mais sait aussi en trouver par recherche web (forums, contenus concurrents).

## Recherchable ou partageable

Le tri de base se fait en deux colonnes : le contenu recherchable capte une demande existante (mot-clé précis, intention respectée, couverture exhaustive), le contenu partageable crée la demande (insight inédit, donnée originale, contre-intuition). La priorité va au recherchable — le trafic de recherche est le socle — et chaque recommandation est étiquetée pour la colonne où elle joue, avec son type (cas d'usage, hub and spoke, thought leadership, étude de cas…), son mot-clé cible et son étape d'achat.

## La matrice de priorisation

Chaque idée est notée sur quatre facteurs pondérés : impact client (40 %), content-market fit (30 %), potentiel de recherche (20 %), besoins en ressources (10 %). L'impact client domine parce que la matière première vient de la voix du client — questions d'avant-vente, objections d'appels commerciaux, tickets support — ce qui rend chaque sujet traçable jusqu'à une preuve, pas jusqu'à une opinion.

## Questions fréquentes

**Faut-il des pages piliers dédiées, type `/guides/sujet` ?**

La plupart du temps, non : tout le contenu vit bien sous `/blog` avec un bon maillage interne. Les structures hub and spoke dédiées ne se justifient que pour les grands sujets à plusieurs niveaux de profondeur — le genre de ressource exhaustive qu'Atlassian héberge sous `/agile`.

**Pourquoi une page de statistiques plutôt qu'une étude originale ?**

Parce que les rédacteurs lient vers ce qui facilite la citation. Les pages de stats cumulent environ 4,25 fois plus de backlinks que leur part de pages, contre 0,80x pour la recherche originale — souvent citée via les roundups qui l'agrègent. La stratégie combine les deux : publier et maintenir une page de stats pour votre catégorie (aussi ce que les LLM reprennent), et adosser votre recherche originale à sa propre page de stats citable.

**Par quoi commencer si l'on n'a aucune donnée de mots-clés ?**

Par la voix du client : transcriptions d'appels, tickets support, sondages, forums (Reddit, Quora) et contenus concurrents. Les questions récurrentes et les objections deviennent des sujets, dans le langage exact des clients — les exports Ahrefs ou GSC ne font que confirmer le volume ensuite.

## Indicateurs de réussite

- Chaque sujet recommandé porte son étiquette recherchable/partageable, son type de contenu, son mot-clé cible et son étape d'achat.
- Les piliers au nombre de 3 à 5 sont reliés explicitement au produit, avec leurs clusters de sous-sujets.
- Le tableau de priorisation applique les pondérations 40/30/20/10 et se lit de haut en bas.
- Chaque recommandation s'appuie sur une trace de recherche client — une citation, une question récurrente, un mot-clé — et non sur une simple affirmation.
- Le vocabulaire des sujets reprend les mots des clients, pas le jargon interne.

## Où il s'inscrit

`content-strategy` est l'étape amont de la chaîne de contenu : il décide quoi produire, puis délègue l'exécution.

Une fois la stratégie posée, [copywriting](https://aihero.dev/skills-copywriting) rédige les pièces et [social](https://aihero.dev/skills-social) décline le contenu pilier en formats sociaux ; [ai-seo](https://aihero.dev/skills-ai-seo) prend le relais pour être cité par les moteurs IA. Pour parcourir l'ensemble des skills, passez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
