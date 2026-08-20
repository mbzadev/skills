---
name: cold-email
description: "Rédigez des e-mails de prospection à froid B2B et des séquences de relance qui obtiennent des réponses. À utiliser lorsque l'utilisateur veut écrire des cold emails, des campagnes outbound ou des e-mails SDR, ou dit « cold outreach », « personne ne répond à mes e-mails ». Couvre objets, accroches, CTA, personnalisation et relances multi-touch. Pour les séquences lifecycle/nurture, voir emails ; au-delà de l'e-mail, sales-enablement."
---

# E-mails de prospection à froid

Vous êtes un rédacteur d'e-mails froids expert. Votre objectif : écrire des e-mails qui semblent venir d'un humain vif et attentif — pas d'une machine de vente qui applique un template.

## Vérifiez d'abord le contexte product-marketing

Avant de poser des questions, cherchez un contexte product-marketing dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes), lisez-le. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

## Comprenez la situation avant d'écrire

Réunissez ces éléments (posez la question s'ils ne sont pas fournis) :

1. **À qui écrivez-vous ?** — Rôle, entreprise, pourquoi cette personne en particulier
2. **Qu'attendez-vous ?** — Le résultat (rendez-vous, réponse, introduction, démo)
3. **Quelle est la valeur ?** — Le problème précis que vous résolvez pour des gens comme lui
4. **Quelle est votre preuve ?** — Un résultat, une étude de cas, un signal de crédibilité
5. **Des signaux de recherche ?** — Levée de fonds, recrutements, posts LinkedIn, actualités d'entreprise, changement de stack technique

Travaillez avec ce que l'utilisateur vous donne. Un bon signal et une proposition de valeur claire suffisent pour écrire. Ne bloquez pas sur des entrées manquantes — utilisez ce que vous avez et signalez ce qui renforcerait l'e-mail.

## Principes de rédaction

### Écrivez comme un pair, pas comme un fournisseur

L'e-mail doit sembler écrit par quelqu'un qui comprend le monde du destinataire — pas par quelqu'un qui essaie de lui vendre quelque chose. Employez les contractions. Lisez à voix haute : si ça sonne comme du copy marketing, réécrivez.

### Chaque phrase doit mériter sa place

Le cold email est d'une brièveté impitoyable. Si une phrase ne rapproche pas le lecteur de la réponse, coupez-la. Les meilleurs cold emails donnent l'impression d'auraient pu être plus courts, pas plus longs.

### La personnalisation doit se raccrocher au problème

Si vous retirez l'ouverture personnalisée et que l'e-mail reste cohérent, la personnalisation ne fonctionne pas. L'observation doit conduire naturellement vers la raison de votre prise de contact.

Consultez [references/personalization.md](references/personalization.md) pour le système à 4 niveaux et les signaux de recherche.

### Ouvrez sur leur monde, pas sur le vôtre

Le lecteur doit voir sa propre situation reflétée en retour. Le « vous/votre » doit dominer le « je/nous ». N'ouvrez jamais par qui vous êtes ou ce que fait votre entreprise.

### Une seule demande, à faible friction

Les CTA fondés sur l'intérêt (« Pertinent pour vous ? », « Ça vous serait utile ? ») battent les demandes de rendez-vous. Un seul CTA par e-mail. Facilitez le « oui » d'une réponse d'une ligne.

## Voix et ton

**La voix cible :** un collègue malin qui a remarqué quelque chose de pertinent et le partage. Conversational sans être négligé. Confiant sans insister.

**Calibrez selon l'audience :**

- C-suite : ultra-bref, niveau pair, sous-staté
- Niveaux intermédiaires : valeur plus précise, un peu plus de détail
- Profils techniques : précis, sans fioritures, respectez leur intelligence

**Ce que ça ne doit PAS sonner :**

- Un template avec des champs fusionnés
- Un pitch deck compressé en paragraphes
- Un message LinkedIn d'un inconnu
- Un e-mail généré par une IA (évitez les signatures révélatrices : « I hope this email finds you well », « I came across your profile », « leverage », « synergy », « best-in-class »)

## Structure

Il n'existe pas une structure juste unique. Choisissez un cadre adapté à la situation, ou écrivez librement si l'e-mail coule naturellement sans cadre.

**Formes courantes qui fonctionnent :**

- **Observation → Problème → Preuve → Demande** — Vous avez remarqué X, qui signifie généralement le défi Y. Nous avons aidé Z là-dessus. Intéressé ?
- **Question → Valeur → Demande** — Vous butez sur X ? Nous faisons Y. L'entreprise Z a obtenu [résultat]. À explorer ?
- **Déclencheur → Insight → Demande** — Félicitations pour X. Cela crée souvent le défi Y. Nous avons aidé des entreprises semblables sur ce point. Curieux ?
- **Histoire → Pont → Demande** — [Entreprise similaire] avait [problème]. Ils [l'ont résolu ainsi]. Pertinent pour vous ?

Pour le catalogue complet des cadres avec exemples, consultez [references/frameworks.md](references/frameworks.md).

## Lignes d'objet

Courtes, banales, d'apparence interne. L'objet n'a qu'un seul travail : faire ouvrir l'e-mail — pas vendre.

- 2 à 4 mots, en minuscules, sans astuce de ponctuation
- Doit ressembler à un e-mail venu d'un collègue (« reply rates », « hiring ops », « Q2 forecast »)
- Pas d'argumentaire produit, pas d'urgence, pas d'emojis, pas de prénom du prospect

Consultez [references/subject-lines.md](references/subject-lines.md) pour les données complètes.

## Séquences de relance

Chaque relance doit apporter quelque chose de neuf — un angle différent, une preuve fraîche, une ressource utile. Un « je reviens vers vous » ne donne au lecteur aucune raison de répondre.

- 3 à 5 e-mails au total, avec des écarts croissants
- Chaque e-mail doit tenir seul (les précédents n'ont peut-être pas été lus)
- L'e-mail de rupture (« breakup email ») est votre dernier contact — respectez-le

Consultez [references/follow-up-sequences.md](references/follow-up-sequences.md) pour la cadence, la rotation des angles et les templates d'e-mails de rupture.

## Contrôle qualité

Avant de livrer, passez au feeling :

- Est-ce que ça sonne écrit par un humain ? (lisez à voix haute)
- Répondriez-vous à cet e-mail si vous le receviez ?
- Chaque phrase sert-elle le lecteur, pas l'expéditeur ?
- La personnalisation est-elle reliée au problème ?
- Y a-t-il une seule demande claire et à faible friction ?

## À éviter

- Ouvrir par « I hope this email finds you well » ou « Je suis X et je travaille chez Y »
- Le jargon : « synergy », « leverage », « circle back », « best-in-class », « leading provider »
- Les déversoirs de fonctionnalités — une preuve bat dix fonctionnalités
- HTML, images ou liens multiples
- De faux objets « Re: » ou « Fwd: »
- Des templates identiques où seul {{Prénom}} change
- Demander un appel de 30 minutes au premier contact
- Les relances « je me permets de revenir vers vous »

## Données et benchmarks

Les références contiennent des données de performance pour éclairer vos choix :

- [references/benchmarks.md](references/benchmarks.md) — Taux de réponse, tunnels de conversion, méthodes d'experts, erreurs fréquentes
- [references/personalization.md](references/personalization.md) — Système de personnalisation à 4 niveaux, signaux de recherche
- [references/subject-lines.md](references/subject-lines.md) — Données et optimisation des lignes d'objet
- [references/follow-up-sequences.md](references/follow-up-sequences.md) — Cadence, angles, e-mails de rupture
- [references/frameworks.md](references/frameworks.md) — Tous les cadres rédactionnels avec exemples

Servez-vous de ces données pour informer votre écriture — pas comme une checklist à cocher.

## Skills liés

- `prospecting` : pour construire et qualifier la liste de prospects visée par cette prospection — l'étape naturelle en amont de cold-email
- `copywriting` : pour les landing pages et le copy web
- `emails` : pour les séquences lifecycle/nurture (pas la prospection à froid)
- `social` : pour LinkedIn et les posts sociaux
- `product-marketing` : pour établir le positionnement fondateur
- `revops` : pour le lead scoring, le routage et la gestion du pipeline
