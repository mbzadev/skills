## Ce qu'il fait

`launch` planifie les lancements de produits et les annonces de fonctionnalités SaaS : stratégie de canaux, séquencement des phases, lancement Product Hunt et marketing post-lancement, jusqu'à la checklist du jour J.

Sa contrainte définissante : un lancement n'est pas un événement d'un jour mais un processus en cinq phases — internal, alpha, beta, early access, full launch — où tout ce qui est capté sur les canaux loués ou empruntés doit finir dans les canaux possédés. La philosophie : les meilleures entreprises lancent encore et encore, chaque mise à jour étant une occasion de créer un élan qui se cumule.

## Quand l'utiliser

Appelez `/launch`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill dès qu'on prépare une sortie publique : lancement produit, annonce de fonctionnalité, beta, early access, waitlist, plan GTM ou « checklist de lancement ». Pour les idées de marketing continu après le lancement, utilisez plutôt [marketing-ideas](https://aihero.dev/skills-marketing-ideas) ; pour la page d'offre elle-même (bonus, garanties, rareté), [offers](https://aihero.dev/skills-offers).

## Prérequis

Le skill lit en premier un éventuel fichier `.agents/product-marketing.md` dans le projet pour le positionnement et l'audience. Il aide ensuite à répondre aux questions d'entrée : ce qu'on lance, taille de l'audience, canaux owned disponibles, calendrier, expérience des lancements précédents.

## Le framework ORB

Trois familles de canaux structurent la stratégie : **owned** (liste e-mail, blog, communauté — détenus, ils gagnent en efficacité avec le temps), **rented** (réseaux sociaux, marketplaces — rapides mais instables, à utiliser pour diriger le trafic vers l'owned) et **borrowed** (contenu invité, collaborations, influenceurs — crédibilité immédiate, à condition de convertir l'attention empruntée en relations possédées). La règle d'or : tout ramène finalement aux canaux owned.

## Product Hunt comme événement, pas comme loterie

Le jour J se traite comme un engagement d'une journée entière : réponse à chaque commentaire en temps réel, redirection du trafic vers le site pour capturer les inscriptions, puis suivi et conversion en liste e-mail après le lancement. La préparation compte plus que le jour même — relations construites en amont, fiche optimisée, communautés où la valeur a été apportée avant de pitcher.

## Questions fréquentes

**Combien de marketing pour une mise à jour mineure ?**

Une matrice décide : les mises à jour majeures ont droit à une campagne multi-canal complète, les moyennes (intégration, amélioration UI) à une annonce ciblée e-mail + bannière in-app, les mineures au changelog — qui reste utile, car même une petite mise à jour signale que le produit évolue et nourrit la rétention.

**Faut-il ouvrir l'early access à tout le monde d'un coup ?**

Deux options légitimes : étrangler les invitations par lots de 5-10 %, ou inviter tous les utilisateurs sous le libellé « early access ». Le choix dépend de la capacité à absorber les retours et à gérer la montée en charge.

**Le lancement s'arrête-t-il à l'annonce ?**

Non — c'est là que commence le travail d'adoption et de rétention : séquence d'onboarding e-mail, annonce reprise dans l'e-mail de récapitulatif, pages de comparaison publiées, démo interactive no-code pour les visiteurs.

## Indicateurs de réussite

- Le plan distingue les cinq phases, chacune avec ses actions et son objectif propre.
- La stratégie de canaux sépare owned, rented et borrowed, et ramène tout vers l'owned.
- La checklist couvre avant, jour J et après lancement (onboarding, comparaisons, suivi).
- Product Hunt est traité comme un événement préparé, avec avant / jour J / après explicités.
- La matrice majeur / moyen / mineur décide de l'ampleur de chaque annonce.

## Où il s'inscrit

`launch` est le moment de la chaîne go-to-market où le produit devient public : il consomme le positionnement établi par [product-marketing](https://aihero.dev/skills-product-marketing) et déclenche le travail d'adoption. Il travaille avec [emails](https://aihero.dev/skills-emails) pour les séquences de lancement et d'onboarding, et avec [sales-enablement](https://aihero.dev/skills-sales-enablement) pour les supports commerciaux du lancement. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
