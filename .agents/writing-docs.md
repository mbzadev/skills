# Rédaction des pages de documentation

Chaque skill classé dans `engineering/` ou `productivity/` sous `catalog/` possède une page de documentation destinée aux utilisateurs dans `docs/<catégorie>/<nom-du-skill>.md`. Les skills eux-mêmes restent stockés à plat sous `skills/`, comme l’exige le format des plugins Codex. La page est publiée à `https://aihero.dev/skills-<nom-du-skill>` quelle que soit sa catégorie. Elle présente le skill sans recopier son `SKILL.md`. Les catégories `misc/`, `in-progress/` et `deprecated/` ne disposent d’aucune page publique.

La plupart de ces **skills** sont **invocées par l'utilisateur** : l'agent ne les lancera jamais pour vous, de sorte que *vous* êtes l'index qui doit se souvenir de leur existence et de quand il faut les utiliser. Ce souvenir constitue une **charge cognitive**. Le rôle d'une page de documentation est de la soulager — d'orienter un lecteur autour d'un seul skill afin qu'il puisse le garder en tête, savoir quand l'utiliser et voir où il se situe dans le système. Les pages forment collectivement un routeur distribué ; chacune est un nœud.

Agissez dès qu’un skill promu est ajouté, renommé ou modifié : créez ou resynchronisez sa page. Un renommage déplace aussi le fichier (`docs/<catégorie>/<ancien>.md` → `docs/<catégorie>/<nouveau>.md`) puisque l’URL publiée suit le nom. Un changement entre `engineering/` et `productivity/` déplace la page vers le dossier correspondant. Un skill promu depuis une catégorie non publique acquiert une page ; un skill rétrogradé la perd.

Comme ces pages sont publiées sur `aihero.dev`, **chaque lien est absolu**. Un lien vers un autre skill pointe vers `https://aihero.dev/skills-<nom>` ; un lien vers le dépôt utilise l’URL complète `https://github.com/mbzadev/skills/...`. Un lien relatif fonctionnant dans le dépôt serait rompu après publication.

Il n'y a pas de H1 — la page publiée prend son titre depuis le slug.

## Structure de la page

Remplissez le modèle ci-dessous dans l’ordre indiqué. Le cadre fixe — `## Ce qu’il fait`, `## Quand l’utiliser` et `## Où il s’inscrit` — apparaît sur chaque page. La section `## Prérequis` et les sections libres ne contiennent que ce dont le skill concerné a réellement besoin.

Quatre sections donnent sa valeur à la page : `Ce qu’il fait`, `Quand l’utiliser`, `Questions fréquentes` et `Indicateurs de réussite`. Les deux premières orientent le lecteur ; les deux suivantes répondent à ses situations concrètes. Une page qui ne contient ni véritables questions ni critères observables reste inachevée.

**Une page ne contient aucune commande d'installation.** Le modèle de page d’aihero.dev affiche déjà le module d’installation — bouton de copie, commande pour un seul skill, commande pour l’ensemble et commande de mise à jour — au-dessus du contenu. Répéter ces commandes dans la page les afficherait deux fois et créerait deux versions susceptibles de diverger. La formulation des instructions d’installation appartient au site, pas à chaque page. Si elle doit évoluer, modifiez-la dans aihero.dev ; la version canonique se trouve dans [le bloc d'installation](./install-block.md).

<page-template>

## Ce qu’il fait

