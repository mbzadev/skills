# Limites strictes sur le nombre de questions pendant la session d'interrogation

Le skill `/grill-me`, comme les séances de questions intégrées aux autres skills, n’impose aucun nombre maximal de questions. Les demandes d’un plafond configurable ou d’une limite stricte sont hors périmètre.

## Pourquoi cela est hors de portée

L'interrogation est intentionnellement ouverte. L'objectif est de continuer à creuser jusqu'à ce que chaque branche de l'arbre de décision soit résolue — certains plans nécessitent trois questions, d'autres en nécessitent cinquante. Un plafond fixe couperait soit l'exploration utile sur les problèmes complexes, soit semblerait arbitraire sur les problèmes simples.

Si une session paraît trop longue, les solutions de sortie existent déjà :

- L'utilisateur peut interrompre la session à tout moment et accepter l'état actuel du plan.
- L'utilisateur peut demander au modèle de conclure, de résumer et de passer à autre chose — la direction par langage naturel est la surface de contrôle prévue, et non une limite numérique.

Un plafond strict confondrait aussi deux situations différentes : un modèle qui pose beaucoup de questions parce que le plan manque réellement de précisions — comportement attendu — et un modèle qui pose des questions redondantes ou peu utiles — problème de qualité des instructions, pas de quantité. Dans ce second cas, la correction appartient aux instructions du skill, pas à un compteur.

## Demandes antérieures

- #44 — « Codex vient de me poser 200 questions »
