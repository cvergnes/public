# Pluralsight - Agile team practices with Scrum

# Agile and why it works

Waterfall (Winston Royce)

Agile manifesto

Plan driven vs agile : change is bad (plan driven) vs change is inevitable (agile), adherence to plan define success vs success is based on ROI or customer satisfaction, done when it is signed off vs done when customer is happy.

Agile discussion

Process and methodologies /// Techniques and practices

Agile is iterative, adaptive, value based, easy to understand but hard to implement

### XP

Kent Beck in 1999. Success in small teams. XP became controversial due advocates teaching it as a dogma. XP is effective team practices push to extreme levels

Code review => extreme is pair programming

Testing => extreme is TDD and constant regression

Software design => extreme is refactoring

Short iterations => extreme is planning game (one week iteration)

12 practices : planning game, small releases, metaphor (for communication), simplest solution, continuous testing and refactoring, pair programming, CI, collective ownership (no one individual responsible of part of the project), on site customer (to guide team direction), 40-hour week, coding standards

### Scrum

Ken Schwabber and Jeff Sutherland in 1990's

No specific engineering techniques

Can be used beyond software development

Simple

24 hour iteration

At end of sprint, fully functional product

### Lean software dev

A set of guidelines more than formal methodology

Originally applied in manufacturing (Toyota), now used in software dev

Can be applied to improve any process

Focus on continuous improvement (Kaizen) and value flow

### Principles

Eliminate waste

A culture of learning (encourage to learn beyond their expertise)

Respect people (more knowledgeable are the ones performing it)

