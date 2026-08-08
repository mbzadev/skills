# Productivité

Outils généraux de productivité, non spécifiques au code.

## Invoqués par l’utilisateur

Accessibles uniquement sur demande explicite. Dans Codex, cette règle est définie par `policy.allow_implicit_invocation: false` dans `agents/openai.yaml`.

- **[grill-me](../../skills/grill-me/SKILL.md)** — Soyez interrogé sans relâche sur un plan ou une conception jusqu'à ce que chaque branche de l'arbre de conception soit résolue.
- **[handoff](../../skills/handoff/SKILL.md)** — Compactez la conversation en cours dans un document de transfert afin qu'un autre agent puisse continuer le travail.
- **[teach](../../skills/teach/SKILL.md)** — Apprenez à l'utilisateur une nouvelle compétence ou un nouveau concept au cours de plusieurs sessions, en utilisant le répertoire actuel comme espace de travail d'enseignement avec état.
- **[to-questionnaire](../../skills/to-questionnaire/SKILL.md)** — Transformez une décision à laquelle vous ne pouvez pas répondre seule en un questionnaire Markdown pour la seule personne qui le peut — rempli de manière asynchrone ou ensemble lors d'une réunion.
- **[wait-what](../../skills/wait-what/SKILL.md)** — Déclenchez-le dès qu’un message n’est pas clair. L’agent le reformule en français clair, avec le contexte manquant et le vocabulaire de `CONTEXT.md`.

## Invocables par le modèle

Accessible au modèle ou à l'utilisateur (phrase de déclenchement riche pour que le modèle puisse les atteindre).

- **[grilling](../../skills/grilling/SKILL.md)** — Interrogez l'utilisateur sans relâche sur un plan, une décision ou une idée jusqu'à ce que chaque branche de l'arbre de conception soit résolue.
- **[writing-for-agents](../../skills/writing-for-agents/SKILL.md)** — Rédaction de documents pour les agents : skills, `AGENTS.md` et tout document auquel un agent accède par un pointeur.
