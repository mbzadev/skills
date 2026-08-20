## Ce qu'il fait

`customer-research` découvre ce que les clients pensent, ressentent, disent et traversent réellement, pour ancrer le positionnement, le produit et la copy dans la réalité plutôt que dans l'hypothèse. Sa contrainte définissante : rien ne s'invente — chaque insight est étiqueté d'un niveau de confiance, chaque citation est un verbatim exact plutôt qu'une paraphrase, et aucun persona ne se construit en dessous de 5 à 10 points de données issus d'un segment cohérent.

## Quand l'utiliser

Appelez `/customer-research`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill pour analyser des transcripts, sondages, tickets support, réponses NPS ou notes win/loss, pour miner les reviews (G2, concurrents) et les communautés en ligne (Reddit, forums), pour comprendre pourquoi les clients achètent, convertissent ou churnent, ou pour construire des personas fondés sur des données. Pour écrire la copy que la recherche inspire, utilisez plutôt [copywriting](https://aihero.dev/skills-copywriting) ; pour agir sur les insights dans une page, [cro](https://aihero.dev/skills-cro).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question pour éviter de redemander le produit ou le segment.

## Les deux modes

Le skill fonctionne sur deux registres qui se combinent : analyser des actifs existants — extraire le signal de transcripts, sondages, tickets, reviews — et aller chercher la recherche là où les clients parlent sans filtre, les points d'eau digitaux (subreddits par rôle, G2, Hacker News, commentaires YouTube) choisis selon le type d'ICP. Le cadre d'extraction couvre six dimensions : jobs to be done (fonctionnels, émotionnels, sociaux), douleurs, événements déclencheurs, résultats souhaités, langage exact, alternatives envisagées.

## Les niveaux de confiance

Avant d'être présenté, chaque thème reçoit un niveau de confiance : haute pour un thème présent dans trois sources indépendantes ou plus, mentionné sans sollicitation et cohérent entre segments ; moyenne à deux sources ou limité à un segment ; basse à une source unique. Les sources de moins de 12 mois pèsent plus lourd, et les biais d'échantillon sont facturés — les reviewers en ligne penchent power users, les tickets vers les problèmes, Reddit vers le scepticisme technique.

## Les personas provisoires

Sans reviews first-party, les personas ne s'inventent pas : ils se construisent en marchant vers l'extérieur par sources proxies — votre différenciateur comme hypothèse, puis les reviews des concurrents directs, les produits comparables sur marketplaces, les marques adjacentes partageant l'audience. Chaque persona provisoire porte l'étiquette de sa source proxy et se remplace par des preuves first-party à mesure que de vraies reviews arrivent.

## Questions fréquentes

**Faut-il mener des interviews, ou des reviews suffisent-elles ?**

Les deux servent le même cadre d'extraction : les interviews et les appels de vente donnent le moment de décision et les déclencheurs, les reviews et les communautés donnent le langage non filtré. La règle est l'échantillon, pas la méthode : au moins 5 points de données indépendants par segment avant de tirer une conclusion de messaging ou de construire un persona.

**Comment savoir si un thème est fiable ?**

Par son étiquette de confiance : haute à partir de trois sources indépendantes, moyenne à deux sources ou sur un seul segment, basse pour une source unique qui demande validation. Un thème fréquent mais cantonné à un segment reste de confiance moyenne — la segmentation précède la conclusion, jamais l'inverse.

**Comment créer des personas pour un produit sans clients ?**

En remontant la chaîne des proxies : votre différenciateur comme hypothèse de départ, les reviews des concurrents directs pour le vocabulaire du problème, les produits adjacents sur Amazon ou l'App Store, puis les marques qui partagent votre audience. Les personas obtenus sont explicitement provisoires et étiquetés de leur source proxy.

## Indicateurs de réussite

- Chaque insight ou thème porte un niveau de confiance, et les thèmes sont classés par fréquence × intensité.
- Les citations sont des verbatims exacts avec leur source et leur date, jamais des paraphrases.
- Les données sont segmentées — par tier, rôle, cas d'usage — avant toute conclusion, sans moyenne entre causes de churn différentes.
- Aucun persona n'est produit en dessous de 5 points de données par segment cohérent ; sans données, un champ reste vide.
- Le livrable (rapport de synthèse, banque VOC, persona, carte JTBD) est choisi avec vous avant génération.

## Où il s'inscrit

`customer-research` est l'étape d'ancrage en amont de la chaîne marketing : tout ce qui s'écrit ensuite — positionnement, copy, pages — peut s'appuyer sur ses thèmes et ses verbatims.

Il nourrit [copywriting](https://aihero.dev/skills-copywriting), qui transforme la banque VOC en texte, et [churn-prevention](https://aihero.dev/skills-churn-prevention), qui convertit la recherche churn en stratégie de rétention. Pour naviguer l'ensemble de la collection, passez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
