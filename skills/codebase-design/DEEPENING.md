# Approfondissement

Comment approfondir en toute sécurité un groupe de modules superficiels en tenant compte de ses dépendances. Ce document utilise le vocabulaire de [SKILL.md](SKILL.md) : **module**, **interface**, **couture** et **adaptateur**.

## Catégories de dépendances

Lors de l'évaluation d'un candidat à l'approfondissement, classez ses dépendances. La catégorie détermine la manière dont le module profond est testé sur sa couture.

### 1. Dans le processus

Calcul pur, état en mémoire, pas d'E/S. Toujours approfondissable : fusionnez les modules et testez directement via la nouvelle interface. Aucun adaptateur nécessaire.

### 2. Substituable localement

Dépendances qui ont des remplaçants de test locaux (PGLite pour Postgres, système de fichiers en mémoire). Approfondi si le remplaçant existe. Le module profond est testé avec le remplaçant exécuté dans la suite de tests. La couture est interne ; pas de port sur l'interface externe du module.

### 3. Distant mais maîtrisé — ports et adaptateurs

Vos propres services à travers une limite de réseau (microservices, API internes). Définissez un **port** (interface) au niveau de la couture. Le module profond possède la logique ; le transport est injecté en tant qu'**adaptateur**. Les tests utilisent un adaptateur en mémoire. La production utilise un adaptateur HTTP/gRPC/file d'attente.

Forme de recommandation : * « Définissez un port à la jointure, implémentez un adaptateur HTTP pour la production et un adaptateur en mémoire pour les tests, afin que la logique se trouve dans un module profond même si elle est déployée sur un réseau.

 »*

### 4. Réellement externe — simulé

Services tiers (Stripe, Twilio, etc.) que vous ne contrôlez pas. Le module profond prend la dépendance externe comme port injecté ; les tests fournissent un adaptateur fictif.

## Discipline de couture

- **Un adaptateur signifie une couture hypothétique. Deux adaptateurs signifie un vrai.** N'introduisez pas de port sauf si au moins deux adaptateurs sont justifiés (généralement production + test). Une couture à adaptateur unique n’est qu’une indirecte.
- **Coutures internes vs coutures externes.** Un module profond peut avoir des coutures internes (privées à son implémentation, utilisées par ses propres tests) ainsi que la couture externe à son interface. N'exposez pas les coutures internes via l'interface simplement parce que les tests les utilisent.

## Stratégie de test : remplacer, ne pas superposer

- Les anciens tests unitaires sur les modules superficiels deviennent des déchets une fois que les tests au niveau de l'interface du module profond existent - supprimez-les.
- Écrivez de nouveaux tests sur l'interface du module profond. L'**interface est la surface de test**.
- Les tests s'appuient sur des résultats observables via l'interface, et non sur l'état interne.
- Les tests doivent survivre aux refactors internes — ils décrivent le comportement, pas la mise en œuvre. Si un test doit changer lorsque l'implémentation change, il teste au-delà de l'interface.
