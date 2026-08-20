## Ce qu'il fait

Il crée et optimise les moments où le produit demande de payer : paywalls in-app, écrans d'upgrade, modals d'upsell et feature gates — freemium vers payant, fin d'essai, montée de palier, limite d'usage atteinte. Sa règle de timing est la contrainte définissante : l'invite n'apparaît qu'après l'aha moment, jamais avant, et le refus est respecté — continuer en gratuit doit rester facile, parce qu'un utilisateur piégé ne convertira pas plus tard.

## Quand l'utiliser

- **Mode d'invocation.** Appelez `/paywalls`, ou laissez Codex le sélectionner lorsqu'une tâche correspond.
- **Limite de déclenchement.** Utilisez ce skill pour tout moment d'upgrade *à l'intérieur* du produit, une fois la valeur vécue. La page de tarification publique relève de [cro](https://aihero.dev/skills-cro) ; les décisions de prix elles-mêmes relèvent de [pricing](https://aihero.dev/skills-pricing).

## Prérequis

Le skill s'appuie sur le contexte product-marketing du projet : s'il existe un fichier `.agents/product-marketing.md`, il est lu avant toute question, et seules les informations manquantes sont demandées. Connaître votre aha moment et votre taux actuel gratuit → payant oriente directement les recommandations de déclenchement.

## Valeur avant la demande

Tout tourne autour du moment choisi pour demander : la valeur doit être vécue, mais pas encore retombée en frustration. Quatre points de déclenchement encadrent ce timing, chacun avec son traitement :

| Déclencheur | Traitement |
|---|---|
| Feature gate | expliquer pourquoi c'est payant, montrer la fonctionnalité, laisser continuer sans |
| Limite d'usage | signaler la limite sans bloquer brutalement |
| Fin d'essai | avertissements à J-7, J-3, J-1 et récapitulatif de la valeur reçue |
| Invite temporelle | rappel discret, facile à fermer |

Chaque écran combine sept composants — headline orienté bénéfice, démonstration de valeur, comparaison de plans, tarification, preuve sociale, CTA spécifique et porte de sortie — et les dark patterns (bouton de fermeture caché, copy culpabilisante) sont explicitement bannis.

## Questions fréquentes

**Faut-il verrouiller tôt pour forcer la conversion ?**
Non : demander avant que la valeur soit délivrée est listé parmi les killers de conversion. L'upgrade doit se sentir comme la suite naturelle d'une valeur déjà éprouvée — d'où l'importance du lien avec l'onboarding pour atteindre l'aha moment d'abord.

**Que faire des utilisateurs qui refusent ?**
Les respecter : repos de plusieurs jours après un refus, limite d'apparitions par session, suivi des signaux d'agacement. La confiance préservée aujourd'hui finance la conversion de demain.

**Où s'arrête ce skill par rapport à la rétention ?**
À l'upgrade abouti. Les flux d'annulation, offres de rétention et économie du churn post-upgrade relèvent de [churn-prevention](https://aihero.dev/skills-churn-prevention).

## Indicateurs de réussite

- Chaque paywall recommandé désigne son point de déclenchement et ses sept composants, dont une porte de sortie visible.
- Le timing proposé se réfère explicitement à l'aha moment et à la valeur déjà vécue.
- Les fréquences incluent un repos en jours après refus, pas seulement une limite par session.
- Les métriques de suivi vont au-delà du taux de clic : revenu par utilisateur et churn post-upgrade.

## Où il s'inscrit

Étape de monétisation dans la chaîne `cro → signup → onboarding → paywalls` : il convertit une fois l'activation acquise, et prépare le terrain pour [churn-prevention](https://aihero.dev/skills-churn-prevention) qui protège la relation après l'upgrade. Pour s'orienter dans toute la collection, consultez [ask-mabza](https://aihero.dev/skills-ask-mabza).
