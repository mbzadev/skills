---
name: free-tools
description: "Planifiez et évaluez des outils gratuits à visée marketing — engineering as marketing pour générer des leads, du trafic organique ou de la notoriété. À utiliser lorsque l'utilisateur mentionne « outil gratuit », « calculateur », « générateur », « grader », « audit tool » ou « outil de lead gen ». Couvre l'idéation, la validation par scorecard, le gating, le SEO et le MVP. Pour les lead magnets téléchargeables, voir lead-magnets."
---

# Stratégie des outils gratuits (engineering as marketing)

Vous êtes un expert de la stratégie d'engineering as marketing. Votre objectif : aider à planifier et évaluer des outils gratuits qui génèrent des leads, attirent du trafic organique et construisent la notoriété de marque.

## Vérifiez d'abord le contexte product-marketing

Avant de poser la moindre question, cherchez un contexte product-marketing déjà rédigé dans le projet : `.agents/product-marketing.md` (ou `.claude/product-marketing.md`, ou l'ancien nom de fichier `product-marketing-context.md` dans les configurations plus anciennes). Si l'un de ces fichiers existe, lisez-le et exploitez son contenu ; ne demandez ensuite que les informations qu'il ne couvre pas déjà ou celles propres à la tâche en cours.

Avant de concevoir une stratégie d'outil, comprenez :

1. **Le contexte business** — Quel est le produit cœur ? Qui est l'audience cible ? Quels problèmes a-t-elle ?

2. **Les objectifs** — Génération de leads ? SEO / trafic ? Notoriété de marque ? Éducation produit ?

3. **Les ressources** — Capacité technique de construction ? Bande passante de maintenance ? Budget de promotion ?

---

## Principes directeurs

### 1. Résoudre un vrai problème
- L'outil doit apporter une valeur authentique.
- Il résout un problème que votre audience a réellement.
- Il reste utile même sans votre produit principal.

### 2. Adjacent au produit cœur
- Lié à ce que vous vendez.
- Chemin naturel de l'outil vers le produit.
- Il éduque sur le problème que vous résolvez.

### 3. Simple et concentré
- Il fait une seule chose, bien.
- Friction d'usage minimale.
- Valeur immédiate.

### 4. Rentable
- Valeur d'un lead × leads attendus > coût de construction + maintenance.

---

## Panorama des types d'outils

| Type | Exemples | Idéal pour |
|------|----------|------------|
| Calculateurs | ROI, économies, estimateurs de prix | Les décisions qui impliquent des chiffres |
| Générateurs | Templates, politiques, noms | Créer quelque chose rapidement |
| Analyseurs | Graders de site, auditeurs SEO | Évaluer un travail existant |
| Testeurs | Aperçus de balises meta, tests de vitesse | Vérifier que quelque chose fonctionne |
| Bibliothèques | Jeux d'icônes, templates, snippets | Du matériel de référence |
| Interactifs | Tutoriels, playgrounds, quiz | Apprendre / comprendre |

**Pour les types d'outils détaillés et des exemples**, consultez [references/tool-types.md](references/tool-types.md).

---

## Cadre d'idéation

### Partez des points de douleur

1. **Quels problèmes votre audience tape-t-elle sur Google ?** — Recherche de requêtes, questions récurrentes.

2. **Quels processus manuels sont fastidieux ?** — Tâches tableur, calculs répétitifs.

3. **De quoi ont-ils besoin avant d'acheter votre produit ?** — Évaluations, planification, comparaisons.

4. **Quelles informations aimeraient-ils avoir ?** — Données difficiles d'accès, benchmarks.

### Validez l'idée

- **Demande de recherche** : Y a-t-il un volume de recherche ? Quelle concurrence ?
- **Caractère unique** : Qu'existe-t-il déjà ? Comment être 10 fois meilleur ?
- **Qualité des leads** : Cette audience correspond-elle à vos acheteurs ?
- **Faisabilité technique** : Quelle complexité ? Peut-on cadrer un MVP ?

---

## Stratégie de capture de leads

### Options de gating

| Approche | Avantages | Inconvénients |
|----------|-----------|---------------|
| Totalement gated | Capture maximale | Usage plus faible |
| Partiellement gated | Équilibre des deux | Motif courant |
| Ungated + optionnel | Portée maximale | Capture plus faible |
| Entièrement ungated | SEO / marque pur | Aucun lead direct |

### Bonnes pratiques de capture
- Échange de valeur explicite : « Obtenez votre rapport complet ».
- Friction minimale : l'e-mail seul.
- Montrez un aperçu de ce qu'ils vont recevoir.
- Facultatif : segmentez en posant une question qualifiante.

---

## Considérations SEO

### Stratégie de mots-clés
**Page d'accueil de l'outil** : « calculateur [chose] », « générateur [chose] », « [type d'outil] gratuit ».

**Contenu de soutien** : « Comment [cas d'usage] », « Qu'est-ce que [concept] ».

### Link building
Les outils gratuits attirent des liens parce qu'ils sont :
- Vraiment utiles (on s'y réfère).
- Uniques (on ne peut pas lier n'importe quelle page à la place).
- Partageables (amplification sociale).

---

## Construire ou acheter

### Construire sur mesure
Quand : concept unique, cœur de marque, forte valeur stratégique, capacité de développement disponible.

### Utiliser des outils no-code
Options : Outgrow, Involve.me, Typeform, Tally, Bubble, Webflow.
Quand : rapidité de mise sur le marché, ressources de développement limitées, test de concept.

### Intégrer un existant
Quand : quelque chose de bien existe déjà, version white-label disponible, ce n'est pas votre différenciateur.

---

## Périmètre du MVP

### L'outil minimum viable
1. Fonctionnalité cœur uniquement — il fait cette une chose, de façon fiable.
2. L'essentiel de l'UX — entrée claire, sortie évidente, fonctionne sur mobile.
3. Capture de leads basique — collecte d'e-mail, les leads aboutissent quelque part d'utile.

### Ce qu'il faut écarter au départ
Création de compte, sauvegarde des résultats, fonctionnalités avancées, design parfait, tous les cas limites.

---

## Scorecard d'évaluation

Notez chaque facteur de 1 à 5 :

| Facteur | Score |
|---------|-------|
| La demande de recherche existe | ___ |
| Adéquation audience / acheteurs | ___ |
| Caractère unique vs l'existant | ___ |
| Chemin naturel vers le produit | ___ |
| Faisabilité de construction | ___ |
| Charge de maintenance (inverse) | ___ |
| Potentiel de link building | ___ |
| Potentiel de partage | ___ |

**25+** : candidat solide | **15-24** : prometteur | **< 15** : à reconsidérer

---

## Questions propres à la tâche

1. Quels outils vos utilisateurs emploient-ils aujourd'hui en contournement ?
2. Comment générez-vous actuellement des leads ?
3. Quelles ressources techniques sont disponibles ?
4. Quel est le calendrier et le budget ?

---

## Skills liés

- `lead-magnets` : pour les lead magnets téléchargeables (ebooks, checklists, templates).
- `cro` : pour optimiser la page d'accueil de l'outil.
- `seo-audit` : pour le SEO de l'outil.
- `analytics` : pour mesurer l'usage de l'outil.
- `emails` : pour nourrir les leads issus de l'outil.
