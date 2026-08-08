# Mécanique des skills

La branche spécifique aux compétences de [`writing-for-agents`](SKILL.md) : ce qui change lorsque le document est une compétence : la matière frontale, le choix d'invocation et les compétences de routeur. Tout le reste concernant son écriture est la référence universelle dans `SKILL.md`.

## Invocation

Deux choix, en échangeant les deux charges :

- Un skill **invoqué par le modèle** conserve une `description` précise afin que Codex puisse le déclencher de manière autonome et que d’autres skills puissent l’atteindre. L’utilisateur peut toujours l’appeler explicitement. La description est son pointeur de contexte de premier niveau : elle doit donc porter les branches de déclenchement utiles sans charger tout le corps du skill.
- Un skill **invoqué par l’utilisateur** reste accessible sur demande explicite, mais Codex ne doit pas le déclencher seul. Mécanique : définissez `policy.allow_implicit_invocation: false` dans `agents/openai.yaml`. Sa `description` s’adresse alors principalement à l’humain et résume son usage en une ligne.

Choisissez l'invocation de modèle uniquement lorsque l'agent doit atteindre la compétence par lui-même, ou lorsqu'une autre compétence doit le faire. S'il ne se déclenche qu'à la main, faites-le invoqué par l'utilisateur et ne payez aucune charge de contexte.

La référence partagée dont deux compétences invoquées par l'utilisateur ont besoin ne peut vivre dans aucune des deux - sans description, aucune ne peut déclencher l'autre. Transférez-le dans un fichier simple en dehors du système de compétences : référence externe vers laquelle n'importe quelle compétence peut pointer.

## Fractionnement selon le mode d’invocation

La coupure d'invocation du fractionnement (la coupure de séquence réside dans `SKILL.md`) : divisez une compétence invoquée par le modèle lorsque vous avez un mot principal distinct qui devrait la déclencher tout seul - un mot déclencheur que vous utilisez réellement dans vos invites - ou qu'une autre compétence doit l'atteindre. Vous payez la charge de contexte pour la nouvelle description toujours chargée, de sorte que la portée indépendante en vaut la peine.

## Compétences du routeur

Lorsque les compétences invoquées par l'utilisateur se multiplient au-delà de ce dont vous pouvez vous souvenir, cette charge cognitive accumulée est guérie par une **compétence de routeur** : une compétence invoquée par l'utilisateur qui nomme les autres et quand les atteindre, de sorte que l'humain a une compétence à retenir au lieu de plusieurs. Il ne peut que les indiquer, jamais les déclencher : les compétences invoquées par l'utilisateur n'ont pas de description, donc seul l'humain peut les atteindre.
