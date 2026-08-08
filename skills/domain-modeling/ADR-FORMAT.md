# Format ADR

Les ADR résident dans `docs/adr/` et utilisent une numérotation séquentielle : `0001-slug.md`, `0002-slug.md`, etc.

Créez le répertoire `docs/adr/`  paresseusement — uniquement lorsque le premier ADR est nécessaire.

## Modèle

```md
# {Titre court de la décision}

{Une à trois phrases : quel est le contexte, quelle décision a été prise et pourquoi.}
```

C'est tout. Un ADR peut être un seul paragraphe. La valeur réside dans l'enregistrement *qu'une* décision a été prise et *pourquoi* – et non dans le remplissage de sections.

## Sections facultatives

N'incluez-les que lorsqu'ils ajoutent une véritable valeur. La plupart des ADR n’en auront pas besoin.

- **Statut** dans le frontmatter (`proposé | accepté | obsolète | remplacé par ADR-NNNN`) — utile lorsqu’une décision est réexaminée
- **Options envisagées** — uniquement lorsque les alternatives rejetées méritent d'être rappelées
- **Conséquences** — uniquement lorsque des effets en aval non évidents doivent être signalés

## Numérotation

Scannez `docs/adr/` pour le nombre existant le plus élevé et incrémentez-le de un.

## Quand proposer un ADR

Ces trois éléments doivent être vrais :

1. **Difficile d'inverser** — le coût d'un changement d'avis plus tard est significatif
2. **Surprenant sans contexte** — un futur lecteur examinera le code et se demandera "pourquoi diable ont-ils fait cela de cette façon ?"
3. **Le résultat d'un véritable compromis** — il existait de véritables alternatives et vous en avez choisi une pour des raisons spécifiques

Si une décision est facile à annuler, sautez-la : vous la renverserez simplement. Si ce n’est pas surprenant, personne ne se demandera pourquoi. S’il n’y avait pas de véritable alternative, il n’y aurait rien à enregistrer au-delà de « nous avons fait la chose évidente ».

### Qu'est-ce qui est admissible

- **Forme architecturale.** "Nous utilisons un monorepo." "Le modèle d'écriture est événementiel, le modèle de lecture est projeté dans Postgres."
- **Modèles d'intégration entre contextes.** "La commande et la facturation communiquent via des événements de domaine, et non via HTTP synchrone."
- **Choix technologiques qui impliquent un verrouillage.** Base de données, bus de messages, fournisseur d'authentification, cible de déploiement. Pas toutes les bibliothèques – juste celles qui prendraient un quart d’heure à échanger.
- **Décisions relatives aux limites et à la portée.** "Les données client appartiennent au contexte client ; d'autres contextes y font référence uniquement par ID." Les non explicites sont aussi précieux que les oui.
- **Écarts délibérés par rapport au chemin évident.** "Nous utilisons du SQL manuel au lieu d'un ORM à cause de X." Tout ce où un lecteur raisonnable supposerait le contraire. Ceux-ci empêchent le prochain ingénieur de « réparer » quelque chose qui était délibéré.
- **Contraintes non visibles dans le code.** "Nous ne pouvons pas utiliser AWS en raison d'exigences de conformité." "Les temps de réponse doivent être inférieurs à 200 ms en raison du contrat API du partenaire."
- **Alternatives rejetées lorsque le rejet n'est pas évident.** Si vous avez envisagé GraphQL et choisi REST pour des raisons subtiles, enregistrez-le - sinon quelqu'un suggérera à nouveau GraphQL dans six mois.
