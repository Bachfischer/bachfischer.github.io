---
title: "Testing the Robustness of Learned Index Structures"
collection: publications
permalink: /publication/2022-07-26-testing-robustness-of-learned-index-structures
date: 2022-07-26
venue: 'https://arxiv.org/abs/2207.11575'
citation: 'Bachfischer, M., Borovica-Gajic, R., & Rubinstein, B. I. P. (2022). Testing the Robustness of Learned Index Structures'
---
While early empirical evidence has supported the case for learned index structures as having favourable average-case performance, little is known about their worst-case performance. By contrast, classical structures are known to achieve optimal worst-case behaviour. 

This work evaluates the robustness of learned index structures in the presence of adversarial workloads. To simulate adversarial workloads, we carry out a data poisoning attack on linear regression models that manipulates the cumulative distribution function (CDF) on which the learned index model is trained. The attack deteriorates the fit of the underlying ML model by injecting a set of poisoning keys into the training dataset, which leads to an increase in the prediction error of the model and thus deteriorates the overall performance of the learned index structure. 

We assess the performance of various regression methods and the learned index implementations ALEX and PGM-Index. We show that learned index structures can suffer from a significant performance deterioration of up to 20% when evaluated on poisoned vs. non-poisoned datasets. 

[Download paper here](https://arxiv.org/abs/2207.11575)