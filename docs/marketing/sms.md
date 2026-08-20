## Ce qu’il fait

`sms` planifie, construit et optimise un programme SMS ou MMS complet : welcome flows, paniers abandonnés, post-achat, win-back, campagnes promotionnelles et SMS transactionnels — du choix du type de numéro jusqu’au plan de mesure.

Sa contrainte définissante : la conformité vient avant tout. TCPA, enregistrement A2P 10DLC, consentement écrit exprès, STOP traité en quelques secondes, heures calmes — le skill ouvre tout plan par un contrôle de conformité et signale les bloquants avant d’écrire la moindre copy, car un seul règlement de class action TCPA se chiffre en millions de dollars. Ensuite seulement viennent les flux, classés par ROI.

## Quand l’utiliser

Appelez `/sms`, ou laissez Codex le sélectionner lorsqu’une tâche correspond.

Utilisez ce skill lorsqu’il est question de mettre en place ou d’optimiser du SMS marketing : « SMS ou e-mail ? », taux d’opt-in, conformité TCPA ou A2P 10DLC, choix entre Klaviyo, Postscript, Attentive ou Twilio. Pour les séquences d’e-mails, utilisez plutôt [emails](https://aihero.dev/skills-emails) — le SMS fonctionne comme une couche par-dessus l’e-mail, rarement en remplacement.

## Prérequis

Aucun obligatoire. Si le projet contient un fichier `.agents/product-marketing.md`, le skill le lit en premier pour le contexte marque et audience. Côté mise en œuvre, une plateforme d’envoi est nécessaire — le skill oriente selon la stack, la taille de liste et la complexité, et ses recommandations supposent un numéro (short code, toll-free ou 10DLC).

## La règle des 24 heures

Le SMS gagne le droit d’interrompre grâce à l’opt-in, et il se réserve aux messages qui bénéficient réellement de l’instantanéité : récupération de panier (98 % d’ouverture en 3 minutes), vente flash, suivi de commande, code d’authentification. Si l’information peut attendre 24 heures, elle part par e-mail. Chaque envoi, à 0,0075 à 0,04 $ plus les frais d’opérateurs, doit passer le test « serais-je content de recevoir ce texto ? ».

## Segments, prix et mesures

La granularité du canal commande le copy : 160 caractères GSM-7 font un segment, les emojis basculent en UCS-2 à 70 caractères par segment et double la facture, et chaque message porte l’identité de la marque (« From Acme: »), un seul CTA et un seul lien court. Les jalons de santé sont chiffrés — opt-in à 5-25 % des abonnés e-mail, CTR de 8-15 %, opt-out sous 2 % par envoi — et le plan de mesure étiquette chaque lien en UTM pour attribuer le revenu par envoi.

## Questions fréquentes

**SMS ou e-mail pour mon besoin ?**

Le tableau de décision du skill tranche cas par cas : SMS d’abord pour le panier abandonné, les ventes flash et les suivis de commande ; e-mail pour le nurture éducatif et la newsletter ; les deux pour le win-back. La règle résumée : si ça peut attendre 24 heures, envoyez un e-mail.

**Faut-il vraiment s’enregistrer en A2P 10DLC aux États-Unis ?**

Oui, depuis 2022, pour tout numéro long. Sans enregistrement, le débit est bridé, les opérateurs filtrent les messages, et le statut affiche « delivered » alors que rien n’arrive. C’est le premier contrôle que le skill effectue, avant toute stratégie.

**Une remise dès le premier SMS de panier abandonné ?**

Non : cela entraîne les clients à abandonner systématiquement leur panier pour obtenir la remise. Le skill réserve l’offre au deuxième ou troisième envoi de la séquence.

## Indicateurs de réussite

- Le plan s’ouvre sur un contrôle de conformité : enregistrement A2P 10DLC, mécanisme d’opt-in, heures calmes — les bloquants sont signalés en premier.
- Les recommandations sont datées et chiffrées (« 30 min après l’abandon, puis 4 h, puis 24 h avec remise »), jamais génériques.
- Chaque message affiche l’identité de marque, un seul CTA, un lien court et le comptage de caractères par segment.
- Les flux proposés sont classés par ROI selon le modèle économique (DTC, SaaS, application).
- Un plan de mesure accompagne la livraison : KPI avec fourchettes saines, liens UTM, file d’A/B tests.

## Où il s’inscrit

`sms` est le canal d’urgence du lifecycle : il pose les relances immédiates que l’e-mail ne peut pas porter. Il se joue en duo avec [emails](https://aihero.dev/skills-emails), qui porte le contenu long, et s’appuie sur [popups](https://aihero.dev/skills-popups) pour la capture des numéros et sur [analytics](https://aihero.dev/skills-analytics) pour l’attribution du revenu par envoi. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
