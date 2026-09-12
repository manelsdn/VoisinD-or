# Modalites de fonctionnement - Projet SOL

Le professeur a indique que proposer des modalites de fonctionnement proches permet de s'ouvrir a plus de cas d'usage. Pour GrannyHelp, cela veut dire que l'application ne doit pas gerer un seul parcours unique. Elle doit couvrir plusieurs situations proches autour du meme besoin : aider une personne agee dans son quotidien.

## Tableau des modalites

| Modalite | Description simple | Exemple concret | Utilisateurs concernes | Priorite |
| --- | --- | --- | --- | --- |
| Demande directe par la personne agee | La personne agee utilise elle-meme l'application pour chercher de l'aide | Madeleine cherche quelqu'un pour l'aider avec son ordinateur | Personne agee + jeune | SHOULD |
| Demande par accompagnateur | Un proche cree et suit la demande pour la personne agee | Camille organise les courses pour sa mere Madeleine | Accompagnateur + personne agee + jeune | MUST |
| Service ponctuel | Une aide est demandee une seule fois | Porter des courses samedi apres-midi | Tous | MUST |
| Service regulier | Une aide revient toutes les semaines ou plusieurs fois | Courses tous les mercredis matin | Tous | SHOULD |
| Jeune qui propose son aide | Le jeune indique les services qu'il peut rendre et ses disponibilites | Lucas est disponible pour courses et informatique | Jeune + demandeur | MUST |
| Recherche par proximite | L'application favorise les personnes proches | Voir les jeunes a moins de 2 km | Tous | MUST |
| Recherche par disponibilite | Le besoin est rapproche d'un creneau possible | Trouver quelqu'un disponible aujourd'hui | Tous | MUST |
| Recherche par type de service | L'utilisateur choisit le besoin exact | Courses, menage, bricolage, informatique | Tous | MUST |
| Messagerie avant confirmation | Les personnes discutent avant de confirmer | Camille precise la liste de courses a Lucas | Jeune + accompagnateur ou personne agee | SHOULD |
| Pourboire libre | L'application ne gere pas de paiement obligatoire | Madeleine remercie Lucas directement apres le service | Jeune + personne agee | COULD |
| Avis apres service | L'utilisateur peut laisser un retour simple | Camille indique que Lucas a ete ponctuel | Tous | COULD |

## Ce que cela change pour le produit

Au lieu de concevoir seulement une application de petites annonces, GrannyHelp doit etre pensee comme un service de mise en relation flexible :

- une personne peut demander pour elle-meme ou pour un proche ;
- un service peut etre ponctuel ou regulier ;
- la disponibilite, la proximite et le type de service sont les criteres principaux ;
- le lien humain est aussi important que la tache realisee ;
- le paiement n'est pas le coeur du service, le pourboire reste libre.

## Formulation courte pour la presentation

Notre produit ne se limite pas a une demande d'aide unique. Nous proposons plusieurs modalites proches : demande directe, demande par accompagnateur, aide ponctuelle, aide reguliere, recherche par proximite, disponibilite et type de service. Cela permet de couvrir plus de cas d'usage tout en gardant une application simple.