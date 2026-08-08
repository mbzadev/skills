# Limites de phase

Une **phase** est une partie du travail au sein d'une session : le grillage, la mise en œuvre, l'assurance qualité. La définition est volontairement floue : une phase se termine quand on se dit *"ok, on en a fini avec ça"*.

La **limite de phase** est l'écart entre deux phases, et c'est le seul endroit où cette décision appartient. À mi-phase, il n'y a aucune décision à prendre : continuer ou diviser le travail restant en sous-agents. Le compactage à mi-phase fait perdre le fil à l’agent.

## Les cinq options

| Options | Ce qu'il fait |
| ------------ | --------------------------------------------------------------- |
| **Continuer** | Restez dans la séance. Aucun changement de contexte du tout.                    |
| **`/clear`** | Videz la fenêtre contextuelle et repartez de rien.                  |
| **`/handoff`** | Écrivez un fichier Markdown portable et démarrez une session n'importe où avec. |
| **Sous-agent** | Envoyez la tâche vers sa propre fenêtre contextuelle et obtenez un rapport.     |
| **`/compact`** | Compressez ce contexte et lancez une nouvelle session avec le résumé.  |

## L'arbre

Travaillez de haut en bas à la limite. Le premier **oui** gagne.

**1. Pouvez-vous continuer dans cette session ?** La réponse est oui dans deux cas : la phase suivante a besoin de la phase actuelle comme **source principale**, ou il reste suffisamment de [zone intelligente](https://www.aihero.dev/ai-coding-dictionary/smart-zone) — environ 150 000 jetons — pour accueillir la suite. Passer du cadrage à l’implémentation est le cas habituel : l’implémentation a besoin du raisonnement complet, pas d’un résumé. Continuer ne coûte rien et ne perd rien ; écartez donc cette option avant toutes les autres.

**2. Le contexte est-il inutile pour la suite ?** Tout ce que contient cette session — exploration, décisions et impasses — peut-il être abandonné ? Si oui, utilisez **`/clear`**. C’est l’option la moins coûteuse : elle est immédiate et libère toute la fenêtre. `/clear` n’est pas irréversible : l’ancienne session peut être reprise.

Le coût d’une erreur est à sens unique. Effacez un contexte *pertinent* et vous perdez le **pourquoi** derrière ce que vous avez construit, et aucune lecture du diff ne le renvoie.

**3. Avez-vous besoin de faire un transfert ?** `/handoff` est étroit. Vous en avez besoin uniquement lorsque vous êtes :

- passage à une **nouvelle session ou interface Codex**,
- déplacement vers un **nouveau répertoire** ou dépôt,
- envoyer le travail à un **collègue**,
- ou lancer une tâche secondaire que vous avez trouvée **à mi-phase** sans faire dérailler ce que vous faites.

Cette liste représente l'intégralité de l'article. Ce que `/handoff` achète, c'est la **portabilité** : un fichier qui voyage. Si rien ne voyage, vous n'en avez pas besoin.

**4. La tâche peut-elle être effectuée sans vous ?** Sa portée est-elle suffisamment étroite pour être exécutée sans intervention ? Confiez-la alors à un **sous-agent** et laissez cette session intacte. La revue automatisée est le cas classique : l’agent lit le diff et produit son rapport sans avoir besoin de vous.

**5. Sinon, utilisez `/compact`.** Le contexte reste pertinent, la session et le répertoire ne changent pas, mais la phase suivante exige de la place. Donnez une instruction ciblée, par exemple `/compact nous allons maintenant contrôler la qualité de cette zone`, afin que le résumé conserve ce dont la suite a besoin.

`/compact` est la **valeur par défaut, pas la première portée**. Il se situe en bas parce que les quatre questions au-dessus sont toutes moins chères ou plus précises. Le mode d'échec lorsque les gens commencent ici est une nouvelle session qui se trompe en toute confiance sur une décision dont le résumé a été aplati.

## Sources primaires et secondaires

Chaque mouvement, à l'exception de **Continuer**, transforme une **source principale** en une **source secondaire** : la session telle qu'elle s'est déroulée, remplacée par un résumé de celle-ci. Le commerce a toujours la même forme :

| Source | Informations | Bruit | Espace pour bouger |
| --------------------------------- | ----------- | ----- | ------------ |
| Primaire (Continuer) | Complet | Beaucoup | Petit |
| Secondaire (`/compact`, `/handoff`) | Avec perte | Moins | Beaucoup |

C'est pourquoi la question 1 vient en premier. Vous ne payez la perte que lorsque le séjour coûte plus que ce que vous économisez.

## Des choix de jugement

Ces questions ne sont pas objectives : la même frontière peut conduire à des décisions différentes selon le contexte. Leur valeur vient de leur ordre et du fait qu’elles sont posées à la limite entre deux phases, pas au milieu du travail.
