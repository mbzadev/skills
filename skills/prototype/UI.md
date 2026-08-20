# Prototype d'interface utilisateur

Générez **plusieurs variantes d'interface utilisateur radicalement différentes** sur un seul itinéraire, commutables à partir d'une barre inférieure flottante. L'utilisateur bascule entre les variantes dans le navigateur, en choisit une (ou vole des morceaux de chacune), puis jette le reste.

Si la question porte sur la logique/l'état plutôt que sur l'apparence de quelque chose, mauvaise branche. Utilisez [LOGIC.md](LOGIC.md).

## Quand c'est la bonne forme

- "À quoi devrait ressembler cette page ?"
- "Je souhaite voir quelques options pour ce tableau de bord avant de m'engager."
- "Essayez une disposition différente pour l'écran des paramètres."
- À chaque fois que l'utilisateur passerait autrement une journée à choisir entre trois vagues maquettes dans sa tête.

## Deux formes — privilégier nettement la forme A

Un prototype d’interface est plus facile à évaluer lorsqu’il s’intègre au reste de l’application : véritable en-tête, vraie barre latérale, données réelles et densité réaliste. Une page isolée donne au contraire l’impression que chaque variante fonctionne. Utilisez donc la forme A dès qu’une page existante peut accueillir les variantes. Ne choisissez la forme B que si le prototype n’a réellement aucun emplacement naturel dans l’application.

### Forme A — intégration à une page existante, à privilégier

L'itinéraire existe déjà. Les variantes sont rendues **sur le même itinéraire**, contrôlées par un paramètre de recherche  `?variant=` URL. La récupération des données, les paramètres et l'authentification existants restent tous - seuls les échanges de rendu. C'est la valeur par défaut ; choisissez-le à moins qu'il n'y ait une raison spécifique de ne pas le faire.

Si le prototype concerne quelque chose qui n'a pas encore de page mais qui *vivrait naturellement à l'intérieur d'une page* (une nouvelle section du tableau de bord, une nouvelle carte sur l'écran des paramètres, une nouvelle étape dans un flux existant) — c'est toujours la sous-forme A. Montez les variantes à l'intérieur de la page hôte.

### Forme B — nouvelle page, en dernier recours

Utilisez-le uniquement lorsque l'objet en cours de prototypage n'a véritablement aucune page existante dans laquelle vivre - par exemple. une surface de niveau supérieur entièrement nouvelle ou un flux qui ne peut être intégré nulle part de manière raisonnable.

Créez une **route jetable** en suivant la convention de routage déjà utilisée par le projet — n'inventez pas une nouvelle structure de niveau supérieur. Nommez-le pour qu'il s'agisse évidemment d'un prototype (par exemple, incluez le mot `prototype` dans le chemin ou le nom du fichier). Même modèle `?variant=` .

Avant de vous engager dans la sous-forme B, vérifiez la cohérence : n'y a-t-il vraiment aucune page existante dans laquelle elle pourrait être intégrée ? Une route vide cache des problèmes de conception qu’une route peuplée exposerait.

Dans les deux sous-formes, la barre inférieure flottante est identique.

## Processus

### 1. Énoncez la question et choisissez N

Par défaut, **3 variantes**. Plus de 5 cesse d’être radicalement différent et commence à être du bruit – plafond là.

Notez le plan sur une seule ligne, à l'emplacement du prototype ou dans un commentaire en haut du dossier :

> "Trois variantes de la page de paramètres, commutables via `?variant=`, sur l'itinéraire `/settings` existant."

Cela fonctionne que l'utilisateur soit là pour repousser ou non.

### 2. Générer des variantes radicalement différentes

Rédigez chaque variante. Tenez chacun pour :

- L'objet de la page et les données auxquelles elle a accès.
- La bibliothèque de composants/système de style du projet (TailwindCSS, shadcn, MUI, plain CSS, peu importe).
- Un nom de composant exporté clair, par exemple `VariantA`, `VariantB`, `VariantC`.

Les variantes doivent être **structurellement différentes** : disposition différente, hiérarchie d'informations différente, moyens primaires différents, pas seulement des couleurs différentes. Trois grilles de cartes légèrement modifiées ne sont pas un prototype d'interface utilisateur, c'est un fond d'écran. Si deux brouillons s'avèrent trop similaires, refaites-en un en indiquant explicitement « ne pas utiliser de grille de cartes ».

