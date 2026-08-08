---
name: prototype
description: "Construisez un prototype jetable pour répondre à une question de conception. À utiliser lorsque l'utilisateur souhaite vérifier si un modèle d'état ou une logique semble correct, ou explorer à quoi devrait ressembler une interface utilisateur."
---

# Prototype

Un prototype est un **code jetable qui répond à une question**. La question décide de la forme.

## Choisir une branche

Identifiez à quelle question on répond — à partir de l'invite de l'utilisateur, du code environnant ou en demandant si l'utilisateur est présent :

- **"Ce modèle logique/état vous convient-il ?"** → [LOGIC.md](LOGIC.md). Créez un seul fichier HTML partageable (boutons de lecture libre et procédures pas à pas guidées par onglets) qui pousse la machine à états à travers des cas difficiles à raisonner sur papier et qu'un non-développeur peut piloter.
- **"À quoi cela devrait-il ressembler ?"** → [UI.md](UI.md). Générez plusieurs variantes d'interface utilisateur radicalement différentes sur un seul itinéraire, commutables via un paramètre de recherche d'URL et une barre inférieure flottante.

Les deux branches produisent des artefacts très différents – une erreur gaspille tout le prototype. Si la question est véritablement ambiguë et que l'utilisateur n'est pas joignable, utilisez par défaut la branche qui correspond le mieux au code environnant (un module backend → logique ; une page ou un composant → interface utilisateur) et énoncez l'hypothèse en haut du prototype.

## Règles qui s'appliquent aux deux

1. **Jetable dès le premier jour et clairement marqué comme tel.** Localisez le code du prototype à proximité de l'endroit où il sera réellement utilisé (à côté du module ou de la page pour lequel il est prototype) afin que le contexte soit évident - mais nommez-le pour qu'un lecteur occasionnel puisse voir qu'il s'agit d'un prototype, pas d'une production. Pour les routes d'interface utilisateur jetables, respectez la convention de routage déjà utilisée par le projet ; n'inventez pas une nouvelle structure de niveau supérieur.
2. **Trivial à exécuter.** Un prototype d'interface utilisateur démarre à partir d'une commande dans l'exécuteur de tâches du projet — `pnpm <name>`, `python <path>`, `bun <path>`, etc. Une démo logique est un fichier HTML unique sur lequel l'utilisateur double-clique. Quoi qu’il en soit, aucune réflexion n’est nécessaire pour le démarrer.
3. **Aucune persistance par défaut.** L’état reste en mémoire. La persistance peut être ce que le prototype _vérifie_, mais elle ne doit pas devenir une dépendance implicite. Si la question porte explicitement sur une base de données, utilisez une base de travail ou un fichier local clairement nommé « PROTOTYPE — À EFFACER ».
4. **Ignorez le polissage.** Pas de tests, pas de gestion des erreurs au-delà de ce qui rend le prototype _exécutable_, pas d'abstractions. Le but est d’apprendre quelque chose rapidement.
5. **Rendre l’état visible.** Après chaque action logique ou changement de variante d’interface, affichez l’état complet pertinent afin que l’utilisateur voie ce qui a changé.
6. **Capturez-le une fois terminé.** Incorporez toute décision validée dans le code réel, puis capturez le prototype lui-même en tant que **source principale** : validez-le dans une branche jetable, hors principale, et laissez un pointeur de contexte vers cette branche sur le problème d'implémentation. Capturez également la réponse – le verdict et la question qu’il a résolue – dans le problème ou dans un commit. La branche principale conserve uniquement la décision validée.
