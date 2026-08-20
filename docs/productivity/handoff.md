## Ce qu’il fait

`handoff` résume la conversation en cours dans un **document de transfert** : un fichier Markdown écrit dans le répertoire temporaire du système, plutôt que dans l’espace de travail, qu’un nouvel [agent](https://www.aihero.dev/ai-coding-dictionary/agent) peut lire pour reprendre le travail.

Il sert à rendre le travail **transportable**, pas simplement à le raccourcir. Vous n’avez besoin d’un fichier que lorsque le travail doit *voyager* — vers un nouveau [harnais](https://www.aihero.dev/ai-coding-dictionary/harness), un autre répertoire, un collègue ou une tâche secondaire confiée à un autre agent. Si rien ne doit être déplacé, restez dans la [session](https://www.aihero.dev/ai-coding-dictionary/session) en utilisant `/clear`, un [sous-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) ou `/compact` ; c’est le cas normal en fin de phase.

## Quand l’utiliser

Vous l’invoquez en tapant `/handoff` : l’agent ne le déclenchera pas seul. Indiquez le but de la prochaine session ; le document sera rédigé pour permettre cette reprise.

Quatre situations sont le déclencheur :

| Situation | Pourquoi un fichier |
| --- | --- |
| Changement de session ou d’interface Codex | La nouvelle session ne voit pas automatiquement l’ancien [contexte](https://www.aihero.dev/ai-coding-dictionary/context) |
| Déplacement vers un autre répertoire ou dépôt | Un répertoire prototype est le cas courant |
| Envoi du travail à un collègue | Ils ont besoin de quelque chose qu'ils peuvent lire |
| Forking d'une tâche secondaire trouvée à mi-phase | Vous continuez à travailler ; un deuxième agent prend le relais |

Pour tous les autres cas — même harnais, même répertoire, après [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) et avant la mise en œuvre — `/compact` suffit. [ask-mabza](https://aihero.dev/skills-ask-mabza) vous aide à choisir entre les cinq options de fin de phase.

## Le branchement est l'utilisation que les gens ignorent

La description de la compétence évoque une reprise de session : résumer ici, puis reprendre ailleurs. Présentée ainsi, elle peut sembler être un `/compact` moins pratique et être ignorée. Son intérêt principal est plutôt le **transfert parallèle** : vous restez dans votre session et transmettez une copie du contexte accumulé à un deuxième agent qui travaille en parallèle.

C’est exactement le cas du détour par [prototype](https://aihero.dev/skills-prototype). Vous êtes engagé dans une discussion de conception, une question ne peut être tranchée qu’en exécutant du code et vous ne voulez pas interrompre le fil principal. Ouvrez une session de prototype, obtenez la réponse, puis transmettez-la et référencez-la depuis la conversation d’origine. Vous gardez ainsi deux fils actifs sans rien réexpliquer.

Trois des cinq options à une limite de phase préservent différentes choses : `/compact` préserve votre intention, `/clear` ne préserve rien, `/handoff` préserve la capacité de l'œuvre à se déplacer.

## Ce qui voyage et ce qui ne voyage pas

Le document contient le fil de discussion en direct : ce qui est en vol, pourquoi et quelle est la prochaine étape - ainsi qu'une section **compétences suggérées** nommant ce que le prochain agent devrait atteindre. Les secrets sont expurgés avant d'être écrits.

Ce qu’il ne contient délibérément pas, c’est quelque chose de déjà écrit. Les spécifications, plans, ADR, problèmes, commits et différences sont référencés par chemin ou URL, jamais copiés. Cela permet de garder le fichier petit et de conserver les détails réglés au même endroit au lieu de deux qui dérivent.

## Questions fréquentes

**Transfert ou compactage ?**

Choisissez `/compact`, sauf si quelque chose doit réellement être déplacé. Pour rester sur la même tâche, avec le même harnais et le même répertoire, le compactage est plus simple. `/handoff` devient utile lorsque le résultat doit être placé dans un endroit que `/compact` ne peut pas atteindre.

**Alors, quelle est la réelle différence entre compact, clear et handoff ?**

Ces commandes ne préservent pas la même chose. `/compact` réduit le contexte tout en conservant l’intention dans une nouvelle fenêtre. `/clear` vide la fenêtre et repart de zéro ; utilisez-le lorsque ce qui précède peut être abandonné. `/handoff` écrit un fichier transportable, afin que le travail survive à un changement d’endroit. Dans les trois cas, une **[source primaire](https://www.aihero.dev/ai-coding-dictionary/primary-source)** (la conversation originale) devient une **[source secondaire](https://www.aihero.dev/ai-coding-dictionary/secondary-source)** (son résumé). Continuer sans rien faire n’est pas une stratégie : écartez d’abord cette option.

**Où est passé mon fichier de transfert ?**

Le document est écrit dans le répertoire temporaire du système. C’est la principale source de confusion : les chemins sont longs, varient selon le système d’exploitation et peuvent être difficiles à retrouver sous Windows. Demandez le chemin affiché et conservez-le avant de continuer. Ce choix est volontaire : un transfert est un document de transit, pas un artefact permanent.

**Mon transfert a disparu entre les sessions.**

Certains environnements, dont Codex dans certains cas signalés, nettoient le répertoire temporaire entre deux sessions ; `/private/tmp` peut donc être recréé. Si la session suivante ne démarre pas rapidement ou utilise un autre harnais, copiez le fichier vers un emplacement durable dès sa création. La même précaution vaut pour les fichiers référencés par le document : un transfert qui pointe vers d’autres fichiers temporaires ne pourra pas être suivi.

**Comment puis-je le remettre à l'agent suivant ?**

Ouvrez la nouvelle session et donnez-lui le chemin du fichier : lisez ce document, puis poursuivez le travail. Préférez le chemin au collage du résumé dans une commande shell : les accents graves et les expressions `$(...)` peuvent être interprétés dans `codex "<summary>"`, ce qui provoque souvent une troncature silencieuse. Le nouvel agent risquerait alors de partir d’une note de cadrage incomplète sans le savoir.

**Est-ce la même chose que `/branch`, `--fork-session` ou le `/handoff` intégré ?**

Analogue, pas identique, et  `/branch`  n'est pas une compétence livrée ici —  `/handoff`  est le nom canonique. Un fork hérite d’une copie exacte du contexte ; cette compétence produit une compression *ciblée* visant une tâche suivante indiquée, dans un fichier. Là où un fork fera l’affaire – même machine, même harnais, même répertoire – un fork représente moins de travail. Le fichier gagne au moment où la destination se trouve dans un endroit où le fork ne peut pas aller.

**Quand est-ce que quelque chose appartient à `AGENTS.md` à la place ?**

Demandez si c'est vrai le mois prochain. `AGENTS.md` est le contexte permanent du projet, chargé dans chaque session, qu'il soit pertinent ou non. Un transfert concerne une tâche en vol et est mort une fois que cette tâche atterrit. Les faits qui sont sans cesse réexpliqués sont un `AGENTS.md` problème ; une tâche à moitié terminée est un transfert.

**Il capture le quoi, pas le pourquoi.**

Une critique juste et répétée. Deux choses aident. Passez l'argument - dites-lui à quoi sert la prochaine session - afin que le raisonnement qui porte sur *cela* soit conservé plutôt qu'aplati. Et surveillez les affirmations sûres que la session n'a jamais réellement vérifiées : "X n'est pas construit", "Y est terminé". L'agent suivant traite le document comme un contrat et ne le revérifiera pas, donc une croyance écrite comme un fait devient une fausse prémisse pour tout ce qui suit. Lisez le document avant de le remettre et rétrogradez tout ce que vous supposez.

**Pourquoi s'agit-il d'une compétence plutôt que d'une commande slash ?**

Les deux fonctionnent ; ils conviennent à différentes situations. En tant que compétence, elle est livrée et mise à jour via le même chemin d'installation que tout le reste ici, ce qui la rend partageable : la contrainte selon laquelle l'agent ne la déclenchera pas lui-même est définie par sa façade plutôt que par le mécanisme.

## Indicateurs de réussite

- Le document représente une petite fraction de la conversation, et les spécifications, les problèmes et les différences y apparaissent sous forme de chemins et d'URL plutôt que sous forme de texte copié.
- Vous pouvez le lire à froid, sans ouvrir la session d'origine, et savoir quoi faire ensuite.
- Le nouvel agent commence à fonctionner au lieu de vous demander de réexpliquer la configuration.
- Dans le cas du fork, votre session d'origine est toujours là, intacte, lorsque vous y revenez.
- La section des compétences suggérées indique la compétence que vous auriez atteinte vous-même.
- Rien n'est une clé, un jeton ou un mot de passe.

## Où il s’inscrit

`handoff` est un **skill autonome, utilisable à tout moment**, conçu pour faire passer une tâche d’une session à une autre plutôt que pour s’insérer dans la chaîne principale. Son voisin le plus proche est [prototype](https://aihero.dev/skills-prototype), qui travaille lui aussi dans un répertoire séparé avant de restituer un résultat. Lorsque vous hésitez entre continuer, effacer, transférer, déléguer ou compacter, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous aide à choisir.
