## Ce qu'il fait

`attribution` répond à la question la plus dure du marketing : laquelle de vos actions a réellement causé cette conversion et ce revenu ? Il couvre le choix d'un modèle d'attribution, la comparaison multi-touch / MMM / incrementality, la réconciliation de chiffres contradictoires entre outils, et — quand vous contrôlez le site — l'instrumentation first-party qui recoud les conversions à leur source, même sur un domaine tiers.

Sa conviction fondatrice : l'attribution est directionnelle, pas vérité. Chaque modèle est une opinion, chaque plateforme sur-revendique les mêmes ventes, et le total des conversions déclarées dépassera toujours les conversions réelles. Le skill ne cherche donc pas à faire tomber les chiffres juste — il réduit et explique le gap, et livre une allocation honnête avec des niveaux de confiance.

## Quand l'utiliser

Appelez `/attribution`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il s'agit de comprendre quels canaux génèrent du revenu : choix de modèle, « first-touch vs last-touch », « Google dit X mais GA dit Y », « mes dashboards se contredisent », dark social, enquête « comment nous avez-vous connus ? », ou envie de recoudre vous-même vos réservations à leur source. Pour poser le tracking d'événements, les UTM ou GA4/GTM — le prérequis — utilisez plutôt [analytics](https://aihero.dev/skills-analytics).

## Prérequis

Le skill s'appuie sur le contexte `product-marketing` du projet (fichier `.agents/product-marketing.md` s'il existe) : le type de business, la longueur du cycle de vente et la conversion principale conditionnent presque toutes ses recommandations. Il suppose aussi qu'un tracking existe déjà — c'est le rôle d'[analytics](https://aihero.dev/skills-analytics).

## Deux piliers : interpréter ou instrumenter

La plupart des demandes relèvent de l'**interprétation** : choisir un modèle, comprendre les trois paradigmes de mesure (MTA, MMM, incrementality), arbitrer entre des sources qui se contredisent — sans aucune ligne de code. Le second pilier, **first-party**, sert quand vous contrôlez le site et voulez construire : graphe d'identité `identify()`/merge, couture des conversions hébergées sur un domaine tiers via webhook, garde-fous anti-PII, et dernier kilomètre vers le CRM.

## Chaque modèle est une opinion

First-touch et last-touch se trompent en sens inverse ; le position-based impose un arbitraire 40/40/20 ; le data-driven exige du volume et reste aveugle aux touchpoints qu'on ne lui donne pas. La règle du skill : pour un cycle long, ne présentez jamais un modèle isolé — montrez first-touch et last-touch côte à côte, car l'écart entre eux est l'insight, et associez toujours un contrôle hors-modèle. Quand « direct » et recherche de marque dominent, c'est presque toujours le haut du funnel qui fonctionne pendant que l'attribution le cache.

## Le déclaré, arbitre hors-modèle

L'enquête post-conversion « Comment avez-vous entendu parler de nous ? », posée au moment exact de la conversion avec un champ libre en plus de la liste de choix, capte ce qu'aucun tracking ne verra : podcasts, bouche-à-oreille, communautés, DMs. Le skill la traite comme une entrée de triangulation — biaisée vers le touchpoint mémorable — qui départage les plateformes quand elles se disputent les mêmes conversions.

## Questions fréquentes

**Google dit 50, Meta dit 40, GA dit 60, mon CRM dit 35 — qui a raison ?**

Personne. Choisissez une source de vérité pour le nombre de conversions (généralement le CRM ou le backend, là où l'argent est réel), ne sommez jamais entre plateformes — une vente revendiquée deux fois reste une vente — et lisez l'accord directionnel plutôt que la correspondance absolue. L'output attendu est une allocation avec niveaux de confiance, pas une réconciliation au dixième près.

**Faut-il passer au modèle data-driven ?**

Seulement avec du volume : Google l'a longtemps réservé aux comptes dépassant ~3 000 interactions et ~300 conversions sur 30 jours, et à faible volume il produit du bruit déguisé en science. La cohérence du modèle choisi compte bien plus que sa sophistication — un position-based stable avec une enquête déclarative en contrôle bat un modèle algorithmique mal alimenté.

**Comment voir le dark social ?**

Pas avec le tracking : les partages en DM, Slack ou podcasts ne transportent pas de referrer. La seule fenêtre, c'est l'attribution déclarative — d'où l'enquête post-conversion du skill, à poser avant que le souvenir ne s'estompe.

## Indicateurs de réussite

- Le livrable est un readout d'attribution : la décision éclairée, la source de vérité choisie, ce que dit chaque source, la comparaison de modèles pour les cycles longs, les niveaux de confiance et la recommandation.
- Aucun tableau ne somme les chiffres des plateformes entre eux ; tout est dédupliqué contre la source de vérité.
- Les angles morts sont nommés : part de direct, recherche branded versus non-branded, dark social.
- Chaque chiffre clé porte un niveau de confiance, et le gap d'attribution est explicité plutôt que masqué.

## Où il s'inscrit

`attribution` est l'étape d'interprétation de la chaîne de mesure : il suppose le tracking posé par [analytics](https://aihero.dev/skills-analytics) et alimente en retour [revops](https://aihero.dev/skills-revops), qui exploite l'attribution écrite dans le CRM pour le pipeline et le lifecycle. La même mentalité causale se retrouve côté site dans [ab-testing](https://aihero.dev/skills-ab-testing). En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
