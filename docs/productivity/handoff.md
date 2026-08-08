## Ce qu’il fait

`handoff` compacte la conversation dans laquelle vous vous trouvez dans un **document de transfert** — un fichier Markdown, écrit dans le répertoire temporaire de votre système d'exploitation plutôt que dans l'espace de travail, qu'un nouveau [agent](https://www.aihero.dev/ai-coding-dictionary/agent) peut lire pour reprendre le travail.

Ce qu'il achète, c'est de la **portabilité**, pas de la compression. Cela rend la compétence plus restreinte qu’il n’y paraît. Vous n'avez besoin d'un fichier que lorsque le travail doit *voyager* — vers un nouveau [harnais](https://www.aihero.dev/ai-coding-dictionary/harness), un nouveau répertoire, un collègue ou une tâche secondaire que vous souhaitez confier. Si rien ne voyage, vous n'avez pas besoin de transfert : rester dans les [session](https://www.aihero.dev/ai-coding-dictionary/session), `/clear`, un [sous-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) et `/compact`  couvre le cas ordinaire de fin de phase, et `/compact` le couvre plus souvent que cette compétence.

## Quand l’utiliser

Vous l'invoquez en tapant `/handoff`  : l'agent ne l'atteindra pas tout seul. Passez une note sur le but de la prochaine session et le document est rédigé à cet effet.

Quatre situations sont le déclencheur :

| Situation | Pourquoi un fichier |
| --- | --- |
| Changement de session ou d’interface Codex | La nouvelle session ne voit pas automatiquement l’ancien [contexte](https://www.aihero.dev/ai-coding-dictionary/context) |
| Déplacement vers un autre répertoire ou dépôt | Un répertoire prototype est le cas courant |
| Envoi du travail à un collègue | Ils ont besoin de quelque chose qu'ils peuvent lire |
| Forking d'une tâche secondaire trouvée à mi-phase | Vous continuez à travailler ; un deuxième agent prend le relais |

Pour tout le reste - même harnais, même répertoire, vous avez terminé [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) et passez à la mise en œuvre -  `/compact` est le pas. [ask-matt](https://aihero.dev/skills-ask-matt) transporte l'arbre ordonné sur les cinq options à une limite de phase.

## Le branchement est l'utilisation que les gens ignorent

La description de la compétence se lit comme une reprise de session : rédiger une synthèse, terminer ici, reprendre là. Lisez de cette façon, cela ressemble à un pire `/compact`, donc il est survolé. Le boîtier de la fourche est celui qui mérite d'être connu. Vous **restez dans votre session** et remettez une copie du contexte accumulé à un deuxième agent travaillant en parallèle.

C'est ce qu'utilise le détour par [prototype](https://aihero.dev/skills-prototype). Vous êtes plongé dans une conversation de conception, vous vous posez une question que seule l'exécution du code permettra de résoudre et vous ne voulez pas consacrer le fil de discussion que vous avez construit à la découverte. Passez à une session de prototype, obtenez la réponse, remettez la réponse et référencez-la à partir du fil de discussion d'origine. Deux croisements, une conversation en direct, rien de réexpliqué.

Trois des cinq options à une limite de phase préservent différentes choses : `/compact` préserve votre intention, `/clear` ne préserve rien, `/handoff` préserve la capacité de l'œuvre à se déplacer.

## Ce qui voyage et ce qui ne voyage pas

Le document contient le fil de discussion en direct : ce qui est en vol, pourquoi et quelle est la prochaine étape - ainsi qu'une section **compétences suggérées** nommant ce que le prochain agent devrait atteindre. Les secrets sont expurgés avant d'être écrits.

Ce qu’il ne contient délibérément pas, c’est quelque chose de déjà écrit. Les spécifications, plans, ADR, problèmes, commits et différences sont référencés par chemin ou URL, jamais copiés. Cela permet de garder le fichier petit et de conserver les détails réglés au même endroit au lieu de deux qui dérivent.

## Questions fréquentes

**Transfert ou compactage ?**

`/compact` sauf si quelque chose voyage. Rester sur la même tâche est un processus compact, pas un transfert - même harnais, même répertoire, et vous devez rester dans la boucle, c'est là que l'arbre des limites de phase atterrit la plupart du temps. L'avantage de  `/handoff` n'est pas qu'il résume mieux ; c'est que le résultat est un fichier que vous pouvez transporter quelque part `/compact` vous ne pouvez pas atteindre.

**Alors, quelle est la réelle différence entre compact, clear et handoff ?**

Trois choses différentes sont préservées. `/compact` compresse ce contexte et vous maintient dans une nouvelle fenêtre - l'intention survit. `/clear` vide la fenêtre et repart de rien - corrigez lorsque tout derrière vous est jetable, et à sens unique si ce n'est pas le cas. `/handoff` écrit un fichier portable - l'œuvre survit au déplacement vers un autre endroit. Notez que tous les trois transforment une **[source primaire](https://www.aihero.dev/ai-coding-dictionary/primary-source)** (la conversation telle qu'elle s'est produite) en une **[source secondaire](https://www.aihero.dev/ai-coding-dictionary/secondary-source)** (un résumé de celle-ci). Continuer est la seule décision qui ne fonctionne pas, c'est pourquoi c'est la première à exclure.

**Où est passé mon fichier de transfert ?**

Le répertoire temporaire, qui constitue la friction la plus signalée avec la compétence : les chemins sont longs, ils diffèrent selon le système d'exploitation et, sous Windows, les agents mettent parfois plusieurs tentatives pour trouver le bon. Demandez le chemin du retour et conservez-le avant de continuer. La temporaire est délibérée : un transfert est un document de transit, pas un artefact que vous conservez. Ce n’est pas non plus durable – voir la question suivante.

**Mon transfert a disparu entre les sessions.**

Certains environnements effacent la température entre les sessions - le Codex est le cas signalé - et `/private/tmp`  redémarre. Si la prochaine session ne démarre pas dans l'heure ou démarre sous un harnais différent, copiez vous-même le fichier dans un endroit durable dès qu'il est écrit. La même chose s'applique à tout ce que le document *pointe* : une répartition qui fait référence à d'autres fichiers temporaires est une répartition que l'agent suivant ne peut pas suivre.

**Comment puis-je le remettre à l'agent suivant ?**

Ouvrez la nouvelle session et pointez-la sur le chemin : lisez ce fichier, puis continuez. Pointez sur le fichier plutôt que de coller le résumé dans une commande shell - un résumé contenant des backticks ou  `$(...)`  est mutilé lorsqu'il est interpolé dans  `codex "<summary>"`, et l'échec habituel est une troncature silencieuse plutôt qu'une erreur, de sorte que le nouvel agent commence par un brief discrètement incomplet.

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

`handoff` est un **autonome accessible à tout moment** qui vit à la jointure entre les sessions plutôt qu'à l'intérieur d'une chaîne de construction - mais il est étroit, et la carte honnête est que vous l'utiliserez moins souvent que les quatre autres options à une limite de phase. Son voisin le plus proche est [prototype](https://aihero.dev/skills-prototype), car un prototype vit dans son propre répertoire et l'aller-retour est exactement le croisement auquel cette compétence est destinée. Lorsque vous êtes à une limite et que vous ne savez pas si vous devez continuer, effacer, transférer, déléguer ou compacter, [ask-matt](https://aihero.dev/skills-ask-matt) transporte l'arbre qui commande ces cinq éléments - et vous achemine sur le reste de l'ensemble.
