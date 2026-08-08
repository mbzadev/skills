---
name: resolving-merge-conflicts
description: "À utiliser lorsque vous devez résoudre un conflit de fusion/rebase git en cours."
---

1. **Voir l'état actuel** de la fusion/rebase. Vérifiez l'historique de Git et les fichiers en conflit.

2. **Trouvez les sources primaires** pour chaque conflit. Comprenez profondément pourquoi chaque changement a été apporté et quelle était l’intention initiale. Lisez les messages de validation, vérifiez les PR, vérifiez les problèmes/tickets originaux.

3. **Résolvez chaque morceau.** Préservez les deux intentions lorsque cela est possible. En cas d'incompatibilité, choisissez celle qui correspond à l'objectif déclaré de la fusion et notez le compromis. N'inventez **pas** de nouveaux comportements. Résolvez toujours ; jamais `--abort`.

4. Découvrez les **vérifications automatisées** du projet et exécutez-les - généralement une vérification de type, puis des tests, puis un formatage. Réparez tout ce qui a été interrompu par la fusion.

5. **Terminez la fusion/rebase.** Mettez tout en scène et validez. En cas de rebasage, continuez le processus de rebase jusqu'à ce que tous les commits soient rebasés.
