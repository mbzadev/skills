## Ce qu’il fait

`cold-email` rédige des e-mails de prospection à froid B2B et leurs séquences de relance, avec un seul but : obtenir une réponse. Objets, accroches, corps, CTA, personnalisation et cadence multi-touch sont couverts, adossés à des données de performance (taux de réponse, benchmarks).

Sa contrainte définissante : l’e-mail doit sembler écrit par un pair, pas par un vendeur. Chaque phrase doit mériter sa place dans une brièveté impitoyable, la personnalisation doit se raccrocher au problème du destinataire (si l’e-mail reste cohérent sans elle, elle ne fonctionne pas), et la demande reste unique et à faible friction — « Pertinent pour vous ? » plutôt qu’un appel de 30 minutes.

## Quand l’utiliser

Appelez `/cold-email`, ou laissez Codex le sélectionner lorsqu’une tâche correspond.

Utilisez ce skill lorsqu’il s’agit d’écrire ou d’améliorer de la prospection sortante : cold email, séquence SDR, outbound, relances, « personne ne répond à mes e-mails ». Pour les séquences automatiques adressées à des personnes déjà connues — welcome, nurture, ré-engagement — utilisez plutôt [emails](https://aihero.dev/skills-emails) ; pour les supports commerciaux au-delà de l’e-mail, [sales-enablement](https://aihero.dev/skills-sales-enablement).

## Prérequis

Aucun obligatoire. Si le projet contient un fichier `.agents/product-marketing.md`, le skill le lit en premier pour la proposition de valeur et le positionnement. En amont, la liste des destinataires peut venir de [prospecting](https://aihero.dev/skills-prospecting).

## Écrire comme un pair

La voix cible : un collègue attentif qui a remarqué quelque chose de pertinent et le partage. Le skill l’exige littéralement — lisez l’e-mail à voix haute, et si ça sonne comme du copy marketing, réécrivez. La calibration dépend du destinataire : ultra-bref et sous-staté pour une direction, plus détaillé pour un niveau intermédiaire, précis et sans fioritures pour un profil technique. Les signatures d’e-mail généré par IA (« I hope this email finds you well », « synergy ») sont bannies.

## Relances qui apportent quelque chose

La séquence compte 3 à 5 e-mails à écarts croissants, chacun tenant seul, et chaque relance doit ajouter du neuf : un angle différent, une preuve fraîche, une ressource utile. Le « je me permets de revenir vers vous » est exclu, et l’e-mail de rupture clôt la séquence pour de bon.

## Questions fréquentes

**Faut-il absolument un signal de recherche (levée de fonds, post LinkedIn) pour écrire ?**

Non. Le skill fonctionne avec ce qui est disponible : un bon signal plus une proposition de valeur claire suffisent. Il note simplement ce qui renforcerait l’e-mail plutôt que de bloquer sur une entrée manquante.

**Pourquoi les lignes d’objet sont-elles si banales ?**

C’est voulu : l’objet n’a qu’un travail, faire ouvrir — pas vendre. Deux à quatre mots en minuscules, d’apparence interne (« hiring ops », « Q2 forecast »), sans urgence ni emoji, car un objet voyant signale le message commercial avant même l’ouverture.

**Le skill impose-t-il une structure fixe ?**

Non. Il propose des formes éprouvées (Observation → Problème → Preuve → Demande, Déclencheur → Insight → Demande…) mais laisse écrire librement quand l’e-mail coule naturellement, et dispose d’un catalogue complet de cadres dans ses références.

## Indicateurs de réussite

- Lu à voix haute, l’e-mail sonne comme un message entre collègues, pas comme un pitch.
- Le « vous/votre » domine le « je/nous », et l’e-mail ne s’ouvre pas sur qui vous êtes.
- Une seule demande, à faible friction, réponsenable en une ligne.
- La suppression de l’ouverture personnalisée casserait la logique de l’e-mail.
- Chaque relance apporte un angle ou une preuve nouvelle ; aucune n’est un simple « checking in ».

## Où il s’inscrit

`cold-email` est l’étape d’écriture de la chaîne outbound : il transforme une liste qualifiée en séquence de contact. En amont, [prospecting](https://aihero.dev/skills-prospecting) construit et qualifie cette liste ; en parallèle, [emails](https://aihero.dev/skills-emails) couvre les séquences lifecycle pour les destinataires déjà connus, et [revops](https://aihero.dev/skills-revops) gère le scoring et le routage des réponses. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
