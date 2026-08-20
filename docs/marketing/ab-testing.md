## Ce qu'il fait

`ab-testing` planifie, conçoit, exécute et analyse des A/B tests statistiquement valides, et organise ces tests en programme d'expérimentation growth continu : génération d'hypothèses, priorisation ICE, vélocité d'expérimentation, playbook de motifs gagnants.

Sa discipline définissante : la taille d'échantillon se calcule avant le lancement et l'on ne regarde pas les résultats en cours de route pour arrêter plus tôt. Chaque test part d'une hypothèse documentée — une prédiction précise, pas un « voyons ce que ça donne » — et ne fait varier qu'une seule chose, faute de quoi impossible de savoir ce qui a fonctionné.

## Quand l'utiliser

Appelez `/ab-testing`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il s'agit de comparer deux versions en mesurant laquelle performe : « A/B test », « split test », « testons ce changement », « quelle version est meilleure », « combien de temps doit durer ce test », « significativité statistique », ou construction d'un backlog d'expériences. Pour trouver quoi tester sur une page — diagnostic CRO, quick wins — utilisez plutôt [cro](https://aihero.dev/skills-cro), qui alimente naturellement ce skill en idées.

## Prérequis

Le skill lit le contexte `product-marketing` du projet (fichier `.agents/product-marketing.md` s'il existe) avant de poser ses questions. La mesure du test suppose un tracking en place — voir [analytics](https://aihero.dev/skills-analytics).

## L'hypothèse avant le test

Le cadre imposé : « Parce que [observation], nous pensons que [changement] provoquera [résultat] pour [audience] ; nous saurons que c'est vrai quand [métriques]. » Les métriques se répartissent en une primaire (celle qui tranche), des secondaires (le contexte) et des guardrails (ce qui ne doit pas se dégrader — on arrête le test si elles plongent).

## Ne pas regarder en cours de route

Le peeking — consulter les résultats avant la taille d'échantillon prévue et arrêter en avance — fabrique des faux positifs. Le skill fait calculer la taille d'échantillon à l'avance (à partir du taux de conversion de base et du lift minimal à détecter), exige de s'y tenir, et réserve les arrêts anticipés aux alertes guardrails. L'analyse finale vérifie significativité, intervalles de confiance, taille d'effet et écarts de segments avant toute décision.

## Du test isolé au programme

Un test isolé est une donnée ; la boucle est un actif : générer des hypothèses (analytics, recherche client, concurrents, tickets, heatmaps, tests passés), prioriser par score ICE (Impact + Confidence + Ease) / 3, lancer, analyser, puis consigner chaque gagnant dans un playbook sous forme de motif réutilisable. La vélocité — 4 à 8 lancements par mois, un win rate de 20 à 30 %, un backlog de 20+ hypothèses — sert d'indicateur avancé du growth.

## Questions fréquentes

**Combien de temps doit durer mon test ?**

Cela ne dépend pas du temps mais de la taille d'échantillon : taux de conversion de base, lift minimal à détecter et trafic disponible la déterminent. Détecter un lift de 10 % sur un taux de base de 1 % exige environ 150 000 visites par variante ; un lift de 50 % sur une base de 10 %, environ 550. Le skill fournit les tables complètes et les calculateurs.

**Puis-je arrêter dès que le résultat est significatif ?**

Non. La significativité atteinte en avance de taille d'échantillon est un artefact du peeking : les faux positifs affluent quand on multiplie les regards. Une seule exception : des guardrails significativement négatifs, qui imposent d'arrêter le test pour limiter les dégâts.

**Le test ne montre aucune différence — qu'en conclure ?**

Soit le trafic manquait pour atteindre la taille d'échantillon (résultat préliminaire), soit le changement était trop timide pour être détecté. Un résultat non concluant n'est pas une preuve d'absence d'effet ; la réponse est un test plus audacieux ou davantage de trafic, pas l'abandon.

## Indicateurs de réussite

- Chaque test est documenté avant lancement : hypothèse structurée, métrique primaire, taille d'échantillon calculée.
- Une seule variable par test, et une variante assez audacieuse pour produire une différence détectable.
- Les résultats sont rendus avec intervalles de confiance et taille d'effet, pas seulement un pourcentage.
- Les gagnants rejoignent un playbook avec le motif réutilisable et les pages où l'appliquer.

## Où il s'inscrit

`ab-testing` est l'étape de validation de la chaîne d'optimisation : [cro](https://aihero.dev/skills-cro) diagnostique et propose les changements, ce skill les départage par la mesure, et [analytics](https://aihero.dev/skills-analytics) fournit le tracking sous-jacent. Il partage avec [attribution](https://aihero.dev/skills-attribution) la même exigence causale — savoir ce qui a réellement marché. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
