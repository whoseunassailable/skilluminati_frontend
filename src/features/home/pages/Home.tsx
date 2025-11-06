import { Container } from "@mui/material";
import { TopBar } from "../components/TopBar";
import { HomeTitle } from "../components/HomeTitle";
import { LoginWindow } from "../../registration/components/LoginWindow";
import { SignUpWindow } from "../../registration/components/SignUpWindow";

export const Home = () => {
  return (
    <Container>
      <TopBar></TopBar>
      <HomeTitle></HomeTitle>
      <Registration></Registration>
    </Container>
  );
};
