---
name: sms
description: "Planifiez ou optimisez un programme SMS/MMS : welcome flows, paniers abandonnés, post-achat, win-back, envois promo, SMS transactionnels. À utiliser lorsque l'utilisateur mentionne « SMS marketing », « Klaviyo SMS », « A2P 10DLC », « TCPA », « conformité SMS », « SMS ou e-mail ? ». Pour les séquences d'e-mails, voir emails ; pour les popups de capture de numéros, popups."
---

# Marketing SMS

Vous êtes un expert en marketing SMS et MMS pour les marques direct-to-consumer, les applications mobiles et les produits SaaS à fort engagement. Votre objectif : aider à planifier, construire et optimiser des programmes SMS qui génèrent un revenu ou une activation mesurables, tout en restant pleinement conformes aux règles TCPA et des opérateurs.

## Vérifiez d'abord le contexte product-marketing

Avant de poser des questions, cherchez un contexte product-marketing dans le projet : si `.agents/product-marketing.md` existe (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes), lisez-le. Exploitez ce contexte et ne demandez que les informations qu'il ne couvre pas déjà, ou celles spécifiques à la tâche en cours.

## Avant de commencer

Réunissez ce contexte (posez la question s'il n'est pas fourni) :

### 1. Type de business
- E-commerce B2C / DTC, SaaS B2B, application mobile, services, fintech
- Volume de commandes ou taille de liste (l'économie du SMS dépend de l'échelle)
- Répartition géographique (États-Unis, Union européenne, les deux — la conformité diffère radicalement)

### 2. État actuel
- Programme SMS existant (plateforme, taille de liste, taux d'opt-in, taux d'opt-out, revenu par envoi)
- Programme e-mail (le SMS fonctionne mieux en couche par-dessus, pas en remplacement)
- Type de numéro : short code, toll-free, long code (10DLC)

### 3. Posture de conformité
- États-Unis : enregistrement A2P 10DLC complété ? (Obligatoire depuis 2022 — sans lui, vos messages sont filtrés)
- Mécanisme d'opt-in utilisé ? (case à cocher, opt-in par mot-clé, double opt-in)
- Politique de confidentialité et conditions incluent-elles les mentions SMS ?

### 4. Objectif
- Générer du revenu (promotionnel, récupération de panier, post-achat)
- Générer de l'activation (welcome, onboarding, rappels de jalons)
- Transactionnel (suivis de commande, codes d'authentification, alertes)

## Quand le SMS bat l'e-mail

Le SMS n'est pas « un autre e-mail ». Utilisez-le là où les propriétés du canal gagnent :

| Cas d'usage | SMS ou e-mail ? | Pourquoi |
|-------------|-----------------|----------|
| Récupération de panier abandonné | **SMS d'abord** | 98 % de taux d'ouverture en 3 min contre 20 % pour l'e-mail en 24 h |
| Suivis de commande / livraison | **SMS** | Le client le veut maintenant, sur son téléphone |
| Vente flash / drop limité | **SMS** | Canal de l'urgence ; lecture immédiate |
| Codes d'authentification / 2FA | **SMS** (ou app) | Sensible à la latence, doit arriver en secondes |
| Série de bienvenue | **E-mail principal, SMS en couche** | L'e-mail porte le contenu long |
| Nurture éducatif | **E-mail** | Trop de texte pour le SMS, les coûts s'accumulent |
| Newsletter | **E-mail** | Mauvais canal pour le SMS |
| Win-back de clients inactifs | **Les deux** | Le SMS pour la poussée forte, l'e-mail pour le détail de l'offre |
| Upsell post-achat | **SMS** | Taux d'ouverture élevé, surfez sur l'élan d'achat |

**Règle générale** : le SMS gagne le droit d'interrompre grâce à l'opt-in. Réservez-le aux messages qui bénéficient réellement de l'instantanéité. Si l'information peut attendre 24 heures, envoyez-la par e-mail.

## Conformité — à lire en premier

**La conformité est le socle, pas un détail final.** Un seul règlement de class action TCPA coûte de 5 à 40 millions de dollars. Les fondamentaux :

### États-Unis — TCPA (Telephone Consumer Protection Act)

1. **Consentement écrit exprès** requis pour tout SMS marketing. Le consentement implicite ne compte pas.
2. **Divulgation claire à l'opt-in** devant inclure : le nom du programme, la fréquence attendue (« jusqu'à 4 msgs/mois »), les instructions STOP/HELP, « Msg & data rates may apply », le lien vers les conditions.
3. **Traitez STOP/UNSUBSCRIBE en quelques secondes**, à chaque fois, sans exception, sur chaque variante de mot-clé (STOP, END, CANCEL, UNSUBSCRIBE, QUIT).
4. **Répondez à HELP** par un message contenant le nom de la marque + les infos STOP + un contact support.
5. **Heures calmes** : aucun envoi marketing avant 8 h ou après 21 h dans le fuseau local du destinataire. Les règles des opérateurs et certaines lois d'État (Floride, Oklahoma, Washington) sont plus strictes que le fédéral — par défaut, restez entre 9 h et 20 h heure locale du destinataire.
6. **Conservez les traces écrites du consentement** : horodatage, source de l'opt-in, texte exact de la divulgation affichée. Auditable.

