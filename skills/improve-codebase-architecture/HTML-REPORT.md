# Format de rapport HTML

L'examen architectural est rendu sous la forme d'un seul fichier HTML autonome dans le répertoire temporaire du système d'exploitation. Tailwind et Mermaid proviennent tous deux de CDN. Mermaid gère les diagrammes sous forme de graphique de manière fiable ; Les divs construits à la main et le SVG en ligne gèrent les visuels les plus éditoriaux (diagrammes de masse, coupes transversales). Mélangez les deux – ne comptez pas sur Mermaid pour tout, cela commencera à paraître générique.

## Échafaudage

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Architecture review — {{repo name}}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="module">
      import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
      mermaid.initialize({ startOnLoad: true, theme: "neutral", securityLevel: "loose" });
    </script>
    <style>
      /* petite couche personnalisée pour ce que Tailwind ne couvre pas proprement :
         lignes de couture en pointillés, pointes de flèches au rendu dessiné à la main, etc. */
      .seam { stroke-dasharray: 4 4; }
      .leak { stroke: #dc2626; }
      .deep { background: linear-gradient(135deg, #0f172a, #1e293b); }
    </style>
  </head>
  <body class="bg-stone-50 text-slate-900 font-sans">
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <header>...</header>
      <section id="candidates" class="space-y-10">...</section>
      <section id="top-recommendation">...</section>
    </main>
  </body>
</html>
```

## En-tête

Nom du dépôt, date et légende compacte : boîte pleine = module, ligne pointillée = couture, flèche rouge = fuite, boîte sombre épaisse = module profond. Pas de paragraphe d'introduction - directement dans les candidats.

## Carte de candidat

Les diagrammes portent le poids. La prose est clairsemée, simple et utilise les termes du glossaire (de la compétence `/codebase-design` ) sans cérémonie.

Chaque candidat est un `<article>` :

- **Titre** — court, nomme l'approfondissement (par exemple « Réduire le pipeline de prise de commandes »).
- **Ligne de badge** — force de la recommandation (`Forte` = émeraude, `À explorer` = ambre, `Spéculative` = ardoise), accompagnée de la catégorie de dépendance (`dans le processus`, `substituable localement`, `ports et adaptateurs`, `simulée`).
- **Fichiers** — liste à espacement fixe, `font-mono text-sm`.
- **Schéma Avant/Après** — la pièce maîtresse. Deux colonnes côte à côte. Voir les modèles ci-dessous.
- **Problème** — une phrase. Ce qui fait mal.
- **Solution** — une phrase. Que de changements.
- **Gains** — puces de six mots au maximum, par exemple « Les tests atteignent une interface », « La logique tarifaire ne fuit plus » ou « Supprimer quatre enveloppes superficielles ».
- **Légende ADR** (le cas échéant) — une ligne dans une boîte teintée ambre.

Aucun paragraphe d'explication. Si le diagramme nécessite un paragraphe pour être compris, redessinez le diagramme.

## Modèles de diagramme

Choisissez le modèle qui correspond au candidat. Mélangez-les. Ne faites pas en sorte que tous les diagrammes se ressemblent – ​​la variété fait partie du problème.

### Diagramme Mermaid — idéal pour les dépendances et les flux d’appels

Utilisez une sirène `flowchart` ou `graph` lorsque le point est "X appelle Y appelle Z et regarde le désordre." Enveloppez-le dans une carte de style Tailwind pour qu'il ne se sente pas parachuté. Stylez avec classDef pour colorer les bords de fuite en rouge et le module profond en noir. Les diagrammes de séquence fonctionnent bien pour « avant : 6 allers-retours ; après : 1 ».

```html
<div class="rounded-lg border border-slate-200 bg-white p-4">
  <pre class="mermaid">
    flowchart LR
      A[OrderHandler] --> B[OrderValidator]
      B --> C[OrderRepo]
      C -.leak.-> D[PricingClient]
      classDef leak stroke:#dc2626,stroke-width:2px;
      class C,D leak
  </pre>
</div>
```

### Boîtes et flèches construites à la main (quand la disposition de Mermaid vous combat)

Modules comme `<div>`s avec bordures et étiquettes. Flèches sous forme d'éléments SVG `<line>` ou `<path>`  en ligne positionnés de manière absolue sur un conteneur relatif. Atteignez-le lorsque vous souhaitez que le diagramme "après" ressemble à un module profond à bordure épaisse avec des éléments internes grisés - Mermaid ne le rendra pas avec le bon poids.

### Coupe transversale (idéale pour les couches superficielles)

Empilez des bandes horizontales (`h-12 border-l-4`) pour afficher les couches traversées par un appel. Avant : 6 fines couches chacune ne faisant rien. Après : 1 bande épaisse étiquetée à la responsabilité consolidée.

### Diagramme de masse (bon pour "une interface aussi large que l'implémentation")

Deux rectangles par module : un pour la surface de l'interface, un pour la mise en œuvre. Avant : le rectangle d'interface est presque aussi grand que le rectangle d'implémentation (peu profond). Après : le rectangle d'interface est court, le rectangle d'implémentation est grand (profond).

### Réduction du graphique d'appel

Avant : une arborescence d’appels de fonctions rendus sous forme de boîtes imbriquées. Après : la même arborescence s'est réduite en une seule boîte, avec les appels désormais internes affichés disparus à l'intérieur.

## Conseils de style

- Édition allégée, pas de tableau de bord d'entreprise. Espace blanc généreux. Serif facultatif pour les titres (`font-serif` fonctionne bien avec la pierre/l'ardoise).
- Couleur avec parcimonie : un accent (émeraude ou indigo) plus rouge pour les fuites et ambre pour les avertissements.
-  Gardez les diagrammes d'une hauteur d'environ 320 px afin que l'avant/après soit confortablement placé côte à côte sans faire défiler.
- Utilisez `text-xs uppercase tracking-wider` pour les étiquettes de module à l'intérieur des diagrammes — elles doivent se lire comme un schéma, pas comme une interface utilisateur.
- Les seuls scripts sont le Tailwind CDN et l'importation Mermaid ESM. Le rapport est par ailleurs statique : pas de code d'application, pas d'interactivité au-delà du rendu de Mermaid.

## Section supérieure des recommandations

Une carte plus grande. Nom du candidat, une phrase expliquant pourquoi, lien d'ancrage vers sa carte. C'est ça.

## Tonalité

Français clair et concis, avec les noms et verbes architecturaux définis par le skill `/codebase-design`. La concision ne justifie pas de s’écarter de ce vocabulaire.

**Utiliser exactement :** module, interface, implémentation, profondeur, profond, peu profond, couture, adaptateur, effet de levier, localité.

**Ne jamais substituer :** composant, service ou unité à « module » ; API ou signature à « interface » ; limite à « couture » ; couche ou enveloppe à « module » lorsque c’est bien d’un module qu’il s’agit.

**Phrases adaptées au style :**

- "Le module de prise de commandes est peu profond — l'interface correspond presque à l'implémentation."
- "Le prix fuit à travers la couture."
- "Approfondir : une interface, un endroit pour tester."
- "Deux adaptateurs justifient la couture : HTTP en prod, in-memory en tests."

**Les puces de gains** expriment chaque avantage avec le vocabulaire du glossaire : _« localité : les bugs se concentrent dans un module »_, _« effet de levier : une interface, N sites d’appel »_, _« l’interface rétrécit ; l’implémentation absorbe les enveloppes »_. N’écrivez pas _« plus facile à maintenir »_ ou _« code plus propre »_ : ces formulations n’appartiennent pas au glossaire.

Pas de couverture, pas de raclement de gorge, pas de « ça vaut le coup de noter que… ». Si une phrase peut être une puce, faites-en une puce. Si une balle peut être coupée, coupez-la. Si un terme ne figure pas dans le glossaire `/codebase-design` , recherchez-en un avant d'en inventer un nouveau.
