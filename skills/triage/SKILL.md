---
name: triage
description: "Faites progresser les problèmes et les PR externes dans une machine à états fondée sur des rôles de tri : catégorisez, vérifiez, examinez si nécessaire et rédigez des notes de cadrage prêtes pour les agents."
---

# Triage

Faites progresser les problèmes dans l’outil de suivi du projet au moyen d’une machine à états simple, fondée sur des rôles de tri.

Si la configuration du dépôt inclut les pull requests externes parmi les demandes à traiter, le triage les couvre également : **une PR est un ticket accompagné de code**. Elle suit les mêmes rôles, les mêmes états et la même machine, avec les différences signalées ci-dessous. Interprétez un simple identifiant comme `#42` comme un ticket ou une PR selon la configuration de l’outil de suivi.

Chaque commentaire ou problème publié sur le système de suivi des problèmes pendant le tri **doit** commencer par cette clause de non-responsabilité :

```
> *Ce commentaire a été généré par l’IA pendant le triage.*
```

## Documents de référence

- [AGENT-BRIEF.md](AGENT-BRIEF.md) — comment rédiger des notes de cadrage d'agent durables
- [HORS-DE-SCOPE.md](OUT-OF-SCOPE.md) — fonctionnement de la base de connaissances `.out-of-scope/`

## Rôles

Deux rôles de **catégorie** :

- `bogue` — quelque chose est cassé
- `enhancement` — nouvelle fonctionnalité ou amélioration

Cinq rôles **état** :

- `needs-triage` — le responsable doit évaluer
- `needs-info` — en attente d’informations de la part de l’auteur du ticket
- `ready-for-agent` — entièrement spécifié, prêt pour un agent AFK
- `ready-for-human` — nécessite une mise en œuvre humaine
- `wontfix` — ne sera pas appliqué

Pour une PR, les mêmes états s’appliquent au code joint : `ready-for-agent` signifie qu’une note de cadrage est jointe et qu’un agent peut poursuivre le travail sur le diff ; `ready-for-human` signifie que la PR est prête à être fusionnée par un humain.

Chaque problème trié doit porter exactement un rôle de catégorie et un rôle d'état. Si les rôles de l'État sont en conflit, signalez-le et demandez au responsable avant de faire quoi que ce soit d'autre.

Ce sont les noms de rôles canoniques ; les étiquettes réelles de l’outil de suivi peuvent différer. Si leur correspondance n’est pas configurée, exécutez `/setup-mabza-skills`.

Transitions d’état : un ticket sans étiquette passe normalement d’abord à `needs-triage`, puis à `needs-info`, `ready-for-agent`, `ready-for-human` ou `wontfix`. `needs-info` revient à `needs-triage` lorsque son auteur répond. Le responsable peut modifier ce choix à tout moment ; signalez les transitions inhabituelles et demandez confirmation avant de poursuivre.

## Invocation

Le responsable invoque  `/triage`  et décrit ce qu'il veut en langage naturel. Interprétez la demande et agissez. Exemples :

- "Montre-moi tout ce qui nécessite mon attention"
- "Regardons le n°42" (numéro ou PR)
- "Déplacer le n°42 vers prêt pour l'agent"
- "Qu'est-ce qui est prêt à être récupéré par les agents ?"

## Afficher ce qui nécessite une attention particulière

Interrogez l’outil de suivi et présentez trois groupes, en commençant par les éléments les plus anciens :

1. **Sans étiquette** — jamais trié.
2. **`needs-triage`** — évaluation en cours.
3. **`needs-info` avec une réponse de l’auteur depuis les dernières notes de triage** — à réévaluer.

Lorsque les PR font partie du périmètre, incluez les PR externes dans ces groupes et marquez chaque ligne `[PR]` ou `[issue]`. La configuration définit ce qui est considéré comme externe ; les PR en cours d’un collaborateur ne relèvent pas du triage. Ce filtre ne s’applique qu’à la découverte : une PR nommée explicitement est toujours triée, quel que soit son auteur.

Afficher les décomptes et un résumé d’une ligne par élément. Laissez le responsable choisir.

## Trier un problème ou un PR spécifique

