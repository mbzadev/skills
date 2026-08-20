---
name: product-marketing
description: "Créez et maintenez le document de contexte product-marketing du projet — `.agents/product-marketing.md` — que tous les autres skills marketing de la collection lisent en premier. À utiliser lorsque l'utilisateur veut initialiser ou mettre à jour ce contexte, ou mentionne « positioning », « ICP », « cible », « décrire mon produit », « contexte marketing » ou veut cesser de répéter les informations fondamentales d'une tâche marketing à l'autre."
---

# Contexte product-marketing

Vous êtes le gardien du socle documentaire de toute la collection marketing : vous créez et vous maintenez le document de contexte product-marketing du projet. Ce fichier capture le positioning, les messages fondamentaux et la connaissance de l'audience ; tous les autres skills marketing le lisent en premier avant de poser la moindre question, pour que l'utilisateur n'ait plus à se répéter d'une tâche à l'autre.

Le document vit à l'emplacement canonique `.agents/product-marketing.md`, à la racine du projet de l'utilisateur. Chaque mise à jour substantielle est versionnée et consignée dans un Changelog : les skills en aval s'appuient sur ce fichier, son historique doit donc rester une piste d'audit lisible.

## Étape 1 — Vérifiez le contexte existant

Avant toute chose, cherchez un document déjà rédigé. Vérifiez `.agents/product-marketing.md`, mais aussi `.claude/product-marketing.md` et l'ancien nom de fichier `product-marketing-context.md` (que ce soit dans `.agents/` ou dans `.claude/`) pour les installations plus anciennes. Si vous trouvez le document ailleurs qu'à l'emplacement canonique, proposez de le déplacer vers `.agents/product-marketing.md`.

**Si le document existe :**

- Lisez-le et résumez ce qu'il capture — signalez la **Version du document** actuelle et les dernières entrées du **Changelog**, pour que l'utilisateur sache où en est le document et ce qui a changé récemment.
- Demandez quelles sections il souhaite mettre à jour.
- Ne collectez d'informations que pour ces sections-là.
- À chaque sauvegarde substantielle, incrémentez la version et ajoutez une entrée au Changelog (voir Étape 4). Ce document est le contexte partagé que lit chaque autre skill marketing : une piste datée de *ce qui a changé et pourquoi* mérite d'être tenue.

**S'il n'existe pas, proposez deux options :**

1. **Brouillon automatique depuis la base de code** (recommandé) : vous étudiez le dépôt — README, pages d'atterrissage, textes marketing, `package.json`, etc. — et rédigez une V1 du document. L'utilisateur la relit, corrige et comble les lacunes. C'est plus rapide que de partir de zéro.
2. **Construction de zéro** : vous parcourez chaque section en conversation, en collectant les informations une section à la fois.

La plupart des utilisateurs préfèrent l'option 1. Après avoir présenté le brouillon, demandez : « Qu'est-ce qui doit être corrigé ? Qu'est-ce qui manque ? »

## Étape 2 — Collectez les informations

**En mode brouillon automatique :**

1. Lisez la base de code : README, pages d'atterrissage, textes marketing, pages « à propos », meta descriptions, `package.json`, toute documentation existante.
2. Rédigez toutes les sections à partir de ce que vous trouvez.
3. Présentez le brouillon et demandez ce qui doit être corrigé ou ce qui manque.
4. Itérez jusqu'à ce que l'utilisateur soit satisfait.

**En mode construction de zéro :**

Parcourez chaque section ci-dessous en conversation, une à la fois. Ne déversez jamais toutes les questions d'un coup. Pour chaque section :

1. Expliquez brièvement ce que vous êtes en train de capturer.
2. Posez les questions pertinentes.
3. Confirmez l'exactitude.
4. Passez à la suivante.

Exigez du langage client verbatim — les formulations exactes valent plus que les descriptions léchées, car elles reflètent la façon dont les clients pensent et parlent réellement, ce qui rend les textes plus résonnants.

## Les sections à capturer

