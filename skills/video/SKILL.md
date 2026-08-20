---
name: video
description: "Créez et produisez des vidéos marketing avec les outils IA et les frameworks programmatiques : Remotion, Hyperframes, HeyGen, Synthesia, Veo, Sora, Runway, Kling. À utiliser lorsque l'utilisateur mentionne « production vidéo », « vidéo IA », « avatar IA », « vidéo programmatique », « vidéo de démo », « explainer », « copier ce montage », « reverse-engineer cette vidéo » ou « fais-moi une vidéo », du script au rendu final."
---

# Vidéo marketing

Vous êtes un producteur vidéo expert qui aide à créer des vidéos marketing à l'aide de modèles de génération IA, d'avatars IA et de frameworks vidéo programmatiques. Votre objectif : produire efficacement du contenu vidéo professionnel — des démos produit et explainer aux clips sociaux et publicités.

## Avant de commencer

**Vérifiez d'abord le contexte product-marketing :**
si le fichier `.agents/product-marketing.md` existe dans le projet (ou `.claude/product-marketing.md`, ou l'ancien nom `product-marketing-context.md` dans les configurations plus anciennes), lisez-le avant de poser la moindre question. Exploitez ce contexte et ne demandez que les informations qu'il ne contient pas déjà ou celles spécifiques à la tâche en cours.

Réunissez ensuite ces informations (demandez-les si elles ne sont pas fournies) :

### 1. Objectif vidéo
- Quel type de vidéo ? (Démo produit, explainer, témoignage, clip social, publicité, tutoriel)
- Pour quelle plateforme cible ? (YouTube, TikTok/Reels/Shorts, site web, publicités, deck commercial)
- Quelle durée visée ?

### 2. Approche de production
- Faut-il un présentateur humain ? (Avatar IA contre voix off contre capture d'écran)
- Avez-vous des images ou des assets existants ? (Captures, logos, UI produit)
- Avez-vous besoin d'images générées ? (Scènes IA, B-roll)
- Est-ce une vidéo unique ou un template destiné à un usage répété ?

### 3. Contexte technique
- Quel est votre stack technique ? (Node.js, Python, etc.)
- Avez-vous des clés API pour des outils vidéo ?
- Des contraintes budgétaires ? (Certains outils facturent à la minute de vidéo)

---

## Choisir son approche

Sélectionnez l'outil adapté au besoin :

| Approche | Idéal pour | Outils | Quand l'utiliser |
|----------|----------|-------|-------------|
| **Programmatique** | Vidéo templatisée, pilotée par les données, en batch | Remotion, Hyperframes | Mises à jour produit, vidéos personnalisées, contenu récurrent |
| **Génération IA** | Images originales à partir de prompts texte/image | Veo 3, Sora 2, Runway, Kling, Seedance | B-roll, plans signatures, visuels créatiques impossibles à tourner |
| **Avatars IA** | Présentateur face caméra sans tournage | HeyGen, Synthesia | Explainers, tutoriels, contenu multilingue |
| **Édition/Repurposing** | Découpe du format long en clips courts | Descript, Opus Clip, CapCut | Podcast/webinaire → clips sociaux |

---

## Vidéo programmatique

Construisez des vidéos avec du code. Idéal pour la vidéo répétitive, templatisée ou pilotée par les données à grande échelle.

### Hyperframes (HTML/CSS — recommandé pour les agents)

Open source, Apache 2.0, édité par HeyGen. Utilise du HTML/CSS/JS pur — aucun DSL de framework à apprendre. Natif LLM : les modèles IA génèrent du meilleur HTML que des composants React.

```bash
npm install hyperframes
```

**Concept clé :** chaque frame est un document HTML. Composez les frames en une timeline, puis rendez le tout en MP4.

```typescript
import { render } from "hyperframes";

await render({
  frames: [
    { html: "<h1>Bienvenue chez Acme</h1>", duration: 3 },
    { html: "<h2>Voici ce que nous avons construit</h2>", duration: 3 },
    { html: "<p>Essayez gratuitement →</p>", duration: 2 },
  ],
  output: "intro.mp4",
  width: 1080,
  height: 1920, // 9:16 pour le vertical
});
```

**Idéal pour :** annonces produit, changelogs, rapports pilotés par les données, vidéos de prospection personnalisées.

**Pourquoi les agents le préfèrent :** le HTML/CSS pur permet à n'importe quel agent de codage de générer des frames sans apprendre un framework. Rendu déterministe — la même entrée produit toujours une sortie identique.

### Remotion (React)

Framework open source mature. Plus puissant qu'Hyperframes mais requiert des connaissances React.

```bash
npx create-video@latest
```

**Concept clé :** les composants React sont les frames. Les props pilotent le contenu. Rendu en local ou via Remotion Lambda (AWS) pour passer à l'échelle.

```tsx
export const ProductDemo: React.FC<{ title: string; features: string[] }> = ({
  title, features
}) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#000", color: "#fff" }}>
      <h1>{title}</h1>
      {features.map((f, i) => (
        <Sequence from={i * 30} key={i}>
          <p>{f}</p>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
```

**Idéal pour :** animations complexes, previews interactives, rendu batch à grande échelle (Lambda).

### Lequel choisir

| Facteur | Hyperframes | Remotion |
|--------|-------------|----------|
| Compatibilité agent | Meilleure (HTML pur) | Bonne (React) |
| Complexité d'animation | Basique (transitions CSS) | Avancée (Spring, interpolate) |
| Rendu batch | Local | Lambda (AWS) pour l'échelle |
| Courbe d'apprentissage | Minimale | Modérée (React + API Remotion) |
| Licence | Apache 2.0 | Licence entreprise pour usage commercial |

---

## Génération vidéo par IA

Générez des images originales à partir de prompts texte ou image. À utiliser pour le B-roll, les visuels signatures et les scènes impossibles à tourner en pratique.

### Comparatif des modèles

| Modèle | Résolution | Durée max | Idéal pour | Coût |
|-------|-----------|-------------|----------|------|
| **Veo 3** (Google) | Jusqu'à 1080p (4K selon cas) | Variable | Qualité générale au sommet, audio synchronisé | Par API |
| **Sora 2** (OpenAI) | Jusqu'à 1080p | Jusqu'à ~20 sec | Cinématique + audio synchronisé, intégration ChatGPT/API | API + ChatGPT |
| **Runway Gen-4** | Jusqu'à 4K | ~10 sec/génération | Contrôle du mouvement, cohérence temporelle, workflows d'édition stylée | 12-76 $/mois |
| **Kling 2.5/3.0** (Kuaishou) | Jusqu'à 1080p | Jusqu'à 2 min | Plans longs, coût à la seconde réduit | ~0,03 $/sec |
| **Seedance** (ByteDance) | Jusqu'à 1080p | Clips courts | Génération rapide, forte fidélité de mouvement à bas coût, adapté au batch | Au crédit |
| **Hailuo / MiniMax** | Jusqu'à 1080p | Clips courts | Cohérence de personnage entre plans | Au crédit |
| **Pika 2.x** | 1080p | Clips courts | Effets rapides, image-to-video, ticket d'entrée bas | Au crédit |
| **Hunyuan Video / Wan 2** | 720p-1080p | Variable | Open source auto-hébergé ; contrôle total, sans frais d'API | Gratuit (GPU) |

**Choix rapides** :
- **Qualité maximale + audio** : Veo 3 ou Sora 2
- **Batch / volume / coût** : Kling, Seedance
- **Cohérence de personnage sur plusieurs plans** : Hailuo
- **Auto-hébergé, contrôle de marque** : Hunyuan Video ou Wan 2 (weights ouverts)
- **Workflow storyboard → vidéo** : Runway, LTX Studio
- **Image-to-video depuis un visuel existant** : Kling, Pika, Runway

### Prompting pour les modèles vidéo

Un bon prompt vidéo précise : **sujet + action + caméra + style + ambiance**

```
Un gros plan de mains tapant sur un clavier d'ordinateur portable,
faible profondeur de champ, éclairage de bureau chaleureux,
la caméra recule lentement pour révéler un espace de travail moderne,
étalonnage cinématographique, 4K
```

**Erreurs courantes :**
- Trop vague (« une personne qui travaille ») — ajoutez des précisions
- Ignorer le mouvement de caméra — précisez dolly, pan, plan fixe
- Oublier le style — « cinématique », « documentaire », « publicitaire »
- Demander du texte à l'image — les modèles IA peinent avec le texte lisible

**Pour des guides de prompting détaillés** : consultez [references/ai-video-prompting.md](references/ai-video-prompting.md)

### Génération IA ou footage de stock ?

| Cas d'usage | Génération IA | Stock |
|----------|:---:|:---:|
| La scène exacte imaginée | Oui | Correspond rarement |
| Style cohérent entre clips | Oui | Difficile à assortir |
| Lieux réels reconnaissables | Non (hallucinations) | Oui |
| Produits/marques spécifiques | Non (passer par le programmatique) | Non |
| B-roll rapide | Les deux conviennent | Plus rapide |

---

## Avatars IA

Créez des vidéos face caméra sans tournage. Un avatar IA délivre votre script avec un lip-sync réaliste, des expressions et des gestes.

### HeyGen (recommandé — dispose d'un serveur MCP)

Meilleur lip-sync et micro-expressions. 230+ avatars, 140+ langues.

**Intégration agent :** HeyGen possède un serveur MCP officiel — les agents IA peuvent générer des vidéos d'avatar directement.

| Plan | Vidéos | Durée |
|------|--------|----------|
| Free | 3/mois | 3 min max |
| Creator | Illimitées | 5 min |
| Business | Illimitées | 20 min |

Consultez [heygen.com/pricing](https://www.heygen.com/pricing) pour les tarifs à jour.

**Idéal pour :** explainers produit, annonces de fonctionnalité, prospection commerciale personnalisée, contenu multilingue.

**Avatars personnalisés :** téléversez une vidéo de 2 à 5 min de vous-même pour créer un double numérique. Il vous ressemble et vous sonne, et génère des vidéos à partir de scripts texte.

### Synthesia

Avatars en pied avec un langage corporel expressif. Génération de script intégrée à partir d'URL/documents.

**Idéal pour :** formation en entreprise, vidéos de conformité, présentations corporate où le ton professionnel prime sur le réalisme.

### Avatar ou autre approche ?

| Scénario | Avatar | À préférer |
|----------|:---:|-------------|
| Contenu récurrent (mises à jour hebdo) | Oui | — |
| Versions multilingues | Oui | — |
| Prospection personnalisée à l'échelle | Oui | — |
| Contenu authentique de fondateur | Non | Filmez-vous |
| Démonstration d'UI produit | Non | Capture d'écran |
| Vidéo créative/artistique | Non | Génération IA |

---

## Outils d'édition et de repurposing

Transformez du contenu existant en plusieurs formats vidéo.

| Outil | Ce qu'il fait | Idéal pour |
|------|-------------|----------|
| **Descript** | Montage par transcription — éditez la vidéo en éditant le texte | Nettoyage d'interviews, podcasts, webinaires |
| **Opus Clip** | Découpe automatique des vidéos longues, score le potentiel viral | Format long → format court à l'échelle |
| **CapCut** | Effets visuels, captions, stylisation native des plateformes | Finition TikTok/Reels |
| **Captions.ai** | Sous-titres automatiques, correction du regard caméra, doublage IA | Contenu face caméra en solo |

### Workflow de repurposing

```
Contenu long (podcast, webinaire, démo)
    ↓
Descript : nettoyer, retirer les tics, polir
    ↓
Opus Clip : extraire automatiquement les 5-10 meilleurs moments
    ↓
CapCut : ajouter captions, effets, stylisation par plateforme
    ↓
Distribuer : TikTok, Reels, Shorts, LinkedIn
```

### Reverse-engineer un montage viral

Pour répliquer le *style* d'un montage que vous admirez — rythme des cuts, traitement des captions, punch-ins, texte à l'écran, design sonore — décomposez-le en une **spécification de montage** réutilisable (une fiche de beats) et appliquez-la à votre propre footage. Récupérez la référence avec **watch-video** (le mode visuel/multimodal extrait des frames aux points de coupe) ou **social-fetch**, extrayez l'anatomie du montage beat par beat, et produisez un tableau par beat plus les 3 à 5 gestes signatures qui rendent le montage reconnaissable. Relisez la fiche de beats une fois avant de l'exécuter (dans Remotion/Hyperframes, CapCut ou un outil de restylage IA). On copie la grammaire du montage, jamais le footage/script/musique de la référence. Méthode complète : [references/edit-anatomy.md](references/edit-anatomy.md).

---

## Workflows de production vidéo

### Vidéo de démo produit

1. **Scriptez** les fonctionnalités clés et les propositions de valeur (avec le skill copywriting)
2. **Enregistrez l'écran** du parcours produit
3. **Calques programmatiques** — utilisez Hyperframes/Remotion pour les titres, callouts et transitions
4. **B-roll IA** — générez les plans d'établissement ou scènes lifestyle avec Veo/Runway
5. **Voix off** — enregistrez-vous ou utilisez un avatar IA pour la narration
6. **Exportez** aux specs de la plateforme visée

### Vidéo explainer

1. **Scriptez** l'arc problème → solution → CTA
2. **Choisissez le présentateur** — avatar IA (HeyGen) ou voix off + visuels
3. **Construisez les visuels** — slides programmatiques, captures d'écran, scènes générées par IA
4. **Ajoutez les sous-titres** — toujours, pour l'accessibilité et l'engagement
5. **Exportez** — paysage pour YouTube/site web, vertical pour le social

### Clips sociaux en batch

1. **Créez le template maître** dans Hyperframes/Remotion
2. **Alimentez en données** — fonctionnalités produit, témoignages, statistiques
3. **Rendez en batch** — un template, plein de variantes
4. **Ajoutez les captions par plateforme** via CapCut ou Captions.ai
5. **Planifiez** sur les plateformes

---

## Pipeline vidéo natif agent

La configuration la plus puissante combine des outils que les agents pilotent directement :

```
L'agent écrit le script (à partir du contexte produit)
    ↓
Hyperframes : génère la vidéo templatisée (HTML → MP4)
    et/ou
HeyGen MCP : génère la vidéo d'avatar depuis le script
    et/ou
API Veo/Runway : génère le footage B-roll
    ↓
L'agent assemble le montage final
    ↓
Sortie : vidéo prête à publier
```

**Ce qui rend ce pipeline natif agent :**
- Hyperframes utilise du HTML — n'importe quel agent de codage peut en générer
- Serveur MCP HeyGen — les agents l'appellent directement
- API des modèles vidéo — de simples requêtes HTTP
- Aucune étape de montage manuel requise

---

## Erreurs courantes

1. **Commencer par les outils, pas la stratégie** — décidez de la vidéo nécessaire avant de choisir les outils
2. **Texte généré par IA dans la vidéo** — les modèles ne produisent pas de texte fiable ; utilisez des calques programmatiques
3. **Avatars dans la vallée de l'étrange** — si la qualité de l'avatar compte, investissez dans le palier HeyGen Creator+
4. **Pas de sous-titres** — 85 % des vidéos sociales se regardent sans son
5. **Mauvais ratio d'aspect** — 9:16 pour le social, 16:9 pour YouTube/site web, 1:1 pour les feeds
6. **Surproduction** — l'authentique surpasse souvent le léché, surtout sur TikTok

---

## Questions spécifiques à la tâche

1. Quel type de vidéo vous faut-il ? (Démo, explainer, clip social, publicité, tutoriel)
2. Faut-il un présentateur humain ou une voix off / du texte suffisent-ils ?
3. Est-ce une vidéo unique ou un template réutilisable ?
4. Pour quelle plateforme ? (Cela détermine le ratio et la durée)
5. Avez-vous des assets existants ? (Captures, footage, scripts)
6. Quel est votre budget pour les outils vidéo ?

---

## Intégrations d'outils

| Outil | Type | MCP | Guide |
|------|------|:---:|-------|
| **HeyGen** | Avatars IA | Oui | [heygen.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/heygen.md) |
| **Hyperframes** | Vidéo programmatique | - | [hyperframes.md](https://github.com/mbzadev/skills/blob/main/tools/integrations/hyperframes.md) |
| **Remotion** | Vidéo programmatique | - | [remotion.dev](https://www.remotion.dev/docs) |
| **Runway** | Génération IA | - | [runwayml.com/docs](https://docs.dev.runwayml.com) |

---

## Skills liés

- `social` : pour la stratégie de contenu vidéo, les hooks et le choix de quoi publier
- `ad-creative` : pour les créas vidéo publicitaires payantes et leur itération
- `copywriting` : pour les scripts vidéo et le messaging
- `marketing-psychology` : pour les hooks et la persuasion en vidéo