Un ou deux paragraphes en langage courant. Commencez par la mission en une phrase de la skill, puis énoncez la **contrainte définissante** — le fait unique qui fait que cette skill se comporte différemment de la valeur par défaut évidente (pour `to-spec` : elle ne re-questionne pas l'utilisateur, elle synthétise ce qui est déjà connu). Rédigez-la comme une phrase déclarative simple — jamais une aside étiquetée comme « La contrainte définissante : » ou « L'élément clé : » ; la formule se lit comme du remplissage. Cette ligne est la plus précieuse sur la page ; ne l'ompez jamais.

## Quand l’utiliser

Comment et quand vous saisissez la skill — deux points, tous deux effectivement toujours présents :

- **Mode d’invocation.** Précisez si l’utilisateur appelle le skill ou si Codex peut le déclencher. Pour un skill réservé à l’utilisateur : « Invoquez-le avec `/<nom>` ; Codex ne le déclenche pas seul. » Pour un skill invocable par le modèle : « Appelez `/<nom>`, ou laissez Codex le sélectionner lorsqu’une tâche correspond. »
- **Limite de déclenchement.** Écrivez « utilisez ce skill lorsque… ». S’il peut être confondu avec un voisin, ajoutez « pour <X>, utilisez plutôt [<skill voisin>](https://aihero.dev/skills-<skill-voisin>). »

## Prérequis

Optionnel — incluez-le uniquement lorsque le skill dépend d’un élément préalable ; sinon, omettez entièrement la section. Cela couvre un **espace de travail dans lequel il écrit** — `grill-with-docs` crée `CONTEXT.md` et des ADR, tandis que `teach` construit un répertoire entier —, une **configuration préalable** — `triage`, `to-spec` et `to-tickets` nécessitent un outil de suivi configuré par `setup-matt-pocock-skills` — ou des **outils propres au dépôt**. Un skill sans état qui fonctionne partout n’a pas de prérequis.

## <section libre>

Une à trois sections courtes, dans le *vocabulaire propre* du skill, qui le rendent intuitif — choisissez les intitulés adaptés : la boucle qu’il exécute, l’artefact qu’il produit, l’embranchement qu’il crée ou l’anti-modèle qu’il élimine. Aucun intitulé précis n’est imposé ; les skills sont trop différents pour partager une structure centrale unique.

L’exigence non négociable consiste à **mettre en avant le terme principal ou l’idée définissante du skill** : boucle de rétroaction courte, module profond, code jetable qui répond à une question, rouge-vert. Le lecteur comprend ainsi ce qu’est le skill et retient le terme qui lui permettra de le retrouver.

## Questions fréquentes

Les questions que les lecteurs posent vraiment à propos de cette skill, chacune en gras avec la réponse dans les lignes qui suivent — sans sous-titres.

Une question observée bat toujours une question inventée, alors allez les chercher avant d'écrire quoi que ce soit :

- **Le wiki.** Si `~/repos/matt/personal-wiki` il existe sur cette machine, c'est la source la plus riche qui soit. Sa `wiki/audience/` zone est organisée autour de ce que le public veut, discute et **est confus par** — lisez `wiki/index.md` d'abord pour le registre des pages, puis les pages relatives à cette skill. Chaque page contient `sources:` des liens vers les fils d'origine X, Discord, GitHub et email ; le wiki est une source secondaire, alors citez la question propre de l'interrogé plutôt que le résumé du wiki. Omettez ce point si le répertoire n'existe pas.
- **Les tickets du dépôt.** `gh issue list --repo mbzadev/skills --search "<nom-du-skill>" --state all`. Une question posée deux fois mérite une réponse dans la page.
- **`CHANGELOG.md`.** Tout ce qui a été renommé, déplacé ou dont le comportement a changé génère un « où est-ce que c'est parti ? » que la page doit répondre.

Là où la recherche reste maigre, la section peut aussi porter une question qu'un lecteur poserait clairement — mais **le nombre reste honnête par rapport aux preuves**. Une skill bien discutée en vaut six ; une obscure en vaut une ou deux, ou rien du tout. Remplir une skill maigre pour qu'elle corresponde à une riche est la façon dont la section se remplit de questions que personne n'a, et une question inventée n'apprend rien au lecteur.

Classez-les de la plus fréquente à la moins fréquente et dites aussi ce qui dérange lorsque c’est vrai : une très longue session de questions signifie généralement que le périmètre était trop vaste ; un modèle chargé d’écrire son propre skill produit souvent un résultat verbeux. Omettez la section s’il n’existe aucune question qui mérite une réponse.

## Indicateurs de réussite

Quelques points clés décrivant ce que le lecteur observe lorsque le skill accomplit sa tâche. Chaque indicateur doit pouvoir être vérifié sans ouvrir `SKILL.md`, dans le travail produit ou dans la trace affichée. « Le document se raccourcit à mesure qu’il s’améliore » convient ; « la section de bibliothèque est identique à `template.sh` octet pour octet » vérifie seulement un détail interne du skill. Ajoutez cette section lorsque les indicateurs sont nets ; omettez-la lorsqu’ils restent flous.

## Où elle s'inscrit

Toujours présente. Situez la skill dans le système en une ou deux phrases :

- **Rôle.** Nommez-le : étape d’une chaîne (`grill-with-docs → to-spec → to-tickets → implement → code-review`), configuration unique (`setup-matt-pocock-skills`), maintenance périodique (`improve-codebase-architecture`) ou outil autonome disponible à tout moment (`diagnosing-bugs`, `prototype`, `handoff`).
- **Voisins.** Les un ou deux frères qui comptent, chacun avec une clause de cause, liés absolument.
- **La carte.** Pointez vers [ask-matt](https://aihero.dev/skills-ask-matt), le routeur couvrant l'ensemble, afin que cette page reste un nœud et n'ait jamais besoin de redessiner le graphe.

</page-template>

## Conventions

- Expliquez le **pourquoi**, pas le processus. La page oriente et situe le skill ; elle ne reproduit jamais les étapes du `SKILL.md` ni les modèles complets. Une personne qui choisit un outil n’a pas besoin de son mode opératoire détaillé.
- **Ne nommez jamais l’auteur.** La page est un document technique, pas le compte rendu de qui a dit quoi. « Matt dit », « sa réponse », « sa position » ou une réponse citée disparaissent. Conservez la découverte, mais exprimez-la comme une affirmation simple sur le skill : « la correction est une instruction directe » ou « la séparation dépend du nombre de sessions ». Citer un _utilisateur_ reste acceptable lorsqu’il s’agit d’une preuve d’usage réelle et anonyme.
- Utilisez les **termes principaux** du skill — couture, module profond, balle traçante — afin que la page et le skill parlent le même langage.
- **Utilisez le terme du dictionnaire de codage par IA [AI Coding Dictionary](https://www.aihero.dev/ai-coding-dictionary) lorsqu'il existe, et liez sa première occurrence sur la page.** Le dictionnaire constitue le vocabulaire de référence pour le codage par IA : _context window_, _subagent_, _harness_, _primary source_, _agent mode_. Préférez son terme à un synonyme que vous inventeriez. Liez la première occurrence de chaque terme à `https://www.aihero.dev/ai-coding-dictionary/<slug>` (le slug est le terme en minuscules avec les non-alphanumériques remplacés par des tirets : _context window_ → `context-window`), et laissez toutes les occurrences ultérieures sans lien. Liez uniquement lorsque le mot porte le sens du dictionnaire : un modèle de domaine *model*, un contexte de fond *context* ou un jeton d'authentification *token* sont des mots différents qui coïncident simplement. Ne liez jamais à l'intérieur d'un titre, d'une balise de code ou d'un lien existant, et ne liez jamais un mot qui désigne une skill dans ce dépôt plutôt que le concept. Pour la liste complète des termes, lisez `~/repos/ai/ai-coding-dictionary/dictionary/` s'il existe sur cette machine — un fichier par terme, le nom du fichier *est* le terme — et sinon [mattpocock/dictionary-of-ai-coding](https://github.com/mattpocock/dictionary-of-ai-coding), qui est la source de vérité dans tous les cas.
- **Les embranchements figurent dans un tableau ou une liste, jamais dans un paragraphe.** Lorsque la page présente plusieurs artefacts, déclencheurs ou options, le lecteur doit pouvoir repérer directement la ligne correspondant à sa situation. Cette règle s’applique surtout dans `## Quand l’utiliser` et les sections libres.
- Gardez la page elle-même à faible charge. Il s'agit de documentation *sur* des skills à faible charge cognitive ; le mobilier (titres superflus, liens réitérés) est ce contre quoi elle s'élève.

## Terminé lorsque

- La page existe à `docs/<catégorie>/<nom>.md`, et aucune page obsolète ne survit à un renommage ou à un changement de catégorie.
- La page ne porte aucun lien source et n'écrit aucune commande d'installation de sa propre initiative.
- `## Ce qu’il fait` énonce la contrainte définissante en prose simple.
- La page ne nomme aucun auteur et ne cite aucun auteur — chaque affirmation se tient sur ses propres pieds.
- `## Quand l’utiliser` précise le mode d’invocation et la limite de déclenchement.
- `## Où il s’inscrit` nomme le rôle et renvoie vers `ask-matt`.
- Une condition préalable (espace de travail, configuration préalable, outillage) est énoncée lorsqu'elle existe, et la section est absente lorsqu'aucune n'existe.
- La partie centrale met en avant le mot principal.
- Chaque terme du Dictionnaire de l'IA Coding utilisé par la page est orthographié selon la manière du dictionnaire, et son premier usage — et uniquement son premier usage — lie vers l'entrée du dictionnaire.
- Chaque embranchement multi-voies est un tableau ou une liste, et non un paragraphe que le lecteur doit lire en entier.
- La recherche de vraies questions a eu lieu — wiki, tickets et journal des modifications — et `## Questions fréquentes` reste proportionné aux preuves trouvées.
- Chaque point de `## Indicateurs de réussite` est vérifiable sans ouvrir `SKILL.md`.
- Les sections apparaissent dans l'ordre du modèle.
- Chaque lien est absolu, et chacun se résout.