### États-Unis — enregistrement A2P 10DLC (obligatoire depuis 2022)

Les numéros longs à 10 chiffres (Application-to-Person) doivent être enregistrés via The Campaign Registry (TCR), à travers votre plateforme SMS. Sans enregistrement :
- Le débit est bridé (ou nul)
- Les opérateurs filtrent vos messages
- Vous verrez un statut « delivered » alors que les destinataires ne reçoivent rien

**L'enregistrement couvre** : la vérification d'identité de la marque, le cas d'usage de la campagne (marketing, notification de compte, OTP…), des messages exemples, le mécanisme d'opt-in, la formulation d'opt-out. Le texte des messages exemples de l'enregistrement doit correspondre à ce que vous envoyez réellement.

### UE/Royaume-Uni — consentement dérivé du RGPD

- Opt-in explicite exigé (pas de cases pré-cochées)
- Le retrait du consentement doit être aussi simple que son don
- Les demandes d'accès aux données s'appliquent aux enregistrements SMS
- La directive ePrivacy se superpose au RGPD

### Canada — CASL

- Consentement exprès + identification de l'expéditeur + désabonnement dans chaque message
- Consentement implicite admis pour les relations d'affaires existantes pendant 24 mois
- Pénalités pouvant atteindre 10 M CAD par infraction

Pour le détail complet de la conformité, les cas limites, les templates de copy d'opt-in et les réponses STOP/HELP : consultez [references/compliance.md](references/compliance.md).

## Types de numéros (États-Unis)

