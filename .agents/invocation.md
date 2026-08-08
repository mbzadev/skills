# Invocation par le modèle ou par l’utilisateur

Chaque `SKILL.md` du dépôt définit un skill Codex. L’axe principal est la personne ou le modèle autorisé à l’invoquer.

- **Invoqué par l’utilisateur** — accessible uniquement lorsque l’utilisateur le choisit explicitement. Le fichier `agents/openai.yaml` voisin contient `policy.allow_implicit_invocation: false`. La description s’adresse à une personne qui parcourt le sélecteur de skills.
- **Invoqué par le modèle** — accessible au modèle ou à l’utilisateur. Le bloc `policy` est omis dans `agents/openai.yaml`. La description indique clairement les situations qui doivent déclencher le skill.

Une skill invoquée par l’utilisateur peut demander l’utilisation d’une skill invocable par le modèle. Elle ne doit pas contourner la politique d’une autre skill réservée à l’utilisateur.

Chaque skill possède un fichier `agents/openai.yaml` à côté de son `SKILL.md`. Il fournit `interface.display_name`, `interface.short_description` et, le cas échéant, `policy.allow_implicit_invocation: false`.

Les `README.md` des catégories promues et le `README.md` racine regroupent les entrées sous **Invoqués par l’utilisateur** et **Invocables par le modèle**.

## Dépendances entre skills

Exprimez les dépendances dans la prose sous la forme `$nom-du-skill` ou `/nom-du-skill`, sans créer de références profondes vers les fichiers internes d’un autre skill. Les documents partagés restent dans le skill qui en est propriétaire.

## Travail de domaine passif ou actif

La simple lecture de `CONTEXT.md` pour son vocabulaire ne constitue pas une invocation de `domain-modeling`. Utilisez `domain-modeling` uniquement pour construire ou affiner activement le modèle : remettre les termes en question, tester des scénarios limites, rédiger des ADR ou mettre à jour `CONTEXT.md`.
