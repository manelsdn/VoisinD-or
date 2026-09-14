# Roadmap V0 - EPICs GrannyHelp

Objectif J2 : clarifier les besoins utilisateurs, les hypothèses produit et les approches fonctionnelles retenues pour la première version.

| EPIC | Besoin utilisateur / hypothèse | Approche fonctionnelle retenue | Scénario |
|---|---|---|---|
| Compte et authentification | L'utilisateur doit pouvoir créer un accès et revenir facilement dans l'application. | Inscription par e-mail, code temporaire ou lien magique, connexion, déconnexion, gestion des erreurs et redirection vers l'accueil. | MUST |
| Rôles et profils | L'expérience doit être adaptée aux jeunes volontaires, aux accompagnateurs et aux personnes âgées. | Choix du rôle, profil utilisateur et informations visibles selon le rôle. | MUST |
| Accueil et navigation | L'utilisateur doit comprendre rapidement quoi faire après sa connexion. | Accueil personnalisé, raccourcis vers les actions principales et navigation mobile simple. | MUST |
| Accompagnement d'un proche | Un proche peut organiser une aide avec l'accord de la personne âgée. | Fiche proche, contexte "Pour Madeleine" et accord explicite du bénéficiaire. | MUST |
| Services et demandes | Le besoin doit être clair pour éviter les malentendus. | Type de service, date, heure, fréquence, détails et statut de la demande. | MUST |
| Recherche locale | Les utilisateurs cherchent une aide proche, disponible et compatible avec le service demandé. | Filtres par service, distance et disponibilité, puis affichage des profils compatibles. | MUST |
| Organisation et suivi | Après l'envoi d'une demande, l'utilisateur doit savoir où en est le service. | Statuts, suivi, conversation simple et confirmation avant la rencontre. | SHOULD |
| Cadre de confiance | Le service doit rester humain, rassurant et compréhensible. | Charte d'entraide, informations de profil, rappel du pourboire libre et règles simples. | MUST |
| Messagerie | Les détails doivent pouvoir être confirmés avant la rencontre. | Conversation simple liée à une demande. | SHOULD |
| Données fictives riches | La démonstration doit sembler réaliste et crédible. | Profils, annonces, conversations et réservations de test. | COULD |

## Scénario minimal MUST

Camille crée un compte, choisit le rôle d'accompagnatrice, ajoute Madeleine, trouve Lucas, crée une demande de courses et consulte le suivi de la demande.

## Scénario cible SHOULD/COULD

Le scénario cible ajoute la messagerie, des statuts plus complets, les services réguliers, davantage de données fictives et des profils enrichis.
