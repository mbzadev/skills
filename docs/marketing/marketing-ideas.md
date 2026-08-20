## Ce qu'il fait

Il pioche dans une bibliothèque de 139 idées marketing éprouvées pour produits SaaS et logiciels, et en recommande 3 à 5 adaptées à la situation — pas la liste entière. Sa contrainte définissante : chaque recommandation est filtrée par le stade (pré-lancement, précoce, croissance, scale), le budget (gratuit à gros budget) et l'horizon temporel de l'utilisateur, puis détaillée jusqu'aux premières étapes de mise en œuvre et aux ressources nécessaires.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/marketing-ideas`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill lorsque la demande porte sur l'inspiration ou le choix de tactiques — « que puis-je tester d'autre ? », « je ne sais pas comment marketer ce produit » — ou qu'il faut débloquer une décision de croissance. Pour transformer ces idées en roadmap annuelle engageante, utilisez plutôt [marketing-plan](https://aihero.dev/skills-marketing-plan) ; pour exécuter sur un canal précis, le skill dédié à ce canal.

## Prérequis

Le skill lit le contexte product-marketing du projet (`.agents/product-marketing.md` s'il existe) avant toute question : produit, audience et stade s'en déduisent, et seules les informations manquantes sont demandées.

## Les trois filtres

La bibliothèque couvre 18 catégories — de programmatic SEO aux boucles virales, en passant par les partenariats, les lancements et le marketing Reddit — numérotées de 1 à 139, chacune documentée dans la référence embarquée. Ce qui transforme le catalogue en recommandation, ce sont les trois filtres croisés :

- **Stade** — pré-lancement (referrals de liste d'attente, préparation Product Hunt), précoce (contenu et communauté), croissance (payant, partenariats, événements), scale (marque, international).
- **Budget** — de gratuit (comment marketing, SEO) à gros budget (acquisitions de médias, campagnes de marque).
- **Horizon** — victoires rapides (publicité, e-mail), moyen terme (contenu, communauté), long terme (marque, effets de plateforme).

## Questions fréquentes

**Pourquoi seulement 3 à 5 idées plutôt que tout le catalogue ?**
Parce qu'une liste exhaustive paralyse. Les idées retenues dépendent du contexte — stade, budget, équipe, ce qui a déjà été essayé — et chacune arrive avec ses premières étapes et son résultat attendu.

**Les idées sont-elles spécifiques au SaaS ?**
La bibliothèque est tournée vers le SaaS et les produits logiciels, mais la plupart des catégories (outils gratuits, e-mail, partenariats, lancements) s'appliquent à tout produit numérique ; seules quelques entrées, comme les marketplaces d'apps, supposent un produit logiciel.

## Indicateurs de réussite

- Les recommandations se limitent à 3 à 5 idées, chacune reliée explicitement à la situation décrite.
- Chaque idée cite son numéro dans la bibliothèque et son cas d'usage.
- Le filtre budgétaire et le filtre de stade sont visibles dans la sélection — pas d'idée à gros budget pour un utilisateur sans budget.
- Chaque idée retenue est accompagnée de ses 2 à 3 premières étapes et de son résultat attendu.

## Où il s'inscrit

Réserve d'idées de la chaîne marketing : ce skill alimente les brainstorms et la section « banque d'idées » de [marketing-plan](https://aihero.dev/skills-marketing-plan), qui croise les 139 tactiques avec les étapes AARRR. Il s'appuie sur le contexte de [product-marketing](https://aihero.dev/skills-product-marketing) et délègue l'exécution aux skills de canal comme [programmatic-seo](https://aihero.dev/skills-programmatic-seo) ou [emails](https://aihero.dev/skills-emails). Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
