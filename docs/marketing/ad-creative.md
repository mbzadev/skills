## Ce qu'il fait

`ad-creative` génère, itère et décline à grande échelle les créations publicitaires — titres, descriptions, primary text, statiques, vidéos — pour Google RSA, Meta, LinkedIn, TikTok ou Twitter/X. Sa règle fondatrice est l'ancrage : chaque concept doit remonter jusqu'à un matériau réel (annonces gagnantes, avis clients, commentaires de campagnes), et si le corpus d'entrées est vide, le skill s'arrête et demande de le remplir plutôt que de produire des variantes plausibles mais non ancrées.

## Quand l'utiliser

Appelez `/ad-creative`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il faut produire du copy publicitaire en volume (50 concepts par lot, 100+ variations par cycle), itérer à partir de données de performance, construire une roadmap créative classée par preuves, ou préparer une sélection à faire valider. Pour la stratégie de campagne, le ciblage, les budgets et les seuils d'optimisation, utilisez plutôt [ads](https://aihero.dev/skills-ads).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question. La production à grande échelle suppose en outre un corpus d'entrées ancrées — captures d'annonces gagnantes, avis, commentaires — sans lequel il refuse de générer.

## Le corpus d'entrées ancrées

Le cœur du skill est un corpus durable : 10 à 20 captures des meilleures annonces des 90 derniers jours, 50 à 100 avis clients, et les commentaires des campagnes existants — l'entrée la plus négligée et la plus précieuse, car les objections et les éloges spontanés qu'ils contiennent deviennent des concepts à part entière. Chaque concept produit cite sa source ; aucune statistique, affirmation ou témoignage n'est jamais inventé ; les entrées se rafraîchissent au fil du temps.

## Quatre modes de travail

- **Générer à partir de zéro** — un jeu complet de créas fondé sur le contexte produit et l'audience.
- **Itérer à partir des performances** — extraire les données, identifier les schémas gagnants, générer de nouvelles variations, valider les specs.
- **Lots de statiques à l'échelle** — 50 concepts par lot via la bibliothèque de 15 templates, livrés dans un dossier daté avec un INDEX scannable en 2 minutes.
- **Boucle de stratégie créative** — décider quelles annonces valent la peine d'être produites avant de les produire, en synthétisant trois sources de signaux.

## Questions fréquentes

**Combien de variations faut-il générer ?**

Beaucoup plus que ce que l'intuition suggère : choisir 5 gagnantes parmi 50 concepts produit une meilleure créa que choisir 5 parmi 10. À l'échelle, les équipes produisent 100+ variations par cycle, générées par vagues — angles cœur, variations étendues, puis angles wildcard.

**Comment présenter une sélection à un client ou un stakeholder ?**

Par une page de revue créative : un fichier HTML autonome qui présente chaque concept en maquette in-feed, décompose les carrousels en storyboard et disclose ce qui est ancré dans des assets réels. La décision se prend sur un seul lien, sans lire du markdown — et le bloc de disclosure est obligatoire.

**Les titres RSA doivent-ils se lire comme un ensemble ?**

Non — Google les combine aléatoirement : chaque titre doit avoir un sens seul et dans n'importe quelle combinaison, et le jeu doit inclure au moins un titre mot-clé, un titre bénéfice et un titre CTA. Toute création est validée contre les limites de caractères de la plateforme avant livraison, avec alternative raccourcie pour les dépassements.

## Indicateurs de réussite

- Chaque concept livré cite sa source d'ancrage (annonce, avis ou commentaire) ; aucune affirmation inventée ne figure dans les lots.
- Les compteurs de caractères accompagnent chaque titre et description, et les dépassements sont signalés avec une version raccourcie.
- Les lots atterrissent dans `outputs/YYYY-MM-DD/` avec un `INDEX.md` qui se scanne en quelques minutes.
- Les variations couvrent 3 à 5 angles distincts plutôt que des reformulations d'un même angle.
- Le skill demande les données de performance avant d'itérer, et une seule variable change par cycle de test.

## Où il s'inscrit

`ad-creative` est le bras de production créative de la distribution payante : il fabrique le volume de créas que les campagnes dépensent.

Il alimente [ads](https://aihero.dev/skills-ads), qui structure les campagnes et alloue les budgets où ces créas tournent, et s'appuie sur [customer-research](https://aihero.dev/skills-customer-research) pour miner les avis et commentaires qui nourrissent le corpus d'entrées. Pour naviguer l'ensemble de la collection, passez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
