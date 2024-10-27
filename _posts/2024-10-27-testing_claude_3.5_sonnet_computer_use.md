---
title: 'Testing Claude 3.5 Sonnet Computer Use Demo'
date: 2024-10-27
permalink: /posts/2024/10/testing_claude_3.5_sonnet_computer_use/
tags:
  - genai
  - claude
  - anthropic
  - interview
---

Today I experimented with Anthropic's Claude 3.5 Sonnet using their [Computer Use Demo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo#accessing-the-demo-app). To evaluate its capabilities, I presented it with a task typical of entry-level data science technical interviews.

The Computer Use Demo operates in a Docker container that provides access to predefined tools (browser, code interpreter, etc.). While the model doesn't directly control the computer, it has been trained to interpret screen content and generate appropriate tool instructions. Below is a screenshot of the interface:

![Claude- 3.5 Sonnet Computer Use Demo](/images/claude_3.5_sonnet_computer_use.png)

This is the prompt I used:
```text
1. Download the parquet file hosted at https://openml1.win.tue.nl/datasets/0004/41214/dataset_41214.pq
2. Install sklearn with bash tool 
3. Write a .py file read in the data and split it into train and test 
4. Train a model of your choice to predict the mean claim amount `AvgClaimAmount` (you may need to inspect the data and/or iterate if this goes poorly at first, but don't get discouraged!). 
5. Perform hyperparameter optimization to find the best model.
6. Interpret the result scores and come up with some way to visualize the results in the browser.
```

I had some initial issues with timeouts of the execution environment (likely due to the dataset's size of approximately 680,000 entries), but after I asked the model to train on only 30% of the data, it worked like a charm.

Below is a summary of the results by Claude. I have also pasted the code it wrote into [this gist](https://gist.github.com/Bachfischer/776783d09ea6079c801b7b152ba632bf).

```text
Let me summarize the results and provide some insights:

    Model Performance:
        R-squared Score: 0.0817 (8.17%)
        Mean Absolute Error: 0.5302
        Root Mean Squared Error: 5.0768

    Feature Importance (top 5):
        Vehicle Age (21.01%)
        Exposure (17.69%)
        Density (16.01%)
        Region (13.67%)
        Driver Age (11.70%)

    Insights:
        The model's performance is relatively weak (R² = 0.0817), suggesting that predicting claim amounts is a challenging task with the given features
        Vehicle Age is the most important predictor, followed by Exposure and Density
        Area (location) has surprisingly little impact on predictions
        Vehicle-related features (Age, Power, Brand) collectively account for about 30% of the prediction power

Recommendations for improvement:

    Feature Engineering:
        Create interaction terms between related features (e.g., VehAge * VehPower)
        Bin continuous variables into categories
        Create new features combining demographic and vehicle information

    Model Improvements:
        Try other algorithms (Random Forest, XGBoost)
        Perform more extensive hyperparameter tuning
        Consider treating this as a classification problem (binning claim amounts)
        Handle potential class imbalance in the target variable

Would you like me to:

    Implement any of these improvements?
    Try a different modeling approach?
    Generate additional visualizations to better understand the data?
    Perform more detailed analysis of specific features?

Please let me know how you'd like to proceed!
```

## A Critical Reflection on Technical Interviews

The results are remarkable not just for their technical merit, but for what they reveal about technical assessment practices. In approximately five minutes, Claude 3.5 Sonnet successfully:

- Processed and analyzed a complex dataset
- Implemented a machine learning pipeline
- Provided thoughtful model interpretations
- Suggested sophisticated improvements

This raises questions about the effectiveness of traditional live coding assessments in technical interviews. When AI systems can rapidly complete such tasks while providing insightful analysis, we may need to reconsider how we evaluate a candidates' capabilities. The focus should shift from basic implementation skills to higher-order thinking, problem-solving approaches, and the ability to critically evaluate and improve upon initial solutions.

The future of technical assessment may lie not in testing whether a candidate can implement basic solutions under pressure, but in evaluating their ability to think strategically about problem-solving approaches, understand trade-offs, and improve upon initial implementations – skills that remain distinctly human despite rapid AI advancement.