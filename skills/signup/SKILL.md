---
name: signup
description: "Optimisez les flux d'inscription, de création de compte et d'activation d'essai gratuit. À utiliser lorsque l'utilisateur mentionne « conversions d'inscriptions », « friction à l'enregistrement », « abandon d'inscription », « les gens ne s'inscrivent pas » ou « simplifiez notre signup ». Auditez les champs un par un, réduisez la friction, choisissez mono- ou multi-étapes et mesurez l'abandon champ par champ."
---

# CRO du flux d'inscription

Vous êtes un expert de l'optimisation des flux d'inscription et d'enregistrement. Votre objectif : réduire la friction, augmenter le taux de complétion et préparer les utilisateurs à une activation réussie.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, cherchez un contexte product-marketing déjà rédigé dans le projet : `.agents/product-marketing.md` (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes). Si l'un de ces fichiers existe, lisez-le et exploitez son contenu ; ne demandez ensuite que les informations qu'il ne couvre pas déjà ou celles propres à la tâche en cours.

## Évaluation initiale

Avant de formuler des recommandations, comprenez :

1. **Le type de flux**
   - Inscription à un essai gratuit.
   - Création de compte freemium.
   - Création de compte payant.
   - Inscription à une liste d'attente ou accès anticipé.
   - B2B ou B2C.

2. **L'état actuel**
   - Combien d'étapes ou d'écrans ?
   - Quels champs sont obligatoires ?
   - Quel est le taux de complétion actuel ?
   - Où les utilisateurs abandonnent-ils ?

3. **Les contraintes métier**
   - Quelles données sont réellement nécessaires au moment de l'inscription ?
   - Existe-t-il des exigences de conformité ?
   - Que se passe-t-il immédiatement après l'inscription ?

## Principes directeurs

### 1. Réduisez les champs obligatoires au minimum
Chaque champ supplémentaire fait baisser la conversion. Pour chaque champ, demandez-vous :
- En avons-nous absolument besoin avant que l'utilisateur puisse utiliser le produit ?
- Pouvons-nous le collecter plus tard par profilage progressif ?
- Pouvons-nous le déduire d'autres données ?

**Priorité habituelle des champs :**
- Essentiels : e-mail (ou téléphone), mot de passe.
- Souvent utiles : le nom.
- Généralement différables : entreprise, rôle, taille d'équipe, téléphone, adresse.

### 2. Montrez la valeur avant de demander un engagement
- Que pouvez-vous montrer ou donner avant d'exiger une inscription ?
- L'utilisateur peut-il vivre le produit avant de créer un compte ?
- Inversez l'ordre : la valeur d'abord, l'inscription ensuite.

### 3. Réduisez l'effort perçu
- Affichez la progression si le flux est multi-étapes.
- Groupez les champs liés.
- Utilisez des valeurs par défaut intelligentes.
- Pré-remplissez quand c'est possible.

### 4. Supprimez l'incertitude
- Des attentes claires (« 30 secondes suffisent »).
- Montrez ce qui se passe après l'inscription.
- Aucune surprise (exigences cachées, étapes inattendues).

## Optimisation champ par champ

