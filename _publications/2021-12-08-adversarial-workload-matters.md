---
title: "M.Sc. Thesis: Adversarial Workload Matters - Executing a Large-Scale Poisoning Attack against Learned Index Structures"
collection: publications
permalink: /publication/2021-12-08-adversarial-workload-matters
date: 2021-12-08
venue: 'M.Sc. Thesis - The University of Melbourne'
citation: 'Bachfischer, M. (2021). Adversarial Workload Matters - Executing a Large-Scale Poisoning Attack against Learned Index Structures'
---
Databases rely on indexes to quickly locate and retrieve data that is stored on disks. While traditional database indexes use tree data structures such as B+ Trees to find the position of a given query key in the index, a learned index structure considers this problem as a prediction task and uses a machine learning model to "predict" the position of the query key. This novel approach of implementing database indexes has inspired a surge of recent research aimed at studying the effectiveness of learned index structures. However, while the main advantage of learned index structures is their ability to adjust to the data via their underlying ML model, this also carries the risk of exploitation by a malicious adversary.

In this work, the results from executing a large-scale poisoning attack on dynamic learned index structures are presented. The poisoning attack used in this research targets linear regression models and works by manipulating the cumulative distribution function (CDF) on which the model is trained. The attack deteriorates the fit of the underlying ML model by injecting a set of poisoning keys into the dataset, which leads to an increase in the prediction error of the model and thus deteriorates the overall performance of the learned index structure.

The effectiveness of the poisoning attack described in this research is evaluated against three index implementations by measuring their throughput in million operations per second. The evaluated indexes consist of two learned index structures ALEX and Dynamic-PGM as well as a traditional B+ tree. For each index, its performance on a variety of real-world datasets and workload scenarios is measured. The experimental results show that learned index structures can exhibit a performance deterioration of up to 20% when evaluated on the poisoned vs. non- poisoned datasets. Contrary to that, the B+ tree does not exhibit any performance deterioration when evaluated on the poisoned datasets. This shows that learned index structures are not robust to adversarial workload and can be manipulated by an adversary to achieve significant slow-down compared to traditional data structures.

[Download thesis here](/files/Adversarial_Workload_Matters-Thesis_vF.pdf), [Download presentation here](/files/Adversarial_Workload_Matters-Presentation_vF.pdf)