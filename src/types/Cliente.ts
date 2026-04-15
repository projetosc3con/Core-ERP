type Cliente = {
    id?: string; // uuid
    nome: string; // ex.: "João da Silva"
    cpf: string; // padrão "000.000.000-00"
    dataNascimento: string; // padrão "dd/mm/aaaa"
    telefone: string; // ex.: "(11) 99999-9999"
    email: string; // ex.: [EMAIL_ADDRESS]"
    endereco: string; // ex.: "Rua Exemplo, 123 - Centro - Cidade - Estado - CEP"
    observacoes?: string | null; // ex.: "Cliente gosta de atendimento personalizado"
    preferencias?: string | null; // ex.: "Cliente prefere produtos naturais"
}

export default Cliente;