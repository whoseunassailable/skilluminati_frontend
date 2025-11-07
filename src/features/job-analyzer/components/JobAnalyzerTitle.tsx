import { Box, Typography } from "@mui/material";

export const JobAnalyzerTitle = () => {
  return (
    <Box mb={1}>
      <Typography variant="h4" fontWeight={700}>
        Job Analyzer
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.6, mt: 0.5 }}>
        Paste a JD or job link, we’ll tell you what actually matters.
      </Typography>
    </Box>
  );
};
