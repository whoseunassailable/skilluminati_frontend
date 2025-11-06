import { Box, Typography } from "@mui/material";
import { DarkThemeButton } from "../../../common/components/Button";
import { JobAnalyzerTitle } from "../components/JobAnalyzerTitle";
import { JobAnalyzerInputJDField } from "../components/JobAnalyzerInputJDField";
import { JobAnalyzerSubTitle } from "../components/JobAnalyzerSubTitle";
import { TopSkillsTitle } from "../components/TopSkillsTitle";
import { JDCard } from "../components/JDCard";

export const job_analyzer = () => {
  return (
    <Box>
      <JobAnalyzerTitle></JobAnalyzerTitle>
      <JobAnalyzerSubTitle></JobAnalyzerSubTitle>
      <Typography></Typography>
      <JobAnalyzerInputJDField></JobAnalyzerInputJDField>
      <DarkThemeButton></DarkThemeButton>
      <TopSkillsTitle></TopSkillsTitle>
      <JDCard></JDCard>
      <Typography></Typography>
      <DarkThemeButton></DarkThemeButton>
    </Box>
  );
};
