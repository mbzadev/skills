---
name: to-questionnaire
description: "Transformez une décision à laquelle vous ne pouvez pas répondre entièrement en un questionnaire que quelqu'un d'autre devra remplir."
---

Transformez quelque chose auquel l'utilisateur ne peut pas répondre seul en un **questionnaire** : un document Markdown qu'il remet à une personne pour qu'il le remplisse de manière asynchrone ou qu'il le remplisse ensemble lors d'une réunion. Le destinataire détient des connaissances qui manquent à l’utilisateur ; le questionnaire le leur arrache.

**Interrogez l’envoi, pas le sujet.** Questionnez l’utilisateur uniquement sur l’_envoi_, auquel il peut toujours répondre : à qui le document s’adresse et ce qu’il doit permettre d’obtenir. Les questions ciblent ensuite l’**écart** entre ce que le destinataire sait et ce dont l’utilisateur a besoin.

1. **À qui s'adresse-t-il ?** Demandez, en un seul échange, le rôle, l'expertise et la relation du destinataire avec l'utilisateur. Cela fixe le ton du questionnaire et la quantité de contexte qu'il doit contenir. Effectué lorsque vous savez qui est le destinataire et ce qu'il sait, ce que l'utilisateur ne sait pas.

2. **De quoi avez-vous besoin en retour ?** Demandez, en un seul échange, les décisions ou les faits spécifiques que l'utilisateur ne peut pas résoudre seul et dont il a besoin auprès de cette personne. Terminé lorsque vous disposez d'une liste concrète de ce que l'utilisateur doit pouvoir faire ou décider.

3. **Rédigez le questionnaire.** Rédigez des questions visant à combler les lacunes des étapes 1 à 2, en suivant la structure du document ci-dessous. Écrivez-le dans `to-questionnaire-<slug>.md` dans le répertoire actuel (slug du sujet) et signalez le chemin. Effectué lorsque le fichier existe et que chaque élément nommé par l'utilisateur à l'étape 2 est couvert par une question.

## Structure du document

Encadrez le document comme un **questionnaire de découverte** : l'utilisateur manque de contexte, le destinataire le détient. Classez les questions les plus importantes en premier – asynchrone signifie que vous ne pouvez obtenir qu’un seul laissez-passer – et regroupez-les sous les rubriques `##`  par thème une fois qu’il y en a plus d’une poignée. Écrivez-le en utilisant le modèle ci-dessous.

<modele-questionnaire>

# <Titre du questionnaire>

**Objectif :** pourquoi ce questionnaire existe et quelle décision en découle.

**De :** <l’utilisateur> — **À :** <le destinataire> — **Utilisation des réponses :** <leur destination>

## Contexte

Un paragraphe orientant un destinataire qui n'était pas dans la tête de l'utilisateur. De quoi bien répondre, pas une page.

## Comment répondre

Délai et efforts difficiles. Les réponses partielles et « Je ne sais pas » sont utiles : signalez tout ce dont vous n'êtes pas sûr plutôt que de l'ignorer.

## <Titre du thème>

Une `##` section par thème. Sous chacune, ses questions, les plus importantes en premier. Chaque question est une idée - jamais composée - avec un talon de réponse directement en dessous et une ligne _pourquoi c'est important_ uniquement lorsque la question pourrait être mal lue ou inviter une réponse jetable.

<exemple-question>
### Quelle charge le système est-il censé gérer au lancement ?

_Pourquoi est-ce important : il décide si nous prenons en charge le trafic en rafale maintenant ou si nous le différons._

>
</exemple-question>

## Autre chose ?

Un fourre-tout pour conclure : quelque chose que nous n'avons pas demandé et que nous devrions savoir ?

</modele-questionnaire>
