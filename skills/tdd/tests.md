# Bons et mauvais tests

## Bons tests

**Style d'intégration**

 : testez via des interfaces réelles, et non des simulations de pièces internes.

```typescript
// GOOD: Tests observable behavior
test("un utilisateur peut valider un panier valide", async () => {
  const cart = createCart();
  cart.add(product);
  const result = await checkout(cart, paymentMethod);
  expect(result.status).toBe("confirmed");
});
```

Caractéristiques :

- Test le comportement qui intéresse les utilisateurs/appelants
- Utilise uniquement l'API publique
- Survit aux refactorisations internes
- Décrit QUOI, pas COMMENT
- Une assertion logique par test

## Mauvais tests

**Tests détaillés d'implémentation**

 : couplés à la structure interne.

```typescript
// MAUVAIS : teste les détails de l’implémentation
test("le paiement appelle paymentService.process", async () => {
  const mockPayment = jest.mock(paymentService);
  await checkout(cart, payment);
  expect(mockPayment.process).toHaveBeenCalledWith(cart.total);
});
```

Drapeaux rouges :

- Se moquer des collaborateurs internes
- Test des méthodes privées
- Validation du nombre d'appels/de la commande
- Test interrompu lors d'une refactorisation sans changement de comportement
- Le nom du test décrit COMMENT et non QUOI
- Vérification via des moyens externes au lieu de l'interface

```typescript
// BAD: Bypasses interface to verify
test("createUser saves to database", async () => {
  await createUser({ name: "Alice" });
  const row = await db.query("SELECT * FROM users WHERE name = ?", ["Alice"]);
  expect(row).toBeDefined();
});

// GOOD: Verifies through interface
test("createUser makes user retrievable", async () => {
  const user = await createUser({ name: "Alice" });
  const retrieved = await getUser(user.id);
  expect(retrieved.name).toBe("Alice");
});
```

**Tests tautologiques**

 : la valeur attendue reformule l'implémentation, donc le test passe par construction.

```typescript
// MAUVAIS : la valeur attendue est recalculée de la même manière que dans le code
test("calculateTotal sums line items", () => {
  const items = [{ price: 10 }, { price: 5 }];
  const expected = items.reduce((sum, i) => sum + i.price, 0);
  expect(calculateTotal(items)).toBe(expected);
});

// BON : la valeur attendue est un littéral connu et indépendant
test("calculateTotal sums line items", () => {
  expect(calculateTotal([{ price: 10 }, { price: 5 }])).toBe(15);
});
```
