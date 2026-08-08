---
name: migrate-to-shoehorn
description: "Migrez les fichiers de test des assertions de type « as » vers @total-typescript/shoehorn. À utiliser lorsque l'utilisateur mentionne un chausse-pied, souhaite remplacer « as » dans les tests ou a besoin de données de test partielles."
---

# Migrer vers Shoehorn

## Pourquoi Shoehorn ?

`shoehorn`  vous permet de transmettre des données partielles dans les tests tout en gardant TypeScript satisfait. Il remplace les assertions `as`  par des alternatives de type sécurisé.

**Code de test uniquement.** N'utilisez jamais de chausse-pied dans le code de production.

Problèmes avec `as` dans les tests :

- Formé pour ne pas l'utiliser
- Doit spécifier manuellement le type de cible
- Double-as (`as unknown as Type`) pour des données intentionnellement erronées

## Installer

```bash
npm i @total-typescript/shoehorn
```

## Modèles de migration

### Objets volumineux avec peu de propriétés nécessaires

Avant :

```ts
type Request = {
  body: { id: string };
  headers: Record<string, string>;
  cookies: Record<string, string>;
  // ...20 more properties
};

it("gets user by id", () => {
  // Seul body.id compte, mais il faut simuler la requête entière
  getUser({
    body: { id: "123" },
    headers: {},
    cookies: {},
    // ...fake all 20 properties
  });
});
```

Après :

```ts
import { fromPartial } from "@total-typescript/shoehorn";

it("gets user by id", () => {
  getUser(
    fromPartial({
      body: { id: "123" },
    }),
  );
});
```

### `as Type` → `fromPartial()`

Avant :

```ts
getUser({ body: { id: "123" } } as Request);
```

Après :

```ts
import { fromPartial } from "@total-typescript/shoehorn";

getUser(fromPartial({ body: { id: "123" } }));
```

### `as unknown as Type` → `fromAny()`

Avant :

```ts
getUser({ body: { id: 123 } } as unknown as Request); // type volontairement incorrect
```

Après :

```ts
import { fromAny } from "@total-typescript/shoehorn";

getUser(fromAny({ body: { id: 123 } }));
```

## Quand utiliser chacun

| Fonction | Cas d'utilisation |
| --------------- | -------------------------------------------------- |
| `fromPartial()` | Transmettre des données partielles qui vérifient toujours le type |
| `fromAny()`  | Transmettre des données intentionnellement erronées (conserve la saisie semi-automatique) |
| `fromExact()`  | Forcer l'objet complet (échanger avec fromPartial plus tard) |

## Flux de travail

1. **Recueillir les exigences** - demander à l'utilisateur :
   - Quels fichiers de test ont `as` assertions posant des problèmes ?
   - S'agit-il d'objets volumineux dont seules certaines propriétés comptent ?
   -  Doivent-ils transmettre des données intentionnellement erronées pour les tests d'erreur ?

2. **Installer et migrer** :
   - [ ] Installer : `npm i @total-typescript/shoehorn`
   - [ ] Trouver des fichiers de test avec `as` assertions : `grep -r " as [A-Z]" --include="*.test.ts" --include="*.spec.ts"`
   - [ ] Remplacer `as Type` par `fromPartial()`
   - [ ] Remplacer `as unknown as Type` par `fromAny()`
   - [ ] Ajouter des importations depuis `@total-typescript/shoehorn`
   - [ ] Exécutez la vérification de type pour vérifier
