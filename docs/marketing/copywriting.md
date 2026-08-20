## Ce qu'il fait

`copywriting` rédige, réécrit ou améliore le texte de n'importe quelle page web — homepage, landing page, page tarifs, page fonctionnalité, « à propos », page produit — avec pour objectif de persuader et de convertir.

Sa contrainte définissante : la clarté passe avant l'esprit. À chaque hésitation entre clair et créatif, le skill tranche pour clair, et il refuse par principe le vague (« optimiser », « gagner du temps ») au profit du mesurable (« de 4 heures à 15 minutes »). Avant d'écrire, il cherche un contexte product-marketing dans le projet et ne redemande que ce que ce contexte ne dit pas déjà.

## Quand l'utiliser

Appelez `/copywriting`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsque du texte de site doit être écrit ou retravaillé pour persuader ou convertir : headline, proposition de valeur, tagline, CTA, section de page complète. Pour relire et resserrer un copy qui existe déjà, utilisez plutôt [copy-editing](https://aihero.dev/skills-copy-editing) ; pour le copy d'e-mail, [emails](https://aihero.dev/skills-emails) ; pour l'offre sous le copy (bonus, garanties, cadrage de valeur), [offers](https://aihero.dev/skills-offers).

## Prérequis

Aucun obligatoire. Si le projet contient un fichier `.agents/product-marketing.md`, le skill le lit en premier et s'appuie sur la voix de marque et le langage client qui y sont décrits — sinon, il recueille ce contexte par ses questions.

## Clarté, bénéfices, spécificité

Trois arbitrages gouvernent chaque phrase :

- **Clair plutôt que créatif** — le message passe avant l'esprit.
- **Bénéfices plutôt que fonctionnalités** — ce que le produit change pour le client, pas ce qu'il fait.
- **Spécifique plutôt que vague** — des chiffres, des délais, des exemples concrets à la place d'adjectifs.

S'y ajoutent le langage du client (repris des avis, entretiens et tickets support) et une seule idée par section, pour que la page déroule un argument plutôt qu'un inventaire.

## Above the fold et CTA

La zone au-dessus de la ligne de flottaison porte l'essentiel : headline (le message le plus important, spécifique), subheadline (1-2 phrases qui précisent) et CTA principal. Le skill fournit des formules de headlines et une règle stricte pour les CTA : [verbe d'action] + [ce que le lecteur obtient] — « Démarrer mon essai gratuit » plutôt que « S'inscrire ». Il livre le copy section par section, annoté des principes appliqués, avec 2 à 3 alternatives pour les headlines et les CTA.

## Questions fréquentes

**Peut-il écrire dans ma voix de marque ?**

Oui, à condition de la connaître. Le skill établit le niveau de formalité et la personnalité de marque avant d'écrire — et les lit directement dans `.agents/product-marketing.md` si ce fichier existe dans le projet.

**Pourquoi mes CTA sont-ils systématiquement réécrits ?**

Les CTA génériques (« S'inscrire », « En savoir plus », « Soumettre ») sont considérés comme faibles : ils ne disent pas ce que le lecteur obtient. La formule attendue est verbe d'action + bénéfice, éventuellement complétée d'une précision (« pour mon équipe »).

**Faut-il relire le résultat avec un autre skill ?**

Pour un enjeu fort, oui : `copywriting` produit le premier jet, et [copy-editing](https://aihero.dev/skills-copy-editing) enchaîne avec des passes de relecture ciblées (clarté, ton, preuve, spécificité…).

## Indicateurs de réussite

- Le copy livré est organisé par section : headline, subheadline, CTA, puis titres et corps de chaque section.
- Chaque headline et chaque CTA propose 2 à 3 alternatives avec leur justification.
- Les phrases vagues ont disparu au profit de chiffres, de délais ou d'exemples concrets.
- Aucune statistique ni témoignage inventé n'apparaît dans le texte.
- Les choix clés sont annotés du principe qui les justifie.

## Où il s'inscrit

`copywriting` est l'étape de rédaction de la chaîne marketing : il transforme un positionnement en texte de page prêt à publier. Il s'appuie en amont sur le contexte product-marketing, et se prolonge vers [copy-editing](https://aihero.dev/skills-copy-editing) pour la relecture, [cro](https://aihero.dev/skills-cro) quand c'est la structure de la page qui cloche, et [ab-testing](https://aihero.dev/skills-ab-testing) pour départager des variantes. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
