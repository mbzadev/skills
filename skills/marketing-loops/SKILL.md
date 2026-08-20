---
name: marketing-loops
description: "Mettez en place des boucles marketing récurrentes qu'un agent exécute à intervalle défini plutôt qu'en one-shot : revue hebdomadaire, veille de fatigue publicitaire, churn watch, alerte de baisse de ranking. À utiliser lorsque l'utilisateur mentionne « marketing loop », « automatiser mon marketing », « run this every week » ou « always-on ». Pour les idées one-shot, voir marketing-ideas ; pour l'expérimentation, ab-testing."
---

# Boucles marketing

Vous mettez en place des **boucles marketing** (marketing loops) : des flux de travail marketing répétables qu'un agent IA exécute à intervalle défini, chacun avec un déclencheur, un ensemble borné d'étapes, une auto-vérification et une condition d'arrêt explicite. Une boucle transforme une tâche marketing que vous feriez autrefois à la main (et oublieriez) en système permanent : le scan hebdomadaire d'opportunités SEO, le rafraîchissement des créas fatiguées, la veille des signaux de churn.

C'est le cousin opérationnel de `marketing-ideas`. Les idées disent *quoi tenter une fois*. Les boucles disent *quoi continuer de faire selon un calendrier* — et câblent ensemble les autres skills marketing pour le faire.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, cherchez un contexte product-marketing déjà rédigé dans le projet : `.agents/product-marketing.md` (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes). Si l'un de ces fichiers existe, lisez-le et exploitez son contenu ; ne demandez ensuite que les informations qu'il ne couvre pas déjà.

Ensuite :
1. **Précisez la mission.** Quel résultat cette boucle doit-elle protéger ou accroître ? (rankings, efficacité publicitaire, activation, rétention, revenu, parrainages)
2. **Choisissez une boucle** dans le catalogue de `references/loop-catalog.md` — ou adaptez la plus proche.
3. **Ajustez la cadence** à la vitesse réelle du signal sous-jacent (voir la règle de cadence ci-dessous).
4. **Confirmez le point de contrôle humain.** Décidez ce que la boucle fait de façon autonome et ce qu'elle prépare pour approbation humaine avant publication ou dépense — voir `references/loop-guardrails.md`.
5. **Planifiez-la** (voir « Planifier une boucle » ci-dessous).

Vous construisez plus d'une boucle, voire un système marketing complet ? Consultez `references/loop-orchestration.md` pour comprendre comment les boucles se composent et dans quel ordre les adopter (commencez par le tracking + une revue hebdomadaire ; ne construisez pas 43 boucles d'un coup).

## Anatomie d'une boucle marketing

Chaque boucle du catalogue comporte ces neuf parties. Quand vous en rédigez ou adaptez une, remplissez-les toutes — une boucle sans condition d'arrêt, sans auto-vérification ou sans gestion d'état est un passif, pas un atout.

| Partie | Ce qu'elle définit |
|--------|--------------------|
| **Cadence de contrôle** | La fréquence à laquelle la boucle *regarde* (hebdomadaire / quotidienne / sur déclencheur). À caler sur la vitesse du signal. |
| **Agit quand** | La condition d'action — ce qui doit être vrai pour réellement *faire* quelque chose, au lieu de simplement vérifier et passer. La plupart des exécutions d'une bonne boucle sont « vérifié, rien à faire ». |
| **Objectif** | L'unique résultat que cette boucle existe pour faire progresser. |
| **Skills utilisés** | Quels skills marketing la boucle orchestre à chaque itération. |
| **Corps de la boucle** | Les étapes ordonnées exécutées à chaque itération. |
| **Auto-vérification** | La vérification faite *avant d'agir* — pour que la boucle n'agisse pas sur du bruit, de la saisonnalité ou un bug de tracking. |
| **État / idempotence** | Ce dont la boucle se souvient entre les exécutions : marqueur de dernière exécution, clé de déduplication, fenêtre de cooldown, ensemble des cas « déjà traités ». Sans cela, les boucles agissent en double, relancent les mêmes personnes ou ré-alertent le même événement. Non négociable pour tout ce qui est planifié — voir `references/loop-state.md` pour savoir où vit l'état et les motifs d'idempotence. |
| **Arrêt / sortie de secours** | Quand la boucle passe son tour, s'interrompt, escalade vers un humain ou se désactive — et ce qu'elle fait en cas d'erreur. Chaque boucle en exige une, y compris les boucles de heartbeat (leur arrêt est « désactivation manuelle + halte sur erreur », jamais « sans objet »). |
| **Sortie** | Où vont les résultats : un fichier, une PR, un brouillon préparé, une notification, un rapport. |

La distinction **cadence de contrôle / agit quand** compte : une boucle de signaux de churn peut *vérifier* chaque jour mais n'*agir* que lorsqu'un compte franchit un seuil de risque dont il n'a pas été contacté dans la fenêtre de cooldown. Confondre les deux produit des boucles qui soit manquent la fenêtre d'action, soit spamment.

## La règle de cadence

Calibrez la cadence sur la vitesse réelle de changement du signal — pas sur la fréquence à laquelle vous *aimeriez* une mise à jour.

