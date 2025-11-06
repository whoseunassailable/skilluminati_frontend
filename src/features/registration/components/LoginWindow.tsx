import { Box, Button, TextField, Typography } from "@mui/material";
import { Constants } from "../../../constants/constants";

export const LoginWindow = () => {
  return (
    <Box gridArea="contact-form" m="4vw">
      {Constants.LOGIN_INPUT_ATTRIBUTES.map((fieldName) => (
        <InputTextFields key={fieldName} name={fieldName} />
      ))}
      <Button variant="contained" sx={{ mt: 2 }}>
        Send
      </Button>
    </Box>
  );
};

interface InputTextFieldsProps {
  name: string;
}

export const InputTextFields = ({ name }: InputTextFieldsProps) => {
  return (
    <Box gridArea={"contact-form"}>
      <Typography height={"2.5vh"}>{name}</Typography>
      <TextField></TextField>
    </Box>
  );
};
