# User Stories V0 - GrannyHelp

Ces user stories sont volontairement simples. Elles servent a relier la vision PO, les maquettes UX de Sofiane et le travail DEV.

## EPIC - Inscription et connexion

| ID | User story | Criteres d'acceptation | Priorite |
| --- | --- | --- | --- |
| US-01 | En tant qu'utilisateur, je veux creer un compte pour acceder a GrannyHelp. | Je peux saisir un email, un mot de passe et creer un compte. Un message de succes ou d'erreur s'affiche. | MUST |
| US-02 | En tant qu'utilisateur, je veux me connecter a mon compte pour retrouver mon espace. | Je peux saisir mes identifiants. Si les informations sont correctes, j'arrive sur l'accueil. | MUST |
| US-03 | En tant qu'utilisateur, je veux me deconnecter pour proteger mon compte. | Un bouton deconnexion met fin a la session et renvoie vers la connexion. | MUST |

## EPIC - Choix du role

| ID | User story | Criteres d'acceptation | Priorite |
| --- | --- | --- | --- |
| US-04 | En tant qu'utilisateur, je veux choisir mon role pour avoir une experience adaptee. | Je peux choisir entre jeune volontaire, accompagnateur ou personne agee autonome. Le role est enregistre dans mon profil. | MUST |
| US-05 | En tant qu'accompagnateur, je veux indiquer le proche que j'aide pour que les demandes soient claires. | Je peux renseigner le prenom du proche, le lien et son quartier. L'interface affiche "Pour [prenom]". | MUST |

## EPIC - Recherche et demande d'aide

| ID | User story | Criteres d'acceptation | Priorite |
| --- | --- | --- | --- |
| US-06 | En tant qu'accompagnateur, je veux rechercher une aide par type de service pour trouver une personne adaptee. | Je peux filtrer par courses, menage, bricolage ou informatique. | MUST |
| US-07 | En tant qu'accompagnateur, je veux rechercher une aide proche du domicile pour limiter les trajets. | La liste affiche la distance ou le quartier des profils. | MUST |
| US-08 | En tant qu'accompagnateur, je veux choisir une disponibilite pour trouver quelqu'un au bon moment. | Je peux filtrer par aujourd'hui, demain ou ce week-end. | MUST |
| US-09 | En tant qu'accompagnateur, je veux envoyer une demande precise a un jeune. | Je choisis un service, une date, une heure, une frequence et j'ajoute des precisions. | MUST |

## EPIC - Profil et suivi

| ID | User story | Criteres d'acceptation | Priorite |
| --- | --- | --- | --- |
| US-10 | En tant que demandeur, je veux voir le profil d'un jeune avant de faire une demande. | Le profil affiche prenom, age, services, disponibilites, distance et presentation. | SHOULD |
| US-11 | En tant qu'utilisateur, je veux suivre l'etat de ma demande pour savoir ou elle en est. | La demande affiche un statut : envoyee, en attente, confirmee ou terminee. | SHOULD |
| US-12 | En tant qu'utilisateur, je veux envoyer un message pour organiser le service. | Une conversation simple permet d'envoyer et lire des messages. | SHOULD |

## EPIC - Pourboire libre

| ID | User story | Criteres d'acceptation | Priorite |
| --- | --- | --- | --- |
| US-13 | En tant qu'utilisateur, je veux comprendre que le pourboire est libre et hors application. | Une mention claire indique que le pourboire est facultatif et donne directement entre les personnes. | COULD |

## User stories a ne pas faire tout de suite

Ces sujets sont utiles mais pas prioritaires pour la J2 :

- paiement en ligne ;
- verification d'identite reelle ;
- notifications mobiles ;
- geolocalisation precise ;
- algorithme de recommandation ;
- moderation avancee ;
- gestion de plusieurs villes.