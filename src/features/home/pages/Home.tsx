import { Container } from "@mui/material";
import { TopBar } from "../components/TopBar";
import { HomeTitle } from "../components/HomeTitle";
import { Registration } from "../../registration/pages/Registration";

export const Home = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "95%", mx: "2vw", justifySelf: "center" }}
    >
      <TopBar />
      <HomeTitle />
      <Registration />
    </Container>
  );
};
