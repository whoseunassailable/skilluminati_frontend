import { Box, Button, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box display={"grid"} gridTemplateAreas={`"navbar title sub-title "`}>
      <Button variant="contained" sx={{ mt: 2 }}>
        Analyze New Job
      </Button>
      <Typography>
        Hi, Rohan! <br /> Ready to land you next role?
      </Typography>
      <Typography>
        Let's check your progress and skills for your target job
      </Typography>
      <Box
        display={"grid"}
        gridTemplateColumns={"1fr 1fr "}
        gridTemplateAreas={`"continue-learning improve-your-skills"`}
      >
        <Typography gridArea={"coninue-learning"}>Continue learning</Typography>
        <Typography gridArea={"improve-your-skills"}>
          Continue learning
        </Typography>
      </Box>
    </Box>
  );
};
