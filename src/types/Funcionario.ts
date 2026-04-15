import Roles from "./Roles";

type Funcionario = {
    uid?: string;
    nome: string; // ex.: "João da Silva"
    cpf: string; // padrão "000.000.000-00"
    dataNascimento: string; // padrão "dd/mm/aaaa"
    telefone: string; // ex.: "(11) 99999-9999"
    email: string; // ex.: [EMAIL_ADDRESS]"
    endereco: string; // ex.: "Rua Exemplo, 123 - Centro - Cidade - Estado - CEP"
    perfil: string | Roles; // ex.: "Administrador", "Vendedor", "Cliente"
    createdAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedBy: string; // uuid
    createdBy: string; // uuid
}

export default Funcionario;