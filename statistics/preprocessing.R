# This function is made to preprocess the CSV file created by the psychopy experiment.
#
# Dependencies
# library(tidyverse)
#
# Example
# path <- "./data/pilot_2.csv"
preprocess_WM <- function(path){
  cleaned <- .clean_data(read.csv(path))
  SimpleSpan <- .clean_SimpleSpan(cleaned)
  ComplexSpan <- .clean_ComplexSpan(cleaned)

  SimpleSpan[names(ComplexSpan)[!names(ComplexSpan) %in% names(SimpleSpan)]] <- NA
  out <- rbind(SimpleSpan, ComplexSpan)
  out <- dplyr::arrange(out, desc(Task), Trial, Correct)
  row.names(out) <- NULL
  out[c("Participant", "Task", "Set_Size", "Trial", "Stimulus", "Response", "Correct", "Distractor", "Distractor_Correct", "Distractor_RT")]
}

# Utility functions -------------------------------------------------------


.clean_data <- function(data){
  data <- dplyr::select(data, Participant = participant, Problem, Operation_answer, digit_answer, complex_recall_corr, complex_recall_rt = key_resp_8.rt, complex_proc_corr = key_resp_7.corr, complex_proc_rt = key_resp_7.rt, complex_prac_corr, key_resp_9.rt, key_resp_11.corr, key_resp_11.rt, key_resp.corr, key_resp.rt, processing_score, simple_recall_corr, simple_recall_rt = key_resp_5.rt, simple_recall, complex_recall, simple_recall_corrkeys, complex_answer = complex_recall_corrkeys)


  data$simple_setsize <- nchar(as.character(data$simple_recall_corrkeys))
  data$complex_setsize <- nchar(as.character(data$complex_answer))
  data$simple_recall_corrkeys <- as.character(data$simple_recall_corrkeys)
  data$simple_recall <- as.character(data$simple_recall)
  data$complex_answer <- as.character(data$complex_answer)
  data$complex_recall <- as.character(data$complex_recall)
  data$Participant <- as.character(data$Participant)

  data <- dplyr::mutate_if(data, is.character, stringr::str_to_upper)
  data
}

.clean_SimpleSpan <- function(data){
  Simple_Span <- dplyr::select(data, Participant, Stimulus = simple_recall_corrkeys, Response = simple_recall, Correct = simple_recall_corr, Set_Size = simple_setsize)
  Simple_Span <- Simple_Span[!is.na(Simple_Span$Correct), ]

  Simple_Span <- dplyr::mutate(Simple_Span,
                               Task = "Simple",
                               Trial = 1:nrow(Simple_Span)
  )
  Simple_Span
}

.clean_ComplexSpan <- function(data){

  Complex_Span <- dplyr::select(data, Participant, Distractor = Problem, Operation_answer, digit_answer, Correct = complex_recall_corr, Response = complex_recall, Distractor_Correct = complex_proc_corr, Distractor_RT = complex_proc_rt, Stimulus = complex_answer, Set_Size = complex_setsize)


  Complex_Span <- Complex_Span[(!is.na(Complex_Span$Distractor_RT) & Complex_Span$Distractor_RT != "")| (!is.na(Complex_Span$Response) & Complex_Span$Response != ""), ] # remove irrelevant NA rows

  Complex_Span$Distractor_RT <- stringr::str_remove(Complex_Span$Distractor_RT, "\\]")
  Complex_Span$Distractor_RT <- stringr::str_remove(Complex_Span$Distractor_RT, "\\[")
  Complex_Span$Distractor_RT <- as.numeric(Complex_Span$Distractor_RT)

  for(var in c("Stimulus", "Response", "Distractor_RT", "Distractor")){
    Complex_Span[[var]] <- as.character(Complex_Span[[var]])
    Complex_Span[[var]] <- ifelse(Complex_Span[[var]] == "", NA, Complex_Span[[var]])
  }
  Complex_Span$Set_Size <- ifelse(Complex_Span$Set_Size == 0, NA, Complex_Span$Set_Size)

  Complex_Span <- tidyr::fill(Complex_Span, Correct, Response, Stimulus, Set_Size, .direction = c("up"))
  Complex_Span <- Complex_Span[!is.na(Complex_Span$Distractor_RT),]
  Complex_Span$Distractor_Correct = ifelse(Complex_Span$Operation_answer == Complex_Span$digit_answer, 1, 0)

  Complex_Span$Distractor_RT <- as.numeric(Complex_Span$Distractor_RT)
  Complex_Span$Task <- "Complex"
  Complex_Span$Operation_answer <- NULL
  Complex_Span$digit_answer <- NULL

  N <- 1:length(unique(Complex_Span$Stimulus)) # append trial number
  Duplicates <- as.data.frame(table(Complex_Span$Stimulus))
  Complex_Span$Trial <- rep(N, sort(Duplicates$Freq))
  Complex_Span
}

