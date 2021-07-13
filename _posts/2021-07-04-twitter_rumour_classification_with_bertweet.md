---
title: 'Twitter Rumour Classification with BERTweet'
date: 2021-07-04
permalink: /posts/2021/07/twitter_rumour_classification_with_bertweet/
tags:
  - machine learning
  - natural language processing
  - COMP90042
---

In this blog post, I would like to present my submission to the **COMP90042 Natural Language Processing Project** at the University of Melbourne (Semester 1 2021).

![Transformers Logo](/images/transformers_logo.png)

The task of the project was to 
* Develop a system for rumour identification (task 1) and
* Analyze the nature of rumours that are being propagated on Twitter (task 2).

The dataset for the project was published by the COMP90042 teaching team and consisted of a set of source tweets and their replies (incl. corresponding metadata) that had been extracted from the Twitter API. In total, the training data consisted of *4641 events* that had been labeled as either *RUMOUR or NON-RUMOUR (binary classification)*.

For this project, I have implemented three classification systems: 

1. A BERT-based implementation that uses the textual representation of tweets (called *"PureBERT"*)
2. An extension of the *PureBERT* architecture that combines the textual features with tabular data (called *"MultimodalBERT"*)
3. A language model that has been pre-trained on a large corpus (850 million) of English Tweets (called *"BERTweet"*).

Using the best-performing model *BERTweet*, I managed to achieve a **F1 score of 86.17%** (which put me on rank 12 out of 308 participants in the final competition). 

A detailed write-up of the implementation details (pre-processing routine etc.) for the models mentioned above is available [here](https://github.com/Bachfischer/COMP90042-Rumour-Detection-on-Twitter/blob/master/BERT_based_Rumour_Identification_and_Analysis_for_Twitter_Posts.pdf), **and if you are interested in further details, please refer to the following repository:**
[COMP90042-Rumour-Detection-on-Twitter](https://github.com/Bachfischer/COMP90042-Rumour-Detection-on-Twitter)

**I have also used BERTweet to participate in the "Disaster Tweets" Kaggle challenge. The notebook is available here:**
[Disaster Tweets - BERTweet](https://www.kaggle.com/matthiasbachfischer/disaster-tweets-bertweet)

---


