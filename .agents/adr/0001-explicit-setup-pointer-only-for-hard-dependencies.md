# Exiger `/setup-matt-pocock-skills` uniquement pour les dépendances strictes

Les compétences d'ingénierie dépendent d'une configuration par dépôt (outil de suivi des issues, vocabulaire des étiquettes de triage, disposition des documents de domaine) initialisée par `/setup-matt-pocock-skills`. Certaines compétences ne peuvent fonctionner de manière significative sans cette configuration — elles doivent publier sur un outil de suivi des issues spécifique ou appliquer une chaîne d'étiquettes spécifique. D'autres l'utilisent uniquement pour affiner la sortie (vocabulaire, prise de conscience des ADR) et se dégradent de manière élégante sans elle.

Nous avons divisé celles-ci en compétences de **dépendance stricte** et de **dépendance souple** :

- **Dépendance stricte** (`to-tickets`, `to-spec`, `triage`) — incluent une ligne explicite : _« … aurait dû vous être fourni — exécutez `/setup-matt-pocock-skills` s'il n'en est pas ainsi. »_ Sans la correspondance, la sortie est incorrecte, pas seulement imprécise.
- **Dépendance souple** (`diagnose`, `tdd`, `improve-codebase-architecture`) — font référence au « glossaire de domaine du projet » et aux « ADR dans la zone que vous touchez » uniquement dans un propos vague. Si les documents ne sont pas là, la compétence fonctionne toujours ; la sortie est simplement moins tranchante.

Cette division maintient les compétences de dépendance souple légères en termes de jetons et évite d'appliquer mécanquement sans raison le renvoi vers la configuration dans des endroits où il n'est pas porteur de charge.
