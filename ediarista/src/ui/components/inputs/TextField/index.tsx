import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${(props) => props.theme.palette.grey[50]};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.grey[100]};
  }
`;

export default TextFieldStyled;
