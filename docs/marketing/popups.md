## Ce qu'il fait

Il conçoit et optimise tout élément de conversion qui interrompt la navigation : popups, modals, overlays, slide-ins, sticky bars et bandeaux d'annonce. Chaque recommandation couple un déclencheur à une audience et à une offre — c'est ce triptyque, et non la copy seule, qui décide du succès — puis l'encadre de règles de fréquence et de conformité. La contrainte permanente : convertir sans dégrader l'expérience ni la perception de la marque, car un popup qu'on ne peut pas fermer fait partir le visiteur pour de bon.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/popups`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill lorsqu'un élément en overlay doit être créé, retravaillé ou sauvegardé (exit intent, capture d'e-mails, bandeau promotionnel). Pour l'optimisation des formulaires et pages hors overlay, utilisez plutôt [cro](https://aihero.dev/skills-cro).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question, et seules les informations manquantes sont demandées. Les exigences de conformité (RGPD notamment) et la répartition mobile / desktop du trafic sont demandées si vous ne les avez pas précisées.

## Le triptyque déclencheur / audience / offre

Le cœur du skill est un choix ordonné parmi six familles de déclencheurs, chacune signalant un niveau d'intention différent :

| Déclencheur | Ce qu'il capte | Cas type |
|---|---|---|
| Délai 30-60 s | engagement généré | visiteurs quelconques |
| Scroll 25-50 % | lecture du contenu | articles, contenus longs |
| Exit intent | intention de départ | e-commerce, lead gen |
| Clic | demande explicite | lead magnets, démos |
| Nombre de pages | comportement de comparaison | parcours multi-pages |
| Comportement | intention forte | abandon de panier, page tarifs |

La copy suit des formules éprouvées (bénéfice, preuve sociale, curiosité) et le refus reste poli — jamais culpabilisant. La mesure boucle le tout : taux d'impression, conversion, close rate, avec des benchmarks (2-5 % pour un popup e-mail, 3-10 % en exit intent, 10 % et plus déclenché au clic).

## Questions fréquentes

**Après combien de temps afficher un popup ?**
Jamais après 5 secondes — l'interruption arrive avant tout engagement. Misez sur 30 à 60 secondes, ou préférez un déclencheur comportemental (scroll, clic, exit intent) qui s'aligne sur l'intention réelle plutôt que sur l'horloge.

**Comment éviter de ruiner mon SEO mobile ?**
Les interstitiels intrusifs pénalisent le référencement, surtout sur mobile : pas d'overlay plein écran avant le contenu, préférez un slide-up en bas d'écran, et gardez les bandeaux raisonnablement fermables. Cookies et vérification d'âge restent tolérés.

**Combien de popups peut-on cumuler ?**
Plusieurs, à condition de définir des règles de conflit : une seule apparition par session, refus mémorisé pendant 7 à 30 jours, exclusion des parcours de paiement et des visiteurs déjà convertis.

## Indicateurs de réussite

- Chaque popup recommandé est spécifié par son type, son déclencheur, son ciblage et sa fréquence — pas seulement par sa copy.
- Les règles de fréquence et d'exclusion (sessions, refus, pages de conversion) accompagnent la recommandation.
- Les options de fermeture et l'accessibilité (clavier, focus, contraste) figurent dans les notes de design.
- Les hypothèses de test arrivent avec des résultats attendus, séparées des changements à appliquer directement.

## Où il s'inscrit

Outil ponctuel dans la conversion du trafic : il capte l'attention là où [cro](https://aihero.dev/skills-cro) optimise la page qui l'entoure, et alimente [emails](https://aihero.dev/skills-emails) une fois l'e-mail capturé. Pour planifier le contenu qui servira d'appât, [lead-magnets](https://aihero.dev/skills-lead-magnets) est le voisin direct. Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
