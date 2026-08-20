---
name: setup-pre-commit
description: "Configurez des hooks de pré-commit Husky avec Prettier via lint-staged, une vérification des types et des tests. À utiliser pour ajouter ou configurer Husky, lint-staged et les contrôles exécutés avant chaque commit."
---

# Configuration des hooks de pré-validation

## Ce que cela configure

- Le hook de pré-commit **Husky**
- **lint-staged**, qui exécute Prettier sur les fichiers indexés
- Une configuration **Prettier** si elle manque
- Les scripts **typecheck** et **test** dans le hook de pré-commit

## Étapes

### 1. Détecter le gestionnaire de paquets

Recherchez `package-lock.json` — npm —, `pnpm-lock.yaml` — pnpm —, `yarn.lock` — Yarn — ou `bun.lockb` — Bun. Utilisez le gestionnaire correspondant au fichier présent ; en cas de doute, choisissez npm.

### 2. Installer les dépendances

Installez ces outils comme dépendances de développement :

```
husky lint-staged prettier
```

### 3. Initialiser Husky

```bash
npx husky init
```

Cette commande crée le répertoire `.husky/` et ajoute `prepare: "husky"` à `package.json`.

### 4. Créer `.husky/pre-commit`

Écrivez ce fichier (aucun shebang nécessaire pour Husky v9+) :

```
npx lint-staged
npm run typecheck
npm run test
```

**À adapter**

Remplacez `npm` par le gestionnaire de packages détecté. Si le dépôt ne possède pas de script `typecheck` ou `test` dans `package.json`, supprimez les lignes correspondantes et informez-en l’utilisateur.

### 5. Créer `.lintstagedrc`

```json
{
  "*": "prettier --ignore-unknown --write"
}
```

### 6. Créer `.prettierrc` (si manquant)

Créez uniquement si aucune configuration Prettier n’existe. Utilisez ces valeurs par défaut :

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": false,
  "trailingComma": "es5",
  "semi": true,
  "arrowParens": "always"
}
```

### 7. Vérifier

- [ ] `.husky/pre-commit` existe et est exécutable
- [ ] `.lintstagedrc` existe
- [ ] Le script `prepare` de `package.json` vaut `"husky"`
- [ ] La configuration `prettier` existe
- [ ] Exécutez `npx lint-staged` pour vérifier que cela fonctionne

### 8. Créer le commit

Indexez tous les fichiers modifiés ou créés, puis utilisez le message de commit : `Ajouter les hooks de pré-commit (Husky + lint-staged + Prettier)`.

Cela passera par les nouveaux hooks de pré-commit – un bon test de fumée pour vérifier que tout fonctionne.

## Remarques

- Husky v9+ n'a pas besoin de shebangs dans les fichiers hook
- `prettier --ignore-unknown` ignore les fichiers que Prettier ne peut pas analyser (images, etc.)
- Le hook de pré-commit exécute d’abord `lint-staged` — rapide et limité aux fichiers indexés —, puis la vérification des types et la suite complète de tests.
