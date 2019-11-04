# Complex Span Task

## Description

**Working Memory** is a critical component of human cognition and can be defined as the ability to store and process information simultaneously.

A **complex span task** is the commonly used tool by researchers and practitioners to assess working memory capacity; it does so by interleaving 
to-be-recalled material with processing tasks. One example would be to have participants read a series of sentences and deciding whether they were correct
while remembering the last word of each sentence for serial recall at the end of each trial (Daneman & Carpenter, 1980).

However, research and clinical settings currently face a few issues regarding the use of complex span tasks:
- The main problem with complex span tasks is whether they are measuring what they should be (i.e. working memory capacity). Many studies operationalize
the interleaved processing tasks as a binary yes/no response - this encourages random guessing and fails to maximize cognitive load.
- Multiple complex span tasks are often used in one single session, which results in increasing fatigue for participants. 

## Aim

The goal is to build a **short, single task** that measures working memory capacity. We aimed to move away from the use of large-number-trials, 
multiple span tasks to reduce proactive interference throughout successive tasks, as this can significantly compromise the accurate assessment
of working memory capacity.

## How to use

### Requirements

Softwares needed:
- PsychoPy (https://www.psychopy.org/download.html)
- R 3.6.1 (https://cran.r-project.org/bin/windows/base/)
- R Studio (https://rstudio.com/products/rstudio/download/)

Packages needed in R:
- tidyverse
- ggplot2
- see

### Run the task

1. Download and open the experiment in Psychopy (source("https://github.com/neuropsychology/ComplexSpan/blob/master/psychopy/task.psyexp")
2. Click on the green button to begin the task
3. Enter participant number and session number 
4. Run task (instruct participants not to press "Enter" at any point during the task unless required, as the experiment would quit if so)
5. Task outputs 3 files: an excel file, a text document, and a psydat file

### Preprocess the data

Open R studio and start by running the following:

```r
# Download the function used to preprocess the data
source("https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/preprocessing.R")
source("https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/processing.R")
```
# Set Path in R
First, set your working directory to source file location (Session > Set Working Directory > To Source File Location)
Create a folder in your working directory (e.g."data") and create the path for your data.
E.g. path_to_csv <- "./data/"

This will allow you to use the functions created to preprocess the datafile. You can then simply run:

```r
preprocess_WM(path_to_csv)
process_WM(path_to_csv)
```

### Task Components

This is a Psychopy implementation of a composite complex span task adapted from Gonthier et al. (2015). It comprises of 2 components, the simple span
and the complex span.

- **Simple Span**: Presentation of consonants to be remembered
  - Consonants to remember
  - Set size increases after 2 correct answers in a set size
  - Simple span determined as set size attained after 3 incorrect answers

-**Complex Span**: Components include 1) a processing block for practice on arithmetic operations, 2) a short practice complex span task to 
familiarize participants with the task, and 3) the actual complex span task
  - **Processing**: open-ended arithmetic operations to respond to
    - All correct answers are one-digit
    - Feedback provided with each processing trial
    - Processing block to repeat if cumulative score attained < 65%

  - **Complex Span Practice**
    - Consonant presented after each correctly-answered arithmetic operation (if incorrectly answered, a new arithmetic operation is presented)
    - Set size of 2 only
    - Feedback provided with each processing trial and each recall trial
    - Block ends after 3 consecutive correct recall

  - **Complex Span Task**
    - Consonant presented after each correctly-answered arithmetic operation (if incorrectly answered, a new arithmetic operation is presented)
    - No feedback provided
    - Start with set size of 2; set size increases by 1 with each correct recall
    - Block ends after 3 consecutive wrong recall

### Pre-processing

The R code provided (preprocessing.R) only preprocesses the simple span and complex span components.

### Figures

The R code make_figures.R produces the following figures.

![Span Size of Participants](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Participant_SpanSize.png)
![Correct Recall across Set Size](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/SetSize_RecallCorr.png)
![Correct Processing across Set Size](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/SetSize_ProcessingCorr.png)
![Processing RT across Set Size](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/SetSize_ProcessingRT.png)
![Correct Proportion of Distractors](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Distractor_Correct.png)
![RT of Distractors](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Distractor_RT.png)
![RT vs Correct Proportion of Distractors](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Distractor_RTvsCorrect.png)
