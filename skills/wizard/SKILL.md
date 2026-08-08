---
name: wizard
description: "Générez un assistant bash interactif qui guide un humain à travers les étapes que lui seul peut effectuer. À utiliser lors du provisionnement de l'infrastructure, de la configuration des informations d'identification ou des secrets CI, de l'exploration d'un tableau de bord tiers inconnu ou de l'exécution d'une migration ou d'un basculement ponctuel. N'invoquez pas cette option pour les étapes que l'agent peut effectuer lui-même."
---

# Assistant

Un **assistant** est un script bash qui guide un humain, étape par étape, à travers une procédure manuelle fastidieuse à exécuter à la main et fastidieuse à réexpliquer à une IA à chaque fois. Il ouvre chaque URL, indique exactement sur quoi cliquer et copier, capture les valeurs, les écrit à leur place (`.env`, secrets GitHub), confirme à chaque étape et montre combien d'étapes il reste. Il peut configurer des services tiers, exécuter une migration ponctuelle ou déplacer le projet d'un état à un autre.

[template.sh](template.sh) fournit déjà une expérience utilisateur soignée : progression étape par étape, confirmations, ouverture d’URL multiplateforme — y compris sous WSL —, saisie masquée des secrets, mise à jour idempotente de `.env`, écriture via `gh secret` et `gh variable`, puis résumé final. **Votre travail consiste uniquement à définir le périmètre de la procédure et à créer ses étapes.** La bibliothèque placée au-dessus du marqueur `STAGES` est identique dans chaque assistant ; cette cohérence est essentielle, ne la modifiez jamais manuellement.

Un assistant est éphémère par défaut : construit pour une seule exécution, enregistré dans un chemin de travail ou `scripts/` , supprimé une fois le travail terminé. Validez-le uniquement lorsque l'utilisateur souhaite un chemin de configuration reproductible qui doit résider dans le dépôt.

## Processus

### 1. Portée de la procédure

Déterminez chaque étape manuelle que l'humain doit suivre et chaque valeur qui est capturée en cours de route. Lisez d'abord le dépôt - ne demandez pas froidement :

- Pour la configuration : `.env`, `.env.example`, `.env.*`, `README`, `docker-compose*`, configuration du framework, et `.github/workflows/*` (chaque `secrets.*` / `vars.*` référence est une valeur que l'assistant doit produire).
- Pour une migration ou une transition : l'état actuel, l'état cible et les actions irréversibles entre eux.

Montrez ensuite à l'utilisateur la liste ordonnée des étapes et les valeurs que chacune produit, et confirmez - ils peuvent ajouter, supprimer ou réorganiser.

**Fait quand :** chaque étape est nommée dans l'ordre, et pour chaque valeur capturée, vous savez (a) où l'humain l'obtient, (b) où elle est écrite (`.env`, un secret GitHub, les deux, ou nulle part - certaines étapes sont de pures actions), et (c) si c'est secret (entrée cachée) ou public.

### 2. Cartographier le parcours de chaque étape

Pour chaque étape, écrivez le chemin précis qu'un humain suit : quelle URL ouvrir, que faire là-bas, où une valeur est affichée, quelle variable elle remplit - par exemple. "Tableau de bord → Développeurs → Clés API → Révéler la clé de test → copier". Lorsque vous ne connaissez pas réellement l'interface utilisateur actuelle ou la commande exacte, dites-le et demandez à l'utilisateur ou consultez la documentation - n'inventez jamais d'étapes qui pourraient ne pas exister.

**Fait quand :** chaque étape renvoie à des instructions concrètes qu'un étranger pourrait suivre.

### 3. Créez l'assistant

Copier `template.sh` au chemin cible. Remplacez l'exemple d'étape par un `stage` par étape, par ordre de dépendance. Utilisez les assistants de la bibliothèque - `stage`, `say`/`step`, `open_url`, `ask`/`ask_secret`, `write_env`, `set_secret`/`set_var`, `pause`/`confirm` - et réglé `TOTAL_STAGES` au nombre d'étapes que vous avez écrites.

Maintenez la barre définie par le modèle : ouvrez l'URL avant de demander sa valeur, utilisez `ask_secret` pour tout ce qui est secret, `write_env` chaque valeur persistante, `set_secret` seulement les valeurs dont CI a réellement besoin, et `confirm` avant toute action irréversible. Chaque `stage` efface l'écran afin que seule l'étape en cours soit visible - gardez une étape sur une tâche ciblée afin que rien dont l'humain ait besoin ne défile. Ne touchez pas la bibliothèque au-dessus du marqueur.

### 4. Vérifier et transmettre

- Exécutez `bash -n <script>`, puis `shellcheck` s’il est disponible.
- `chmod +x <script>`.
- Ne l'exécutez pas de bout en bout vous-même : il ouvre les navigateurs et bloque les entrées humaines. Tracez-le de manière statique à la place : chaque valeur de l'étape 1 est capturée et atterrit là où l'étape 1 l'a indiqué, et chaque nom `set_secret`  correspond exactement à une référence `secrets.*`  dans CI.
- Dites à l'utilisateur comment l'exécuter. S'il s'agit d'un chemin de configuration reproductible, validez-le et liez-le à partir du README afin que la personne suivante exécute le script au lieu de demander à une IA.