Build in Quality (quality mustn't be injected afterwards)

Defer commitment (last responsible moment, so we have more information)

Deliver fast (get feedback and amplify the learning)

Optimize the whole

## Feature Driven Development

Jeff De Luca working on a 50 person project in a Singapore Bank in 1997

Strict process (UML modeling)

Based on engineering practices (modeling)

Some claims it scales more effectively than Scrum

5 activities

1 - develop model

2 - build feature list (feature as expressed : action result object) feature less than 2 weeks

3 - plan by feature

4 - design by feature => 3 milestones : domain walkthrough, design, design inspection

5 - build by feature => 3 milestones : code, code inspection, promote to build

FDD practices : domain modeling (UML), develop by feature, individual code ownership (owner), feature teams, inspections (to ensure quality), config mgt (traceability and audit trail of any change on the system), regular builds, highly visible progress and results

[https://www.agilealliance.org/](https://www.agilealliance.org/)

[http://www.pmdoi.org/](http://www.pmdoi.org/)

[https://agilemanifesto.org/](https://agilemanifesto.org/)

# Agile requirements and estimation

### Effective requirements

Requirement is

- a feature, behavior or a constraint (performance) to be added to a system
- a prelude to a conversation between biz stakeholder and dev team
- a request to someone to work
- a request to software to change

... and is not :

- a solution design
- a decision about implementation
- illustrative of the final deliverable
- source of truth

NASA requirements: complete, consistent, correct, modifiable, ranked, traceable, unambiguous, verifiable

But other characteristics : Can I explain it to my mom ? => simplicity

IEEE requirements: interfaces, functional capability, perf levels, data structures, ... => no way to explain it to my mom

INVEST acronym : Independent, Negotiable (not contract, not too many details), Valuable (to users or customers), Estimable, Sized appropriately (not too big, if to be executable in next iteration, it should take half the time of the iteration), Testable (automate, automate, automate)

### User story

Readable and usable form for the requirements. As a <role> I want a <feature> so that <benefit>. Recipe to change fast to requirements change with less overhead.

As a <role> : <role> mustn’t be user. User is a generic term not useful.

Why it works:

- simple to write and understand(because understanding is the major problem in requirements)
- detail are in conversations
- requirements is effective when performed collaboratively (requirements is fundamentally understanding each other)
- express the intent (which is very rare in usual way to express requirements)

User story conversation

- user story raise questions from the team => conversation between the biz analyst and the team => smaller stories

Sign that stories are working

- focus shift from writing to talking
- stories are understood by customer and developer
- at estimation time, they are at the right size
- participative design
- emphasis on user goal (not system attributes)

### Scenarios

Given <context> When <something happens> Then <outcome>

Scenario 1 : user is a premium member

Whole story on a card

Title

Description

Success criterias : Scenarios (Given When Then)

Biz value estimate, Dev effort estimate, ROI estimate

Story owner

### Estimating work

Estimates are necessary for

- to plan and proceed deliberately
- a feel for the costs
- calculate potential ROI
- understand size of sth
- know if work can be done
- weigh options

Ways to estimate :

- fléchettes
- by manager
- ask the experts (not experts but don’t know who will be executing)
- without bothering the developers : they are busy

Warning signs :

- someone other than the team is doing the estimation
- estimates are done without looking at historical performance
- estimates are treated as promises
- estimates are rejected since they don’t fit already existing plan (bigger/smaller than it should be, )

How to measure software dev work ? Lines of code ?

### Story point

- very common way to estimate work
- based on size and complexity
- unitless and relative
- different for each team of estimator
- points are additive (unlike time !!???)
- based on historical reality
- easy to use and understand

Story point values

T shirt sizing, Fibonnacci, double of the one before it.

If estimates are used against you, this is a people problem not a problem with estimates

### Poker planning

Estimate with groups are more accurate than estimate by individuals (example "Who wants to be a Millionaire ?" audience is accurate 91% of the time).

Myth : With more time, estimates get significantly more accurate.

Estimation is expensive.

Why planning poker works ?

- relative sizing
- order of magnitude
- everyone is heard
- find hidden requirements and details
- justification of estimates
- iterative, quick and fun

Rules : each one has a deck of cards, customer/PO reads a story and it's discussed, each estimator selects a card, cards are turned over synchronously, discuss differences (especially outliers), re estimate until estimates converge

Options for handling conflict (aim for consensus not unanimous agreement)

- wait for convergence
- average the estimates
- toss out (jeter) les hauts et les bas
- send the item back to re definition

You could make your own poker planning deck

Reference :

- Blink, the power of thinking without thinking,
- The wisdom of crowds
- Agile estimating and planning
- User stories applied

# Pluralsight - Scrum fundamentals

Origin of Scrum

- article The New New Product Game (Harvard Biz Review)

3 types of process : sequential (type A), overlapping (type B and C)

- Lean manufacturing (Taiichi Ohno) is at the origin of Scrum

Lean manufacturing : Eliminate waste (Muda), Continuous improvement (Kaizen), Go see for yourself (manager should walk the production system to better understand)

- Learning organization (Peter Senge in Fifth discipline) : adaptive to their external environment, enhance/adapt their capability, develop collective learning and use results of learning to achieve better results

Resources : Agile project management with Scrum and The Enterprise and Scrum by Kenn Schwaber

### Principles

Scrum promotes : small working teams, embrace changing requirements, deliver finished work frequently, small batches, enable releasing product whenever required.

Characteristics : activities are time boxed, all project metrics are prominently displayed, multi disciplinary and self organizing teams, no specific engineering practices prescribed, product progresses in a series of sprints, requirements are captured in a product backlog, continuously test product as it is created.

Basic Scrum framework

Scrum is a project mgt technique, one of the Agile practices and is effective way to deliver products.

Scrum in a Nutshell : schedule a demo with the customer, make product to show at the demo, get feedback from the demo and use it to guide the next dev work.

24 hours Scrum is a daily sprint.

### Rôles

3 roles:  PO, team members, Scrum Master

Scrum master serves the team which serves the PO

Chickens and pigs

PO : Is responsible for the ROI, define features of the product, prioritizing, decide on release date, can change features and prio on each iteration, accept or reject iteration results.

Scrum team : 5-9 people, cross functional, members should be full time, teams are self organizing, membership changes only between sprints

Scrum master : represent management to the project, enacting Scrum values and practices, ensure team is fully functional and productive, remove impediments, facilitate meetings, enable close cooperation across, shield the team from external interferences

Artifacts of the Scrum process:

- Product backlog (prioritized complete list of requirements, managed by the PO, single source of truth for requirements, reprio each sprint)

Product backlog item : deliverable, measurable biz value, estimated by the team, may reference other artifacts (large specs, mockups, archi models, etc.), criteria for successful completion

Defining done

Sprint backlog : created by Scrum team, activities for a single Sprint, from product backlog, to do list for the team

Sprint backlog item (tasks): single deliverable or activity, estimation in ideal hours, ideally no more 2 days of work, no minimum size

Sprint backlog : push model (individuals choose, work is never assigned), estimated work remaining is updated daily, any team member can add, delete, change the sprint backlog, if work is unclear break it down later, update work remaining as more becomes known

Sprint burndown chart : show works remaining, updated daily, used by team member to adjust activities, useb by Scrum Master as tactical project management tool

Scrum team velocity : how much value a team delivers (per sprint, over time), inform team when pulling work, used by PO for planning, will vary significantly from one sprint to another

Sprint goals are high level descriptions of the work to be accomplished. Sprint goals are agreed by the team and the PO

### Ceremonies

Sprint planning meeting (what gets done, sprint backlog is created, burndown chart is created)

Sprint planning participants : PO (bring estimated, prioritized PBI, defines done for any ambiguity and answers any question about the work), Scrum master (facilitates the discussion), Team (create the sprint backlog)

Natural to have the sprint ends on Friday and starts on Monday. Time boxed to less than 2 hours, Team select items from the PB they can complete, Scrum Master brings the food...

Create the sprint backlog : select top items they can commit, team identifies all task to deliver PBI, team estimated estimated in ideal hours, does the set of items fit into the sprint ? (if yes add it to sprint backlog, if no discard or negotiate what can be delivered from the PBI), repeat until Sprint backlog is full

Daily Scrum : ideally in the morning to set direction for the day, same time and place each day, timeboxed (typically 15 minutes), Scrum master facilitates, each team member ask 3 questions (what did you do yesterday? what will you do today? what impediments are in your way?) and update sprint backlog and burndown chart. Impediments belong to the Scrum Master (other team hasn't returned the call, server is down and I can't ...., I need a control library to..., No one can sign the contract to get the ...., The ... we ordered isn't here yet). Impediment removal need sometimes access to high level decision makers.

Sprint review : team presents what it accomplished during the sprint, typically takes the form of a demo, informal 2 hour prep time rule, whole team participates, invite the world, feedback informs future work. Post mortem to celebrate and be proud of the work done. Number 1 rule : show your work

Sprint retro

Kaizen part (continuous improvement, discuss what working and not working,  15-30 minutes (??!!), done after every Sprint Review, whole team participates

### Activities

Planning activities : 5 to 15% of team's time, happens continuously during the sprint, facilitated by the PO, account for it when planning the sprint

Sprint : typical duration of 2-4 weeks, non sequential execution (a little of everything rather than all of one thing)

### Scaling Scrum

Scrum of Scrums : a meeting with Scrum masters, used to coordinate the work of multiple Scrum teams, needs executive ownership, ideally attendance, executive may own team impediments, must have people in attendance who can make resource decisions

4 questions : what your team has done since we last met, what will your team do before we meet again, team impediments, put sth in another team's way ?

# Agile planning

## Traditional plans

Good plan is clear, reliable, used and available. Can I explain my plan to my mom ?

Plan activities not deliverables, rely on strict sequencing,

Why we need plans : reduce risk, make informed decisions, reduce uncertainty, ...

Building a traditional plan :

- if biz side dominates : functionality and dates are mandated, little regard if dev understand the requirements, upfront requirements and signoff process
- if techno dominates : technical jargon replace biz language, trade quality for features, partially implement features, make decisions without biz feedback

Cone of uncertainty : variability in the estimate => initial concept (4* to 0.25*). We can't more precise, just more lucky.

Unspoken reality : can't perfectly predict a soft schedule (too many intangibles), can't say what will be delivered (scope should change as new info is uncovered)

## Agile planning

Plan constantly, planning is an activity (not a document), don’t try to control change, encourage it, be constantly transparent, focus on historic perf, changing the plan doesn't mean changing timing

Levels accountability : Product strategy to company vision up to executives, dept leaders and architects

Product roadmap and strategy : product management, PO

Others are for implementation team

### Planning a release

2 basic types of release planning : target date planning or feature target planning

Accurate release plan require a known velocity

Worst velocity : must have items

Best velocity : may have

Product roadmap : focus when release are needed, what functionality is sufficient for each release, focus on biz value

Product release plan : predict what we are to deliver, provide tangible targets of functionality and dates (backed by PB),  used to make reality based decisions

Typical release plan : features per version and quarter

### Product backlog ownership

Themes : an high level grouping of features

Themes could be used as a way to group in one backlog, items that could be handled by different teams. So different views of the same backlog : team view, release view, them view, etc.

### Iteration planning

First day of iteration, timeboxed event, everyone involved is present, plan the next iteration only, to do list for next iteration

Velocity vs commitment based planning :

Velocity based : use average velocity over time (or the one of the last iteration), most useful with long historical record, assume condition are constant across iterations

Commitment based : tam commits based on what they believe to be true right now, likely to lead realistic iterations, uncovers future impediments now, forces team to be deliberate in their thinking

Commitment based iteration planning (idem already seen "create the print backlog")

Ideal time : how long would take if all worked on, no interruptions, everything you need is available, ideal time for football game is 90 minutes (but 2 hours in reality ?)

Sprint backlog items are technical tasks created during sprint planning meeting. About tasks : real work is PBI, tasks don't typically need a lot of detail, items represent a conversation, simply meant to be a TODO item, keep it simple

### Daily plan

Why do this ? Sharing commitment, communicate daily and plans to the teams and observers, identify impediments, set direction and focus, build a stronger team

Not a time to how to remove an impediment but just to raise it

Tips for staying effective : limit to 15 minutes, supportive and respectful, all team members participate and everyone is heard, all pig, everyone walks way with actionable commitments, co locate the team with info radiators.

Information radiators : critical team information, continuously updated, located where the team can see it constantly

Example : a task board, burndown chart, historical view of velocity, build status, nb of defects, passing tests, current code coverage, release plan

More tips to stay effective : focus on the backlog, create a parking lot for follow up later (problem solving, story telling, impediments), signal the end, time the meeting

Keeping fun and interesting : last person to arrive starts the meeting, bring food, fine latecomers (money is spent on the ship party), create a standup duration chart, change the order (draw cards, round robin, pass the token)

Daily standup smells : starting late, missing pigs, someone dominate the meeting, chicken talks, socializing, impediments aren't raised or resolved (SM must follow through), story teller

# Enterprise Scrum

Scrum of Scrums

Scrum meeting for Scrum masters, not need to occur daily, attendees must be able to move resource decisions (so may include org leaders)

Problems are solved, team impediments are solved, coordinate the work of multiple Scrum teams (dependencies, shared deliveries, integration)

Time boxed 15 min => 4 questions : what your team has done since we last met, what will your team do before we meet again, team impediments, put sth in another team's way ?

Not time boxed : remove impediments, sync up activities

A Scrum of Scrums of Scrums is possible id it's getting bigger

Meta Scrum : executive level Scrum, Scrum of Scrum reports are heard, follows Sprint review; executives own impediments, less often than Scrum of Scrum

Change the executive service model : model is inverted compared in usual organization, executive serve their directs

### Multiple or large backlogs

Epics are very large backlog items : may be estimated, level of detail is low, to be decomposed later in smaller PBI

Example of Epics : As HR department, I want a website so potential candidates can submit resumes

Themes : group of PBI, take the place of Epics after decomposition, a way to distribute Epics across teams

Keep Product Backlog to a reasonable size (constant grooming, attention to each view), PO must be current with all items (people can only track 100-150 items, electronic systems are able to track more but people matter more), use Epics and Themes to organize

Rolling backlog planning : estimated PBIs (next next and next sprints), understood PBIs (next release PBIs)

### Scrum in a plan drive organization

co existence models : waterfall in the end (irritating, for example handoff to a team for release), waterfall up front (painful lot of paperwork done before starting), waterfall in tandem (deadly)

Waterfall in the end : often to accommodate testing, operational support handoff (transfer), regulatory compliant process, will require more documents (a sprint with a release goal), consider inviting the other team in

Waterfall up front : gain project approval, use Scrum to create the docs needed (Specifications, project plan, etc.), use specification document as the product backlog

Waterfall in tandem : 2 teams must collaborate and 1 uses Scrum and 1 uses plan driven. Scrum team : invite the other team, be transparent and not pushy (decrease com)

If Scrum must co exist : try submitting Agile metrics along with other required ones, add PBIs for documents (and analysis activity, checklists or other plan driven deliverable)

### Measurements

Standard Scrum : release burndown, sprint burndown, historical velocity

Other agile metrics : defect count, Sprint cumulative flow (total work to deliver a Sprint over time, rate at which team complete sprint backlog, amount of work in progress), Product backlog depth (long product backlog are wasted work, 150 items is a ceiling, 3 sprint of items is a floor)

Sprint Cumulative flow : not done, in progress, ready for test, done

Earned value burn up : time in X axis and Earned value in Y axis

Code focuses metrics : code coverage, cyclomatic complexity, defect density (defects per line of code)