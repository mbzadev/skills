# Base de connaissances hors champ

Le répertoire `.out-of-scope/`  d'un dépôt stocke les enregistrements persistants des demandes de fonctionnalités rejetées. Il répond à deux objectifs :

1. **Mémoire institutionnelle** — pourquoi une fonctionnalité a été rejetée, afin que le raisonnement ne soit pas perdu lorsque le problème est résolu
2. **Déduplication** — lorsqu'un nouveau problème survient correspondant à un rejet antérieur, la compétence peut faire apparaître la décision précédente au lieu de la remettre en cause.

## Structure du répertoire

```
.out-of-scope/
├── dark-mode.md
├── plugin-system.md
└── graphql-api.md
```

Un fichier par **concept**, et non par problème. Plusieurs problèmes demandant la même chose sont regroupés sous un seul fichier.

## Format de fichier

Le fichier doit être écrit dans un style détendu et lisible, ressemblant davantage à un court document de conception qu'à une entrée de base de données. Utilisez des paragraphes, des exemples de code et des exemples pour rendre le raisonnement clair et utile à quelqu'un qui le rencontre pour la première fois.

```markdown
# Mode sombre

Ce projet ne prend pas en charge le mode sombre ni la personnalisation visuelle destinée aux utilisateurs.

## Pourquoi ce choix reste hors périmètre

La chaîne de rendu suppose une palette de couleurs unique définie dans
`ThemeConfig`. La prise en charge de plusieurs thèmes exigerait :

- un fournisseur de contexte de thème autour de tout l’arbre de composants ;
- une résolution des styles sensible au thème dans chaque composant ;
- une couche de persistance pour les préférences visuelles des utilisateurs.

Ce changement architectural important ne correspond pas à l’objectif du projet,
centré sur la création de contenu. La gestion des thèmes appartient aux
consommateurs en aval qui intègrent ou redistribuent le résultat.

```ts
// L'interface ThemeConfig actuelle n'est pas conçue pour le changement d'exécution :
interface ThèmeConfig {
  couleurs : Palette de couleurs ; // palette unique, résolue au moment de la construction
  polices : FontStack ;
}
```

## Demandes antérieures

- #42 — « Ajouter la prise en charge du mode sombre »
- #87 — « Thème nocturne pour l’accessibilité »
- #134 — « Option de thème sombre »
```

### Nommer le fichier

Utilisez un nom de cas de kebab court et descriptif pour le concept : `dark-mode.md`, `plugin-system.md`, `graphql-api.md`. Le nom doit être suffisamment reconnaissable pour que toute personne parcourant le répertoire comprenne ce qui a été rejeté sans ouvrir le fichier.

### Écrire la raison

La raison doit être substantielle – non pas « nous ne voulons pas de cela », mais plutôt pourquoi. Référence des bonnes raisons :

- Portée ou philosophie du projet ("Ce projet se concentre sur X ; la thématisation est une préoccupation en aval")
- Contraintes techniques ("Supporter cela nécessiterait Y, ce qui entre en conflit avec notre architecture Z")
- Décisions stratégiques ("Nous avons choisi d'utiliser A au lieu de B parce que...")

La raison doit être durable. Évitez de faire référence à des circonstances temporaires (« nous sommes trop occupés en ce moment ») – ce ne sont pas de vrais refus, ce sont des reports.

## Quand vérifier `.out-of-scope/`

Pendant le tri (étape 1 : recueillir le contexte), lisez tous les fichiers dans `.out-of-scope/`. Lors de l’évaluation d’un nouveau problème :

- Vérifier si la demande correspond à un concept hors périmètre existant
- La correspondance se fait par similarité de concept, pas par mot-clé — correspondances "thème de nuit" `dark-mode.md`
- S'il y a une correspondance, signalez-la au responsable : "C'est similaire à `.out-of-scope/dark-mode.md` — nous l'avons rejeté auparavant parce que [raison]. Ressentez-vous toujours la même chose ?"

Le responsable peut :

- **Confirmer** — le nouveau numéro est ajouté à la liste « Demandes antérieures » du fichier existant, puis fermé
- **Reconsidérer** — le fichier hors de portée est supprimé ou mis à jour, et le problème passe par un tri normal
- **Pas d'accord** — les problèmes sont liés mais distincts, procédez au triage normal

## Quand écrire à `.out-of-scope/`

Uniquement lorsqu'une **amélioration** (pas un bug) est *rejetée* en tant que `wontfix`. Cela s'applique aux PR d'amélioration exactement comme aux problèmes : un PR rejeté est enregistré ici afin que la même demande ne soit pas renvoyée sous forme de nouveau code.

N'écrivez **pas** ici lorsque quelque chose est fermé comme `wontfix` car il est **déjà implémenté**. Il s'agit d'une fonctionnalité intégrée et non rejetée ; l'enregistrer empoisonnerait les contrôles de dédoublonnage avec de faux rejets. Au lieu de cela, le commentaire final indique où se trouve déjà la fonctionnalité.

Le flux :

1. Le responsable décide qu'une demande de fonctionnalité est hors de portée
2. Vérifiez si un fichier `.out-of-scope/`  correspondant existe déjà
3. Si oui : ajouter le nouveau numéro à la liste "Demandes antérieures"
4. Si non : créer un nouveau dossier avec le nom du concept, la décision, le motif et la première demande préalable
5. Publiez un commentaire sur le problème en expliquant la décision et en mentionnant le `.out-of-scope/` fichier
6. Clôturez le problème avec le label `wontfix`.

## Mise à jour ou suppression de fichiers hors de portée

Si le responsable change d'avis sur un concept précédemment rejeté :

- Supprimer le fichier `.out-of-scope/`.
- La compétence n'a pas besoin de rouvrir d'anciens numéros : ce sont des enregistrements historiques
- Le nouveau problème qui a déclenché le réexamen se déroule selon un triage normal
