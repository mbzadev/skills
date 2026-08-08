## Ce qu’il fait

`to-questionnaire` transforme une décision que vous ne pouvez pas prendre par vous-même en un **questionnaire** — un document Markdown que vous remettez à la seule personne qui détient ce qui vous manque, pour qu'elle le remplisse de manière asynchrone ou que vous puissiez y travailler tous les deux lors d'une réunion.

Il vous interroge sur l'**envoi**, jamais sur le sujet. Vous interviewer sur le sujet est inutile ici : ne pas connaître le sujet est la raison pour laquelle vous écrivez à quelqu'un d'autre. Il pose donc les deux questions auxquelles vous pouvez toujours répondre : à qui cela s'adresse et ce dont vous avez besoin en retour - et vise chaque question du document sur le **écart** entre les deux.

## Quand l’utiliser

Vous l'invoquez en tapant `/to-questionnaire` — l'[agent](https://www.aihero.dev/ai-coding-dictionary/agent) ne l'atteindra pas tout seul.

Atteignez-le lorsqu'une décision est bloquée sur des connaissances qui vivent dans la tête d'une autre personne : un client, un expert du domaine, un cadre qui possède les règles métier, un collègue d'une équipe avec laquelle vous ne travaillez pas. La compétence que vous recherchez dépend de l'endroit où se trouvent réellement les réponses :

| Les réponses sont dans… | Atteindre |
| --- | --- |
| Votre propre tête, non aiguisée | [grille-moi](https://aihero.dev/skills-grill-me) |
| La base de code | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) |
| La tête de quelqu'un d'autre | `to-questionnaire` |
| Personne n'a encore la tête — la question nécessite une réaction | [prototype](https://aihero.dev/skills-prototype) |

Le cas le plus courant est celui d'une session [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) qui se bloque : une partie de ce qui a fait surface ne vous appartient pas. Exécutez `/to-questionnaire` dans cette même conversation pour mettre ces questions hors ligne, puis ramenez les réponses et continuez.

## L'envoi, pas le sujet

L'entretien, c'est deux échanges, et puis ça s'arrête.

- **À qui s'adresse-t-il ?** Leur rôle, leur expertise, leur relation avec vous. Cela fixe le ton et la quantité de contexte que le document doit contenir : un client externe a besoin d'être orienté, un coéquipier n'en a pas besoin.
- **De quoi avez-vous besoin en retour ?** Les décisions ou faits concrets que vous ne pouvez pas résoudre seul. Cela devient la liste de contrôle par rapport à laquelle le document final est évalué : chaque élément que vous avez nommé reçoit une question qui lui est destinée.

Tout ce qui suit n'est que rédaction. Le fichier atterrit à `to-questionnaire-<slug>.md` dans le répertoire actuel. Il n'y a aucune configuration, aucun espace de travail et rien à configurer.

## Le document

Il est conçu comme un **questionnaire de découverte** — il vous manque le contexte, le destinataire le détient — et ce cadrage détermine sa forme :

- Une ligne d'objectif nommant la décision qui en découle, et une courte section contextuelle pour un destinataire qui n'a jamais été dans votre tête.
- Questions classées **les plus importantes en premier** et regroupées sous des titres thématiques, car asynchrone signifie que vous ne pouvez obtenir qu'un seul passage.
- Une idée par question, jamais composée, avec un talon de réponse en dessous et une ligne *pourquoi c'est important* uniquement là où une question pourrait être mal interprétée.
- Autorisation explicite de répondre « Je ne sais pas » — une incertitude signalée est utile ; une supposition sûre qui se lit comme un fait ne l’est pas.
- Un fourre-tout final : quelque chose que nous n'avons pas demandé et que nous devrions savoir ?

Deux choses que ce n’est délibérément pas le cas. Il ne s'agit pas de **branchements** : les questions sont une liste plate et groupée, pas un arbre qui saute la section D si vous avez répondu A. Et ce n'est pas **multi-destinataires** : une exécution produit un document pour une personne.

## Questions fréquentes

**Est-ce qu'il lit ma séance de grillades et en extrait les questions ?**

Pas comme une étape en soi. La compétence n'a pas de phase d'ingestion : elle pose des questions sur l'envoi, puis rédige. Ce qui fait que cela fonctionne après une session de grillage, c'est que vous l'exécutez dans la **même conversation**, donc la [session](https://www.aihero.dev/ai-coding-dictionary/session) est déjà dans [context](https://www.aihero.dev/ai-coding-dictionary/context) et la rédaction peut s'en inspirer. Démarrez-le dans une nouvelle session et il ne sait rien du grillage - vous réalimenterez le sujet vous-même lorsque vous répondrez "de quoi avez-vous besoin en retour ?".

**Les réponses manquantes ne vivent pas toutes avec la même personne. Peut-il les diviser par destinataire ?**

Non. La première étape demande *le* destinataire, au singulier, et le ton et le contexte de l'ensemble du document leur sont présentés. Si trois personnes détiennent trois parties de la réponse, exécutez-la trois fois, une fois par personne. L'acheminement des questions par discipline ou par rôle dans un seul document est une demande formulée par les utilisateurs ; ce n'est pas ce qui a été expédié.

**Les questions sont-elles dépendantes ? Est-ce que des sections sont sautées en fonction des réponses précédentes ?**

Non. La conception des questions dépendantes a été explorée et n’a pas été expédiée. Le résultat est un document statique : des groupes thématiques, le plus important en premier, chaque question en direct. L'objection contre cela est juste : un [modèle](https://www.aihero.dev/ai-coding-dictionary/model) planifiant plus de deux ou trois questions avant une vraie réponse planifie mal, et un document de branchement doit toutes les planifier avant chaque réponse.

**Et si le destinataire ne le sait pas non plus ?**

Le document leur dit de le dire. "Je ne sais pas" et des réponses partielles sont demandées explicitement, et une incertitude signalée vaut plus qu'une supposition, car une réponse vague et une réponse fausse avec confiance semblent identiques une fois de retour dans votre contexte.

**Est-ce qu'il l'envoie n'importe où : Slack, un outil de suivi des problèmes, un e-mail ?**

Non, il écrit un fichier Markdown dans le répertoire courant et vous indique le chemin. La livraison vous appartient : collez-le dans un [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket), déposez-le dans un fil de discussion Slack, joignez-le à un e-mail ou ouvrez-le sur un écran partagé et travaillez-le en direct. Les gens ont câblé les quatre à la main.

**N'est-ce pas juste `/grill-me` en mode batch ?**

Non, et la distinction vaut la peine d'être retenue. `grill-me` demande déjà en **tours** — toute la frontière à la fois, puis recalculée à partir de vos réponses — donc le besoin « donnez-moi toutes les questions à la fois » y est satisfait. `to-questionnaire`  concerne un axe différent : non pas la façon dont les questions sont posées, mais dans quelle tête se trouvent les réponses. est `grill-me` ; les sortir de quelqu'un d'autre, c'est ça.

**Ne pourrais-je pas simplement demander cela à l'agent sans compétence ?**

Oui, et beaucoup de gens l'ont fait avant qu'il n'existe — `OPEN_QUESTIONS.md` fichiers, feuilles de calcul envoyées aux clients, ticket « besoin de plus d'informations » par question sans réponse. Cette compétence vous offre deux choses : l'entretien ne dérive jamais sur le sujet et le document sort sous une forme qu'un destinataire non technique peut réellement remplir. Si vous disposez déjà d'un format maison qui fonctionne, la réponse honnête est que vous n'en avez pas besoin.

## Indicateurs de réussite

- Il pose des questions sur le destinataire et sur ce dont vous avez besoin en retour, puis arrête de demander. Une question sur le sujet lui-même est la compétence qui déraille.
- Chaque élément que vous avez nommé « ce dont j'ai besoin » est traçable à une question dans le fichier.
- Les questions se lisent comme visant ce que le *destinataire* sait, et non comme vos propres questions ouvertes copiées textuellement.
- Vous pourriez remettre le fichier à quelqu'un qui n'était pas dans la conversation et il saurait pourquoi il l'a reçu et quand répondre.
- Les réponses qui reviennent sont une entrée utilisable pour un nouveau tour de grillade, plutôt qu'une nouvelle série de questions.

## Où il s’inscrit

`to-questionnaire` est un outil autonome accessible à tout moment. Cela se situe à la limite de vos propres connaissances, là où le prochain mouvement est celui d'une autre personne plutôt que d'une autre compétence - le plus souvent à mi-parcours, lorsque la planification est bloquée sur quelque chose dont vous n'avez pas à décider.

Son voisin est [grill-me](https://aihero.dev/skills-grill-me), et les deux se divisent sur l'endroit où se trouvent les réponses : une grillade vous mine, un questionnaire mine quelqu'un d'autre. Ce qui revient, c'est de la matière première – introduisez-la dans un autre cycle de grillades, ou dans [grill-with-docs](https://aihero.dev/skills-grill-with-docs) ou [to-spec](https://aihero.dev/skills-to-spec) si le travail se dirige vers une construction. Lorsque vous ne savez pas quelle compétence vous convient le mieux, [ask-matt](https://aihero.dev/skills-ask-matt) vous dirige.
