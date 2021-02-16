---
title: 'Reflections on Pacman AI Competition'
date: 2021-02-16
permalink: /posts/2021/02/reflections_on_pacman_ai_competition/
tags:
  - machinelearning
  - reinforcementlearning
  - pacman
---

Towards the end of last year I had the pleasure to compete in the Pacman CTF competition that was run as part of the COMP90054 course during Semester 2 2020 at the University of Melbourne (the contest is described in further detail [here](http://ai.berkeley.edu/contest.html)).

In accordance with the *COMP90054 Code of Honour*, we are not allowed to release the code that we used for our agents, but nonethless I would like to use this blog post to discuss which approaches we considered and which we found to perform best in the competition. 

If you are interested in further details, please refer to the Wiki that is part of the following repository: [COMP90054-Pacman-Competition](https://github.com/Bachfischer/COMP90054-Pacman-Competition/wiki)


At the beginning of the competition, we experimented with a variety of techniques such as **classical planning with PDDL** or **value iteration using a model-based MDP**. In the interest of time (the competition took approx. 6 weeks), we decided to settle on two main approaches with which we competed in the tournament and achieved satisfying results (top 10% position in the leaderboard).

These two approaches were:
<b>
1. Approximate Q-Learning
</b>
<b>
2. Behaviour Trees with A* Heuristic Search
</b>

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
