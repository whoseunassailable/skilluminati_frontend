import { Box, Button, Typography } from "@mui/material";

type Props = {
  onAnalyze: () => void;
};

export const TextAndAnalyzeButton = ({ onAnalyze }: Props) => {
  return (
    <Box mt={1}>
      <Typography variant="body2" sx={{ opacity: 0.7 }}>
        We look at responsibilities, requirements, and tool mentions.
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={onAnalyze}>
        Analyze job
      </Button>
    </Box>
  );
};