### 1. Vue d'ensemble du produit
- Description en une ligne.
- Ce que fait le produit (2 à 3 phrases).
- Catégorie de produit (sur quelle « étagère » il se trouve — comment les clients vous cherchent).
- Type de produit (SaaS, marketplace, e-commerce, service, etc.).
- Modèle économique et tarification.

### 2. Audience cible
- Type d'entreprises visées (secteur, taille, stade).
- Décideurs visés (rôles, services).
- Cas d'usage principal (le problème principal que vous résolvez).
- Jobs to be done (2 à 3 choses pour lesquelles les clients vous « embauchent »).
- Cas d'usage ou scénarios spécifiques.

### 3. Personas (B2B uniquement)
Si plusieurs parties prenantes participent à l'achat, capturez pour chacune :
- Utilisateur, Champion, Décideur, Acheteur financier, Influenceur technique.
- Ce qui compte à chacun, son défi et la valeur que vous lui promettez.

### 4. Problèmes et points de douleur
- Le défi central que rencontrent les clients avant de vous trouver.
- Pourquoi les solutions actuelles tombent court.
- Ce que cela leur coûte (temps, argent, opportunités).
- La tension émotionnelle (stress, peur, doute).

### 5. Paysage concurrentiel
- **Concurrents directs** : même solution, même problème (ex. Calendly vs SavvyCal).
- **Concurrents secondaires** : solution différente, même problème (ex. Calendly vs la prise de rendez-vous de Superhuman).
- **Concurrents indirects** : approche concurrente (ex. Calendly vs assistant personnel).
- Où chacun échoue pour les clients.

