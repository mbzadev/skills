---
name: wayfinder
description: "Planifiez un effort trop vaste pour une seule session sous la forme d’une carte partagée de tickets de décision dans votre outil de suivi, puis résolvez-les un à un jusqu’à ce que le chemin vers la destination soit clair."
---

Une idée encore vague dépasse ce qu’une seule session peut contenir : le chemin vers la **destination** n’est pas encore visible. Wayfinder sert à découvrir cet itinéraire, pas à réaliser la construction elle-même. Le skill crée une **carte partagée** dans l’outil de suivi du dépôt, puis traite un à un ses **tickets de décision** — des questions dont la résolution produit une décision, et non une tranche de mise en œuvre — jusqu’à ce que la voie soit claire.

La destination dépend de l’effort ; la nommer constitue le premier acte de cartographie et donne sa forme à chaque ticket. Il peut s’agir d’une spécification à transmettre, d’une décision structurante à prendre avant la planification ou d’un changement achevé, comme une migration de données. La carte ne dépend pas du domaine : ingénierie, contenu pédagogique ou tout autre travail présentant la même forme.

## Planifier sans réaliser

Par défaut, Wayfinder **planifie** : chaque ticket résout une décision et la carte se termine lorsqu’il ne reste plus rien à décider avant la construction. L’envie de commencer la mise en œuvre signale généralement que vous avez atteint le bord de la carte et qu’il faut transmettre le travail. Les **Notes** peuvent explicitement modifier cette règle pour un effort particulier ; sinon, produisez des décisions, pas des livrables.

## Référencer les tickets par leur titre

Chaque carte et chaque ticket possèdent un **titre**. Dans tout texte destiné à l’humain — narration et décisions déjà prises — utilisez ce titre, jamais un simple identifiant, numéro ou slug. Une suite comme `#42, #43, #44` est illisible ; des titres se comprennent immédiatement. Conservez l’identifiant et l’URL dans le lien associé au titre, sans les utiliser à sa place.

## La carte

La carte est un ticket unique de l’outil de suivi, étiqueté `wayfinder:map`. Il constitue l’artefact canonique et ses tickets de décision sont des tickets enfants.

La carte est un **index**, pas un entrepôt. Elle répertorie les décisions et pointe vers les tickets qui en contiennent le détail. Chaque décision n’existe qu’à un seul endroit — son ticket — ; la carte n’en conserve que l’essentiel et le lien.

**L’emplacement de la carte, de ses tickets enfants, de ses blocages et de ses requêtes de frontière dépend de l’outil de suivi.** Cette configuration doit déjà exister ; sinon, exécutez `/setup-matt-pocock-skills`. Consultez la section « Opérations d’orientation » du document de suivi pour connaître les conventions du dépôt. Si aucun outil n’est configuré, utilisez le suivi Markdown local.

### Le corps de la carte

La carte entière en basse résolution, chargée une fois par session. Les tickets ouverts ne sont **pas** répertoriés : ce sont des problèmes enfants ouverts, trouvés par requête.

```markdown
## Destination

<à quoi ressemble l’arrivée au terme de la carte : spécification, décision ou changement recherché. Une ou deux lignes ; chaque session s’y oriente avant de choisir un ticket.>

## Notes

<domaine ; skills que chaque session doit consulter ; préférences permanentes pour cet effort>

## Décisions prises

<!-- index : une ligne par ticket fermé, suffisante pour juger sa pertinence ; le lien donne accès aux détails -->

- [<titre du ticket fermé>](lien) — <résumé de la réponse en une ligne>

## Pas encore spécifié

<!-- voir « Brouillard de guerre » : zone encore floue mais dans le périmètre, qui deviendra spécifiable à mesure que la frontière avance -->

## Hors périmètre

<!-- voir « Hors périmètre » : travail situé au-delà de la destination, fermé et jamais promu -->
```

### Tickets

Chaque ticket est un **ticket enfant** de la carte et conserve l’identifiant attribué par l’outil de suivi. Son contenu est une question dont le périmètre doit tenir dans une seule session d’agent :

```markdown
## Question

<décision ou enquête résolue par ce ticket>
```

