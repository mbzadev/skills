## Ce qu’il fait

`emails` conçoit et optimise des séquences d’e-mails automatisées — welcome, lead nurture, onboarding produit, ré-engagement, post-achat, flux déclenchés par événement — du déclencheur d’entrée jusqu’au plan de mesure.

Sa contrainte définissante : un e-mail, un seul travail. Chaque message porte un objectif unique et un CTA principal unique, la valeur précède la demande, et la pertinence prime sur le volume — moins d’e-mails, mais mieux segmentés, gagnent. La séquence se livre e-mail par e-mail avec objet, preview text, copy complète, timing et conditions de sortie.

## Quand l’utiliser

Appelez `/emails`, ou laissez Codex le sélectionner lorsqu’une tâche correspond.

Utilisez ce skill lorsqu’un flux multi-e-mails automatisé est en jeu : « séquence de bienvenue », « drip campaign », « nurture », « ré-engagement », « quels e-mails envoyer ». Pour écrire un e-mail froid à un inconnu, utilisez plutôt [cold-email](https://aihero.dev/skills-cold-email) ; pour l’onboarding dans l’application, [onboarding](https://aihero.dev/skills-onboarding) — la séquence e-mail vient alors en soutien.

## Prérequis

Aucun obligatoire. Si le projet contient un fichier `.agents/product-marketing.md`, le skill le lit avant de concevoir la séquence pour calibrer audience, voix et promesse. La mise en œuvre suppose ensuite une plateforme d’envoi — le skill oriente vers la bonne selon le cas (Customer.io, Mailchimp, Resend…).

## Le catalogue des séquences

Le cœur du skill est un jeu de séquences éprouvées, chacune avec sa longueur, son calendrier et ses e-mails clés :

| Séquence | Format | Objectif |
| --- | --- | --- |
| Welcome | 5-7 e-mails sur 12-14 jours | Activer, rassurer, convertir |
| Lead nurture | 6-8 e-mails sur 2-3 semaines | Démontrer l’expertise, convertir |
| Ré-engagement | 3-4 e-mails après 30-60 jours d’inactivité | Reconquérir ou nettoyer la liste |
| Onboarding produit | 5-7 e-mails sur 14 jours | Conduire au moment « aha », upgrader |

Chacune se déroule e-mail par e-mail — victoire rapide au jour 1-2, preuve sociale au jour 5-6, lever d’objection, conversion finale — et s’ajuste selon le cycle de vente, la complexité du produit et le stade de relation.

## Copy et cadence

Chaque e-mail suit une structure en cinq temps : accroche, contexte, valeur, CTA, signature humaine. Les objets privilégient clair et spécifique (40-60 caractères) avec des formules éprouvées (question, chiffre, tease narratif), et le preview text complète l’objet au lieu de le répéter. Les longueurs attendues vont de 50-125 mots en transactionnel à 300-500 mots en narratif.

## Questions fréquentes

**Combien d’e-mails dans une séquence ?**

Cela dépend du cycle de vente, de la complexité du produit et du stade de la relation : 3-7 pour une welcome, 5-10 pour un nurture ou un onboarding, 3-5 pour un ré-engagement. Le skill propose ces fourchettes puis ajuste au cas.

**Faut-il envoyer les week-ends ?**

En B2B, non — évitez-les. En B2C, testez. Et envoyez toujours à l’heure locale du destinataire.

**Quel lien avec l’onboarding in-app ?**

L’e-mail soutient l’onboarding produit, il ne le duplique pas : les deux se coordonnent. [onboarding](https://aihero.dev/skills-onboarding) couvre le parcours dans l’application ; `emails` construit la couche e-mail qui rappelle, raconte et convertit.

## Indicateurs de réussite

- La séquence livrée commence par sa fiche d’identité : déclencheur, objectif, nombre d’e-mails, délais entre envois, conditions de sortie.
- Chaque e-mail indique son objet, son preview text, sa copy complète et un CTA unique avec sa destination.
- Chaque e-mail ne porte qu’un objectif ; aucun ne cumule plusieurs demandes concurrentes.
- Le calendrier des envois est daté (jour 1, jour 3-4…) plutôt que vague.
- Un plan de mesures accompagne la séquence.

## Où il s’inscrit

`emails` est le canal de nurturing au cœur du lifecycle : il transforme un inscrit en utilisateur actif puis en client. En amont, [lead-magnets](https://aihero.dev/skills-lead-magnets) alimente les séquences nurture et [popups](https://aihero.dev/skills-popups) capture les adresses ; en aval, [churn-prevention](https://aihero.dev/skills-churn-prevention) s’appuie sur lui pour les parcours de sauvegarde et le dunning. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
