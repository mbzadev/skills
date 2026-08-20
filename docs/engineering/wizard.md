## Ce qu’il fait

`wizard` génère un script bash interactif qui guide un humain, étape par étape, à travers une procédure manuelle : câblage de services tiers, exécution d'une migration unique, déplacement d'un projet de l'état A à l'état B. Il ouvre chaque URL, indique sur quoi cliquer et copier, capture ce qui revient et l'écrit dans les fichiers `.env`  et les secrets des actions GitHub.

L'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) écrit le script ; il ne l'exécute jamais. Vous le faites, sur votre propre machine. Ainsi, un assistant n'est pas une liste d'instructions que vous suivez : c'est un programme qui pilote la procédure et gère l'état, et votre rôle consiste à cliquer, coller et appuyer sur Entrée.

## Quand l’utiliser

Vous pouvez taper `/wizard`, et l’agent peut également le sélectionner lui-même. Lorsqu’il rencontre une étape que vous devez réaliser — saisir une clé qu’il ne peut pas obtenir ou utiliser un tableau de bord sur lequel il ne peut pas cliquer — il crée un assistant pour vous guider au lieu d’écrire des instructions dans le chat, où elles risqueraient de se perdre.

Utilisez ce skill lorsque la prochaine chose qui vous bloque est un voyage dans un tableau de bord :

| Situation | Que fait l'assistant |
| --- | --- |
| Un nouveau développeur a besoin de six services configurés avant le démarrage de l'application | Ouvre chaque tableau de bord dans l'ordre, capture les clés, les écrit dans `.env` et CI |
| Une migration ponctuelle nécessite d'activer les commutateurs dans un ordre spécifique | Séquence les étapes irréversibles derrière les portes de confirmation |
| Un projet doit passer de l'état A à l'état B une fois | Parcourt la transition et rapporte ce qu'il n'a pas pu faire |
| Vous êtes sur le point d'écrire ces étapes dans un fichier README | Écrit une version exécutable à la place, qui ne peut pas pourrir aussi silencieusement |

