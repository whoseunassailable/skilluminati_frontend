import { Box, Typography } from "@mui/material";
import { JobProgressTrackerTitle } from "../components/JobProgressTrackerTitle";
import { SkillSetBoxes } from "../components/SkillSetBoxes";
import { JobProgressTrackerSubTitle } from "../components/JobProgressTrackerSubTitle";

export const JobProgressTracker = () => {
  return (
    <Box>
      <JobProgressTrackerTitle></JobProgressTrackerTitle>
      <JobProgressTrackerSubTitle></JobProgressTrackerSubTitle>
      <hr />
      <Typography></Typography>
      <ProgressDonePercent></ProgressDonePercent>
      <ProgressIndicator></ProgressIndicator>
      <hr />
      <NeededLearningSkillset></NeededLearningSkillset>
      <SkillSetBoxes></SkillSetBoxes>
    </Box>
  );
};
