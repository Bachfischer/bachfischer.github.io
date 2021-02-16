---
title: 'Reflections on Pacman AI Competition'
date: 2021-02-18
permalink: /posts/2021/02/reflections_on_pacman_ai_competition/
tags:
  - machinelearning
  - reinforcementlearning
  - pacman
---

Towards the end of last year, I had the pleasure to compete in the Pacman CTF competition that was run as part of the COMP90054 course during Semester 2 2020 at the University of Melbourne (the contest was originally designed by Berkley and is described in further detail [here](http://ai.berkeley.edu/contest.html)).

In accordance with the *COMP90054 Code of Honour*, we are not allowed to release the code that we used for our agents, but nonethless I would like to use this blog post to discuss which approaches we considered and which we found to perform best in the competition. 

If you are interested in further details, please refer to the Wiki that is part of the following repository: [COMP90054-Pacman-Competition](https://github.com/Bachfischer/COMP90054-Pacman-Competition/wiki)


At the beginning of the competition, we experimented with a variety of techniques such as **classical planning with PDDL** or **value iteration using a model-based MDP**. In the interest of time (the competition took approx. 6 weeks), we decided to settle on two main approaches with which we competed in the tournament and achieved satisfying results (top 10% position in the leaderboard).

These two approaches were:
**1. Approximate Q-Learning**
**2. Behaviour Trees with A-Star Heuristic Search**

In the remainder of this blog post, I would like to talk about the various advantages and disadvantages of both techniques.


## 1. Approximate Q-Learning

### Motivation

The motivation for this approach was to produce approximate Q-learning agent(s) (both offensive and defensive) which learns feature-weights of states (described below) that enable the agent to act within the Pacman contest environment. 

### Theory

**Approximate Q-Learning** is a means of approximating the Q-functions used in traditional/simple Q-learning. This method utilises reward shaping (providing an agent with useful, intermediate rewards) in addition to function approximation in order to reduce a once-exponentially large state space into a more feasible domain. This is done by:

1. **Extracting features deemed necessary for the problem task;**

2. **Performing updates on the weights of said features;**

3. **Estimating Q-values by summing features and their weights.**

### Trade-offs

#### Advantages:

- Enables the feasible implementation behind Q-learning without the exponentially-increasing domain size problem, i.e. reduces the size of the Q-table.
  - This advantage is especially salient given the 1 second time restriction for agent actions: our agents do not have the time, nor the computational  capability, to run simple Q-learning.
- Forces consistent behaviour patterns, i.e. agents using Q-learning are more likely to act in a consistent manner in similar situations (chasing an enemy, eating food, running from an enemy, etc.).
- Allows the designers to play a hand in deciding which aspects of states within the Pacman environment are important for our agent, i.e. closest food to agent? Number of enemies within a certain radius? These features are all programmable into our feature vectors.

#### Disadvantages:

- Requires complex feature extraction, the success of which is determined purely by trial and error; domain-knowledge; research papers; intuition; etc.
  - Additionally, this reduces the so-called "generality" of our agent, as human-input in the form of domain-knowledge is required to implement approximate Q-learning.
- The accuracy of rewards is reduced as the true/optimal reward function may not be linearly formed within the features extracted.

### Implementation

#### Behaviour Tree:

![Behaviour Tree](https://user-images.githubusercontent.com/50134351/96994136-fa538080-1577-11eb-803d-0e8ef5d94d06.PNG)

#### Evolution:

- This agent, in its initial form, was coded to investigate the performance of using A\* heuristic search plus a simple decision tree, as well as to provide a baseline performance for comparison for the other agents which were being investigated at the time.
- From then onward, different ideas for improvement were investigated and, one after another, this agent's performance in the competition increase; there improvements arose from questions such as:
  - Can we prevent our agent from being eaten when they search for food?
  - What should our agent to when no optimal action exists?
  - How can our agent avoid a deadlock with an enemy agent?
  - How should our agent act knowing it will be eaten?
- The major challenge in programming this agent was in the design its behaviour protocols (see **Gameplay** below); this process required extensive research which began with investigating the simple mechanics of the baseline agent, and ended with devising complex strategies to combat smarter opponents (inspiration of which was gleaned from other agents being built at the time, as well as wider research papers on the topic).

#### Gameplay:

- This agents acts as a dual offensive-defensive agent, however if focuses primarily on offensive strategies. Thus, the agent immortalises the saying *"the best defence is a good offence"*.
- The agent general strategies are controlled by behaviour tree-like mechanisms (see **Behaviour Tree** above).
- The agent acts in one of five various ways depending on the environment and its past actions, each of which have been generalised/simplified below:
  1. **Eat enemy food:** basic offensive strategy to find nearest food (acting in consideration of teammate's position)
  2. **Find different attack path:** secondary offensive strategy to find point of attack farthest away from current position
  3. **Return home:** agent finds shortest path to home territory
  4. **Escape:** primary evasive strategy to avoid enemy ghost (returns home; eats capsule; etc.)
  5. **Defend remaining food:** sole defensive strategy to chase enemy offensive agents in territory

The following is a list of improvements that eventually became the behaviour protocols to which we attribute the agent's success:

- **Different Path Protocol:** agent finds different path (than current) to attack enemy agents
- **Enemy Avoidance Protocol:** agent avoids enemies when searching for paths to food

![Enemy Avoidance Protocol](https://user-images.githubusercontent.com/50134351/97100460-e890eb00-16e7-11eb-9ad1-2ef84c3091ea.gif)

- **DRP (Don't Repeat the Past) Protocol:** agent finds different attack path if performing repeated actions

![DRP Protocol](https://user-images.githubusercontent.com/50134351/97100764-293e3380-16eb-11eb-8f5b-b80b3aa21979.gif)

- **Last Resort Protocol:** agent consumes capsule if it cannot return home whilst being chased

![Last Resort Protocol](https://user-images.githubusercontent.com/50134351/97100256-ba121080-16e5-11eb-8e60-cbb6ccb85c06.gif)

### Further Improvements:

- Investigation into game theory with regards to multi-agent systems could have provided further insight into better strategies.
- Possible integration with approaches other than A\* heuristic search may have provided overall better agents.
- Investigation into developing a more balanced team, i.e. designing both an offensive and defensive agent, may have yielded better competition results.


## 2. Behaviour Trees with A* Heuristic Search

### Motivation

The motivation for this approach was to produce an agent which uses behaviour trees as well as A* heuristic search to accomplish different goals within the Pacman contest environment.

### Theory

**Behaviour trees** are trees containing hierarchical nodes which control the flow of decision making of agents. These trees are defined as directed acyclic graphs with internal nodes corresponding with events/stimuli, and external nodes corresponding with behaviours (in contrast with hierarchical state machines whereby stimuli leads to states, rather than behaviours). The image below illustrates a simplistic behaviour tree for a two-armed robot (By Aliekor at English Wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=39804218):

![BT_search_and_grasp](https://user-images.githubusercontent.com/50134351/96334793-0d210d80-10bf-11eb-990e-9f2df0065607.png)

**A\*  ("A star")** is a heuristic search algorithm which generates a lowest-cost path tree from the start node to the goal node. A\* utilises a function *f(n)* which provides an estimate of the total cost of a path from node *n*. The function *f(n)* is calculated as *f(n) = g(n) + h(n)*, whereby *g(n)* is the cost to reach node *n*, and *h(n)* is the estimated cost from *n* to the goal node (requiring a heuristic cost function). A* is complete for safe heuristics and optimal for admissible heuristics.

### Application

An agent utilising a behaviour tree would be able smart and informed decisions which have been pre-programmed by the agent-designer. Possibilities for evolving behaviour would stem from manual supervision of matches in an effort to assess which stimuli should trigger certain behaviours. 

### Trade-offs

#### Advantages:

- Behaviour trees can be programmed once and then can be used right away, i.e. behaviour tree implementation requires no pre-match training.
- Decisions can be informed by human intervention, effectively bestowing outsider knowledge/strategies onto the agent.
- Behaviour trees are so extremely effective in controlling agents within gaming environments (i.e. NPCs), that their usage is mainstream within the gaming AI community at large.
- Behaviour trees can be used in conjunction with AI decision making approaches (e.g. if A, then perform Monte Carlo Tree Search)
- A\* is complete for safe heuristics; optimal for admissible heuristics.
- Easy to quickly code an A\* algorithm.

#### Disadvantages:

- Behaviour trees require domain-knowledge to be hard-coded by the agent-designer, i.e. the agent is only as good as the agent-designer.
- Behaviour trees are really an instance of AI decision-making.
- A\* can be slow depending on which heuristic is used and the size of the search space; worst-case time complexity is *O(b^d)* (*b* = branching factor; *d* = goal depth). Additionally, it's worst-case space complexity is also *O(b^d)* (which consumes a lot of memory).

### Implementation

#### Evolution:

- Agent 2 was initially planned to implement Classical Q-Learning approach, however both our testing and the research showed that this approach is better suited for very small grids (i.e. was not scalable to larger domains).
- After realising this, developing an agent utilising Deep Q-Learning was considered, however this approach was also unfeasible given the 15-second training time before each match being insufficient to train a deep neural network.
- Thus, Approximate Q-Learning was the only Q-Learning option left, and a rudimentary agent utilising this approach was designed in conjunction with tried and tested methods within the Pacman AI game literature available online.
- The development of Agent 2 into a more competent Pacman agent almost solely revolved around the trial and error regarding which features should be extracted in order to accurately represent the agent's surrounding environment as effectively as possible (these features are described in **Gameplay** below).
- The main challenge with Agent 2 is that the approximated Q-value was not proven to converge for all feature functions. Theoretically, the calculated Q-value (once converged) will be an optimal approximation of the optimal Q-value with regard to the choice of the feature function. 
- This leads to the secondary challenge of finding an appropriate feature function which provides an optimal representation of the agents' domain. By doing so, the resulting policy will be optimal, however, this task was far from trivial and was eventually abandoned.

#### Gameplay:

- Agent 2 consisted of two separate sub-class agents: an offensive agent and a defensive agent, i.e. an agent acting as a Pacman and an agent acting as a ghost, respectively.
- The general strategy of this agent can be described as a balanced approach, possessing explicit offensive and defensive agents. 
- These two agents differed in their initial parameters and the features extracted to represent their surrounding environment; the specifics of which are explored in the subsections below.

##### Offensive Agent:

Features:

- **Bias:** weight bias
- **Successor score:** score value based on whether food is available in possible moves
- **Number of ghosts one step away:** calculates number of enemy ghosts one step away from agent
- **Distance from closest ghost:** calculates distance of closest ghost from agent
- **Distance from closest food:** calculates distance of closest food from agent
- **Whether agent is home:** whether agent is within home territory or not

Other parameters:

- **Carry Limit:** indicates the amount of food the agent (Pacman) should carry
- **Power Limit:** indicates whether it is safe to approach enemy ghosts after having eaten a power capsule

##### Defensive Agent:

Features:

- **Bias:** weight bias
- **Number of invaders:** calculates number of invaders (enemy Pacman) within home territory
- **Distance from middle:** calculates distance of the middle of the map from agent
- **Distance from closest invader:** calculates distance of closest invader (enemy Pacman) from agent
- **Scared distance:** distance of the closest invader from scared agent

Additionally, the training hyper-parameters (how will the agent's Q-function be structured? i.e. how will the agent learn? what are its priorities?), were tuned in an effort to optimise training for both agents; hyper-parameters described below:

- **Learning rate (alpha):** to what extent will new information be weighted higher than old information.
- **Exploration rate (epsilon):** to what extent will the agent explore actions versus exploit best-known actions.
- **Discount rate (gamma):** to what extent will a feature reward be discounted compared to a current reward.

#### Further Improvements:

- Investigation into a larger set of features / performing a comprehensive analysis would provide more concrete indication of how each feature contributes to possible increase in win rates.
- Investigation into the use of auxiliary rewards for agents.
- Another possible improvement would be the combination of using Approximate Q-Learning in conjunction with another AI method.