Ne l’utilisez pas pour *décider* quoi construire ; pour cela, utilisez [grill-with-docs](https://aihero.dev/skills-grill-with-docs) et [to-spec](https://aihero.dev/skills-to-spec).

## Prérequis

Aucun pour en générer un. L'assistant qu'il écrit s'exécute sur bash et utilise `gh` lorsqu'une étape définit un secret ou une variable GitHub. Si `gh` est manquant ou non authentifié, cette étape devient un avertissement et le résumé de clôture vous indique ce qu'il faut définir manuellement, au lieu d'échouer l'exécution.

## Étapes

Une **étape** est une tâche ciblée sur un seul écran. Le script efface le terminal entre les étapes, donc une étape qui déborde de l'écran perd la partie qui a défilé. Vous créez des étapes dans l'ordre de dépendance et définissez `TOTAL_STAGES`, qui pilote l'affichage de la progression.

La définition de la portée se produit avant l'écriture d'une ligne. La [skill](https://www.aihero.dev/ai-coding-dictionary/skill) lit le dépôt au lieu de demander à froid : `.env*`, `docker-compose*`, la configuration du framework et chaque `secrets.*` / `vars.*` référence dans `.github/workflows/` — chacun d’eux est une valeur que l’assistant doit produire. Il vous montre ensuite la liste des étapes ordonnées à confirmer, et seulement après cela, mappe chaque étape au chemin exact suivi par un humain ("Tableau de bord → Développeurs → Clés API → Révéler la clé de test → copier"). Lorsqu'il ne connaît pas l'interface utilisateur actuelle, il vous le demande ou vérifie la documentation plutôt que d'inventer des clics.

Pour chaque valeur capturée, le cadrage s’établit là où il atterrit :

| Destination | Quand |
| --- | --- |
| `.env` uniquement | Les développeurs locaux en ont besoin, pas CI |
| Secret GitHub | CI le lit, et c'est sensible |
| Variable GitHub | CI le lit et c'est public |
| À la fois `.env` et un secret | Les développeurs locaux et CI en ont tous deux besoin |
| Nulle part | La scène est une pure action – un interrupteur actionné, un plan amélioré |

## Le modèle résout déjà l'UX

Le [modèle](https://github.com/mbzadev/skills/blob/main/skills/wizard/template.sh) fournit toute l’expérience : progression et temps restant, confirmations, ouverture d’URL multiplateforme — y compris sous WSL —, saisie masquée des secrets, mise à jour idempotente de `.env`, écriture via `gh secret` et `gh variable`, puis résumé final des étapes ignorées. Tout ce qui précède le marqueur `STAGES` forme une bibliothèque fixe, identique dans chaque assistant et jamais modifiée manuellement. Votre travail consiste uniquement à définir la procédure et à créer ses étapes.

L'agent qui écrit un assistant ne l'exécute jamais de bout en bout, car il ouvre les navigateurs et attend l'intervention humaine. Il vérifie statiquement à la place : `bash -n`, `shellcheck` lorsque disponible, et une trace que chaque valeur atterrit là où la portée l'a indiqué, avec chaque `set_secret` nom correspondant à une vraie `secrets.*` référence dans CI. Définissez vos attentes en conséquence : la première exécution vous appartient et cette exécution est le test.

## Éphémère par défaut

| Ce que vous avez | Que faire avec le script |
| --- | --- |
| Une migration ponctuelle, une configuration personnelle, une transition que vous ne répéterez jamais | Enregistrez-le dans un chemin scratch ou `scripts/` , exécutez-le, supprimez-le |
| Un chemin de configuration dont la prochaine personne sur le dépôt aura également besoin | Validez-le et liez-le à partir du README, afin qu'ils exécutent le script au lieu de demander à nouveau à un agent |

## Questions fréquentes

**Mes clés API se retrouvent-elles dans le contexte du modèle ?**

Non. L’agent écrit un script ; ça ne le fait pas fonctionner. Vous exécutez le script vous-même, et il capture la clé avec une entrée de terminal cachée et l'écrit directement dans `.env` ou `gh secret`. L'assistant est une CLI et le modèle n'y est pas connecté. Une mise en garde : cela vaut pour les valeurs capturées par l'assistant au moment de l'exécution. Si vous collez une clé dans le chat tout en délimitant la procédure, elle se trouve dans le [context](https://www.aihero.dev/ai-coding-dictionary/context) comme tout autre texte collé.

**Puis-je revenir en arrière et corriger une valeur que j'ai mal saisie ?**

Pas à mi-parcours. Il n'y a pas de bouton de retour - les étapes avancent et une mauvaise réponse à l'étape 3 signifie Ctrl-C et réexécuter. La réexécution est peu coûteuse de par sa conception : toute valeur déjà écrite dans `.env` est proposée par défaut, vous appuyez donc sur Entrée pendant les étapes que vous avez réussies et ne retapez que la mauvaise. Cela s'est produit au cours de la semaine de lancement et n'a pas été fermé depuis : "J'ai adoré ! Une chose cependant : existe-t-il un moyen de revenir en arrière et de corriger ce que vous avez saisi ?"

Il y a un bogue ouvert associé. Les touches fléchées dans une invite `ask` insèrent `^[[D` / `^[[C` au lieu de déplacer le curseur, car l'invite utilise `read -r` plutôt que Readline ([numéro 741](https://github.com/mbzadev/skills/issues/741)). Le retour arrière fonctionne ; les touches fléchées ne le font pas. Supprimez l'erreur plutôt que d'y déplacer le curseur.

**Est-ce qu'il sait ce que j'ai déjà configuré ?**

En partie, et moins que ce que supposaient les réactions au lancement. Il lit le dépôt avant de demander - vos fichiers `.env` , `docker-compose`, la configuration du framework, les références `secrets.*`  dans CI - il s'étend donc aux valeurs qui sont véritablement manquantes plutôt que de partir de zéro comme le fait un README. Ce qu'il ne fait pas, c'est vérifier le service tiers. Si une clé existe dans votre `.env` l'assistant la propose et Entrée la conserve ; si vous avez déjà créé le compte Stripe mais n'avez jamais enregistré la clé, l'assistant vous envoie quand même au tableau de bord correspondant.

**Où se situe-t-il dans le flux de travail – après le grillage et les spécifications ?**

Nulle part en particulier. Il s'agit d'une étape autonome et non d'une chaîne. L'hypothèse courante est  `/grill-with-docs → /to-spec → /wizard`, et cette séquence est correcte, mais le déclencheur est une procédure manuelle qui apparaît, qui peut se produire à tout moment : avant de commencer, à mi-construction ou longtemps après l'expédition. Il fonctionne également comme un outil de découverte : la portée fait apparaître les prérequis cachés d'une tâche, comme les trois clés API auxquelles vous n'aviez pas pensé, avant de vous engager dans le travail.

**Est-ce que ça marche en dehors de Codex ?**

L'artefact le fait, sans condition : c'est un simple script bash et peu importe ce que [harness](https://www.aihero.dev/ai-coding-dictionary/harness) l'a généré. La compétence elle-même est invoquée par le modèle, elle est donc répertoriée partout – tapez `/wizard` dans Codex ou `$wizard` dans le Codex, ou décrivez simplement la configuration sur laquelle vous êtes bloqué. Le fait d'être invoqué par le modèle permet également d'éviter [#693](https://github.com/mbzadev/skills/issues/693), où les surfaces de bureau et Web de Codex suppriment les compétences *invoquées par l'utilisateur* de la liste du [modèle](https://www.aihero.dev/ai-coding-dictionary/model) et les signalent comme non installées.

**N'était-ce pas invoqué par l'utilisateur ?**

C’est effectivement le cas. Il est désormais invocable par le modèle : l’agent le sélectionne automatiquement lorsqu’il rencontre une étape que vous seul pouvez réaliser. Rien de ce qui fonctionnait auparavant n’a été supprimé ; cette invocation ajoute simplement une possibilité, tandis que `/wizard` reste disponible sur demande. Le mode d’échec change toutefois : au lieu de vous transmettre six étapes numérotées dans le chat lorsqu’il rencontre un écran d’identifiants, l’agent génère l’assistant qui vous guide dans cette procédure.

**Auparavant, c'était dans `in-progress/` — où est-il maintenant ?**

Depuis la version 1.2, il appartient à la catégorie `engineering/`. Il a quitté la catégorie bêta et est désormais livré avec le reste des skills promus, sans installation individuelle. Ce changement de statut n’a pas modifié son comportement.

## Indicateurs de réussite

- Une liste ordonnée d'étapes et les valeurs que chacune d'elles produit s'affichent, et il vous est demandé de confirmer - avant qu'un script n'existe.
- Chaque URL est ouverte avant que la valeur de cette page ne soit demandée. On ne vous demande jamais de coller quelque chose que vous n'avez pas été envoyé chercher.
- Les secrets sont tapés à l'aveugle. Rien de sensible ne résonne dans votre défilement.
- Chaque étape correspond à un écran. Rien de ce dont vous avez encore besoin n’a disparu.
- Ctrl-C et réexécutez reprend là où vous vous étiez arrêté, offrant les valeurs déjà enregistrées par défaut.
- L'écran final répertorie ce qu'il a écrit, et répertorie séparément ce qu'il n'a pas pu faire et que vous devez terminer à la main.

## Où il s’inscrit

`wizard` est un skill autonome, utilisable à tout moment, situé à la ligne où l'automatisation s'arrête et où un humain doit cliquer. Son voisin le plus proche est [setup-mabza-skills](https://aihero.dev/skills-setup-mabza-skills), car les deux existent pour mettre un dépôt en état de fonctionnement - celui-ci configure cet ensemble de compétences, tandis que  `wizard`  génère un chemin de configuration pour tout le reste. Il s'associe également à [implement](https://aihero.dev/skills-implement) : lorsqu'une version intègre une fonctionnalité qui nécessite des informations d'identification ou un basculement manuel, un assistant permet de réaliser la moitié humaine. Lorsque vous ne savez pas quelle compétence vous convient le mieux, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous dirige.
