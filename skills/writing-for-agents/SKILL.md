---
name: writing-for-agents
description: "Rédaction de documents destinés aux agents. À utiliser lors de la création ou de la modification de skills, d’AGENTS.md ou d’un document atteint par un pointeur de contexte."
---

Référence pour rédiger tout document consommé par un agent : un skill, `AGENTS.md` ou un document atteint par un pointeur. Le contenant change, mais les principes d’écriture restent les mêmes : ils rendent le processus suivi par l’agent prévisible sans imposer un résultat identique à chaque exécution.

Lorsque le document que vous rédigez est une compétence, lisez [`SKILL-MECHANICS.md`](SKILL-MECHANICS.md) pour connaître le contenu, le choix d'invocation et les compétences de routeur.

## Pointeurs de contexte

Un **pointeur de contexte** est une référence contenue dans le contexte de l'agent qui nomme du matériel hors contexte et code la condition pour l'atteindre. La description d'une compétence en est une ; une ligne dans `AGENTS.md`  nommant un document est le même objet. C'est la formulation du pointeur, et non sa cible, qui décide du moment où l'agent atteint le matériau – et avec quelle fiabilité. Une cible incontournable derrière un pointeur faiblement formulé est un bogue de variance : aiguisez d'abord le texte, et insérez le contenu uniquement si la netteté échoue.

Un pointeur effectue deux tâches : indiquer quel est le matériau et répertorier les **branches** qui devraient déclencher son atteinte (une branche est un cas distinct que le document gère, donc différentes exécutions empruntent des chemins différents à travers elle). Chaque mot d'un pointeur toujours chargé coûte à chaque tour, il gagne donc un élagage encore plus dur que le corps :

- **Chargez en premier le mot principal** — le pointeur est l'endroit où il effectue son travail de déclenchement.
- **Un déclencheur par branche.** Les synonymes qui renomment une seule branche sont une branche écrite deux fois ; réduisez-les et ne conservez que des branches véritablement distinctes.
- **Identité coupée que le corps porte déjà.**

## Les deux charges

Chaque document et pointeur que vous ajoutez dépense l'un des deux budgets suivants :

- **Charge contextuelle** — le coût du matériel toujours chargé sur la fenêtre de l'agent : une ligne `AGENTS.md` , une description de compétence, tout ce qui se trouve dans son contexte à chaque tour, dépenser des jetons et faire attention, qu'il se déclenche ou non.
- **Charge cognitive** — le coût pour l'humain : quels documents existent et quand les consulter. L'humain est l'indice. Ce n’est pas un coût à minimiser : c’est le prix de l’action humaine ; dépensez-le là où le jugement humain compte, retirez-le là où il n'a pas d'importance.

Le matériel chargé uniquement par un pointeur reste hors de la fenêtre de contexte jusqu’à ce que le pointeur se déclenche ; le matériel sans pointeur repose entièrement sur la mémoire de travail de l’agent.

## Hiérarchie des informations

Un document est construit à partir de deux types de contenus — **étapes** (les actions ordonnées que l'agent effectue) et **référence** (définitions, règles, faits consultés à la demande) — qui se mélangent librement : toutes les étapes (une recette), toutes les références (les règles d'une revue, cette compétence), ou les deux. La décision principale est de savoir où se situe chaque élément dans la **hiérarchie de l'information**, une échelle classée en fonction de la rapidité avec laquelle l'agent a besoin du matériel :

