## Ce qu'il fait

Il applique les principes de psychologie, les modèles mentaux et les sciences du comportement au marketing : pourquoi les gens achètent, comment influencer une décision et comment penser une stratégie. Sa contrainte définissante : chaque modèle — de l'ancrage à l'effet Zeigarnik — arrive avec son explication psychologique, son application marketing concrète et la façon de l'utiliser éthiquement, jamais comme une simple étiquette à coller sur une tactique.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/marketing-psychology`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill lorsqu'il faut comprendre ou exploiter le fonctionnement des décisions clients — biais cognitifs, persuasion, perception des prix, comportement d'achat. Pour appliquer la psychologie à une page précise, utilisez plutôt [cro](https://aihero.dev/skills-cro) ; pour l'écrire, [copywriting](https://aihero.dev/skills-copywriting).

## Prérequis

Le skill lit le contexte product-marketing du projet (`.agents/product-marketing.md` s'il existe) avant d'appliquer le moindre modèle, afin d'adapter les recommandations au produit et à l'audience réels.

## La bibliothèque et sa structure

Environ 70 modèles mentaux, organisés en six familles qui répondent chacune à une question différente :

| Famille | Question à laquelle elle répond |
|---|---|
| Modèles de pensée fondateurs | comment penser la stratégie (premiers principes, inversion, Pareto, second ordre) |
| Psychologie de l'acheteur | comment les clients décident (dotation, biais de confirmation, paradoxe du choix) |
| Persuasion | comment influencer éthiquement (réciprocité, rareté, ancrage, cadrage) |
| Psychologie des prix | comment les prix sont perçus (prix charme, règle de 100, effet leurre) |
| Conception et diffusion | comment concevoir les systèmes (loi de Hick, AIDA, BJ Fogg, EAST) |
| Croissance et scale | comment le marketing se compose (boucles, network effects, flywheel) |

Un aide-mémoire final fait l'inverse : partant du symptôme — conversions faibles, churn, paralysie décisionnelle — il renvoie vers les modèles pertinents.

## Questions fréquentes

**Comment choisir parmi autant de modèles ?**
En partant du comportement à influencer et de l'étape du parcours, pas du modèle préféré : les cinq questions propres au skill (comportement visé, croyances préalables, étape du parcours, frein actuel, tests réalisés) réduisent la bibliothèque aux deux ou trois modèles qui s'appliquent.

**La rareté et l'urgence sont-elles recommandées telles quelles ?**
Non — chaque modèle de persuasion se double d'une limite éthique explicite : la rareté « à n'utiliser que si c'est vrai », l'effet par défaut « appliqué éthiquement », et l'effet cobra rappelle qu'une incitation mal conçue produit le contraire du résultat attendu.

**À quoi sert la partie « modèles de pensée » qui n'est pas de la psychologie client ?**
À choisir les bons problèmes avant d'optimiser : la théorie des contraintes évite d'optimiser la conversion quand le goulot est le trafic, et l'optimum local vs global évite de perfectionner un canal qui n'est pas le bon.

## Indicateurs de réussite

- Chaque modèle cité dans une recommandation est nommé et accompagné de son application marketing concrète, pas d'une définition seule.
- Les recommandations d'usage mentionnent leurs limites éthiques quand le modèle touche à la persuasion.
- Le diagnostic part du comportement à influencer et de l'étape du parcours, pas d'une liste de biais.
- Les exemples chiffrés restent exacts (règle de 100 : « -20 % » sous 100 $, « -50 $ » au-dessus).

## Où il s'inscrit

Boîte à outils transversale de la collection : ce skill nourrit le diagnostic des skills de surface — [cro](https://aihero.dev/skills-cro) pour les pages, [popups](https://aihero.dev/skills-popups) pour les déclencheurs, [copywriting](https://aihero.dev/skills-copywriting) pour les textes — et s'appuie sur le contexte de [product-marketing](https://aihero.dev/skills-product-marketing). Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
