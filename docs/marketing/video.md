## Ce qu'il fait

`video` produit des vidéos marketing — démos produit, explainers, clips sociaux, publicités — en combinant quatre voies : le programmatique (Remotion, Hyperframes), la génération IA (Veo, Sora, Runway, Kling…), les avatars IA (HeyGen, Synthesia) et le repurposing de contenu long (Descript, Opus Clip, CapCut). Sa contrainte définissante : le pipeline est pensé pour être piloté par un agent de bout en bout — le script vient du contexte produit, les frames sont du HTML rendu en MP4, les avatars passent par un serveur MCP — sans étape de montage manuelle.

## Quand l'utiliser

Appelez `/video`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.

Utilisez ce skill lorsqu'il faut créer, générer ou produire une vidéo : scripter et rendre une démo ou un explainer, générer du B-roll impossible à tourner, produire des clips en batch à partir d'un template, créer un talking head avec un avatar IA, ou répliquer le style d'un montage de référence (« copier ce edit »). Pour décider quoi publier et scripter les hooks d'une vidéo courte, utilisez plutôt [social](https://aihero.dev/skills-social) ; pour les créas vidéo publicitaires payantes, [ad-creative](https://aihero.dev/skills-ad-creative).

## Prérequis

Le skill lit le contexte product-marketing du projet (`.agents/product-marketing.md` s'il existe) avant toute question : le script de la vidéo en découle directement. Selon la voie choisie, des clés API (HeyGen, modèles vidéo) ou un runtime Node.js peuvent être nécessaires.

## Quatre voies de production

Le choix de la voie précède toujours le choix de l'outil. La vidéo templatisée, répétée ou pilotée par les données passe par le programmatique ; le B-roll et les plans signatures par la génération IA ; le présentateur sans tournage par les avatars ; le podcast ou webinaire existant par le repurposing. Une règle traverse les quatre : le texte à l'écran ne se génère jamais par IA — les modèles produisent du texte illisible — il se pose en calques programmatiques.

## Le pipeline natif agent

La configuration cible enchaîne des outils qu'un agent appelle directement : Hyperframes rend du HTML en MP4 déterministe, le serveur MCP de HeyGen génère l'avatar depuis le script, les API des modèles vidéo sont de simples requêtes HTTP. L'agent assemble le montage final et livre une vidéo prête à publier — c'est ce qui distingue ce skill d'un simple guide d'outils.

## Questions fréquentes

**Hyperframes ou Remotion ?**

Hyperframes pour la compatibilité agent maximale : chaque frame est un document HTML qu'un agent de codage génère sans apprendre un framework, sous licence Apache 2.0, avec un rendu déterministe. Remotion quand il faut des animations avancées (Spring, interpolate) ou un rendu batch massif via Lambda — au prix de compétences React et d'une licence entreprise pour l'usage commercial.

**Quel modèle vidéo pour du B-roll en volume ?**

Kling ou Seedance pour le coût à la seconde et le batch ; Hailuo si la même personne doit rester cohérente d'un plan à l'autre ; Veo 3 ou Sora 2 pour la qualité maximale avec audio synchronisé ; Hunyuan Video ou Wan 2 en weights ouverts si vous voulez tout contrôler sans frais d'API.

**L'avatar IA convient-il à tout ?**

Non. Il excelle sur le récurrent, le multilingue et la prospection personnalisée à l'échelle, mais le contenu authentique de fondateur se filme, la démonstration d'UI produit passe par la capture d'écran, et la vidéo créative relève de la génération IA.

## Indicateurs de réussite

- La stratégie est posée avant les outils : le type de vidéo, la plateforme et le ratio d'aspect (9:16 social, 16:9 YouTube/web, 1:1 feed) sont fixés avant toute génération.
- Aucun texte à l'écran n'est généré par le modèle vidéo — tout texte lisible vient d'un calque programmatique.
- Chaque vidéo livrée comporte des sous-titres.
- Les vidéos récurrentes sont des templates alimentés en données et rendus en batch, pas des montages refaits à la main.
- Le script s'appuie sur le contexte produit plutôt que sur des généralités.

## Où il s'inscrit

`video` est l'outil de production audiovisuelle de la collection : il fabrique ce que la stratégie a décidé de publier.

Il reçoit ses sujets et ses hooks de [social](https://aihero.dev/skills-social), qui couvre la stratégie de contenu vidéo courte, et s'appuie sur [copywriting](https://aihero.dev/skills-copywriting) pour les scripts. Pour parcourir l'ensemble des skills, passez par [ask-mabza](https://aihero.dev/skills-ask-mabza).
