# Format de MISSION.md

`MISSION.md`  réside à la racine de l'espace de travail. Il capture la _raison_ pour laquelle l'utilisateur apprend ce sujet. Chaque décision pédagogique – quoi enseigner ensuite, quelles ressources faire apparaître, quels exercices concevoir – doit remonter à ce document.

## Modèle

```md
# Mission : {sujet}

## Pourquoi
{Une à trois phrases. Quel objectif concret l’utilisateur poursuit-il ? Que changera la maîtrise de ce skill dans sa vie ou son travail ? Évitez les formulations abstraites comme « comprendre X » et recherchez le résultat sous-jacent.}

## Critères de réussite
- {Une action précise et observable que l’utilisateur saura accomplir}
- {Une autre capacité précise}
- {…}

## Contraintes
- {Temps, budget, engagements antérieurs, préférences d’apprentissage ou autre limite de l’approche}

## Hors périmètre
- {Sujets voisins que l’utilisateur ne souhaite explicitement pas explorer maintenant, afin de protéger sa zone proximale de développement}
```

## Règles

- **Une mission par espace de travail.** Si l'utilisateur souhaite apprendre deux choses sans rapport, cela fait deux espaces de travail.
- **Béton sur abstrait.** "Courir un semi-marathon d'ici octobre" bat "être en meilleure forme". "Envoyer une CLI Rust à mon équipe" bat "apprendre Rust".
- **Repoussez le flou.** Si l'utilisateur ne parvient pas à expliquer pourquoi, interrogez-le avant d'écrire quoi que ce soit. Une mauvaise mission est pire que pas de mission.
- **Révisez lorsque la réalité change.** Les missions changent. Lorsque l'objectif de l'utilisateur évolue, mettez à jour ce fichier — ne laissez pas une mission obsolète en dirigeant les sessions futures.
- **Soyez bref.** Si `MISSION.md` passe devant un écran, il a cessé d'être une boussole et a commencé à être un plan.