1. **Rassemblez le contexte.** Lisez le numéro complet ou le PR (corps, commentaires, étiquettes, auteur, dates ; pour un PR, la différence aussi). Analysez toutes les notes de tri antérieures afin de ne pas poser à nouveau des questions résolues. Explorez la base de code à l'aide du glossaire de domaine du projet, en respectant les ADR en vigueur dans le domaine. Exécutez deux vérifications par rapport à la base de code : (a) **redondance** – recherchez une implémentation existante du comportement demandé par concept de domaine (pas seulement le libellé de la demande) et indiquez où vous avez regardé. S'il est trouvé, il s'agit d'un `wontfix`  déjà implémenté (étape 5). (b) **rejet préalable** — lisez `.out-of-scope/*.md` et faites apparaître toute demande qui ressemble à cette demande.

2. **Recommander.** Présentez au responsable la catégorie retenue, votre recommandation argumentée et un bref résumé des éléments pertinents de la base de code, en précisant si la demande est déjà implémentée. Attendez ses instructions.

3. **Vérifiez la demande.** Avant toute séance de questions, vérifiez qu’elle est fondée. Pour un bogue, tentez de le reproduire à partir des étapes fournies par l’auteur. Pour une PR, confirmez que le diff produit bien le résultat annoncé : examinez-le et exécutez les tests ou commandes appropriés. Indiquez si la demande est confirmée — en précisant où se trouve le code concerné —, si la vérification a échoué ou si les informations sont insuffisantes, ce qui justifie fortement `needs-info`. Une vérification concluante renforce nettement la note de cadrage destinée à l’agent.

4. **Grill (si nécessaire).** Si la demande a besoin d'être étoffée, exécutez les compétences `/grilling` et `/domain-modeling`  ensemble — grillez-la sous forme d'une série de questions à la fois, en affinant les termes de domaine et en mettant à jour `CONTEXT.md`/ADR en ligne au fur et à mesure que les décisions arrivent.

5. **Appliquer le résultat :**
   - `ready-for-agent` — publier une note de cadrage d’agent ([AGENT-BRIEF.md](AGENT-BRIEF.md)).
   - `ready-for-human` — reprendre la même structure, en expliquant pourquoi le travail ne peut pas être délégué (jugement humain, accès externe, décision de conception ou test manuel).
   - `needs-info` — notes post-triage (modèle ci-dessous).
   - `wontfix` — fermer, avec le commentaire en fonction du *pourquoi* :
     - **Déjà implémenté** — le changement existe déjà dans la base de code. Indiquez où il se trouve ; n’écrivez **pas** dans `.out-of-scope/` (ce dossier est réservé aux demandes *rejetées*, pas à celles qui sont déjà construites).
     - **Rejeté (bogue)** — explication polie, puis fermez.
     - **Rejeté (amélioration)** — écrivez dans `.out-of-scope/`, créez un lien vers celui-ci à partir d'un commentaire, puis fermez ([HORS-DE-SCOPE.md](OUT-OF-SCOPE.md)).
   - `needs-triage` — appliquer le rôle. Commentaire facultatif s’il y a des progrès partiels.

## Remplacement d'état rapide

Si le responsable dit « déplacer le numéro 42 vers prêt pour l’agent », faites-lui confiance et appliquez directement le rôle demandé. Confirmez ce que vous allez faire (modifier le rôle, publier un commentaire ou fermer le ticket), puis agissez. Évitez les séances de questions. S’il passe directement à `ready-for-agent`, demandez-lui s’il souhaite rédiger une note de cadrage d’agent.

## Modèle d'informations sur les besoins

```markdown
## Notes de triage

**Ce qui est établi :**

- point 1
- point 2

**Ce qu’il nous faut encore de votre part (@auteur) :**

- question 1
- question 2
```

Capturez tout ce qui a été résolu pendant la cuisson sous « établi jusqu'à présent » afin que le travail ne soit pas perdu. Les questions doivent être spécifiques et exploitables, et non « veuillez fournir plus d'informations ».

## Reprise d'une session précédente

S’il existe déjà des notes de triage sur le ticket ou la PR, lisez-les, vérifiez si l’auteur a répondu aux questions en suspens et présentez un état des lieux actualisé avant de poursuivre. Ne reposez pas les questions déjà résolues.
