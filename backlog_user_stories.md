# Backlog / user stories

# Qualité d’un backlog

Backlog doit être DEEP :

- détaillé de manière appropriée : plus c’est loin moins c’est détaillée
- estimée : estimation de manière appropriée => estimation de moins en moins précise
- évolutif
- priorisé : Faire comme si le projet pourrait s'arrêter à tout moment

### User story

Une user story décrit une fonctionnalité du point de vue client. C'est un outil de collaboration, un rappel qu'il faut une discussion à propos des besoins utilisateurs - en se concentrant plus sur la discussion que sur l'écrit (les mots sont imprécis). User stories ne sont pas les conteneurs de tous les requirements afin de pouvoir les modifier rapidement. La discussion à propos de la user story peut avoir lieu lors du product backlog refinement.

Recommandation : écrire les user stories du prochain sprint dans le sprint précédent. L’objectif du sprint est fixe mais le scope est variable. Ne pas avoir trop d’avance car il faut prendre en compte feedback.

Approche intéressante : écrire stories en mode incrémental (draft plusieurs sprints avant et finalisation de la US le sprint d’avant).

Voir Jeff Patton

### Découpage des user story

Le découpage doit être vertical, un bout de chaque couche (évite problème de dernière minute, release avec fonctions partiellement implémentée).

Découpage par workflow : 1 US pour chaque étape du workflow

Découpage par règles métiers. Exemple si plusieurs filtres => 1 US par type de filtre

Découpage par type de choix (différences / règles métiers pas de MMF). Exemple :  par type de paiement

Découpage par variation de données. Exemple : page en anglais puis en français, …

Découpage par type d’interface. Exemple : formulaire simple puis formulaire avec auto complétion

Découpage par type d’optimisation. Exemple : d’abord implementation lente puis optimisation

Découpage par type d’utilisateur. Exemple: découper par profils

Découpage par type de plateforme. Exemple : site web, smartphone

Découpage par besoin d’analyse. D’abord spike pour, par exemple pour analyser le bon choix technique.

Découpage CRUD

Découpage par besoin d’utilisateur : connexion simple, mot de passe perdu, blocage après 3 tentatives

Découpage par taches techniques à ne pas faire : induit des dépendances complexes entre les taches.

### Spike

Spike vient de la méthodologie XP.

Spike : item a pour objectif de définir un temps d’exploration pour répondre à une question ou creuser une hypothèse. Généralement un timebox. Exemple : creuser un moteur de recherche

Spike inclus dans la vélocité ? Tout dépend de notre conception de la vélocité. 

Soit vélocité:

- capacité de l'équipe à traiter tout sujet (bugs, prod, ...). Il faut donc estimer le spike
- capacité à délivrer des items fonctionnels. On n'estime pas les bugs ou les spike

### INVEST pour les user stories

I : indépendante. Première règle : stories doivent être indépendantes dans le sprint backlog.

Méthode différente entre INVEST et story mapping. Avec INVEST, on va créer uniquement les premières US, le produit sera donc incrémental. On fait du juste à temps. Dès que la US est faite, elle quitte le backlog, on peut donc créer de nouvelles US. Le backlog est plus dynamique et donc plus axé client.

Concept différent avec story mapping où on réalise forcément des stories

N : négociable. Tout le monde peut la challenger. Important d’avoir une norme pour décrire les US pour qu’elle soit lisible pour tout le monde. Pas trop grosse ni trop détaillée. Son contenu peut être négocié, par exemple en fin de sprint, pour la finir.

V : valeur. Chaque user story doit avoir une valeur biz. Voir notion de business value

E : estimable. Doit avoir tous les éléments nécessaires pour réaliser une estimation par l’équipe

S : suffisamment petite => estimation plus facile et moins de risque dans les specs. Important d’apprendre à découper les User Stories

T : Testable. User stories doivent comporter des tests.

### Technique des 3Cs pour les users stories

Ron Jeffries aussi fondateur de XP

Premier C Card : carte => As a … I want … So ….

Deuxième C : la conversation

Troisième C : la confirmation => les critères d’acceptation

### Backlog

1ere couche : theme / epic / feature

2eme couche : items (user story, spike; tâche technique)

3eme couche : sous tâche technique (à faire en refinement ou sprint planning)

Dans un très gros projet (4 ou 5 équipes sur le même projet), les équipes ajoutent une couche supplémentaire nommée thème. Pas de règles métiers dans thème / Epic / feature, pour faciliter les modifications et éviter les incohérences et surtout éviter les duplications entre stories et thème / epic / feature. Thème / epic / feature ne doit être qu’un label. Quelques idées sur le découpage en US.

Découpage en tâches techniques peut être fait en refinement ou en sprint planning.

US doivent être indépendantes. Détacher les pré requis techniques dans des tickets différents ou inclus dans les US. Une autre technique est le spike.

### Feature, user story, epic et theme

Dans Scrum, on parle d'increment. Feature est un regroupement de user stories.

Thème un peu moins utilisé mais 1 définitions : soit 1 feature soit un niveau au dessus de la feature.

