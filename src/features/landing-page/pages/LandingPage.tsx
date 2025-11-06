import Container from "@mui/material/Container";
import { HomeTitle } from "../../home/components/HomeTitle";
import { TopBar } from "../../home/components/TopBar";
import { Registration } from "../../registration/pages/Registration";

export const LandingPage = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "95%", mx: "2vw", justifySelf: "center" }}
    >
      <TopBar />
      <HomeTitle />
      <Registration firstTimeUser={false} />
    </Container>
  );
};
