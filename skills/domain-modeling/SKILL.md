---
name: domain-modeling
description: "Créez et affinez le modèle de domaine d'un projet. À utiliser lorsque l'utilisateur souhaite identifier la terminologie du domaine ou un langage omniprésent, enregistrer une décision architecturale ou lorsqu'une autre compétence doit maintenir le modèle de domaine."
---

# Modélisation de domaine

Créez et affinez activement le modèle de domaine du projet au fur et à mesure de la conception. Il s'agit de la discipline *active* : remettre en question les termes, inventer des scénarios extrêmes et rédiger le glossaire et les décisions dès qu'elles se cristallisent. (Le simple fait de *lire* `CONTEXT.md` pour le vocabulaire n'est pas cette compétence - c'est une habitude d'une seule ligne que n'importe quelle compétence peut faire. Cette compétence est destinée lorsque vous changez de modèle, pas seulement pour le consommer.)

## Structure du fichier

La plupart des dépôts ont un seul contexte :

```
/
├── CONTEXT.md
├── docs/
│   └── adr/
│       ├── 0001-event-sourced-orders.md
│       └── 0002-postgres-for-write-model.md
└── src/
```

Si un `CONTEXT-MAP.md` existe à la racine, le dépôt a plusieurs contextes. La carte indique où chacun vit :

```
/
├── CONTEXT-MAP.md
├── docs/
│   └── adr/                          ← system-wide decisions
├── src/
│   ├── ordering/
│   │   ├── CONTEXT.md
│   │   └── docs/adr/                 ← context-specific decisions
│   └── billing/
│       ├── CONTEXT.md
│       └── docs/adr/
```

Créez des fichiers paresseusement, uniquement lorsque vous avez quelque chose à écrire. Si aucun `CONTEXT.md`  n'existe, créez-en un lorsque le premier terme est résolu. Si aucun `docs/adr/`  n'existe, créez-le lorsque le premier ADR est nécessaire.

## Pendant la séance

### Défi contre le glossaire

Lorsque l'utilisateur utilise un terme qui entre en conflit avec la langue existante dans `CONTEXT.md`, signalez-le immédiatement. "Votre glossaire définit 'annulation' comme X, mais vous semblez vouloir dire Y – lequel est-ce ?"

### Aiguiser le langage flou

Lorsque l’utilisateur utilise des termes vagues ou surchargés, proposez un terme canonique précis. "Vous dites 'compte', voulez-vous dire le client ou l'utilisateur ? Ce sont des choses différentes."

### Discutez de scénarios concrets

Lorsque les relations entre domaines sont discutées, testez-les avec des scénarios spécifiques. Inventez des scénarios qui sondent les cas extrêmes et obligent l'utilisateur à être précis sur les limites entre les concepts.

### Référence croisée avec le code

Lorsque l'utilisateur explique comment quelque chose fonctionne, vérifiez si le code est conforme. Si vous trouvez une contradiction, faites-la ressortir : "Votre code annule des commandes entières, mais vous venez de dire qu'une annulation partielle est possible, ce qui est vrai ?"

### Mettre à jour CONTEXT.md en ligne

Lorsqu'un terme est résolu, mettez à jour `CONTEXT.md` ici. Ne les regroupez pas – capturez-les au fur et à mesure qu'ils se produisent. Utilisez le format dans [CONTEXT-FORMAT.md](./CONTEXT-FORMAT.md).

`CONTEXT.md`  devrait être totalement dépourvu de détails de mise en œuvre. Ne traitez pas  `CONTEXT.md`  comme une spécification, un bloc-notes ou un référentiel pour les décisions de mise en œuvre. C'est un glossaire et rien d'autre.

### Proposer des ADR avec parcimonie

Proposez de créer un ADR uniquement lorsque les trois sont vrais :

1. **Difficile d'inverser** — le coût d'un changement d'avis plus tard est significatif
2. **Surprenant sans contexte** — un futur lecteur se demandera "pourquoi ont-ils procédé de cette façon ?"
3. **Le résultat d'un véritable compromis** — il existait de véritables alternatives et vous en avez choisi une pour des raisons spécifiques

Si l’un des trois manque, ignorez l’ADR. Utilisez le format dans [ADR-FORMAT.md](./ADR-FORMAT.md).
