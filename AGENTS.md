# Instructions du dépôt

Les skills sont stockés à plat sous `skills/`, conformément au format natif des plugins Codex. Les index éditoriaux sont organisés sous `catalog/` dans les catégories suivantes :

- `engineering/` — travail quotidien sur le code ;
- `productivity/` — outils de travail quotidiens non liés au code ;
- `marketing/` — travail marketing : conversion, contenu, SEO, payant, mesure, rétention et stratégie ;
- `misc/` — skills conservés mais rarement utilisés ;
- `in-progress/` — skills bêta publiés pour recueillir du retour ;
- `deprecated/` — skills qui ne doivent plus être utilisés.

Les catégories `engineering/`, `productivity/` et `marketing/` sont promues. Chaque skill promu doit être référencé dans le `README.md` racine. Les catégories `misc/`, `in-progress/` et `deprecated/` ne doivent pas apparaître dans cette liste publique.

Le dépôt est distribué comme plugin Codex au moyen de [`.codex-plugin/plugin.json`](./.codex-plugin/plugin.json). Le manifeste pointe vers `./skills/`. Chaque enfant immédiat de ce répertoire doit être un skill contenant son propre `SKILL.md` ; aucun dossier de catégorie ne doit y être ajouté. Tous les skills présents sont installables, mais seuls ceux des catégories promues sont présentés comme stables. Après toute modification du manifeste ou de l’arborescence, exécutez le validateur du skill système `plugin-creator`.

Le dossier [`tools/`](./tools/REGISTRY.md) à la racine contient les guides d’intégration et scripts CLI de la collection marketing (importés de [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills), licence MIT). Il n’est pas distribué par le manifeste du plugin : les skills marketing y renvoient par URLs absolues vers `main`.

Les commandes d’installation sont définies dans [`.agents/install-block.md`](./.agents/install-block.md). La décision de distribuer ce dépôt comme plugin Codex est décrite dans [`.agents/adr/0002-ship-as-a-codex-plugin.md`](./.agents/adr/0002-ship-as-a-codex-plugin.md).

Chaque entrée de skill du `README.md` racine doit lier le nom du skill à son `SKILL.md`.

Chaque catégorie possède un `README.md` sous `catalog/<catégorie>/`. Il répertorie ses skills avec une description d’une ligne et un lien vers leur `SKILL.md`. Les catégories promues et le `README.md` racine regroupent les entrées sous **Invoqués par l’utilisateur** et **Invocables par le modèle**. Les catégories non promues utilisent une liste simple.

Les skills classés dans `engineering/`, `productivity/` et `marketing/` possèdent également une page dans `docs/<catégorie>/<nom-du-skill>.md`. L’arborescence de `docs/` reflète celle de `catalog/`. L’URL publiée reste `https://aihero.dev/skills-<nom-du-skill>`, quelle que soit la catégorie. Lorsqu’un skill promu est ajouté, renommé ou modifié, créez ou resynchronisez sa page selon [`.agents/writing-docs.md`](./.agents/writing-docs.md). Une page complète contient, dans cet ordre, les sections **Ce qu’il fait**, **Quand l’utiliser**, **Questions fréquentes** et **Indicateurs de réussite**. Les catégories non promues n’ont pas de page de documentation publique.

Chaque `SKILL.md` est soit invoqué uniquement par l’utilisateur, soit invocable par le modèle. Pour une invocation exclusivement humaine, ajoutez `policy.allow_implicit_invocation: false` dans le fichier `agents/openai.yaml` voisin. Pour un skill invocable par le modèle, omettez cette règle. Consultez [`.agents/invocation.md`](./.agents/invocation.md).

[`ask-mabza`](./skills/ask-mabza/SKILL.md) est le routeur des skills accessibles à l’utilisateur. Chaque ajout, renommage, suppression ou modification d’un skill invoqué par l’utilisateur doit être répercuté dans ce routeur.

Pour relier les skills aux répertoires locaux utilisés par Codex, exécutez `scripts/link-skills.sh`. Chaque entrée est un lien symbolique vers ce dépôt ; un `git pull` suffit donc à maintenir les skills installés à jour. Relancez le script après l’ajout, la suppression ou le renommage d’un skill.
