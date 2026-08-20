## Ce qu’il fait

`wait-what` s’utilise lorsqu’un message n’est pas clair. L’[agent](https://www.aihero.dev/ai-coding-dictionary/agent) reformule alors le passage concerné, ajoute le contexte manquant, écrit en français clair et reprend le vocabulaire du `CONTEXT.md` du projet.

La compétence tient en trois lignes. C’est un choix de conception, pas une ébauche incomplète. Les skills conçus pour réduire la verbosité échouent souvent en grossissant : un skill de quatre cents lignes laisse le [modèle](https://www.aihero.dev/ai-coding-dictionary/model) verbeux, car le modèle tient compte du volume plutôt que des explications. Celui-ci repose sur un seul mot déclencheur précis, sans ajout superflu.

## Quand l’utiliser

Vous l’invoquez en tapant `/wait-what`. L’agent ne le déclenchera pas seul, et c’est volontaire : vous seul savez à quel moment vous avez perdu le fil.

Utilisez-le dès que vous constatez que vous ne suivez plus. L’agent a peut-être dérivé vers un jargon qu’il a inventé, empilé des acronymes ou expliqué une décision dont les prémisses vous échappent. Le skill corrige alors la conversation en cours. Pour éviter ce problème, utilisez [grill-with-docs](https://aihero.dev/skills-grill-with-docs), qui établit le langage partagé dès le départ.

## Le nom est le mécanisme

Le mot déclencheur est **attendez**. « Soyez concis » décrit le résultat attendu et pousse le modèle à supprimer des mots, parfois au détriment de la compréhension. **Attendez** décrit *votre* état : il indique que la compréhension a échoué. Un agent qui entend « soyez bref » écrit des télégrammes ; un agent qui entend « attendez, vous m’avez perdu » revient en arrière et explique.

Cette différence est toute la compétence. Chaque correctif populaire pour la verbosité nomme la *sortie* : `/tldr`, `/no-fluff`, `/talk-normal`. Le modèle est surcorrigé vers un registre de « homme des cavernes », plus court mais pas plus clair. Nommer l'*auditeur* demande les deux moitiés simultanément : moins de mots **et** le contexte qui vous manquait.

La compétence dit de relancer **ce**, pas « ce dernier message ». Ce qui vous a perdu dépasse généralement un paragraphe ; c'est donc l'agent qui décide jusqu'où remonter.

## Il se branche sur la langue que vous possédez déjà

Le corps réutilise les mots principaux déjà présents dans votre `AGENTS.md` global et dans le `CONTEXT.md` de votre projet. L’anglais technique simplifié ASD-STE100 en fixe le registre et le vocabulaire partagé fournit les noms. La compétence s’appuie sur les mêmes [jetons](https://www.aihero.dev/ai-coding-dictionary/token) que `AGENTS.md` et `CONTEXT.md` ; elle ne crée donc pas une nouvelle instruction, mais rappelle à l’agent un langage qu’il a déjà adopté.

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

`wait-what` s’utilise à tout moment, dans n’importe quelle conversation ou dans n’importe quel autre skill. Il corrige un message après coup. La solution durable consiste à établir un langage partagé dès le départ avec [grill-with-docs](https://aihero.dev/skills-grill-with-docs) : une session de [grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) qui utilise [domain-modeling](https://aihero.dev/skills-domain-modeling) pour inscrire les termes communs dans votre `CONTEXT.md`. En cas de doute, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous guide.
