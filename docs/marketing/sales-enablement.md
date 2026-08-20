## Ce qu'il fait

`sales-enablement` produit les supports qui aident une équipe commerciale à conclure : pitch decks de 10-12 slides, one-pagers, bibliothèques d'objections, scripts de démo, calculateurs de ROI, propositions, playbooks et buyer persona cards — chaque asset dans le format adapté à son usage.

Sa contrainte définissante : le support est conçu pour être utilisé en 3 secondes en plein appel, pas pour être exhaustif. Tout est spécifique au persona, à l'étape du deal et au cas d'usage, chaque affirmation se rattache à un résultat métier (« réduit le temps de reporting de 80 % » plutôt que « analytics propulsé par IA »), et les représentants sont impliqués dans la création — si un commercial réécrit le deck avant de l'envoyer, c'était le mauvais deck.

## Quand l'utiliser

Appelez `/sales-enablement`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il s'agit de créer ou refondre du matériel commercial : sales deck, one-pager, leave-behind, traitement d'objections, script de démo, talk track, playbook, proposition ou persona card. Pour les pages de comparaison publiques et battle cards, utilisez plutôt [competitors](https://aihero.dev/skills-competitors) ; pour les e-mails de prospection à froid, [cold-email](https://aihero.dev/skills-cold-email).

## Prérequis

Le skill lit en premier un éventuel fichier `.agents/product-marketing.md` dans le projet pour la proposition de valeur et les différenciateurs. À défaut, il rassemble ces éléments en questionnant — motion de vente, taille moyenne des deals, personas de la décision d'achat.

## Un déroulé par type d'acheteur

Le même deck ne s'adresse pas au CTO, au CFO et au champion : le premier veut l'architecture et la sécurité, le deuxième le ROI et le délai de retour, le troisième des arguments pour vendre en interne. La démo suit la même loi — elle vient après la découverte, jamais avant, et montre 3-4 workflows mappés sur les douleurs constatées, pas un tour de fonctionnalités.

## L'objection traitée comme un document

Chaque objection est documentée en cinq volets : comment les représentants l'entendent, la vraie inquiétude derrière les mots, l'approche de réponse, la preuve spécifique et la question de relance. Le tout existe en deux formats — une table de référence rapide qui tient sur un écran pour les appels en direct, et un document détaillé pour la préparation et le role-play.

## Questions fréquentes

**Quelle longueur pour une proposition ?**

Cinq à sept pages. Au-delà de dix, elle ne sera pas lue. Le résumé exécutif se personnalise au minimum, le prix n'est jamais enfoui, et seules les études de cas du même secteur ou cas d'usage figurent dedans.

**Faut-il un playbook, et quand ?**

À chaque lancement de produit, nouveau segment de marché ou montée en compétence de recrues — le playbook réduit nettement le ramp-up. La condition : un propriétaire nommé et une revue trimestrielle, car un playbook sans maintien pourrit.

**Calculateur de ROI : tableur, outil web ou slides ?**

Le tableur se construit vite et se personnalise par deal (inside sales) ; l'outil web capture des leads et passe à l'échelle quand le volume de deals le justifie ; la version slide s'intègre au récit pour les présentations aux dirigeants.

## Indicateurs de réussite

- Chaque asset livré dans le format annoncé pour son type : deck slide par slide avec notes du présentateur, objections en tableau, script de démo minuté scène par scène.
- Chaque affirmation se rattache à un résultat mesurable, jamais à une simple fonctionnalité.
- Le contenu varie selon le persona et l'étape du tunnel visés.
- Les réponses aux objections comportent systématiquement une preuve et une question de relance.
- Un one-pager tient sur une page recto (recto-verso maximum) et se scanne en 30 secondes.

## Où il s'inscrit

`sales-enablement` est l'atelier de supports de la chaîne de revenus : il transforme le positionnement en outils de conquête. Il s'appuie sur [product-marketing](https://aihero.dev/skills-product-marketing) pour le positionnement fondateur et fonctionne en binôme avec [revops](https://aihero.dev/skills-revops), qui définit le cycle de vie et le routage que ces supports servent. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
