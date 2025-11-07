import { Box, Typography } from "@mui/material";

type Props = {
  count: number;
  toolsCount: number;
  roleContext: string;
};

export const TopSkillsTitle = ({ count, toolsCount, roleContext }: Props) => {
  return (
    <Box display="flex" alignItems="center" gap={2} mt={3}>
      <Typography variant="h6" fontWeight={600}>
        Top skills & tools
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.6 }}>
        Top skills found: {count} · Tools mentioned: {toolsCount} · Role
        context: {roleContext}
      </Typography>
    </Box>
  );
};
