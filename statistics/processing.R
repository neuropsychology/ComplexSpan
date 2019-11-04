# This function is made to process each participant's (already preprocessed) data from the psychopy experiment
#
# Dependencies
# library(tidyverse)
# library(dplyr)
#
# Example
# path <- "./data/pilot_2.csv"

process_WM <- function(path){
  data <- preprocess_WM(path)

  # Split task type
  Simple_Task <- dplyr::filter(data, Task == "Simple")
  Complex_Task <- dplyr::filter(data, Task == "Complex")

  # Adjusted Scores
  Adjust_SS <- sum(Simple_Task$Correct[which(Simple_Task$Set_Size == max(Simple_Task$Set_Size))])/length(Simple_Task$Correct[which(Simple_Task$Set_Size == max(Simple_Task$Set_Size))])
  Adjust_CS <- sum(Complex_Task$Correct[which(Complex_Task$Set_Size == max(Complex_Task$Set_Size))])/length(Complex_Task$Correct[which(Complex_Task$Set_Size == max(Complex_Task$Set_Size))])

  ### Table of Scores
  # Span Scores per Participant
  Between_Participant <- dplyr::mutate(data,
                                       Simple_Span = max(Simple_Task$Set_Size) - 1,
                                       Adjusted_SS = Simple_Span + Adjust_SS,
                                       Complex_Span = max(Complex_Task$Set_Size) - 1,
                                       Adjusted_CS = Complex_Span + Adjust_CS,
                                       Mean_RT = mean(Distractor_RT, na.rm = TRUE))
  Between_Participant <- dplyr::select(Between_Participant, Participant, Simple_Span, Adjusted_SS, Complex_Span, Adjusted_CS, Mean_RT)
  Between_Participant <- unique(Between_Participant)
  Between_Participant$Mean_RT <- round(Between_Participant$Mean_RT, 2)

  # Change in proportion of Correct Recall, Correct Processing, and Mean RT as set size increases
  Within_Participant <- dplyr::summarize(dplyr::group_by(data, Participant, Task, Set_Size),
                                         Recall_Correct = sum(Correct, na.rm = TRUE)/length(Correct),
  Mean_RT = mean(Distractor_RT, na.rm = TRUE),
  Distractor_Correct = sum(Distractor_Correct, na.rm = TRUE)/length(Distractor_Correct))
  Within_Participant$Distractor_Correct <- ifelse(Within_Participant$Mean_RT == "NaN", "NaN", Within_Participant$Distractor_Correct)
  Within_Participant$Distractor_Correct <- round(as.numeric(Within_Participant$Distractor_Correct), 2)
  Within_Participant$Mean_RT <- round(Within_Participant$Mean_RT, 2)
  Within_Participant$Recall_Correct <- round(Within_Participant$Recall_Correct, 2)

  # Mean RT and Proportion Correct per Distractor
  Distractors <- dplyr::summarize(dplyr::group_by(Complex_Task, Distractor),
                               Mean_RT = mean(Distractor_RT, na.rm = TRUE),
                               Distractor_Correct = sum(Distractor_Correct, na.rm = TRUE)/length(Distractor_Correct))
  Distractors$Mean_RT <- round(Distractors$Mean_RT, 2)
  Distractors$Distractor_Correct <- round(Distractors$Distractor_Correct, 2)

  return(list(Between_Participant, Within_Participant, Distractors))
  }

