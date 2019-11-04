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

Our goal is to build a **short, single task** that measures working memory capacity. We aimed to move away from the use of large-number-trials, 
multiple span tasks to reduce proactive interference throughout successive tasks, as this can significantly compromise the accurate assessment
of working memory capacity.

### Task Components

This is a Psychopy implementation of a composite complex span task adapted from Gonthier et al. (2015). It comprises of 4 components:

- **Simple span**: consonants to be remembered
  - Consonants to remember
  - Set size increases after 2 correct answers in a set size
  - Simple span determined as set size attained after 3 incorrect answers

- **Processing**: open-ended arithmetic operations to respond to
  - All correct answers are one-digit
  - Feedback provided with each processing trial
  - Processing block to repeat if cumulative score attained < 65%

- **Complex span practice**
  - Consonant presented after each correctly-answered arithmetic operation (if incorrectly answered, a new arithmetic operation is presented)
  - Set size of 2 only
  - Feedback provided with each processing trial and each recall trial
  - Block ends after 3 consecutive correct recall

- **Complex span**
  - Consonant presented after each correctly-answered arithmetic operation (if incorrectly answered, a new arithmetic operation is presented)
  - No feedback provided
  - Start with set size of 2; set size increases by 1 with each correct recall
  - Block ends after 3 consecutive wrong recall

### Pre-processing

The R code provided (preprocessing.R) only preprocesses the simple span and complex span components.

![Correct Proportion of Distractors](https://github.com/neuropsychology/ComplexSpan/blob/master/statistics/figures/Distractor_Correct.png)

