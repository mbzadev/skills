## Ce qu’il fait

`improve-codebase-architecture`  étudie une base de code pour des **opportunités d'approfondissement** - des endroits où un module superficiel (une interface presque aussi complexe que ce qu'il cache) pourrait devenir un module profond - les rédige sous la forme d'un rapport HTML autonome, puis [grills](https://www.aihero.dev/ai-coding-dictionary/grilling) vous à travers celui que vous choisissez.

Cela ne change jamais le code. L'ensemble de l'exécution produit un fichier HTML dans le répertoire temporaire de votre système d'exploitation et une conversation ; le refactor lui-même se produit plus tard, dans une [session](https://www.aihero.dev/ai-coding-dictionary/session) distincte, via le flux de construction normal. C'est ce qui en fait une enquête plutôt qu'un outil de refactoring, et c'est pourquoi la compétence vaut la peine d'être exécutée sur une base de code que vous n'êtes pas encore prêt à toucher.

Deux filtres empêchent le rapport de devenir des conseils de nettoyage génériques. Chaque candidat doit réussir le **test de suppression** : la suppression de ce module concentrerait-elle la complexité derrière une interface plus petite, ou la répartirait-elle simplement entre les appelants ? Seules les caisses « concentrés » donnent droit à une carte. Et à moins que vous ne le pointiez vers une zone spécifique, il lit d'abord l'historique des commits récents et oriente l'analyse vers des chemins qui changent activement, au motif qu'un approfondissement du code que personne ne touche est un refactor que vous n'encaisserez jamais.

## Quand l’utiliser

Vous l'invoquez en tapant `/improve-codebase-architecture` — l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne l'atteindra pas tout seul.

Il se situe en dehors de la boucle de construction - ce n'est pas une étape dans la boucle principale mais quelque chose que vous exécutez périodiquement pour mettre en file d'attente davantage de travail afin d'améliorer la base de code. Les quatre situations dans lesquelles il est utilisé :

