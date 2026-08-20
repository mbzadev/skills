## Ce qu’il fait

`codebase-design` corrige les mots que vous utilisez pour concevoir un module : **module**, **interface**, **profondeur**, **couture**, **adaptateur**, **effet de levier**, **localité**. Il définit chacun d'entre eux avec précision, bannit les substituts vagues (« composant », « service », « API », « frontière ») et énonce la poignée de principes qui en découlent.

C'est une référence, pas un processus. Il n’y a pas de boucle à exécuter, aucun artefact produit, aucun point de contrôle où il vous pose une question. Toutes les autres compétences qui touchent au design empruntent leur vocabulaire ; à lui seul, il vous donne la langue et s'arrête. C'est la chose à savoir avant de l'invoquer, car une compétence sans processus ni règle d'arrêt en improvisera un si vous pointez une [session](https://www.aihero.dev/ai-coding-dictionary/session) dessus et dites "go" - voir les questions ci-dessous.

## Quand l’utiliser

Tapez `/codebase-design`, ou l’agent le sélectionne automatiquement lorsqu'une tâche de conception s'y prête.

Utilisez ce skill lorsque vous savez déjà quel code vous êtes en train de repenser et que vous devez réfléchir à sa forme : où va la couture, jusqu'à quel point l'interface peut devenir petite, si une extraction gagne sa vie. C’est aussi ce que vous recherchez pour régler un débat sur la signification d’un mot.

Plusieurs compétences s’en rapprochent. Celui que vous souhaitez dépend du problème réel :

