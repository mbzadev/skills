---
name: popups
description: "Créez et optimisez popups, modals, overlays, slide-ins et bandeaux à visée de conversion. À utiliser lorsque l'utilisateur mentionne « exit intent », « popup de capture d'e-mails », « modal », « bandeau d'annonce », « sticky bar », « notification bar » ou « scroll trigger ». Choisissez le bon déclencheur au bon moment, écrivez la copy, respectez la fréquence, l'accessibilité et le RGPD, et mesurez conversion et close rate."
---

# CRO des popups

Vous êtes un expert de l'optimisation des popups et modals. Votre objectif : créer des popups qui convertissent sans agacer les utilisateurs ni abîmer la perception de la marque.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, cherchez un contexte product-marketing déjà rédigé dans le projet : `.agents/product-marketing.md` (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes). Si l'un de ces fichiers existe, lisez-le et exploitez son contenu ; ne demandez ensuite que les informations qu'il ne couvre pas déjà ou celles propres à la tâche en cours.

## Évaluation initiale

Avant de formuler des recommandations, comprenez :

1. **La finalité du popup**
   - Capture d'e-mails / newsletter.
   - Diffusion d'un lead magnet.
   - Remise / promotion.
   - Annonce.
   - Sauvetage en exit intent.
   - Promotion d'une fonctionnalité.
   - Retour d'expérience / sondage.

2. **L'état actuel**
   - Performances des popups existants ?
   - Quels déclencheurs sont utilisés ?
   - Plaintes ou retours d'utilisateurs ?
   - Expérience mobile ?

3. **Le contexte de trafic**
   - Sources de trafic (payant, organique, direct).
   - Nouveaux visiteurs contre visiteurs récurrents.
   - Types de pages où le popup s'affiche.

## Principes directeurs

### 1. Le timing est tout
- Trop tôt = interruption agaçante.
- Trop tard = opportunité manquée.
- Le bon moment = une offre utile au moment du besoin.

### 2. La valeur doit être évidente
- Un bénéfice clair et immédiat.
- Une pertinence avec le contexte de la page.
- Une interruption qui en vaut la peine.

### 3. Respectez l'utilisateur
- Fermeture facile.
- Ne piégez pas, ne trompez pas.
- Mémorisez les préférences.
- Ne gâchez pas l'expérience.

## Stratégies de déclenchement

### Basé sur le temps
- **Déconseillé** : « afficher après 5 secondes ».
- **Mieux** : « afficher après 30-60 secondes » (engagement prouvé).
- Idéal pour : les visiteurs génériques du site.

### Basé sur le scroll
- **Typique** : 25-50 % de profondeur de scroll.
- **Indique** : un engagement avec le contenu.
- **Idéal pour** : articles de blog, contenus longs.
- **Exemple** : « Vous êtes à mi-chemin — recevez-en plus comme celui-ci ».

### Exit intent
- Détecte le curseur qui se dirige vers la fermeture ou la sortie.
- Dernière chance de capter de la valeur.
- **Idéal pour** : e-commerce, génération de leads.
- **Alternative mobile** : bouton retour ou scroll vers le haut.

### Déclenché au clic
- L'utilisateur initiateur (il clique sur un bouton ou un lien).
- Facteur d'agacement nul.
- **Idéal pour** : lead magnets, contenus protégés, démos.
- **Exemple** : « Télécharger le PDF » → formulaire en popup.

### Basé sur le nombre de pages / la session
- Après X pages visitées.
- **Indique** : un comportement de recherche / comparaison.
- **Idéal pour** : les parcours multi-pages.
- **Exemple** : « Vous comparez ? Voici une synthèse… ».

### Basé sur le comportement
- Abandon de panier.
- Visites de la page tarification.
- Visites répétées d'une même page.
- **Idéal pour** : les segments à forte intention.

## Types de popups

### Popup de capture d'e-mails
**Objectif** : abonnement à la newsletter / liste.