1. **Étape dans le fichier** — le niveau principal : ce que fait l'agent, dans l'ordre.
2. **Référence dans le dossier** — consultée sur demande. Souvent un ensemble de pairs légitimement plat (chaque règle d'une révision sur un seul échelon) - un bel arrangement, pas une odeur.
3. **Référence divulguée** — transféré dans un fichier séparé, atteint par un pointeur contextuel, chargé uniquement lorsque le pointeur se déclenche. S'étend sur un fichier frère dans le même dossier via une référence entièrement externe qui se trouve n'importe où et vers laquelle n'importe quel document peut pointer.

Appuyez trop peu vers le bas et le haut gonfle ; poussez trop et vous cachez le matériel dont l'agent a réellement besoin. Cette tension est toute la décision.

**La divulgation progressive** est le mouvement vers le bas de l'échelle — hors du fichier principal et derrière un pointeur — afin que le haut reste lisible. Il ne s’agit pas principalement d’une optimisation symbolique : c’est la façon dont la hiérarchie est protégée. Le branchement est le test de divulgation le plus propre : il intègre ce dont chaque branche a besoin et pousse derrière un pointeur ce que seules certaines branches atteignent. Lorsqu'un document comporte des étapes, la référence dans le dossier qui devrait être divulguée les enterre et transforme leur attention en un jeu de pile ou face – un levier de variance, pas seulement un levier de lisibilité.

La **colocalisation** est le compagnon au sein du fichier : là où l'échelle décide _à quelle distance se trouve une pièce_, la colocalisation décide _ce qui se trouve à côté_ une fois sur place. Conservez la définition, les règles et les mises en garde d'un concept sous une seule rubrique plutôt que dispersées, de sorte que la lecture d'une partie entraîne ses voisines avec elle. Le test : le document doit se lire comme une documentation écrite pour l'agent : le matériel groupé se lit de cette façon ; ce n’est pas le cas des matériaux dispersés. (Distincte de la duplication : qui répète un sens à deux endroits ; la dispersion fragmente un sens à plusieurs endroits.)

**Sprawl** est le mode d'échec ici : un document tout simplement trop long, même lorsque chaque ligne est vivante et unique. L’attention s’atténue sur l’excès, et chaque ligne supplémentaire en est une de plus à garder pertinente. Le remède est l'échelle : divulguez la référence derrière les pointeurs et divisez-la par branche ou séquence afin que chaque chemin ne transporte que ce dont il a besoin.

## Étapes et critères de réalisation

Chaque étape se termine par un **critère d'achèvement** — la condition qui indique à l'agent que le travail est terminé. Deux propriétés en font un levier :

- **Clarté** — l'agent peut-il distinguer ce qui est fait de ce qui n'est pas fait ? Un vague limite (« compréhension atteinte ») invite à un **achèvement prématuré** : terminer l'étape avant qu'elle ne soit véritablement terminée, l'attention se glissant vers _être fait_. Les étapes visibles encore à venir — les **étapes post-achèvement** — fournissent l'attraction ; le critère de clarté est la résistance. Défendre dans l'ordre : **affûtez d'abord la limite** (local et bon marché) ; seulement s'il est irréductiblement flou _et_ que vous observez la précipitation, masquez les étapes ultérieures en divisant la séquence - et le masquage ne fonctionne qu'au-delà d'une limite de contexte réelle (un transfert ou une répartition de sous-agent ; un appel en ligne laisse les étapes ultérieures dans leur contexte et n'efface rien).
- **Demand** — combien cela nécessite. "Chaque modèle modifié pris en compte" oblige à un travail approfondi là où "produire une liste de modifications" ne le fait pas. La demande détermine le **travail préparatoire** — le creusement que l'agent fait dans le travail, latent dans le libellé plutôt qu'écrit comme sa propre étape — et il n'est pas limité par étapes : « chaque règle appliquée » lie un corps de référence plate tout comme « chaque étape effectuée » lie une séquence, c'est ainsi qu'un document de référence comporte toujours une barre d'exhaustivité.

Les critères les plus forts sont à la fois vérifiables et exhaustifs.

## Quand diviser

Diviser un document en deux consomme l'un des deux chargements, donc divisez-le uniquement lorsque la coupe le mérite :

- **Par séquence** — divisez une série d'étapes où les étapes post-achèvement incitent l'agent à précipiter celle qui le précède. Les garder hors de vue entraîne plus de travail sur la tâche en cours. Attention à l'inverse : la fusion de séquences expose les étapes ultérieures de chaque étape à ce qui suit, invitant à un achèvement prématuré.
- **Par invocation** — spécifique à une compétence : voir [`SKILL-MECHANICS.md`](SKILL-MECHANICS.md).

## Mots principaux

Un **mot principal** est un concept compact déjà présent dans le pré-entraînement du modèle avec lequel l'agent réfléchit lors de l'exécution du document (_lesson_, _fog of war_, _tracer bullets_). Répété comme un jeton, jamais comme une phrase, il accumule une définition distribuée et ancre toute une région de comportement dans le moins de jetons, en recrutant des a priori que le modèle détient déjà. Inventer vos propres œuvres si vous les définissez clairement, mais qu'un mot inventé ne recrute aucun a priori - vous payez en jetons de définition ce qu'un mot pré-entraîné donne gratuitement ; recherchez d’abord un mot existant.

