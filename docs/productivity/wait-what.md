## Ce qu’il fait

`wait-what` s’utilise lorsqu’un message n’est pas clair. L’[agent](https://www.aihero.dev/ai-coding-dictionary/agent) reformule alors son propos, ajoute le contexte manquant, écrit en français clair et reprend le vocabulaire du `CONTEXT.md` du projet.

La compétence fait trois lignes. Il s'agit d'une conception, et non d'une ébauche inachevée. Les compétences qui combattent la verbosité échouent en grandissant : une compétence de concision de quatre cents lignes laisse toujours le [modèle](https://www.aihero.dev/ai-coding-dictionary/model) verbeux, car le modèle lit le volume, pas le plaidoyer. Celui-ci porte un seul mot principal précis et rien d'autre.

## Quand l’utiliser

Vous l'invoquez en tapant `/wait-what`. L'agent ne l'atteindra pas tout seul, et il ne devrait pas l'atteindre. Vous seul savez quand vous avez arrêté de suivre.

Utilisez-le dès que vous remarquez que vous parcourez. L'agent a dérivé dans le jargon qu'il a inventé, empilé cinq acronymes ou expliqué une décision dont vous n'avez jamais vu les prémisses. Il corrige la conversation dans laquelle vous êtes déjà. Pour empêcher l'arrivée du jargon, utilisez [grill-with-docs](https://aihero.dev/skills-grill-with-docs), qui crée le langage partagé à l'avance.

## Le nom est le mécanisme

Le mot principal est **attendez**. « Soyez concis » est une instruction concernant le résultat de l'agent, et le modèle y obéit en coupant les mots et en vous perdant davantage. **Attendez** concerne *votre* état. Il est dit que la compréhension a échoué ici. Un agent qui entend « soyez bref » écrit des télégrammes. Un agent qui entend « attendez, vous m'avez perdu » recule et explique.

Cette différence est toute la compétence. Chaque correctif populaire pour la verbosité nomme la *sortie* : `/tldr`, `/no-fluff`, `/talk-normal`. Le modèle est surcorrigé vers un registre de « homme des cavernes », plus court mais pas plus clair. Nommer l'*auditeur* demande les deux moitiés simultanément : moins de mots **et** le contexte qui vous manquait.

La compétence dit de relancer **ce**, pas « ce dernier message ». Ce qui vous a perdu dépasse généralement un paragraphe ; c'est donc l'agent qui décide jusqu'où remonter.

## Il se branche sur la langue que vous possédez déjà

Le corps réutilise les mots principaux déjà présents dans votre `AGENTS.md`  global et dans celui de votre projet `CONTEXT.md`. L'anglais technique simplifié ASD-STE100 définit le registre. La langue omniprésente fournit les noms. La compétence  `AGENTS.md`  et  `CONTEXT.md`  atteignent les mêmes [jetons](https://www.aihero.dev/ai-coding-dictionary/token), donc l'invoquer n'est pas une nouvelle instruction. C'est un rappel de celui que l'agent a déjà accepté.

Si vous n'avez pas de `CONTEXT.md`, la compétence fonctionne toujours. Vous ne perdez que la moitié du vocabulaire du domaine.

## Questions fréquentes

**Puis-je l’utiliser plusieurs fois dans la même conversation ?**

Oui. Chaque invocation reformule le passage qui vient de vous perdre. Si la seconde reformulation reste obscure, invoquez de nouveau le skill en indiquant précisément le terme ou la prémisse qui manque.

## Indicateurs de réussite

- Le nouveau pitch est **plus court et plus clair**, pas plus court et plus brutal.
- Il ajoute la prémisse qui vous manquait, au lieu de simplement supprimer des mots.
- Les noms de projet remplacent ceux inventés. Les termes de votre `CONTEXT.md` reviennent.
- Vous pouvez l'utiliser deux fois de suite, et il ne se dégrade pas en concision.

## Où il s’inscrit

Vous pouvez utiliser `wait-what` à tout moment, dans n'importe quelle conversation, dans n'importe quelle autre compétence. Il corrige un message après coup. La véritable solution est un langage partagé convenu dès le départ, et c'est [grill-with-docs](https://aihero.dev/skills-grill-with-docs) : une session [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) qui exécute [domain-modeling](https://aihero.dev/skills-domain-modeling) afin que les mots que vous utilisez tous les deux atterrissent dans votre `CONTEXT.md`. Si vous ne savez pas quelle compétence vous convient le mieux, [ask-matt](https://aihero.dev/skills-ask-matt) vous guide.
