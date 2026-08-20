## Ce qu'il fait

Il optimise les flux d'inscription, d'enregistrement et de création de compte — essai gratuit, freemium, liste d'attente, B2B comme B2C — pour réduire la friction et l'abandon. Chaque champ du formulaire est passé au crible individuellement, avec une question simple comme critère de tri : cette donnée est-elle vraiment nécessaire avant que l'utilisateur puisse utiliser le produit ? Tout ce qui peut être différé, déduit ou supprimé l'est, au profit d'un parcours mono-étape ou multi-étapes choisi selon le nombre de champs et la complexité du produit.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/signup`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill lorsque un flux d'inscription existe déjà et convertit mal, ou quand on parle d'abandon d'inscription, de friction à l'enregistrement ou de taux de conversion d'essai. Pour les formulaires de capture de leads ou de contact — tout ce qui n'est pas une création de compte — utilisez plutôt [cro](https://aihero.dev/skills-cro) ; pour ce qui se passe *après* l'inscription, [onboarding](https://aihero.dev/skills-onboarding).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question, et seules les informations manquantes sont demandées. Les données d'abandon champ par champ, si vous en disposez, transforment l'audit en diagnostic — mais le skill fonctionne aussi sans.

## Le tri des champs

Le mécanisme central est un audit champ par champ : e-mail (validation en ligne, détection des fautes de frappe), mot de passe (exigences affichées d'emblée, indicateur de robustesse), nom, authentification sociale, téléphone, entreprise, questions de rôle. Chaque champ reçoit un verdict — essentiel, différable, déductible — qui décide de sa place ou de sa disparition.

L'audit se conclut par des constats priorisés (problème, impact, correction, priorité haute à basse) puis par des changements rangés en trois catégories :

| Catégorie | Horizon |
|---|---|
| Quick wins | corrections dans la journée |
| Changements à fort impact | effort de l'ordre de la semaine |
| Hypothèses à tester | A/B testing nécessaire |

## Questions fréquentes

**Faut-il tout passer en mono-étape ?**
Non. Le mono-étape gagne pour 3 champs ou moins et des visiteurs très qualifiés ; au-delà de 3-4 champs, ou pour un produit B2B qui exige une segmentation, le multi-étapes avec indicateur de progression fait mieux — à condition de commencer par les questions faciles et de sauvegarder la progression.

**La vérification d'e-mail doit-elle bloquer l'accès ?**
Pas forcément. Différer la vérification jusqu'au moment où elle devient nécessaire, proposer un magic link, ou laisser l'utilisateur explorer le produit en attendant sont des options testées qui réduisent l'abandon immédiat.

**L'authentification sociale remplace-t-elle le formulaire e-mail ?**
Souvent elle le domine — placez-la en évidence et testez les options adaptées à l'audience (Google/Apple/Facebook en B2C, Google/Microsoft/SSO en B2B) — mais le bon choix se valide par A/B testing, pas par affirmation.

## Indicateurs de réussite

- Chaque champ du formulaire reçoit une recommandation individuelle, pas une critique globale du formulaire.
- Les constats de l'audit sont priorisés et séparés des quick wins et des hypothèses à tester.
- La recommandation mono-étape ou multi-étapes est justifiée par le nombre de champs et le type de produit.
- L'expérience post-soumission (état de succès, vérification d'e-mail) fait partie du diagnostic, pas seulement le formulaire.

## Où il s'inscrit

Étape de la chaîne `cro → signup → onboarding` : la landing page convertit, l'inscription se complète, l'activation fait vivre le compte. [onboarding](https://aihero.dev/skills-onboarding) prend le relais dès la création du compte, et [ab-testing](https://aihero.dev/skills-ab-testing) valide les changements structurels du flux. Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
