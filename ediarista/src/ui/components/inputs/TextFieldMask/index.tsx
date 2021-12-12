import TextFieldStyled from "ui/components/inputs/TextField";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";

type Props = OutlinedTextFieldProps & {
  mask: string;
  value: string;
};

const TextFieldMask = ({ mask, value, onChange, ...props }: Props) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => <TextFieldStyled {...props} />}
    </InputMask>
  );
};

export default TextFieldMask;
