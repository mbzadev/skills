## Ce qu'il fait

`revops` conçoit et optimise les systèmes qui relient marketing, ventes et customer success en un moteur de revenus unifié : définitions des stages du cycle de vie, lead scoring, routage, SLA de handoff, hygiène du pipeline CRM et tableau de bord de métriques.

Sa contrainte définissante : rien ne s'automatise avant d'être défini sur le papier. Le skill impose une source de vérité unique (le CRM), un MQL qui exige à la fois fit et engagement — une entreprise dans l'ICP qui ne s'engage pas n'est pas un MQL — et un SLA mesuré sur chaque handoff entre équipes, car chaque relais est traité comme une fuite potentielle.

## Quand l'utiliser

Appelez `/revops`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il s'agit de cycle de vie des leads, de lead scoring, de routage, de SLA marketing-ventes, de deal desk, de data hygiene ou de « leads qui n'arrivent jamais aux ventes ». Pour écrire la séquence outbound elle-même, utilisez plutôt [cold-email](https://aihero.dev/skills-cold-email) ; pour la planification d'un lancement go-to-market, [launch](https://aihero.dev/skills-launch).

## Prérequis

Aucun obligatoire, mais le skill lit en premier un éventuel fichier `.agents/product-marketing.md` dans le projet pour la motion GTM et l'ICP. Ses livrables (définitions de stages, spécification de scoring, règles de routage) sont conçus pour être implémentés dans un CRM — HubSpot, Salesforce ou équivalent.

## Définir avant d'automatiser

Le principe directeur : fixer les définitions de stages, les critères de scoring et les règles de routage avant de construire les workflows, car automatiser un processus cassé produit des résultats cassés plus vite. Le speed-to-lead rythme les décisions de routage — contacter sous 5 minutes rend la qualification 21 fois plus probable, et après 24 heures le lead est effectivement froid.

## Chaque handoff a un SLA

Le handoff MQL vers SQL est le pivot du système : le représentant contacte sous 4 heures ouvrées, qualifie ou rejette sous 48 heures, et chaque MQL rejeté repart en recyclage avec un code de raison. Le pipeline applique la même discipline — champs obligatoires par stage, alertes sur les deals dormants au-delà de 2× la durée moyenne, détection des sauts de stage.

## Questions fréquentes

**À partir de quel ACV faut-il un deal desk ?**

Le seuil indicatif du skill est 25 K$, ou tout deal non standard : paiement net-90, contrat pluriannuel sur mesure, remise au-delà des paliers publiés. Les remises de 10-20 % passent chez le directeur commercial, 20-40 % chez le VP Sales, au-delà en revue deal desk.

**Quel seuil de score pour un MQL ?**

Généralement 50 à 80 points sur une échelle de 100, combinant scoring explicite (fit : taille, secteur, rôle) et implicite (engagement : page pricing, démo, visites multiples). Le scoring négatif — domaines concurrents, adresses personnelles — fait partie du modèle, et la recalibration est trimestrielle, pas optionnelle.

**Quelles métriques un tableau de bord RevOps doit-il montrer ?**

Trois vues : marketing (volume de leads, taux de MQL, coût par MQL), ventes (valeur du pipeline, conversion par stage, vélocité) et direction (CAC, LTV:CAC avec une cible de 3:1 à 5:1, couverture de pipeline à 3-4x le quota).

## Indicateurs de réussite

- Chaque stage du cycle de vie livré précise critères d'entrée, critères de sortie et propriétaire.
- La définition du MQL combine fit et engagement, et le handoff vers les ventes inclut des délais chiffrés (4 heures / 48 heures) avec recyclage des rejets.
- Les règles de routage comportent un propriétaire de repli et privilégient le speed-to-lead.
- Les benchmarks accompagnent les métriques (couverture 3-4x, LTV:CAC 3:1 à 5:1, win rate 20-30 %).
- Les livrables forment des documents autonomes, prêts à implémenter dans le CRM.

## Où il s'inscrit

`revops` est l'infrastructure de la chaîne de revenus : il définit comment un lead traverse marketing et ventes, en amont et en aval de l'exécution. En aval des listes construites par [prospecting](https://aihero.dev/skills-prospecting), il gère le scoring, le routage et le suivi de pipeline ; il alimente [sales-enablement](https://aihero.dev/skills-sales-enablement) en définitions partagées entre équipes. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
