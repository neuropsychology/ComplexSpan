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



Freq <- as.data.frame(table(data_distractors$Distractor))$Freq
data_distractors <- data_distractors %>%
  dplyr::group_by(Distractor) %>%
  dplyr::summarize(RT_Average = mean(RT_Mean),
                   RT_Min = min(RT_Mean),
                   RT_Max = max(RT_Mean),
                   Correct_Average = mean(Distractor_Correct),
                   Correct_Min = min(Distractor_Correct),
                   Correct_Max = max(Distractor_Correct))
data_distractors <- cbind(data_distractors, Freq)
colnames(data_distractors)[8] <- "Occurrences"

### Visualize data

# Max span for each participant
p1 <- data_subject %>%
  dplyr::select(Participant, contains("Span")) %>%
  tidyr::pivot_longer(cols = -Participant, names_to = "Task", values_to = "Span") %>%
  dplyr::mutate(Adjusted = ifelse(str_detect(Task, "_Adjusted"), "Adjusted", "Raw"),
                Task = str_remove_all(Task, "_Adjusted"),
                Task = str_remove_all(Task, "Span_"),
                Adjusted = fct_relevel(Adjusted, "Raw", "Adjusted"),
                Task = fct_relevel(Task, "Simple", "Complex")) %>%
  ggplot(aes(y = Span, fill = Participant, x = Adjusted)) +
  geom_bar(stat = "identity", position = "dodge") +
  labs(x = "Score Type", y =  "Span Size") +
  see::theme_modern() +
  scale_y_continuous(breaks = scales::pretty_breaks()) +
  facet_grid(~Task)
p1





# Correct Proportion Recall, Processing, and Mean RT across Set Size for each participant
p2 <- data_within %>%
  dplyr::mutate(Task = fct_relevel(Task, "Simple", "Complex")) %>%
  ggplot(aes(x = Set_Size, y = Recall_Correct, color = Participant)) +
  geom_line(size = 1) +
  labs(x = "Set Size", y = "Proportion of Correct Recalls") +
  facet_grid(~Task) +
  see::theme_modern()
p2





p3 <- data_within[which(data_within$Task == "Complex"), ] %>%
  ggplot(aes(Set_Size, Distractor_Correct, color = Participant)) +
  geom_line(size = 1) +
  labs(x = "Set Size", y = "Proportion of Correct Processing Trials") +
  see::theme_modern()
p3





p4 <- data_within[which(data_within$Task == "Complex"), ] %>%
  ggplot(aes(x = Set_Size, y = RT_Mean, color = Participant)) +
  geom_line(size = 1) +
  labs(x = "Set Size", y = "Mean RT of Processing Trials") +
  see::theme_modern()
p4



p5 <- data_distractors %>%
  ggplot(aes(x = Correct_Average, RT_Average)) +
  geom_point() +
  geom_smooth(method="lm", se=F) +
  labs(x = "Proportion of Correct Responses", y = "Mean Reaction Time") +
  see::theme_modern()
p5



# Mean RT and Correct Responses per Distractor
p6 <- data_distractors %>%
  dplyr::select(-Occurrences) %>%
  tidyr::pivot_longer(-Distractor) %>%
  mutate(Type = ifelse(str_detect(name, "Correct"), "Correct", "RT"),
         name = str_remove_all(name, "Correct_|RT_")) %>%
  tidyr::pivot_wider(names_from = name, values_from = value) %>%
  ggplot(aes(x = Distractor, y = Average, color = Type)) +
  geom_pointrange(aes(ymin = Min, ymax = Max), size=1) +
  see::scale_color_flat_d(guide = FALSE) +
  ylab("Mean Reaction Time") +
  coord_flip() +
  see::theme_modern() +
  theme(axis.title.y = element_blank()) +
  facet_wrap(~Type, scales = "free_x")
p6




# Save Plots
ggsave("figures/Participant_SpanSize.png", p1, width = 10, height = 8, dpi = 150)
ggsave("figures/SetSize_RecallCorr.png", p2, width = 10, height = 8, dpi = 150)
ggsave("figures/SetSize_ProcessingCorr.png", p3, width = 10, height = 8, dpi = 150)
ggsave("figures/SetSize_ProcessingRT.png", p4, width = 10, height = 8, dpi = 150)
ggsave("figures/Distractor_RTvsCorrect.png", p5, width = 12, height = 8, dpi = 150)
ggsave("figures/Distractors.png", p6, width = 12, height = 8, dpi = 150)

