#!/usr/bin/env bash
# Boucle de reproduction avec intervention humaine.
# Copiez ce fichier, modifiez les étapes ci-dessous, puis exécutez-le.
# L’agent exécute le script ; l’utilisateur suit les invites dans son terminal.
#
# Utilisation :
#   bash hitl-loop.template.sh
#
# Deux fonctions auxiliaires :
#   step "<instruction>"          → affiche l’instruction et attend Entrée
#   capture VAR "<question>"      → affiche la question et stocke la réponse dans VAR
#
# À la fin, les valeurs recueillies sont affichées sous la forme CLÉ=VALEUR
# afin que l’agent puisse les analyser.
#
# `capture` réaffiche sa valeur dans le terminal, où l’agent la lit. Utilisez
# donc cette fonction pour les observations et confiez la connexion à
# l’utilisateur au moyen d’une `step`.

set -euo pipefail

step() {
  printf '\n>>> %s\n' "$1"
  read -r -p "    [Appuyez sur Entrée lorsque vous avez terminé] " _
}

capture() {
  local var="$1" question="$2" answer
  printf '\n>>> %s\n' "$question"
  read -r -p "    > " answer
  printf -v "$var" '%s' "$answer"
}

# --- modifiez la section ci-dessous -------------------------------------

step "Ouvrez l’application à l’adresse http://localhost:3000 et connectez-vous."

capture ERRORED "Cliquez sur le bouton « Export ». Une erreur s’est-elle produite ? (o/n)"

capture ERROR_MSG "Collez le message d’erreur (ou saisissez « aucune ») :"

# --- modifiez la section ci-dessus --------------------------------------

printf '\n--- Valeurs recueillies ---\n'
printf 'ERRORED=%s\n' "$ERRORED"
printf 'ERROR_MSG=%s\n' "$ERROR_MSG"
