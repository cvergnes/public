# PO

# Liens importants

[https://www.scrum.org/resources/blog/18-characteristics-great-product-owner](https://www.scrum.org/resources/blog/18-characteristics-great-product-owner)

Jeff Patton : [https://www.jpattonassociates.com/product-discovery-recipes/](https://www.jpattonassociates.com/product-discovery-recipes/) 

Roman Pinchler : [https://www.romanpichler.com/blog/](https://www.romanpichler.com/blog/) 

Cf vidéo d’Henrik Kniberg : [https://www.youtube.com/watch?v=502ILHjX9EE&ab_channel=HenrikKniberg](https://www.youtube.com/watch?v=502ILHjX9EE&ab_channel=HenrikKniberg) 

# Impact du produit

Ce qui manque dans le backlog, c'est l'impact. Exemple : taux de conversion, taux de satisfaction ?

C'est la différence entre output (sortie) et outcome (impact) cf John Kutler

Impact à suivre et à mesurer. 

Sans mesure, pas de feedback 

Cet approche est aussi valable pour les bugs. 

Impact peut être financier, image de marque, gain de temps.

Impact est utile pour prio des éléments techniques

Si on n'arrive pas à trouver l'impact : il ne faut pas le faire

Impact produit de l'implication

Il faut se débarasser de tout ce qui ne marche pas parfaitement

# Tâche du PO savoir dire non afin d’éviter d’avoir 6 mois de backlog

Savoir dire non quand on est PO : 

- dire oui puis ne rien faire,
- non grâce aux tests, retours utilisateurs ou analytics,
- demander à un collectif de stakeholder à prioriser,
- non car la demande ne respecte pas la vision.

Si on dit oui ou non, on doit toujours dire pourquoi.

Eléments de langage : "Êtes-vous prêt à sacrifier cette feature qui a telle valeur pour telle autre feature qui vaut y ?”

# Product manager Vs PO

C'est le même role. Sauf dans les cas a l'échelle.

Product manager est axé sur les features, thèmes ou Epics. PO plus orienté vers un niveau plus détaillé : user stories. Product manager est aussi celui qui fait l'interface avec le top management

# PPO : proxy product owner

Si PO est métier, souvent rôle de BA ou proxy product owner qui reprend l’ensemble des tâches. PO ou proxy product owner. PO fait que de la prio.

Raisons:

- PO a d’autres rôles
- PO n’a pas envie d’être PO

PPO n’a pas accès aux utilisateurs. Et il doit passer par le PO pour prioriser.

Si équipe pourrait avoir besoin d’un proxy PO, c’est souvent mauvais signe car :

- Normalement, la charge de travail de PO pour une équipe ne doit pas être trop importante.
- Augmentation des risques des problèmes de communication

L'ajout d’un intermédiaire augmente la perte d’information. Ce n’est pas très optimisé. Cf PO passe plat (cf [https://const.fr/blog/agile/po-passe-plats-proxy-po/](https://const.fr/blog/agile/po-passe-plats-proxy-po/) )

Scrum guide dit que PO est une seule personne pas un comité. PPO doit être une stratégie transitoire de MOE / AMOA vers Scrum /  PO

### AMOA vs PO

Première différence clé : interaction quotidienne vs. formalisme

- Seconde différence clé : vision globale vs. « business only »

La principale responsabilité de l’AMOA est de produire les spécifications fonctionnelles détaillées (SFD) : le reste de ses responsabilités consiste essentiellement à s’assurer que le produit final répond bien à ces SFD, et que le projet se déroule selon le plan établi (planning, budget, etc.).

En effet, l’« ownership » du produit est un rôle bien plus vaste : certes il intègre bien par la vision fonctionnelle du produit, et également l’expérience utilisateur (UX), même si cette notion devient bien plus profonde dans le monde Agile (question d’époque sans doute : la plus grande concurrence amène les utilisateurs à être de plus en plus exigeants). Mais surtout, le PO est également responsable d’intégrer la dimension technique de son produit : il n’est pas développeur, mais se doit de comprendre les enjeux techniques de son produit, notamment via les échanges avec les membres de la Scrum Team.

### AMOA vs PO

# PO absent, que faire ?

Conséquence : Moins d’interaction.

Piste 1 : SM invite le PO plus souvent. Idéal : PO co localisé avec l’équipe Scrum.

Piste 2 (attention, très transitoire) : Proxy PO. PPO pas de décision finale sur le backlog (autrement nommé BA). Risque : PO devient stakeholder.

Piste 3 : casser les silos. C’est plutôt un travail de coach mais le SM peut aider.

# PO teste les US ?

Exemple : colonne à valider dans le board, c'et le monde du PO

Si tache de test est dans le DOD, elle doit être gérée par l'équipe pas par le PO

Si PO fait de l'exploratoire, c'est autre chose

Si PO fait de la recette, il fait passer les acceptance tests seulement normalement. Et sauf problème de confiance, normal pour une nouvelle équipe. Il ne devrait pas y avoir de retour sur les acceptance tests. Si c'est le cas, c'est très grave. 

Si pas de retour, on peut alors sans doute se passer de cette colonne (et laisser équipe dev faire la recette). 

Important : si on ajoute des acceptance tests à ce moment là, c'est un problème. 

Si tests plus poussés, la colonne ne doit pas être validation mais testing → tests exploratoires, tests de montée en charge. 

Pb possible : les stories bouchonnent dans la colonne validation PO

2 solutions:

- les tests sont faits par l'équipe
- le PO a aussi un role de testeur dans l'équipe : il participe au planning poker, il évalue la charge de test, sa capex est comptée dans la capex de l'équipe, ellee donne son avis en planning → si ca coince, c'est à l'équipe de prendre en charge le problème
