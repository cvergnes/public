# Livre blanc Octo flow

## Préface

    Préférence - transition plutôt que transformation.  Cheminement progressif.

    Contre intuitif : Pour aller vite, il faut engager le moins de travail en parallèle possible (limiter l’encours), et
    travailler ensemble autant que faire se peut, sur les sujets ayant le plus de valeur pour le client final.

## Intro

    L'agilité a permis de prendre en compte le côté exploratoire et incertain du développement logiciel.

    Nous souhaitons passer d’une logique de lots rythmés par un calendrier à une logique de décisions suite à des événements. Nous voulons repenser le temps, le voir comme continu et limiter au maximum les à-coups. Avoir une approche Flow, c’est passer du batch à l’événement.

## Axiomes
    - Toute décision est prise suite à une événement et non à une date planifiée

        Contre exemple : processus budgétaire.

        Quand on produit en grande quantité, un défaut devient couteux, il faut donc réduire le risque de variabilité en attribuant à chaque poste un périmètre réduit, très encadré et toujours identique.  Dans l’informatique, plus proche d’un bureau d’étude, l’approche est exploratoire.

        Réduire la taille des lots : feedback et apprentissage rapide, moins risqué donc plus facile d’expérimenter, suivi plus facile, favorise la collaboration entre les différents maillons de la chaine.

        Equation de John Little : Work in progress + Débit = lead time (temps passé entre la demande client et la livraison)

        Théorie des files d’attente :

        - en passant de 60 à 80% d’utilisation, on double la taille de la file d’attente ;
        - en passant de 80 à 90%, on la double encore
        - en passant de 90 à 95%, on la double encore.
    - La systémique du flux : chaque équipe connait son flux de travail

        La systémique nous aide dans la quête de l’optimum global par l’analyse des interactions, ce qui peut se faire au détriment des optima locaux
        La pensée non linéaire : Quand l’effet global n’est pas égal à la somme de tous les effets locaux, nous sommes dans le domaine du non linéaire. Nous ne pouvons comprendre l’impact d’un système en le décomposant en parties élémentaires

        Effet retard : Nous parlons d’effet retard quand il y a un décalage entre deux événements liés.

        Un kanban est une fiche cartonnée que l'on fixe sur les bacs ou les conteneurs de pièces dans une ligne d'assemblage. Le terme désigne aussi la méthode de gestion de production en flux tiré employée à la fin des années 1950 dans les usines Toyota et consistant à limiter la production d'un poste en amont d'une chaîne de travail aux besoins exacts du poste en aval

        Méthode Kanban avec un grand K.

        Elle est basée sur 4 principes :

        - Commencez là où vous êtes,
        - Engagez-vous à changer de manière incrémentale et évolutive,
        - En respectant le processus actuel, les rôles et les responsabilités,
        - Avec des actes de leadership à tous les niveaux

        “kanban thinking" avec un petit k. Voici les
        trois impacts attendus de kanban :

        - Écouler le plus efficacement possible le flux de demandes traitées
        - Maximiser la valeur délivrée
        - Développer les personnes pour augmenter le potentiel du système

        Système localement saturé - théorie des contraintes

        - identifier la contrainte
        - subordonner tous les processus au process contraint
        - Élever la performance de la contrainte

        Un système est dit globalement saturé quand il y a trop de demandes en cours et que cela génère des perturbations qui nuisent à la performance globale du système. C’est la différence entre un fleuve avec des tourbillons et un canal avec un débit laminaire. Pour sortir d’un système globalement saturé, il n’y a pas une infinité de solutions : il faut diminuer l’encours global et le ramener à un niveau (di)gérable.

    - **La répétabilité : une livraison de logiciel est un non-évènement qui peut intervenir n’importe quand**

        Pour qu’un incrément logiciel puisse être livré
        n’importe quand, il est nécessaire qu'à tout
        moment il soit dans un état stable, c'est-à-dire,
        livrable. Ce postulat a deux implications :

        - **La première,** c’est qu’il faut connaître et contrôler à tout moment son état. Cela suppose d’automatiser les processus de qualification
        de l’état et au premier chef les tests dits "de qualification"
        - l**a seconde,** c’est qu’il faut être capable de produire et mettre à disposition le logiciel n’importe quand, ce qui suppose d’automatiser les processus de packaging et de déploiement du logiciel.

        Solutions : CI/CD, TDD, BDD pour lutter contre erreur de compréhension

    - Perception : pour résoudre un pb il faut d’abord le rendre visible

        L'observabilité peut se définir comme **"**la capacité d'un système à être appréhendé par un humain afin qu'il puisse le comprendre, le modifier et le corriger**"**. Cette observabilité n’est possible que si le système mis sous surveillance met à disposition les données nécessaires.

        Pour avoir un env observable :

        - le **monitoring** qui permet de visualiser l’état
        d’un système,
        - la **stratégie de logging** pour avoir des
        sondes exploitables,
        - la **collecte des données et des métriques**
        pour le stockage,
        - l'**exception management**, ou comment gérer
        des cas non prévus,
        - l'**alerting** pour informer d’un événement qui
        demande une action,
        - le **tracing** distribué si jamais il y a besoin
        de suivre des demandes passant à travers
        plusieurs applications.

        L’UX design (User Experience Design) a pour principe fondamental d’intégrer les utilisateurs le plus tôt possible dans le cycle de développement d’un produit, afin de concevoir le produit à la fois pour ET avec eux. Plutôt que l'expression d'un besoin, l'idée n'est que la formulation d'une hypothèse que nous allons chercher à valider ou invalider en vérifiant auprès des utilisateurs.

        La recherche utilisateur est le plus souvent retranscrite et transmise à l’équipe produit via des artefacts comme les Personas et les Experience Maps.

    - La courroie de transmission : tout le monde connaît le lien entre sa production et la stratégie de l’organisation
        - La **VISION** est la description d’un état futur. Elle peut être qualifiée par des **IMPACTS** attendus entre aujourd’hui et l’état futur souhaité.
        - La **STRATÉGIE** est un ensemble coordonné d’initiatives qui doivent permettre d’atteindre les impacts : c’est la définition et l’allocation de moyens.
        - L'**EXÉCUTION**, c’est utiliser ces moyens au
        mieux.

        Indicateurs dits **"**3A**"**, popularisés par Eric Ries :

        - **Actionnables** : pour nous, le point le plus important est de savoir qu’un indicateur est
        avant tout une aide à la prise de décision. Si nous avons des indicateurs qui évoluent, mais que nous n’en faisons rien, nous nous poserons la question de leur utilité.
        - **Auditables** : nous avons besoin d’avoir confiance dans la donnée pour pouvoir prendre une décision. Cette confiance se matérialise par notre capacité à pouvoir ouvrir le capot et retracer la façon dont les indicateurs sont construits.
        - **Accessibles** : c’est toute la question des indicateurs composites, ceux pour lesquels il est nécessaire d’expliquer la formule pour comprendre ce qu’ils veulent dire. À partir du moment où un indicateur n’est pas compris, il est difficile de se projeter, d’où, parfois le choix de prendre pour aide à la décision un indicateur moins précis, mais plus simple

        Maintenant que nous avons défini ce qu’est pour nous un bon indicateur, nous pouvons passer à l’étape de suppression de tous les reportings inutiles. Cette étape est intéressante car elle peut aider à libérer du temps mais aussi à s’affranchir d’une charge cognitive inutile.

        rapport de l’organisation à l’information : Est-elle publique ou dissimulée ? Est-elle la propriété de tous ou l’apanage de certains ? la notion de circulation de l’information fait partie des déterminants retenus par l’étude Accelerate

        Protocole de décision :

        - HIPPO
        - Consensus
        - Majorité
        - Consensus systémique : nous avons plusieurs choix possibles. Les personnes lèvent une main quand elles sont réticentes sur une proposition et deux mains quand elles sont très réticentes. Le choix qui a le moins de voix est sélectionné.
        - **Consentement** **:** une personne propose une
        réponse à une question. Les autres participants
        peuvent répondre par 3 choix:
            - Pour.
            - Consentement — Une opinion est exprimée, il ne s’agit pas d’un vote blanc.
            - Veto — Une proposition de sortie est faite :
            "Je serais d’accord si...".

            Pour que la décision soit prise, il ne faut pas
            de veto et une majorité de ‘Pour’.

        - Conseil
        - Hasard

            Préconisation : d’abord consensus puis majorité. Si innovation, consentement

    - Entrainer

        Approche classique d’une transfo : "formation- coaching-monitoring”

        Les concepts trop contradictoires avec la culture de l’organisation ne sont pas assimilés s’ils ne sont transmis qu’une seule fois. Une heuristique de consultant est de dire qu’il faut répéter chaque chose 6 fois de façons différentes avant que les apprenants en aient une vision raisonnablement correcte

        Par exemple :

        - remplacer l’appel à la hiérarchie pour arbitrer les conflits par des pratiques de décision d’équipe)
        - remplacer le cahier des charges détaillé par une discussion hebdomadaire en face-à-face sur les critères de recette de chaque exigence

        Idée : kata de comportement