| Situation | Comment il est utilisé |
| --- | --- |
| Entretien courant | Exécutez-le tous les quelques jours, ou chaque fois qu'un moment libre apparaît, pour empêcher la structure de pourrir entre les fonctionnalités. |
| Avant une grande construction | Pointez-le sur la [spec](https://www.aihero.dev/ai-coding-dictionary/spec) : "comment pouvons-nous faciliter ce changement ?" C'est l'invite la plus efficace pour cela. |
| Audit d’une base de code existante | Exécutez-le sur un dépôt volumineux, désorganisé ou [vibe-coded](https://www.aihero.dev/ai-coding-dictionary/vibe-coding) pour établir son état réel. |
| Travail de test hérité | Utilisez-le pour trouver d'abord les coutures manquantes, avant d'écrire des tests sur du code non testable. |

Où il est confondu avec frères et sœurs :

- Pour concevoir un module que vous avez déjà choisi, utilisez [codebase-design](https://aihero.dev/skills-codebase-design) — c'est le banc, c'est l'enquête qui trouve quoi mettre dessus.
- Pour un effort trop important pour être réalisé en une seule séance, utilisez [wayfinder](https://aihero.dev/skills-wayfinder).
- Pour "cette chose spécifique est cassée", utilisez [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs). Cela revient ici lorsque la véritable conclusion est qu'il n'y a pas de bonne couture pour verrouiller le bug.

## Prérequis

Aucun pour l'exécuter. Il lit `CONTEXT.md` et tous les ADR dans `docs/adr/` s'ils existent, et parle dans les noms de votre domaine lorsqu'ils le font - un candidat se lit comme "approfondir le module de prise de commandes", et non comme "refactoriser le FooBarHandler".

Il est écrit à deux endroits. Le rapport va à `<tmpdir>/architecture-review-<timestamp>.html`, en dehors du repo. Pendant la boucle de grillage, il ajoutera ou affinera les termes dans `CONTEXT.md`, créant ce fichier s'il n'existe pas, et proposera d'enregistrer un candidat rejeté en tant qu'ADR afin qu'une exécution future ne le suggère pas à nouveau.

## Profondeur, et le rapport qui la recherche

La compétence tourne autour d'une idée : **profondeur**. Un module profond met beaucoup de comportement derrière une petite interface stable. Un modèle superficiel divulgue son implémentation via une interface presque aussi large que le code situé en dessous. Le rapport est une chasse à la superficialité – des fonctions pures extraites uniquement à des fins de test alors que les vrais bugs vivent dans la façon dont ils sont appelés (pas de **localité**), des modules qui fuient à travers leurs **coutures**, un concept que vous ne pouvez pas comprendre sans ouvrir cinq fichiers – et une proposition d'approfondissement qui le corrige.

Chaque candidat est une carte : les dossiers impliqués, les frictions, une solution en anglais simple, le bénéfice énoncé en termes de **localité** et de **effet de levier**, un schéma avant/après et un badge de force.| Insigne | Ce que cela signifie pour vous |
| --- | --- |
| `Forte` | Le test de suppression réussit clairement et les frictions sont réelles. Prenez la recommandation au sérieux. |
| `À explorer` | L’approfondissement est plausible, mais son gain dépend de l’évolution future du code. |
| `Spéculative` | La piste est présentée par souci d’exhaustivité et peut généralement être ignorée. |

Le rapport se termine par une **Meilleure recommandation** (celle à laquelle il s'attaquerait en premier), puis la compétence s'arrête et vous demande quel candidat vous souhaitez explorer. Rien n’est encore décidé et aucun code n’a bougé.

## Que se passe-t-il une fois que vous en avez choisi un

La sélection d'un candidat démarre une session de [grilling](https://aihero.dev/skills-grilling) dessus : les contraintes, ce qui se cache derrière la couture, quels tests survivent, à quoi devrait ressembler l'interface approfondie. Le résultat de cette session est une décision, pas une différence. À partir de là, le flux normal s'applique - prenez la décision dans [to-spec](https://aihero.dev/skills-to-spec), puis [to-tickets](https://aihero.dev/skills-to-tickets), puis [implement](https://aihero.dev/skills-implement).

## Questions fréquentes

** Cela m'a demandé pendant une heure une idée au lieu de me montrer des options. Puis-je désactiver cela ?**

Oui, dites-le lorsque vous l'invoquez (« ne me grillez pas, montrez simplement le rapport »). C’est la plainte la plus bruyante de cette compétence. Un utilisateur l'a dit sans détour : il l'a apprécié comme "un moyen pratique d'obtenir une analyse approfondie des améliorations", et après l'ajout de la boucle de grillage, il l'a trouvé "à la limite inutilisable", rapportant des sessions au cours desquelles il a proposé une solution unique, puis a posé "des dizaines ou des centaines de questions". L'intention de conception est que le rapport vienne en premier et que le grill ne démarre que sur un candidat que vous avez choisi, mais les [modèles](https://www.aihero.dev/ai-coding-dictionary/model) plus faibles passent directement à vous interviewer sur la première idée qu'ils ont eue. Les rapports dans ce fil varient considérablement selon le modèle, et c'est un problème ouvert : la compétence n'a pas encore de mode sans grill documenté.

**Le rapport s'est ouvert au format HTML brut sans style, sans diagramme. Que s'est-il passé ?**

Le rapport charge Tailwind et Mermaid à partir des CDN, il a donc besoin d'un accès au réseau lorsque vous l'ouvrez, et il s'interrompt silencieusement lorsque quelque chose bloque ces scripts. L'affaire déposée était un crochet de sécurité exigeant des hachages SRI : l'agent les a ajoutés, le CDN a servi des octets différents au navigateur et au `curl` utilisé pour calculer le hachage, et le navigateur a bloqué le script. Les environnements hors ligne et verrouillés se heurtent au même mur. L'agent ne peut pas le voir, car il n'affiche jamais la page. La solution de contournement consiste à demander des diagrammes CSS en ligne et SVG construits à la main au lieu de l'échafaudage CDN. Il s’agit d’une question ouverte et d’une véritable aspérité.

**Cela m'a donné douze candidats. Dois-je les parcourir au cours de la même session ou en commencer une nouvelle ?**

Un candidat par session. Travailler sur plusieurs conversations en une seule remplit la [fenêtre contextuelle](https://www.aihero.dev/ai-coding-dictionary/context-window) avec le rapport, le grillage, les modifications du modèle de domaine et les changements de code en même temps. Le rapport ne réside que dans un fichier temporaire, alors emportez le candidat lui-même plutôt que le dossier : choisissez-en un, grillez-le, prenez la décision dans `/to-spec` et transformez le reste en [tickets](https://www.aihero.dev/ai-coding-dictionary/ticket) que vous pourrez récupérer indépendamment plus tard. Mettez l'amélioration choisie dans une spécification plutôt que de passer directement à la mise en œuvre. Il s'agit d'une question récurrente sans flux de travail documenté dans la compétence elle-même.

**Comment dois-je l'inviter ?**

Avec la prochaine chose que vous construisez à l’esprit. Lorsqu'une grande version est à venir, pointez-la vers les spécifications et demandez « comment pouvons-nous faciliter ce changement ? » Une exécution spontanée recherche elle-même les points chauds, ce qui convient pour l'entretien de routine, mais nommer une direction est ce qui rend le rapport exploitable.

**Est-ce que cela fonctionne sur une grande base de code existante ?**

En partie. Il est puissant sur les grandes bases de code existantes dépourvues de structure cohérente, et constitue le mécanisme de maintenance recommandé après toute configuration structurelle ponctuelle. Le contrepoids honnête : les utilisateurs avec des projets véritablement incontrôlables rapportent que cela « a un peu aidé mais ne semble toujours pas suffire », et un développeur avec une base de code héritée de huit ans a signalé que le modèle tournait en rond où la même compétence produit un graphique propre sur un dépôt bien rangé. Il n'existe pas encore de compétence `/refactor`  dédiée à ce cas. Si la base de code n'a aucun vocabulaire partagé, [grill-with-docs](https://aihero.dev/skills-grill-with-docs) pour en établir un en premier tend à améliorer considérablement le résultat de cette compétence.

**En quoi est-ce différent de `/codebase-design` ?**

`/codebase-design` est une référence, pas un pilote de session. Il fournit le vocabulaire – module, interface, profondeur, couture, adaptateur, effet de levier, localité – et cette compétence l'emprunte. Pointer un nouvel agent vers `/codebase-design`  comme chose à « faire » est un échec connu : sans processus propre à suivre, l'agent en invente un, réexplore le code et s'exécute pendant très longtemps avant de vous demander quoi que ce soit. Conduisez avec cette compétence ; consomme celui-là.

**Est-ce que cela me dira un jour que la base de code est correcte ?**

Rarement, et vous devez le savoir dès le départ. Le skill est conçu pour produire des résultats ; son cadrage le pousse donc à proposer des candidats plutôt qu’à conclure que tout va bien. Les badges de force compensent ce biais : un rapport où tout est `Spéculative` signifie simplement qu’aucune piste solide n’a été trouvée.

**Est-ce que ça marche dans le Codex ou un autre harnais ?**

Partiellement. L'étape d'exploration nomme directement l'outil `Agent` de Codex avec `subagent_type=Explore` , de sorte qu'un [harnais](https://www.aihero.dev/ai-coding-dictionary/harness) sans cet outil peut ignorer l'exploration parallèle plutôt que de remplacer la sienne. La compétence fonctionne toujours ; l'analyse est tout simplement moins approfondie. Une réécriture neutre en termes de harnais a été proposée mais n'est pas fusionnée.

**Comment puis-je réellement implémenter des modules profonds dans TypeScript ?**

Il n’y a pas de bonne réponse fournie avec la compétence. La demande récurrente concerne un `TYPESCRIPT.md`  donnant des présentations concrètes de fichiers et de modules pour les principes, et cela n'existe pas. La compétence vous dira où se situe une approfondissement et ce qui doit se trouver derrière la couture ; la traduction de cela en un package ou une structure de répertoires est actuellement à votre charge.

## Indicateurs de réussite

- Les candidats nomment les concepts de votre domaine, et non des noms de classe inventés : "le module de prise de commandes", et non "le FooBarHandler".
- Les candidats sont regroupés dans les fichiers que vous avez modifiés récemment, et non dans les coins dormants du dépôt.
- Aucun code n'a été modifié pendant l'exécution. Le seul nouveau fichier est le rapport HTML dans votre répertoire temporaire.
- Il s'arrête après le rapport et vous demande quel candidat vous souhaitez, plutôt que de continuer tout seul.
- Chaque carte explique le gain en termes de localité ou de levier, et indique quels tests deviennent plus simples – pas seulement « c'est plus propre ».
- Rejeter un candidat pour un motif durable vous donne droit à une offre d'enregistrement d'un ADR, donc le prochain tour ne le propose pas à nouveau.

## Où il s’inscrit

`improve-codebase-architecture` est une **maintenance périodique** — exécutez-la tous les quelques jours, en dehors de toute chaîne, pour mettre le travail en file d'attente plutôt que de le faire. Ses voisins sont [codebase-design](https://aihero.dev/skills-codebase-design), qui possède le vocabulaire approfondi dans lequel chaque candidat est écrit, [grilling](https://aihero.dev/skills-grilling), qui parcourt l'arbre de décision une fois que vous avez choisi un candidat, et [modélisation de domaine](https://aihero.dev/skills-domain-modeling), qui maintient `CONTEXT.md` et les ADR à jour au fur et à mesure que la décision est prise. Ce qu'il produit est une idée, qui réintègre le flux de construction principal à [grill-with-docs](https://aihero.dev/skills-grill-with-docs) ou [to-spec](https://aihero.dev/skills-to-spec). Pour quelle compétence correspond à une situation, [ask-matt](https://aihero.dev/skills-ask-matt) est le routeur sur l'ensemble de l'ensemble.