### 3. Câblez-les ensemble

Créez un seul composant de commutation sur l'itinéraire :

```tsx
// pseudo-code — à adapter au framework du projet
const variant = searchParams.get('variant') ?? 'A';
return (
  <>
    {variant === 'A' && <VariantA {...data} />}
    {variant === 'B' && <VariantB {...data} />}
    {variant === 'C' && <VariantC {...data} />}
    <PrototypeSwitcher variants={['A','B','C']} current={variant} />
  </>
);
```

Pour la sous-forme A (page existante) : conservez toutes les données existantes récupérées au-dessus du sélecteur ; seul le sous-arbre rendu change par variante.

Pour la sous-forme B (nouvelle page) : la route jetable sous `/prototype/<name>` monte le même mélangeur.

### 4. Construire le sélecteur flottant

Ajoutez une petite barre fixe, centrée en bas de l’écran, avec trois éléments :

- **Flèche gauche** — revient à la variante précédente (boucle).
- **Étiquette de variante** — affiche la clé de variante actuelle et, si la variante exporte un nom, ce nom également. par exemple `B — Sidebar layout`.
- **Flèche droite** — avance en boucle (se retourne).

Comportement :

- Cliquer sur une flèche met à jour le paramètre de recherche d'URL (utilisez le routeur du framework — `router.replace` sur Next, `navigate` sur React Router, etc.) afin que la variante soit partageable et rechargeable.
- Clavier : `←` et `→` les touches fléchées font également un cycle. N'interceptez pas les touches fléchées lorsqu'un `<input>`, `<textarea>` ou `[contenteditable]`  est ciblé.
-  Visuellement distinct de la page (par exemple, pilule à contraste élevé, ombre subtile), il ne fait donc évidemment pas partie du design en cours d'évaluation.
- Caché dans les versions de production — activez la barre uniquement lorsque `process.env.NODE_ENV !== 'production'`, ou au moyen d’une vérification équivalente, afin qu’une fusion accidentelle ne l’affiche jamais aux utilisateurs.

Placez le sélecteur dans un seul composant partagé afin que les deux sous-formes puissent le réutiliser. Localisez-le partout où l’interface utilisateur partagée se trouve dans le projet.

### 5. Remettez-le

Faites apparaître l'URL (et les touches `?variant=` ). L'utilisateur le feuilletera dès qu'il y parviendra. Les commentaires intéressants sont généralement **"Je veux l'en-tête de B avec la barre latérale de C"** — c'est le design réel qu'ils souhaitent.

### 6. Capturez la réponse et nettoyez

Une fois qu'une variante a gagné, capturez la réponse - quelle variante et pourquoi - puis capturez le prototype comme le décrit [SKILL](SKILL.md). Pliez le gagnant dans le vrai code et déplacez le reste sur la branche jetable, pas dans la branche principale :

- **Sous-forme A** — insérez le gagnant dans la page existante ; supprimez les variantes perdantes et le commutateur du principal.
- **Sous-forme B** — promeut la variante gagnante vers un itinéraire réel ; supprimez la route jetable et le commutateur du principal.

L’ensemble des variantes constitue la trace de référence : conservez-le dans la branche temporaire, jamais dans la branche principale. Des composants de variantes et un sélecteur laissés dans le code principal vieillissent rapidement et induisent les prochains lecteurs en erreur.

## Anti-motifs

- **Variantes qui diffèrent uniquement par la couleur ou la copie.** Il s'agit d'une modification, pas d'un prototype. Les variantes réelles ne sont pas d'accord sur la structure.
- **Partager trop de code entre les variantes.** Un `<Header>`  partagé convient ; un `<Layout>`  partagé va à l'encontre du point. Chaque variante doit être libre de supprimer la mise en page.
- **Relier les variantes à de vraies mutations.** Les prototypes en lecture seule conviennent. Si une variante doit modifier des données, dirigez-la vers une simulation : la question est « à quoi cela devrait-il ressembler ? », pas « le service fonctionne-t-il ? ».
- **Promotion du prototype directement en production.** Le code de la variante a été écrit sous les contraintes du prototype (pas de tests, gestion des erreurs minimale). Réécrivez-le correctement lorsque vous le pliez.