- Principes à adapter au contexte
    - ****Les conditions nécessaires : tout changement pérenne est une modification des habitudes****
    La culture, c’est ce que nous faisons quand personne ne nous regarde.
    la culture est un ensemble de comportements basiques partagés qu’un groupe a appris, qui fonctionnent assez bien pour être considérés comme valides, et qui peuvent donc être enseignés aux nouveaux comme étant la manière correcte de travailler.

        En 2012, Julia Rodosvsky lance au sein de Google le projet Aristote, dont le but est de découvrir les modèles et principes généraux communs aux équipes les plus efficaces. Après quelques essais infructueux, ils découvrent que la capacité de s’exprimer et de prendre des risques sans crainte est un élément clé. L'efficacité du travail en équipe tient de la qualité des relations entre les membres et à l'aisance avec laquelle ils peuvent exposer leurs faiblesses. L'environnement conditionne donc réellement les capacités d'apprentissage.

        Que se passe-t-il sans psychological safety ? Nous nous retrouvons dans le modèle des cinq dysfonctionnements d’une équipe3. L’absence de confiance et la peur du conflit empêchent l’équipe de grandir. Cela se caractérise par la préservation d’une harmonie artificielle. Nous sommes dans un jeu d’acteur, avec comme problème potentiel de prendre des actions et des décisions à partir d’informations erronées à la base.

        Core protocols : [https://liveingreatness.com/core-protocols/](https://liveingreatness.com/core-protocols/) crée lors du projet Visual C++ qui fonctionnait mal.

        Pair programming : Le consensus souligne que deux personnes travaillant ensemble sont moins productives de 15% par rapport aux deux mêmes personnes travaillant séparément, mais obtiennent un niveau de défaut moins important. La productivité n’est donc pas la raison pour laquelle nous souhaitons mettre en avant cette pratique de Pair Programming. Les difficultés du pair programming tiennent à l’aspect social et interactif de cette pratique. Il faut que les personnes se fassent confiance et qu’aucune ne prenne le dessus sur l’autre.
