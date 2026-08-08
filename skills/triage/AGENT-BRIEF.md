# Rédiger un brief d’agent

Un brief d’agent est un commentaire structuré publié sur un ticket ou une pull request GitHub lorsqu’il passe à l’état `ready-for-agent`. Il constitue la spécification de référence à partir de laquelle un agent autonome travaillera. Le corps et la discussion d’origine fournissent le contexte ; le brief forme le contrat d’exécution.

Le brief décrit **ce que l’agent doit accomplir**. Pour un ticket, il s’agit de construire le changement. Pour une pull request, il s’agit de terminer ou de corriger le diff existant.

## Principes

### Durabilité plutôt que précision fragile

Le ticket peut rester en attente plusieurs jours ou plusieurs semaines. La base de code aura peut-être changé entre-temps. Le brief doit donc rester utile après un renommage, un déplacement ou un refactoring.

- Décrivez les interfaces, les types et les contrats de comportement.
- Nommez les types, signatures de fonctions et formes de configuration à rechercher.
- N’indiquez ni chemins de fichiers ni numéros de ligne.
- Ne supposez pas que la structure d’implémentation restera identique.

### Comportement plutôt que procédure

Décrivez **ce que** le système doit faire, pas **comment** l’implémenter. L’agent explorera de nouveau le dépôt et prendra les décisions techniques adaptées à son état actuel.

- **Bon :** « Le type `SkillConfig` accepte un champ facultatif `schedule` de type `CronExpression`. »
- **Mauvais :** « Ouvre `src/types/skill.ts` et ajoute un champ à la ligne 42. »
- **Bon :** « Sans argument, `/triage` affiche les tickets qui demandent une intervention. »
- **Mauvais :** « Ajoute un `switch` dans le gestionnaire principal. »

### Critères d’acceptation complets

Chaque critère doit être concret, testable et vérifiable indépendamment.

- **Bon :** « `gh issue list --label needs-triage` retourne les tickets ayant reçu une première classification. »
- **Mauvais :** « Le triage fonctionne correctement. »

### Limites explicites

Indiquez ce qui reste hors périmètre afin d’éviter les extensions opportunistes et les hypothèses sur les fonctionnalités voisines.

## Modèle

```markdown
## Brief d’agent

**Catégorie :** bug / amélioration
**Résumé :** description en une ligne du résultat attendu

**Comportement actuel :**

Décrire ce qui se passe aujourd’hui. Pour un bug, préciser le comportement cassé.
Pour une amélioration, décrire l’état sur lequel elle s’appuie.

**Comportement souhaité :**

Décrire ce qui doit se passer une fois le travail terminé.
Préciser les cas limites et les conditions d’erreur.

**Interfaces principales :**

- `NomDuType` — changement attendu et raison
- type de retour de `nomDeFonction()` — valeur actuelle et valeur souhaitée
- forme de configuration — nouvelles options nécessaires

**Critères d’acceptation :**

- [ ] Critère précis et testable 1
- [ ] Critère précis et testable 2
- [ ] Critère précis et testable 3

**Hors périmètre :**

- Élément à ne pas modifier dans ce ticket
- Fonctionnalité voisine mais distincte
```

## Exemple : correction d’un bug

```markdown
## Brief d’agent

**Catégorie :** bug
**Résumé :** la troncature d’une description de skill coupe parfois un mot

**Comportement actuel :**

Lorsqu’une description dépasse 1 024 caractères, elle est coupée exactement à
la limite, même au milieu d’un mot.

**Comportement souhaité :**

La troncature s’arrête à la dernière frontière de mot disponible avant la limite
et ajoute `...` pour signaler la coupe.

**Interfaces principales :**

- Champ `description` de `SkillMetadata` — le type ne change pas ; la logique de
  validation ou de traitement doit respecter les frontières de mots
- Toute fonction qui lit le frontmatter d’un `SKILL.md`

**Critères d’acceptation :**

- [ ] Les descriptions de moins de 1 024 caractères restent inchangées
- [ ] Les descriptions plus longues sont coupées à la dernière frontière de mot
- [ ] Une description tronquée se termine par `...`
- [ ] La longueur totale, points de suspension compris, ne dépasse pas 1 024 caractères

**Hors périmètre :**

- Modification de la limite elle-même
- Prise en charge des descriptions multilignes
```

## Exemple : amélioration

```markdown
## Brief d’agent

**Catégorie :** amélioration
**Résumé :** conserver les demandes de fonctionnalité rejetées sous `.out-of-scope/`

**Comportement actuel :**

Une demande rejetée est fermée avec l’étiquette `wontfix` et un commentaire,
mais aucun enregistrement durable ne conserve la décision et son raisonnement.

**Comportement souhaité :**

Chaque concept rejeté possède un fichier `.out-of-scope/<concept>.md` qui capture
la décision, sa raison et les liens vers les demandes correspondantes. Le triage
consulte ces fichiers avant d’évaluer une nouvelle demande.

**Interfaces principales :**

- Format Markdown sous `.out-of-scope/`
- Étape initiale de collecte du contexte dans le workflow de triage

**Critères d’acceptation :**

- [ ] Fermer une amélioration avec `wontfix` crée ou met à jour le bon fichier
- [ ] Le fichier contient la décision, sa raison et le lien vers le ticket fermé
- [ ] Une demande similaire enrichit le fichier existant au lieu de créer un doublon
- [ ] Le triage fait remonter les rejets antérieurs correspondants

**Hors périmètre :**

- Correspondance entièrement automatique sans confirmation humaine
- Réouverture automatique d’anciennes demandes
- Rapports de bugs
```

## Exemple : terminer une pull request

Le comportement actuel décrit l’état du diff. Le brief demande de le terminer ou de le corriger, pas de recréer la fonctionnalité.

```markdown
## Brief d’agent

**Catégorie :** amélioration
**Résumé :** terminer l’option `--json` proposée pour `triage list`

**Comportement actuel :**

La pull request sérialise la liste des tickets en JSON. Le chemin nominal fonctionne,
mais les erreurs restent du texte libre et aucun test ne couvre la nouvelle option.

**Comportement souhaité :**

Avec `--json`, toutes les sorties, y compris les erreurs, sont du JSON valide sur
la sortie standard. Les codes de sortie restent inchangés et l’affichage par défaut
ne change pas en l’absence de l’option.

**Critères d’acceptation :**

- [ ] Les chemins de réussite et d’erreur produisent du JSON valide
- [ ] Les codes de sortie correspondent à ceux de la commande sans JSON
- [ ] Un test couvre une réussite et une erreur
- [ ] La sortie par défaut reste identique octet pour octet

**Hors périmètre :**

- Ajout de `--json` à d’autres commandes
- Modification de la forme du résultat déjà définie dans la pull request
```

## Contre-exemple

```markdown
## Brief d’agent

**Résumé :** corriger le bug du triage

Le triage est cassé. Regarde le fichier principal et corrige la fonction autour
de la ligne 150.
```

Ce brief est insuffisant : il ne précise ni catégorie, ni comportement actuel et souhaité, ni critères d’acceptation, ni limites de périmètre. Il dépend en plus d’un chemin et d’un numéro de ligne rapidement obsolètes.
