import {
  Button,
  Typography,
  Paper,
  Container,
  CircularProgress,
} from "@mui/material";
import type { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment";
import TextFieldMask from "ui/components/inputs/TextFieldMask";
import { styled } from "@mui/material/styles";
import { useIndex } from "data/hooks/pages/useIndex.page";

const FormElementContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

const ProfissionaisPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(7)};
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;

const ProfissionaisContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
    > :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarDiaristas,
    buscaFeita,
    error,
    carregando,
    diaristas,
    diaristasRestantes,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementContainer>
          <TextFieldMask
            label="Digite seu CEP"
            fullWidth
            mask="99.999-999"
            variant="outlined"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          {error && (
            <Typography variant="h6" color="error">
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "200px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarDiaristas(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementContainer>
        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista, index) => (
                  <UserInformation
                    key={index}
                    name={diarista.nome_completo}
                    description={diarista.cidade}
                    picture={diarista.foto_usuario}
                    rating={diarista.reputacao}
                  />
                ))}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography variant="h6" sx={{ mt: 5 }}>
                    E mais {diaristasRestantes} diarista(s) encontrado(s)
                  </Typography>
                )}
                <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography variant="h6" color="textPrimary" align="center">
              Nenhum profissional encontrado
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
