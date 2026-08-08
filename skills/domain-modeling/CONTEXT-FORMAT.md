# Format de CONTEXT.md

## Structure

```md
# {Nom du contexte}

{Description en une ou deux phrases de ce contexte et de sa raison d’être.}

## Langage

**Commande** :
{Description du terme en une ou deux phrases}
_À éviter_ : achat, transaction

**Facture** :
Demande de paiement envoyée à un client après la livraison.
_À éviter_ : note, demande de règlement

**Client** :
Personne ou organisation qui passe des commandes.
_À éviter_ : acheteur, compte
```

## Règles

- **Soyez opiniâtre.** Lorsque plusieurs mots existent pour le même concept, choisissez le meilleur et répertoriez les autres sous `_Avoid_`.
- **Gardez les définitions serrées.** Une ou deux phrases maximum. Définissez ce que c'est, pas ce qu'il fait.
- **Incluez uniquement les termes spécifiques au contexte de ce projet.** Les concepts généraux de programmation (délai d'attente, types d'erreurs, modèles d'utilitaires) n'ont pas leur place même si le projet les utilise largement. Avant d'ajouter un terme, demandez-vous : s'agit-il d'un concept unique à ce contexte, ou d'un concept général de programmation ? Seul le premier appartient.
- **Regroupez les termes sous sous-titres** lorsque des clusters naturels émergent. Si tous les termes appartiennent à un seul domaine cohérent, une liste plate convient.

## Repos simples ou multi-contextes

**Contexte unique (la plupart des dépôts) :** un fichier `CONTEXT.md` à la racine du dépôt.

**Contextes multiples :** un fichier `CONTEXT-MAP.md` à la racine du dépôt répertorie les contextes, leur emplacement et leurs interactions :

```md
# Carte des contextes

## Contextes

- [Commandes](./src/ordering/CONTEXT.md) — reçoit et suit les commandes des clients
- [Facturation](./src/billing/CONTEXT.md) — génère les factures et traite les paiements
- [Exécution](./src/fulfillment/CONTEXT.md) — gère la préparation en entrepôt et l’expédition

## Relations

- **Commandes → Exécution** : Commandes émet des événements `OrderPlaced` ; Exécution les consomme pour démarrer la préparation
- **Exécution → Facturation** : Exécution émet des événements `ShipmentDispatched` ; Facturation les consomme pour générer les factures
- **Commandes ↔ Facturation** : types `CustomerId` et `Money` partagés
```

La compétence déduit quelle structure s'applique :

- Si `CONTEXT-MAP.md` existe, lisez-le pour trouver les contextes
- Si seulement une racine `CONTEXT.md` existe, contexte unique
- Si aucun des deux n'existe, créez une racine `CONTEXT.md` paresseusement lorsque le premier terme est résolu

Lorsque plusieurs contextes existent, déduisez celui auquel le sujet actuel se rapporte. Si ce n’est pas clair, demandez.
