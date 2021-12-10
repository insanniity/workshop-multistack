import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const SafeEnvironmentContainer = styled("div")`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 12px;
`;

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente 100% seguro
        <i className="twf-lock" />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
