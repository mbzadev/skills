---
name: codebase-design
description: "Vocabulaire partagé pour la conception de modules profonds. À utiliser lorsque l'utilisateur souhaite concevoir ou améliorer l'interface d'un module, trouver des opportunités d'approfondissement, décider où va une couture, rendre le code plus testable ou navigable par l'IA, ou lorsqu'une autre compétence a besoin du vocabulaire approfondi du module."
---

# Conception de la base de code

Concevoir des **modules profonds** : beaucoup de comportement derrière une petite interface, placée de manière nette, testable via cette interface. Utilisez ce langage et ces principes partout où le code est conçu ou restructuré. L'objectif est d'avoir un effet de levier pour les appelants, une localité pour les responsables et une testabilité pour tout le monde.

## Glossaire

Utilisez ces termes exactement et ne leur substituez pas « composant », « service », « API » ou « limite ». Tout l’intérêt est de conserver un langage cohérent.

**Module** — tout élément possédant une interface et une implémentation. Le terme est volontairement indépendant de l’échelle : fonction, classe, package ou tranche couvrant plusieurs niveaux. _À éviter_ : unité, composant, service.

**Interface** — tout ce qu’un appelant doit savoir pour utiliser correctement le module : la signature de type, mais aussi les invariants, les contraintes d’ordre, les modes d’erreur, la configuration requise et les caractéristiques de performance. _À éviter_ : API, signature — ces termes sont trop étroits et ne désignent que la surface des types.

**Implémentation** — ce qui se trouve à l’intérieur d’un module, c’est-à-dire son corps de code. Ce terme se distingue d’**adaptateur** : un élément peut être un petit adaptateur doté d’une grande implémentation — par exemple un dépôt PostgreSQL — ou un grand adaptateur doté d’une petite implémentation — par exemple un substitut en mémoire. Utilisez « adaptateur » lorsque la couture est le sujet, et « implémentation » dans les autres cas.

**Profondeur** — effet de levier offert par l’interface : quantité de comportements qu’un appelant — ou un test — peut exercer par unité d’interface à apprendre. Un module est **profond** lorsqu’une petite interface masque beaucoup de comportements, et **peu profond** lorsque son interface est presque aussi complexe que son implémentation.

**Couture** _(Michael Feathers)_ — emplacement où l’on peut modifier le comportement sans modifier le code à cet endroit ; c’est l’_emplacement_ de l’interface d’un module. Le placement de la couture constitue une décision de conception distincte de ce qui se trouve derrière elle. _À éviter_ : limite, déjà surchargé par la notion de contexte délimité en DDD.

**Adaptateur** — élément concret qui satisfait une interface au niveau d’une couture. Le mot décrit un _rôle_ — l’emplacement occupé — et non une substance — ce qui se trouve à l’intérieur.

**Effet de levier** — ce que la profondeur apporte aux appelants : davantage de capacités par unité d’interface apprise. Une implémentation profite à N sites d’appel et à M tests.

**Localité** — ce que la profondeur apporte aux responsables : les changements, les bogues, les connaissances et la vérification se concentrent au même endroit au lieu de se répandre chez les appelants. Corrigé une fois, corrigé partout.

## Profond ou peu profond

**Module profond** = petite interface + beaucoup d'implémentation :

```
┌─────────────────────┐
│  Petite interface   │  ← Peu de méthodes, paramètres simples
├─────────────────────┤
│                     │
│ Implémentation      │  ← Logique complexe masquée
│ profonde            │
│                     │
└─────────────────────┘
```

**Module peu profond** = grande interface + peu d'implémentation (à éviter) :

```
┌─────────────────────────────────┐
│         Grande interface        │  ← Nombreuses méthodes, paramètres complexes
├─────────────────────────────────┤
│  Implémentation superficielle   │  ← Simple relais
└─────────────────────────────────┘
```

Lors de la conception d'une interface, demandez :

- Puis-je réduire le nombre de méthodes ?
- Puis-je simplifier les paramètres ?
- Puis-je cacher plus de complexité à l'intérieur ?

## Principes

- **La profondeur est une propriété de l'interface, pas de l'implémentation.** Un module profond peut être composé en interne de petites parties simulables et échangeables — elles ne font tout simplement pas partie de l'interface. Un module peut avoir des **coutures internes** (privées à son implémentation, utilisées par ses propres tests) ainsi que la **couture externe** à son interface.
- **Le test de suppression.** Imaginez supprimer le module. Si la complexité disparaît, c’était un passage. Si la complexité réapparaît chez N appelants, elle gagne sa place.
- **L'interface est la surface de test.** Les appelants et les tests traversent la même couture. Si vous souhaitez tester *au-delà* de l'interface, le module n'a probablement pas la bonne forme.
- **Un adaptateur signifie une couture hypothétique. Deux adaptateurs signifient un vrai.** N'introduisez pas de couture à moins que quelque chose ne varie réellement à travers celle-ci.

## Conception pour la testabilité

De bonnes interfaces rendent les tests naturels :

1. **Acceptez les dépendances, ne les créez pas.**

   ```typescript
   // Facile à tester
   function processOrder(order, paymentGateway) {}

   // Difficile à tester
   function processOrder(order) {
     const gateway = new StripeGateway();
   }
   ```

2. **Renvoyer les résultats, ne produit pas d'effets secondaires.**

   ```typescript
   // Facile à tester
   function calculateDiscount(cart): Discount {}

   // Difficile à tester
   function applyDiscount(cart): void {
     cart.total -= discount;
   }
   ```

3. **Petite surface.** Moins de méthodes = moins de tests nécessaires. Moins de paramètres = configuration de test plus simple.

## Relations

- Un **module** possède exactement une **interface**, c’est-à-dire la surface qu’il présente aux appelants et aux tests.
- La **profondeur** est une propriété d’un **module**, mesurée par rapport à son **interface**.
- Une **couture** est l’endroit où réside l’**interface** d’un **module**.
- Un **adaptateur** se trouve au niveau d’une **couture** et satisfait l’**interface**.
- La **profondeur** produit un **effet de levier** pour les appelants et de la **localité** pour les responsables.

## Cadres rejetés

- **Profondeur en tant que rapport entre les lignes d'implémentation et les lignes d'interface** (Ousterhout) : récompense le remplissage de l'implémentation. Nous utilisons plutôt la profondeur comme levier.
- **"Interface" comme mot-clé TypeScript `interface`  ou méthodes publiques d'une classe** : trop étroite — l'interface inclut ici tous les faits qu'un appelant doit connaître.
- **« Limite »** : terme surchargé par le contexte délimité de DDD. Dites **couture** ou **interface**.

## Aller plus loin

- **Approfondissement d'un cluster en fonction de ses dépendances** — voir [DEEPENING.md](DEEPENING.md) : catégories de dépendances, discipline de couture et tests de remplacement sans couche.
- **Exploration d'interfaces alternatives** — voir [DESIGN-IT-TWICE.md](DESIGN-IT-TWICE.md) : lancez des sous-agents parallèles pour concevoir l'interface de plusieurs manières radicalement différentes, puis comparez la profondeur, la localité et le placement des coutures.
