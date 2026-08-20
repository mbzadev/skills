## Ce qu’il fait

`copy-editing` relit et améliore un copy marketing qui existe déjà : il le fait progresser par sept passes d’édition successives — clarté, voix et ton, « so what ? », preuve, spécificité, émotion, risque zéro — puis le soumet à un panel d’experts notés.

Sa contrainte définissante : il ne réécrit pas, il sublime. Le message central et la voix de l’auteur sont préservés, chaque modification porte une raison, et après chaque passe on revérifie les passes précédentes pour qu’une correction n’en crée pas une autre. Le résultat reste la propriété de l’auteur : le skill recommande, l’auteur tranche.

## Quand l’utiliser

Appelez `/copy-editing`, ou laissez Codex le sélectionner lorsqu’une tâche correspond.

Utilisez ce skill lorsque du copy existe déjà et doit être amélioré, resserré ou rafraîchi : « relis ça », « trop verbeux », « ça sonne bizarre », « ce contenu est daté », audit de contenu. Pour écrire un texte neuf depuis une page blanche, utilisez plutôt [copywriting](https://aihero.dev/skills-copywriting) — et enchaînez `copy-editing` juste après son premier jet.

## Prérequis

Aucun obligatoire. Si le projet contient un fichier `.agents/product-marketing.md`, le skill le lit avant d’éditer et calibre ses corrections sur la voix de marque et le langage client qui y sont décrits.

## Les sept passes

Chaque passe ne regarde qu’une dimension, dans cet ordre :

1. **Clarté** — le lecteur comprend-il chaque phrase ?
2. **Voix et ton** — la sonorité est-elle cohérente d’un bout à l’autre ?
3. **« So what ? »** — chaque affirmation répond-elle à « pourquoi devrais-je m’y intéresser ? »
4. **Prouvez-le** — chaque affirmation est-elle étayée (témoignages, chiffres, cas) ?
5. **Spécificité** — le concret remplace-t-il le vague (« 2 847 équipes » plutôt que « de nombreux clients ») ?
6. **Émotion amplifiée** — le texte fait-il ressentir la douleur et le soulagement ?
7. **Risque zéro** — toute barrière à l’action près du CTA est-elle levée ?

La boucle de retour est le cœur du cadre : terminer la passe 5 ramène à Prouvez-le, puis « So what ? », voix, clarté.

## Le panel d’experts

Pour le copy à fort enjeu — lancement, pages tarifs, landing pages à fort trafic — le skill constitue 3 à 5 personas (copywriter conversion, rédacteur UX, client cible, analyste anti-spam selon le support) qui notent le texte de 1 à 10. On révise d’abord les zones les moins bien notées, puis on renote, jusqu’à ce que chaque persona dépasse 7 avec une moyenne panel supérieure à 8.

## Questions fréquentes

**Faut-il dérouler les sept passes à chaque fois ?**

Non. Le processus complet vaut pour le copy à fort enjeu. Pour une relecture rapide, le skill dispose de contrôles allégés aux niveaux du mot, de la phrase et du paragraphe — mots à couper, phrases de plus de 25 mots, paragraphes trop denses.

**Quelle différence avec `copywriting` ?**

`copywriting` écrit du neuf, `copy-editing` améliore de l’existant — sans le réécrire. La séquence naturelle est le premier jet avec [copywriting](https://aihero.dev/skills-copywriting), puis la relecture avec `copy-editing`.

**Peut-il rafraîchir une vieille page plutôt que de la retoucher mot à mot ?**

Oui : le skill embarque un cadre de rafraîchissement de contenu (checklist, matrice « rafraîchir ou réécrire », guide de cadence) pour les pages dont les statistiques ont vieilli, les exemples daté ou la voix de marque a dérivé.

## Indicateurs de réussite

- Chaque correction s’accompagne de sa raison ; les constats arrivent avec des réécritures proposées, pas seuls.
- Les affirmations non prouvées sont signalées (« leader du marché » selon qui ?) avec une preuve ou un adoucissement proposé.
- Les formulations vagues laissent place à des chiffres, des délais ou des exemples.
- La voix de l’auteur survit à l’édition : le message central n’est pas reformulé de fond en comble.
- Après chaque passe, les passes précédentes sont revérifiées.

## Où il s’inscrit

`copy-editing` est l’étape de relecture qui suit la rédaction dans la chaîne marketing : [copywriting](https://aihero.dev/skills-copywriting) produit, `copy-editing` polit. Il s’appuie sur le contexte product-marketing du projet pour la voix, et déborde vers [cro](https://aihero.dev/skills-cro) quand c’est la structure de la page — pas le texte — qui limite la conversion, et vers [ab-testing](https://aihero.dev/skills-ab-testing) pour départager les variantes. En cas de doute sur le skill à employer, [ask-mabza](https://aihero.dev/skills-ask-mabza) oriente.
