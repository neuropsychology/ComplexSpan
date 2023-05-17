# This function is made to process each participant's (already preprocessed) data from the psychopy experiment
#
# Dependencies
# library(tidyverse)
# library(dplyr)
#
# Example
# path <- "./data/S1.csv"

process_WM <- function(path, skip_complexspan=""){
  data <- preprocess_WM(path, skip_complexspan=skip_complexspan)
  
  # Split task type
  Simple_Task <- dplyr::filter(data, Task == "Simple")
  Complex_Task <- dplyr::filter(data, Task == "Complex")
  
  # Adjusted Scores
  Adjust_SS <- sum(Simple_Task$Correct[which(Simple_Task$Set_Size == max(Simple_Task$Set_Size))])/length(Simple_Task$Correct[which(Simple_Task$Set_Size == max(Simple_Task$Set_Size))]) # proportion of correct recalls at last set size
  Adjust_CS <- sum(Complex_Task$Correct[which(Complex_Task$Set_Size == max(Complex_Task$Set_Size))])/length(Complex_Task$Correct[which(Complex_Task$Set_Size == max(Complex_Task$Set_Size))])
  
  # All Types of Scores per Participant
  Complex_Task_noDistractors <- Complex_Task %>%
    select(-starts_with("Distractor")) %>% 
    distinct()
  Simple_PCU <- sum(Simple_Task$Partial_Unit_Correct) / max(Simple_Task$Trial)
  Complex_PCU <- sum(Complex_Task_noDistractors$Partial_Unit_Correct) / max(Complex_Task_noDistractors$Trial)
  Simple_ANU <- sum(Simple_Task$Correct) / max(Simple_Task$Trial)
  Complex_ANU <- sum(Complex_Task_noDistractors$Correct) /  max(Complex_Task_noDistractors$Trial)
  Simple_PCL <- sum(Simple_Task$Partial_Load_Correct) / sum(Simple_Task$Set_Size)
  Complex_PCL <- sum(Complex_Task_noDistractors$Partial_Load_Correct) / sum(Complex_Task_noDistractors$Set_Size)
  Simple_ANL <- sum(Simple_Task$ANL_Load_Correct) / sum(Simple_Task$Set_Size)
  Complex_ANL <- sum(Complex_Task_noDistractors$ANL_Load_Correct) / sum(Complex_Task_noDistractors$Set_Size)
  
  ### 3 Tables of Scores
  # Scores per Participant
  Between_Participant <- dplyr::mutate(data,
                                       Span_Simple = max(Simple_Task$Set_Size) - 1,
                                       Span_Simple_Adjusted = Span_Simple + Adjust_SS,
                                       PCU_Simple = Simple_PCU,
                                       ANU_Simple = Simple_ANU,
                                       PCL_Simple = Simple_PCL,
                                       ANL_Simple = Simple_ANL,
                                       Span_Complex = max(Complex_Task$Set_Size) - 1,
                                       Span_Complex_Adjusted = Span_Complex + Adjust_CS,
                                       PCU_Complex = Complex_PCU,
                                       ANU_Complex = Complex_ANU,
                                       PCL_Complex = Complex_PCL,
                                       ANL_Complex = Complex_ANL,
                                       RT_Mean = mean(Distractor_RT, na.rm = TRUE)) %>%
    dplyr::select(Participant, Span_Simple, Span_Simple_Adjusted, Span_Complex, Span_Complex_Adjusted, RT_Mean,
                  PCU_Simple, ANU_Simple, PCL_Simple, ANL_Simple,
                  PCU_Complex, ANU_Complex, PCL_Complex, ANL_Complex) %>%
    unique()
  
  # Change in proportion of Correct Recall, Correct Processing, and Mean RT as set size increases
  Within_Participant <- data %>%
    dplyr::group_by(Participant, Task, Set_Size) %>%
    dplyr::summarize(
      Recall_Correct = sum(Correct, na.rm = TRUE)/length(Correct),
      RT_Mean = mean(Distractor_RT, na.rm = TRUE),
      Distractor_Correct = sum(Distractor_Correct, na.rm = TRUE)/length(Distractor_Correct)) %>%
    dplyr::ungroup()
  
  Within_Participant$Distractor_Correct <- ifelse(Within_Participant$RT_Mean == "NaN", "NaN", Within_Participant$Distractor_Correct)
  Within_Participant$Distractor_Correct <- as.numeric(Within_Participant$Distractor_Correct)
  
  
  # Mean RT and Proportion Correct per Distractor
  Distractors <- Complex_Task %>%
    dplyr::group_by(Participant, Distractor) %>%
    dplyr::summarize(RT_Mean = mean(Distractor_RT, na.rm = TRUE),
                     Distractor_Correct = sum(Distractor_Correct, na.rm = TRUE)/length(Distractor_Correct)) %>%
    dplyr::ungroup()
  
  return(list(between = Between_Participant, within = Within_Participant, distractors = Distractors))
}



