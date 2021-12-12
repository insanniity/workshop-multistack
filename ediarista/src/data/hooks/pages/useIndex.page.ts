import { User } from "data/@types/User";
import { ApiService } from "data/services/apiService";
import { ValidationService } from "data/services/validationService";
import { useState, useMemo } from "react";

export const useIndex = () => {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");
  const [buscaFeita, setBuscaFeita] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [diaristas, setDiaristas] = useState<User[]>([]);
  const [diaristasRestantes, setDiaristasRestantes] = useState(0);

  const cepValido = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);

  const buscarDiaristas = async (cep: string) => {
    setBuscaFeita(false);
    setCarregando(true);
    setError("");
    try {
      const { data } = await ApiService.get<{
        diaristas: User[];
        quantidade_diaristas: number;
      }>(`/diaristas/buscar?cep=${cep.replace(/\D/g, "")}`);
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setError("CEP não encontrado");
      setCarregando(false);
    }
  };

  return {
    cep,
    setCep,
    cepValido,
    buscarDiaristas,
    buscaFeita,
    error,
    carregando,
    diaristas,
    diaristasRestantes,
  };
};
