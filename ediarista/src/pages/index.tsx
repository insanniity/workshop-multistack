import type { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name="Cleydson"
        description="Oi, eu sou o Cleydson. Sou um profissional de saúde que trabalha como médico."
        picture="https://github.com/insanniity.png"
        rating={3}
      />
    </div>
  );
};

export default Home;
