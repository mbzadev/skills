## Ce qu'il fait

`ads` pilote les campagnes publicitaires payantes — Google Ads, Meta, LinkedIn, Twitter/X, TikTok — de la stratégie de compte à l'optimisation quotidienne : choix de plateforme, structure de campagne, ciblage, copy, retargeting, ABM et reporting. Sa particularité : les seuils chiffrés de décision (quand couper, garder ou scaler une annonce) ne sont jamais décidés à l'intuition — ils vivent dans des playbooks par plateforme que le skill charge systématiquement avant de répondre sur un compte actif.

## Quand l'utiliser

Appelez `/ads`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsque vous créez, optimisez, auditez ou passez à l'échelle des campagnes payantes : sélection de plateforme, structure de compte, ciblage d'audience, enchères, retargeting, ABM, ou décisions du type « dois-je couper cette annonce ». Pour produire et itérer les créations elles-mêmes — titres, descriptions, variantes en volume — utilisez plutôt [ad-creative](https://aihero.dev/skills-ad-creative).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question pour éviter de redemander l'ICP, le positionnement ou l'offre déjà documentés.

## La créa est le ciblage

Le recadrage central du skill, à l'ère des algorithmes post-Andromeda : la connaissance d'audience (points de douleur, langage, niche) s'injecte d'abord dans la créa — mots-clés déclencheurs d'identité dans les titres, copy long, variantes par segment — et seulement ensuite dans les filtres de ciblage. Sur Meta, le ratio penche à plus de 80 % créa ; sur Google Search et LinkedIn, les mots-clés et filtres firmographiques gardent le dessus. Compenser une créa générique par un ciblage hyper-précis construit une petite audience qui voit tous la même mauvaise annonce.

## Cash net plutôt que ROAS

La discipline de scaling recommandée s'oppose au réflexe habituel : le chiffre à optimiser est le ROAS blended au niveau de l'entreprise, voire le free cash flow net — pas le ROAS par ad set. On scale jusqu'au plafond de rentabilité calculé (ROAS/CPA break-even intégrant le LTV), par augmentations de budget d'environ 20 % espacées de 3 à 5 jours, jamais par bonds de 30 % ou plus qui réinitialisent l'apprentissage.

## Questions fréquentes

**Mon ROAS baisse dès que j'augmente le budget : faut-il m'arrêter ?**

Non, tant que vous restez au-dessus de votre ROAS de rentabilité. Un ROAS qui passe de 10 à 5 pendant que les dépenses passent de 10 k$ à 100 k$ engrange plus de profit total. Calculez d'abord le maximum acceptable pour acquérir un client (LTV intégré), puis scalez jusqu'à approcher ce plafond.

**Faut-il encore empiler les intérêts de ciblage sur Meta ?**

Plus depuis l'algorithme Andromeda : l'empilement d'intérêts nuit désormais activement à la performance. Ciblez large (le pays suffit) et laissez la créa faire le ciblage. Pour vous en convaincre, dupliquez votre meilleure annonce en retirant tout le ciblage et comparez les CPA sur 7 jours.

**Quand couper une annonce dont le CPA dérape ?**

Un pic de CPA est une question, pas un verdict : vérifiez d'abord la taille d'échantillon, le décalage de conversion et la phase d'apprentissage. Les seuils précis (TCPL, bandes de fatigue, règles par plateforme) figurent dans les playbooks de références que le skill charge pour toute décision opérationnelle.

## Indicateurs de réussite

- Toute recommandation de coupe, conservation ou scaling s'appuie sur un seuil chiffré tiré du playbook de la plateforme, pas sur une impression.
- Les audits distinguent « non vérifié » de « défaillant », et les conversions ne sont jamais sommées entre fenêtres d'attribution différentes (7 jours Meta vs 30 jours Google).
- Les augmentations de budget restent par paliers d'environ 20 %, espacés de 3 à 5 jours.
- Les RSA Google produits respectent la spec de sortie : limites de caractères, artefacts annexes (ad groups, négatifs, sitelinks, callouts) et auto-contrôle avant envoi.
- La connaissance d'audience apparaît dans les créas (mots-clés d'identité, copy segmenté) avant d'apparaître dans les filtres de ciblage.

## Où il s'inscrit

`ads` est l'outil d'exécution de la distribution payante : il transforme en campagnes ce que la stratégie marketing a décidé de promouvoir.

Il travaille en tandem avec [ad-creative](https://aihero.dev/skills-ad-creative), qui produit le volume de créas que ses campagnes dépensent, et avec [cro](https://aihero.dev/skills-cro), qui optimise la landing page où atterrit le trafic payant. Pour naviguer l'ensemble de la collection, passez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