Le terme agit deux fois. Dans le corps, il guide l’_exécution_ : l’agent sait quel comportement rechercher chaque fois qu’il le rencontre. Dans un pointeur, il guide l’_invocation_ : lorsque le même mot apparaît dans vos invites, vos documents et votre base de code, l’agent relie ce vocabulaire au contenu associé et le charge plus fiablement.

Recherchez des opportunités de refactoriser avec des mots clés. Une triade énoncée sur trois sites, un pointeur passant une phrase pour faire signe à une idée - chacun est un passage qui ne demande qu'à se réduire en un seul jeton :

- "rapide, déterministe, faible surcharge" → _tight_ (une boucle _tight_).
- "une boucle en laquelle vous croyez" → _red_ — une porte floue devient un état binaire observable (la boucle passe au _rouge_ sur le bogue, ou non).

Vous gagnez deux fois : moins de jetons et un crochet plus pointu sur lequel l'agent peut accrocher sa réflexion. Supposons que chaque document contient des reformulations selon lesquelles les principaux mots sont retirés – allez les chercher.

La **négation** est le mode d'échec à côté de ce levier : le pilotage par interdiction entraîne le comportement interdit dans son contexte et le rend _plus_ disponible, pas moins. _Ne pensez pas à un éléphant_, et l'éléphant est tout ce qu'il y a ; la négation est un modificateur faible, le concept fortement activé dépasse, de sorte que l'interdiction se lit à moitié comme une instruction pour faire la chose. Invitez le **positif** — indiquez le comportement cible (« écrivez des commentaires sur une ligne ») afin que celui interdit ne soit jamais prononcé. Une interdiction n’a sa place que comme un garde-fou que vous ne pouvez formuler de manière positive ; même dans ce cas, associez-le à la cible positive afin que l’attention se concentre sur ce qu’il faut faire.

## Taille

- Conservez chaque signification dans une **source unique de vérité** : un seul endroit faisant autorité, donc changer le comportement est une modification à un seul endroit. **Duplication** — la même signification à plusieurs endroits — coûte de la maintenance et des jetons, et gonfle l'importance d'une signification sur l'échelle au-delà de son rang réel. (L'inverse accidentel d'un mot principal, qui répète volontairement un jeton, jamais le sens.)
- Le **environnement** est également une source de vérité — `package.json` scripts, fichiers de configuration, disposition des répertoires, `--help` sortie — et un document qui le reformule est un **cache** : une copie d'une recherche, ne gagnant sa charge que lorsque la recherche est coûteuse. Cachez ce que l'agent ne peut pas trouver en regardant : la convention non écrite, la raison d'un choix, le piège qu'aucune configuration n'avoue. Laissez les recherches dans un seul fichier et une seule commande à l'environnement, où elles ne peuvent pas devenir obsolètes.
- Vérifiez la **pertinence** de chaque ligne : est-ce que cela a toujours un rapport avec ce que fait le document ? Une ligne perd de sa pertinence parce qu’elle ne porte jamais sur la tâche (simple exposition ou branche qui devrait être divulguée) ou parce qu’elle devient obsolète à mesure que le comportement ou le monde qu’elle décrit change. Les documents plus courts sont plus faciles à maintenir pertinents. Sans une discipline d'élagage, le sort par défaut est **sédiment** : des couches périmées qui se déposent parce que l'ajout semble sûr et que la suppression semble risquée, jusqu'à ce que vous deviez les parcourir pour trouver ce qui est encore vivant.
- Repérez les **instructions sans effet** phrase par phrase : une consigne que le modèle suit déjà par défaut consomme du contexte sans modifier son comportement. Le test consiste à demander si elle change réellement la conduite du modèle. Deux personnes qui ne sont pas d’accord doivent exécuter le document pour observer le comportement, plutôt que débattre de leurs suppositions. Lorsqu’une phrase échoue à ce test, supprimez-la entièrement. Le choix des mots compte aussi : une formule trop faible pour dépasser le comportement par défaut — _être minutieux_ alors que l’agent l’est déjà — doit être remplacée par un terme plus contraignant, pas par une autre technique.