Epics définition : item qui va être maturé est découpé en user stories (peu utilisé de cette manière). Bcp l’utilisent comme un regroupement de user stories.

[https://www.visual-paradigm.com/scrum/theme-epic-user-story-task/](https://www.visual-paradigm.com/scrum/theme-epic-user-story-task/)

[https://lh4.googleusercontent.com/8HYHMgeXzTqXtPkneHLZ_-vnD7BJYIXpnfKDN16TcR3D8uju5U1VJJvdqbbELqoLpHnhAnF4p5qt1rdhIdMdSi-0xhDTN0ztcR9Rptc9VofyAyYlM_pK4FfVVvgSDpnYCTd59lnP](https://lh4.googleusercontent.com/8HYHMgeXzTqXtPkneHLZ_-vnD7BJYIXpnfKDN16TcR3D8uju5U1VJJvdqbbELqoLpHnhAnF4p5qt1rdhIdMdSi-0xhDTN0ztcR9Rptc9VofyAyYlM_pK4FfVVvgSDpnYCTd59lnP)

Dans SAFE, le classement est différent :

[https://lh6.googleusercontent.com/rN52HMNgGoxA1ZlxBfMjA2vzTQm90e0Zb_sqyA4xhJQoePX-pxBS0MMXA8yweCyJTjNhh5QGZT8i9FAdf0CGojsHKaR9hvPQrcpwHX1Bz4PxPlmcVU9UpP2S-09jWvDqPUy--AP7](https://lh6.googleusercontent.com/rN52HMNgGoxA1ZlxBfMjA2vzTQm90e0Zb_sqyA4xhJQoePX-pxBS0MMXA8yweCyJTjNhh5QGZT8i9FAdf0CGojsHKaR9hvPQrcpwHX1Bz4PxPlmcVU9UpP2S-09jWvDqPUy--AP7)

Un bug qui empêche la livraison d’une story peut être une sous tâche.

Feature à découper en user story.

Modèle 3C pour les user stories (Ron Jeffries) : Card, Conversation et Confirmation.

Acronymes INVEST et SMART. Independant a évolué : indépendant dans le même sprint.

### Format de user story : Story A4

Idée : tout doit tenir sur une feuille A4. Donc garder le minimum de règles de gestion.

Il faut distinguer les acceptance criterias : les règles de gestion à respecter

[https://lh6.googleusercontent.com/-UOvAbBSsp61clwCv4U-jgguhdicS265ddlBPUHpoZOoFkFeJL1iaw0y7_45KzjZJjnGg2FrgzN_kg_--OJTJf0FLpmw_Yjt6VWECshOogy76Rnhn3b43Hsw0_XO26d8kfQrlxqd](https://lh6.googleusercontent.com/-UOvAbBSsp61clwCv4U-jgguhdicS265ddlBPUHpoZOoFkFeJL1iaw0y7_45KzjZJjnGg2FrgzN_kg_--OJTJf0FLpmw_Yjt6VWECshOogy76Rnhn3b43Hsw0_XO26d8kfQrlxqd)

### Personas

Ce qui distingue les personas c’est le parcours utilisateur. A distinguer du personas en marketing. Un client senior ou un ado vont avoir le même parcours utilisateur, donc ils seront identifiés par le même persona agile. En Marketing, cela risque d’être différent.

Persona agile, très axé sur l’innovation.

3 cases sur le persona :

- Frustrations & motivations
- Besoins des utilisateurs
- Nos propositions

### Story mapping

Story Maps were first introduced by Jeff Patton in 2005 : [http://www.jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf](http://www.jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf)

The main idea behind Story Maps is that single-list product backlogs are a terrible way to organize and prioritize the work that needs to be done. A richer structure is necessary.

A user story map captures the journey a customer takes with the product including activities and tasks they perform with the system. Creating a story map collaboratively ensures team members are on the same page from the start of the project through to the ongoing development of new releases.

Avant story mapping, faire un product vision board puis personas et customer journey. Puis pour faire un user story mapping à partir du customer journey,

Sur le customer journey, on va identifier des regroupements qui sont appelés des thèmes. Puis on ajoute les fonctionnalités (étapes du customer journey) sous les thèmes.

Puis ajouter une colonne NFR à gauche, pour lister les stories techniques nécessaires pour démarrer le projet.

[https://lh5.googleusercontent.com/zH8T3GWnoKwVjdIq-j0936RAcmhzjA1bVFPo7tn3M2yiA8UfZ_pGfKUCbFiUay8gV5thiPuNalQgNKwhz8K_55fINyZ-5fs2XfeHUPoKOli2k6rRE0jeDz6-ijwx18Q-HVhYLvFI](https://lh5.googleusercontent.com/zH8T3GWnoKwVjdIq-j0936RAcmhzjA1bVFPo7tn3M2yiA8UfZ_pGfKUCbFiUay8gV5thiPuNalQgNKwhz8K_55fINyZ-5fs2XfeHUPoKOli2k6rRE0jeDz6-ijwx18Q-HVhYLvFI)