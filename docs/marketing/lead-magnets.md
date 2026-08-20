## Ce qu'il fait

`lead-magnets` planifie les contenus d'échange qui valent un e-mail : checklist, cheat sheet, template, ebook, quiz, webinar ou resource library. Il choisit le format selon l'effort de création et l'étape d'achat, décide du niveau de gating, structure la landing page et le plan de distribution, puis fixe les métriques et les premiers tests A/B. Sa règle directrice : le lead magnet doit résoudre un problème précis et constituer un chemin naturel vers le produit, pas un aimant à e-mails déconnecté de ce que vous vendez.

## Quand l'utiliser

Appelez `/lead-magnets`, ou laissez Codex le sélectionner lorsqu'une tâche correspond. Utilisez ce skill lorsque vous décidez quoi créer et comment le distribuer : « lead magnet », « gated content », « content upgrade », « opt-in », « template Notion », « resource library », ou la question « que donner en échange d'e-mails ? ». Pour un outil interactif comme lead magnet (calculateur, grader, quiz), utilisez plutôt [free-tools](https://aihero.dev/skills-free-tools) ; pour rédiger le contenu lui-même, voyez [copywriting](https://aihero.dev/skills-copywriting) ; pour la séquence d'e-mails qui suit la capture, [emails](https://aihero.dev/skills-emails).

## Prérequis

Le skill lit le contexte `product-marketing` du projet (`.agents/product-marketing.md`) s'il existe, pour ancrer l'ICP et les problèmes résolus sans les redemander. Il s'appuie aussi sur votre inventaire de contenu existant — articles, guides, données, templates internes — car le meilleur lead magnet recycle souvent un actif déjà produit.

## Le bon format pour la bonne étape

Le choix se croise sur deux axes : l'étape d'achat et l'effort de production. En awareness, une checklist ou un quiz suffit (quelques heures de travail) ; en consideration, un template de comparaison ou un assessment ; en decision, un template prêt à l'emploi, un free trial ou un guide de migration qui lève la friction. Le skill refuse les formats mixtes — un ebook qui combine vidéo et tableur dilue la consommation — et vise un contenu consommable en moins de 30 minutes, idéalement 10.

## Le gating et ses compromis

| Approche | Compromis |
|----------|-----------|
| Gate complet | Capture maximale, portée réduite |
| Gate partiel (aperçu + version complète) | Équilibre portée/capture |
| Non gated + optionnel | Portée maximale, capture réduite |
| Content upgrade (article + bonus) | Contextuel, forte intention |

Chaque champ de formulaire supplémentaire coûte 5 à 10 % de conversion : le skill demande le strict minimum et réserve les formulaires multi-champs aux offres à forte valeur. Les benchmarks par format et par secteur (20-40 % de conversion sur trafic chaud, 5-15 % sur trafic froid) vivent dans ses fichiers de référence.

## Questions fréquentes

**Faut-il tout gater ou laisser le contenu en accès libre ?**

Cela dépend de l'étape : l'éducation haut de funnel gagne à rester largement accessible (portée maximale), tandis que le contenu à forte valeur bas de funnel justifie un gate complet. Le content upgrade — un bonus contextuel attaché à un article précis — est souvent le meilleur des deux mondes : il convertit 2 à 5 fois mieux qu'un CTA générique de barre latérale parce qu'il ne s'adresse qu'aux lecteurs déjà intéressés par ce sujet précis.

**Comment savoir si un lead magnet attire de bons leads ?**

Le taux de conversion de la landing page ne suffit pas. Le skill vérifie les signaux de qualité : engagement e-mail supérieur à la moyenne, progression vers trial ou démo au rythme attendu, faible taux de désabonnement après livraison, correspondance avec la démographie de l'ICP. Un lead magnet très convertisseur qui n'alimente pas le pipeline est un échec silencieux.

**Un ebook n'est-il pas plus impressionnant qu'une simple checklist ?**

Pas nécessairement : la valeur perçue compte plus que l'épaisseur. Une checklist se crée en 1-2 heures, convertit entre 30 et 50 % sur trafic chaud et se consomme en minutes ; un ebook demande 1 à 3 semaines et sert surtout l'autorité et l'éducation profonde. Commencez petit, mesurez, puis montez en gamme sur les formats qui démontrent de la qualité de leads.

## Indicateurs de réussite

- La recommandation nomme le format, le sujet, l'étape d'achat visée et l'effort de création estimé.
- Le plan de gating explicite le niveau choisi, les champs du formulaire et la structure de la landing page.
- La distribution couvre plusieurs canaux, dont les content upgrades contextuels.
- Les KPIs distinguent attractivité de l'offre, coût par lead, qualité des leads et efficacité du nurture, avec le premier test A/B désigné.

## Où il s'inscrit

`lead-magnets` est l'étape de capture de la famille Ingénierie de la croissance : il alimente le haut du funnel que [emails](https://aihero.dev/skills-emails) nurture ensuite et que [cro](https://aihero.dev/skills-cro) optimise sur la landing page. Il travaille en amont de [signup](https://aihero.dev/skills-signup), l'inscription produit elle-même. Quand vous hésitez sur la compétence à mobiliser, [ask-mabza](https://aihero.dev/skills-ask-mabza) route la collection.
