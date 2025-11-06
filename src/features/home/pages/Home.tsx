import { Container } from "@mui/material";
import { TopBar } from "../components/TopBar";
import { HomeTitle } from "../components/HomeTitle";
import { LoginWindow } from "../components/LoginWindow";
import { SignUpWindow } from "../components/SignUpWindow";

export const Home = () => {
  return (
    <Container>
      <TopBar></TopBar>
      <HomeTitle></HomeTitle>
      <LoginWindow></LoginWindow>
      <SignUpWindow></SignUpWindow>
    </Container>
  );
};
