---
name: diagnosing-bugs
description: "Boucle de diagnostic pour les bugs majeurs et les régressions de performances. À utiliser lorsque l'utilisateur dit \"diagnostiquer\"/\"déboguer ceci\", ou signale quelque chose de cassé/lancement/échec/lent."
---

# Diagnostic des bogues

Une discipline pour les bugs difficiles. Sautez les phases uniquement lorsque cela est explicitement justifié.

Lorsque vous explorez la base de code, lisez  `CONTEXT.md`  (s'il existe) pour obtenir un modèle mental clair des modules pertinents et vérifiez les ADR dans la zone que vous touchez.

## Caviarder

Cette compétence vous permet d'afficher les commandes, les sorties et les artefacts capturés. **Rédigez d'abord chaque secret** — écrivez `<REDACTED>` à sa place. Créez des boucles sur les variables d'environnement, afin que les informations d'identification restent dans l'environnement plutôt que dans ce que vous affichez. Les artefacts capturés portent des en-têtes d'authentification : citez uniquement les lignes qui portent le signal.

Si le résultat rédigé ne suffit pas à diagnostiquer le bug, dites-le et demandez à l'utilisateur.

## Phase 1 — Créer une boucle de rétroaction

**C’est le cœur du skill.** Tout le reste est mécanique. Si vous disposez d’un signal de réussite ou d’échec **court et précis** pour ce bug — un signal qui passe au rouge sur _ce_ bug — vous en trouverez la cause ; la bissection, les tests d’hypothèses et l’instrumentation ne font qu’exploiter ce signal. Sans lui, lire davantage de code ne vous sauvera pas.

Dépensez des efforts disproportionnés ici. **Soyez agressif. Soyez créatif. Refusez d'abandonner.**

### Façons d'en construire un : essayez-les à peu près dans cet ordre

1. **Échec du test** quelle que soit la couture qui atteint le bogue : unité, intégration, e2e.
2. **Script Curl / HTTP** sur un serveur de développement en cours d'exécution.
3. **Invocation CLI** avec une entrée de luminaire, comparant la sortie standard à un instantané connu.
4. **Script de navigateur sans tête** (dramaturge/marionnettiste) — pilote l'interface utilisateur, affirme sur DOM/console/réseau.
5. **Rejouez une trace capturée.** Enregistrez une véritable demande réseau/charge utile/journal d'événements sur le disque ; rejouez-le via le chemin du code de manière isolée.
6. **Harnais jetable.** Faites tourner un sous-ensemble minimal du système (un service, des dépôts simulés) qui exerce le chemin du code de bogue avec un seul appel de fonction.
7. **Propriété / boucle fuzz.** Si le bug est "parfois une mauvaise sortie", exécutez 1000 entrées aléatoires et recherchez le mode d'échec.
8. **Harnais Bisection.** Si le bug est apparu entre deux états connus (validation, ensemble de données, version), automatisez le "démarrage à l'état X, vérifiez, répétez" afin de pouvoir le `git bisect run` le.
9. **Boucle différentielle.** Exécutez la même entrée via l'ancienne version par rapport à la nouvelle version (ou deux configurations) et les sorties diff.
10. **Script bash HITL.** Dernier recours. Si un humain doit cliquer, conduisez-les avec `scripts/hitl-loop.template.sh` pour que la boucle soit toujours structurée. La sortie capturée vous est renvoyée.

Créez la bonne boucle de rétroaction et le bug est corrigé à 90 %.

### Resserrez la boucle

Traitez la boucle comme un produit. Une fois que vous avez _une_ boucle, **serrez** :

- Puis-je accélérer les choses ? (Configuration du cache, ignorez les init sans rapport, réduisez la portée du test.)
- Puis-je rendre le signal plus net ? (Affirmez le symptôme spécifique, et non "ne s'est pas écrasé".)
- Puis-je le rendre plus déterministe ? (Pin time, seed RNG, isoler le système de fichiers, geler le réseau.)

Une boucle feuilletée de 30 secondes vaut à peine mieux que pas de boucle ; un déterministe de 2 secondes est serré – une superpuissance de débogage.

### Bogues non déterministes

L'objectif n'est pas une reproduction nette mais un **taux de reproduction plus élevé**. Bouclez le déclencheur 100 ×, parallélisez, ajoutez du stress, réduisez les fenêtres de synchronisation, injectez du sommeil. Un bug à 50 % de flocons est déboguable ; 1 % ne l'est pas : continuez à augmenter le taux jusqu'à ce qu'il soit déboguable.

### Quand vous ne pouvez vraiment pas créer de boucle

Arrêtez-vous et dites-le explicitement. Énumérez ce que vous avez essayé. Demandez à l'utilisateur : (a) l'accès à tout environnement qui le reproduit, (b) un artefact capturé expurgé (fichier HAR, vidage de journal, vidage de mémoire, enregistrement d'écran avec horodatage), ou (c) l'autorisation d'ajouter une instrumentation de production temporaire. Ne **pas** procéder à des hypothèses sans boucle.

### Critère d’achèvement : une boucle courte qui passe au rouge

La phase 1 est terminée lorsque la boucle est **courte** et **peut passer au rouge**. Vous pouvez nommer une commande — script, test ou boucle — déjà exécutée au moins une fois, puis montrer son invocation et sa sortie expurgée. Cette commande :

- [ ] **Capable en rouge** — il pilote le chemin réel du code de bogue et affirme le **symptôme exact de l'utilisateur**, afin qu'il puisse passer au rouge sur ce bogue et au vert une fois corrigé. Pas "s'exécute sans erreur" - il doit être capable d'_attraper ce bug spécifique_.
- [ ] **Déterministe** — même verdict à chaque exécution (bugs floconneux : un taux de reproduction élevé et épinglé, comme ci-dessus).
- [ ] **Rapide** — secondes, pas minutes.
- [ ] **Agent-runnable** — vous pouvez l'exécuter sans surveillance ; un humain dans la boucle uniquement via `scripts/hitl-loop.template.sh`.

Si vous vous surprenez à lire du code pour construire une théorie avant que cette commande n'existe, **arrêtez – passer directement à une hypothèse est l'échec exact que cette compétence évite.** Pas de commande compatible rouge, pas de phase 2.

## Phase 2 — Reproduire + minimiser

Exécutez la boucle. Regardez-le devenir rouge : le bug apparaît.

Confirmez :

- [ ] La boucle produit le mode de défaillance décrit par **l'utilisateur** — et non une défaillance différente qui se trouve à proximité. Mauvais bug = mauvaise solution.
- [ ] L'échec est reproductible sur plusieurs exécutions (ou, pour les bogues non déterministes, reproductible à un rythme suffisamment élevé pour permettre un débogage).
- [ ] Vous avez capturé le symptôme exact (message d'erreur, sortie erronée, timing lent) afin que les phases ultérieures puissent vérifier que le correctif y répond réellement.

### Réduire

Une fois qu'elle est rouge, réduisez la reproduction au **plus petit scénario qui passe encore au rouge**. Coupez les entrées, les appelants, la configuration, les données et les étapes **une à la fois**, en réexécutant la boucle après chaque coupe — ne conservez que ce qui est porteur de l'échec.

Pourquoi s'embêter : une reproduction minimale réduit l'espace des hypothèses dans la phase 3 (moins de pièces mobiles restant à suspecter) et devient le test de régression propre dans la phase 5.

Terminé lorsque **chaque élément restant est porteur** — la suppression de l'un d'entre eux rend la boucle verte.

Ne continuez pas tant que vous n'avez pas reproduit **et** réduit.

## Phase 3 — Hypothèse

Générez **3 à 5 hypothèses classées** avant de tester l'une d'entre elles. La génération d’hypothèses uniques s’ancre sur la première idée plausible.

Chaque hypothèse doit être **falsifiable** : indiquez la prédiction qu'elle fait.

> Format : "Si <X> en est la cause, alors <changing Y> fera disparaître le bug / <changing Z> l'aggravera."

Si vous ne pouvez pas énoncer la prédiction, l’hypothèse est une vibration – jetez-la ou affinez-la.

**Montrez la liste classée à l'utilisateur avant de tester.** Ils ont souvent des connaissances du domaine qui se reclassent instantanément (« nous venons de déployer un changement au n°3 »), ou connaissent des hypothèses qu'ils ont déjà exclues. Point de contrôle bon marché, gain de temps considérable. Ne bloquez pas dessus - poursuivez votre classement si l'utilisateur est AFK.

## Phase 4 — Instrumenter

Chaque sonde doit correspondre à une prédiction spécifique de la phase 3. **Modifiez une variable à la fois.**

Préférence d'outil :

1. **Inspection du débogueur / REPL** si l'environnement le prend en charge. Un point d'arrêt bat dix journaux.
2. **Journaux ciblés** aux limites qui distinguent les hypothèses.
3. Ne jamais "tout enregistrer et grep".

**Étiquetez chaque journal de débogage** avec un préfixe unique, par exemple `[DEBUG-a4f2]`. Le nettoyage final devient alors une seule recherche. Les journaux non étiquetés restent ; les journaux étiquetés sont supprimés.

**Branche performances.** Pour les régressions de performances, les journaux sont généralement le mauvais outil. Établissez plutôt une mesure de référence (harnais de chronométrage, `performance.now()`, profileur ou plan de requête), puis procédez par bissection. Mesurez d’abord, corrigez ensuite.

## Phase 5 — Correction + test de régression

Écrivez le test de régression **avant le correctif** — mais seulement s'il existe une **couture correcte** pour celui-ci.

Une couture correcte est celle où le test exerce le **véritable modèle de bogue** tel qu'il se produit sur le site d'appel. Si la seule couture disponible est trop superficielle (test avec un seul appelant lorsque le bug nécessite plusieurs appelants, test unitaire qui ne peut pas reproduire la chaîne qui a déclenché le bug), un test de régression donne une fausse confiance.

**S'il n'existe aucune couture correcte, c'est en soi le résultat.** Notez-le. L'architecture de la base de code empêche le verrouillage du bug. Signalez-le pour la phase suivante.

S'il existe une couture correcte :

1.  Transformez la reproduction minimisée en un test échoué à ce niveau.
2. Regardez-le échouer.
3. Appliquez le correctif.
4. Regardez ça passer.
5. Réexécutez la boucle de rétroaction de la phase 1 par rapport au scénario d'origine (non minimisé).

## Phase 6 — Nettoyage + post-mortem

Obligatoire avant de déclarer terminé :

- [ ] La repro originale ne se reproduit plus (relancez la boucle Phase 1)
- [ ] Le test de régression réussit (ou l'absence de couture est documentée)
- [ ] Tous `[DEBUG-...]` instrumentation supprimée (`grep` le préfixe)
- [ ] Prototypes jetables supprimés (ou déplacés vers un emplacement de débogage clairement indiqué)
- [ ] L'hypothèse qui s'est avérée correcte est indiquée dans le message de validation/PR — ainsi le débogueur suivant apprend

**Demandez ensuite : qu’est-ce qui aurait empêché ce bug ?** Si la réponse implique un changement architectural — aucune bonne couture de test, appelants enchevêtrés ou couplage caché — transmettez les détails au skill `/improve-codebase-architecture`. Faites cette recommandation **après** l’installation du correctif, pas avant : vous disposez maintenant de davantage d’informations.
