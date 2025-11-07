import { Box, TextField } from "@mui/material";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export const JobAnalyzerInputJDField = ({ value, onChange }: Props) => {
  return (
    <Box>
      <TextField
        multiline
        minRows={5}
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the full job description here..."
        sx={{
          "& .MuiInputBase-root": {
            background: "rgba(255,255,255,0.02)",
          },
        }}
      />
    </Box>
  );
};