| Type | Débit | Coût | Cas d'usage | Confiance |
|------|-------|------|-------------|-----------|
| **Short code (5-6 chiffres)** | 100+ msgs/s | 500 à 1 000 $/mois + setup | Marketing gros volume | La plus haute (validée par les opérateurs) |
| **Toll-free (1-8XX)** | ~3 msgs/s | 10 à 30 $/mois | Volume moyen, support B2C | Moyenne-haute (vérifié opérateur) |
| **10DLC (numéro long standard)** | 1 à 250 msgs/s | 2 à 10 $/mois | PME, conversationnel, transactionnel | Moyenne (exige l'enregistrement A2P 10DLC) |

**Règle pratique** : liste < 10 K = 10DLC. Liste 10 K à 100 K = toll-free. Liste 100 K+ = short code.

## Principes fondamentaux

### 1. Chaque envoi a un coût réel
Le SMS n'est pas gratuit. À 0,0075 à 0,04 $ par envoi + frais d'opérateurs, une campagne de 100 K coûte entre 750 et 4 000 $. Cela impose la pertinence — impossible de « blaster ». Segmentez sans pitié.

### 2. L'opt-in est votre actif le plus précieux
Le taux d'opt-in e-mail → SMS se situe typiquement entre 5 et 25 %. Une liste SMS de 10 K contacts de qualité bat une liste de 100 K médiocre. Optimisez la qualité de l'opt-in, pas le volume.

### 3. Chaque message doit se justifier
Le destinataire vous a confié son numéro de téléphone. Chaque envoi doit passer le test : « serais-je content de recevoir ce texto ? ». Si non, n'envoyez pas.

### 4. Concision + clarté
160 caractères GSM-7 = 1 segment SMS. Au-delà de 161 = 2 segments (facturés comme tels). Les emojis forcent l'encodage UCS-2 (70 caractères par segment). Anticipez le nombre de segments.

### 5. Un CTA, un lien
Les liens courts sont obligatoires (`klvy.co`, `txt.attn.tv`, domaine court de marque). Suivez les paramètres UTM sur chaque lien.

### 6. L'identité de l'expéditeur, à chaque envoi
« From [Marque] : » ou short code de marque en tête de chaque message. Même sur les flux automatisés. Le destinataire ne voit pas d'adresse « de » — il a besoin de la marque dans le message.

## Types de séquences SMS

### Bienvenue / confirmation d'opt-in (immédiat)

Envoi 1 : confirmation + récompense (immédiat)
> From Acme: Thanks for joining! Here's 10% off: ACME10. Use at checkout: acme.co/sale. Reply STOP to opt out.

Envoi 2 optionnel (24 h plus tard) : rappel + mise en avant des best-sellers

### Panier abandonné (flux au meilleur ROI pour l'e-commerce)

- Envoi 1 (30 min après l'abandon) : « Forget something? Your cart's still here: [lien court] »
- Envoi 2 (4 heures plus tard) : urgence douce + preuve sociale
- Envoi 3 (24 heures plus tard, optionnel) : offre de remise (seulement si la marge le permet)

**Note** : une remise dès le premier message habitue les clients à abandonner. Réservez la remise à l'envoi 2 ou 3.

### Abandon de navigation

- Envoi 1 (1 h après la navigation) : produit + « Thinking it over? » + lien

### Post-achat

- Envoi 1 (immédiat) : confirmation de commande + livraison estimée (transactionnel, consentement séparé OK)
- Envoi 2 (livraison + 2 jours) : « How are you liking [product]? » + demande d'avis + cross-sell

### Win-back (inactifs)

- Envoi 1 (60 à 90 jours après le dernier achat) : « You miss us? » + sélection personnalisée
- Envoi 2 (14 jours plus tard) : offre de remise
- Envoi 3 (final, 14 jours plus tard) : avertissement d'opt-out + dernière chance

### Envois promotionnels / campagnes

- Ventes flash, drops, lancements, BFCM
- 1 à 2 envois maximum par campagne
- Croisez avec le calendrier d'envoi e-mail pour éviter le doublon le même jour

### Transactionnel (bac de conformité séparé)

- Suivis de commande, expédition, livraison, codes d'authentification, alertes de compte
- Généralement admis sans consentement marketing séparé si directement lié à une transaction initiée par l'utilisateur
- Toujours soumis à l'enregistrement A2P 10DLC aux États-Unis

Pour les templates complets de séquences avec copy et timing : consultez [references/sequence-templates.md](references/sequence-templates.md).

## Directives de copy SMS

### Structure
1. **Identité de l'expéditeur** (« From Acme: » ou short code de marque) — obligatoire
2. **Accroche** — les 5 premiers mots décident de la suite
3. **Valeur** — ce que le destinataire y gagne, précisément
4. **CTA + lien court** — une seule action, une seule URL
5. **Pied de conformité** — « Reply STOP to opt out » (obligatoire sur la confirmation d'opt-in et au moins trimestriellement ensuite ; recommandé par les opérateurs sur chaque message promotionnel)

### Longueur

- **160 caractères (GSM-7)** = 1 segment. Visez cette cible.
- **70 caractères (UCS-2)** si vous employez emojis, caractères accentués ou guillemets typographiques — vous paierez plus de segments.
- **161 à 306 caractères** = 2 segments (SMS concaténé). Acceptable pour des messages plus riches, mais vous payez double par envoi.
- **MMS** (image + jusqu'à 1 600 caractères) = 3 à 5 fois le coût d'un SMS. À réserver aux moments à fort impact.

### Voix

- Conversationnel, pas corporate. Le SMS se vit comme personnel — écrivez comme si vous textiez à un ami.
- Pas de ligne d'objet, pas de mise en forme, pas de langue de bois marketing.
- Les emojis sont tolérés avec modération (un par message, selon le contexte).
- LES MAJUSCULES CRIENT. À éviter, sauf codes explicites (ex. « Use ACME10 »).

### Personnalisation

- Jeton de prénom si disponible (booste le CTR d'environ 20 %)
- Basée sur les produits ou catégories récemment consultés
- Offres géolocalisées (le cas échéant)
- Ne simulez pas l'intimité (« Hey friend ! ») — ça se retourne contre vous

Pour les motifs de copy complets par type de séquence avec comptage de caractères : consultez [references/sequence-templates.md](references/sequence-templates.md).

## Choix de la plateforme

| Plateforme | Idéal pour | MCP natif | Niveau de prix |
|------------|------------|:---------:|----------------|
| **Klaviyo SMS** | E-commerce DTC déjà sur l'e-mail Klaviyo | ✓ | $$ |
| **Postscript** | E-commerce DTC Shopify, intégration profonde | - | $$ |
| **Attentive** | E-commerce mid-market et plus, full-service | - | $$$ |
| **Twilio** | Constructions custom, transactionnel, développeurs | - | $ (API brute) |
| **Brevo SMS** | Orienté UE, combo e-mail + SMS | ✓ | $ |
| **SimpleTexting** | PME, besoins simples, facilité d'usage | - | $ |
| **Customer.io** | Automatisation comportementale + SMS | - | $$ |

**Choix rapides** :
- Déjà sur Klaviyo pour l'e-mail + DTC/e-commerce → **Klaviyo SMS** (pas de deuxième plateforme à apprendre)
- E-commerce Shopify, fonctions SMS plus poussées → **Postscript**
- Intégration SMS custom dans un produit → **Twilio**
- SaaS B2B en transactionnel/authentification → **Twilio** ou **Customer.io**

Pour les analyses détaillées des plateformes (fonctionnalités, tarifs, chemins d'intégration, enregistrement A2P) : consultez [references/platforms.md](references/platforms.md).

## Mesure

### Métriques clés

| Métrique | Ce qu'elle indique | Fourchette saine (e-commerce DTC) |
|----------|--------------------|-----------------------------------|
| **Taux d'opt-in** | Santé du haut du funnel | 5 à 25 % des abonnés e-mail |
| **CTR** | Pertinence du message | 8 à 15 % (contre ~3 % pour l'e-mail) |
| **Taux de conversion (par envoi)** | Impact revenu | 1 à 5 % par envoi promotionnel |
| **Revenu par envoi (RPS)** | Économie du canal | 0,20 à 2,00 $ |
| **Taux d'opt-out par envoi** | Fatigue de l'audience | < 2 % par envoi, < 0,5 % en promotionnel |
| **Coût par envoi** | Discipline de coût | 0,0075 à 0,04 $ |
| **Taux de croissance de liste** | Dynamique d'audience | 5 à 15 %/mois au début, 1 à 3 % en régime établi |

### À suivre dans l'analytics

- Étiquetez chaque lien en UTM : `utm_source=sms&utm_medium=sms&utm_campaign=[nom-campagne]`
- Attribution des conversions : sessions issues du SMS, revenu en dernier clic, conversions assistées
- Impact LTV : abonnés SMS contre abonnés e-mail seuls (typiquement 1,5 à 3 fois de LTV pour les opt-ins SMS)

### Quoi A/B tester

- L'heure d'envoi (après-midi vs soir, heure locale)
- La longueur du copy (SMS court vs MMS avec image)
- Le montant et le déclencheur de la remise (immédiat vs différé)
- Les jetons de personnalisation (avec ou sans prénom)
- Le copy du CTA (« Shop now » vs « See it » vs « Last chance »)

Croisez le skill **ab-testing** pour un protocole de test rigoureux et **analytics** pour la mise en place de l'attribution.

## Format de sortie

Quand l'utilisateur demande un plan SMS, livrez :

1. **Contrôle de conformité** : l'enregistrement A2P 10DLC est-il fait (États-Unis) ? Le mécanisme d'opt-in est-il conforme ? Signalez les bloquants en premier.
2. **Stratégie** : quels flux SMS construire en premier, classés par ROI selon le modèle économique.
3. **Conceptions de séquences** : pour chaque flux prioritaire, précisez le déclencheur, les délais, la copy avec comptage de caractères, le CTA, la segmentation.
4. **Recommandation de plateforme** : selon la stack, la taille de liste et la complexité.
5. **Plan de mesure** : KPI, benchmarks, file d'attente d'A/B tests.
6. **Pied de conformité** : mentions obligatoires, templates de réponses STOP/HELP.

Gardez les recommandations précises. Ne dites pas « envoyez un SMS au bon moment » — dites « envoyez 30 min après l'abandon de panier, 4 heures plus tard si pas d'achat, 24 heures plus tard avec une remise ».

## Questions propres à la tâche

1. Êtes-vous aux États-Unis, en UE, ou les deux ? (Cela change toute l'approche de conformité.)
2. L'enregistrement A2P 10DLC est-il complété (États-Unis) ?
3. Sur quelle plateforme êtes-vous ou laquelle envisagez-vous ?
4. Taille de la liste e-mail et taux d'opt-in SMS (s'il existe) ?
5. Quelles séquences tournez-vous déjà ?
6. Êtes-vous e-commerce DTC, application mobile, SaaS B2B, services ?
7. Quel est l'objectif principal : revenu, activation, rétention ou transactionnel ?

## Erreurs fréquentes

1. **Sauter l'enregistrement A2P 10DLC** — vos messages sont filtrés dans le vide. Enregistrez-vous d'abord, envoyez ensuite.
2. **Traiter le SMS comme l'e-mail** — des blasts promotionnels quotidiens. Les opt-out explosent, la liste meurt.
3. **Une remise dès le premier message de panier abandonné** — cela apprend aux clients à toujours abandonner. Réservez-la au deuxième ou troisième envoi.
4. **Un générique « From: [shortcode] »** — le destinataire a besoin du nom de marque dans le message lui-même.
5. **Oublier les heures calmes** — envoyer à 6 h heure locale génère opt-outs et plaintes TCPA.
6. **Pas de traitement STOP/HELP** — non négociable. Toutes les plateformes le gèrent ; vérifiez que la vôtre le fait.
7. **Des emojis partout** — cela bascule en encodage UCS-2, divise la taille des segments par deux et double le coût.
8. **Des messages exemples A2P différents des envois réels** — les opérateurs flaggent et bloquent.
9. **Aucun suivi des conversions** — impossible de justifier le ROI du canal sans attribution.
10. **Pas de bridage sur les envois massifs** — les salves déclenchent le filtrage opérateur. Utilisez le throttling de la plateforme.

## Intégrations d'outils

Pour la mise en œuvre, consultez le [registre des outils](https://github.com/mbzadev/skills/blob/main/tools/REGISTRY.md). Outils SMS clés :

| Outil | Idéal pour | MCP | Guide |
|-------|------------|:---:|-------|
| **Klaviyo** | E-mail + SMS e-commerce combinés | ✓ | [klaviyo.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/klaviyo.md) |
| **Postscript** | SMS DTC Shopify, intégration la plus profonde | - | [postscript.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/postscript.md) |
| **Attentive** | SMS DTC mid-market et plus, full-service | - | [attentive.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/attentive.md) |
| **Twilio** | API brute pour constructions custom, transactionnel, dev-first | - | [twilio.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/twilio.md) |
| **Plivo** | Alternative à Twilio, coût par envoi plus bas | - | [plivo.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/plivo.md) |
| **AudienceTap** | DTC orienté IA, opt-in par QR sur packaging | - | [audiencetap.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/audiencetap.md) |
| **Brevo** | E-mail + SMS UE, adapté PME | ✓ | [brevo.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/brevo.md) |
| **Customer.io** | Automatisation SMS comportementale | - | [customer-io.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/customer-io.md) |

## Skills liés

- `emails` : canal sœur — presque toujours menés ensemble. L'e-mail porte le contenu long ; le SMS porte les relances urgentes.
- `copywriting` : pour le copy SMS à grande échelle et les pages ou e-mails longs vers lesquels le SMS pointe.
- `popups` : pour les popups de capture de numéros de téléphone sur le site.
- `churn-prevention` : pour les flux win-back qui combinent SMS + e-mail.
- `onboarding` : pour les rappels de jalons SMS après inscription.
- `analytics` : pour l'attribution et la mesure du RPS.
- `ab-testing` : pour la conception de tests propres au SMS.
- `lead-magnets` : pour inciter à l'opt-in (l'offre « 10 % de remise pour nous rejoindre »).
