## Ce qu’il fait

`to-questionnaire` transforme une décision que vous ne pouvez pas prendre seul en un **questionnaire** : un document Markdown remis à la personne qui détient l’information manquante, afin qu’elle puisse le remplir à son rythme ou avec vous pendant une réunion.

Il vous interroge sur l’**envoi**, jamais sur le sujet. Vous questionner sur le fond serait inutile : si vous connaissiez déjà le sujet, vous n’auriez pas besoin d’écrire à quelqu’un d’autre. Il pose donc les deux questions auxquelles vous pouvez toujours répondre : à qui le document est destiné et ce dont vous avez besoin en retour. Chaque question vise ensuite l’**écart** entre ces deux éléments.

## Quand l’utiliser

Vous l'invoquez en tapant `/to-questionnaire` — l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne l'atteindra pas tout seul.

Utilisez ce skill lorsqu'une décision est bloquée sur des connaissances qui vivent dans la tête d'une autre personne : un client, un expert du domaine, un cadre qui possède les règles métier, un collègue d'une équipe avec laquelle vous ne travaillez pas. La compétence que vous recherchez dépend de l'endroit où se trouvent réellement les réponses :

| Les réponses sont dans… | Utilisez |
| --- | --- |
| Votre propre réflexion, encore imprécise | [grill-me](https://aihero.dev/skills-grill-me) |
| La base de code | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) |
| La tête de quelqu'un d'autre | `to-questionnaire` |
| Personne n'a encore la tête — la question nécessite une réaction | [prototype](https://aihero.dev/skills-prototype) |

Le cas le plus courant est une session de [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) bloquée parce qu’une partie des réponses appartient à quelqu’un d’autre. Exécutez `/to-questionnaire` dans la même conversation pour externaliser ces questions, puis rapportez les réponses et reprenez le travail.

## L'envoi, pas le sujet

L'entretien, c'est deux échanges, et puis ça s'arrête.

- **À qui s'adresse-t-il ?** Leur rôle, leur expertise, leur relation avec vous. Cela fixe le ton et la quantité de contexte que le document doit contenir : un client externe a besoin d'être orienté, un coéquipier n'en a pas besoin.
- **De quoi avez-vous besoin en retour ?** Les décisions ou faits concrets que vous ne pouvez pas résoudre seul. Cela devient la liste de contrôle par rapport à laquelle le document final est évalué : chaque élément que vous avez nommé reçoit une question qui lui est destinée.

Tout ce qui suit n'est que rédaction. Le fichier atterrit à `to-questionnaire-<slug>.md` dans le répertoire actuel. Il n'y a aucune configuration, aucun espace de travail et rien à configurer.

## Le document

Le document est conçu comme un **questionnaire de découverte** : il vous manque le contexte et le destinataire le détient. Cette situation détermine sa forme :

- Une ligne d'objectif nommant la décision qui en découle, et une courte section contextuelle pour un destinataire qui n'a jamais été dans votre tête.
- Questions classées **les plus importantes en premier** et regroupées sous des titres thématiques, car asynchrone signifie que vous ne pouvez obtenir qu'un seul passage.
- Une idée par question, jamais composée, avec un talon de réponse en dessous et une ligne *pourquoi c'est important* uniquement là où une question pourrait être mal interprétée.
- Autorisation explicite de répondre « Je ne sais pas » — une incertitude signalée est utile ; une supposition sûre qui se lit comme un fait ne l’est pas.
- Un fourre-tout final : quelque chose que nous n'avons pas demandé et que nous devrions savoir ?

Deux propriétés sont volontairement absentes. Il ne s’agit pas d’un questionnaire à **embranchements** : les questions forment une liste structurée, et non un arbre qui saute la section D après une réponse A. Il ne s’agit pas non plus d’un document **multi-destinataires** : chaque exécution produit un questionnaire pour une seule personne.

## Questions fréquentes

**Est-ce qu'il lit ma séance de grillades et en extrait les questions ?**

Pas comme une étape en soi. La compétence n'a pas de phase d'ingestion : elle pose des questions sur l'envoi, puis rédige. Ce qui fait que cela fonctionne après une session de grillage, c'est que vous l'exécutez dans la **même conversation**, donc la [session](https://www.aihero.dev/ai-coding-dictionary/session) est déjà dans [context](https://www.aihero.dev/ai-coding-dictionary/context) et la rédaction peut s'en inspirer. Démarrez-le dans une nouvelle session et il ne sait rien du grillage - vous réalimenterez le sujet vous-même lorsque vous répondrez "de quoi avez-vous besoin en retour ?".