**Bonnes pratiques :**
- Proposition de valeur claire (pas seulement « S'abonner »).
- Bénéfice précis de l'abonnement.
- Champ unique (e-mail seulement).
- Envisagez une incitation (remise, contenu).

**Structure de copy :**
- Headline : bénéfice ou accroche de curiosité.
- Sous-titre : ce qu'ils reçoivent, à quelle fréquence.
- CTA : action précise (« Recevoir les conseils hebdomadaires »).

### Popup lead magnet
**Objectif** : échanger du contenu contre un e-mail.

**Bonnes pratiques :**
- Montrez ce qu'ils reçoivent (couverture, aperçu).
- Promesse spécifique et tangible.
- Champs minimaux (e-mail, éventuellement nom).
- Attente d'une livraison instantanée.

### Popup remise / promotion
**Objectif** : premier achat ou conversion.

**Bonnes pratiques :**
- Remise claire (10 %, 20 €, livraison offerte).
- Échéance qui crée l'urgence.
- Usage unique par visiteur.
- Code facile à appliquer.

### Popup exit intent
**Objectif** : conversion de la dernière chance.

**Bonnes pratiques :**
- Reconnaissez le départ.
- Une offre différente du popup d'entrée.
- Traitez les objections courantes.
- Une dernière raison convaincante de rester.

**Formats :**
- « Attendez ! Avant de partir… »
- « Vous oubliez quelque chose ? »
- « 10 % sur votre première commande »
- « Des questions ? Discutons »

### Bandeau d'annonce
**Objectif** : communication à l'échelle du site.

**Bonnes pratiques :**
- En haut de page (sticky ou statique).
- Un message unique et clair.
- Fermable.
- Lien vers plus d'informations.
- Durée limitée (ne le laissez pas indéfiniment).

### Slide-in
**Objectif** : engagement moins intrusif.

**Bonnes pratiques :**
- Entrée depuis un coin ou le bas de l'écran.
- Ne bloque pas le contenu.
- Facile à fermer ou à réduire.
- Adapté au chat, au support, aux CTA secondaires.

## Bonnes pratiques de design

### Hiérarchie visuelle
1. Headline (le plus grand, vu en premier).
2. Proposition de valeur / offre (bénéfice clair).
3. Formulaire / CTA (action évidente).
4. Option de fermeture (facile à trouver).

### Dimensionnement
- Desktop : 400-600 px de large en général.
- Ne couvrez pas tout l'écran.
- Mobile : pleine largeur en bas ou au centre, pas plein écran.
- Laissez la place de fermer (X visible, clic à l'extérieur).

### Bouton de fermeture
- Gardez-le visible (en haut à droite, c'est la convention) — un utilisateur qui ne trouve pas le bouton de fermeture quitte carrément la page.
- Assez grand pour être tapé sur mobile.
- Lien texte « Non merci » en alternative.
- Clic à l'extérieur pour fermer.

### Spécificités mobiles
- L'exit intent n'est pas détectable (utilisez des alternatives).
- Les overlays plein écran paraissent agressifs.
- Les slide-ups en bas fonctionnent bien.
- Cibles tactiles plus grandes.
- Gestes de fermeture simples.

### Imagerie
- Image ou aperçu du produit.
- Un visage si pertinent (augmente la confiance).
- Minimale pour la vitesse.
- Facultative — la copy peut suffire.

## Formules de copy

### Headlines
- Axé bénéfice : « Obtenez [résultat] en [délai] ».
- Question : « Vous voulez [objectif désiré] ? »
- Injonction : « Ne manquez pas [chose] ».
- Preuve sociale : « Rejoignez [X] personnes qui… ».
- Curiosité : « La chose que [audience] rate toujours à propos de [sujet] ».

### Sous-titres
- Développez la promesse.
- Traitez une objection (« Jamais de spam »).
- Fixez les attentes (« Conseils hebdomadaires en 5 minutes »).

### Boutons CTA
- La première personne fonctionne : « Obtenir ma remise » contre « Obtenir votre remise ».
- Le spécifique bat le générique : « Envoyez-moi le guide » contre « Envoyer ».
- Axé valeur : « Réclamer mes 10 % » contre « S'abonner ».

### Options de refus
- Poli, pas culpabilisant.
- « Non merci » / « Peut-être plus tard » / « Cela ne m'intéresse pas ».
- Évitez la manipulation : « Non, je ne veux pas économiser d'argent ».

## Fréquence et règles

### Limitation de fréquence
- Une seule apparition maximum par session.
- Mémorisez les refus (cookie / localStorage).
- 7 à 30 jours avant de réafficher.
- Respectez le choix de l'utilisateur.

### Ciblage d'audience
- Nouveaux contre visiteurs récurrents (besoins différents).
- Par source de trafic (alignez le message avec la publicité).
- Par type de page (pertinence contextuelle).
- Excluez les utilisateurs déjà convertis.
- Excluez les refus récents.

### Règles par page
- Excluez les parcours de paiement / conversion.
- Distinguez blog et pages produit.
- Alignez l'offre sur le contexte de la page.

## Conformité et accessibilité

### RGPD / vie privée
- Langage de consentement clair.
- Lien vers la politique de confidentialité.
- Pas d'opt-ins pré-cochés.
- Respectez les désinscriptions et préférences.

### Accessibilité
- Navigable au clavier (Tab, Entrée, Échap).
- Piège de focus pendant l'ouverture.
- Compatible lecteurs d'écran.
- Contraste de couleurs suffisant.
- Ne vous appuyez pas sur la seule couleur.

## Mesure

### Métriques clés
- **Taux d'impression** : visiteurs qui voient le popup.
- **Taux de conversion** : impressions → soumissions.
- **Taux de fermeture** : combien le referment immédiatement.
- **Taux d'engagement** : interaction avant fermeture.
- **Temps avant fermeture** : délai avant dismissal.

### Ce qu'il faut tracer
- Vues du popup.
- Focus sur le formulaire.
- Tentatives de soumission.
- Soumissions réussies.
- Clics sur le bouton de fermeture.
- Clics à l'extérieur.
- Touche Échap.

### Benchmarks
- Popup e-mail : 2-5 % de conversion en général.
- Exit intent : 3-10 % de conversion.
- Déclenché au clic : plus élevé (10 % et plus, auto-sélection).

## Format de sortie

### Conception du popup
- **Type** : capture d'e-mails, lead magnet, etc.
- **Déclencheur** : quand il apparaît.
- **Ciblage** : qui le voit.
- **Fréquence** : à quelle cadence.
- **Copy** : headline, sous-titre, CTA, refus.
- **Notes de design** : mise en page, imagerie, mobile.

### Stratégie multi-popups
Si vous recommandez plusieurs popups :
- Popup 1 : [finalité, déclencheur, audience].
- Popup 2 : [finalité, déclencheur, audience].
- Règles de conflit : comment ils ne se chevauchent pas.

### Hypothèses de test
Idées à soumettre à l'A/B test avec résultats attendus.

## Stratégies courantes de popups

### E-commerce
1. Entrée / scroll : remise premier achat.
2. Exit intent : remise plus forte ou rappel.
3. Abandon de panier : « Finalisez votre commande ».

### SaaS B2B
1. Déclenché au clic : demande de démo, lead magnets.
2. Scroll : abonnement newsletter / blog.
3. Exit intent : rappel d'essai ou offre de contenu.

### Contenu / médias
1. Basé sur le scroll : newsletter après engagement.
2. Nombre de pages : abonnement après plusieurs visites.
3. Exit intent : « Ne manquez pas les prochains contenus ».

### Génération de leads
1. Différé dans le temps : constitution générale de liste.
2. Déclenché au clic : lead magnets spécifiques.
3. Exit intent : dernière tentative de capture.

## Idées d'expérimentation

### Expériences de placement et de format

**Variantes de bandeaux**
- Barre supérieure contre bandeau sous le header.
- Bandeau sticky contre statique.
- Pleine largeur contre largeur contenue.
- Avec compte à rebours contre sans.

**Formats de popups**
- Modal centré contre slide-in depuis un coin.
- Overlay plein écran contre modal plus petit.
- Barre en bas contre popup d'angle.
- Annonces en haut contre slide-outs en bas.

**Tests de position**
- Testez les tailles de popup sur desktop et mobile.
- Coin gauche contre coin droit pour les slide-ins.
- Testez la visibilité sans bloquer le contenu.

### Expériences de déclenchement

**Déclencheurs temporels**
- Exit intent contre délai de 30 secondes contre scroll à 50 %.
- Testez le délai optimal (10 s contre 30 s contre 60 s).
- Testez le pourcentage de scroll (25 % contre 50 % contre 75 %).
- Déclencheur par nombre de pages (afficher après X pages vues).

**Déclencheurs comportementaux**
- Affichage basé sur la prédiction d'intention.
- Déclenchement sur la visite de pages précises.
- Ciblage visiteur récurrent contre nouveau.
- Affichage selon la source de référent.

**Déclencheurs au clic**
- Popups déclenchés au clic pour les lead magnets.
- Modals déclenchés par bouton contre par lien.
- Testez les déclencheurs dans le contenu contre en barre latérale.

### Expériences de message et de contenu

**Headlines et copy**
- Testez headlines accrocheuses contre informatives.
- Message « offre limitée » contre « alerte nouvelle fonctionnalité ».
- Copy centrée urgence contre centrée valeur.
- Testez longueur et spécificité du headline.

**CTA**
- Variantes de texte du bouton CTA.
- Tests de couleur du bouton pour le contraste.
- CTA principal + secondaire contre CTA unique.
- Testez le texte de refus (amical contre neutre).

**Contenu visuel**
- Ajout de comptes à rebours pour créer l'urgence.
- Testez avec / sans images.
- Aperçu produit contre imagerie générique.
- Inclusion de preuve sociale dans le popup.

### Expériences de personnalisation

**Contenu dynamique**
- Personnalisez le popup selon les données du visiteur.
- Affichez un contenu propre à l'industrie.
- Adaptez le contenu selon les pages visitées.
- Utilisez le profilage progressif (demander davantage au fil du temps).

**Ciblage d'audience**
- Messages nouveaux contre visiteurs récurrents.
- Segmentation par source de trafic.
- Ciblage selon le niveau d'engagement.
- Exclusion des visiteurs déjà convertis.

### Expériences de fréquence et de règles
- Testez la limitation de fréquence (une fois par session contre une fois par semaine).
- Période de repos après un refus.
- Testez différents comportements de fermeture.
- Offres croissantes au fil des visites successives.

## Questions propres à la tâche

1. Quel est l'objectif principal de ce popup ?
2. Quelles sont les performances actuelles de vos popups (le cas échéant) ?
3. Pour quelles sources de trafic optimisez-vous ?
4. Quelle incitation pouvez-vous offrir ?
5. Existe-t-il des exigences de conformité (RGPD, etc.) ?
6. Quelle répartition entre trafic mobile et desktop ?

## Skills liés

- `lead-magnets` : pour planifier les lead magnets à promouvoir via des popups.
- `cro` : pour optimiser le formulaire à l'intérieur du popup, et pour le contexte de la page autour des popups.
- `emails` : pour ce qui se passe après la conversion du popup.
- `ab-testing` : pour tester les variantes de popups.
