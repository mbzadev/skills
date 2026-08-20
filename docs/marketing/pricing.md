## Ce qu'il fait

`pricing` conçoit la monétisation d'un produit logiciel : combien facturer, pour quoi (la value metric), comment découper les tiers, quand monter les prix et comment construire la page qui porte tout ça. Le prix y est systématiquement traité comme value-based — placé entre la meilleure alternative suivante et la valeur perçue par le client, jamais dérivé du coût de service — et l'audit de pricing page se fait sur deux axes à la fois : l'expérience de l'acheteur humain et la lisibilité par les agents IA, parce qu'une page qu'un agent ne peut pas analyser perd des deals invisibles.

## Quand l'utiliser

Appelez `/pricing`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill pour décider du niveau de prix, structurer des plans (tiers, freemium, remise annuelle), mener une recherche de willingness to pay (Van Westendorp, MaxDiff), préparer une hausse ou auditer une pricing page. Pour construire une offre sur un service, un cours, du coaching ou du high-ticket B2B — bonuses, guarantees, value framing — utilisez plutôt [offers](https://aihero.dev/skills-offers).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question, et le contexte business (type de produit, marché cible, mouvement go-to-market) n'est redemandé que s'il manque.

## Les trois axes et la value metric

Toute décision de pricing se décompose en trois axes — le packaging (ce que chaque tier inclut), la pricing metric (ce pour quoi vous facturez) et le price point (les montants). Le pivot est la value metric : elle doit passer le test « quand le client consomme plus de la metric, obtient-il plus de valeur ? » — par utilisateur pour les outils collaboratifs, à l'usage pour la consommation variable, par contact pour les CRM. Une metric qui ne passe pas le test signifie que le prix n'est pas aligné sur la valeur.

## Le paste test

La vérification rapide de la lisibilité IA : donnez l'URL de la pricing page à une IA capable de naviguer — ou collez le texte rendu — et demandez « quels sont les plans et les prix ? ». Un échec net signale que les agents qui recommandent des outils auront aussi du mal. Les correctifs sont généralement à fort impact et faible effort : prix en texte plutôt qu'en image ou derrière « Contactez-nous », profondeur par tier énoncée, FAQ extractible, données structurées Product/Offer.

## Les signaux de hausse

Trois familles de signaux disent qu'il est temps d'augmenter : marché (les concurrents ont monté, les prospects ne tressaillissent plus), business (conversion supérieure à 40 %, churn mensuel inférieur à 3 %, unit economics solides) et produit (valeur significative ajoutée depuis le dernier pricing). La hausse elle-même suit quatre stratégies — grandfathering, hausse annoncée 3 à 6 mois à l'avance, hausse liée à de la valeur ajoutée, restructuration complète des plans.

## Questions fréquentes

**Combien de tiers faut-il ?**

Le cadre de départ est le Good-Better-Best : un tier d'entrée aux fonctionnalités principales, un tier recommandé qui porte le prix d'ancrage, un tier premium à 2-3x le prix du recommandé. Les tiers doivent se différencier sur au moins un axe explicite — feature gating, limites d'usage, niveau de support ou accès (API, SSO) — sinon le tableau comparatif ne guide personne.

**Quel test pour valider une value metric ?**

Une seule question : « quand un client consomme plus de [metric], obtient-il plus de valeur ? ». Si oui, la metric aligne prix et valeur, suit la croissance du client et reste difficile à contourner ; si non, le prix plafonne la valeur ou la sous-facture, et il faut changer de metric avant d'ajuster les montants.

**Pourquoi auditer la lisibilité IA d'une pricing page ?**

Les acheteurs demandent désormais aux assistants « quel est le meilleur X et combien ça coûte ? » avant de visiter un site. Les prix enfermés dans une image ou derrière un « Contactez-nous » sont invisibles pour ces agents : les deals perdus ne laissent même pas de trace. Le teardown note la page sur cet axe en plus de l'expérience humaine, et les correctifs se mettent en place avec les skills de données structurées et d'AI-SEO.

## Indicateurs de réussite

- Le prix retenu se situe entre la meilleure alternative suivante et la valeur perçue, et le raisonnement l'énonce.
- La value metric passe le test « plus de consommation → plus de valeur ».
- Chaque tier se distingue sur au moins un axe explicite, et la remise annuelle se situe dans la fourchette 17-20 %.
- Le teardown note la page sur les deux axes — expérience humaine et préparation aux agents IA — et retourne des correctifs priorisés.
- Les prix apparaissent en texte lisible, et l'implémentation des données structurées Product/Offer est confiée aux skills concernés.

## Où il s'inscrit

`pricing` est l'étape monétisation de la stratégie produit : elle fixe ce que vous facturez et comment les plans le structurent, en amont de la page et des écrans qui l'exécutent.

Il voisine [offers](https://aihero.dev/skills-offers), qui construit l'offre elle-même quand vous vendez des services, cours ou high-ticket B2B, et [churn-prevention](https://aihero.dev/skills-churn-prevention), qui défend le revenu fixé ici quand des clients menacent de partir. Pour naviguer l'ensemble de la collection, passez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
