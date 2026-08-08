---
name: tdd
description: "Développement piloté par les tests. À utiliser lorsque l'utilisateur souhaite créer des fonctionnalités ou corriger des bogues en testant d'abord, mentionne « rouge-vert-refactor » ou souhaite des tests d'intégration."
---

# Développement piloté par les tests

TDD est la boucle rouge → verte. Cette compétence est la référence qui permet à cette boucle de produire des tests qui méritent d'être conservés : ce qu'est un bon test, où vont les tests, les anti-modèles et les règles de la boucle. Chaque section s'applique à chaque cycle — consultez-les avant et pendant la boucle, pas après.

Lorsque vous explorez la base de code, lisez  `CONTEXT.md`  (s'il existe) afin que les noms des tests et le vocabulaire de l'interface correspondent à la langue du domaine du projet et respectent les ADR dans la zone que vous touchez.

## Qu'est-ce qu'un bon test

Les tests vérifient le comportement via des interfaces publiques, et non les détails d'implémentation. Le code peut changer entièrement ; les tests ne devraient pas le faire. Un bon test se lit comme une spécification — « l'utilisateur peut payer avec un panier valide » vous indique exactement quelle fonctionnalité existe — et survit aux refactors car il ne se soucie pas de la structure interne.

Voir [tests.md](tests.md) pour des exemples et [mocking.md](mocking.md) pour des directives moqueuses.

## Coutures — où vont les tests

Une **couture** est la limite publique que vous testez : l'interface où vous observez le comportement sans accéder à l'intérieur. Les tests sont à rude épreuve, jamais contre les internes.

**Testez uniquement sur des coutures préalablement convenues.** Avant d'écrire un test, notez les coutures testées et confirmez-les avec l'utilisateur. Aucun test n'est écrit sur une couture non confirmée. Vous ne pouvez pas tout tester : convenir dès le départ des coutures est la façon dont les efforts de test se concentrent sur les chemins critiques et la logique complexe au lieu de chaque cas limite.

Demandez : "Qu'est-ce que l'interface publique et quelles coutures devrions-nous tester ?"

Lorsque la forme de cette interface est elle-même en question – quelle est la profondeur du module, où appartient la couture, ce que l'interface doit exposer – utilisez la compétence `/codebase-design`  pour le vocabulaire. C'est la source partagée des termes de module, d'interface, de profondeur, de couture, d'adaptateur, de levier et de localité, et c'est une référence à consulter, pas une session à exécuter.

## Anti-motifs

- **Couplé à l'implémentation** — se moque des collaborateurs internes, teste des méthodes privées ou vérifie via un canal secondaire (interrogeant la base de données au lieu d'utiliser l'interface). Le révélateur : le test s'interrompt lorsque vous refactorisez mais le comportement n'a pas changé.
- **Tautologique** — l'assertion recalcule la valeur attendue comme le fait le code (`expect(add(a, b)).toBe(a + b)`, un instantané dérivé à la main de la même manière, une constante affirmée égale à elle-même), elle passe donc par construction et ne peut jamais être en désaccord avec le code. Les valeurs attendues doivent provenir d'une source indépendante de vérité : un bon littéral connu, un exemple concret, la spécification.
- **Découpage horizontal** — écriture de tous les tests d'abord, puis de toute l'implémentation. Les tests groupés vérifient le comportement _imaginé_ : vous testez la _forme_ des choses plutôt que le comportement face à l'utilisateur, les tests sont insensibles aux changements réels et vous vous engagez à tester la structure avant de comprendre l'implémentation. Travaillez plutôt en **tranches verticales** : un test → une implémentation → répétez, chaque test est une **puce traceuse** qui répond à ce que le dernier cycle vous a appris.

## Règles de la boucle

- **Rouge avant vert.** Écrivez d'abord le test qui a échoué, puis juste assez de code pour le réussir. N'anticipez pas les futurs tests et n'ajoutez pas de fonctionnalités spéculatives.
- **Une tranche à la fois.** Une couture, un test, une implémentation minimale par cycle.
- **La refactorisation ne fait pas partie de la boucle.** Elle appartient à l'étape de révision (voir la compétence `code-review` ), pas au cycle d'implémentation rouge → vert.
