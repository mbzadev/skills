## Ce qu'il fait

Il analyse une page ou un formulaire marketing — homepage, landing page, page de tarification, page de fonctionnalité, formulaire de capture de leads ou de contact — et produit des recommandations classées pour améliorer le taux de conversion. L'analyse suit une grille ordonnée par impact, en commençant par la clarté de la proposition de valeur et le test des 5 secondes, avant de descendre vers les CTA, la hiérarchie visuelle, la preuve sociale, les objections et la friction.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/cro`, ou laissez Codex le sélectionner lorsqu'une tâche correspond — y compris lorsqu'une simple URL est partagée avec une demande de retour.
- **Limite de déclenchement.** Utilisez ce skill lorsque une page marketing existe déjà et convertit mal, ou lorsqu'on demande explicitement du CRO. Pour optimiser le flux d'inscription et de création de compte, utilisez plutôt [signup](https://aihero.dev/skills-signup) ; pour l'activation après inscription, [onboarding](https://aihero.dev/skills-onboarding) ; pour les popups et overlays, [popups](https://aihero.dev/skills-popups).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question, et seules les informations manquantes sont demandées. Sans ce fichier, prévoyez de répondre à quelques questions sur le trafic, l'objectif de conversion et ce qui a déjà été testé.

## La grille par impact

Le diagnostic descend une liste de dimensions classées par rendement : proposition de valeur (le test des 5 secondes), headline, placement et copy des CTA, hiérarchie visuelle, signaux de confiance, traitement des objections, points de friction. Un problème en haut de liste vaut presque toujours plus qu'une série de retouches en bas.

Les recommandations arrivent ensuite triées en quatre livrables : quick wins immédiats, changements à fort impact, hypothèses d'A/B tests et alternatives de copy (2-3 variantes justifiées pour les headlines et CTA). Les formulaires bénéficient d'un traitement détaillé, tout comme chaque type de page — une landing page n'a pas les mêmes besoins qu'une page de tarification.

## Questions fréquentes

**J'ai juste une URL, pas d'analytics — est-ce utile ?**
Oui. La grille (test des 5 secondes, hiérarchie des CTA, preuve sociale, friction) s'applique sur la seule inspection de la page ; les données de trafic affinent la priorisation mais ne la bloquent pas.

**Quick wins ou A/B tests : par quoi commencer ?**
Appliquez d'abord les quick wins — ce sont des corrections peu discutables (bouton invisible, headline vague) qui ne justifient pas un test. Réservez l'A/B testing aux changements dont l'effet est incertain, listés dans la section dédiée aux idées de tests.

**Ce skill couvre-t-il ma page de tarification publique ?**
Oui : la page de tarification fait partie des types de pages couverts, avec sa propre grille (comparaison des plans, plan recommandé, anxiété du choix). Les écrans d'upgrade *dans* le produit relèvent en revanche de [paywalls](https://aihero.dev/skills-paywalls).

## Indicateurs de réussite

- Le premier livrable sépare les quick wins des changements à fort impact et des idées de tests, au lieu d'une liste plate.
- Chaque recommandation cite la dimension de la grille qu'elle adresse (proposition de valeur, CTA, preuve sociale…).
- Les headlines et CTA reçoivent 2 à 3 alternatives de copy avec une justification, pas une seule variante.
- Le contexte `.agents/product-marketing.md`, s'il existe, est lu sans qu'on vous redemande le positionnement du produit.

## Où il s'inscrit

Étape de diagnostic dans la chaîne `cro → ab-testing` : il trouve quoi changer, le testing vérifie que ça marche. [signup](https://aihero.dev/skills-signup) prend le relais quand la fuite se situe dans le flux d'inscription, et [paywalls](https://aihero.dev/skills-paywalls) quand elle se situe dans les écrans d'upgrade in-app. Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
