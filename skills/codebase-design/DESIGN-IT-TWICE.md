# Concevez-le deux fois

Lorsque l'utilisateur souhaite explorer des interfaces alternatives pour un candidat à l'approfondissement choisi, utilisez ce modèle de sous-agent parallèle. Basé sur "Design It Twice" (Ousterhout) — il est peu probable que votre première idée soit la meilleure.

Utilisez le vocabulaire de [SKILL.md](SKILL.md) : **module**, **interface**, **couture**, **adaptateur** et **effet de levier**.

## Processus

### 1. Cadrer l'espace du problème

Avant de générer des sous-agents, rédigez une explication destinée à l'utilisateur de l'espace problématique pour le candidat choisi :

- Les contraintes que toute nouvelle interface devrait satisfaire
- Les dépendances sur lesquelles il s'appuierait et dans quelle catégorie elles appartiennent (voir [DEEPENING.md](DEEPENING.md))
- Une esquisse de code illustrative pour ancrer les contraintes — pas une proposition, juste un moyen de concrétiser les contraintes

Montrez-le à l'utilisateur, puis passez immédiatement à l'étape 2. L'utilisateur lit et réfléchit pendant que les sous-agents travaillent en parallèle.

### 2. Générer des sous-agents

Générez plus de 3 sous-agents en parallèle. Chacun doit produire une interface **radicalement différente** pour le module profond.

Invitez chaque sous-agent à fournir une description technique distincte (chemins d'accès aux fichiers, détails de couplage, catégorie de dépendance de [DEEPENING.md](DEEPENING.md), ce qui se trouve derrière la couture). Le brief est indépendant de l'explication de l'espace de problèmes destinée à l'utilisateur à l'étape 1. Donnez à chaque agent une contrainte de conception différente :

- Agent 1 : "Réduisez l'interface – visez 1 à 3 points d'entrée maximum. Maximisez l'effet de levier par point d'entrée."
- Agent 2 : "Maximiser la flexibilité – prendre en charge de nombreux cas d'utilisation et extensions."
- Agent 3 : "Optimiser pour l'appelant le plus courant - rendre le cas par défaut trivial."
- Agent 4 (le cas échéant) : "Conception autour des ports et des adaptateurs pour les dépendances croisées."

Incluez à la fois le vocabulaire [SKILL.md](SKILL.md) et le vocabulaire CONTEXT.md dans le brief afin que chaque sous-agent nomme les éléments de manière cohérente avec le langage d'architecture et le langage de domaine du projet.

Chaque sous-agent génère :

1. Interface (types, méthodes, paramètres — plus invariants, ordre, modes d'erreur)
2. Exemple d'utilisation montrant comment les appelants l'utilisent
3. Ce que l'implémentation cache derrière la couture
4. Stratégie de dépendance et adaptateurs (voir [DEEPENING.md](DEEPENING.md))
5. Compromis — là où l'effet de levier est élevé, là où il est mince

### 3. Présenter et comparer

Présentez les conceptions de manière séquentielle afin que l'utilisateur puisse les assimiler, puis comparez-les en prose. Contrastez par **profondeur** (effet de levier au niveau de l'interface), **localité** (où le changement se concentre) et **placement des coutures**.

Après avoir comparé, donnez votre propre recommandation : quel modèle vous semble le plus solide et pourquoi. Si des éléments de conceptions différentes se combinent bien, proposez un hybride. Soyez opiniâtre : l'utilisateur veut une lecture solide, pas un menu.
