---
name: writing-shape
description: "Écrivez sans relancer l’exploration : transformez la matière première en article, paragraphe par paragraphe."
---

<a-faire>

L’utilisateur a fourni — ou va fournir — un fichier Markdown de matière première. Traitez-le comme une réserve de contenu, qu’il s’agisse d’une liste ordonnée de fragments, d’un long texte non structuré ou d’une transcription. Le format importe peu. Lisez-le entièrement avant toute autre action.

Menez ensuite une séance de structuration qui produit un document d’article distinct. L’exploration est terminée et la matière disponible est fixée : engagez-vous sur une structure, puis puisez dans le contenu pour la remplir. Ne modifiez pas le fichier source ; ce skill le traite en lecture seule.

Si l'utilisateur n'a pas indiqué où enregistrer l'article, demandez-lui une fois et souvenez-vous du chemin.

</a-faire>

<informations>

## La boucle

1. **Lisez la pile.** Lisez le fichier d'entrée dans son intégralité. Ayez une idée de ce qu'il y a dedans.
2. **Établissez les prérequis.** Déterminez avec l’utilisateur ce que le lecteur connaît déjà — les concepts **ancrés** dès le départ. Tout autre concept doit être introduit par un bloc avant qu’un bloc ultérieur puisse s’appuyer dessus. Voir [Ancrage](#ancrage).
3. **Projet de 2 à 3 ouvertures de candidats.** Chaque ouverture doit impliquer une thèse ou un angle différent pour l'article. Montrez-les tous. Forcer l'utilisateur à choisir ou à composer un hybride. L'ouverture choisie définit ce que doit faire le reste de l'article.
4. **Développez paragraphe par paragraphe.** Après l'ouverture, demandez « étant donné cette ouverture, qu'est-ce que le lecteur a besoin d'entendre ensuite ? Tirez le matériel de la pile pour répondre. Le bloc suivant ne peut s'appuyer que sur des concepts ancrés et en ancrer de nouveaux à mesure qu'il atterrit. Discutez de la forme que prendra le bloc suivant : un paragraphe, une liste, un tableau, une légende, une citation, un bloc de code. Chaque choix de format doit être délibéré et défendable.
5. **Ajouter au fichier d'article au fur et à mesure.** Ne pas regrouper. Écrivez immédiatement chaque paragraphe ou bloc convenu afin que l'utilisateur puisse voir l'article prendre forme.
6. **Bouclez l'étape 4 jusqu'à ce que l'article soit terminé.** L'utilisateur décide quand il est terminé.

## Ancrage

Chaque **concept** doit être **ancré** avant qu’un bloc puisse s’appuyer dessus : soit le lecteur le connaît déjà, soit il l’a rencontré dans un bloc précédent. Un bloc qui suppose un concept non introduit perd le lecteur. L’unité pertinente est le concept, pas le mot qui le désigne : un passage peut dépendre d’une idée inconnue sans employer de jargon. Lorsqu’un concept possède un nom — un **terme** — l’ancrer consiste à présenter ensemble l’idée et son nom.

Un concept s’ancre de deux manières :

- **Prérequis** — mis à la terre avant l'ouverture. Le lecteur l'apporte. Corrigé au départ.
- **Introduit** — un bloc l'établit, et à partir de là, il est mis à la terre pour le reste de l'article.

Tenez à jour la liste des concepts ancrés. Lorsque vous demandez « que doit comprendre le lecteur ensuite ? », tout concept encore absent mais nécessaire au prochain mouvement devient lui-même la réponse : introduisez-le d’abord, ici ou dans un bloc antérieur. C’est le pendant de [l’exploitation de la matière première](#exploiter-la-matière-première) : dans un cas, un élément manque à la source ; dans l’autre, une base manque à l’article.

Le levier est ce que vous faites comme condition préalable par rapport à ce que vous fondez dans l'article. Exigez trop dès le départ et vous excluez les lecteurs ; trop de terrain à l’intérieur et l’ouverture se noie dans les définitions. Réglez-le avec l'utilisateur lorsque vous établissez les conditions préalables.

## Sensation conversationnelle

Il s’agit d’une séance de grillades inversée. Lors de l'idéation, la question était « qu'est-ce que vous remarquez réellement ? » Ici, la question est "de quoi argumente réellement cet article, et dans quel ordre le lecteur a-t-il besoin de l'entendre ?" Repoussez. Refusez de laisser passer les transitions faibles. Si un paragraphe ne mérite pas sa place, coupez-le.

Mouvements spécifiques à continuer à utiliser :

- "Qu'est-ce que ce paragraphe fait pour le lecteur que le précédent n'a pas fait ?"
- "Si je coupe ça, qu'est-ce qui casse ?"
- "Est-ce de la prose, ou devrait-ce être une liste ? Pourquoi de la prose ?"
- "Cette phrase fait deux tâches : divisez-la ou choisissez-en une."
- "L'ouverture promettait X. Nous avons dérivé vers Y. Soit nous le renfilons, soit nous modifions l'ouverture."

## Exploiter la matière première

Traitez la matière première comme une carrière et non comme un scénario. Tirez un fragment, retravaillez-le pour l'adapter au paragraphe environnant et placez-le. Un fragment peut être réparti sur plusieurs paragraphes, fusionné avec un autre ou paraphrasé. Le rôle du tas est d'être exploité ; le travail de l'article est de lire d'une seule voix.

S'il manque quelque chose dont l'article a besoin, nommez explicitement l'écart : "Nous avons besoin d'un exemple ici et la pile n'en a pas - donnez-m'en un maintenant ou nous coupons cette section."

## Formater les arguments à avoir réellement

Lorsque vous choisissez comment restituer un bloc, pesez ces compromis à voix haute avec l'utilisateur, et non en silence :

- **Prose contre liste.** La prose porte l'argument ; les listes contiennent des éléments parallèles. Si les éléments ne sont pas vraiment parallèles, la prose est meilleure. Si tel est le cas, une liste est plus rapide à analyser.
- **En ligne ou légende.** Les conseils, les avertissements et les apartés sont placés dans les légendes (`> [!TIP]`, `> [!NOTE]`) — mais seulement s'ils font véritablement dérailler l'argument principal en ligne. Sinon, laissez-les en ligne.
- **Tableau vs structure répétée.** Si la même forme se répète plus de 3 fois avec les mêmes champs, un tableau. Sinon, prose avec des pistes en gras.
- **Citation ou paraphrase.** Citer lorsque le libellé original est le point important. Paraphrasez quand seule l’idée compte.
- **Bloc de code vs code en ligne.** → bloc multiligne, exécutable ou illustratif. Jeton ou identifiant unique → en ligne.

## Rythme d'écriture

Ajouter au fichier de l'article au fur et à mesure que chaque bloc est convenu. Relisez le fichier à partir du disque avant chaque écriture - l'utilisateur peut avoir modifié entre les tours. N'écrasez jamais aveuglément. Si l'utilisateur souhaite réécrire un paragraphe, modifiez ce paragraphe spécifique sur place ; laissez le reste tranquille.

## Hors de portée

-  Extraction de nouveaux fragments qui ne sont pas dans la pile (gérer les espaces comme dans "Tirer de la pile").
- Modification du fichier matière première.
- Publication, formatage pour une plate-forme spécifique ou ajout de éléments de présentation que l'utilisateur n'a pas demandés.

</informations>
