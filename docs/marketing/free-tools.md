## Ce qu'il fait

Il planifie et évalue des outils gratuits à visée marketing — calculateurs, générateurs, graders, testeurs — qui génèrent des leads, attirent du trafic organique et construisent la notoriété de marque : c'est l'engineering as marketing. Sa contrainte définissante : l'outil doit résoudre un vrai problème de l'audience, adjacent au produit cœur mais utile même sans lui, et se payer — valeur d'un lead × leads attendus > coût de construction + maintenance.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/free-tools`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill pour décider de construire un outil gratuit, en choisir le type, cadrer son MVP ou évaluer une idée par scorecard. Pour un lead magnet téléchargeable (ebook, checklist, template), utilisez plutôt [lead-magnets](https://aihero.dev/skills-lead-magnets).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : si un fichier `.agents/product-marketing.md` existe, il est lu avant toute question et seules les informations manquantes sont demandées. Connaître l'audience cible, ses points de douleur et votre capacité technique de maintenance conditionne directement la recommandation.

## Le filtre à huit facteurs

Chaque idée d'outil passe par une scorecard où huit facteurs sont notés de 1 à 5 — demande de recherche, adéquation audience / acheteurs, caractère unique, chemin naturel vers le produit, faisabilité, charge de maintenance, potentiel de link building, potentiel de partage. Le verdict est chiffré :

| Score total | Verdict |
|---|---|
| 25+ | Candidat solide |
| 15-24 | Prometteur |
| < 15 | À reconsidérer |

Six familles d'outils couvrent les usages — calculateurs pour les décisions chiffrées, générateurs pour la création rapide, analyseurs pour évaluer l'existant, testeurs, bibliothèques, interactifs — chacune reliée à une intention de recherche précise (« calculateur [chose] », « [type d'outil] gratuit »).

## Questions fréquentes

**Faut-il exiger l'e-mail pour utiliser l'outil ?**
Quatre options de gating existent, du totalement gated (capture maximale, usage réduit) à l'entièrement ungated (SEO pur, aucun lead direct) ; le gating partiel est le motif courant. Dans tous les cas : e-mail seul, échange de valeur explicite et aperçu du résultat avant la saisie.

**Construire sur mesure ou passer par du no-code ?**
Sur mesure quand le concept est unique et stratégique ; no-code (Outgrow, Typeform, Tally, Bubble…) pour tester vite avec des ressources limitées ; intégration d'un existant white-label quand l'outil n'est pas votre différenciateur.

**Que mettre dans le premier périmètre ?**
La fonctionnalité cœur qui fait une seule chose de façon fiable, une UX minimale qui fonctionne sur mobile, et une capture d'e-mail basique. La création de compte, la sauvegarde des résultats et le design parfait attendent.

## Indicateurs de réussite

- Chaque idée d'outil est notée sur les huit facteurs de la scorecard, avec un verdict chiffré plutôt qu'un avis.
- La recommandation de gating pèse explicitement capture contre portée.
- Le MVP proposé tient en trois briques et énumère ce qui est volontairement écarté.

## Où il s'inscrit

Canal d'acquisition autonome en amont du funnel : il attire des leads froids que [emails](https://aihero.dev/skills-emails) nourrit ensuite, et dont la page d'accueil s'optimise avec [cro](https://aihero.dev/skills-cro). Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