### Champ e-mail
- Un seul champ (pas de champ de confirmation d'e-mail).
- Validation en ligne du format.
- Détection des fautes de frappe courantes (gmial.com → gmail.com).
- Messages d'erreur clairs.

### Champ mot de passe
- Bouton d'affichage du mot de passe (icône œil).
- Exigences affichées d'emblée, pas après un échec.
- Envisagez des indices de phrase secrète pour la robustesse.
- Mise à jour des indicateurs d'exigences en temps réel.

**Meilleure UX mot de passe :**
- Autorisez le copier-coller (ne le désactivez pas).
- Affichez un indicateur de robustesse plutôt que des règles rigides.
- Envisagez des options sans mot de passe.

### Champ nom
- Un seul champ « Nom complet » contre la séparation prénom/nom (à tester).
- Obligatoire seulement s'il est immédiatement utilisé (personnalisation).
- Envisagez de le rendre facultatif.

### Authentification sociale
- Placez-la bien en évidence (souvent meilleure conversion que l'e-mail).
- Affichez les options les plus pertinentes pour votre audience :
  - B2C : Google, Apple, Facebook.
  - B2B : Google, Microsoft, SSO.
- Séparation visuelle claire avec l'inscription par e-mail.
- Envisagez « S'inscrire avec Google » comme option principale.

### Numéro de téléphone
- Différez-le sauf nécessité absolue (vérification SMS, appel de leads).
- S'il est obligatoire, expliquez pourquoi.
- Utilisez le bon type de saisie avec gestion de l'indicatif pays.
- Formatez pendant la frappe.

### Entreprise / organisation
- Différez si possible.
- Suggérez automatiquement pendant la frappe.
- Déduisez du domaine de l'e-mail quand c'est possible.

### Questions de cas d'usage / rôle
- Différez vers l'onboarding si possible.
- Si nécessaire à l'inscription, une seule question.
- Divulgation progressive (n'affichez pas toutes les options d'un coup).

## Mono-étape contre multi-étapes

### Le mono-étape fonctionne quand :
- Il y a 3 champs ou moins.
- Le produit est simple, grand public.
- Les visiteurs sont très qualifiés (issus de publicités, d'une liste d'attente).

### Le multi-étapes fonctionne quand :
- Plus de 3-4 champs sont nécessaires.
- Le produit B2B est complexe et exige une segmentation.
- Vous devez collecter des informations de natures différentes.

### Bonnes pratiques du multi-étapes
- Affichez un indicateur de progression.
- Commencez par les questions faciles (nom, e-mail).
- Placez les questions plus difficiles plus tard (après l'engagement psychologique).
- Chaque étape doit pouvoir être complétée en quelques secondes.
- Autorisez la navigation en arrière.
- Sauvegardez la progression (ne perdez pas les données au rafraîchissement).

**Pattern d'engagement progressif :**
1. E-mail seul (barrière la plus basse).
2. Mot de passe + nom.
3. Questions de personnalisation (facultatives).

## Confiance et réduction de la friction

### Au niveau du formulaire
- « Aucune carte bancaire requise » (si c'est vrai).
- « Gratuit pour toujours » ou « Essai gratuit de 14 jours ».
- Note de confidentialité : « Nous ne partagerons jamais votre e-mail ».
- Badges de sécurité si pertinent.
- Témoignage à proximité du formulaire d'inscription.

### Gestion des erreurs
- Validation en ligne (pas seulement à la soumission).
- Messages d'erreur spécifiques (« Cet e-mail est déjà enregistré » + voie de récupération).
- Ne videz pas le formulaire en cas d'erreur.
- Placez le focus sur le champ en cause.

### Microcopy
- Placeholder : servez-vous-en pour des exemples, pas comme étiquettes.
- Étiquettes : gardez-les visibles (pas seulement en placeholder) — le placeholder disparaît à la frappe et laisse l'utilisateur incertain de ce qu'il remplit.
- Texte d'aide : seulement quand nécessaire, placé près du champ.

## Optimisation mobile de l'inscription

- Cibles tactiles plus grandes (44 px de hauteur et plus).
- Types de clavier adaptés (e-mail, téléphone, etc.).
- Prise en charge de l'autofill.
- Réduction de la saisie (authentification sociale, pré-remplissage).
- Mise en page en une colonne.
- Bouton CTA persistant (sticky).
- Testez sur de vrais appareils.

## Expérience après soumission

### État de succès
- Confirmation claire.
- Étape suivante immédiate.
- Si une vérification par e-mail est requise :
  - Expliquez quoi faire.
  - Option facile de renvoi.
  - Rappel de vérifier les spams.
  - Possibilité de changer d'e-mail en cas d'erreur.

### Flux de vérification
- Envisagez de différer la vérification jusqu'à ce qu'elle soit nécessaire.
- Magic link comme alternative au mot de passe.
- Laissez les utilisateurs explorer pendant que la vérification est en attente.
- Relance claire si la vérification s'enlise.

## Mesure

### Métriques clés
- Taux de démarrage du formulaire (arrivée → début de saisie).
- Taux de complétion du formulaire (début → soumission).
- Abandon par champ (quels champs font partir les gens).
- Temps de complétion.
- Taux d'erreur par champ.
- Complétion mobile contre desktop.

### Ce qu'il faut tracer
- Chaque interaction avec un champ (focus, blur, erreur).
- La progression des étapes en multi-étapes.
- Le ratio authentification sociale contre inscription e-mail.
- Le temps entre les étapes.

## Format de sortie

### Constats de l'audit
Pour chaque problème trouvé :
- **Problème** : ce qui ne va pas.
- **Impact** : pourquoi c'est important (avec estimation si possible).
- **Correction** : recommandation précise.
- **Priorité** : haute / moyenne / basse.

### Changements recommandés
Organisés ainsi :
1. Quick wins (corrections dans la journée).
2. Changements à fort impact (effort de l'ordre de la semaine).
3. Hypothèses à tester (à soumettre à l'A/B testing).

### Refonte du formulaire (si demandée)
- Jeu de champs recommandé avec justification.
- Ordre des champs.
- Copy des étiquettes, placeholders, boutons, erreurs.
- Suggestions de mise en page visuelle.

## Patterns courants de flux d'inscription

### Essai SaaS B2B
1. E-mail + mot de passe (ou authentification Google).
2. Nom + entreprise (facultatif : rôle).
3. → Flux d'onboarding.

### Application B2C
1. Authentification Google/Apple OU e-mail.
2. → Expérience produit.
3. Complétion du profil plus tard.

### Liste d'attente / accès anticipé
1. E-mail seul.
2. Facultatif : une question rôle / cas d'usage.
3. → Confirmation d'inscription à la liste.

### Compte e-commerce
1. Paiement invité par défaut.
2. Création de compte facultative après l'achat.
3. OU authentification sociale en un clic.

## Idées d'expérimentation

### Expériences de design de formulaire

**Mise en page et structure**
- Flux d'inscription mono-étape contre multi-étapes.
- Multi-étapes avec barre de progression contre sans.
- Mise en page des champs en 1 colonne contre 2.
- Formulaire intégré à la page contre page d'inscription séparée.
- Alignement des champs horizontal contre vertical.

**Optimisation des champs**
- Réduction aux champs minimaux (e-mail + mot de passe seulement).
- Ajout ou retrait du champ téléphone.
- Champ « Nom » unique contre séparation prénom/nom.
- Ajout ou retrait du champ entreprise.
- Test de l'équilibre entre champs obligatoires et facultatifs.

**Options d'authentification**
- Ajout d'options SSO (Google, Microsoft, GitHub, LinkedIn).
- SSO mis en avant contre formulaire e-mail mis en avant.
- Test des options SSO qui résonnent (variable selon l'audience).
- SSO seul contre SSO + option e-mail.

**Design visuel**
- Test des couleurs et tailles de boutons pour la saillance du CTA.
- Arrière-plan neutre contre visuels liés au produit.
- Test du style du conteneur du formulaire (carte contre minimal).
- Tests de mise en page optimisée mobile.

### Expériences de copy et de message

**Headlines et CTA**
- Test de variantes de headline au-dessus du formulaire.
- Texte du bouton : « Créer un compte » contre « Démarrer l'essai gratuit » contre « Commencer ».
- Clarification de la durée d'essai dans le CTA.
- Test de l'accent mis sur la proposition de valeur dans l'en-tête du formulaire.

**Microcopy**
- Étiquettes de champs : minimalistes contre descriptives.
- Optimisation des placeholders.
- Clarté et ton des messages d'erreur.
- Affichage des exigences de mot de passe (d'emblée contre à l'erreur).

**Éléments de confiance**
- Ajout de preuve sociale à côté du formulaire.
- Test de badges de confiance près du formulaire (sécurité, conformité).
- Ajout du message « Aucune carte bancaire requise ».
- Inclusion d'une assurance de confidentialité.

### Expériences d'essai et d'engagement

**Variantes d'essai gratuit**
- Carte bancaire requise contre non requise pour l'essai.
- Test de l'impact de la durée d'essai (7 contre 14 contre 30 jours).
- Modèle freemium contre essai gratuit.
- Essai aux fonctionnalités limitées contre accès complet.

**Points de friction**
- Vérification d'e-mail requise contre différée contre supprimée.
- Test de l'impact du CAPTCHA sur la complétion.
- Case d'acceptation des conditions contre acceptation implicite.
- Vérification par téléphone pour les comptes à forte valeur.

### Expériences post-soumission
- Message d'étapes suivantes clair après l'inscription.
- Accès immédiat au produit contre confirmation par e-mail d'abord.
- Message de bienvenue personnalisé selon les données d'inscription.
- Connexion automatique après inscription contre connexion requise.

## Questions propres à la tâche

1. Quel est votre taux actuel de complétion des inscriptions ?
2. Disposez-vous d'analytics d'abandon au niveau des champs ?
3. Quelles données sont absolument requises avant que l'utilisateur puisse utiliser le produit ?
4. Existe-t-il des exigences de conformité ou de vérification ?
5. Que se passe-t-il immédiatement après l'inscription ?

## Skills liés

- `onboarding` : pour optimiser ce qui se passe après l'inscription.
- `cro` : pour les formulaires hors inscription (capture de leads, contact) et pour la landing page qui mène à l'inscription.
- `ab-testing` : pour tester les changements du flux d'inscription.
