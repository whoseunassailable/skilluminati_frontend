import React, { useState } from "react";
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
} from "@mui/material";
import { JobAnalyzerTitle } from "../components/JobAnalyzerTitle";
import { JobAnalyzerInputJDField } from "../components/JobAnalyzerInputJDField";
import { TextAndAnalyzeButton } from "../components/TextAndAnalyzeButton";
import { TopSkillsTitle } from "../components/TopSkillsTitle";
import { JDCard } from "../components/JDCard";

const mockAnalysis = {
  roleContext: "Data / Product Analytics",
  topSkills: [
    {
      name: "SQL",
      foundIn: "✔ Found in JD",
      usage: "Used to pull dashboards & reporting",
      importance: "Core",
    },
    {
      name: "Python",
      foundIn: "Found 5x",
      usage: "Used for analytics pulls and automation",
      importance: "High",
    },
    {
      name: "Data visualization / BI",
      foundIn: "Found 5–9x",
      usage: "Used for stakeholder reporting",
      importance: "High",
    },
  ],
  scoring: [
    { skill: "SQL", freq: 12, boost: "High (analytics)", importance: "9.2" },
    { skill: "Python", freq: 5, boost: "Medium", importance: "6.6" },
    {
      skill: "Data Visualization",
      freq: 5,
      boost: "High (stakeholder reporting)",
      importance: "7.3",
    },
    { skill: "A/B Testing", freq: 3, boost: "Medium", importance: "6.9" },
  ],
};

export const JobAnalyzer = () => {
  const [jdText, setJdText] = useState("");

  const handleAnalyze = () => {
    console.log("Analyze JD:", jdText);
  };

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

      <TopSkillsTitle
        count={mockAnalysis.topSkills.length}
        toolsCount={3}
        roleContext={mockAnalysis.roleContext}
      />

      {/* cards without Grid */}
      <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
        {mockAnalysis.topSkills.map((skill) => (
          <Box
            key={skill.name}
            sx={{
              flex: "1 1 250px", // grows, but minimum width ~250
              maxWidth: 360,
            }}
          >
            <JDCard skill={skill} />
          </Box>
        ))}
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
            {mockAnalysis.scoring.map((row) => (
              <TableRow key={row.skill}>
                <TableCell sx={tableCellSx}>{row.skill}</TableCell>
                <TableCell sx={tableCellSx}>{row.freq}</TableCell>
                <TableCell sx={tableCellSx}>{row.boost}</TableCell>
                <TableCell sx={tableCellSx}>{row.importance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box p={2}>
          <Button variant="contained" sx={{ mt: 1 }}>
            Generate learning path from this JD
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

const tableHeaderSx = {
  color: "rgba(255,255,255,0.7)",
  borderBottom: "1px solid rgba(255,255,255,0.04)",
};

const tableCellSx = {
  color: "white",
  borderBottom: "1px solid rgba(255,255,255,0.02)",
};
