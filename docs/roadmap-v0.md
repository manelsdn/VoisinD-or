# Roadmap V0 - Tableau des EPICs

Cette roadmap V0 sert a preparer la discussion de J2. Elle clarifie les besoins utilisateurs et les approches retenues par rapport a la vision produit GrannyHelp.

## Vision produit

GrannyHelp aide les personnes agees a recevoir un coup de main local pour le quotidien. Le besoin peut etre gere directement par la personne agee ou par un accompagnateur. Les jeunes proposent leur aide selon leur proximite, leurs disponibilites et les services qu'ils savent rendre.

## Roadmap V0

| EPIC | Besoin utilisateur | Approche retenue | Priorite | Responsable principal |
| --- | --- | --- | --- | --- |
| Inscription et connexion | Acceder a l'application avec un compte simple | POC Firebase Auth avec inscription, connexion, deconnexion et messages d'erreur | MUST | Youmna |
| Choix du role utilisateur | Adapter l'experience selon la personne qui utilise l'app | Trois roles : jeune volontaire, accompagnateur, personne agee autonome | MUST | Manel + Youmna |
| Gestion d'un proche | Permettre a un accompagnateur d'organiser l'aide pour une personne agee | Fiche proche avec prenom, quartier, lien et accord du proche | MUST | Manel + Sara |
| Accueil personnalise | Donner rapidement acces aux actions utiles | Accueil different selon le role : chercher de l'aide, proposer son aide, gerer un proche | MUST | Sara + Youmna |
| Recherche d'aide locale | Trouver une personne compatible rapidement | Filtres par type de service, distance et disponibilite | MUST | Sara |
| Creation d'une demande | Formuler un besoin clair et exploitable | Demande avec service, date, heure, frequence ponctuelle ou reguliere, precisions | MUST | Sara + Youmna |
| Profil jeune volontaire | Rassurer avant de demander une aide | Profil avec prenom, age, services proposes, disponibilites, distance et courte presentation | SHOULD | Sofiane + Sara |
| Reservation / suivi | Comprendre ou en est la demande | Statut simple : brouillon, envoyee, en attente, confirmee, terminee | SHOULD | Manel + Sara |
| Messagerie | Se mettre d'accord avant le service | Conversation simple entre jeune et demandeur/accompagnateur | SHOULD | Youmna |
| Pourboire libre | Respecter la logique du projet sans gerer de paiement | Mention claire : pourboire facultatif, hors application, donne directement | COULD | Manel |
| Avis et confiance | Donner un minimum de reassurance | Note ou avis simple apres service, sans mecanique complexe au debut | COULD | Sara |
| Site vitrine | Expliquer le service et donner envie | Page de presentation : concept, comment ca marche, FAQ, contact, valeurs | SHOULD | Sofiane |

## Scenario minimal a viser

1. Camille cree un compte accompagnateur.
2. Elle ajoute Madeleine comme proche.
3. Elle cherche une aide pour les courses dans son quartier.
4. Elle consulte le profil de Lucas.
5. Elle envoie une demande ponctuelle avec une date et une heure.
6. La demande passe en statut en attente.
7. Une conversation peut etre ouverte pour preciser le besoin.

## Scenario cible

Le scenario cible ajoute : service regulier, recherche avancee, profil enrichi, avis, historique des demandes, gestion de plusieurs proches, et meilleure personnalisation des disponibilites.