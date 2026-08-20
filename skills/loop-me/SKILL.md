---
name: loop-me
description: "Grillez-moi sur les spécifications des flux de travail que je souhaite créer, dans cet espace de travail."
---

Exécutez une session `/grilling`  avec état dont la seule sortie est les spécifications de **flux de travail**. Utilisez la discipline du grill – sans relâche, une série de questions à la fois, une réponse recommandée attachée à chacune – en fonction du vocabulaire et de l'objectif ci-dessous. Créez, modifiez et supprimez des spécifications au fur et à mesure que le grillage résout les problèmes.

## L'objectif à boucle

Une **boucle** est un schéma récurrent dans la vie de l'utilisateur : sa carrière, sa semaine, sa matinée, une seule activité répétée. Imaginer une vie comme des boucles dans des boucles révèle à quel point ses activités sont réellement prévisibles – ce qui les rend valent la peine d'être **déléguées**. Utilisez l'objectif pour trouver des boucles qui méritent d'être spécifiées et proposez celles que l'utilisateur n'a pas remarquées.

Un **flux de travail** est la spécification d'une boucle, rendue réelle. Vous exécutez un flux de travail sur une boucle — la boucle est son instanciation en cours d'exécution. Les flux de travail vivent dans `workflows/*.md`  et sont la source de vérité.

## Vocabulaire

Un langage partagé, utilisé uniquement lorsqu'un flux de travail l'exige – jamais une liste de contrôle. **N'exigez rien de structurel** : un flux de travail n'a besoin d'aucune IA, d'aucun point de contrôle et d'aucun calendrier, à moins que le grillage ne le montre.

- **Déclencheur** — ce qui déclenche chaque exécution : un **événement** (un nouvel e-mail, un nouveau numéro) ou un **programme** (chaque matin). Le déclenchement d’événements est généralement le plus efficace.
- **Point de contrôle** — un point humain dans la boucle où l'utilisateur est invité à vérifier ou à décider. Certains flux de travail n'en ont pas et s'exécutent de manière autonome ; certains n’utilisent aucune IA.
- **Poussez vers la droite** — reportez le point de contrôle aussi loin que possible. Faites un travail maximal avant d'impliquer l'humain, donc on le lui demande une fois, tard, avec tout préparé.
- **Note de cadrage** — ce qu'un point de contrôle présente : un résumé précis et prêt à prendre une décision — ce qui a été produit, pourquoi et un lien vers l'actif lui-même — jamais le résultat brut. L'utilisateur lit un mémoire, pas un brouillon. La rapidité de l’examen est impérative.

## Définition de terminé

Une spécification de flux de travail est réalisée lorsqu'un agent d'exécution peut la créer sans poser une seule question. Faites griller jusque-là ; rien n'est fait tant qu'une question demeure.

## L'espace de travail

- `workflows/*.md` — une spécification par flux de travail.
- `NOTES.md` — notes brutes sur le monde de l'utilisateur : les outils qu'il utilise, les canaux qu'il traite et sa propre terminologie pour les deux. Lorsqu'il est vide ou mince, interrogez-les sur leur monde avant de préciser quoi que ce soit. Transformez les termes flous en termes canoniques au fur et à mesure qu'ils apparaissent et enregistrez-les ici.
