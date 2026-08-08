---
name: improve-codebase-architecture
description: "Analysez une base de code pour approfondir les opportunités, présentez-les sous forme de rapport HTML visuel, puis examinez celui que vous choisissez."
---

# Améliorer l’architecture de la base de code

Surfacez les frictions architecturales et proposez des **opportunités d'approfondissement** : des refactoristes qui transforment les modules superficiels en modules profonds. L’objectif est la testabilité et la navigabilité de l’IA.

Cette commande est _informée_ par le modèle de domaine du projet et construite sur un vocabulaire de conception partagé :

- Exécutez la `/codebase-design` skill pour le vocabulaire d'architecture (**module**, **interface**, **profondeur**, **seam**, **adapter**, **leverage**, **locality**) et ses principes (le test de suppression, "l'interface est la surface de test", "un adaptateur = couture hypothétique, deux = réel"). Utilisez ces termes exactement dans chaque suggestion – ne dérivez pas vers « composant », « service », « API » ou « limite ».
- La langue du domaine dans `CONTEXT.md` donne des noms aux bonnes coutures ; Les ADR dans  `docs/adr/`  enregistrent les décisions que cette commande ne devrait pas relancer.

## Processus

### 1. Explorer

**Portée avant de numériser — YAGNI.** L'approfondissement d'un module est payant en facilitant les modifications futures, alors accordez un poids supplémentaire aux parties de la base de code qui ont récemment changé. Décidez *où* chercher avant de regarder :

- Si l'utilisateur a nommé une direction - un module, un sous-système, un problème - prenez-la et ignorez l'inférence ci-dessous.
- Sinon, revenez en arrière sur une bonne partie de l'historique des validations (`git log --oneline`) pour trouver les points chauds de la base de code - les fichiers et les zones qui continuent à apparaître - et laissez ces chemins attirer votre attention en premier. Si les changements sont dispersés sans point chaud clair, élargissez le filet.

Lisez le glossaire de domaine du projet (`CONTEXT.md`) et tous les ADR dans le domaine que vous touchez en premier.

Générez ensuite un sous-agent pour parcourir la base de code. Ne suivez pas des heuristiques rigides : explorez de manière organique et notez où vous rencontrez des frictions :

- Où la compréhension d'un concept nécessite-t-elle de rebondir entre de nombreux petits modules ?
- Où sont les modules **superficiels** — une interface presque aussi complexe que l'implémentation ?
- Où les fonctions pures ont-elles été extraites juste à des fins de testabilité, mais les vrais bugs se cachent dans la façon dont elles sont appelées (pas de **localité**) ?
- Où les modules étroitement couplés fuient-ils à travers leurs coutures ?
- Quelles parties de la base de code ne sont pas testées ou sont difficiles à tester via leur interface actuelle ?

Appliquez le **test de suppression** à tout ce que vous soupçonnez d'être superficiel : sa suppression concentrerait-elle la complexité ou simplement la déplacerait-elle ? Un « oui, concentrés » est le signal que vous souhaitez.

### 2. Présenter les candidats sous forme de rapport HTML

Écrivez un fichier HTML autonome dans le répertoire temporaire du système d'exploitation afin que rien n'arrive dans le dépôt. Résolvez le répertoire temporaire de `$TMPDIR`, en revenant à `/tmp`  (ou `%TEMP%` sous Windows), et écrivez dans `<tmpdir>/architecture-review-<timestamp>.html` afin que chaque exécution obtienne un nouveau fichier. Ouvrez-le pour l'utilisateur — `xdg-open <path>` sur Linux, `open <path>` sur macOS, `start <path>` sur Windows — et indiquez-lui le chemin absolu.

Le rapport utilise **Tailwind via CDN** pour la mise en page et le style, et **Mermaid via CDN** pour les diagrammes où un graphique/flux/séquence communique de manière fiable la structure. Mélangez Mermaid avec des visuels CSS/SVG fabriqués à la main — utilisez Mermaid lorsque les relations sont sous forme de graphique (appels graphiques, dépendances, séquences) et des divs/SVG créés à la main lorsque vous souhaitez quelque chose de plus éditorial (diagrammes de masse, coupes transversales, animations de réduction). Chaque candidat bénéficie d'une **visualisation avant/après**. Soyez visuel.

Pour chaque candidat, restituez une fiche avec :

- **Fichiers** — quels fichiers/modules sont impliqués
- **Problème** — pourquoi l'architecture actuelle provoque des frictions
- **Solution** — description en français clair de ce qui changerait
- **Avantages** — expliqués en termes de localité et d'effet de levier, et comment les tests s'amélioreraient
- **Schéma Avant/Après** — côte à côte, dessiné sur mesure, illustrant la faible profondeur et l'approfondissement
- **Force de la recommandation** — `Forte`, `À explorer` ou `Spéculative`, rendue sous forme de badge

Terminez le rapport par une section **Meilleure recommandation** : quel candidat vous aborderiez en premier et pourquoi.

**Utilisez le vocabulaire de `CONTEXT.md` pour le domaine et celui de `/codebase-design` pour l’architecture.** Si `CONTEXT.md` définit « Commande », parlez du « module de prise de commandes », et non de « FooBarHandler » ou de « service de commande ».

**Conflits avec les ADR.** Si un candidat contredit un ADR existant, ne le faites apparaître que lorsque les frictions sont suffisamment réelles pour justifier une nouvelle révision de l’ADR. Signalez-le clairement sur la carte, par exemple : _« contredit l’ADR-0007, mais mérite d’être rouvert car… »_. Ne répertoriez pas toutes les refactorisations théoriques interdites par un ADR.

Voir [HTML-REPORT.md](HTML-REPORT.md) pour l'échafaudage HTML complet, les modèles de diagramme et les conseils de style.

Ne proposez PAS encore d’interfaces. Une fois le fichier écrit, demandez à l'utilisateur : "Lequel de ces éléments souhaiteriez-vous explorer ?"

### 3. Boucle de grillades

Une fois que l'utilisateur a choisi un candidat, exécutez la compétence  `/grilling`  pour parcourir l'arbre de décision avec lui : les contraintes, les dépendances, la forme du module profond, ce qui se trouve derrière la couture, quels tests survivent.

Les effets secondaires se produisent au fur et à mesure que les décisions se cristallisent : exécutez la compétence  `/domain-modeling`  pour maintenir le modèle de domaine à jour au fur et à mesure :

- **Nommer un module profond d'après un concept qui n'est pas dans `CONTEXT.md`?** Ajouter le terme à `CONTEXT.md`. Créez le fichier paresseusement s'il n'existe pas.
- **Affûter un terme flou pendant la conversation ?** Mettre à jour `CONTEXT.md` ici.
- **L'utilisateur rejette le candidat avec une raison importante ?** Proposez un ADR, formulé comme suit : _"Voulez-vous que j'enregistre cela en tant qu'ADR afin que les futures revues d'architecture ne le suggèrent pas à nouveau ?"_ Proposez uniquement lorsque la raison serait réellement nécessaire à un futur explorateur pour éviter de suggérer à nouveau la même chose - ignorez les raisons éphémères ("ça n'en vaut pas la peine pour le moment") et celles qui vont de soi.
- **Vous souhaitez explorer des interfaces alternatives pour le module profond ?** Exécutez la compétence `/codebase-design`  et utilisez son modèle de sous-agent parallèle design-it-twice.
