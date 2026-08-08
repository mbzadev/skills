# Documents de domaine

Comment les compétences en ingénierie doivent utiliser la documentation de domaine de ce référentiel lors de l'exploration de la base de code.

## Avant d'explorer, lisez ceci

- **`CONTEXT.md`** à la racine du dépôt, ou
- **`CONTEXT-MAP.md`** à la racine du dépôt s'il existe — il pointe vers un `CONTEXT.md` par contexte. Lisez chacun d’entre eux en rapport avec le sujet.
- **`docs/adr/`** — lisez les ADR qui touchent le domaine dans lequel vous êtes sur le point de travailler. Dans les dépôts multi-contextes, vérifiez également  `src/<context>/docs/adr/`  pour les décisions contextuelles.

Si l'un de ces fichiers n'existe pas, **procédez en silence**. Ne signalez pas leur absence ; ne suggère pas de les créer à l'avance. La compétence `/domain-modeling`  (accessible via `/grill-with-docs` et `/improve-codebase-architecture`) les crée paresseusement lorsque les termes ou les décisions sont réellement résolus.

## Structure du fichier

Dépôt à contexte unique (la plupart des dépôts) :

```
/
├── CONTEXT.md
├── docs/adr/
│   ├── 0001-event-sourced-orders.md
│   └── 0002-postgres-for-write-model.md
└── src/
```

Dépôt multi-contexte (présence de `CONTEXT-MAP.md` à la racine) :

```
/
├── CONTEXT-MAP.md
├── docs/adr/                          ← system-wide decisions
└── src/
    ├── ordering/
    │   ├── CONTEXT.md
    │   └── docs/adr/                  ← context-specific decisions
    └── billing/
        ├── CONTEXT.md
        └── docs/adr/
```

## Utiliser le vocabulaire du glossaire

Lorsque votre sortie nomme un concept de domaine (dans le titre d'un problème, une proposition de refactorisation, une hypothèse, un nom de test), utilisez le terme tel que défini dans `CONTEXT.md`. Ne dérivez pas vers les synonymes que le glossaire évite explicitement.

Si le concept dont vous avez besoin ne figure pas encore dans le glossaire, c'est un signal : soit vous inventez un langage que le projet n'utilise pas (reconsidérez), soit il y a une réelle lacune (notez-le pour `/domain-modeling`).

## Signaler les conflits d’ADR

Si votre résultat contredit un ADR existant, exposez-le explicitement plutôt que de le remplacer silencieusement :

> _Contradictoire ADR-0007 (commandes événementielles) — mais vaut la peine d'être rouvert parce que…_
