# Team topologies

- Part 1 - équipe comme un moyen de livrer
    - Chapter 1 : le problème avec les organigrammes
        
        Arrêter de considérer ls équipes comme des éléments interchangeables qui réussiront que s’ils suivent le bon process. 
        
        Structure de communication dans une organisation ne se limite pas l’organigramme. Les communications horizontales sont nécessaires pour avoir le travail fait. 
        
        - structures dans 1 organisation :
            - structure formelle : l’organigramme
            - la structure informelle : l’influence entre individus
            - la structure de création de valeur : comment le travail est fait à partir de communication entre teams
        
        Pensée en système aide à éliminer les optimisations locales. Il aide à identifier le le plus grand bottleneck aujourd’hui et à l’éliminer. 
        
        - équipes type et mode d’interactions
            - stream aligned
            - platform
            - sous système compliqué
            - enabling
            
            3 modes d’interactions : 
            
            - collaboration
            - X as a service
            - facilitating
            - la loi de Conway : logiciel va voir la même structure que la structure organisationnelle
            - la charge cognitive de l’équipe
            
            Pour cela, il faut mettre l’équipe en premier et restreindre leur charge cognitive. 
            
        
        Dan Pink sur éléments de motivation : autonomie (pas bon, si trop de priorités), sentiment de maîtrise (”jack of all trades, master of none”), objectif (pas bon si trop de domaine de responsabilité)
        
    - Chapter 2 : la loi de Conway et pourquoi c’est important
        - Conway inversée
            
            Manoeuvre de la Conway inversé : team doivent avoir même design que l’archi logicielle qu’on cible. 
            
            Conséquences : tech guys doivent être impliqué dans la définition des équipes
            
        - Communication entre équipes
            
            Diminuer communication non nécessaires :  bcp d’orgas considèrent que plus de communication est bonne mais c’est faux. Ce qu’il faut ce sont des communications sur des sujets spécifique entre equips spécifiques. 
            
            Communication within teams is high bandwidth. Communication between two “paired” teams can be mid bandwidth. Communication between most teams should be low bandwidth
            
            Si orga impose d’assister à des meetings à large audience ou lire tous les messages du chat, cela (comm many to many) impose une archi de type monolithe 
            
    - Chapter 3 : team first thinking
        - Le secret de l'efficacité
            
            Recherches ont montré que dans un env riche en savoir, et nécessitant de la résolution de problèmes, une équipe soudée est bien plus efficace qu’une collection d’individus. Selon étude Google, la dynamique de l’équipe importe plus que sa composition
            
        - Taille équipe
            - Around five people—limit of people with whom we can hold close personal relationships and working memory
            - Around fifteen people—limit of people with whom we can experience deep trust
            - Around fifty people—limit of people with whom we can have mutual trust Around 150 people—limit of people whose capabilities we can remember
        - Team’s responsability
            
            Every system should be owned by one team not several teams
            
        - Team spirit
            
            For teams to work, team members should put the needs of the team above their own.
            
             They should: 
            
            - Arrive for stand-ups and meetings on time.
            - Keep discussions and investigations on track.
            - Encourage a focus on team goals.
            - Help unblock other team members before starting on new work.
            - Mentor new or less experienced team members.
            - Avoid “winning” arguments and, instead, agree to explore options.
            
            Il faut retirer les team members toxic. 
            
        - Types de charge mentale
            
            Diminuer les responsabilités de l’equipe pour diminuer la charge mentale. 
            
            - Charge intrinsèque : l’aspect fondamental de la tâche : connaissance du langage et du framework
            - Charge cognitive étrangère : en rapport avec l’env. Par exemple, la liste de commandes à taper...
            - Charge cognitive approprié : par exemple les aspects spécifiques du domaine biz
        - Comment diminuer charge mentale ?
            
            Intrinsic cognitive load should be reduced by training, good choice of technology, pair programming
            
            Extraneous cognitive load should be eliminated by automation
            
            Team should have enough room to eliminate intrinsic & extraneous cognitive load
            
        - Split teams
            
            Example of a team which split herself in several micrograms o decrease cognitive load. Cross domain issues could be adressed by temporary micro teams. Motivation goes up, more empowering since there is no more a tech lead. Team mission was clear and there were less context switching and less intra teams communication. 
            
        - Team first
            
            **Instead of choosing between a monolithic architecture or a microservices architecture, design the software to fit the maximum team cognitive load**
            
            To increase the size of a software subsystem or domain for which a team is responsible, tune the ecosystem in which the team works in order to maximize the cognitive capacity of the team (by reducing the intrinsic and extraneous types of load):
            
            - Provide a team-first working environment (physical or virtual)
            - Minimize team distractions during the workweek by limiting meetings, reducing emails, assigning a dedicated team or person to support queries, and so forth
            - Change the management style by communicating goals and outcomes rather than obsessing over the “how,” what McChrystal calls “Eyes On, Hands Off”
            - Increase the quality of developer experience (DevEx) for other teams using your team’s code and APIs through good documentation, consistency, good UX, and other DevEx practices.`Use a platform that is explicitly designed to reduce cognitive load for teams building software on top of it.
            
            “A further benefit of taking a team-first approach to software boundaries is that the team tends to easily develop a shared mental model of the software being worked on
            
        - Team API
            
            How to interact with a team ?
            
            - code
            - code versionning
            - wiki and documentation
            - practices & principles : team’s preferred way of working
            - communication : team’s approach to remote communication tools
            - work information :
            
            The team API should explicitly consider usability by other teams: Will other teams find it easy and straightforward to interact with us ? How do we respond to pull requests and other suggestions from other teams?
            
            CEO Jeff Bezos insisted on almost paranoid levels of separation between teams. For example, each team at AWS must assume that “every [other team] becomes a potential DOS [denial of service] attacker requiring service levels, quotas, and throttling
            
        - Facilitate team interaction
            
            Important to provide time, space, and money to enable and encourage people from different teams with similar skills and expertise to come together to learn from each other. Also build trust. 
            
            “Some tasks (e.g., implementing and testing a complicated algorithm) might require full concentration and low levels of noise. Other tasks require a very collaborative approach (e.g., defining user stories and acceptance criteria)”
            
            “Instead of simply “Jai Kale” as the display name within the chat tool and wiki, use something like “[Platform] Jai Kale” to identify that Jai Kale is in the platform team.”
            
- Part 2 - team topologies qui fonctionnent
    - Chapter 4 : static team topologies
        - Team topologies
            
            In order to be as effective as possible, we need to consciously design our teams rather than merely allow them to form accidentally or haphazardly. We call these consciously designed team structures team topologies, a term that acknowledges that teams should be deliberately “placed” into organizations while also referring to the boundary of responsibility of each team.
            
        - Static team topologies
            
            Static team topologies are team structures and interactions that fit a specific organization’s context at a given point in time
            
        - Team anti patterns
            - Ad hoc team design : teams grown up too large or software crash
            - Shuffling team members after end of project. Volatility of team members don't take in account the cost of forming teams.
        - Shape for flow
            
            Cross functional teams etc...
            
        - Dev ops
            
            Even though many people see DevOps as fundamentally addressing technological aspects of automation and tooling, only organizations that also address fundamental misalignments between teams are able to achieve the full potential benefits from adopting DevOps.
            
        - Best team patterns depend on surrounding teams
        - Feature team require maturity and trust
            
            FT need to touch multiple codebases. Members may not follow boy scout rules. 
            
        - From infra teams to cloud teams
            
            Clous teams dont create the infra but give the process for the teams to do so
            
        - SRE : site reliability engineering
            
            **Site reliability engineering**(**SRE**) is a set of principles and practices that incorporates aspects of [software engineering](https://en.wikipedia.org/wiki/Software_engineering) and applies them to [infrastructure](https://en.wikipedia.org/wiki/IT_infrastructure) and [operations](https://en.wikipedia.org/wiki/IT_operations) problems
            
        - What to consider when choosing a methodology ?
            
            ![Untitled](Untitled%2018.png)
            
            “Low maturity organizations will need time to acquire the engineering and product development capabilities required for autonomous end-to-end teams. Meanwhile, more specialized teams (development, operations, security, and others) are an acceptable trade-off, as long as they collaborate closely to minimize wait times and quickly address issues. For a moderate scale of organization or software, patterns that emphasize close collaboration between teams at speed work well. As the size of the organization or software scale increases, focusing on providing the underlying infrastructure or platform as a service brings important benefits in terms of user-facing service reliability and the ability to meet customer expectations. If the organization has a high level of engineering maturity and discipline, then the SRE model described earlier may be effective at scale as well.
            ”
            
            Excerpt From
            Team Topologies: Organizing Business and Technology Teams for Fast Flow
            Matthew Skelton
            This material may be protected by copyright.
            
        - Dépendances et temps d’attente entre équipes
            
            It is essential to detect and track dependencies and wait times between teams. 3 different categories of dependency: knowledge, task, and resource dependencies
            
            It is important to track the number of dependencies per area, and to establish thresholds and alerts that are meaningful for a particular situation
            
            Spotify relies on a simple spreadsheet to detect and track interdependencies between squads and tribes
            
            It highlights whether a dependency is on a squad within the same tribe (acceptable) or in a different tribe (potentially a warning that team design or work assignment is wrong). The tool also tracks how soon the dependency will impact the flow of the depending team
            
        - Example : dev ops team anti pattern
            
            dev ops team create silo and could add a dependency. A best solution is a dev ops evanglist team.
            
    - Chapter 5 : 4 fundamental team topologies
        
        There isn’t a separate ops or support team : no handover to separate ops or support team.
        
        - Stream-aligned team
            
            Example : Amazon’s two pizza teams
            
            - Which alignement for a stream-aligned team ?
                
                A stream-aligned team is a team aligned to a single, valuable stream of work; this might be a single product or service, a single set of features, a single user journey, or a single user persona.
                
            - Stream-aligned team characteristics ?
                
                Stream-aligned team  is :
                
                - empowered to build and deliver customer or user value as quickly, safely, and independently as possible,
                - without requiring hand-offs to other teams to perform parts of the work.
            - Type of streams
                - specific customer streams,
                - business-area streams,
                - geography streams,
                - product streams,
                - user-persona streams,
                - or even compliance streams.
            - Stream-aligned capabilities
                
                These capabilities include (but are not restricted to):
                
                - Application security
                - Commercial and operational viability analysis
                - Design and architecture
                - Development and coding
                - Infrastructure and operability
                - Metrics and monitoring
                - Product management and ownership
                - Testing and quality assurance
                - User experience (UX)”
            - Stream aligned teams and hand-offs
                
                A stream-aligned team has minimal (ideally zero) hand-offs of work to other teams.
                
            - Stream aligned team and tech debt
                
                A stream-aligned team must have time and space to address code quality changes (sometimes called “tech debt”) to ensure that changing the code remains safe and easy to do
                
            
            Members of a stream-aligned team feel they have achieved or are in the path to achieving “autonomy, mastery, and purpose,” the three key components of engaged knowledge workers, according to Daniel Pink
            
        - Enabling team
            - Enabling team address which problems ?
                
                Stream-aligned teams are also under constant pressure to deliver and respond to change quickly can’t find the space for researching, reading about, learning, and practicing new skills
                
            - Enabling team composition
                
                An enabling team is composed of specialists in a given technical (or product) domain, and they help bridge this capability gap. 
                
            - Enabling team role
                
                Enabling team have the required bandwidth to research, try out options, and make informed suggestions on adequate tooling, practices, frameworks, and any of the ecosystem choices around the application stack. This allows the stream-aligned team the time to acquire and evolve capabilities without having to invest the associated effort.
                
                The end goal of an enabling team is to increase the autonomy of stream-aligned teams by growing their capabilities with a focus on their problems first
                
            - Dependency on enabling team
                
                There should not be a permanent dependency on an enabling team
                
            - Enabling team’s scope
                
                A single enabling team might map to any of the stream-aligned team capabilities we listed in the previous section : user experience, architecture, testing, and so on), but often they are focused on more specific areas, such as build engineering, continuous delivery, deployments, or test automation for particular client technology (e.g., desktop, mobile, web). For example, the enabling team might set up a walking skeleton of a deployment pipeline or a basic test framework combining automation tools and some initial scenarios and examples.
                
            - Enabling team behavior
                - proactively seeks to understand the needs of stream-aligned teams, establishing regular checkpoints and jointly agreeing when more collaboration is needed
                - stays ahead of the curve in keeping abreast of new approaches, tooling, and practices in their area of expertise, well before an actual need is expected from stream-aligned teams
                - An enabling team acts as a messenger of both good news (e.g., “There’s a new UI automation framework that can reduce our custom test code by 50%.”) and bad news (e.g., “Javascript framework X, which we’re using extensively, is no longer actively maintained.”)
                - Occasionally, the enabling team might act as a proxy for external (or internal) services that are currently too difficult for stream-aligned teams to use directly
                - promotes learning inside the enabling team but across stream-aligned teams, acting as a curator that facilitates appropriate knowledge sharing inside the organization
            - Case study
                
                Team charter with okrs. The enablement team itself was intentionally formed from a mix of external consultants and developers taken from the existing teams.
                
                I felt strongly that an engineering enablement team should plan for its own extinction from the very first day to avoid other teams becoming dependent
                
                To this end, we ran mob programming sessions, recorded demos, and invited every team to our showcases. We estimated that a quarter of our team’s time was spent actually implementing solutions; the rest was sharing knowledge. After the new skills and understanding have been embedded in the stream-aligned team, the enabling team will stop daily interaction with the stream-aligned team, switching their focus to a different team
                
            - Enabling team Vs cop
                
                Enabling teams and CoP can co-exist because they have slightly different purposes and dynamics: an enabling team is a small, long-lived group of specialists focused on building awareness and capability for a single team (or a small number of teams) at any one point in time, whereas a CoP usually seeks to have more widespread effects, diffusing knowledge across many teams.
                
        - Complicated sub system team
            
            Part of the system depend on specialist knowledge. 
            
            The critical difference between a traditional component team (created when a subsystem is identified as being or expected to be shared by multiple systems) and a complicated-subsystem team is that the complicated-subsystem team is created only when a subsystem needs mostly specialized knowledge. The decision is driven by team cognitive load, not by a perceived opportunity to share the component.
            
        - Platform team
            - Platform’s team objectives
                
                The platform team provides internal services to reduce the cognitive load that would be required.
                
                The platform always serves the needs of consuming applications and services, not the other way round”
                
            - Platform team sharing knowledge
                
                Team’s knowledge is best made available via self-service capabilities via a web portal and/or programmable API (as opposed to lengthy instruction manuals) that the stream-aligned teams can easily consumed
                
                Ease of use is fundamental for platform adoption
                
            - Platform team’s effort
                
                There will always be a need to balance the effort invested with quality. As with commercial products, the platform can provide different levels of service.
                
                Don Reinertsen recommends using internal pricing (for infrastructure and services) to regulate demand, helping to avoid everyone asking for premium level.
                
                An example could be tracking cloud-infrastructure costs by team or service.
                
            - Expected behavior
                - A platform team uses strong collaboration with stream-aligned teams to understand their needs
                - fast prototyping techniques and involves stream-aligned team members for fast feedback
            - Team silos
                
                Teams composed only of people with a single functional expertise should be avoided if we want to deliver software rapidly and safely. Traditionally, many organizations created islands, or “silos,” of functional expertise by grouping the staff, such as:
                
                - Testing or “quality assurance” (QA)
                - Database administration (DBA)
                - User experience (UX)
                - Archi
                - Data processing (such as ETL)
                
            - Hands off
                
                Organizations that optimize for a safe and rapid flow of change : Work is never handed off to another team for a later stage in the flow”
                
            - Viable platform
                
                We should aim for a thinnest viable platform (TVP) and avoid letting the platform dominate the discourse. As Allan Kelly says, “software developers love building platforms and, without strong product management input, will create a bigger platform than needed”
                
        - Move teams to the most stream aligned teams
            
            That is, based on what successful organizations report, the ratio of stream-aligned teams to other kinds of teams should be between about 6:1 and 9:1.
            
        - Component teams to transform to
            
            DBAs could be converted ad enabling teams : spreading awareness or convert them into a platform team
            
        - Architects ?
            
            Archi team to be transformed to part time enabling team.
            
            Architecture team should support the other teams, helping them to be as effective as possible, rather than imposing designs or technology choices on other teams”
            
    - Chapter 6 : choose team-first boundaries
        - Joined-at-the-Database Monolith
            
            “A joined-at-the-database monolith is composed of several applications or services, all coupled to the same database schema”
            
        - Coupled build or release monolith
        - Monolithic thinking
            
            “In Accelerate, the authors mention how their research indicates that enforcing standardization upon teams actually reduces learning and experimentation, leading to poorer solution choices”
            
        - Fracture plan : biz domain bounded context
        - Fracture plan : team location
        - Fracture plan : risk
        - Fracture plan : performance isolation
        - Fracture plan : user personas
- Part 3 : evolving team interactions for innovation and rapid delivery
    - Chapter 7 : team interaction modes
        - Team interaction modes
            - Collaboration
            - X as a service : with minimal collaboration
            - Facilitating : helping or being helped to clear impediments
        - Formalize team interactions
            
            Formalizing team interactions helps defining interfaces between teams; in turn, it is expected (from Conway’s law) that these interfaces will be reflected in the software systems being built.
            
            ![Untitled](Untitled%2019.png)
            
        - Collaboration
            
            Driver of innovation and rapid discovery.
            
            Example : significant innovation in a space that spans the expertise of two existing teams
            
            This collaboration occurs between groups with different skill sets in order to bring together the combined knowledge and experience of many people to solve challenging problems
            
            Two teams must take on joint responsibility for the overall outcomes of their collaboration
            
        - X-as-a-Service
            - Clear responsabilities
            - But need good product management
            
            “Constraint: A team should expect to use the X-as-a-Service interaction with many other teams simultaneously, whether consuming or providing a service.”
            
        - Facilitating
            
            “one or more teams would benefit from the active help of another team facilitating (or coaching) some aspect of their work”
            
        - Team interaction modes
            
            ![Untitled](Untitled%2020.png)
            
    - Chapter 8 : evolve team structure with orga sensing
        - Collaboration is expensive
            
            Collaboration is expensive. Unnecessary collaboration is particularly expensive, especially as it can mask or hide deficiencies in underlying platforms or capabilities
            
        - Deliberate collaboration
            
            If one team has significant experience in a valuable set of practices—such as test automation—from which the second team would benefit, then bringing the two teams together in collaboration mode for a few months
            
            This “deliberate collaboration” is particularly useful where two groups have very different prior experience due to the prevailing practices around their respective technologies”