Chaque ticket porte une étiquette `wayfinder:<type>` — `research`, `prototype`, `grilling` ou `task` — décrite dans [Types de tickets](#types-de-tickets).

Avant tout travail, une session **réserve** le ticket en se l’attribuant, afin que les sessions concurrentes l’ignorent. L’attribution matérialise la réservation : un ticket ouvert et non attribué reste disponible.

Le blocage utilise la relation de dépendance **native** de l’outil, car elle rend la frontière visible directement dans son interface. Si l’outil ne prend pas les blocages en charge, utilisez la convention textuelle définie dans sa configuration. Un ticket est **débloqué** lorsque tous ses bloqueurs sont fermés ; la **frontière** regroupe les tickets enfants ouverts, débloqués et non attribués — la limite actuelle du connu.

La réponse ne figure pas dans le corps initial : elle est enregistrée au moment de la résolution, comme expliqué dans [Parcourir la carte](#parcourir-la-carte). Les ressources produites pendant le travail sont liées au ticket au lieu d’être copiées dans son contenu.

## Types de tickets

Chaque ticket est soit **HITL** — traité avec un humain qui parle pour lui-même — soit **AFK**, piloté par l’agent seul. Un ticket HITL n’est résolu que par cet échange direct ; l’agent ne répond jamais à la place de l’humain.

- **Recherche** (AFK) : lecture de documentation, d'API tierces ou de ressources locales telles que des bases de connaissances pour faire apparaître un fait sur lequel une décision attend. Résolu par un `/research` **sous-agent**. À utiliser lorsque des connaissances en dehors du répertoire de travail actuel sont requises.
- **Prototype** (HITL) : rendez la discussion plus concrète avec un artefact rapide et peu coûteux — aperçu, maquette sommaire, squelette ou code d’interface et de logique produit avec `/prototype`. Liez le prototype au ticket comme ressource. Utilisez ce type lorsque la question centrale est « à quoi devrait-il ressembler ? » ou « comment devrait-il se comporter ? ».
- **Discussion** (HITL) : cas par défaut, résolu par la conversation. Invoquez toujours `/grilling` et `/domain-modeling`.
- **Tâche** (HITL ou AFK) : travail manuel qui doit avoir lieu avant qu'une _décision_ puisse être prise — rien à décider, prototype ou recherche, mais la discussion est bloquée jusqu'à ce qu'elle soit terminée. S'inscrire à un service pour que son API puisse être jugée, fournir l'accès, déplacer les données pour que sa forme soit visible. C'est le seul type qui _fait_ plutôt que décide - et il gagne sa place en débloquant une décision, et non en livrant la destination. L'agent le conduit seul là où il peut (AFK) ; sinon, il remet à l'humain une liste de contrôle précise (HITL). Résolu une fois les travaux terminés ; la réponse enregistre ce qui a été fait et tous les faits qui en résultent (emplacement des informations d'identification, nouvelles URL, nombre de lignes) dont dépendent les tickets ultérieurs.

## Brouillard de guerre

La carte est _délibérément_ incomplète : ne tracez pas ce qui reste invisible. Au-delà des tickets définis se trouve le **brouillard de guerre** : des décisions et des enquêtes que vous pressentez sans pouvoir encore les formuler, car elles dépendent de questions ouvertes. La résolution d’un ticket dissipe une partie de ce brouillard et transforme les questions devenues précises en nouveaux tickets, jusqu’à dégager le chemin vers la destination.

La section **Pas encore spécifié** de la carte est l'endroit où cette vision sombre est écrite : la question suspectée, la zone à revisiter plus tard. C'est la frontière inconnue vers la destination – tout ici est à portée de main, mais pas assez précis pour obtenir un ticket. Écrivez de manière aussi lâche ou aussi complète que la vue le permet ; il sert également de panneau indicateur pour les collaborateurs qui lisent où se dirige l'effort.

**Brouillard ou ticket ?** Le test est de savoir si vous pouvez poser la question avec précision maintenant – _pas_ si vous pouvez y répondre maintenant.

- **Ticket lorsque** la question est déjà pointue, même si elle est bloquée et que vous ne pouvez pas encore y donner suite.
- **Pas encore spécifié quand** vous ne pouvez pas encore le formuler aussi clairement. Ne découpez pas le brouillard en morceaux de la taille d'un ticket : il est plus grossier qu'un ticket, et une zone peut se transformer en plusieurs tickets, voire aucun, une fois que la frontière l'atteint.

**Pas encore spécifié** exclut ce qui a déjà été décidé (décisions jusqu'à présent), ce qui est déjà un ticket en direct et ce qui est hors de portée (la section suivante).

## Hors de portée

Le brouillard ne se rassemble que vers la destination. La destination fixe la portée, donc le travail au-delà est **hors de portée** — ce n'est pas du brouillard et il n'appartient pas à **Pas encore spécifié**. Il a sa propre section **Hors de portée** sur la carte : un travail que vous avez consciemment exclu de _cet_ effort. C'est la portée, et non la netteté, qui l'amène ici.

Le travail hors champ ne finit jamais – la frontière s’arrête à la destination – donc il ne revient que si la destination est redessinée, et alors comme un nouvel effort, pas une reprise.

Déclarer quelque chose hors de portée est un acte de cadrage, et non une étape sur la route. Lorsqu'un ticket qui existe déjà se trouve au-delà de la destination - mal défini lors de la cartographie ou exposé par une résolution - **fermez-le** (un ticket fermé est sans ambiguïté hors de la frontière) et laissez une ligne dans la section **Hors de portée** : l'essentiel et pourquoi il est hors de portée, reliant le ticket fermé. Il reste en dehors des **Décisions jusqu'à présent**, qui enregistrent l'itinéraire réellement parcouru : une limite de portée ne constitue pas une étape sur celui-ci.

## Invocation

Deux modes. Quoi qu'il en soit, **ne résolvez jamais plus d'un ticket par session**, à l'exception des tickets de recherche.

### Tracer la carte

L'utilisateur invoque avec une idée vague.

1. **Nommez la destination.** Exécutez une session `/grilling` et `/domain-modeling`  pour déterminer vers quoi cette carte se dirige : la spécification, la décision ou le changement. La destination fixe la portée, elle est donc réglée en premier.
2. **Cartographier la frontière.** Reprenez les questions **en largeur** : parcourez tout l’espace au lieu d’approfondir une seule branche, afin de faire apparaître les décisions ouvertes et les premières étapes possibles. **S’il n’y a aucun brouillard**, le chemin est déjà clair et l’effort tient dans une session ; arrêtez-vous et demandez à l’utilisateur comment poursuivre sans créer de carte inutile.
3. **Créer la carte** (étiquette `wayfinder:map`) : Destination et notes renseignées, Décisions jusqu'à présent vides, le brouillard esquissé dans **Pas encore spécifié**.
4. **Créez les tickets que vous pouvez spécifier maintenant** en tant que problèmes enfants de la carte — puis câblez les bords de blocage dans une **seconde passe** (les problèmes ont besoin d'identifiants avant de pouvoir se référencer les uns les autres). Le câblage les trie en frontière et en bloqué ; tout ce que vous ne pouvez pas encore spécifier reste dans le brouillard : la section **Pas encore spécifié**.
5. **Lancez les sous-agents de recherche.** Pour chaque `research` ticket que vous venez de créer, lancez un `/research` sous-agent pour le résoudre en parallèle, en capturant ses résultats sur une branche jetable `research/<name>`  avec un pointeur contextuel du ticket.
6. Arrêtez-vous : une session de cartographie crée la carte, elle ne résout pas elle-même les tickets manuels.

### Parcourir la carte

L'utilisateur invoque avec une carte (URL ou numéro). Un ticket est **facultatif** : sans celui-ci, vous choisissez la décision suivante, pas l'utilisateur.

1. Chargez la **carte** — la vue basse résolution, pas tous les corps de ticket.
2. Choisissez le ticket. Si l'utilisateur en a nommé un, utilisez-le. Sinon, prenez le premier ticket frontière dans l'ordre. **Réclamez-le** : attribuez-le-vous avant tout travail.
3. Résolvez-le — **zoomez si nécessaire** : récupérez le corps complet de tout ticket associé ou fermé sur demande ; invoquez les compétences que les `## Notes`  bloquent. En cas de doute, utilisez `/grilling` et `/domain-modeling`.
4.  Enregistrez la résolution : publiez la réponse en tant que **commentaire de résolution**, **fermez** le problème et **ajoutez un pointeur contextuel** aux décisions prises jusqu'à présent sur la carte.
5. Ajoutez les tickets nouvellement révélés, puis configurez leurs dépendances. Transformez en tickets les zones de brouillard désormais formulables et retirez-les de **Pas encore spécifié**, afin que chaque question n’existe qu’à un seul endroit. Si la réponse place un ticket au-delà de la destination, **déclarez-le hors périmètre** au lieu de le résoudre. Mettez à jour ou supprimez les autres tickets invalidés par la décision.

L’utilisateur peut traiter plusieurs tickets débloqués en parallèle ; prévoyez donc que d’autres sessions modifient simultanément l’outil de suivi.
