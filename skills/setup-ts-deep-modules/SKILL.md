---
name: setup-ts-deep-modules
description: "Configurez l’analyseur de dépendances dans un dépôt TypeScript afin que chaque package soit un module profond : son implémentation reste cachée dans les sous-dossiers et n’est accessible que par ses points d’entrée. Invoqué par l’utilisateur."
---

# Configuration des modules profonds TS

Faites de chaque package de ce dépôt un **module profond** : beaucoup de comportement derrière une petite interface. La surface publique d’un package se compose de ses **points d’entrée** — les fichiers situés à sa racine —, tandis que le contenu de ses sous-dossiers reste privé. Ce skill installe [dependency-cruiser](https://github.com/sverweij/dependency-cruiser), configure les règles qui imposent ces points d’entrée, puis vérifie que les violations sont bien détectées.

Pour le vocabulaire (module profond, interface, couture, profondeur), exécutez la compétence `/codebase-design`  — utilisez son langage partout.

## La forme appliquée

```
src/packages/
  <name>/
    index.ts        ← point d’entrée public, à importer depuis l’extérieur
    client.ts       ← autre point d’entrée ; un package peut en exposer PLUSIEURS
    lib/            ← implémentation cachée de l’extérieur ; imports internes libres
    tests/          ← tests et fixtures colocalisés dans un sous-dossier privé
```

La surface publique est constituée des **fichiers racine** du paquet — et non de ceux désignés `index.ts`. Par convention, l'implémentation réside dans `lib/` et est testée dans `tests/`, donnant à chaque package la même forme à deux dossiers. La règle elle-même est cependant générale : *tout* dans *n'importe quel* sous-dossier est privé, vous n'étendez donc jamais la configuration pour ajouter un dossier.

Quatre règles, toutes `error` :

1. **Limite du point d'entrée** — le code en dehors d'un package (code d'application ou autre package) ne peut importer que les points d'entrée de ce package (ses fichiers racine), jamais rien dans ses sous-dossiers.
2. **Liberté intra-package** — les fichiers d'un package s'importent librement les uns les autres.
3. **Tests via les points d'entrée** — les fichiers sous `<pkg>/tests/`  peuvent importer les points d'entrée de n'importe quel package et leurs propres appareils `tests/` , mais jamais les composants internes d'un sous-dossier d'un package (pas même les leurs). Les tests d'intégration entre les packages conviennent ; les importations importantes ne le sont pas.
4. **Aucun cycle** — pas de cycles de dépendance.

**Des points d’entrée, pas un fichier agrégateur.** Comme la surface publique comprend *chaque* fichier racine, un package peut exposer plusieurs petits points d’entrée (`index.ts`, `client.ts`, `server.ts`) au lieu de tout canaliser par un énorme `index.ts`. Les fichiers d’agrégation qui réexportent un sous-arbre entier sont déconseillés : gardez les points d’entrée petits et masquez l’implémentation dans des sous-dossiers.

La définition des couches — quels packages peuvent dépendre de quels autres — constitue une préoccupation *distincte*. La configuration n’en fournit qu’une ébauche commentée, à adapter au dépôt concerné.

## Étapes

### 1. Détecter l'environnement

- **Gestionnaire de packages** — `pnpm-lock.yaml` → pnpm, `yarn.lock` → Yarn, `bun.lockb` → Bun, sinon npm. Utilisez-le pour chaque commande ci-dessous (`pnpm`, `yarn`, `npm run` ou `bunx`).
- **Racine des packages** — si `src/` existe, utilisez `src/packages`, sinon `packages`. Confirmez le choix avec l'utilisateur si le dépôt a déjà une convention évidente différente.
- **Configuration existante** — recherchez un fichier `.dependency-cruiser.*` . S'il en existe, ne l'écrasez **pas** : fusionnez les quatre règles et les options et indiquez à l'utilisateur ce que vous avez ajouté.

**Fait lorsque :** le gestionnaire de packages, la racine des packages et l'état de la configuration existante sont tous connus.

### 2. Installer l’analyseur de dépendances

Installez `dependency-cruiser` en tant que devDependency avec le gestionnaire de packages détecté.

**Fait quand :** `dependency-cruiser` est dans `devDependencies`.

### 3. Écrivez la configuration

Copiez [`dependency-cruiser.config.cjs`](./dependency-cruiser.config.cjs) à la racine du dépôt sous `.dependency-cruiser.cjs`. Définissez `PACKAGES_ROOT`  sur la racine détectée à l'étape 1. Les règles sont basées sur la profondeur du chemin et indépendantes de l'extension, donc rien d'autre n'a besoin d'être adapté.

**Fait quand :** `.dependency-cruiser.cjs` existe avec le bon `PACKAGES_ROOT` et que les quatre règles interdites sont présentes.

### 4. L’intégrer aux vérifications

- Ajoutez un `lint:boundaries` script : `depcruise <packages-root>` (ou `depcruise src`).
-  Pliez-le dans la commande de vérification parapluie du dépôt - celle qui exécute déjà la vérification de type (par exemple un script `check` / `ci` / `validate` ). Ne touchez **pas** `tsconfig` ou ajoutez des alias de chemin.
- S'il n'y a pas de script parapluie, ajoutez `lint:boundaries` et dites à l'utilisateur de l'inclure dans CI.

**Fait quand :** `lint:boundaries` existe et s'exécute dans le cadre de la même commande que typecheck.

### 5. Créer le package d’exemple

Créez un `<packages-root>/example/`  validé comme modèle de copie :

- `index.ts` — un point d'entrée. Exportez une fonction qui délègue à un fichier interne (le package est donc visiblement *profond*, pas un relais).
- `lib/impl.ts` — un fichier interne dans un **sous-dossier**, importé par `index.ts`, non accessible de l'extérieur.
- `tests/example.test.ts` — importe **uniquement** `../index` (un point d’entrée) et vérifie la fonction publique.

Dites à l'utilisateur qu'il s'agit d'un modèle de démarrage à copier ou à supprimer.

**Fait lorsque :** l'exemple de package existe, expose son comportement via un point d'entrée racine et se cache `impl` dans un sous-dossier.

### 6. Vérifier que les règles s’appliquent

Il s'agit du critère d'achèvement pour l'ensemble de la compétence : une configuration qui n'échoue pas en cas de violation ne vaut rien.

1. Exécuter `lint:boundaries`. Il doit **passer** sur l'exemple propre.
2. Ajoutez temporairement une importation approfondie à `tests/example.test.ts`  (par exemple `import { thing } from "../lib/impl"`). Exécutez à nouveau `lint:boundaries`  — il doit **échouer** avec `tests-through-entrypoints`.
3. Supprimez l’importation approfondie. Exécutez à nouveau la commande : elle doit **réussir**.

**Fait quand :** vous avez observé une réussite, puis un échec sur l'importation profonde, puis à nouveau une réussite. Si l’étape 2 n’échoue pas, les règles ne sont pas correctement câblées – corrigez-les avant de terminer.

### 7. Documenter la convention

Écrivez un `README.md` **dans le dossier des packages** (`<packages-root>/README.md`), à côté des packages qu’il régit. Décrivez la structure `src/packages/<name>/` — points d’entrée à la racine, `lib/` pour l’implémentation et `tests/` pour les tests —, rappelez qu’il faut importer un package uniquement par ses points d’entrée et expliquez comment exécuter `lint:boundaries`. **Déconseillez explicitement les fichiers barrel** : exposez plusieurs petits points d’entrée au lieu de réexporter un sous-arbre entier via un seul index. Reprenez également les quatre règles, chacune dans son propre paragraphe.

Ajoutez ensuite un **pointeur de contexte** dans le fichier `AGENTS.md` du dépôt. Créez ce fichier s’il n’existe pas encore. Une seule ligne suffit, par exemple : `Les packages sont des modules profonds — consultez src/packages/README.md avant d’en ajouter ou d’en importer un.` L’agent peut ainsi découvrir la règle de délimitation avant de la violer.

**Terminé lorsque :** `<packages-root>/README.md` existe, déconseille les fichiers barrel et que le fichier `AGENTS.md` du dépôt y renvoie.

## Remarques

- Les références arrière `$1` de la configuration (correspondance de groupe de l’analyseur de dépendances) permettent à un package d’accéder à ses propres éléments internes, alors que les autres packages ne le peuvent pas. Ne les aplatissez pas en règles distinctes pour chaque package.
- Le public ou le privé est décidé par la **profondeur** : les fichiers racine d'un package sont des points d'entrée ; tout ce qui se trouve dans un sous-dossier est privé. Les sous-dossiers conventionnels sont `lib/` (implémentation) et `tests/`, mais la règle ne les code pas en dur — tout sous-dossier est privé, donc un nouveau dossier n'a jamais besoin de changement de configuration. Ajouter un point d'entrée revient simplement à ajouter un fichier racine - pas de baril.
- Les packages sont **plats** : un niveau d'enfants immédiats sous la racine. Les composants internes d'un package peuvent s'imbriquer aussi profondément que vous le souhaitez ; un package ne peut pas contenir un autre package.
- Utilisez `.cjs` (pas `.js`) pour que le `module.exports` de la configuration fonctionne même dans les dépôts `"type": "module"` .
