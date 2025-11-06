import { Box } from "@mui/material";
import { LoginWindow } from "../components/LoginWindow";
import { SignUpWindow } from "../components/SignUpWindow";

export const Registration = () => {
  return (
    <Box>
      <LoginWindow></LoginWindow>
      <SignUpWindow></SignUpWindow>
    </Box>
  );
};