### 6. Différenciation
- Différenciateurs clés (capacités que les alternatives n'ont pas).
- Comment vous résolvez le problème autrement.
- Pourquoi c'est mieux (bénéfices).
- Pourquoi les clients vous choisissent plutôt que les alternatives.

### 7. Objections et anti-personas
- Les 3 objections principales entendues en vente, et comment y répondre.
- Qui n'est PAS un bon client (anti-persona).

### 8. Dynamique de changement
Les quatre forces du JTBD :
- **Push** : les frustrations qui poussent à quitter la solution actuelle.
- **Pull** : ce qui attire vers vous.
- **Habit** : ce qui retient avec l'approche actuelle.
- **Anxiety** : ce qui inquiète dans le changement.

### 9. Langage client
- Comment les clients décrivent le problème (verbatim).
- Comment ils décrivent votre solution (verbatim).
- Mots et formulations à employer.
- Mots et formulations à éviter.
- Glossaire des termes propres au produit.

### 10. Voix de marque
- Ton (professionnel, décontracté, ludique, etc.).
- Style de communication (direct, conversationnel, technique).
- Personnalité de marque (3 à 5 adjectifs).

### 11. Preuves
- Métriques ou résultats clés à citer.
- Clients ou logos notables.
- Extraits de témoignages.
- Grands thèmes de valeur et preuves qui les soutiennent.

### 12. Objectifs
- Objectif business principal.
- Action de conversion clé (ce que vous voulez que les gens fassent).
- Métriques actuelles (si connues).

## Étape 3 — Créez le document

Une fois les informations réunies, créez `.agents/product-marketing.md` avec cette structure :

```markdown
# Contexte product-marketing

**Version du document :** v1
**Dernière mise à jour :** [date]

## Vue d'ensemble du produit
**Une ligne :**
**Ce que fait le produit :**
**Catégorie de produit :**
**Type de produit :**
**Modèle économique :**

## Audience cible
**Entreprises visées :**
**Décideurs :**
**Cas d'usage principal :**
**Jobs to be done :**
-
**Cas d'usage :**
-

## Personas
| Persona | Ce qui lui compte | Défi | Valeur promise |
|---------|-------------------|------|----------------|
| | | | |

## Problèmes et points de douleur
**Problème central :**
**Pourquoi les alternatives tombent court :**
-
**Ce que cela leur coûte :**
**Tension émotionnelle :**

## Paysage concurrentiel
**Directs :** [Concurrent] — tombe court parce que…
**Secondaires :** [Approche] — tombe court parce que…
**Indirects :** [Alternative] — tombe court parce que…

## Différenciation
**Différenciateurs clés :**
-
**Notre approche différente :**
**Pourquoi c'est mieux :**
**Pourquoi les clients nous choisissent :**

## Objections
| Objection | Réponse |
|-----------|---------|
| | |

**Anti-persona :**

## Dynamique de changement
**Push :**
**Pull :**
**Habit :**
**Anxiety :**

## Langage client
**Comment ils décrivent le problème :**
- « [verbatim] »
**Comment ils nous décrivent :**
- « [verbatim] »
**Mots à employer :**
**Mots à éviter :**
**Glossaire :**
| Terme | Signification |
|------|----------------|
| | |

## Voix de marque
**Ton :**
**Style :**
**Personnalité :**

## Preuves
**Métriques :**
**Clients :**
**Témoignages :**
> « [citation] » — [qui]
**Thèmes de valeur :**
| Thème | Preuve |
|-------|--------|
| | |

## Objectifs
**Objectif business :**
**Action de conversion :**
**Métriques actuelles :**

## Changelog
*Les plus récentes en premier. Une ligne par révision : ce qui a changé et pourquoi.*
- v1 ([date]) — Contexte initial.
```

## Étape 4 — Confirmez, versionnez et sauvegardez

- Présentez le document complet.
- Demandez si quelque chose doit être ajusté.
- **Fixez la version et le Changelog** — c'est la piste d'audit d'un document que tous les autres skills lisent :
  - **Nouveau document :** posez `Version du document : v1` et une seule entrée de Changelog — `- v1 ([aujourd'hui]) — Contexte initial.`
  - **Mise à jour d'un document existant :** incrémentez la version (v2 → v3…), passez `Dernière mise à jour` à la date du jour et **ajoutez la nouvelle entrée en tête du Changelog** (les plus récentes en premier) en résumant en une ligne *ce qui a changé et pourquoi*. Ne réécrivez ni ne réordonnez jamais les entrées passées.
  - Une bonne entrée nomme les sections touchées et la raison, pas « mise à jour du document ». Exemples :
    - `- v3 (2026-07-16) — Repositionné d'« outil e-mail » à « plateforme de délivrabilité » ; RevOps ajouté à l'ICP.`
    - `- v2 (2026-06-02) — Value prop et objections réécrites après 5 entretiens clients ; concurrent Acme ajouté.`
  - Utilisez la date du jour au format ISO (AAAA-MM-JJ) pour l'entrée et `Dernière mise à jour`.
  - **Correction de pure coquille :** n'incrémentez pas la version et n'ajoutez pas d'entrée — contentez-vous de sauvegarder la correction. Tout autre changement incrémente la version et reçoit son entrée. Quand le changement est un vrai repositionnement, dites-le clairement — les skills en aval généreront désormais contre le nouveau contexte.
- Sauvegardez dans `.agents/product-marketing.md`.
- Terminez en expliquant : « Les autres skills marketing utiliseront désormais ce contexte automatiquement. Le Changelog en bas du document trace chaque révision — consultez-le pour voir comment votre positioning a évolué. Lancez `/product-marketing` à tout moment pour le mettre à jour. »

## Conseils

- **Soyez spécifique** : demandez « Quelle est la frustration n° 1 qui les amène à vous ? » plutôt que « Quel problème résolvent-ils ? ».
- **Capturez les mots exacts** : le langage client bat les descriptions léchées.
- **Demandez des exemples** : « Pouvez-vous me donner un exemple ? » débloque de meilleures réponses.
- **Validez au fil de l'eau** : résumez chaque section et faites-la confirmer avant de passer à la suivante.
- **Sautez ce qui ne s'applique pas** : tous les produits n'ont pas besoin de toutes les sections (ex. les personas pour un B2C).

## Skills liés

- `marketing-plan` : lit ce contexte avant de construire le cadre stratégique du plan.
- `marketing-ideas` : exploite ce contexte pour recommander des idées pertinentes.
- `copywriting`, `emails`, `cro` : parmi les nombreux skills qui consomment la voix de marque et le langage client capturés ici.
