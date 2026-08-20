## Ce qu'il fait

`marketing-council` réunit un conseil simulé de douze marketeurs légendaires — Godin, Ogilvy, Schwartz, Hormozi, Dunford, Sutherland, Sharp et les autres — pour débattre d'une décision marketing et produire une recommandation. Chaque prise est ancrée dans les frameworks réellement documentés du conseiller, la session est explicitement libellée comme une simulation, et la valeur centrale n'est pas l'accord mais le désaccord : le conseil expose les arbitrages réels avant que vous ne choisissiez une direction, puis une synthèse de président tranche en fonction de votre stade et de vos contraintes.

## Quand l'utiliser

Appelez `/marketing-council`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'une décision marketing mérite plusieurs perspectives conflictuelles — une stratégie, une landing page, un changement de pricing, un plan de lancement, une rebrand — ou que vous voulez savoir comment un grand marketeur aborderait votre problème. Le conseil décide de la direction, il n'exécute pas : pour construire l'offre plutôt qu'en débattre l'orientation, utilisez plutôt [offers](https://aihero.dev/skills-offers).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question pour éviter de redemander le positionnement ou l'offre.

## Un banc fait pour diverger

Les douze conseillers sont choisis pour que leurs lentilles entrent en collision : la portée de masse contre la plus petite audience viable, la science de la marque contre le direct-response, la psycho-logic contre le test systématique. Trois formats de session ajustent le banc aux enjeux — prise rapide avec un seul conseiller nommé, session de 3 à 5 conseillers (le défaut), conseil au complet pour les décisions stratégiques majeures. Dans tous les cas, au moins un dissident désigné est assis : un conseil qui approuve tout est un miroir, pas un conseil.

## La carte des désaccords

La section la plus précieuse de la sortie n'est aucune prise isolée mais la carte des désaccords : 2 à 4 conflits réels entre conseillers, chacun nommé avec l'arbitrage sous-jacent qu'il représente (portée contre résonance, permission contre pression) et la preuve qui trancherait. La synthèse finale recommande une direction, désigne l'avertissement à garder comme tripwire et pointe vers le skill d'exécution qui prendra le relais.

## Questions fréquentes

**Ces marketeurs ont-ils vraiment dit ça ?**

Non — et la sortie le dit en tête. Chaque prise est une simulation construite à partir des frameworks et positions publiés du conseiller ; les citations directes n'apparaissent que si elles sont vérifiables dans un dossier ou une passe de recherche, et rien n'insinue jamais qu'une personne réelle a une opinion sur votre entreprise précise. Pour les conseillers vivants et actifs, une passe de recherche privilégie leurs positions récentes.

**Combien de conseillers faut-il asseoir ?**

La session par défaut en compte 3 à 5 : deux ou trois dont la lentille correspond au type de question, plus au moins un dissident dont la position documentée conflictue avec la direction qui se dessine. Le conseil au complet (12) est réservé aux décisions majeures — la taille du banc suit les enjeux, pas l'inverse.

**Peut-on ajouter son propre conseiller ?**

Oui : un dossier suit la structure du template du dépôt (lentille, frameworks, positions documentées, questions signature, angles morts, notes de voix). Pour un conseiller non célèbre — un ancien patron, un dirigeant interne — c'est vous qui fournissez les positions ; le skill ne les invente pas.

## Indicateurs de réussite

- La session est libellée comme une simulation dès le haut de la sortie.
- Chaque prise applique les frameworks spécifiques du conseiller au cas : elle ne survivrait pas à l'échange de nom.
- Au moins un dissident est assis, et la carte des désaccords nomme les arbitrages sous-jacents et la preuve qui trancherait.
- La synthèse recommande une direction ajustée à votre stade, désigne un tripwire et pointe vers un skill d'exécution.

## Où il s'inscrit

`marketing-council` est l'organe de décision en amont de la chaîne d'exécution marketing : il choisit la direction, d'autres skills la réalisent.

Il se termine typiquement par une passerelle vers [offers](https://aihero.dev/skills-offers) ou [copywriting](https://aihero.dev/skills-copywriting) selon la direction retenue, et vers [ab-testing](https://aihero.dev/skills-ab-testing) quand la carte des désaccords conclut qu'un test doit trancher. Pour naviguer l'ensemble de la collection, passez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
