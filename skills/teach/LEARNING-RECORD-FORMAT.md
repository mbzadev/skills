# Format d'enregistrement d'apprentissage

Les enregistrements d'apprentissage résident dans `./learning-records/`  et utilisent une numérotation séquentielle : `0001-slug.md`, `0002-slug.md`, etc. Créez le répertoire paresseusement, uniquement lorsque le premier enregistrement est écrit.

Ils sont l'équivalent pédagogique des ADR : ils capturent des leçons non évidentes, des idées clés et des connaissances antérieures déclarées qui orienteront les sessions futures. Ils permettent de calculer la zone de développement proximale.

## Modèle

```md
# {Titre court de ce qui a été appris ou établi}

{Une à trois phrases : ce qui a été appris ou confirmé comme acquis, et pourquoi cela compte pour les prochaines sessions.}
```

C'est tout le format. Un dossier d’apprentissage peut être un seul paragraphe. La valeur enregistre _que_ cela est maintenant connu et _pourquoi_ cela change ce qu'il faut enseigner ensuite – pas en remplissant des sections.

## Sections facultatives

N'incluez-les que lorsqu'ils ajoutent une véritable valeur. La plupart des disques n’en auront pas besoin.

- **Statut** dans le frontmatter (`active | remplacé par LR-NNNN`) — utile lorsqu’une compréhension antérieure s’avère erronée et doit être remplacée.
- **Preuve** — comment l'utilisateur a démontré sa compréhension (une réponse à une question, un exercice terminé, une expérience antérieure citée). Utile lorsque la réclamation pourrait être réexaminée.
- **Implications** — ce que cela débloque ou exclut pour les sessions futures. Cela vaut la peine d'être enregistré lorsque ce n'est pas évident.

## Numérotation

Scannez `./learning-records/` pour le nombre existant le plus élevé et incrémentez-le de un.

## Quand rédiger un dossier d'apprentissage

Écrivez-en un lorsque l’une de ces affirmations est vraie :

1. **L'utilisateur a démontré une véritable compréhension de quelque chose de non trivial** : pas seulement une exposition, mais la preuve qu'il peut utiliser le concept correctement. Cela ouvre une nouvelle voie pour ce qu’il faut enseigner ensuite.
2. **L'utilisateur a divulgué des connaissances antérieures** — "Je connais déjà X." Enregistrez-le afin que les sessions futures ne le réapprennent pas. Enregistrez également la _profondeur_ revendiquée.
3. **Une idée fausse a été corrigée** : l'utilisateur pensait auparavant que quelque chose n'allait pas et comprend maintenant pourquoi. Ces éléments sont de grande valeur : ils prédisent de futures pierres d'achoppement sur des sujets connexes.
4. **La mission a changé en réponse à l'apprentissage** : l'utilisateur a découvert qu'il se souciait de quelque chose de différent de ce qu'il pensait. Créez un lien croisé vers [[MISSION.md]] et mettez-le à jour.

### Qu'est-ce qui n'est _pas_ admissible

- Matériau simplement couvert. La couverture n’est pas un apprentissage. Attendez des preuves.
- Tout ce qui est déjà capturé de manière laconique dans [[GLOSSARY.md]] comme définition de terme. Ne dupliquez pas.
- Journaux d'activité session par session. Les dossiers d’apprentissage ne sont pas un journal : ce sont des informations décisionnelles.

## Supersession

Lorsqu’un enregistrement ultérieur contredit un précédent parce que la compréhension s’est approfondie ou corrigée, marquez l’ancien avec `Statut: remplacé par LR-NNNN` au lieu de le supprimer. L’évolution de la compréhension constitue elle-même un signal utile.
