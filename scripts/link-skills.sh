#!/usr/bin/env bash
set -euo pipefail

# REMARQUE : ce script est réservé au développement et destiné aux mainteneurs
# de ce dépôt. Ce n’est pas un programme d’installation pris en charge. Les
# modifications apportées à ce script — ou les demandes en ce sens — ne seront
# pas approuvées.
#
# Crée des liens vers tous les skills du dépôt dans les répertoires locaux de
# skills utilisé par Codex :
#   - ~/.agents/skills
# Chaque entrée est un lien symbolique vers ce dépôt : un simple `git pull`
# suffit donc à maintenir les skills installés à jour.

REPO="$(cd "$(dirname "$0")/.." && pwd)"
DESTS=("$HOME/.agents/skills")

# Recense une seule fois les skills du dépôt, puis crée les liens dans chaque destination.
names=()
srcs=()
while IFS= read -r -d '' skill_md; do
  src="$(dirname "$skill_md")"
  names+=("$(basename "$src")")
  srcs+=("$src")
done < <(find "$REPO/skills" -name SKILL.md -not -path '*/node_modules/*' -not -path '*/deprecated/*' -print0)

for DEST in "${DESTS[@]}"; do
  # Si $DEST est un lien symbolique qui pointe vers ce dépôt, les liens de
  # chaque skill seraient écrits dans l’arborescence skills/ du dépôt lui-même.
  # Détecte ce cas et s’arrête afin de ne pas polluer la copie de travail.
  if [ -L "$DEST" ]; then
    resolved="$(readlink -f "$DEST")"
    case "$resolved" in
      "$REPO"|"$REPO"/*)
        echo "erreur : $DEST est un lien symbolique vers ce dépôt ($resolved)." >&2
        echo "Supprimez-le (rm \"$DEST\"), puis relancez le script ; il le recréera sous forme de répertoire réel." >&2
        exit 1
        ;;
    esac
  fi

  mkdir -p "$DEST"

  for i in "${!names[@]}"; do
    name="${names[$i]}"
    src="${srcs[$i]}"
    target="$DEST/$name"

    if [ -e "$target" ] && [ ! -L "$target" ]; then
      rm -rf "$target"
    fi

    ln -sfn "$src" "$target"
    echo "lien créé : $name -> $src ($DEST)"
  done
done
