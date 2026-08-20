## Ce qu'il fait

Il produit un plan marketing annuel complet, structuré en 13 sections par étape de funnel AARRR (Acquisition, Activation, Rétention, Referral, Revenue), pour un client, une entreprise conseillée ou son propre produit. Sa contrainte définissante : le plan n'est jamais générique ni aspiratif — chaque recommandation est ancrée dans les données réelles du client (budget, équipe, canaux, stade de financement) et nomme le skill ou l'intégration qui l'exécute, ce qui le rend immédiatement actionnable par une petite équipe.

Le livrable est un document markdown unique prêt à coller dans Notion, compilé au terme de trois phases — recherche et intake, revue interactive section par section, puis vérification finale — et reprendable à tout moment grâce à une machine à états persistée sur disque.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/marketing-plan`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill lorsqu'il faut une roadmap marketing sur 12 mois — démarrage de mission de fractional CMO, consolidation d'un travail marketing éclaté, séquençage d'un audit déjà noté. Pour des idées sans engagement dans un plan, utilisez plutôt [marketing-ideas](https://aihero.dev/skills-marketing-ideas) ; pour l'exécution sur un seul canal, le skill dédié à ce canal ([emails](https://aihero.dev/skills-emails), [ads](https://aihero.dev/skills-ads), [seo-audit](https://aihero.dev/skills-seo-audit)…).

## Prérequis

Le plan s'appuie sur le contexte product-marketing du projet : `.agents/product-marketing.md` est lu en premier et la section « Cadre stratégique » s'y construit directement — créez-le avec [product-marketing](https://aihero.dev/skills-product-marketing) si ce fichier n'existe pas encore.

## Le squelette AARRR et la pile d'ops

Deux mécanismes portent le plan. Le premier est l'étiquetage AARRR : chaque mouvement porte l'étape de funnel qu'il sert, ce qui impose un ordre de priorité exécutable là où un plan par canaux empile des tactiques sans séquençage. Le second est la pile d'opérations marketing : une petite équipe équipée des bons skills et intégrations MCP produit le travail d'une organisation marketing de 15 à 20 personnes, et la section dédiée du plan montre cette pile étape par étape.

Autour de ce squelette :

| Mécanisme | Rôle dans le plan |
|---|---|
| Grille d'état actuel (17 volets) | note chaque dimension de 0 à 5 ; les audits déjà notés sont ingérés tels quels |
| Déblocages par stade de financement | paliers de budget pre-seed → Series B+ ; ce qui change quand le tour se ferme |
| Budget défendable | méthode revenu (5–40 % de l'ARR) ou méthode objectif, plus 10–20 % d'expérimental |
| Banque d'idées | les 139 idées de marketing-ideas croisées avec AARRR et un statut client (Now / Q2 / Q3+ / Skip) |

## Questions fréquentes

**Quelle longueur pour le plan final ?**
Environ 8 000 à 12 000 mots par défaut — les fondateurs le partagent avec équipe et investisseurs, la concision y est une fausse économie. Plus court convient à un stade précoce, plus long à un client avec de l'historique, mais chaque section doit rester dense, pas gonflée.

**Un plan finalisé peut-il être modifié ?**
Jamais silencieusement : le skill propose de le réviser en v2, de repartir de zéro ou de rouvrir une section, et la machine à états conserve chaque section approuvée comme artefact canonique.

**Que faire des données introuvables pendant l'intake ?**
Elles vont dans les « Décisions ouvertes » de la dernière section plutôt que d'être éludées — un CAC inconnu est la décision ouverte au plus fort impact, puisque chaque projection de revenu en dépend.

## Indicateurs de réussite

- Chaque mouvement du plan porte son étiquette AARRR et nomme le skill ou l'outil qui l'exécute.
- La roadmap 90 jours affecte des responsables nommés, pas seulement des actions.
- Le budget posé cite sa méthode de calcul et inclut une couche expérimentale de 10 à 20 %.
- La banque d'idées montre aussi ce qui est écarté (statut Skip) avec sa justification.
- Le résumé exécutif tient en trois paris, des priorités à 90 jours et se lit en 60 secondes.

## Où il s'inscrit

Sommet de la chaîne marketing : ce skill consomme le contexte posé par [product-marketing](https://aihero.dev/skills-product-marketing) et les idées de [marketing-ideas](https://aihero.dev/skills-marketing-ideas), puis délègue chaque étape du funnel au skill spécialisé — [onboarding](https://aihero.dev/skills-onboarding) pour l'Activation, [emails](https://aihero.dev/skills-emails) pour la Rétention, [pricing](https://aihero.dev/skills-pricing) pour le Revenue. Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