**Les réponses manquantes ne vivent pas toutes avec la même personne. Peut-il les diviser par destinataire ?**

Non. La première étape demande un destinataire unique, et tout le ton ainsi que le contexte du document sont adaptés à cette personne. Si trois personnes détiennent chacune une partie de la réponse, exécutez le skill trois fois. Le routage des questions par discipline ou par rôle dans un seul document a été demandé, mais n’est pas pris en charge.

**Les questions sont-elles dépendantes ? Est-ce que des sections sont sautées en fonction des réponses précédentes ?**

Non. Les questions conditionnelles ont été étudiées, mais ne font pas partie du skill. Le résultat est un document statique : des groupes thématiques, les questions les plus importantes en premier, puis une question par ligne. L’objection est valable : un [modèle](https://www.aihero.dev/ai-coding-dictionary/model) qui planifie plus de deux ou trois questions avant d’obtenir une réponse planifie mal, tandis qu’un document à embranchements doit tout prévoir à l’avance.

**Et si le destinataire ne le sait pas non plus ?**

Le document leur dit de le dire. "Je ne sais pas" et des réponses partielles sont demandées explicitement, et une incertitude signalée vaut plus qu'une supposition, car une réponse vague et une réponse fausse avec confiance semblent identiques une fois de retour dans votre contexte.

**Est-ce qu'il l'envoie n'importe où : Slack, un outil de suivi des problèmes, un e-mail ?**

Non, il écrit un fichier Markdown dans le répertoire courant et vous indique le chemin. La livraison vous appartient : collez-le dans un [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket), déposez-le dans un fil de discussion Slack, joignez-le à un e-mail ou ouvrez-le sur un écran partagé et travaillez-le en direct. Les gens ont câblé les quatre à la main.

**N'est-ce pas juste `/grill-me` en mode batch ?**

Non. `grill-me` pose déjà ses questions par **tours** : il présente toute la frontière actuelle, puis la recalcule après chacune de vos réponses. Le besoin « donnez-moi toutes les questions à la fois » est donc couvert. `to-questionnaire` traite un autre axe : il ne change pas la manière de poser les questions, mais la personne qui détient les réponses. Pour vous interroger, utilisez `grill-me` ; pour interroger quelqu’un d’autre, utilisez `to-questionnaire`.

**Ne pourrais-je pas simplement demander cela à l'agent sans compétence ?**

Oui, et beaucoup de gens l'ont fait avant qu'il n'existe — `OPEN_QUESTIONS.md` fichiers, feuilles de calcul envoyées aux clients, ticket « besoin de plus d'informations » par question sans réponse. Cette compétence vous offre deux choses : l'entretien ne dérive jamais sur le sujet et le document sort sous une forme qu'un destinataire non technique peut réellement remplir. Si vous disposez déjà d'un format maison qui fonctionne, la réponse honnête est que vous n'en avez pas besoin.

## Indicateurs de réussite

- Il pose des questions sur le destinataire et sur ce dont vous avez besoin en retour, puis arrête de demander. Une question sur le sujet lui-même est la compétence qui déraille.
- Chaque élément que vous avez nommé « ce dont j'ai besoin » est traçable à une question dans le fichier.
- Les questions se lisent comme visant ce que le *destinataire* sait, et non comme vos propres questions ouvertes copiées textuellement.
- Vous pourriez remettre le fichier à quelqu'un qui n'était pas dans la conversation et il saurait pourquoi il l'a reçu et quand répondre.
- Les réponses qui reviennent sont une entrée utilisable pour un nouveau tour de grillade, plutôt qu'une nouvelle série de questions.

## Où il s’inscrit

`to-questionnaire` est un **skill autonome, utilisable à tout moment**. Utilisez-le à la limite de vos connaissances, lorsque la prochaine étape dépend d’une autre personne plutôt que d’un autre skill — le plus souvent au milieu d’une planification bloquée par une décision que vous ne pouvez pas prendre seul.

Son voisin est [grill-me](https://aihero.dev/skills-grill-me) : les deux clarifient des questions, mais `grill-me` vous interroge tandis que le questionnaire s’adresse à quelqu’un d’autre. Les réponses obtenues deviennent ensuite la matière première d’une nouvelle séance de questions, de [grill-with-docs](https://aihero.dev/skills-grill-with-docs) ou de [to-spec](https://aihero.dev/skills-to-spec). En cas de doute, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous oriente.
