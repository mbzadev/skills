# Limiter les intégrations de suivi aux outils grand public

Dans `setup-mabza-skills`, seuls les outils de suivi **grand public** bénéficient d’une prise en charge de premier ordre. L’ajout d’outils de niche, récents ou expérimentaux proposés par un seul éditeur reste hors périmètre.

## Pourquoi cela est hors de portée

Chaque connecteur de suivi impose aux skills une interface en ligne de commande précise — commandes, options et analyse de la sortie. Tout nouveau connecteur crée une charge de maintenance permanente : il doit suivre l’évolution de l’outil et rester testé avec `/to-spec`, `/to-tickets`, `/triage` et les autres skills. Ce coût ne se justifie que pour les outils utilisés par une part significative des utilisateurs.

« Grand public » est un jugement, pas une barre numérique :

- GitHub, GitLab et Backlog.md sont le genre d'outils que nous considérerions comme grand public — largement connus, très utilisés et bien au-delà de la phase expérimentale.
- Un nouvel outil axé sur les agents avec quelques centaines d'étoiles GitHub ne l'est pas, peu importe l'intérêt de sa conception.

Le nombre d'étoiles, l'âge et les comptes de téléchargement sont des signaux utiles pour prendre cette décision, mais aucun n'est une règle. La règle est : un ingénieur typique reconnaîtrait-il cet outil et l'aurait-il plausiblement choisi pour son équipe ?

Les solutions de contournement pour les outils non grand public existent déjà :

- `local markdown`, pour un suivi léger directement dans le dépôt ;
- `other/custom`, pour les utilisateurs qui souhaitent configurer eux-mêmes la connexion.

Aucune de ces options ne nécessite que les skills principales connaissent l'outil spécifique.

## Demandes antérieures

- #99 — « Ajouter dex comme outil de suivi » — dex avait environ trois mois et 300 étoiles au moment de la demande.
