# Psychopy Implementation of the Complex Span Task

![Credits](https://zenodo.org/badge/doi/10.5281/zenodo.3529329.svg)


![](WM.gif)

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


## Task Components

This is a **Psychopy implementation** of a **composite complex span task** adapted from [Gonthier et al. (2015)](https://link.springer.com/article/10.3758/s13428-015-0566-3). It comprises of 2 components, the simple span
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
    - There is a time limit (mean RT + 2.5 standard deviations of the processing practice trials) on the processing trials where the next arithmetic operation is presented if no answer is given and the trial is recorded as incorrect
    - Set size of 2 only
    - Feedback provided with each processing trial and each recall trial
    - Block ends after 3 consecutive correct recall

  - **Complex Span Task**: Test block containing open-ended arithmetic operations and to-be-recalled consonants
    - Consonant presented after each correctly-answered arithmetic operation (if incorrectly answered, a new arithmetic operation is presented)
    - There is a time limit (mean RT + 2.5 standard deviations of the processing practice trials) on the processing trials where the next arithmetic operation is presented if no answer is given and the trial is recorded as incorrect
    - No feedback provided
    - Start with set size of 2; set size increases by 1 with each correct recall
    - Block ends after 2 consecutive wrong recall


## Preprocess the Data

Open R studio and start by running the following:

```r
# Download the function used to preprocess the data
source("https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/preprocessing.R")
source("https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/processing.R")
```
Then, **set your working directory** to the source file location (Session > Set Working Directory > To Source File Location).
Create a folder in your working directory called "data" and **create the path** for your output csv file, for example:

```r
path_to_csv <- "./data/pilot_1.csv"
```

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

### Example: Preprocess data for several participants

```r
# ---- Example Script ---- #
# > getwd()
# [1] "/Users/lauzenjuen/Documents/GitHub/ComplexSpan/statistics"

# Load packages
library(tidyverse)
library(easystats)

# Load functions
source("preprocessing.R")
source("processing.R")

# Combine Data Frames
data <- data.frame()
data_subject <- data.frame()
data_within <- data.frame()
data_distractors <- data.frame()

for(participant in list.files("./data/")){
  data <- rbind(data, preprocess_WM(paste0("./data/", participant)))
  
  processed <- process_WM(paste0("./data/", participant))
  data_subject <- rbind(data_subject, processed$between)
  data_within <- rbind(data_within, processed$within)
  data_distractors <- rbind(data_distractors, processed$distractors)
}

data_subject  # produces a table of scores across participants
```
![image](https://github.com/neuropsychology/ComplexSpan/assets/54053748/015b1746-b9fb-40da-8081-a3856a9b5d16)

## Scoring Schemes

The analysis script computes scores according to different scoring schemes as per [Conway et al. (2005)](https://link.springer.com/content/pdf/10.3758/BF03196772.pdf)

1. **Partial-Credit Unit Scoring (PCU)**: Mean proportion of elements within an item that were recalled correctly
2. **All-or-Nothing Unit scoring (ANU)**: Proportion of items for which all elements were recalled correctly
3. **Partial-Credit Load Scoring (PCL)**: Sum of correctly recalled elements from all items, regardless of whether the items are perfectly recalled or not (also without respect to serial order within items)
4. **All-or-Nothing Load Scoring (ANL)**: Sum of correctly recalled elements from only the items in which all elements are recalled in correct serial order

### Credits

This task can be referenced as follows:

- Lau, Z. J., Pham, T. T., Makowski, D., & S H Chen, A. (2019). *A Psychopy Implementation of the Complex Span for Working Memory Assessment*. Retrieved from http://doi.org/10.5281/zenodo.3529329

```
@misc{complexspan2019,
  title={A Psychopy Implementation of the Complex Span for Working Memory Assessment},
  author={Lau, Zen J and Pham, Thanh T and Makowski, Dominique and S H Chen, Annabel},
  month = {nov},
  year = {2019},
  doi = {10.5281/zenodo.3529329},
  version ={0.0.1},
  publisher={Zenodo},
  url = {http://doi.org/10.5281/zenodo.3529329}
}

```

### Figures

These graphs were produced by make_figures.R

![Span Size of Participants](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Participant_SpanSize.png)
![Correct Recall across Set Size](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/SetSize_RecallCorr.png)
![Correct Processing across Set Size](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/SetSize_ProcessingCorr.png)
![Processing RT across Set Size](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/SetSize_ProcessingRT.png)
![DistractorsRTVSCorrect](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Distractor_RTvsCorrect.png)
![Distractors](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Distractors.png)

## Resources

Here are some other resources that may be helpful! 

- Follow PsychoPy updates [here](https://github.com/psychopy/psychopy)
- Well-documented memory tasks
  - [Verbal working memory](https://github.com/janakl4us/workingmemory)
  - [Py-Span-Task](https://github.com/tmalsburg/py-span-task)
  - [Digit Span](https://github.com/expfactory-experiments/digit-span)
  - [N Back](https://github.com/elayden/N-Back-for-Matlab)
  
