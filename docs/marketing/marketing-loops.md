## Ce qu'il fait

Il met en place des boucles marketing : des flux de travail répétables qu'un agent exécute à intervalle défini — le scan hebdomadaire d'opportunités SEO, la veille de fatigue publicitaire, le churn watch — chacun avec un déclencheur, des étapes bornées, une auto-vérification et une condition d'arrêt explicite. Sa contrainte définissante : la cadence se calibre sur la vitesse réelle du signal observé, jamais sur l'envoi d'être tenu informé, et toute action qui publie ou dépense passe par un point de contrôle humain — une boucle est un système discipliné, pas un pilote automatique.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/marketing-loops`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill pour choisir, adapter ou planifier un flux marketing récurrent (« chaque lundi », « chaque jour », « sur déclencheur »). Pour trouver des idées de tactiques à tenter une fois, utilisez plutôt [marketing-ideas](https://aihero.dev/skills-marketing-ideas) ; la boucle d'expérimentation relève de [ab-testing](https://aihero.dev/skills-ab-testing).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : si un fichier `.agents/product-marketing.md` existe, il est lu avant toute question et seules les informations manquantes sont demandées. La planification dépend aussi de l'environnement d'exécution — cron, mécanismes natifs de l'agent ou cadence manuelle — mais le corps de chaque boucle fonctionne partout.

## Une anatomie en neuf parties

Chaque boucle, qu'elle vienne du catalogue ou soit rédigée sur mesure, remplit neuf parties : cadence de contrôle, condition d'agir, objectif, skills orchestrés, corps de la boucle, auto-vérification, état/idempotence, arrêt/sortie de secours et sortie. Deux distinctions portent toute la valeur :

| Distinction | Rôle |
|---|---|
| Cadence de contrôle vs condition d'agir | Vérifier chaque jour n'implique pas agir chaque jour ; la plupart des exécutions d'une bonne boucle sont « vérifié, rien à faire » |
| Auto-vérification avant action | Éviter d'agir sur du bruit, de la saisonnalité ou un bug de tracking |

L'état — marqueur de dernière exécution, clé de déduplication, fenêtre de cooldown — est non négociable : sans lui, les boucles agissent en double et relancent les mêmes personnes. Le catalogue couvre 43 boucles prêtes à adapter sur tout le funnel, et une idée de boucle qui ne sait pas répondre concrètement à son auto-vérification, son état et sa condition d'arrêt n'est pas prête à tourner.

## Questions fréquentes

**Pourquoi ne pas tout automatiser à cadence fixe ?**
Parce que les boucles trop fréquentes sont le premier mode de défaillance : elles génèrent du travail d'occupation, brûlent du budget et finissent ignorées. Un signal clairsemé (40 visiteurs/semaine) mesure du bruit, et une boucle dont personne ne lit le résultat est pire que rien — il faut la supprimer.

**Une boucle peut-elle publier ou dépenser seule ?**
Préparer un brouillon, oui ; publier ou déplacer du budget, non — sauf autorisation explicite avec garde-fous (plafonds de dépense/d'envoi, listes d'autorisation, kill switch). Le respect de CAN-SPAM, du RGPD et des CGU est intégré aux garde-fous de chaque boucle qui envoie, dépense ou touche des données personnelles.

**Par quoi commencer ?**
Par le tracking et une seule revue hebdomadaire, pas par dix boucles d'un coup : chaque boucle ajoutée doit d'abord prouver qu'elle se justifie.

## Indicateurs de réussite

- Chaque boucle spécifiée remplit ses neuf parties, y compris sa condition d'arrêt et son auto-vérification.
- La cadence proposée est justifiée par la vitesse du signal (rankings en hebdomadaire, churn en quotidien, contenu en mensuel), pas par préférence.
- Les actions de publication ou de dépense sont explicitement marquées comme préparées pour approbation humaine.

## Où il s'inscrit

Couche opérationnelle au-dessus des autres skills marketing : là où [marketing-ideas](https://aihero.dev/skills-marketing-ideas) suggère quoi tenter, il orchestre en boucle planifiée les skills de canal comme [churn-prevention](https://aihero.dev/skills-churn-prevention) ou [emails](https://aihero.dev/skills-emails). Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