| Signal | Cadence réaliste | Pourquoi |
|--------|------------------|----------|
| Rankings, backlinks, autorité de domaine | Hebdomadaire | Évoluent lentement ; des contrôles quotidiens sont du bruit |
| Fatigue créative publicitaire, dérive du CPA | Tous les 2-3 jours | Les boucles de feedback Meta/Google se comptent en jours, pas en heures |
| Funnel d'activation / onboarding | Hebdomadaire | Il faut assez d'inscriptions pour être significatif |
| Signaux de churn | Quotidien ou sur déclencheur | La fenêtre d'intervention précoce est courte |
| Décroissance du contenu / de la copy | Mensuel | L'érosion du trafic est graduelle |
| Changements concurrents | Hebdomadaire | Les ajustements de prix/positionnement sont rares mais importants |
| Social listening / mentions | Quotidien | Les fenêtres d'engagement se referment vite |

Les boucles trop fréquentes sont le mode de défaillance le plus courant : elles génèrent du travail d'occupation, brûlent du budget et vous entraînent à ignorer leurs résultats.

## Quand ne PAS faire de boucle

Tout ne doit pas s'automatiser à cadence fixe. Passez votre tour — ou ajoutez un point de contrôle humain obligatoire — quand :

- **Le vrai travail, c'est la stratégie ou la direction créative.** Les boucles maintiennent et optimisent ; elles ne fixent pas le positionnement, n'inventent pas les campagnes et ne prennent pas les décisions de marque.
- **L'action publie ou dépense sans relecture.** *Préparer en brouillon* une pub, un e-mail ou un post, c'est bien. *Publier automatiquement* ou *déplacer du budget* automatiquement exige un point de contrôle humain, sauf si l'utilisateur a explicitement autorisé l'action autonome et fixé des garde-fous (plafonds, listes d'autorisation).
- **Le signal est trop clairsemé pour être significatif.** Une boucle hebdomadaire de taux de conversion sur 40 visiteurs/semaine mesure du bruit.
- **C'est une boucle de vanité.** Si personne n'agit sur le résultat, supprimez la boucle. Une boucle qui envoie par e-mail un tableau de bord que personne ne lit est pire que rien.

Pour toute boucle qui envoie, dépense, publie ou touche des données personnelles, appliquez `references/loop-guardrails.md` — le modèle d'action à deux niveaux (autonome-sûr vs contrôlé), les plafonds de dépense/d'envoi, les règles CAN-SPAM/GDPR/FTC/CGU, la liste des cas d'escalade systématique et le kill switch obligatoire.

## Planifier une boucle

Ces boucles sont indépendantes de l'agent — le *corps* fonctionne partout. La *planification* dépend de votre environnement :

- **Claude Code** — options natives : `/loop` (au rythme du modèle, jusqu'à une condition), `ScheduleWakeup` (rythme dynamique qui réagit à l'état) et `CronCreate` (planning cron fixe). Si un skill de mécanique de boucle comme `loopify` est installé, servez-vous-en pour choisir entre elles et régler les délais ; sinon les indications ci-dessous suffisent.
- **N'importe quel agent + cron** — emballez le corps de la boucle en prompt/script planifié (`0 9 * * 1` pour le lundi à 9 h, etc.).
- **Cadence manuelle** — pour les boucles à fort jugement, « lancez ce skill chaque lundi » est une boucle parfaitement valide. La valeur est dans le *corps* répétable, pas dans l'automatisation.

Par défaut, privilégiez le cron à heure fixe pour les boucles de revue (revue hebdomadaire, veille de rankings) et le rythme dynamique pour les boucles de surveillance jusqu'au seuil (churn watch, tracking de jour de lancement).

## Le catalogue

`references/loop-catalog.md` contient la bibliothèque complète — 43 boucles marketing couvrant tout le funnel : SEO & contenu, payant, gagné/social/partenariats, activation, rétention, revenu, parrainage & plaidoyer, et opérations courantes. Chacune est une spécification complète et adaptable. Commencez là : choisissez la correspondance la plus proche et ajustez-la au produit, au stade et à l'outillage de l'utilisateur.

## Rédiger une nouvelle boucle

Quand rien dans le catalogue ne convient, rédigez une nouvelle boucle à partir de `references/loop-template.md` — un modèle à copier-coller avec des invites à remplir, un exemple avant/après travaillé et une liste de contrôle de mise en service. Remplissez les neuf parties de l'anatomie ; si vous ne savez répondre concrètement à l'auto-vérification, à l'état/idempotence et à l'arrêt/sortie de secours, la boucle n'est pas prête à tourner.

## Anti-patterns

- Une boucle sans condition d'arrêt → dépense qui s'emballe ou churn infini.
- La même cadence pour toutes les boucles → la plupart tournent trop souvent et finissent ignorées.
- Pas d'auto-vérification → la boucle agit sur du bruit, de la saisonnalité ou un bug de tracking.
- Pas de point de contrôle humain sur les actions de dépense/publication.
- Construire 10 boucles d'un coup → commencez par une, prouvez qu'elle se justifie, puis ajoutez la suivante.

## Vocabulaire banni

Évitez : « set it and forget it », « marketing pleinement autonome », « l'IA fait tout », « 10x on autopilot », « machine de growth hacking ». Les boucles sont des systèmes disciplinés avec des points de contrôle, pas de la magie. Décrivez-les honnêtement.

## Skills liés

- `marketing-ideas` — tactiques one-shot et inspiration (quoi tenter). Les boucles opérationnalisent celles qui méritent d'être répétées.
- `ab-testing` — la boucle d'expérimentation en particulier (hypothèse → test → promotion du gagnant → recommencer).
- `analytics` — la plupart des boucles lisent les analytics pour décider s'il faut agir.
- Les skills de canal individuels (`ads`, `seo-audit`, `emails`, `social`, `churn-prevention`, `pricing`, `referrals`) — les corps de boucle les orchestrent.
