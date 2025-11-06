import { Box } from "@mui/material";
import { LoginWindow } from "../components/LoginWindow";
import { SignUpWindow } from "../components/SignUpWindow";
import { Home } from "../../home/pages/Home";

interface RegistrationProps {
  firstTimeUser: boolean;
}

export const Registration = ({ firstTimeUser }: RegistrationProps) => {
  return (
    <>
      {firstTimeUser === true ? (
        <Home></Home>
      ) : (
        <Box width={"50vw"} p={"3vw"} sx={{ placeSelf: "center" }}>
          <LoginWindow></LoginWindow>
          <SignUpWindow></SignUpWindow>
        </Box>
      )}
    </>
  );
};
