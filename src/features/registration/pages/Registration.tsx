import { Box } from "@mui/material";
import { LoginWindow } from "../components/LoginWindow";
import { SignUpWindow } from "../components/SignUpWindow";
import { Home } from "../../home/pages/Home";

interface RegistrationProps {
  loggedIn: boolean;
}

export const Registration = ({ loggedIn }: RegistrationProps) => {
  return (
    <>
      {loggedIn === true ? (
        <Home></Home>
      ) : (
        <Box>
          <LoginWindow></LoginWindow>
          <SignUpWindow></SignUpWindow>
        </Box>
      )}
    </>
  );
};
