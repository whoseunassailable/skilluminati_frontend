import { Box, Chip, Typography } from "@mui/material";

type JDCardProps = {
  skill: {
    name: string;
    foundIn: string;
    usage: string;
    importance: string;
  };
};

export const JDCard = ({ skill }: JDCardProps) => {
  return (
    <Box
      sx={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.04)",
        borderRadius: 2,
        p: 2,
        height: "100%",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        gap={1}
      >
        <Typography fontWeight={600}>{skill.name}</Typography>
        <Chip
          label={skill.importance}
          size="small"
          sx={{
            bgcolor: "rgba(255,255,255,0.08)",
            color: "white",
          }}
        />
      </Box>

      <Typography
        variant="caption"
        sx={{ opacity: 0.6, display: "block", mt: 1 }}
      >
        {skill.foundIn}
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        {skill.usage}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mt: 1.5,
          fontSize: 12,
          color: "primary.main",
          cursor: "pointer",
        }}
      >
        See skill context →
      </Typography>
    </Box>
  );
};
