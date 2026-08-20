## Ce qu'il fait

Il réduit le churn sous ses deux formes : volontaire (le client choisit d'annuler) et involontaire (le paiement échoue), au moyen de flux d'annulation, d'exit surveys, de save offers dynamiques, de rétention proactive et de dunning. Sa contrainte définissante : l'offre de sauvegarde doit correspondre à la raison d'annulation — une remise ne sauve pas quelqu'un qui n'utilise pas le produit — et le bouton « continuer l'annulation » reste toujours visible, parce qu'une résiliation entravée nourrit le ressentiment et expose à des obligations réglementaires comme la règle Click-to-Cancel de la FTC.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/churn-prevention`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill dès que des abonnés partent ou risquent de partir : flux d'annulation, offboarding, dunning, win-back, rétention. Pour les moments d'upgrade in-app, utilisez plutôt [paywalls](https://aihero.dev/skills-paywalls) ; pour les séquences d'e-mails de réengagement après annulation, [emails](https://aihero.dev/skills-emails).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : si un fichier `.agents/product-marketing.md` existe, il est lu avant toute question et seules les informations manquantes sont demandées. Connaître votre taux de churn actuel (volontaire vs involontaire), votre prestataire de facturation et votre métrique d'activation oriente directement la stratégie recommandée.

## Deux churns, deux stratégies

Le point de départ est la séparation entre les deux formes de churn, qui ne se traitent pas du tout pareil :

| Forme | Part du total | Réponse |
|---|---|---|
| Volontaire | 50-70 % | Flux d'annulation en cinq étapes, exit survey, save offer ciblée |
| Involontaire | 30-50 % | Pré-dunning, relances intelligentes, séquence d'e-mails de dunning |

Côté volontaire, chaque raison d'annulation reçoit son offre : remise de 20-30 % pour « trop cher », pause de 1-3 mois pour « pas assez utilisé », roadmap pour « fonctionnalité manquante », et aucune offre du tout si l'entreprise a fermé. Côté involontaire, la pile complète va du pré-dunning (alertes d'expiration de carte à J-30, J-15, J-7) jusqu'à quatre relances échelonnées sur 7 à 10 jours, avec une stratégie différente pour chaque type de refus bancaire.

## Agir avant le clic sur « Annuler »

La meilleure sauvegarde se joue en amont : le skill construit un score de santé (0-100) à partir de signaux pondérés et des interventions proactives déclenchées par des indicateurs avancés — chute de connexion de 50 %+, arrêt d'une fonctionnalité clé, export de données initié, score NPS sous 6 — chacun avec son délai typique avant l'annulation.

## Questions fréquentes

**Jusqu'où peut aller une remise de sauvegarde ?**
Le point optimal est 20-30 % pendant 2-3 mois, avec le montant économisé affiché en devise plutôt qu'en pourcentage. Au-delà de 50 %, les clients apprennent le cycle annulation-retour pour obtenir des promotions, et un client « sauvé » qui rechurne 30 jours plus tard n'était pas vraiment sauvé.

**Faut-il proposer la pause d'abonnement ?**
Oui, mais bornée : 1 à 3 mois maximum, données conservées, réactivation automatique avec préavis. 60 à 80 % des mises en pause reviennent en actif ; au-delà de 3 mois, la réactivation devient rare.

**Comment tester un flux d'annulation ?**
Une variable à la fois — pourcentage de remise, durée de pause, placement du questionnaire, présentation de l'offre, ton — en mesurant le taux de sauvegarde et l'impact sur la LTV. Les cibles de référence : 25-35 % de sauvegarde sur le flux, 50-60 % de récupération sur le dunning.

## Indicateurs de réussite

- Chaque save offer proposée est reliée à une raison d'annulation précise, avec une offre de repli.
- Le flux conçu garde une sortie « continuer l'annulation » visible à chaque étape.
- Le dunning distingue refus temporaires et définitifs, avec un calendrier de relances échelonné (24 h, 3, 5, 7 jours).
- Les métriques suivies vont au-delà du taux de sauvegarde : LTV des offres acceptées, réactivation après pause, churn de revenu net.

## Où il s'inscrit

Bouclier de rétention dans le cycle de vie : il prend le relais de [paywalls](https://aihero.dev/skills-paywalls) une fois l'upgrade acquis, et s'appuie sur [onboarding](https://aihero.dev/skills-onboarding) pour prévenir le churn précoce par l'activation. Il peut aussi être orchestré en veille continue par [marketing-loops](https://aihero.dev/skills-marketing-loops). Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
