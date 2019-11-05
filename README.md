# Complex Span Task

*Adaptation and implementation by [Lau, Z. J.](https://github.com/zen-juen), [Pham, T.](https://github.com/Tam-Pham), & [Makowski, D.]()*

## Description

**Working Memory** is a critical component of human cognition and can be defined as the ability to store and process information simultaneously.

A **complex span task** is the commonly used tool by researchers and practitioners to assess working memory capacity; it does so by interleaving 
to-be-recalled material (e.g., digits, letters, visual patterns) with processing tasks (e.g., verbal, spatiovisual). One example would be to have participants read a series of sentences and deciding whether they were correct
while remembering the last word of each sentence for serial recall at the end of each trial (Daneman & Carpenter, 1980).

However, research and clinical settings currently face a few issues regarding the use of complex span tasks:
- Whether they are measuring what they should be (i.e. working memory capacity); many studies operationalize
the interleaved processing tasks as a binary yes/no response - this encourages random guessing and fails to maximize cognitive load.
- Multiple complex span tasks are often used in one single session, which results in increasing fatigue for participants. 

## Aim

The goal is to build a **short, single task** that measures working memory capacity. We aimed to move away from the use of large-number-trials, 
multiple span tasks to reduce proactive interference throughout successive tasks, as this can significantly compromise the **accurate assessment**
of working memory capacity.

## How to use

### Requirements

Softwares needed:
- PsychoPy (https://www.psychopy.org/download.html)
- R 3.6.1 (https://cran.r-project.org/bin/windows/base/)
- R Studio (https://rstudio.com/products/rstudio/download/)

Packages needed in R:
- [tidyverse](https://cran.r-project.org/web/packages/tidyverse/index.html)
- [easystats](https://github.com/easystats/easystats)

### Run the task

1. Download and open the experiment in Psychopy: source("https://github.com/neuropsychology/ComplexSpan/blob/master/psychopy/task.psyexp")
2. Click on the green button to begin the task
3. Enter participant number and session number 
4. Run task
- Instruct participants not to press "Enter" at any point during the task unless required, as the experiment would quit if so
5. Task outputs 3 files: a csv file, a text document, and a psydat file

### Preprocess the data

Open R studio and start by running the following:

```r
# Download the function used to preprocess the data
source("https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/preprocessing.R")
source("https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/processing.R")
```
Then, **set your working directory** to the source file location (Session > Set Working Directory > To Source File Location).
Create a folder in your working directory called "data" and **create the path** for your output csv file
-  E.g., path_to_csv <- "./data/pilot_1.csv"

This will allow you to use the functions created to preprocess the datafile. You can then simply run:

```r
preprocess_WM(path_to_csv)
# This creates a single dataframe for the participant comprising of the simple span and complex span task components.

process_WM(path_to_csv)
# This creates 3 dataframes:
# The participant's span scores and mean reaction time of the processing trials;
# The participant's proportion of correct recall, mean processing reaction time, and proportion of correct processing across set sizes;
# The participant's mean processing reaction time and proportion of correct processing across different distractors 
```

To create **figures**, create a folder called "figures" in your working directory and download the make_figures.R file; running the code will save the figures in this folder.
- source("https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/make_figures.R")


### Task Components

This is a **Psychopy implementation** of a **composite complex span task** adapted from Gonthier et al. (2015). It comprises of 2 components, the simple span
and the complex span:

**Simple Span**: Presentation of consonants to be remembered
  - Consonants to remember
  - Set size increases after 2 correct answers in a set size
  - Simple span determined as set size attained after 3 incorrect answers

**Complex Span**: Components include the following:
  - **Processing**: Practice block containing open-ended arithmetic operations to respond to
    - All correct answers are one-digit
    - Feedback provided with each processing trial
    - Processing block to repeat if cumulative score attained < 65%

  - **Complex Span Practice**: Practice block containing open-ended arithmetic operations and to-be-recalled consonants
    - Consonant presented after each correctly-answered arithmetic operation (if incorrectly answered, a new arithmetic operation is presented)
    - Set size of 2 only
    - Feedback provided with each processing trial and each recall trial
    - Block ends after 3 consecutive correct recall

  - **Complex Span Task**: Test block containing open-ended arithmetic operations and to-be-recalled consonants
    - Consonant presented after each correctly-answered arithmetic operation (if incorrectly answered, a new arithmetic operation is presented)
    - No feedback provided
    - Start with set size of 2; set size increases by 1 with each correct recall
    - Block ends after 3 consecutive wrong recall

### Figures

These graphs were produced by make_figures.R

![Span Size of Participants](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Participant_SpanSize.png)
![Correct Recall across Set Size](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/SetSize_RecallCorr.png)
![Correct Processing across Set Size](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/SetSize_ProcessingCorr.png)
![Processing RT across Set Size](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/SetSize_ProcessingRT.png)
![Correct Proportion of Distractors](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Distractor_Correct.png)
![RT of Distractors](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Distractor_RT.png)
![RT vs Correct Proportion of Distractors](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Distractor_RTvsCorrect.png)
