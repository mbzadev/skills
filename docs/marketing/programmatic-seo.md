## Ce qu’il fait

`programmatic-seo` construit des pages SEO optimisées à grande échelle à partir d’un template et d’un jeu de données — annuaires, pages de localisation, comparatifs, intégrations, pages par persona. Sa contrainte définissante : chaque page générée doit apporter une valeur qui lui est propre ; le skill refuse le simple échange de variables dans un gabarit, parce que c’est exactement ce qui déclenche les pénalités thin content et scaled content abuse.

## Quand l’utiliser

Appelez `/programmatic-seo`, ou laissez Codex le sélectionner lorsqu’une tâche correspond.

Utilisez ce skill lorsque vous voulez créer beaucoup de pages similaires ciblant des mots-clés ou des lieux différents — « programmatic SEO », « pSEO », « pages à grande échelle », « [mot-clé] + [ville] », « directory », « comparison pages », « integration pages », « générez 100 pages ». Pour diagnostiquer des problèmes SEO sur des pages existantes, utilisez plutôt [seo-audit](https://aihero.dev/skills-seo-audit) ; pour décider quels contenus créer sans logique de template, [content-strategy](https://aihero.dev/skills-content-strategy).

## Prérequis

Le skill lit le contexte product-marketing du projet (fichier `.agents/product-marketing.md`) avant de poser ses questions — produit, audience et objectif de conversion orientent le choix du playbook. Aucune donnée n’est techniquement requise pour démarrer, mais la hiérarchie de défendabilité (données propriétaires > dérivées du produit > générées par les utilisateurs > sous licence > publiques) décide de la solidité du projet.

## Les 12 playbooks

Le choix du playbook part de ce que vous avez, pas de ce que vous imitez :

| Si vous avez… | Envisagez… |
|----------------|------------|
| Des données propriétaires | Directory, Profils |
| Un produit avec intégrations | Intégrations |
| Un produit design/créatif | Templates, Exemples |
| Une audience multi-segments | Personas |
| Une présence locale | Localisation |
| Un produit outil/utilitaire | Conversions |
| Du contenu ou de l’expertise | Glossaire, Curation |
| Un paysage concurrentiel fourni | Comparatifs |

Les playbooks se combinent (« best coworking spaces in San Diego » superpose curation et localisation) ; l’implémentation détaillée de chacun vit dans la référence `playbooks` du skill.

## La chaîne valeur unique → indexation

Un projet programmatic se joue sur cinq maillons : le pattern de mots-clés (structure répétée, variables, volume agrégé), les données qui remplissent les pages et leur fraîcheur, le template (introductions uniques, contenu conditionnel, CTA adaptés à l’intention), le maillage interne en hub and spoke sans pages orphelines, et la stratégie d’indexation — prioriser les patterns à fort volume, noindex les variantes trop maigres, séparer les sitemaps par type de page. Une checklist pré-lancement couvre ces cinq maillons avant toute mise en ligne, et le suivi post-lancement surveille taux d’indexation, rankings, engagement et conversion.

## Questions fréquentes

**Combien de pages faut-il générer pour que ça marche ?**

Autant que vos données rendent réellement uniques — le principe est « 100 excellentes pages valent mieux que 10 000 pages maigres ». Le nombre de combinaisons du pattern fixe un plafond, mais la qualité des données et l’autorité du site fixent le plancher : la sur-génération sans demande de recherche est une des erreurs classiques.

**Sous-domaine ou sous-répertoire pour mes pages programmatiques ?**

Sous-répertoire, systématiquement : `yoursite.com/templates/resume/` concentre l’autorité du domaine, là où `templates.yoursite.com` la fragmente. La structure d’URL fait partie des principes non négociables du skill.

**Mes pages programmatiques sont lancées et n’indexent pas. Que faire ?**

C’est le scénario de passage vers [seo-audit](https://aihero.dev/skills-seo-audit), qui audite précisément crawl, indexation et thin content sur pages existantes. `programmatic-seo` intervient en amont et en création ; il ne diagnostique pas un site déjà en production.

## Indicateurs de réussite

- Le document de stratégie nomme le pattern visé, ses variables et le volume de recherche agrégé avant toute génération.
- Le template produit des introductions uniques et du contenu conditionnel selon les données — pas uniquement des variables substituées.
- Chaque page est reliée au site principal (hub and spoke, sitemap XML, fil d’Ariane) : aucune page orpheline.
- La checklist pré-lancement est passée : titles et meta descriptions uniques, schema markup, vitesse acceptable, indexation cohérente.
- La surveillance post-lancement suit taux d’indexation, trafic et conversions — pas seulement le nombre de pages publiées.

## Où il s’inscrit

`programmatic-seo` est l’outil de création à l’échelle de la famille SEO : il s’appuie sur [site-architecture](https://aihero.dev/skills-site-architecture) pour la hiérarchie de pages, l’URL et le maillage interne, et passe le relais à [seo-audit](https://aihero.dev/skills-seo-audit) pour auditer les pages une fois lancées. Pour parcourir toute la collection, démarrez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
