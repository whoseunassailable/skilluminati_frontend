import { Box, Typography } from "@mui/material";
import { LearningPathTitle } from "../components/LearningPathTitle";
import { ParticularSkillSetContainer } from "../components/ParticularSkillSetContainer";
import { SkillsetProgressIndicator } from "../components/SkillsetProgressIndicator";
import { LearningPathSubTitle } from "../components/LearningPathSubTitle";

export const LearningPath = () => {
  return (
    <Box>
      <LearningPathTitle></LearningPathTitle>
      <LearningPathSubTitle></LearningPathSubTitle>
      <hr />
      <Typography></Typography>
      <SkillsetProgressIndicator></SkillsetProgressIndicator>
      <ParticularSkillSetContainer></ParticularSkillSetContainer>
    </Box>
  );
};
