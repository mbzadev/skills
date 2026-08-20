## Ce qu'il fait

Il crée et maintient le document de contexte product-marketing d'un projet : positioning, audience cible, ICP, personas, objections, voix de marque, langage client. Sa contrainte définissante : plutôt que de produire un livrable de plus, il écrit un fichier unique — `.agents/product-marketing.md` à la racine du projet — que tous les autres skills marketing de la collection lisent en premier, si bien que l'utilisateur n'a plus à répéter ses informations fondamentales d'une tâche à l'autre. Chaque mise à jour substantielle incrémente la version et ajoute une ligne au Changelog du document, plus récentes en premier.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/product-marketing`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill lorsqu'il faut initialiser ou mettre à jour le contexte produit — décrire le produit, définir la cible ou l'ICP, consigner la voix de marque — idéalement en début de projet, avant tout autre skill marketing. Pour construire un plan marketing annuel complet une fois ce socle posé, utilisez plutôt [marketing-plan](https://aihero.dev/skills-marketing-plan).

## Le mécanisme : un fichier partagé, versionné

Le document suit une structure fixe en douze sections (vue d'ensemble du produit, audience cible, personas B2B, problèmes, paysage concurrentiel, différenciation, objections, dynamique de changement JTBD, langage client, voix de marque, preuves, objectifs). Deux modes de création existent : un brouillon automatique rédigé depuis la base de code (README, pages d'atterrissage, textes marketing), que l'utilisateur corrige ensuite, ou une construction conversationnelle section par section. Les anciens emplacements — `.claude/product-marketing.md` et le nom historique `product-marketing-context.md` — sont détectés et migrés vers l'emplacement canonique.

La section Langage client exige du verbatim : les formulations exactes des clients valent plus que les descriptions léchées, parce que chaque skill en aval (copywriting, emails, pages de vente) réutilise ces mots tels quels.

## Questions fréquentes

**Faut-il remplir les douze sections avant de pouvoir utiliser les autres skills ?**
Non. Le document est utile dès sa première version, même partielle, et les sections qui ne s'appliquent pas (les personas pour un B2C, par exemple) se sautent purement et simplement.

**Que se passe-t-il quand le document existe déjà ?**
Le skill le relit, résume ce qu'il capture en signalant la version et les dernières entrées du Changelog, puis ne collecte d'informations que pour les sections que l'utilisateur veut mettre à jour — pas de reprise à zéro.

**Une correction orthographique fait-elle monter la version ?**
Non. Une pure coquille se corrige sans incrémenter la version ni écrire d'entrée de Changelog ; tout autre changement monte la version et ajoute une ligne datée qui nomme les sections touchées et la raison.

## Indicateurs de réussite

- Le fichier produit se trouve bien à `.agents/product-marketing.md`, avec une version et un Changelog dont les entrées se lisent de la plus récente à la plus ancienne.
- La section Langage client contient des citations verbatim entre guillemets, pas des paraphrases.
- En mise à jour, seules les sections demandées sont re-collectées et une nouvelle entrée de Changelog résume le changement en une ligne.
- Les formulations du document reprennent les mots des clients plutôt que le jargon interne.

## Où il s'inscrit

Configuration initiale de la collection marketing : ce skill s'exécute en premier et produit le socle que tout le reste lit. [marketing-plan](https://aihero.dev/skills-marketing-plan) bâtit son cadre stratégique directement sur ce contexte, et [copywriting](https://aihero.dev/skills-copywriting) y puise la voix de marque et le langage client pour chaque texte. Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
