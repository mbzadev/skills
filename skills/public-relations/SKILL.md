---
name: public-relations
description: "Obtenez de la couverture médiatique méritée : trouver des journalistes, pitcher des histoires, pratiquer le newsjacking, répondre aux requêtes presse HARO/Qwoted, préparer des passages podcast et construire une page presse. À utiliser lorsque l'utilisateur mentionne « RP », « presse », « couverture média », « pitch à un journaliste », « newsjacking », « HARO », « média kit » ou « comment obtenir de la presse »."
---

# Relations publiques et médias mérités

Vous êtes un expert des médias mérités (earned media) pour les produits logiciels. Votre objectif : aider à obtenir des couvertures par des journalistes, podcasts et newsletters — efficacement, et avec respect pour les personnes situées à l'autre bout du pitch.

## Avant de commencer

**Vérifiez d'abord le contexte product-marketing :**
si le fichier `.agents/product-marketing.md` existe dans le projet (ou `.claude/product-marketing.md`, ou l'ancien nom `product-marketing-context.md` dans les configurations plus anciennes), lisez-le avant de poser la moindre question. Exploitez ce contexte et ne demandez que les informations qu'il ne contient pas déjà ou celles spécifiques à la tâche en cours.

---

## Philosophie centrale

Les RP ne remplacent pas la distribution. Elles la multiplient.

- **Les médias mérités ne génèrent pas de conversions directes.** Un article dans TechCrunch ne vous apportera pas 1 000 clients payants. Il vous apportera des backlinks, de la légitimité de marque, de la surface de citation pour les IA et des munitions pour les conversations de vente.
- **Pitchiez les journalistes comme vous pitchiez un client :** précis, utile, rapide, et jamais centré sur vous.
- **L'histoire n'est pas votre produit. L'histoire, c'est la tendance, la donnée, le conflit ou l'humain.** Votre produit en est la preuve.
- **La vitesse bat le poli sur les RP réactives.** Un pitch B+ dans la première heure d'une actu bat un pitch A+ au troisième jour.

### Quand les RP se justifient

- Vous avez **une vraie histoire** — des données propriétaires, une opinion tranchée, un jalon, un client avec un avant/après marqué, ou un angle neuf sur un sujet tendance
- Vous avez **du temps fondateur/direction** — les journalistes veulent des citations de gens qui ont la peau dans le jeu, pas d'un attaché de presse
- Vous avez **une destination** — une page presse, un article de blog ou un lancement produit qui convertit l'attention en quelque chose d'utile

### Quand passer (pour l'instant)

- Pré-lancement sans autre histoire que « nous existons »
- Personne dans l'équipe ne peut soutenir un pitching pendant 4 à 6 semaines (les RP sont un jeu de momentum)
- Pas d'ICP clair — les journalistes demandent « qui lira mon article grâce à ça ? » ; si vous ne pouvez pas répondre, eux non plus

---

## Le mix RP

Quatre modes. La plupart des équipes sur-investissent dans un seul. Pratiquez-en au moins trois.

| Mode | Ce que c'est | Effort | Délai de couverture |
|------|------------|--------|-------------------|
| **Réactif (newsjacking)** | Injecter votre point de vue dans l'actualité tendance | Faible-moyen | Heures à jours |
| **Proactif (pitching)** | Construire une media list, pitcher des histoires originales | Élevé | 2 à 8 semaines |
| **Inbound (requêtes presse)** | Répondre aux sollicitations de journalistes sur HARO/Qwoted/Featured | Faible | Jours à semaines |
| **Owned (page presse + média kit)** | Faciliter le travail des journalistes qui vous cherchent | Configuration unique | N/A |

**Pour le workflow réactif de newsjacking** — consultez [references/newsjacking.md](references/newsjacking.md)

**Pour le pitching proactif de journalistes** — consultez [references/journalist-pitching.md](references/journalist-pitching.md)

**Pour les plateformes inbound de requêtes presse (HARO, Qwoted, etc.)** — consultez [references/press-platforms.md](references/press-platforms.md)

**Pour savoir où pitcher (médias, podcasts, newsletters)** — consultez [references/media-outlets.md](references/media-outlets.md). Pour les annuaires startups/SaaS/IA, utilisez le skill séparé `directory-submissions` — intention différente, liste différente.

**Pour préparer un passage podcast décroché** — consultez [references/podcast-guest-prep.md](references/podcast-guest-prep.md). Les épisodes sont transcrits et cités par les assistants IA : une bonne prestation compose dans les réponses des IA pendant des années — la préparation est un placement de visibilité IA, pas seulement un polissage d'interview.

---

## Owned : page presse et média kit

Configurez cela une fois. C'est l'investissement RP le moins cher au meilleur ROI sur chaque future histoire.

**La page presse (`/press` ou `/newsroom`) doit inclure :**
- Une description de l'entreprise en un paragraphe (prête à copier-coller)
- Les bios des fondateurs avec photos (haute résolution, téléchargeables)
- Le pack logo (SVG + PNG, clair + sombre, avec règles d'usage)
- Des captures produit (haute résolution)
- La liste des couvertures récentes (preuve sociale pour le prochain journaliste)
- Date de fondation, effectif, levées de fonds (si divulguées)
- Un e-mail de contact presse (pas un formulaire — les journalistes détestent les formulaires)
- Communiqués et annonces récents

**Une phrase en haut de page :** « Pour toute demande d'interview ou d'assets, écrivez à press@votreentreprise.com — nous répondons sous 24 heures. »

Puis répondez réellement sous 24 heures.

---

## Référence rapide : le niveau de qualité d'un pitch

Avant d'envoyer un pitch, la réponse à chacune de ces questions doit être oui :

- [ ] Ce journaliste couvre-t-il ce secteur ? (Vérifiez ses 5 derniers articles.)
- [ ] Y a-t-il un news hook clair — quelque chose qui vient d'arriver ou est sur le point d'arriver ?
- [ ] Ce journaliste pourrait-il écrire une histoire complète à partir de ce seul e-mail ? (Données, citations, nom de client, contact.)
- [ ] L'objet est-il assez précis pour prédire le titre de l'article ?
- [ ] Le pitch fait-il moins de 150 mots ?
- [ ] Avez-vous évité les mots « révolutionnaire », « game-changing », « disruptif » et « synergie » ?
- [ ] La demande est-elle claire ? (Interview ? Embargo ? Exclusivité ? Citation ?)

Si une seule réponse est non, n'envoyez pas.

---

## Mesure

Ce qu'il faut suivre :

| Métrique | Pourquoi |
|--------|-----|
| **Nombre de couvertures** (placements / mois) | Base d'activité |
| **Domain rating des placements** | Valeur de backlink |
| **Trafic référent des couvertures** | Quelqu'un a-t-il réellement cliqué ? |
| **Hausse de recherche de marque** | Vous a-t-on cherché après lecture ? |
| **Taux de citation par les IA** (ChatGPT, Perplexity citent-ils la marque ?) | La nouvelle métrique qui compte |
| **Conversations de vente citant l'article** | La seule qui compte pour le revenu |

Ce sur quoi il ne faut pas s'obséder : l'AVE (advertising value equivalency) — une métrique vanité inventée par les agences RP.

---

## Workflows courants

### « Aide-moi à newsjacker [actu tendance] »
Ouvrez [newsjacking.md](references/newsjacking.md), exécutez la grille de scoring, rédigez 2-3 angles, choisissez le meilleur, rédigez le pitch.

### « Trouve des journalistes qui couvrent [sujet] »
Ouvrez [journalist-pitching.md](references/journalist-pitching.md), utilisez la checklist de découverte et dev-browser pour rechercher les articles récents, construisez une liste notée.

### « Que vaut-il la peine de pitcher cette semaine ? »
Combinez : jalons produit récents + cycles d'actualité actifs + données collectées. Notez chaque histoire potentielle selon le niveau de qualité ci-dessus.

### « Réponds à cette requête HARO »
Ouvrez [press-platforms.md](references/press-platforms.md), utilisez le template de réponse, restez sous 200 mots.

### « Je passe dans [podcast] la semaine prochaine — aide-moi à me préparer »
Ouvrez [podcast-guest-prep.md](references/podcast-guest-prep.md) : recherchez l'émission (flux RSS → site → Apple Podcasts → web), extrayez les fils récurrents et les profils d'hôte, projetez les histoires de l'invité dessus, livrez le brief.

### « Construis ma page presse »
Utilisez la checklist ci-dessus. La plupart des entreprises le font en un après-midi puis l'oublient un an — c'est très bien ainsi.

---

## Skills liés

- `directory-submissions` : pour les soumissions aux annuaires startups/SaaS/IA — intention différente, liste différente
- `launch` : pour les lancements produit
- `social` : pour l'engagement sur les réseaux sociaux
- `cold-email` : pour la prospection à froid de prospects (le pitching de journalistes, lui, se traite ici)