| Le problème | La compétence |
|---|---|
| La forme d'un module — son interface, sa couture, sa profondeur | `codebase-design` |
| Les *mots du domaine* — « compte » signifie trois choses, deux personnes signifient des choses différentes par « annulation » | [modélisation-de-domaine](https://aihero.dev/skills-domain-modeling) |
| Vous ne savez pas encore *quel* module repenser | [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) — l'enquête qui trouve des candidats |
| Vous voulez que le design soit argumenté, pas seulement nommé | [griller](https://aihero.dev/skills-grilling) |
| Il y a un comportement concret à construire et vous voulez des tests qui survivent à une refactorisation | [tdd](https://aihero.dev/skills-tdd) |

## Le vocabulaire

Le glossaire est la compétence. Chaque terme est défini par rapport aux autres, et chacun est accompagné du mot qu'il remplace.

| Terme | Qu'est-ce que cela signifie | Ne dites pas |
|---|---|---|
| **Module** | Tout ce qui a une interface et une implémentation. Délibérément indépendant de l'échelle : une fonction, une classe, un package, une tranche s'étendant sur plusieurs niveaux. | unité, composant, service |
| **Interface** | Tout ce qu'un appelant doit savoir pour l'utiliser correctement : la signature de type, plus les invariants, les contraintes d'ordre, les modes d'erreur, la configuration requise, les caractéristiques de performances. | API, signature |
| **Profondeur** | Tirer parti de l'interface : quel comportement un appelant ou un test peut exercer par unité d'interface qu'il doit apprendre. **Deep** : beaucoup de comportement derrière une petite interface. **Shallow** : l'interface est presque aussi complexe que l'implémentation. | — |
| **Couture** | Le terme de Michael Feathers : un endroit où vous pouvez modifier le comportement sans modifier cet endroit. C'est l'*emplacement* d'une interface, et où la placer est sa propre décision, distincte de ce qui se cache derrière. | frontière |
| **Adaptateur** | Une chose concrète satisfaisant une interface à la limite. Nomme un rôle, pas une substance – un faux en mémoire et un dépôt Postgres sont tous deux des adaptateurs. | — |
| **Tirer parti** | Ce que les appelants obtiennent en profondeur : plus de capacités par unité d'interface apprise. | — |
| ** Localité ** | Ce que les responsables obtiennent en profondeur : les changements, les bogues et la vérification sont concentrés en un seul endroit. Réparé une fois, réparé partout. | — |

La profondeur n'est délibérément *pas* définie comme le rapport entre les lignes d'implémentation et les lignes d'interface, ce qui est la propre définition d'Ousterhout. Cette métrique récompense le remplissage de la mise en œuvre. La profondeur comme levier est utilisée à la place.

## Les quatre principes

- **La profondeur est une propriété de l'interface, pas de l'implémentation.** Un module profond peut être construit en interne à partir de petites pièces échangeables. Ils ne font tout simplement pas surface aux appelants. Un module peut avoir des coutures internes que ses propres tests utilisent, et une couture externe à son interface.
- **Le test de suppression.** Imaginez supprimer le module. Si la complexité disparaît, c’était un passage. S'il réapparaissait chez N appelants, il gagnait sa place.
- **L'interface est la surface de test.** Les appelants et les tests traversent la même couture. Si vous souhaitez tester *au-delà* de l'interface, le module n'a pas la bonne forme.
- **Un adaptateur signifie une couture hypothétique. Deux adaptateurs signifient un vrai.** Ne coupez pas une couture jusqu'à ce que quelque chose varie réellement à travers elle. Une couture à adaptateur unique n’est qu’une indirecte.

Deux fichiers de support vont plus loin et la compétence les lit à la demande plutôt qu'à l'avance. [DEEPENING.md](https://github.com/mbzadev/skills/blob/main/skills/codebase-design/DEEPENING.md) classe les dépendances d'un candidat - en cours, substituables localement, distantes mais détenues, véritablement externes - parce que la catégorie décide de la manière dont le module profond est testé à travers sa couture. [DESIGN-IT-TWICE.md](https://github.com/mbzadev/skills/blob/main/skills/codebase-design/DESIGN-IT-TWICE.md) fait tourner des [sous-agents](https://www.aihero.dev/ai-coding-dictionary/subagent) parallèles pour produire au moins trois interfaces radicalement différentes pour le même module, puis les compare en termes de profondeur, de localité et de placement des coutures.

## Questions fréquentes

**Comment puis-je réellement créer un module profond dans TypeScript ?**

C’est la question la plus fréquente à propos de ce skill, et celui-ci n’y répond pas directement. Il définit ce qu’est un _module profond_, mais pas la manière d’empêcher une importation parasite de contourner l’interface. Le [ticket nº 458](https://github.com/mbzadev/skills/issues/458) expose précisément ce besoin de garde-fous. Trois options sont possibles : encapsuler le module dans une classe ou une IIFE, en acceptant qu’elle puisse devenir volumineuse ; en faire un package dans un monorepo ; ou utiliser un outil de lint comme [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) pour interdire les importations qui contournent l’interface. Le skill bêta `setup-ts-deep-modules` établit une convention `src/packages/<name>/index.ts`, mais ne possède pas de page de documentation publique.

**J'ai pointé une session dessus et il a brûlé 100 000 [jetons](https://www.aihero.dev/ai-coding-dictionary/token) en repensant des choses sur lesquelles je n'avais jamais posé de questions.**

Connu et déposé sous le nom [numéro 449](https://github.com/mbzadev/skills/issues/449). La compétence est invoquée par un modèle et se décrit comme un vocabulaire, mais rien dans celle-ci n'empêche un agent de la traiter comme un processus exécutable. Lorsqu'on lui a demandé de "reprendre la conception de /codebase et de piloter les décisions ouvertes", un agent a recherché le contenu le plus orienté vers l'action qu'il a pu trouver - les sous-agents parallèles dans  `DESIGN-IT-TWICE.md`  - a réexploré le code qu'une session précédente avait déjà cartographié et a parcouru un long chemin avant de demander quoi que ce soit. Aucun des garde-fous dont dispose une compétence de conducteur (points de contrôle, une question à la fois, pas d'avance automatique) n'est présent ici, car une référence n'en a pas. La solution de contournement consiste à nommer une compétence de pilote et à laisser celle-ci se placer en dessous : `/grill-with-docs`, `/improve-codebase-architecture` ou `/tdd` avec `codebase-design`  comme vocabulaire. La question est ouverte.

**Où est passé le `design-an-interface`  ? Et existe-t-il une `/interface-design` compétence ?**

`design-an-interface` a été supprimé et absorbé dans cette compétence. Rien n'a été perdu : sa technique du "concevez-le deux fois" - des sous-agents parallèles générant des conceptions radicalement différentes, d'Ousterhout - est livrée ici sous le nom de `DESIGN-IT-TWICE.md`. Par ailleurs, plusieurs personnes ont demandé une compétence `/interface-design`  dédiée à la philosophie module profond/interface fine ; cette philosophie existe déjà ici et aucune compétence distincte n’est prévue. Si vous êtes venu chercher l’un ou l’autre nom, c’est la page.

**N’est-ce pas une convention de structure de fichiers : dossiers, fichiers barrel, tranches de fonctionnalités ?**

Non, et la compétence a maintenu cette ligne malgré des résistances répétées. [Issue #95](https://github.com/mbzadev/skills/issues/95) a proposé une structure de fichiers d'arbre fractal formalisée comme implémentation concrète de modules profonds ; la réponse a été que les deux sont orthogonaux - "les modules profonds concernent la conception de l'interface et l'accès via une interface stricte, quel que soit l'apparence du système de fichiers. Il semble parfaitement possible que vous puissiez avoir des modules peu profonds avec cette approche." La même chose est apparue dans le numéro 458 : "Je pense que vous associez peut-être trop étroitement le concept de modules au système de fichiers. Le système de fichiers peut certainement être une indication utile sur la forme des modules, mais il n'est pas nécessaire d'utiliser le système de fichiers dans la construction de modules profonds." Le glossaire définit le **module** comme volontairement indépendant de l'échelle.

**Est-ce que `tdd` utilise réellement ce vocabulaire ?**

C’est le cas maintenant. Pendant longtemps, ce n’était pas le cas. Les notes du module profond en ligne qui vivaient à l'intérieur du  `tdd`  ont été supprimées dans la version 1.0 au profit de cette compétence partagée, mais le pointeur les remplaçant n'a jamais été ajouté - donc  `tdd`  a défini "couture" pour lui-même et n'a fait référence à rien. L'écart est comblé : le pointeur est maintenant dans la compétence, atteint lorsque la forme de l'interface est la question ouverte plutôt que les tests. `tdd`  possède toujours la "couture" comme limite à laquelle vous *testez* ; cette compétence possède la forme du module derrière elle.

**Le modèle design-it-twice fonctionne-t-il dans Codex ?**

Oui. La phase demande plusieurs sous-agents en parallèle afin de produire au moins trois interfaces radicalement différentes. Dans Codex, utilisez le mécanisme de sous-agents disponible et comparez ensuite les propositions selon la profondeur, la localité et le placement des coutures. Si les sous-agents ne sont pas disponibles dans l’environnement courant, exécutez les variantes séquentiellement.

**Puis-je ajouter mes propres concepts au glossaire : connascence, secrets de module, [divulgation progressive](https://www.aihero.dev/ai-coding-dictionary/progressive-disclosure) ?**

C’est exactement ce que les gens ont proposé. [Issue #180](https://github.com/mbzadev/skills/issues/180) ajoute les secrets du module de Parnas et la connaissance de Page-Jones en tant que couche de dénomination pour *ce* qui fuit à travers une couture, avec un différentiel de travail attaché ; [numéro 303](https://github.com/mbzadev/skills/issues/303) propose une divulgation progressive au sein de l'implémentation, de sorte qu'un module qui est profond au niveau de son interface publique n'est pas une dalle indifférenciée en dessous. Les deux sont ouverts et non fusionnés. Le glossaire tel qu'il est livré est délibérément petit, et la raison pour laquelle il reste petit est indiquée dans la compétence elle-même : un langage cohérent est tout l'intérêt, et un terme que personne n'utilise de manière cohérente est pire que pas de terme.

## Indicateurs de réussite

- La conversation de conception arrête de produire les mots « composant », « service » et « limite », et commence à produire « module », « interface » et « couture ».
- Quelqu'un peut pointer du doigt une extraction proposée et dire si elle réussit le test de suppression, sans couverture.
- Une couture proposée est livrée avec un deuxième adaptateur nommé, pas seulement le premier.
- La discussion sur une interface couvre les invariants, les modes d'ordre et d'erreur - pas seulement la signature de type.
- L'invoquer ne démarre pas de session. Si l'agent commence à lire des fichiers et à proposer des refactorisations à partir de `/codebase-design`  seul, il a confondu la référence avec un pilote.

## Où il s’inscrit

`codebase-design` est un **skill autonome, utilisable à tout moment**, et la couche de vocabulaire sous les compétences d'ingénierie plutôt qu'une étape dans une chaîne. Son voisin le plus proche est [domain-modeling](https://aihero.dev/skills-domain-modeling), la référence parallèle pour les mots du *domaine problématique* plutôt que pour la forme du module – les deux sont généralement recherchés ensemble, car nommer un module profond a bien besoin des deux. [améliorer-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) est l'autre : il étudie une base de code pour approfondir les candidats et écrit chacun d'eux dans ce glossaire, il trouve donc le module et cette compétence est le banc sur lequel vous le concevez. Lorsque vous ne savez pas quelle compétence ou quel flux vous convient, [ask-mabza](https://aihero.dev/skills-ask-mabza) vous dirige.
