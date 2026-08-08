# Prototype logique

Un fichier HTML unique et autonome (une **démo partageable**) qui permet à quiconque de piloter un modèle d'état en cliquant sur des boutons. Utilisez-le lorsque la question porte sur la **logique métier, les transitions d'état ou la forme des données** — le genre de chose qui semble raisonnable sur le papier mais qui ne semble erronée qu'une fois que vous l'appliquez à des cas réels.

Puisqu'il s'agit d'un seul fichier sans rien à installer, vous pouvez le confier à un non-développeur (un concepteur, un PM, un expert du domaine) et le laisser expérimenter le modèle par lui-même. Il parle donc leur langage, pas celui du code.

## Quand c'est la bonne forme

- "Je ne sais pas si cette machine à états gère le cas limite où X puis Y."
- "Ce modèle de données me permet-il réellement de représenter le cas où..."
- "Je veux savoir à quoi devrait ressembler l'API avant de l'écrire."
- Tout ce où quelqu'un veut **appuyer sur des boutons et regarder le changement d'état**.

Si la question est "à quoi cela devrait ressembler" - mauvaise branche. Utilisez [UI.md](UI.md).

## Processus

### 1. Posez la question

Avant d'écrire du code, notez le modèle d'état et la question que vous prototypez. Un paragraphe, en haut de la démo (dans une intro visible, pas seulement un commentaire). Un prototype logique qui répond à la mauvaise question est un pur gaspillage : rendez la question explicite afin qu'elle puisse être vérifiée plus tard, si l'utilisateur la regarde maintenant ou y revient AFK.

### 2. Isoler la logique dans un module portable

Mettez la logique réelle - le bit qui répond à la question - dans un seul bloc  `<script>`  écrit comme un petit module pur qui pourrait être retiré et déposé plus tard dans la base de code réelle. La page qui l'entoure est jetable ; ce module ne l'est pas.

La bonne forme dépend de la question :

- **Un pur réducteur** — `(state, action) => state`. Idéal lorsque les actions sont des événements discrets et que l’état est une valeur unique.
- **Une machine à états** — états et transitions explicites. Bien quand « quelles actions sont même légales en ce moment » fait partie de la question.
- **Un petit ensemble de fonctions pures** sur un type de données simple. C’est bien quand il n’y a pas d’état actuel implicite – juste des transformations.
- **Une classe ou un module avec une surface de méthode claire** lorsque la logique possède véritablement l'état interne en cours.

Choisissez la forme qui correspond le mieux à la question posée, *pas* celle qui est la plus simple à relier à une page. Gardez-le pur : pas de DOM, pas de `document`, pas de gestionnaire de boutons qui pénètrent à l'intérieur. La page y fait appel ; rien ne coule dans l’autre sens. C'est ce qui rend le prototype utile au-delà de sa propre durée de vie : une fois la question répondue, l'ensemble réducteur/machine/fonction validé s'élève tout seul dans le module réel.

### 3. Construire le fichier HTML partageable

Un fichier, HTML/CSS/JS simple — pas de framework, pas de bundler, pas de serveur, tout est en ligne donc il s'ouvre par double-clic et survit à l'envoi d'e-mails. N'importe qui devrait pouvoir l'exécuter en l'ouvrant.

Écrivez-le pour un non-développeur. Chaque étiquette est en **langage de domaine**, pas en code : les boutons et l'état se lisent comme l'entreprise, pas comme le réducteur. Expliquez avec des mots simples ce qui se passe.

Présentez-le avec une hiérarchie claire, de haut en bas :

1. **Titre et explication en une ligne** de ce que cette démo vous permet d'explorer (la question de l'étape 1).
2. **État actuel** — l'état complet pertinent, rendu sous forme de panneau lisible (champs étiquetés, pas un dump JSON brut), restitué après chaque clic afin que la modification soit visible. Lorsque cela aide un non-développeur à suivre, indiquez ce qui vient de changer.
3. **Boutons de jeu libre** — un bouton par action, toujours disponible, afin que n'importe qui puisse toucher le modèle dans n'importe quel ordre. Chaque clic répartit son action et restitue l'état.
4. **Procédures guidées** — un ensemble de **scénarios**, un par onglet. Chaque onglet contient une brève description en langage clair du scénario – la situation qu'il met en place et ce qu'il faut surveiller – et en dessous, les **boutons commandés sur lesquels appuyer** pour ce scénario. Chaque étape est un véritable bouton : cliquer dessus effectue cette action et passe à l'étape suivante. Le démarrage d’une procédure pas à pas est réinitialisé à un état initial connu afin que le scénario se déroule de la même manière à chaque fois.

Choisissez des scénarios qui illustrent les cas délicats – le chemin heureux, un cas limite délicat, une tentative de quelque chose qui devrait être illégal – ceux sur lesquels il est difficile de raisonner sur papier.

Gardez-le beau mais sobre : typographie épurée, espacement généreux, une couleur d’accent. Pas d'animations, pas de gadgets – rien qui rivalise avec l'état et les boutons.

### 4. Remettez-le

Envoyez-leur le fichier ou ouvrez-le pour eux. Ils cliqueront sur les procédures pas à pas et joueront gratuitement dès qu'ils y parviendront ; les moments intéressants sont quand ils disent "attendez, ça ne devrait pas être possible" ou "hein, j'ai supposé que X serait différent" - ce sont les bugs de l'_idée_, c'est là tout l'intérêt. S'ils souhaitent de nouvelles actions ou un nouveau scénario, ajoutez-les. Les prototypes évoluent.

### 5. Capturez la réponse et le prototype

Une fois que le prototype a répondu à sa question, capturez la réponse, puis capturez le prototype comme le décrit [SKILL](SKILL.md). La cartographie logique spécifique : l'ensemble réducteur/machine/fonction validé remonte dans le module réel (la décision, absorbée) ; le shell HTML se dirige vers la branche jetable qui conserve le prototype comme source principale - et étant un fichier autonome, il y reste trivialement réexécutable.

## Anti-motifs

- **N'ajoutez pas de tests.** Un prototype qui nécessite des tests n'est plus un prototype.
- **Ne le connectez pas à la base de données réelle.** Utilisez l'état en mémoire sauf si la question concerne spécifiquement la persistance.
- **Ne généralisez pas.** Non "Et si nous voulions prendre en charge X plus tard." Le prototype répond à une question.
- **Ne brouillez pas la logique et la page ensemble.** Si le module pur fait référence au DOM, `document` ou aux gestionnaires de boutons, il n'est plus relevable. Conservez la page comme une fine coque sur un module pur.
- **N'utilisez pas de framework, de bundler ou de serveur.** Un fichier sur lequel le destinataire double-clique ; une application React ou un serveur de développement bat le « partageable ».
- **Ne mettez pas le shell HTML en production.** La page est optimisée pour être cliquée manuellement. Le module logique derrière est celui qui mérite d’être conservé.
