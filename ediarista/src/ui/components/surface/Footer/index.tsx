import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;
`;

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

const FooterTitle = styled((props) => (
  <Typography component="h2" variant="body2" {...props} />
))`
  font-weight: bold;
`;

const AppList = styled("ul")`
  list-style: none;
  padding: 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};

  img {
    width: 120px;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography component="p" variant="body2" sx={{ maxWidth: "400px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisi vel consectetur egestas, nisi nisi aliquet nunc, vitae
            egestas nunc eros eget nisi.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/app-store.png" alt="App store" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/google-play.png" alt="App store" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
