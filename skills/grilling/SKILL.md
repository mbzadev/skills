---
name: grilling
description: "Grillez sans relâche l’utilisateur à propos d’un plan, d’une décision ou d’une idée. À utiliser lorsque l'utilisateur souhaite tester sa réflexion ou utilise des phrases déclencheurs « grill »."
---

Interrogez l’utilisateur sans relâche jusqu’à ce que vous parveniez à une compréhension commune. Cartographiez cela comme un **arbre de conception** : chaque décision se ramifie sur les décisions qui en dépendent.

Travaillez l'arbre en **tours**. La **frontière** correspond à toute décision dont les conditions préalables sont déjà réglées — les questions que vous pouvez poser _maintenant_ sans deviner les réponses que vous n'avez pas encore entendues. Posez toute la frontière en un seul tour : numérotez chaque question et donnez la réponse recommandée. Attendez ensuite les réponses de l'utilisateur avant le prochain tour.

Chaque question doit être formatée comme suit :

```
❓ **Q1** - **<question title>**: <question body, might be multiple paragraphs, including multiple choices>

➡️ <votre réponse recommandée>
```

Chaque tour auquel l'utilisateur répond remodèle l'arbre : les décisions prises repoussent la frontière vers l'extérieur et débloquent les questions qui en dépendaient. Recalculez la frontière et demandez le prochain tour. Une question dont la réponse dépend d'une autre question encore ouverte dans ce tour appartient à un tour _ultérieur_, pas à celui-ci.

Trouver des _facts_ est votre travail, jamais celui de l'utilisateur. Lorsqu'une question frontière nécessite un fait de l'environnement (système de fichiers, outils, etc.), envoyez un sous-agent pour le trouver - ne demandez pas à l'utilisateur quelque chose que vous pourriez rechercher vous-même. Ne bloquez pas : une exploration en cours est une condition préalable non réglée, donc seules les questions en aval attendent que le sous-agent fasse son rapport – posez maintenant la question au reste de la frontière. Les _décisions_ appartiennent à l'utilisateur — mettez-les chacune et attendez.

La session se termine lorsque la frontière est vide : chaque branche de l'arbre de conception visitée, rien n'est laissé en silence. N'agissez pas en conséquence tant que l'utilisateur n'a pas confirmé que vous avez atteint un accord commun.
