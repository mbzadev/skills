# Quand utiliser des simulations

Se moquer des **limites du système** uniquement :

- API externes (paiement, email, etc.)
- Bases de données (parfois - préférez la base de données de test)
- Temps/aléatoire
- Système de fichiers (parfois)

Ne vous moquez pas :

- Vos propres cours/modules
- Collaborateurs internes
- Tout ce que vous contrôlez

## Conception pour la moquerie

Aux limites du système, concevez des interfaces faciles à simuler :

**1. Utiliser l'injection de dépendances**

Transmettez les dépendances externes plutôt que de les créer en interne :

```typescript
// Facile à simuler
function processPayment(order, paymentClient) {
  return paymentClient.charge(order.total);
}

// Difficile à simuler
function processPayment(order) {
  const client = new StripeClient(process.env.STRIPE_KEY);
  return client.charge(order.total);
}
```

**2. Préférez les interfaces de style SDK aux récupérateurs génériques**

Créez des fonctions spécifiques pour chaque opération externe au lieu d'une fonction générique avec une logique conditionnelle :

```typescript
// GOOD: Each function is independently mockable
const api = {
  getUser: (id) => fetch(`/users/${id}`),
  getOrders: (userId) => fetch(`/users/${userId}/orders`),
  createOrder: (data) => fetch('/orders', { method: 'POST', body: data }),
};

// MAUVAIS : la simulation exige une logique conditionnelle dans le mock
const api = {
  fetch: (endpoint, options) => fetch(endpoint, options),
};
```

L’approche SDK signifie :
- Chaque maquette renvoie une forme spécifique
- Aucune logique conditionnelle dans la configuration du test
- Plus facile de voir quels points finaux un test exerce
- Tapez la sécurité par point final
