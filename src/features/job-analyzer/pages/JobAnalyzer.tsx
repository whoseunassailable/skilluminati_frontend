// src/pages/JobAnalyzer.tsx

import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
  Button,
  Skeleton,
} from "@mui/material";
import { JobAnalyzerTitle } from "../components/JobAnalyzerTitle";
import { JobAnalyzerInputJDField } from "../components/JobAnalyzerInputJDField";
import { TextAndAnalyzeButton } from "../components/TextAndAnalyzeButton";
import { TopSkillsTitle } from "../components/TopSkillsTitle";
import { JDCard } from "../components/JDCard";
import { useJobAnalyzer } from "../viewmodels/useJobAnalyzer";

const tableHeaderSx = {
  color: "rgba(255,255,255,0.7)",
  borderBottom: "1px solid rgba(255,255,255,0.04)",
};

const tableCellSx = {
  color: "white",
  borderBottom: "1px solid rgba(255,255,255,0.02)",
};

export const JobAnalyzer = () => {
  const { jdText, setJdText, analysis, isLoading, error, handleAnalyze } =
    useJobAnalyzer();

  const hasAnalysis =
    analysis.topSkills.length > 0 || analysis.scoring.length > 0;

  return (
    <Box
      display="flex"
      flexDirection="column"
      m={"4vw"}
      gap={3}
      sx={{ color: "white" }}
    >
      <JobAnalyzerTitle />

      <JobAnalyzerInputJDField value={jdText} onChange={setJdText} />

      <TextAndAnalyzeButton onAnalyze={handleAnalyze} />

      {/* feedback / error */}
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}

      {/* Top skills section */}
      <TopSkillsTitle
        count={analysis.topSkills.length}
        toolsCount={3}
        roleContext={analysis.roleContext || "—"}
      />

      {/* cards: show placeholder before analysis / while loading */}
      <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
        {isLoading ? (
          // loading placeholders
          Array.from({ length: 3 }).map((_, idx) => (
            <Box
              key={idx}
              sx={{
                flex: "1 1 250px",
                maxWidth: 360,
              }}
            >
              <Paper
                sx={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Skeleton
                  variant="text"
                  width="60%"
                  sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
                />
                <Skeleton
                  variant="text"
                  width="80%"
                  sx={{ bgcolor: "rgba(255,255,255,0.05)" }}
                />
                <Skeleton
                  variant="text"
                  width="40%"
                  sx={{ bgcolor: "rgba(255,255,255,0.03)" }}
                />
              </Paper>
            </Box>
          ))
        ) : hasAnalysis ? (
          analysis.topSkills.map((skill) => (
            <Box
              key={skill.name}
              sx={{
                flex: "1 1 250px",
                maxWidth: 360,
              }}
            >
              <JDCard skill={skill} />
            </Box>
          ))
        ) : (
          // empty state
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Paste a JD and click **Analyze** to see the top skills.
          </Typography>
        )}
      </Box>

      {/* scoring breakdown */}
      <Paper
        sx={{
          mt: 2,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 2,
          overflow: "hidden",
        }}
        elevation={0}
      >
        <Box p={2}>
          <Typography variant="h6" fontWeight={600}>
            Scoring breakdown
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6, mb: 2 }}>
            We combine JD frequency with role context to get importance.
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.05)" }} />

        {isLoading ? (
          <Box p={2}>
            <Skeleton
              variant="rectangular"
              height={120}
              sx={{ bgcolor: "rgba(255,255,255,0.02)" }}
            />
          </Box>
        ) : analysis.scoring.length > 0 ? (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={tableHeaderSx}>Skill / Tool</TableCell>
                <TableCell sx={tableHeaderSx}>JD frequency</TableCell>
                <TableCell sx={tableHeaderSx}>Role context boost</TableCell>
                <TableCell sx={tableHeaderSx}>Importance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {analysis.scoring.map((row) => (
                <TableRow key={row.skill}>
                  <TableCell sx={tableCellSx}>{row.skill}</TableCell>
                  <TableCell sx={tableCellSx}>{row.freq}</TableCell>
                  <TableCell sx={tableCellSx}>{row.boost}</TableCell>
                  <TableCell sx={tableCellSx}>{row.importance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Box p={2}>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              No scoring yet. Paste a JD and analyze to see what matters.
            </Typography>
          </Box>
        )}

        <Box p={2}>
          <Button
            variant="contained"
            sx={{ mt: 1 }}
            disabled={!hasAnalysis || isLoading}
          >
            Generate learning path from this JD
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
